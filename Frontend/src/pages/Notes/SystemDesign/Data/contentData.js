const contentData = {
    overview: [
      {
        title: 'Learning Path Structure',
        topics: [
          {
            part: 'Part I',
            name: 'Core Foundations',
            link: '#part1',
            description: 'System design fundamentals, abstraction, trade-offs, and mathematical foundations',
            duration: '1.5 months',
            level: 'Beginner',
            skills: [
              'System Design Principles & Abstraction',
              'Functional vs Non-functional Requirements',
              'CAP & PACELC Trade-offs',
              'Scalability & Reliability Metrics',
              'Complexity Analysis & Probability Basics'
            ]
          },
          {
            part: 'Part II',
            name: 'Networking & Communication',
            link: '#part2',
            description: 'Networking essentials for scalable and reliable systems',
            duration: '1 month',
            level: 'Intermediate',
            skills: [
              'TCP/IP, UDP, QUIC',
              'DNS & Load Balancing',
              'HTTP/2, HTTP/3, gRPC',
              'CDNs & Routing Strategies',
              'Backpressure & Flow Control'
            ]
          },
          {
            part: 'Part III',
            name: 'Storage & Data Systems',
            link: '#part3',
            description: 'Database systems, consistency, and distributed storage',
            duration: '1.5 months',
            level: 'Intermediate',
            skills: [
              'SQL vs NoSQL Databases',
              'Indexing & Search Systems',
              'Replication & Consistency Models',
              'Distributed Storage (HDFS, Ceph)',
              'Sharding & Partitioning Trade-offs'
            ]
          },
          {
            part: 'Part IV',
            name: 'System Building Blocks',
            link: '#part4',
            description: 'Core building blocks for large-scale distributed systems',
            duration: '1 month',
            level: 'Intermediate',
            skills: [
              'Caching Systems (Redis, Memcached)',
              'Message Queues & Streaming (Kafka, RabbitMQ)',
              'API Gateways & Service Meshes',
              'Configuration Management & Service Discovery'
            ]
          },
          {
            part: 'Part V',
            name: 'Scalability & Coordination',
            link: '#part5',
            description: 'Scalability patterns and distributed coordination protocols',
            duration: '1.5 months',
            level: 'Intermediate',
            skills: [
              'Vertical & Horizontal Scaling',
              'Elastic Scaling & Cloud Auto-scaling',
              'Consensus Protocols (Raft, Paxos, Zab)',
              'Leader Election & Distributed Locks',
              'Fault Tolerance & Recovery'
            ]
          },
          {
            part: 'Part VI',
            name: 'Security & Trust',
            link: '#part6',
            description: 'Security, privacy, and trust in distributed environments',
            duration: '1 month',
            level: 'Intermediate',
            skills: [
              'Authentication & Authorization (OAuth, RBAC)',
              'Encryption & Key Management',
              'Threat Modeling & DDoS Protection',
              'Zero Trust Architectures',
              'Privacy Enhancing Techniques (Differential Privacy, MPC)'
            ]
          },
          {
            part: 'Part VII',
            name: 'Observability & Operability',
            link: '#part7',
            description: 'Monitoring, resilience testing, and operational excellence',
            duration: '1 month',
            level: 'Advanced',
            skills: [
              'Logging, Metrics, Distributed Tracing',
              'SLA, SLO, SLI Engineering',
              'CI/CD & Infrastructure as Code',
              'Kubernetes & Container Orchestration',
              'Chaos Engineering & Reliability Testing'
            ]
          },
          {
            part: 'Part VIII',
            name: 'Case Studies & System Design Problems',
            link: '#part8',
            description: 'Hands-on design of classic and real-world large-scale systems',
            duration: '1.5-2 months',
            level: 'Advanced',
            skills: [
              'Designing URL Shorteners & Caches',
              'Real-time Messaging & Social Feeds',
              'Streaming Platforms (Netflix, YouTube)',
              'E-commerce & Payment Systems',
              'Ride-sharing & Geo-distributed Systems'
            ]
          },
          {
            part: 'Part IX',
            name: 'Architectural & Research Patterns',
            link: '#part9',
            description: 'Deep dive into distributed architecture patterns and emerging paradigms',
            duration: '2 months',
            level: 'Advanced',
            skills: [
              'Microservices vs Monoliths',
              'Event Sourcing & CQRS',
              'Hexagonal & Clean Architecture',
              'CRDTs & Multi-region Replication',
              'Blockchain & Byzantine Fault Tolerance'
            ]
          },
          {
            part: 'Part X',
            name: 'Becoming a System Design Expert',
            link: '#part10',
            description: 'Expert-level mastery, research readiness, and future systems',
            duration: '2 months',
            level: 'Expert',
            skills: [
              'Interview Mastery (SDE-3+ / Staff+ Roles)',
              'Research Paper Reading & Analysis',
              'Landmark Distributed Systems Papers',
              'AI-driven Infrastructure & Feature Stores',
              'Quantum-safe Cryptography & Future Trends'
            ]
          }
        ]
      }
    ],
  
    fundamentals: [
      {
        title: 'System Design Fundamentals',
        topics: [
          { 
            name: 'Abstraction & Modularity', 
            link: '#abstraction', 
            description: 'Information hiding, separation of concerns, and interface design principles',
            part: 'I.1',
            duration: '1 week',
            level: 'Beginner'
          },
          { 
            name: 'Functional vs Non-functional Requirements', 
            link: '#requirements', 
            description: 'Features vs quality attributes analysis (latency, security, scalability, cost)',
            part: 'I.2',
            duration: '1 week',
            level: 'Beginner'
          },
          { 
            name: 'CAP Theorem & PACELC', 
            link: '#cap', 
            description: 'Consistency-Availability tradeoffs in partitions, latency vs consistency in normal operation',
            part: 'I.3',
            duration: '2 weeks',
            level: 'Intermediate'
          },
          { 
            name: 'Scalability Dimensions', 
            link: '#scalability-dims', 
            description: 'Throughput, latency, concurrency, elasticity, and efficiency',
            part: 'I.4',
            duration: '1 week',
            level: 'Beginner'
          },
          { 
            name: 'Availability & Reliability', 
            link: '#availability', 
            description: 'MTBF, MTTR, fault tolerance models, SLA/SLO/SLI',
            part: 'I.5',
            duration: '1 week',
            level: 'Intermediate'
          },
          { 
            name: 'Tradeoff Analysis Frameworks', 
            link: '#tradeoffs', 
            description: 'Cost vs performance, latency vs consistency, reliability vs complexity',
            part: 'I.6',
            duration: '1 week',
            level: 'Intermediate'
          }
        ]
      },
      {
        title: 'Mathematical Foundations',
        topics: [
          { 
            name: 'Complexity Analysis', 
            link: '#complexity', 
            description: 'Time/space complexity in distributed algorithms and amortized analysis',
            part: 'I.7',
            duration: '2 weeks',
            level: 'Intermediate'
          },
          { 
            name: 'Probability Theory', 
            link: '#probability', 
            description: 'System failure modeling, reliability engineering, tail latency distributions',
            part: 'I.8',
            duration: '2 weeks',
            level: 'Intermediate'
          },
          { 
            name: 'Queuing Theory', 
            link: '#queuing', 
            description: 'Little\'s Law, M/M/1, M/M/c queue models, bottleneck analysis',
            part: 'I.9',
            duration: '2 weeks',
            level: 'Advanced'
          },
          { 
            name: 'Information Theory', 
            link: '#information', 
            description: 'Entropy, redundancy, data compression, coding efficiency',
            part: 'I.10',
            duration: '1 week',
            level: 'Advanced'
          },
          { 
            name: 'Consensus Complexity', 
            link: '#consensus', 
            description: 'FLP impossibility, Byzantine fault tolerance, lower bounds in agreement',
            part: 'I.11',
            duration: '1 week',
            level: 'Advanced'
          },
          { 
            name: 'Graph Theory & Networks', 
            link: '#graph-theory', 
            description: 'Graph cuts, network flow, shortest path algorithms in routing & partitioning',
            part: 'I.12',
            duration: '2 weeks',
            level: 'Advanced'
          },
          { 
            name: 'Stochastic Modeling', 
            link: '#stochastic', 
            description: 'Markov chains, renewal theory, stochastic processes for reliability and availability',
            part: 'I.13',
            duration: '2 weeks',
            level: 'Expert'
          }
        ]
      }
    ],
  
    scalability: [
      {
        title: 'Scalability Patterns & Techniques',
        topics: [
          { 
            name: 'Vertical vs Horizontal Scaling', 
            link: '#scaling-types', 
            description: 'Resource addition approaches and tradeoffs',
            part: 'V.1',
            duration: '1 week',
            level: 'Intermediate'
          },
          { 
            name: 'Partitioning & Sharding', 
            link: '#partitioning', 
            description: 'Data distribution strategies, consistent hashing, range vs hash sharding',
            part: 'V.2',
            duration: '2 weeks',
            level: 'Intermediate'
          },
          { 
            name: 'Elastic Scaling', 
            link: '#elastic', 
            description: 'Kubernetes HPA/VPA, cloud auto-scaling, predictive scaling',
            part: 'V.3',
            duration: '1 week',
            level: 'Intermediate'
          },
          { 
            name: 'Load Balancing Algorithms', 
            link: '#load-balancing', 
            description: 'Round Robin, Least Connections, Weighted, Consistent Hashing, L4/L7 load balancing',
            part: 'V.4',
            duration: '2 weeks',
            level: 'Intermediate'
          },
          { 
            name: 'Geo-distributed Routing', 
            link: '#geo-routing', 
            description: 'Anycast, DNS-based routing, traffic engineering, latency-based routing',
            part: 'V.5',
            duration: '1 week',
            level: 'Advanced'
          },
          { 
            name: 'Queue-based Scaling', 
            link: '#queue-scaling', 
            description: 'Workload offloading, async task processing, autoscaling consumers',
            part: 'V.6',
            duration: '1 week',
            level: 'Intermediate'
          },
          { 
            name: 'Capacity Planning & Benchmarking', 
            link: '#capacity', 
            description: 'SLA/SLO/SLA mapping, load testing (Locust/JMeter), bottleneck analysis',
            part: 'V.7',
            duration: '2 weeks',
            level: 'Advanced'
          }
        ]
      },
      {
        title: 'Distributed Coordination',
        topics: [
          { 
            name: 'Consensus Algorithms', 
            link: '#consensus-algos', 
            description: 'Raft, Paxos, Zab implementations and tradeoffs',
            part: 'V.8',
            duration: '3 weeks',
            level: 'Advanced'
          },
          { 
            name: 'Leader Election', 
            link: '#leader-election', 
            description: 'Bully algorithm, Raft leader election, lease-based leadership',
            part: 'V.9',
            duration: '1 week',
            level: 'Intermediate'
          },
          { 
            name: 'Distributed Locks', 
            link: '#distributed-locks', 
            description: 'ZooKeeper, etcd, Redis Redlock mechanisms',
            part: 'V.10',
            duration: '2 weeks',
            level: 'Intermediate'
          },
          { 
            name: 'Failure Detection', 
            link: '#failure-detection', 
            description: 'Gossip protocols, heartbeat mechanisms, SWIM protocol',
            part: 'V.11',
            duration: '1 week',
            level: 'Intermediate'
          },
          { 
            name: 'Quorum Systems', 
            link: '#quorum', 
            description: 'Read/write quorum configurations, CAP tradeoffs, consistency levels',
            part: 'V.12',
            duration: '1 week',
            level: 'Advanced'
          },
          { 
            name: 'Resilience & Fault Tolerance', 
            link: '#resilience', 
            description: 'Circuit breakers, retries with exponential backoff, bulkheads, chaos engineering',
            part: 'V.13',
            duration: '2 weeks',
            level: 'Advanced'
          },
          { 
            name: 'Multi-region & Global Scaling', 
            link: '#multi-region', 
            description: 'Active-active vs active-passive, data replication across continents, disaster recovery',
            part: 'V.14',
            duration: '2 weeks',
            level: 'Expert'
          }
        ]
      }
    ],
  
    databases: [
      {
        title: 'Database Systems & Storage',
        topics: [
          { 
            name: 'Relational Databases', 
            link: '#relational', 
            description: 'ACID properties, normalization, query optimization, and indexing',
            part: 'III.1',
            duration: '2 weeks',
            level: 'Intermediate'
          },
          { 
            name: 'NoSQL Systems', 
            link: '#nosql', 
            description: 'Key-Value (DynamoDB), Document (MongoDB), Columnar (Cassandra), Graph (Neo4j)',
            part: 'III.2',
            duration: '2 weeks',
            level: 'Intermediate'
          },
          { 
            name: 'Distributed Storage', 
            link: '#distributed-storage', 
            description: 'HDFS, Ceph, GFS, object storage, erasure coding vs replication',
            part: 'III.3',
            duration: '2 weeks',
            level: 'Advanced'
          },
          { 
            name: 'Storage Engines', 
            link: '#storage-engines', 
            description: 'B-Trees vs LSM Trees, write amplification, and compaction',
            part: 'III.4',
            duration: '1 week',
            level: 'Advanced'
          },
          { 
            name: 'Indexing Systems', 
            link: '#indexing', 
            description: 'Inverted indexes, bitmap indexes, Lucene/ElasticSearch internals',
            part: 'III.5',
            duration: '2 weeks',
            level: 'Intermediate'
          },
          { 
            name: 'Vector Databases', 
            link: '#vector-db', 
            description: 'ANN search, embeddings, FAISS, Pinecone, and Weaviate',
            part: 'III.6',
            duration: '2 weeks',
            level: 'Expert'
          }
        ]
      },
      {
        title: 'Consistency & Replication',
        topics: [
          { 
            name: 'Strong Consistency', 
            link: '#strong-consistency', 
            description: 'Linearizability, serializability, and strict isolation guarantees',
            part: 'III.7',
            duration: '2 weeks',
            level: 'Advanced'
          },
          { 
            name: 'Eventual Consistency', 
            link: '#eventual', 
            description: 'Conflict resolution, CRDTs, anti-entropy, and read repair',
            part: 'III.8',
            duration: '1 week',
            level: 'Intermediate'
          },
          { 
            name: 'Causal Consistency', 
            link: '#causal', 
            description: 'Vector clocks, Lamport timestamps, and dependency tracking',
            part: 'III.9',
            duration: '1 week',
            level: 'Advanced'
          },
          { 
            name: 'Replication Strategies', 
            link: '#replication', 
            description: 'Leader-based vs leaderless replication, async vs sync tradeoffs',
            part: 'III.10',
            duration: '1 week',
            level: 'Intermediate'
          },
          { 
            name: 'Quorum Mechanics', 
            link: '#quorum-mechanics', 
            description: 'Read-after-write, monotonic reads, and tunable consistency (R+W>N)',
            part: 'III.11',
            duration: '1 week',
            level: 'Advanced'
          },
          { 
            name: 'Consensus Protocols', 
            link: '#consensus', 
            description: 'Paxos, Raft, and Byzantine fault tolerance in distributed databases',
            part: 'III.12',
            duration: '2 weeks',
            level: 'Expert'
          }
        ]
      },
      {
        title: 'Modern Data Architectures',
        topics: [
          { 
            name: 'HTAP Systems', 
            link: '#htap', 
            description: 'Hybrid transactional/analytical processing (TiDB, Spanner, SingleStore)',
            part: 'III.13',
            duration: '2 weeks',
            level: 'Advanced'
          },
          { 
            name: 'Time-Series Databases', 
            link: '#timeseries', 
            description: 'TSDB internals (InfluxDB, TimescaleDB, Prometheus)',
            part: 'III.14',
            duration: '1 week',
            level: 'Intermediate'
          },
          { 
            name: 'Graph Databases', 
            link: '#graph-db', 
            description: 'Property graphs vs triple stores, traversal and query models (Gremlin, Cypher)',
            part: 'III.15',
            duration: '1 week',
            level: 'Advanced'
          },
          { 
            name: 'Data Warehousing & OLAP', 
            link: '#olap', 
            description: 'Snowflake, BigQuery, Redshift internals, columnar storage, MPP engines',
            part: 'III.16',
            duration: '2 weeks',
            level: 'Advanced'
          },
          { 
            name: 'Database Sharding & Partitioning', 
            link: '#db-sharding', 
            description: 'Horizontal partitioning, range vs hash vs consistent hashing strategies',
            part: 'III.17',
            duration: '2 weeks',
            level: 'Advanced'
          },
          { 
            name: 'Backup & Recovery', 
            link: '#backup', 
            description: 'Point-in-time recovery, snapshotting, and disaster recovery',
            part: 'III.18',
            duration: '1 week',
            level: 'Intermediate'
          }
        ]
      }
    ],
  
    caching: [
      {
        title: 'Caching Systems & Strategies',
        topics: [
          { 
            name: 'Memory Caches', 
            link: '#memory-caches', 
            description: 'Redis, Memcached internals, eviction policies (LRU, LFU), and persistence tradeoffs',
            part: 'IV.1',
            duration: '2 weeks',
            level: 'Intermediate'
          },
          { 
            name: 'CDN Design', 
            link: '#cdn', 
            description: 'Content delivery networks, edge caching, invalidation at scale (Cloudflare, Akamai)',
            part: 'IV.2',
            duration: '1 week',
            level: 'Intermediate'
          },
          { 
            name: 'Cache Invalidation', 
            link: '#invalidation', 
            description: 'Write-through, write-behind, refresh-ahead, and near-cache patterns',
            part: 'IV.3',
            duration: '1 week',
            level: 'Intermediate'
          },
          { 
            name: 'Cache Patterns', 
            link: '#cache-patterns', 
            description: 'Cache-aside, read-through, write-through, hybrid strategies',
            part: 'IV.4',
            duration: '1 week',
            level: 'Beginner'
          },
          { 
            name: 'Distributed Caching', 
            link: '#distributed-cache', 
            description: 'Consistent hashing, quorum reads/writes, and cache coherence',
            part: 'IV.5',
            duration: '2 weeks',
            level: 'Advanced'
          },
          { 
            name: 'Tiered Caching', 
            link: '#tiered-caching', 
            description: 'Browser, edge, regional, and origin cache layering',
            part: 'IV.6',
            duration: '1 week',
            level: 'Advanced'
          },
          { 
            name: 'Database Caching', 
            link: '#db-caching', 
            description: 'Query result caching, materialized views, and index caching',
            part: 'IV.7',
            duration: '1 week',
            level: 'Intermediate'
          }
        ]
      },
      {
        title: 'Message Brokers & Streaming',
        topics: [
          { 
            name: 'Message Queues', 
            link: '#message-queues', 
            description: 'RabbitMQ, SQS, durability guarantees, and delivery semantics (at-most-once, at-least-once, exactly-once)',
            part: 'IV.8',
            duration: '2 weeks',
            level: 'Intermediate'
          },
          { 
            name: 'Log-based Systems', 
            link: '#log-systems', 
            description: 'Kafka, Pulsar internals, partitioning, leader election, and replication',
            part: 'IV.9',
            duration: '2 weeks',
            level: 'Advanced'
          },
          { 
            name: 'Stream Processing', 
            link: '#stream-processing', 
            description: 'Flink, Spark Streaming, state management, watermarking, and time windows',
            part: 'IV.10',
            duration: '2 weeks',
            level: 'Advanced'
          },
          { 
            name: 'Event-driven Architecture', 
            link: '#event-driven', 
            description: 'CQRS, event sourcing, and async orchestration vs choreography',
            part: 'IV.11',
            duration: '1 week',
            level: 'Intermediate'
          },
          { 
            name: 'Backpressure & Flow Control', 
            link: '#backpressure', 
            description: 'Consumer groups, reactive streams, and rate adaptation',
            part: 'IV.12',
            duration: '1 week',
            level: 'Advanced'
          },
          { 
            name: 'Ordering & Exactly-once Semantics', 
            link: '#exactly-once', 
            description: 'Idempotency keys, deduplication, and transactional messaging',
            part: 'IV.13',
            duration: '1 week',
            level: 'Expert'
          },
          { 
            name: 'Real-time Analytics Pipelines', 
            link: '#realtime-analytics', 
            description: 'Lambda vs Kappa architectures, OLAP on streams, and stateful aggregations',
            part: 'IV.14',
            duration: '2 weeks',
            level: 'Expert'
          }
        ]
      }
    ],
  
    security: [
        {
          title: 'Authentication & Authorization',
          topics: [
            { 
              name: 'OAuth 2.0 & OpenID Connect', 
              link: '#oauth', 
              description: 'Authorization flows and token management', 
              part: 'VI.1', 
              duration: '2 weeks', 
              level: 'Intermediate' 
            },
            { 
              name: 'JWT & Token Management', 
              link: '#jwt', 
              description: 'Stateless authentication patterns and security', 
              part: 'VI.2', 
              duration: '1 week', 
              level: 'Intermediate' 
            },
            { 
              name: 'RBAC/ABAC', 
              link: '#rbac', 
              description: 'Role-based and attribute-based access control', 
              part: 'VI.3', 
              duration: '1 week', 
              level: 'Intermediate' 
            },
            { 
              name: 'Policy Engines', 
              link: '#policy-engines', 
              description: 'Policy-as-code and decision points', 
              part: 'VI.4', 
              duration: '1 week', 
              level: 'Advanced' 
            },
            { 
              name: 'Zero Trust Architecture', 
              link: '#zero-trust', 
              description: 'Never trust, always verify principles', 
              part: 'VI.5', 
              duration: '1 week', 
              level: 'Advanced' 
            },
            { 
              name: 'Federated Identity & SSO', 
              link: '#sso', 
              description: 'SAML, LDAP, Kerberos, and cross-organization identity', 
              part: 'VI.6', 
              duration: '1 week', 
              level: 'Advanced' 
            }
          ]
        },
        {
          title: 'Data Security & Threat Modeling',
          topics: [
            { 
              name: 'Encryption', 
              link: '#encryption', 
              description: 'TLS, AES, RSA implementations and key management', 
              part: 'VI.7', 
              duration: '2 weeks', 
              level: 'Intermediate' 
            },
            { 
              name: 'Secure Storage', 
              link: '#secure-storage', 
              description: 'Hardware security modules and key rotation', 
              part: 'VI.8', 
              duration: '1 week', 
              level: 'Advanced' 
            },
            { 
              name: 'Threat Modeling', 
              link: '#threat-modeling', 
              description: 'STRIDE and DREAD methodologies', 
              part: 'VI.9', 
              duration: '1 week', 
              level: 'Intermediate' 
            },
            { 
              name: 'DDoS Protection', 
              link: '#ddos', 
              description: 'Rate limiting, WAF, and mitigation strategies', 
              part: 'VI.10', 
              duration: '1 week', 
              level: 'Intermediate' 
            },
            { 
              name: 'Privacy Techniques', 
              link: '#privacy', 
              description: 'Differential privacy and secure multi-party computation', 
              part: 'VI.11', 
              duration: '1 week', 
              level: 'Advanced' 
            },
            { 
              name: 'Data Masking & Tokenization', 
              link: '#data-masking', 
              description: 'PII protection and anonymization strategies', 
              part: 'VI.12', 
              duration: '1 week', 
              level: 'Intermediate' 
            }
          ]
        },
        {
          title: 'Infrastructure & Application Security',
          topics: [
            { 
              name: 'Network Security', 
              link: '#network-security', 
              description: 'Firewalls, VPNs, service-to-service encryption', 
              part: 'VI.13', 
              duration: '1 week', 
              level: 'Intermediate' 
            },
            { 
              name: 'Container & Cloud Security', 
              link: '#cloud-security', 
              description: 'Kubernetes RBAC, secret management, and workload isolation', 
              part: 'VI.14', 
              duration: '2 weeks', 
              level: 'Advanced' 
            },
            { 
              name: 'Supply Chain Security', 
              link: '#supply-chain', 
              description: 'SBOMs, dependency scanning, and artifact signing', 
              part: 'VI.15', 
              duration: '1 week', 
              level: 'Advanced' 
            },
            { 
              name: 'API Security', 
              link: '#api-security', 
              description: 'OWASP API Top 10, input validation, and rate limiting', 
              part: 'VI.16', 
              duration: '1 week', 
              level: 'Intermediate' 
            },
            { 
              name: 'Secure CI/CD', 
              link: '#secure-cicd', 
              description: 'Shift-left security, secret scanning, and pipeline hardening', 
              part: 'VI.17', 
              duration: '1 week', 
              level: 'Advanced' 
            }
          ]
        },
        {
          title: 'Modern Security Paradigms',
          topics: [
            { 
              name: 'Identity-aware Proxies', 
              link: '#iap', 
              description: 'BeyondCorp and access proxy architectures', 
              part: 'VI.18', 
              duration: '1 week', 
              level: 'Advanced' 
            },
            { 
              name: 'Runtime Application Self-Protection (RASP)', 
              link: '#rasp', 
              description: 'Real-time threat detection inside applications', 
              part: 'VI.19', 
              duration: '1 week', 
              level: 'Expert' 
            },
            { 
              name: 'Secure Multi-tenancy', 
              link: '#multi-tenancy', 
              description: 'Tenant isolation in SaaS and cloud-native platforms', 
              part: 'VI.20', 
              duration: '1 week', 
              level: 'Expert' 
            },
            { 
              name: 'Post-quantum Cryptography', 
              link: '#post-quantum', 
              description: 'Quantum-resistant algorithms and migration strategies', 
              part: 'VI.21', 
              duration: '2 weeks', 
              level: 'Expert' 
            }
          ]
        }
    ],
    
    patterns: [
    {
        title: 'Architectural Patterns',
        topics: [
        { 
            name: 'Microservices vs Monoliths', 
            link: '#microservices', 
            description: 'Decomposition strategies, domain-driven design, and tradeoffs', 
            part: 'V.1', 
            duration: '2 weeks', 
            level: 'Intermediate' 
        },
        { 
            name: 'API Gateways', 
            link: '#api-gateway', 
            description: 'Routing, composition, protocol translation, and BFF (Backend for Frontend)', 
            part: 'V.2', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Circuit Breaker', 
            link: '#circuit-breaker', 
            description: 'Failure containment, retries, and graceful degradation', 
            part: 'V.3', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Sidecar Pattern', 
            link: '#sidecar', 
            description: 'Service mesh, observability, and cross-cutting concerns', 
            part: 'V.4', 
            duration: '1 week', 
            level: 'Advanced' 
        },
        { 
            name: 'Event Sourcing & CQRS', 
            link: '#eventsourcing', 
            description: 'Event-driven data management and query segregation', 
            part: 'V.5', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Saga Pattern', 
            link: '#saga', 
            description: 'Managing distributed transactions in microservices', 
            part: 'V.6', 
            duration: '1 week', 
            level: 'Advanced' 
        },
        { 
            name: 'Strangler Fig Pattern', 
            link: '#strangler', 
            description: 'Incrementally migrating monoliths to microservices', 
            part: 'V.7', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Bulkhead Pattern', 
            link: '#bulkhead', 
            description: 'Fault isolation and resilience in distributed systems', 
            part: 'V.8', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Sharding & Partitioning', 
            link: '#sharding', 
            description: 'Database scaling, partition strategies, and tradeoffs', 
            part: 'V.9', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Command Pattern in Cloud Systems', 
            link: '#command-pattern', 
            description: 'Encapsulating operations for scalability and retries', 
            part: 'V.10', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Pipes and Filters', 
            link: '#pipes-filters', 
            description: 'Streaming pipelines for ETL, big data, and observability', 
            part: 'V.11', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Hexagonal / Ports & Adapters Architecture', 
            link: '#hexagonal', 
            description: 'Domain isolation, testability, and clean abstractions', 
            part: 'V.12', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Onion & Clean Architecture', 
            link: '#clean-arch', 
            description: 'Dependency inversion and maintainable enterprise design', 
            part: 'V.13', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Serverless Architectures', 
            link: '#serverless', 
            description: 'Function-as-a-Service, event-driven scalability, and cold starts', 
            part: 'V.14', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Multi-Region & Geo-Distributed Patterns', 
            link: '#geo-distribution', 
            description: 'Data replication, CAP theorem tradeoffs, and active-active systems', 
            part: 'V.15', 
            duration: '2 weeks', 
            level: 'Expert' 
        },
        { 
            name: 'Data Mesh & Data Lake Architectures', 
            link: '#data-mesh', 
            description: 'Domain-oriented data ownership and distributed data governance', 
            part: 'V.16', 
            duration: '2 weeks', 
            level: 'Expert' 
        },
        { 
            name: 'AI-Driven Architectures', 
            link: '#ai-patterns', 
            description: 'Feature stores, model serving, and real-time ML pipelines', 
            part: 'V.17', 
            duration: '2 weeks', 
            level: 'Expert' 
        }
        ]
    },
    {
        title: 'System Building Blocks',
        topics: [
        { 
            name: 'REST, GraphQL, gRPC', 
            link: '#apis', 
            description: 'API design and performance characteristics', 
            part: 'IV.1', 
            duration: '2 weeks', 
            level: 'Intermediate' 
        },
        { 
            name: 'Service Meshes', 
            link: '#service-mesh', 
            description: 'Istio, Linkerd service discovery and security', 
            part: 'IV.2', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'API Rate Limiting', 
            link: '#rate-limiting', 
            description: 'Token bucket, leaky bucket algorithms', 
            part: 'IV.3', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Service Discovery', 
            link: '#service-discovery', 
            description: 'Client-side vs server-side discovery patterns', 
            part: 'IV.4', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Configuration Management', 
            link: '#config-mgmt', 
            description: 'Dynamic configuration and feature flags', 
            part: 'IV.5', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Message Queues & Pub/Sub', 
            link: '#messaging-systems', 
            description: 'Kafka, RabbitMQ, durability, and ordering guarantees', 
            part: 'IV.6', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Load Balancing', 
            link: '#load-balancing', 
            description: 'Round robin, least connections, and consistent hashing', 
            part: 'IV.7', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Scheduling & Orchestration', 
            link: '#orchestration', 
            description: 'Kubernetes, task scheduling, and container orchestration', 
            part: 'IV.8', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Authentication & Authorization', 
            link: '#auth', 
            description: 'OAuth2, JWT, role-based access control', 
            part: 'IV.9', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Monitoring & Observability', 
            link: '#observability', 
            description: 'Metrics, logging, tracing with Prometheus, Grafana, OpenTelemetry', 
            part: 'IV.10', 
            duration: '2 weeks', 
            level: 'Intermediate' 
        },
        { 
            name: 'Consensus Algorithms', 
            link: '#consensus', 
            description: 'Raft, Paxos, ZAB for distributed consistency', 
            part: 'IV.11', 
            duration: '2 weeks', 
            level: 'Expert' 
        },
        { 
            name: 'Edge Computing & CDNs', 
            link: '#edge-computing', 
            description: 'Latency reduction, caching, and edge patterns', 
            part: 'IV.12', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Security & Zero Trust', 
            link: '#security', 
            description: 'Encryption at scale, identity-aware proxies, zero-trust networks', 
            part: 'IV.13', 
            duration: '2 weeks', 
            level: 'Expert' 
        },
        { 
            name: 'Storage Engines & File Systems', 
            link: '#storage', 
            description: 'B-Trees, LSM-Trees, distributed filesystems like HDFS', 
            part: 'IV.14', 
            duration: '2 weeks', 
            level: 'Advanced' 
        }
        ]
    },
    {
        title: 'Meta-Patterns & Philosophies',
        topics: [
        { 
            name: 'Twelve-Factor App', 
            link: '#12factor', 
            description: 'Cloud-native principles for SaaS apps', 
            part: 'VI.1', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Reactive Manifesto', 
            link: '#reactive', 
            description: 'Responsive, resilient, elastic, message-driven systems', 
            part: 'VI.2', 
            duration: '1 week', 
            level: 'Advanced' 
        },
        { 
            name: 'CAP & PACELC Theorem', 
            link: '#cap-pacelc', 
            description: 'Consistency, availability, latency tradeoffs in distributed systems', 
            part: 'VI.3', 
            duration: '1 week', 
            level: 'Expert' 
        },
        { 
            name: 'Cloud-Native Principles', 
            link: '#cloud-native', 
            description: 'Immutable infrastructure, declarative APIs, container orchestration', 
            part: 'VI.4', 
            duration: '1 week', 
            level: 'Intermediate' 
        }
        ]
    }
    ],
    
    caseStudies: [
    {
        title: 'Classic System Design Problems',
        topics: [
        { 
            name: 'URL Shortener', 
            link: '#url-shortener', 
            description: 'Hash algorithms, key generation, and redirection systems', 
            part: 'VIII.1', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Rate Limiter', 
            link: '#rate-limiter', 
            description: 'Distributed rate limiting algorithms', 
            part: 'VIII.2', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Distributed Cache', 
            link: '#distributed-cache-problem', 
            description: 'Consistent hashing, eviction policies, and cache coherence', 
            part: 'VIII.3', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Search Autocomplete', 
            link: '#autocomplete', 
            description: 'Trie structures, ranking algorithms, and prefix queries', 
            part: 'VIII.4', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'News Feed System', 
            link: '#news-feed', 
            description: 'Fan-out-on-write vs fan-out-on-read, ranking, and freshness', 
            part: 'VIII.5', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'File Storage System', 
            link: '#file-storage', 
            description: 'Sharding, replication, and metadata management', 
            part: 'VIII.6', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Notification System', 
            link: '#notification-system', 
            description: 'Push notifications, retries, and delivery guarantees', 
            part: 'VIII.7', 
            duration: '1 week', 
            level: 'Intermediate' 
        },
        { 
            name: 'Video Upload & Processing', 
            link: '#video-processing', 
            description: 'Transcoding pipelines, CDN distribution, and storage optimization', 
            part: 'VIII.8', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Web Crawler', 
            link: '#web-crawler', 
            description: 'Politeness policies, distributed crawling, and indexing', 
            part: 'VIII.9', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Analytics Pipeline', 
            link: '#analytics-pipeline', 
            description: 'Batch vs streaming, ETL pipelines, and data warehouses', 
            part: 'VIII.10', 
            duration: '2 weeks', 
            level: 'Advanced' 
        }
        ]
    },
    {
        title: 'Real-world Large Systems',
        topics: [
        { 
            name: 'Google Search', 
            link: '#google', 
            description: 'PageRank, distributed indexing, and query serving', 
            part: 'VIII.11', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Netflix Streaming', 
            link: '#netflix', 
            description: 'Microservices, CDN, and recommendation engines', 
            part: 'VIII.12', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'WhatsApp / Slack', 
            link: '#messaging', 
            description: 'Real-time messaging at billion-user scale', 
            part: 'VIII.13', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Uber / Lyft', 
            link: '#ride-sharing', 
            description: 'Real-time geolocation, matching algorithms, and surge pricing', 
            part: 'VIII.14', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Payment Systems (Stripe, PayPal)', 
            link: '#payments', 
            description: 'Transaction processing, fraud detection, and ledger consistency', 
            part: 'VIII.15', 
            duration: '2 weeks', 
            level: 'Expert' 
        },
        { 
            name: 'Amazon E-commerce', 
            link: '#amazon', 
            description: 'Inventory management, recommendation systems, and checkout scalability', 
            part: 'VIII.16', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Airbnb', 
            link: '#airbnb', 
            description: 'Real-time booking systems, availability search, and user reviews', 
            part: 'VIII.17', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Facebook / Instagram', 
            link: '#social-media', 
            description: 'Feed ranking, content delivery, and large-scale data pipelines', 
            part: 'VIII.18', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'YouTube', 
            link: '#youtube', 
            description: 'Video ingestion, recommendation systems, and global content delivery', 
            part: 'VIII.19', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Spotify', 
            link: '#spotify', 
            description: 'Music streaming, collaborative filtering, and real-time sync', 
            part: 'VIII.20', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'TikTok / Reels', 
            link: '#tiktok', 
            description: 'Short video recommendation, ranking algorithms, and personalization', 
            part: 'VIII.21', 
            duration: '2 weeks', 
            level: 'Expert' 
        },
        { 
            name: 'Cloud Storage (Dropbox, Google Drive)', 
            link: '#cloud-storage', 
            description: 'File sync, deduplication, and distributed storage consistency', 
            part: 'VIII.22', 
            duration: '2 weeks', 
            level: 'Advanced' 
        }
        ]
    },
    {
        title: 'Emerging & Specialized Systems',
        topics: [
        { 
            name: 'Blockchain Platforms', 
            link: '#blockchain', 
            description: 'Consensus mechanisms, smart contracts, and scalability challenges', 
            part: 'VIII.23', 
            duration: '2 weeks', 
            level: 'Expert' 
        },
        { 
            name: 'IoT Platforms', 
            link: '#iot', 
            description: 'Device management, edge computing, and real-time analytics', 
            part: 'VIII.24', 
            duration: '2 weeks', 
            level: 'Advanced' 
        },
        { 
            name: 'Real-time Collaboration (Google Docs, Figma)', 
            link: '#collaboration', 
            description: 'Operational transforms, CRDTs, and conflict resolution', 
            part: 'VIII.25', 
            duration: '2 weeks', 
            level: 'Expert' 
        },
        { 
            name: 'AI/ML Systems (OpenAI, TensorFlow Serving)', 
            link: '#ml-systems', 
            description: 'Model training pipelines, feature stores, and model deployment', 
            part: 'VIII.26', 
            duration: '2 weeks', 
            level: 'Expert' 
        },
        { 
            name: 'Ad Tech Systems (Google Ads, Facebook Ads)', 
            link: '#adtech', 
            description: 'Real-time bidding, targeting, and fraud detection', 
            part: 'VIII.27', 
            duration: '2 weeks', 
            level: 'Expert' 
        },
        { 
            name: 'High-frequency Trading Systems', 
            link: '#hft', 
            description: 'Low-latency messaging, risk management, and algorithmic trading', 
            part: 'VIII.28', 
            duration: '2 weeks', 
            level: 'Expert' 
        }
        ]
    }
    ]
  };
  
  export default contentData;