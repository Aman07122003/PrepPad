const interviewSections = [
    {
      id: 'introduction',
      title: 'Introduction / Ice-Breakers',
      scenario: "Let's start by getting to know you better and understanding your career journey",
      questions: [
        {
          q: 'Walk me through your resume and highlight what brings you here today.',
          a: 'I started my career at [Previous Company] where I focused on [Key Technology]. There, I led the development of [Major Project] which improved system performance by 40%. I then moved to [Current Company] where I\'ve been working on [Current Project] using [Technologies]. I\'m excited about this opportunity because I\'m looking to tackle more complex scalability challenges, which aligns perfectly with the work your team is doing.',
          tips: [
            'Keep it concise (2-3 minutes max)',
            'Connect your experience to the role',
            'Show career progression and learning',
            'End with why you\'re interested in this specific role'
          ]
        },
        {
          q: 'What do you know about our company and why does our mission resonate with you?',
          a: 'I\'ve been following your work in [Industry Domain] and I\'m particularly impressed by your approach to [Specific Product/Technology]. Your recent launch of [Feature] demonstrates a commitment to innovation that I find exciting. The company\'s focus on [Value Proposition] aligns with my own professional values of building impactful, user-centric solutions.',
          tips: [
            'Research the company mission and recent news',
            'Connect company values to your own',
            'Mention specific products or features',
            'Show genuine interest, not just generic praise'
          ]
        },
        {
          q: 'Looking at your career transitions, what was the driving factor behind each move?',
          a: 'My career moves have been driven by seeking greater technical challenges and opportunities for impact. From [First Role] to [Current Role], each transition was about taking on more responsibility, working with more complex systems, and contributing to products with larger user bases. This role represents the next logical step in that growth trajectory.',
          tips: [
            'Show purposeful career progression',
            'Focus on growth and learning opportunities',
            'Avoid negative reasons for leaving previous roles',
            'Connect past experiences to future goals'
          ]
        },
        {
          q: 'What aspects of this role are most exciting to you, and which do you find most challenging?',
          a: 'I\'m particularly excited about the opportunity to work on [Specific Challenge] and the chance to collaborate with your experienced team. The most challenging aspect appears to be [Specific Challenge], but that\'s exactly what makes it appealing - I thrive on solving complex problems and growing through new challenges.',
          tips: [
            'Be honest but positive about challenges',
            'Show self-awareness about growth areas',
            'Frame challenges as opportunities',
            'Connect to your learning mindset'
          ]
        },
        {
          q: 'How would your previous manager describe your strengths and areas for development?',
          a: 'My previous manager would likely highlight my technical leadership and ability to drive projects to completion. They might mention that I could improve on delegating more effectively as I tend to take on significant ownership. This is something I\'ve been actively working on by mentoring junior team members.',
          tips: [
            'Be authentic and self-aware',
            'Show you accept constructive feedback',
            'Demonstrate growth and improvement',
            'Balance strengths with development areas'
          ]
        }
      ]
    },
    {
      id: 'technical_depth',
      title: 'Technical Depth & Architecture',
      scenario: "Now let's dive into your technical expertise and system design thinking",
      questions: [
        {
          q: 'Describe the most complex system you\'ve designed or significantly contributed to. What were the key architectural decisions and trade-offs?',
          a: 'I designed a distributed payment processing system that needed to handle 10,000 transactions per second. Key decisions included using Kafka for event streaming to ensure durability, implementing circuit breakers for third-party API calls, and choosing eventual consistency for the user balance service to prioritize availability. The main trade-off was accepting potential temporary data inconsistency in exchange for system resilience and performance.',
          tips: [
            'Choose a sufficiently complex system',
            'Explain the "why" behind decisions',
            'Discuss trade-offs explicitly',
            'Quantify scale and impact where possible'
          ]
        },
        {
          q: 'Tell me about a time you had to scale a system significantly. What bottlenecks did you encounter and how did you address them?',
          a: 'When our user base grew from 10K to 1M users, we faced database connection limits and slow query performance. I led the migration from a monolithic database to sharded MySQL clusters, implemented Redis caching for frequently accessed data, and added read replicas. This reduced p95 latency from 2s to 200ms and allowed us to handle 10x more concurrent users.',
          tips: [
            'Use specific metrics and numbers',
            'Explain both technical and organizational challenges',
            'Describe your role in the solution',
            'Highlight lessons learned'
          ]
        },
        {
          q: 'How do you approach technical debt in a fast-moving product environment?',
          a: 'I advocate for a balanced approach. We allocate 20% of each sprint to addressing technical debt, prioritize based on impact vs effort, and ensure new features are built with maintainability in mind. I also maintain a technical debt register and regularly review it with the team to make informed decisions about when to pay down debt.',
          tips: [
            'Show understanding of business constraints',
            'Provide concrete strategies',
            'Discuss prioritization frameworks',
            'Mention collaboration with product teams'
          ]
        },
        {
          q: 'Describe your experience with microservices architecture. What challenges have you faced and how did you overcome them?',
          a: 'I\'ve led two major migrations to microservices. The biggest challenges were distributed tracing, data consistency, and team coordination. We implemented OpenTelemetry for observability, used Saga pattern for distributed transactions, and established clear domain boundaries and team ownership. This improved deployment frequency by 5x while maintaining system reliability.',
          tips: [
            'Discuss both benefits and challenges',
            'Mention specific patterns and tools',
            'Quantify improvements',
            'Show learning from experience'
          ]
        },
        {
          q: 'How do you ensure system reliability and handle failure scenarios in distributed systems?',
          a: 'I implement comprehensive failure handling through circuit breakers, retry mechanisms with exponential backoff, and graceful degradation. We conduct regular chaos engineering experiments, have detailed runbooks for common failure scenarios, and maintain comprehensive monitoring with alerting. Our systems are designed to fail gracefully rather than catastrophically.',
          tips: [
            'Discuss specific reliability patterns',
            'Mention monitoring and observability',
            'Talk about testing strategies',
            'Show proactive approach to reliability'
          ]
        },
        {
          q: 'What\'s your experience with cloud-native technologies and container orchestration?',
          a: 'I have extensive experience with Kubernetes, having managed production clusters serving millions of users. I\'ve implemented GitOps workflows with ArgoCD, built custom operators for complex stateful applications, and optimized resource utilization through HPA and VPA. This reduced our infrastructure costs by 30% while improving availability.',
          tips: [
            'Be specific about technologies and scale',
            'Discuss cost optimization',
            'Mention automation and workflows',
            'Quantify business impact'
          ]
        }
      ]
    },
    {
      id: 'coding_problem_solving',
      title: 'Coding & Algorithmic Thinking',
      scenario: "Let's explore your approach to coding challenges and algorithmic problem-solving",
      questions: [
        {
          q: 'How do you approach optimizing an algorithm for both time and space complexity?',
          a: 'I start by analyzing the current complexity and identifying bottlenecks. Then I consider trade-offs - sometimes accepting higher space complexity for better time performance, or vice versa. I use profiling tools to validate improvements and always consider readability and maintainability alongside performance.',
          tips: [
            'Discuss Big O analysis',
            'Mention profiling and measurement',
            'Consider real-world constraints',
            'Balance performance with code quality'
          ]
        },
        {
          q: 'Describe your process for code review. What do you look for and how do you provide constructive feedback?',
          a: 'I focus on several key areas: correctness, performance, security, and maintainability. I always start with positive feedback, then ask clarifying questions rather than making assumptions. For issues, I explain the "why" behind my suggestions and provide concrete examples. This collaborative approach has helped improve our code quality significantly.',
          tips: [
            'Be specific about review criteria',
            'Emphasize collaborative approach',
            'Discuss communication techniques',
            'Show impact on team quality'
          ]
        },
        {
          q: 'How do you handle legacy code when you need to make significant changes?',
          a: 'I start by understanding the existing behavior through tests and documentation. Then I use the "strangler pattern" to gradually replace components while maintaining system stability. I ensure comprehensive test coverage before making changes and use feature flags to control rollout. This minimizes risk while enabling modernization.',
          tips: [
            'Discuss incremental approach',
            'Emphasize testing and safety',
            'Mention specific refactoring patterns',
            'Show risk management'
          ]
        },
        {
          q: 'What\'s your experience with different database technologies and how do you choose between them?',
          a: 'I\'ve worked with relational databases (PostgreSQL, MySQL), NoSQL (MongoDB, Cassandra), and specialized systems like Redis and Elasticsearch. The choice depends on data structure, access patterns, consistency requirements, and scale. I create decision matrices evaluating factors like ACID requirements, scalability needs, and operational complexity.',
          tips: [
            'Show breadth of experience',
            'Discuss decision frameworks',
            'Consider multiple factors',
            'Mention specific use cases'
          ]
        },
        {
          q: 'How do you ensure code quality and prevent regressions in a large codebase?',
          a: 'We use multiple layers of defense: comprehensive unit and integration tests, static analysis tools, code review processes, and continuous integration pipelines. I also advocate for architectural decision records and coding standards to maintain consistency. Our test automation catches 95% of regressions before they reach production.',
          tips: [
            'Discuss multiple quality gates',
            'Mention specific tools and practices',
            'Quantify effectiveness',
            'Show holistic approach'
          ]
        }
      ]
    },
    {
      id: 'leadership_collaboration',
      title: 'Leadership & Collaboration',
      scenario: "Let's discuss your experience working in teams and leading technical initiatives",
      questions: [
        {
          q: 'Describe a situation where you had to influence technical direction without formal authority. How did you build consensus?',
          a: 'When our team was considering adopting microservices, I organized a series of brown bag sessions to educate the team on the benefits and challenges. I created a proof-of-concept that demonstrated the value and worked with skeptical team members to address their concerns. Through data-driven arguments and incremental adoption, we gradually built consensus and successfully migrated our core services.',
          tips: [
            'Show emotional intelligence',
            'Demonstrate persistence and patience',
            'Highlight use of data and evidence',
            'Emphasize team ownership of decisions'
          ]
        },
        {
          q: 'How do you handle situations where product requirements conflict with technical best practices?',
          a: 'I approach these situations as collaborative problem-solving exercises. I clearly articulate the technical implications of different approaches, provide data on long-term costs, and work with product managers to find solutions that meet business needs while maintaining system health. Often, we can find a middle ground or phase improvements over time.',
          tips: [
            'Show business acumen',
            'Avoid "us vs them" mentality',
            'Provide concrete examples of compromise',
            'Focus on shared goals'
          ]
        },
        {
          q: 'Tell me about a time you mentored a junior engineer. What was your approach and what was the outcome?',
          a: 'I mentored a new grad engineer by pairing on complex features, conducting regular code reviews with constructive feedback, and gradually increasing their ownership of components. Within 6 months, they were independently leading medium-complexity features and mentoring interns themselves. The key was balancing support with autonomy.',
          tips: [
            'Show specific mentoring techniques',
            'Quantify the growth of the mentee',
            'Discuss both technical and soft skills development',
            'Highlight the impact on team productivity'
          ]
        },
        {
          q: 'Describe your experience working with cross-functional teams. How do you ensure effective collaboration?',
          a: 'I regularly work with product, design, and data science teams. I establish clear communication channels, participate in early planning sessions, and ensure technical constraints are understood upfront. By involving stakeholders throughout the development process and maintaining transparency, we deliver better outcomes faster.',
          tips: [
            'Discuss specific collaboration techniques',
            'Emphasize communication and transparency',
            'Show understanding of different perspectives',
            'Highlight successful outcomes'
          ]
        },
        {
          q: 'How do you handle conflicting priorities between multiple stakeholders?',
          a: 'I use a structured approach: first understand each stakeholder\'s underlying needs, then facilitate discussions to find common ground. I create priority matrices considering business impact, urgency, and dependencies. When conflicts persist, I escalate with clear rationale and data to support decision-making.',
          tips: [
            'Show structured decision-making',
            'Discuss facilitation skills',
            'Mention escalation strategies',
            'Emphasize data-driven approach'
          ]
        },
        {
          q: 'What\'s your approach to technical documentation and knowledge sharing?',
          a: 'I believe documentation should be living and useful. We maintain architecture decision records, runbooks for operational procedures, and ensure code is self-documenting where possible. I champion knowledge sharing through tech talks, documentation sprints, and making documentation part of our definition of done.',
          tips: [
            'Discuss different types of documentation',
            'Emphasize practicality and maintenance',
            'Mention knowledge sharing culture',
            'Show integration with development process'
          ]
        }
      ]
    },
    {
      id: 'problem_solving',
      title: 'Problem Solving & Critical Thinking',
      scenario: "I'd like to understand how you approach complex, ambiguous problems",
      questions: [
        {
          q: 'Describe the most challenging bug you\'ve ever debugged. Walk me through your investigation process.',
          a: 'We had an intermittent memory leak that only occurred under specific production load patterns. I started by analyzing heap dumps and GC logs, then set up detailed monitoring to capture the exact conditions. I discovered it was a race condition in our caching layer where objects weren\'t being properly evicted. The solution involved implementing proper synchronization and adding comprehensive tests for edge cases.',
          tips: [
            'Show systematic approach to debugging',
            'Discuss tools and techniques used',
            'Explain how you prevented recurrence',
            'Highlight persistence and attention to detail'
          ]
        },
        {
          q: 'How do you approach learning a completely new technology or domain?',
          a: 'I start by understanding the fundamental concepts and use cases, then build a small project to get hands-on experience. I complement this with reading documentation, studying production use cases, and discussing with experts. For our recent migration to Kubernetes, I created a personal cluster, deployed sample applications, and gradually built up to production workloads.',
          tips: [
            'Show structured learning approach',
            'Combine theory with practice',
            'Mention knowledge sharing with team',
            'Discuss how you evaluate new technologies'
          ]
        },
        {
          q: 'Tell me about a time you had to make a important technical decision with incomplete information.',
          a: 'When choosing our data storage solution for a new feature, we had limited time for evaluation. I created a decision matrix comparing options across criteria like scalability, operational complexity, and team expertise. We chose DynamoDB based on our immediate needs while designing the system to allow future migration if requirements changed significantly.',
          tips: [
            'Show decision-making framework',
            'Discuss risk mitigation strategies',
            'Emphasize adaptability and future-thinking',
            'Acknowledge uncertainty while showing confidence in process'
          ]
        },
        {
          q: 'Describe a situation where you had to troubleshoot a production incident under pressure.',
          a: 'During a major outage affecting our payment system, I led the investigation by first ensuring we had clear communication with stakeholders. I systematically eliminated potential causes, starting with recent deployments and external dependencies. We identified a third-party API degradation, implemented a fallback mechanism, and restored service within 30 minutes while maintaining transparent communication throughout.',
          tips: [
            'Discuss incident management process',
            'Emphasize systematic troubleshooting',
            'Highlight communication under pressure',
            'Show learning from the incident'
          ]
        },
        {
          q: 'How do you balance innovation with stability when introducing new technologies?',
          a: 'I use a phased approach: start with prototypes and proof-of-concepts, then move to limited production trials with careful monitoring. We establish clear success criteria and rollback plans. This allows us to innovate safely while maintaining system stability. Our process has enabled successful adoption of several new technologies with minimal disruption.',
          tips: [
            'Discuss risk management',
            'Mention phased adoption strategies',
            'Emphasize measurement and monitoring',
            'Show balance between innovation and stability'
          ]
        },
        {
          q: 'What\'s your approach to performance optimization? How do you identify and address bottlenecks?',
          a: 'I start with comprehensive profiling to identify the actual bottlenecks rather than guessing. I use distributed tracing, application performance monitoring, and custom metrics. Then I prioritize based on impact and effort, focusing on the most significant bottlenecks first. This data-driven approach has helped us achieve consistent performance improvements.',
          tips: [
            'Emphasize measurement over guessing',
            'Discuss profiling tools and techniques',
            'Mention prioritization framework',
            'Show systematic approach'
          ]
        }
      ]
    },
    {
      id: 'culture_values',
      title: 'Culture & Values Alignment',
      scenario: "Let's discuss how you work and what you value in a workplace",
      questions: [
        {
          q: 'What type of work environment brings out your best performance?',
          a: 'I thrive in environments that balance autonomy with collaboration, where I have ownership of my work but can also learn from experienced peers. I value teams that prioritize technical excellence while maintaining a focus on delivering customer value. Psychological safety and constructive feedback are also important for continuous improvement.',
          tips: [
            'Be authentic about your preferences',
            'Connect to company culture if possible',
            'Show self-awareness about work style',
            'Balance individual and team needs'
          ]
        },
        {
          q: 'How do you handle situations where you disagree with your manager or team lead on technical approach?',
          a: 'I approach disagreements with respect and curiosity. I seek to understand their perspective, present my reasoning with data and examples, and focus on shared goals. If we still disagree, I commit fully to the chosen direction while documenting my concerns for future reference. Building trust through previous successful collaborations makes these conversations more productive.',
          tips: [
            'Show maturity and professionalism',
            'Emphasize communication skills',
            'Discuss commitment to team decisions',
            'Highlight learning from different perspectives'
          ]
        },
        {
          q: 'Where do you see your career progressing in the next 3-5 years, and how does this role fit into that vision?',
          a: 'I see myself growing into a principal engineer role, focusing on system architecture and mentoring senior engineers. This position aligns perfectly as it offers complex technical challenges, opportunities to influence technical direction, and a culture that values both individual contribution and team leadership. I\'m particularly excited about the chance to work on [Specific Aspect] that will help me develop in these areas.',
          tips: [
            'Show ambition with realistic timeline',
            'Connect personal goals to company opportunities',
            'Demonstrate understanding of career progression',
            'Express enthusiasm for the role'
          ]
        },
        {
          q: 'How do you stay motivated during challenging projects or when facing setbacks?',
          a: 'I maintain perspective by focusing on the end goal and breaking large challenges into manageable pieces. I celebrate small wins along the way and lean on team collaboration during difficult periods. Seeing challenges as learning opportunities rather than obstacles helps maintain motivation and momentum.',
          tips: [
            'Show resilience and persistence',
            'Discuss coping strategies',
            'Emphasize learning mindset',
            'Mention team support'
          ]
        },
        {
          q: 'What role does work-life balance play in your career decisions?',
          a: 'I believe sustainable high performance requires good work-life balance. I\'m highly productive during work hours through focused work and effective time management, which allows me to recharge fully outside work. I look for companies that value sustainable pace and recognize that burned-out engineers don\'t produce their best work.',
          tips: [
            'Show self-awareness about needs',
            'Emphasize productivity and effectiveness',
            'Discuss sustainable work practices',
            'Be honest but professional'
          ]
        },
        {
          q: 'How do you contribute to building positive team culture?',
          a: 'I actively foster psychological safety by encouraging diverse perspectives and creating space for quieter team members. I recognize and celebrate team achievements, provide constructive feedback, and mentor junior engineers. I also advocate for engineering best practices and continuous learning, which helps build a culture of excellence.',
          tips: [
            'Discuss specific contributions',
            'Emphasize psychological safety',
            'Mention mentorship and recognition',
            'Show proactive approach to culture'
          ]
        }
      ]
    },
    {
      id: 'project_management',
      title: 'Project Management & Delivery',
      scenario: "Let's discuss how you approach project planning and execution",
      questions: [
        {
          q: 'Describe your experience with Agile methodologies. What has worked well and what would you change?',
          a: 'I\'ve worked extensively with Scrum and Kanban. Scrum works well for teams with predictable work, while Kanban excels for maintenance and support. I\'ve found that adapting ceremonies to team needs is crucial - for example, shorter standups and more focused retrospectives. The key is maintaining Agile principles while adapting practices to context.',
          tips: [
            'Show experience with multiple methodologies',
            'Discuss adaptations and learnings',
            'Emphasize principles over practices',
            'Show pragmatic approach'
          ]
        },
        {
          q: 'How do you estimate complex projects and manage uncertainty?',
          a: 'I use three-point estimation (optimistic, pessimistic, likely) for complex tasks and break projects into smaller, estimable pieces. I maintain a risk register and include buffer for unknowns. Regular re-estimation and transparent communication about progress help manage expectations and adjust plans as needed.',
          tips: [
            'Discuss specific estimation techniques',
            'Mention risk management',
            'Emphasize communication and transparency',
            'Show adaptive planning'
          ]
        },
        {
          q: 'What metrics do you use to measure engineering team performance?',
          a: 'I focus on outcome-oriented metrics like cycle time, deployment frequency, and change failure rate, combined with qualitative feedback. I avoid vanity metrics that can encourage wrong behaviors. Regular team health checks and retrospective outcomes provide valuable qualitative insights alongside quantitative data.',
          tips: [
            'Discuss DORA metrics and similar',
            'Emphasize outcome over output',
            'Mention qualitative measures',
            'Show balanced approach'
          ]
        },
        {
          q: 'How do you handle scope changes mid-project?',
          a: 'I assess the impact on timeline, resources, and technical debt, then communicate this clearly to stakeholders. We use change control processes to evaluate requests objectively and make informed decisions about trade-offs. Maintaining a prioritized backlog helps us adapt while minimizing disruption.',
          tips: [
            'Discuss change management process',
            'Emphasize communication and trade-offs',
            'Mention prioritization frameworks',
            'Show structured approach'
          ]
        }
      ]
    },
    {
      id: 'closing',
      title: 'Closing & Next Steps',
      scenario: "Let's wrap up and discuss what comes next",
      questions: [
        {
          q: 'What questions do you have for me about the role, team, or company?',
          a: 'I\'d love to learn more about the team\'s current biggest technical challenge, how engineering success is measured here, and what opportunities exist for professional development and mentorship. I\'m also curious about the company\'s vision for the next 2-3 years and how this team contributes to that.',
          tips: [
            'Prepare thoughtful, specific questions',
            'Show you\'ve done your research',
            'Ask about challenges and opportunities',
            'Demonstrate long-term thinking'
          ]
        },
        {
          q: 'Is there anything we haven\'t covered that you\'d like me to know about your qualifications?',
          a: 'I\'d like to highlight my experience with [Specific Technology/Approach] that we haven\'t discussed, which I believe would be valuable for [Upcoming Project]. I\'m particularly proud of how I [Specific Achievement] and I\'m excited about the opportunity to bring that experience to your team.',
          tips: [
            'Reinforce key strengths',
            'Connect to specific company needs',
            'Be concise and relevant',
            'End on a strong, positive note'
          ]
        },
        {
          q: 'Based on our conversation, how do you see yourself contributing to our team in the first 90 days?',
          a: 'In the first 30 days, I\'d focus on learning the codebase and building relationships. By 60 days, I expect to be actively contributing to features and improving processes. By 90 days, I aim to have taken ownership of a significant component and started mentoring other team members. My experience with [Relevant Experience] will help me ramp up quickly and add immediate value.',
          tips: [
            'Show realistic timeline',
            'Demonstrate understanding of onboarding process',
            'Highlight immediate contributions',
            'Show enthusiasm for making impact'
          ]
        },
        {
          q: 'What would you need to be successful in this role?',
          a: 'Clear expectations and regular feedback would be important, along with access to necessary tools and resources. I\'d also value opportunities for continuous learning and collaboration with experienced team members. Understanding team dynamics and communication norms early would help me integrate smoothly.',
          tips: [
            'Be reasonable and professional',
            'Focus on collaboration and support',
            'Show self-awareness about needs',
            'Emphasize team integration'
          ]
        },
        {
          q: 'Do you have any concerns about the role or company that we haven\'t addressed?',
          a: 'Based on our conversation, I feel we\'ve covered the key aspects thoroughly. The challenges we discussed around [Specific Challenge] are actually quite appealing as they align with my growth goals. I\'m excited about the opportunity and don\'t have any unresolved concerns.',
          tips: [
            'Be honest but positive',
            'Reaffirm interest and enthusiasm',
            'Address any legitimate concerns professionally',
            'End with confidence'
          ]
        }
      ]
    }
  ];
  
  export default interviewSections;