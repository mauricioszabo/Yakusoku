// Copyright (c) Yakusoku contributors.
// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at
// http://mozilla.org/MPL/2.0/.
//
// The native core of Yakusoku.
//
// Two things live here that jank cannot express on its own:
//
//   1. `cell` -- the state machine behind a promise. jank has no `deftype`, so a promise
//      needs a native representation; it reaches jank as an opaque box. A mutex and a
//      condition variable give us atomic settling and, crucially, a *timeout-capable*
//      blocking wait, which jank's own `deref` does not support (it stubs the 3-arity out).
//
//   2. `pool` -- a FastQueue thread pool with work stealing turned on, whose workers each
//      own a deque and steal from one another. We do not write a scheduler; FastQueue has
//      one. The timer wheel above it is ours, since FastQueue schedules work but has no
//      clock.
//
//      FastQueue itself is not visible from this file: it sits behind three plain
//      declarations in yakusoku_pool.hpp, reached through a `void *` and a function pointer.
//      Everything jank-shaped stays here.
//
// Two rules govern every allocation below, both imposed by BDWGC:
//
//   * BDWGC scans GC memory, thread stacks and roots -- never the malloc heap. A jank
//     `object_ref` sitting in a malloc'd handler inside the queue would be invisible to
//     the collector and could be freed while queued. So anything that carries an
//     `object_ref` across the queue boundary is allocated with GC_MALLOC_UNCOLLECTABLE,
//     which is both a root and traced, and is freed once the handler has run.
//
//   * Worker threads are FastQueue's, not jank's. Work stealing needs per-worker deques
//     bound to worker identity, so a stealing pool has to own its threads -- which is the
//     one thing Asio did not require. `ensure_gc_registered` below is what makes that safe:
//     each worker registers its stack with BDWGC the first time it runs a task.

#pragma once

#include <chrono>
#include <functional>
#include <cstdlib>
#include <memory>
#include <atomic>
#include <condition_variable>
#include <mutex>
#include <new>
#include <thread>
#include <vector>

#include <queue>

#include "yakusoku_pool.hpp"

#include <gc/gc.h>
#include <jank/gc.hpp>
#include <jank/runtime/core/make_box.hpp>
#include <jank/runtime/object.hpp>
#include <jank/runtime/obj/opaque_box.hpp>
#include <jank/runtime/oref.hpp>
#include <jank/runtime/rtti.hpp>

namespace yakusoku
{
  using jank::runtime::object_ref;

  /* Kept in sync with the keyword mapping in yakusoku.impl. */
  constexpr int status_pending{ 0 };
  constexpr int status_resolved{ 1 };
  constexpr int status_rejected{ 2 };
  constexpr int status_cancelled{ 3 };

  using callback_vector = std::vector<object_ref, gc_allocator<object_ref>>;

  /* Runs a jank thunk, swallowing jank-level throws so that a misbehaving callback can
     never escape into a pool worker and take the pool down with it. Callbacks installed
     by yakusoku.core always route their own errors into the dependent promise, so a throw
     reaching here is a bug in a user callback, not a control-flow path. */
  /* ------------------------------------------------------ opaque handles ---- */

  /* Every native object below reaches jank as an opaque box, and both the boxing and the
     unboxing happen here rather than through jank's `cpp/box` and `cpp/unbox`.

     That is not a preference. jank's codegen for `cpp/box` emits a `_jank_eval_str` per
     call site, to attach source metadata -- it is marked TODO in jank's own source -- so
     every box re-enters the compiler at runtime. Two threads boxing at once corrupt it:
     four threads creating promises segfault inside clang::Sema within a few thousand
     calls, and Yakusoku's whole point is that promises are created on worker threads.
     Ordinary interop calls carry no such eval and are safe, so the box is built by one.
     It is also two orders of magnitude faster.

     The canonical type is deliberately empty. jank's unbox checks it only when it is
     non-empty, and these boxes never leave Yakusoku's own handle maps, where the key
     already says what is inside. */
  template <typename T>
  inline object_ref box_handle(T * const p)
  {
    return jank::runtime::make_box<jank::runtime::obj::opaque_box>(p, "").erase();
  }

  template <typename T>
  inline T *unbox_handle(object_ref const handle)
  {
    void * const data{ jank::runtime::try_object<jank::runtime::obj::opaque_box>(handle)->data };
    return static_cast<T *>(data);
  }

  inline void safe_call(object_ref const fn)
  {
    try
    {
      fn.call();
    }
    catch(object_ref const &)
    {
    }
    catch(...)
    {
    }
  }

  /* A hash of the calling thread's id. std::thread::id has no conversion to a jank
     object, and a number is all the callers (tests, mostly) need in order to tell one
     thread from another. */
  inline long thread_id()
  {
    return static_cast<long>(std::hash<std::thread::id>{}(std::this_thread::get_id()));
  }

  /* Reported core count, for sizing the default pool. Returns 0 when the platform
     cannot say, which the jank side turns into a sensible default. */
  inline int hardware_threads()
  {
    return static_cast<int>(std::thread::hardware_concurrency());
  }

  /* ---------------------------------------------------------------- cells ---- */

  struct cell : gc
  {
    std::mutex mutex;
    std::condition_variable settled;
    int status{ status_pending };
    object_ref value;
    callback_vector callbacks;
  };

  inline object_ref cell_create()
  {
    return box_handle(new cell{});
  }

  inline int cell_status(object_ref const handle)
  {
    auto * const c{ unbox_handle<cell>(handle) };
    std::lock_guard<std::mutex> const lock{ c->mutex };
    return c->status;
  }

  inline object_ref cell_value(object_ref const handle)
  {
    auto * const c{ unbox_handle<cell>(handle) };
    std::lock_guard<std::mutex> const lock{ c->mutex };
    return c->value;
  }

  /* Registers a zero-arity callback. Returns true if the cell is *already* settled, in
     which case nothing was registered and the caller must run the callback itself. That
     return value is what closes the attach/settle race: the decision is made under the
     same lock that settling takes. */
  inline bool cell_attach(object_ref const handle, object_ref const cb)
  {
    auto * const c{ unbox_handle<cell>(handle) };
    std::lock_guard<std::mutex> const lock{ c->mutex };
    if(c->status != status_pending)
    {
      return true;
    }
    c->callbacks.push_back(cb);
    return false;
  }

  /* Moves the cell out of `pending` and runs every registered callback. Returns false if
     the cell was already settled, so only one caller ever wins and callbacks run exactly
     once. Callbacks run outside the lock. */
  inline bool cell_settle(object_ref const handle, int const status, object_ref const value)
  {
    auto * const c{ unbox_handle<cell>(handle) };
    callback_vector pending;
    {
      std::lock_guard<std::mutex> const lock{ c->mutex };
      if(c->status != status_pending)
      {
        return false;
      }
      c->status = status;
      c->value = value;
      pending.swap(c->callbacks);
    }

    c->settled.notify_all();

    for(auto const &cb : pending)
    {
      safe_call(cb);
    }

    return true;
  }

  /* Blocks until settled. */
  inline void cell_await(object_ref const handle)
  {
    auto * const c{ unbox_handle<cell>(handle) };
    std::unique_lock<std::mutex> lock{ c->mutex };
    c->settled.wait(lock, [c] { return c->status != status_pending; });
  }

  /* Blocks until settled or the timeout elapses. Returns true if settled. */
  inline bool cell_await_for(object_ref const handle, long const ms)
  {
    auto * const c{ unbox_handle<cell>(handle) };
    std::unique_lock<std::mutex> lock{ c->mutex };
    return c->settled.wait_for(lock,
                               std::chrono::milliseconds{ ms },
                               [c] { return c->status != status_pending; });
  }


  /* ---------------------------------------------------------------- pools ---- */

  /* Registers the calling thread with BDWGC, once.

     FastQueue owns its worker threads -- work stealing needs per-worker deques bound to
     worker identity, so every stealing pool creates its own. That breaks the rule this file
     opened with, and the rule existed for a reason: BDWGC scans the stacks of threads it
     knows about, and a jank `object_ref` living on the stack of a thread it does not know
     can be collected while still in use.

     Registering lazily from inside the task is what makes library-owned threads safe. It is
     done in the task path because FastQueue offers nowhere else to do it: it has no
     per-worker start hook at all, where Taskflow has `tf::WorkerInterface` and oneTBB has
     `task_scheduler_observer`. One mechanism serves all three ports.

     A thread that registers MUST unregister before it exits. Leaving a dead thread
     registered makes every later collection try to signal it, and BDWGC gives up with
     "Signals delivery fails constantly at GC #41". The pool's workers never exit -- pools
     are uncollectable and never destroyed -- so they have nothing to undo; the timer thread
     is joined on shutdown and does, which is what release_gc_registration is for. */
  /* BDWGC will not accept registrations from threads it did not create until it has been
     told to expect them, and without this every collection fails to stop the world --
     "Signals delivery fails constantly at GC #40", then the process wedges.

     Called from pool_create, which runs on whichever thread built the pool, before that
     pool's workers exist. std::call_once is deliberately avoided: it is exactly what jank's
     JIT cannot emit TLS for (see yakusoku_pool.cpp), so the guard is an atomic. */
  inline void allow_thread_registration()
  {
    static std::atomic<bool> allowed{ false };
    bool expected{ false };
    if(allowed.compare_exchange_strong(expected, true))
    {
      GC_allow_register_threads();
    }
  }

  /* True only when *we* registered this thread. A thread jank created is already
     registered, and undoing that would be someone else's business. */
  inline bool &gc_registered_flag()
  {
    static thread_local bool ours{ false };
    return ours;
  }

  inline void ensure_gc_registered()
  {
    static thread_local bool attempted{ false };
    if(attempted)
    {
      return;
    }
    attempted = true;

    GC_stack_base base;
    if(GC_get_stack_base(&base) == GC_SUCCESS)
    {
      /* GC_DUPLICATE means jank got here first, and then it is not ours to release. */
      gc_registered_flag() = (GC_register_my_thread(&base) == GC_SUCCESS);
    }
  }

  inline void release_gc_registration()
  {
    if(gc_registered_flag())
    {
      gc_registered_flag() = false;
      GC_unregister_my_thread();
    }
  }

  /* Set while a thread is running pool work, so that a blocking wait can tell it is about
     to deadlock.

     A pool has a fixed number of workers. Blocking one of them on a promise that another
     queued task must resolve costs a worker; doing it on all of them at once wedges the
     pool with no error and no output. Yakusoku's await! reads this flag and throws instead,
     which turns an unexplained hang into a message naming the mistake. */
  inline bool &pool_worker_flag()
  {
    static thread_local bool flag{ false };
    return flag;
  }

  inline bool on_pool_worker()
  {
    return pool_worker_flag();
  }

  /* A queued jank thunk. Uncollectable so BDWGC roots it -- and therefore traces the jank
     function it holds -- for as long as it sits in the queue. */
  struct task
  {
    object_ref fn;
  };

  struct timer;

  /* One entry in a pool's timer schedule.

     Uncollectable for the same reason tasks are: it carries an `object_ref` (or reaches one
     through a timer) across a queue boundary, and the schedule's own storage is ordinary
     malloc memory that BDWGC does not scan. Holding only raw pointers to rooted nodes keeps
     the container itself uninteresting to the collector. */
  struct sched_entry
  {
    std::chrono::steady_clock::time_point when;
    unsigned long seq;
    /* Exactly one of these is set. `t` is a one-shot pool_schedule; `tm` is a restartable
       timer, whose generation is captured here so a superseded arming can be dropped. */
    task *t;
    timer *tm;
    unsigned long generation;
  };

  /* Earliest deadline first; `seq` breaks ties so equal deadlines keep arming order.
     std::priority_queue is a max-heap, so the comparison is reversed. */
  struct sched_later
  {
    bool operator()(sched_entry const &a, sched_entry const &b) const
    {
      if(a.when != b.when)
      {
        return a.when > b.when;
      }
      return a.seq > b.seq;
    }
  };

  struct pool
  {
    /* FastQueue's work-stealing pool, held opaquely. Each worker owns a deque and steals
       from others when its own runs dry, which is what an Asio io_context -- one shared FIFO
       queue -- does not do. */
    void *backend;

    /* Timers. FastQueue schedules work but has no clock, so the wheel is ours: one thread
       per pool sleeping until the earliest deadline. Fired callbacks are posted to the
       executor rather than run here, matching how Asio ran timer handlers on pool
       workers. */
    std::mutex mutex;
    std::condition_variable wake;
    std::priority_queue<sched_entry, std::vector<sched_entry>, sched_later> schedule;
    unsigned long seq{ 0 };
    bool stopping{ false };
    bool cancelled{ false };
    std::thread timer_thread;

    explicit pool(unsigned const workers)
      : backend{ backend::pool_new(workers) }
    {
    }
  };

  inline std::mutex &registry_mutex()
  {
    static std::mutex m;
    return m;
  }

  inline std::vector<pool *> &registry()
  {
    static std::vector<pool *> r;
    return r;
  }

  inline void pool_shutdown(pool * const p, bool const abandon);

  /* Stops every pool before the process tears down static state.

     Without this, a program that merely used a timer would crash on exit: workers still
     running while the library's statics are destroyed. Shutting down explicitly has always
     avoided that, but a library should not segfault because the caller forgot. */
  inline void stop_all_pools()
  {
    std::lock_guard<std::mutex> const lock{ registry_mutex() };
    for(auto * const p : registry())
    {
      pool_shutdown(p, true);
    }
  }

  /* The timer thread. Sleeps until the earliest deadline, then hands the callback to the
     executor. */
  inline void timer_loop(pool * const p);

  /* Pools are allocated uncollectable rather than as ordinary GC objects. They are few and
     long-lived, the exit registry below holds pointers to them from memory the collector
     does not scan, and a pool collected while its workers are still running would be fatal.
     Being permanent roots settles all three. */
  inline object_ref pool_create(long const workers)
  {
    allow_thread_registration();
    void * const mem{ GC_MALLOC_UNCOLLECTABLE(sizeof(pool)) };
    auto * const p{ new(mem) pool{ static_cast<unsigned>(workers > 0 ? workers : 1) } };
    p->timer_thread = std::thread{ [p] { timer_loop(p); } };

    std::lock_guard<std::mutex> const lock{ registry_mutex() };
    if(registry().empty())
    {
      std::atexit(&stop_all_pools);
    }
    registry().push_back(p);

    return box_handle(p);
  }

  /* Runs a thunk as pool work: registered with the collector, flagged as a worker, and
     never allowed to throw into the scheduler. */
  inline void run_as_pool_task(object_ref const fn)
  {
    ensure_gc_registered();
    pool_worker_flag() = true;
    safe_call(fn);
    pool_worker_flag() = false;
  }

  /* What the pool actually runs. The backend is handed this and a `void *`, so no jank type
     crosses the library boundary. */
  inline void run_task(void * const arg)
  {
    auto * const t{ static_cast<task *>(arg) };
    run_as_pool_task(t->fn);
    t->~task();
    GC_FREE(t);
  }

  inline void submit_task(pool * const p, object_ref const fn)
  {
    void * const mem{ GC_MALLOC_UNCOLLECTABLE(sizeof(task)) };
    auto * const t{ new(mem) task{ fn } };
    backend::pool_submit(p->backend, &run_task, t);
  }

  inline void pool_post(object_ref const handle, object_ref const fn)
  {
    submit_task(unbox_handle<pool>(handle), fn);
  }

  /* Queues fn to run after ms milliseconds, on a pool worker.

     Nothing here is handed back to jank: cancellation in Yakusoku is expressed by settling
     the promise, and the callback simply finds it already settled and does nothing. */
  inline void pool_schedule(object_ref const handle, long const ms, object_ref const fn)
  {
    auto * const p{ unbox_handle<pool>(handle) };
    void * const mem{ GC_MALLOC_UNCOLLECTABLE(sizeof(task)) };
    auto * const t{ new(mem) task{ fn } };

    std::lock_guard<std::mutex> const lock{ p->mutex };
    p->schedule.push(sched_entry{ std::chrono::steady_clock::now()
                                    + std::chrono::milliseconds{ ms },
                                  ++p->seq,
                                  t,
                                  nullptr,
                                  0 });
    p->wake.notify_one();
  }

  /* ---------------------------------------------------------------- timers ---- */

  /* A restartable timer, which is all a debouncer is: every restart pushes the deadline
     out, and only a quiet window lets the callback through.

     Restarting does not remove the superseded entry from the schedule -- rebuilding a heap
     to erase one node is not worth it when the entry expires on its own. A generation
     counter drops it instead: an entry runs its callback only if no restart has happened
     since it was armed. The stale entries are bounded by the debounce window, since each
     one is discarded as soon as its own deadline passes.

     Like pools, timers are allocated uncollectable. A pending entry holds a raw pointer to
     the timer, and the timer holds the jank callback, which BDWGC must be able to trace --
     uncollectable memory is both a root and scanned, which covers both. It also makes
     timers permanent, which is acceptable here: they are created per batch processor, not
     per query, so a program holds a handful for its lifetime. */
  struct timer
  {
    pool *p;
    std::mutex mutex;
    object_ref fn;
    unsigned long generation{ 0 };

    explicit timer(pool * const owner)
      : p{ owner }
    {
    }
  };

  inline object_ref timer_create(object_ref const pool_handle)
  {
    auto * const p{ unbox_handle<pool>(pool_handle) };
    void * const mem{ GC_MALLOC_UNCOLLECTABLE(sizeof(timer)) };
    return box_handle(new(mem) timer{ p });
  }

  /* Arms the timer to call fn after ms milliseconds, dropping whatever was pending. */
  inline void timer_restart(object_ref const handle, long const ms, object_ref const fn)
  {
    auto * const tm{ unbox_handle<timer>(handle) };
    unsigned long generation{};
    {
      std::lock_guard<std::mutex> const lock{ tm->mutex };
      tm->fn = fn;
      generation = ++tm->generation;
    }

    auto * const p{ tm->p };
    std::lock_guard<std::mutex> const lock{ p->mutex };
    p->schedule.push(sched_entry{ std::chrono::steady_clock::now()
                                    + std::chrono::milliseconds{ ms },
                                  ++p->seq,
                                  nullptr,
                                  tm,
                                  generation });
    p->wake.notify_one();
  }

  /* Cancels a pending wait. The callback is dropped, not run. */
  inline void timer_cancel(object_ref const handle)
  {
    auto * const tm{ unbox_handle<timer>(handle) };
    std::lock_guard<std::mutex> const lock{ tm->mutex };
    ++tm->generation;
  }

  inline void timer_loop(pool * const p)
  {
    /* The loop reads object_refs out of timers, so the collector has to know this stack
       too. */
    ensure_gc_registered();

    std::unique_lock<std::mutex> lock{ p->mutex };
    for(;;)
    {
      if(p->stopping && (p->cancelled || p->schedule.empty()))
      {
        /* This thread is joined on shutdown, so it must hand its registration back before
           it dies -- see release_gc_registration. */
        lock.unlock();
        release_gc_registration();
        return;
      }

      if(p->schedule.empty())
      {
        p->wake.wait(lock);
        continue;
      }

      auto const next{ p->schedule.top() };
      auto const now{ std::chrono::steady_clock::now() };
      if(now < next.when)
      {
        p->wake.wait_until(lock, next.when);
        continue;
      }

      p->schedule.pop();

      /* Resolve what to run with the pool lock released: a callback is free to arm this
         very timer again, and a timer's own lock must never be taken under the pool's. */
      lock.unlock();

      if(next.t != nullptr)
      {
        backend::pool_submit(p->backend, &run_task, next.t);
      }
      else if(next.tm != nullptr)
      {
        auto * const tm{ next.tm };
        object_ref fn{};
        {
          std::lock_guard<std::mutex> const timer_lock{ tm->mutex };
          if(tm->generation == next.generation)
          {
            fn = tm->fn;
          }
        }
        if(fn.is_some())
        {
          submit_task(p, fn);
        }
      }

      lock.lock();
    }
  }

  /* Shared by drain, stop and the exit handler. Draining lets queued work and pending
     timers finish; abandoning drops what has not started. Either way the timer thread is
     joined and the executor's workers are waited out, so no thread outlives the pool. */
  inline void pool_shutdown(pool * const p, bool const abandon)
  {
    {
      std::lock_guard<std::mutex> const lock{ p->mutex };
      if(p->stopping)
      {
        return;
      }
      p->stopping = true;
      p->cancelled = abandon;
      p->wake.notify_all();
    }

    if(p->timer_thread.joinable())
    {
      p->timer_thread.join();
    }

    /* FastQueue has no "abandon queued work": a submitted task cannot be recalled. shutdown-now therefore differs from Asio's, which
       could drop a queued handler -- it stops accepting new timer work and waits out what is
       already running. Documented rather than faked. */
    backend::pool_wait_idle(p->backend);
  }

  /* Graceful: queued work and pending timers finish. */
  inline void pool_drain(object_ref const handle)
  {
    pool_shutdown(unbox_handle<pool>(handle), false);
  }

  /* Immediate: pending timers are dropped. */
  inline void pool_stop(object_ref const handle)
  {
    pool_shutdown(unbox_handle<pool>(handle), true);
  }
}
