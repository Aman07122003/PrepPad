const OperatingSystemData = [
    {
      id: 'os_basics',
      title: 'Operating System Basics',
      topics: [
        'Definition and objectives of an OS',
        'Functions of an OS: Process management, Memory management, File system, I/O management, Security',
        'Types of OS: Batch, Time-sharing, Distributed, Real-time, Embedded, Networked',
        'Kernel vs User space',
        'System calls and APIs',
        'OS services and abstractions',
        'History and evolution of operating systems'
      ]
    },
    {
      id: 'process_management',
      title: 'Process Management',
      topics: [
        'Process vs Thread',
        'Process states and lifecycle: New, Ready, Running, Waiting, Terminated',
        'Thread models: User-level threads, Kernel-level threads, Hybrid threads',
        'CPU scheduling algorithms: FCFS, SJF, Round Robin, Priority, Multilevel Queue, MLFQ',
        'Context switching and its overhead',
        'Process control block (PCB) structure',
        'Multithreading, concurrency issues, and use cases'
      ]
    },
    {
      id: 'synchronization_concurrency',
      title: 'Synchronization & Concurrency',
      topics: [
        'Race conditions and critical sections',
        'Mutual exclusion mechanisms: Mutex, Semaphore, Spinlock, Monitors',
        'Deadlock: conditions, prevention, avoidance, detection, recovery',
        'Deadlock modeling: Resource Allocation Graph, Bankers Algorithm',
        'Producer-Consumer problem, Readers-Writers problem, Dining Philosophers problem',
        'Inter-process communication (IPC): Pipes, Message queues, Shared memory, Sockets'
      ]
    },
    {
      id: 'memory_management',
      title: 'Memory Management',
      topics: [
        'Contiguous memory allocation, fragmentation issues (internal vs external)',
        'Segmentation, paging, virtual memory',
        'Page tables: single-level, multi-level, inverted',
        'Translation Lookaside Buffers (TLB) and caching',
        'Page replacement algorithms: FIFO, LRU, Optimal, Clock, NRU',
        'Demand paging, pre-paging, page fault handling',
        'Kernel memory allocators: Slab allocator, Buddy system',
        'Memory protection and isolation techniques'
      ]
    },
    {
      id: 'file_systems',
      title: 'File Systems',
      topics: [
        'File abstraction, metadata, directory structures',
        'File allocation strategies: contiguous, linked, indexed (inodes), FAT',
        'File system types: NTFS, ext4, FAT32, exFAT, HFS+',
        'Journaling, crash recovery, consistency, fsck',
        'File permissions, access control, and security',
        'I/O systems, caching, and buffering strategies'
      ]
    },
    {
      id: 'io_device_management',
      title: 'Input/Output & Device Management',
      topics: [
        'Device drivers: block vs character',
        'Interrupts, polling, and DMA',
        'I/O scheduling algorithms: FCFS, SSTF, SCAN, C-SCAN',
        'Direct memory access (DMA) architecture',
        'Device communication models: synchronous vs asynchronous',
        'Peripheral management in modern OS (USB, PCI devices)'
      ]
    },
    {
      id: 'cpu_kernel_architecture',
      title: 'CPU & Kernel Architecture',
      topics: [
        'Kernel types: Monolithic, Microkernel, Hybrid, Exokernel',
        'Boot process: BIOS/UEFI, bootloader, kernel initialization, init system',
        'System calls, traps, interrupts, exceptions',
        'Kernel modules and dynamic loading',
        'Kernel threads vs user threads',
        'Scheduling in kernel: real-time, priority, fairness'
      ]
    },
    {
      id: 'security_protection',
      title: 'Security & Protection',
      topics: [
        'User authentication, access control: DAC, MAC, RBAC',
        'Memory protection and address space isolation',
        'Buffer overflows, stack smashing, and prevention techniques',
        'ASLR, DEP, sandboxing, secure boot',
        'Kernel and file system security',
        'Common vulnerabilities and hardening techniques'
      ]
    },
    {
      id: 'networking_distributed',
      title: 'Networking & Distributed Systems',
      topics: [
        'Sockets, TCP/IP stack and OS role',
        'Remote Procedure Call (RPC) and message passing',
        'Distributed synchronization, clocks, and consistency models',
        'Distributed file systems: NFS, AFS, HDFS',
        'Process migration and distributed scheduling',
        'Network OS considerations and challenges'
      ]
    },
    {
      id: 'performance_debugging',
      title: 'Performance & Debugging',
      topics: [
        'Profiling and tracing: perf, ftrace, strace',
        'Performance metrics: latency, throughput, CPU/memory utilization',
        'Benchmarking and micro-benchmarks',
        'Performance bottlenecks: system calls, context switches, locking',
        'Debugging tools: gdb, kernel debugging, logs analysis',
        'OS tuning and optimization techniques'
      ]
    },
    {
      id: 'interview_focus',
      title: 'Interview-Specific Focus',
      topics: [
        'Explain process scheduling & context switching with examples',
        'Virtual memory: page table walkthrough & page replacement reasoning',
        'Filesystem consistency after crash and journaling',
        'Concurrency: identify races & propose fixes (mutex/semaphore examples)',
        'I/O flow: syscall → kernel → device',
        'Real-world scenarios: deadlock resolution, multithreading bugs',
        'Problem-solving questions related to kernel and system performance'
      ]
    }
  ];
  
  export default OperatingSystemData;
  