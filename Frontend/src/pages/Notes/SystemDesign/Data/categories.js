import { BookOpen, Scale, Database, Zap, Lock, BarChart3, FileText } from 'lucide-react';


const categories = {
  overview: {
    title: 'System Design Mastery',
    icon: BookOpen,
    description: 'Complete guide from fundamentals to expert level'
  },
  fundamentals: {
    title: 'Core Foundations',
    icon: BookOpen,
    description: 'Principles, CAP theorem, and mathematical foundations'
  },
  scalability: {
    title: 'Scalability & Coordination',
    icon: Scale,
    description: 'Scaling patterns and distributed coordination'
  },
  databases: {
    title: 'Storage & Data Systems',
    icon: Database,
    description: 'Databases, consistency, and replication'
  },
  caching: {
    title: 'Caching & Messaging',
    icon: Zap,
    description: 'Caching strategies and event-driven systems'
  },
  security: {
    title: 'Security & Trust',
    icon: Lock,
    description: 'Authentication, encryption, and threat modeling'
  },
  patterns: {
    title: 'Architecture Patterns',
    icon: BarChart3,
    description: 'Microservices, APIs, and design patterns'
  },
  caseStudies: {
    title: 'Applied System Design',
    icon: FileText,
    description: 'Real-world implementations and case studies'
  }
};

export default categories;
