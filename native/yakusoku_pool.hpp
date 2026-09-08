// Copyright (c) Yakusoku contributors.
// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at
// http://mozilla.org/MPL/2.0/.
//
// The boundary between jank and Taskflow.
//
// jank parses this file; it must never parse Taskflow's headers (see yakusoku_pool.cpp for
// why). So nothing here is a template and nothing here is defined -- these are plain
// declarations resolved against libyakusoku-asio.so at JIT link time.

#pragma once

namespace yakusoku::backend
{
  /* A task is a plain function pointer and an opaque argument. Everything jank-shaped --
     the object_ref, its GC rooting, the worker registration -- lives on the yakusoku.hpp
     side of this line and is reached through `arg`. */
  using task_fn = void (*)(void *);

  void *pool_new(unsigned workers);
  void pool_submit(void *pool, task_fn fn, void *arg);
  void pool_wait_idle(void *pool);
}
