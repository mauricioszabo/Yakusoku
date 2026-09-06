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
//   2. `pool` -- an Asio `io_context` used as the work queue and timer source. We do not
//      write a scheduler; Asio has one.
//
// Two rules govern every allocation below, both imposed by BDWGC:
//
//   * BDWGC scans GC memory, thread stacks and roots -- never the malloc heap. A jank
//     `object_ref` sitting in a malloc'd handler inside Asio's queue would be invisible to
//     the collector and could be freed while queued. So anything that carries an
//     `object_ref` across the queue boundary is allocated with GC_MALLOC_UNCOLLECTABLE,
//     which is both a root and traced, and is freed once the handler has run.
//
//   * Worker threads are created by jank's `future`, never by Asio. jank's `future` already
//     registers the thread with BDWGC and conveys dynamic bindings; borrowing it means we
//     inherit that instead of reimplementing it.

#pragma once

#include <chrono>
#include <functional>
#include <cstdlib>
#include <memory>
#include <condition_variable>
#include <mutex>
#include <new>
#include <thread>
#include <vector>

#include <asio/executor_work_guard.hpp>
#include <asio/io_context.hpp>
#include <asio/post.hpp>
#include <asio/steady_timer.hpp>

#include <gc/gc.h>
#include <jank/gc.hpp>
#include <jank/runtime/object.hpp>
#include <jank/runtime/oref.hpp>

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
     never escape into an Asio worker and take the pool down with it. Callbacks installed
     by yakusoku.core always route their own errors into the dependent promise, so a throw
     reaching here is a bug in a user callback, not a control-flow path. */
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

  inline cell *cell_create()
  {
    return new cell{};
  }

  inline int cell_status(cell * const c)
  {
    std::lock_guard<std::mutex> const lock{ c->mutex };
    return c->status;
  }

  inline object_ref cell_value(cell * const c)
  {
    std::lock_guard<std::mutex> const lock{ c->mutex };
    return c->value;
  }

  /* Registers a zero-arity callback. Returns true if the cell is *already* settled, in
     which case nothing was registered and the caller must run the callback itself. That
     return value is what closes the attach/settle race: the decision is made under the
     same lock that settling takes. */
  inline bool cell_attach(cell * const c, object_ref const cb)
  {
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
  inline bool cell_settle(cell * const c, int const status, object_ref const value)
  {
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
  inline void cell_await(cell * const c)
  {
    std::unique_lock<std::mutex> lock{ c->mutex };
    c->settled.wait(lock, [c] { return c->status != status_pending; });
  }

  /* Blocks until settled or the timeout elapses. Returns true if settled. */
  inline bool cell_await_for(cell * const c, long const ms)
  {
    std::unique_lock<std::mutex> lock{ c->mutex };
    return c->settled.wait_for(lock,
                               std::chrono::milliseconds{ ms },
                               [c] { return c->status != status_pending; });
  }

  /* ---------------------------------------------------------------- pools ---- */

  struct pool : gc
  {
    asio::io_context ctx;
    asio::executor_work_guard<asio::io_context::executor_type> guard;

    /* How many workers are inside run(). Exit waits on this reaching zero. */
    std::mutex mutex;
    std::condition_variable idle;
    int running{ 0 };

    pool()
      : ctx{}
      , guard{ asio::make_work_guard(ctx) }
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

  /* Stops every pool and waits for its workers to leave run(), before the process tears
     down static state.

     Without this, a program that merely used a timer would crash on exit: workers sitting
     in io_context::run() are still executing while the Asio library's statics are being
     destroyed. Shutting a pool down explicitly has always avoided that, but a library
     should not segfault because the caller forgot.

     The wait is bounded: a worker stuck inside a long-running callback delays exit by two
     seconds rather than hanging it forever. */
  inline void stop_all_pools()
  {
    std::lock_guard<std::mutex> const lock{ registry_mutex() };
    for(auto * const p : registry())
    {
      p->guard.reset();
      p->ctx.stop();

      std::unique_lock<std::mutex> worker_lock{ p->mutex };
      p->idle.wait_for(worker_lock, std::chrono::seconds{ 2 }, [p] { return p->running == 0; });
    }
  }

  /* A queued jank thunk. Uncollectable so BDWGC roots it -- and therefore traces the jank
     function it holds -- for as long as it sits in Asio's queue. */
  struct task
  {
    object_ref fn;
  };

  /* Pools are allocated uncollectable rather than as ordinary GC objects. They are few and
     long-lived, the exit registry below holds pointers to them from memory the collector
     does not scan, and a pool collected while its workers are still running would be fatal.
     Being permanent roots settles all three. */
  inline pool *pool_create()
  {
    void * const mem{ GC_MALLOC_UNCOLLECTABLE(sizeof(pool)) };
    auto * const p{ new(mem) pool{} };

    std::lock_guard<std::mutex> const lock{ registry_mutex() };
    if(registry().empty())
    {
      std::atexit(&stop_all_pools);
    }
    registry().push_back(p);

    return p;
  }

  inline void pool_post(pool * const p, object_ref const fn)
  {
    void * const mem{ GC_MALLOC_UNCOLLECTABLE(sizeof(task)) };
    auto * const t{ new(mem) task{ fn } };
    asio::post(p->ctx, [t] {
      safe_call(t->fn);
      t->~task();
      GC_FREE(t);
    });
  }

  /* Nothing here is handed back to jank: cancellation in Yakusoku is expressed by settling
     the promise, and the callback simply finds it already settled and does nothing. That
     keeps every timer's lifetime inside this file.

     The timer is held by a shared_ptr captured in its own handler -- Asio's usual idiom --
     rather than being destroyed by the handler it is running. Destroying a steady_timer
     from inside its own completion handler corrupts the heap ("double free or corruption"),
     since Asio still owns the completed operation at that point. Letting Asio destroy the
     handler, and the captured timer with it, avoids that entirely.

     The jank function is kept separately in uncollectable memory so the collector can see
     it while the timer is pending; the timer and its control block hold no jank values. */
  inline void pool_schedule(pool * const p, long const ms, object_ref const fn)
  {
    void * const mem{ GC_MALLOC_UNCOLLECTABLE(sizeof(task)) };
    auto * const t{ new(mem) task{ fn } };
    auto const timer{ std::make_shared<asio::steady_timer>(p->ctx) };
    timer->expires_after(std::chrono::milliseconds{ ms });
    timer->async_wait([t, timer](auto const &) {
      safe_call(t->fn);
      t->~task();
      GC_FREE(t);
    });
  }

  /* Called on jank-created worker threads. A handler that throws something we did not
     anticipate must not silently retire a worker, so we resume the loop. */
  inline void pool_run(pool * const p)
  {
    {
      std::lock_guard<std::mutex> const lock{ p->mutex };
      ++p->running;
    }

    for(;;)
    {
      try
      {
        p->ctx.run();
        break;
      }
      catch(...)
      {
      }
    }

    {
      std::lock_guard<std::mutex> const lock{ p->mutex };
      --p->running;
    }
    p->idle.notify_all();
  }

  /* Graceful: release the work guard so workers return once the queue (and any pending
     timers) drain. */
  inline void pool_drain(pool * const p)
  {
    p->guard.reset();
  }

  /* Immediate: abandon queued work. */
  inline void pool_stop(pool * const p)
  {
    p->guard.reset();
    p->ctx.stop();
  }
}
