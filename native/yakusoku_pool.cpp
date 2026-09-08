// Copyright (c) Yakusoku contributors.
// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at
// http://mozilla.org/MPL/2.0/.
//
// The FastQueue half of the pool, compiled ahead of time.
//
// FastQueue is a C library, so its headers would very likely survive jank's JIT where
// Taskflow's did not. It is kept behind the same boundary anyway: the three ports then
// differ in exactly one file, which is the point of comparing them.
//
// Work stealing is off by default -- it lives on the scheduler config, not on the plain
// fq_thread_pool_create_ex constructor -- so the pool is built through
// fq_thread_pool_create_configured with it explicitly on. Building it any other way would
// have measured a FIFO queue and called it work stealing.
//
// One convenience the other two ports lack: fq_task_fn is already void (*)(void *), the same
// shape as our boundary, so tasks cross without a wrapper.

#include <fastqueue/thread_pool.h>
#include <fastqueue/scheduler.h>
#include <fastqueue/types.h>

#include "yakusoku_pool.hpp"

namespace yakusoku::backend
{
  void *pool_new(unsigned const workers)
  {
    fq_scheduler_config_t config;
    fq_scheduler_config_default(&config);
    config.thread_count = workers > 0 ? workers : 1;
    config.enable_work_stealing = FQ_TRUE;

    fq_thread_pool_t *pool{ nullptr };
    if(fq_thread_pool_create_configured(&pool, &config) != FQ_OK)
    {
      return nullptr;
    }
    return pool;
  }

  void pool_submit(void * const pool, task_fn const fn, void * const arg)
  {
    fq_thread_pool_submit_fn(static_cast<fq_thread_pool_t *>(pool), fn, arg);
  }

  void pool_wait_idle(void * const pool)
  {
    fq_thread_pool_wait_idle(static_cast<fq_thread_pool_t *>(pool));
  }
}
