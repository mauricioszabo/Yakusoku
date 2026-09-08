// Copyright (c) Yakusoku contributors.
// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at
// http://mozilla.org/MPL/2.0/.
//
// The Taskflow half of the pool, compiled ahead of time.
//
// It is separate from yakusoku.hpp for one reason, and not a stylistic one: jank cannot
// JIT-compile Taskflow. Including <taskflow/taskflow.hpp> from a header jank parses and
// then constructing a tf::Executor fails at JIT link time with
//
//   JIT session error: Symbols not found:
//     [ __emutls_v._ZSt15__once_callable, __emutls_v._ZSt11__once_call ]
//
// because jank's JIT emits emulated-TLS accesses for std::call_once while the system
// libstdc++ provides native TLS. Plain std::thread from a JIT'd header is fine -- it is
// Taskflow specifically -- so the fix is to keep Taskflow out of jank's compiler entirely.
//
// Deliberately this file knows nothing about jank. No object_ref, no GC, no boxing: all of
// that stays in yakusoku.hpp where it is readable, and crosses into here as an opaque
// `void *` behind a plain function pointer. That keeps the ahead-of-time half small enough
// to hold in your head, and means this file compiles with nothing but Taskflow on the
// include path.

#include <taskflow/taskflow.hpp>

#include "yakusoku_pool.hpp"

namespace yakusoku::backend
{
  void *pool_new(unsigned const workers)
  {
    return new tf::Executor{ workers > 0 ? workers : 1 };
  }

  void pool_submit(void * const pool, task_fn const fn, void * const arg)
  {
    static_cast<tf::Executor *>(pool)->silent_async([fn, arg] { fn(arg); });
  }

  /* Blocks until every submitted task has finished. Taskflow offers no way to recall work
     already submitted, which is why Yakusoku's shutdown-now cannot drop a queued task the
     way Asio's could. */
  void pool_wait_idle(void * const pool)
  {
    static_cast<tf::Executor *>(pool)->wait_for_all();
  }
}
