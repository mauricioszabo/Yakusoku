// Copyright (c) Yakusoku contributors.
// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at
// http://mozilla.org/MPL/2.0/.
//
// The oneTBB half of the pool, compiled ahead of time.
//
// oneTBB is the closest thing in C++ to the JVM's ForkJoinPool -- the same per-worker deques
// and the same random stealing -- which makes it the most direct answer to "why is
// parallel/many faster on the JVM".
//
// It is separate from yakusoku.hpp for the same reason the Taskflow version was: jank cannot
// JIT-compile a library of this size safely, and keeping it out of jank's compiler entirely
// is cheaper than finding out which part it chokes on. Deliberately this file knows nothing
// about jank -- no object_ref, no GC, no boxing -- and crosses into yakusoku.hpp as an
// opaque `void *` behind a plain function pointer.
//
// Submission uses `task_arena::enqueue`, which is fire-and-forget and, unlike
// `task_arena::execute`, does not make the calling thread join the arena. That matters:
// pool_submit is called from pool workers and from the timer thread, and neither should be
// conscripted into running someone else's work. Since enqueue tracks nothing, the outstanding
// count is ours.

#include <atomic>
#include <condition_variable>
#include <mutex>

#include <oneapi/tbb/task_arena.h>

#include "yakusoku_pool.hpp"

namespace yakusoku::backend
{
  namespace
  {
    struct arena_pool
    {
      tbb::task_arena arena;
      std::mutex mutex;
      std::condition_variable idle;
      long outstanding{ 0 };

      explicit arena_pool(unsigned const workers)
        : arena{ static_cast<int>(workers) }
      {
      }
    };
  }

  void *pool_new(unsigned const workers)
  {
    return new arena_pool{ workers > 0 ? workers : 1 };
  }

  void pool_submit(void * const pool, task_fn const fn, void * const arg)
  {
    auto * const p{ static_cast<arena_pool *>(pool) };
    {
      std::lock_guard<std::mutex> const lock{ p->mutex };
      ++p->outstanding;
    }
    p->arena.enqueue([p, fn, arg] {
      fn(arg);
      {
        std::lock_guard<std::mutex> const lock{ p->mutex };
        --p->outstanding;
      }
      p->idle.notify_all();
    });
  }

  void pool_wait_idle(void * const pool)
  {
    auto * const p{ static_cast<arena_pool *>(pool) };
    std::unique_lock<std::mutex> lock{ p->mutex };
    p->idle.wait(lock, [p] { return p->outstanding == 0; });
  }
}
