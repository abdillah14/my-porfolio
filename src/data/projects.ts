// data/projects.ts
import { ProjectType } from '@/types/project';

export const projects: ProjectType[] = [
  {
    id: '1',
    title: 'KuwaSafe',
    description: 'Turn your code into full unit tests in a few seconds with KuwaSafe.',
    longDescription: 'KuwaSafe is an intelligent testing platform that leverages AI to automatically generate comprehensive unit tests for your codebase. It analyzes your code structure, identifies edge cases, and creates meaningful test scenarios to ensure robust code coverage.',
    techStack: ['Next.js', 'Convex', 'Langchain', 'Gemini AI', 'TypeScript', 'Tailwind CSS'],
    likes: 72,
    category: 'AI/ML',
    status: 'Completed',
    demoLink: 'https://abd-le-testeur.vercel.app',
    githubLink: 'https://github.com/yourusername/kuwasafe',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    timeline: '3 months',
    role: 'Full Stack Developer',
    client: 'Personal Project',
    challenges: [
      {
        title: 'AI Model Integration',
        description: 'Integrating multiple AI models while maintaining performance and accuracy.',
        solution: 'Implemented a microservices architecture with optimized API calls and caching mechanisms.'
      },
      {
        title: 'Code Analysis Complexity',
        description: 'Handling different programming languages and frameworks.',
        solution: 'Built a flexible parser system that can adapt to various code structures and languages.'
      }
    ],
    features: ['Automatic test generation', 'Multi-language support', 'Real-time analysis', 'Integration with popular IDEs']
  },
  {
    id: '2',
    title: 'Tafiti IQ',
    description: 'Connect your SQL database and explore insights using plain English. No SQL expertise required - just ask questions and get instant visualizations.',
    longDescription: 'Tafiti IQ revolutionizes data analysis by allowing users to interact with their databases using natural language. The platform converts plain English queries into SQL, executes them, and presents results through interactive visualizations.',
    techStack: ['Next.js', 'Convex', 'Tailwind CSS', 'Langchain', 'D3.js', 'PostgreSQL'],
    likes: 68,
    category: 'Data Analytics',
    status: 'In Progress',
    demoLink: 'https://tafiti-iq-agent.vercel.app',
    githubLink: 'https://github.com/yourusername/tafiti-iq',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    timeline: '4 months',
    role: 'Lead Developer',
    client: 'Tech Startup',
    challenges: [
      {
        title: 'Natural Language Processing',
        description: 'Converting complex English queries into accurate SQL statements.',
        solution: 'Implemented advanced NLP models with context awareness and query validation.'
      }
    ],
    features: ['Natural language queries', 'Interactive dashboards', 'Multi-database support', 'Export capabilities']
  },
  {
    id: '3',
    title: 'Juridic Law',
    description: 'Comprehensive legal case management system with document automation and client portal.',
    longDescription: 'Juridic Law is a complete legal practice management solution that streamlines case management, automates document generation, and provides clients with a secure portal to track their cases and communicate with their legal team.',
    techStack: ['React Native', 'Express.js', 'PostgreSQL', 'GraphQL', 'Redis', 'AWS'],
    likes: 75,
    category: 'Legal Tech',
    status: 'Completed',
    demoLink: 'https://yako-law.vercel.app',
    githubLink: 'https://github.com/yourusername/juridic-law',
    images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
    timeline: '6 months',
    role: 'Full Stack Developer',
    client: 'Law Firm',
    challenges: [
      {
        title: 'Data Security & Compliance',
        description: 'Ensuring GDPR and legal industry compliance for sensitive data.',
        solution: 'Implemented end-to-end encryption and comprehensive audit trails.'
      }
    ],
    features: ['Case management', 'Document automation', 'Client portal', 'Billing integration']
  },
  {
    id: '4',
    title: 'Real Estate Marketplace',
    description: 'Property listing platform with interactive maps and virtual tour capabilities.',
    longDescription: 'A modern real estate platform that connects buyers, sellers, and agents through an intuitive interface featuring advanced search capabilities, interactive maps, and immersive virtual property tours.',
    techStack: ['Next.js', 'Mapbox', 'Node.js', 'MongoDB', 'Stripe', 'WebRTC'],
    likes: 31,
    category: 'E-commerce',
    status: 'Completed',
    demoLink: 'https://realestate-marketplace-demo.com',
    githubLink: 'https://github.com/yourusername/realestate-marketplace',
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
    timeline: '5 months',
    role: 'Frontend Lead',
    client: 'Real Estate Agency',
    challenges: [
      {
        title: 'Performance with Large Datasets',
        description: 'Handling thousands of property listings with real-time updates.',
        solution: 'Implemented virtualization and optimized database queries with proper indexing.'
      }
    ],
    features: ['Advanced search filters', 'Virtual tours', 'Interactive maps', 'Agent profiles']
  },
  {
    id: '5',
    title: 'Social Media Analytics',
    description: 'Dashboard for tracking social media performance across multiple platforms.',
    longDescription: 'A comprehensive analytics dashboard that aggregates data from multiple social media platforms, providing insights into engagement, reach, and audience demographics through interactive visualizations and automated reports.',
    techStack: ['React', 'D3.js', 'Express.js', 'MongoDB', 'Socket.io', 'Chart.js'],
    likes: 26,
    category: 'Analytics',
    status: 'In Progress',
    demoLink: 'https://social-analytics-demo.com',
    githubLink: 'https://github.com/yourusername/social-analytics',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    timeline: '4 months',
    role: 'Data Visualization Specialist',
    client: 'Marketing Agency',
    challenges: [
      {
        title: 'API Rate Limiting',
        description: 'Managing multiple social media API rate limits efficiently.',
        solution: 'Implemented intelligent queueing system with retry logic and caching.'
      }
    ],
    features: ['Multi-platform integration', 'Real-time analytics', 'Custom reports', 'Automated insights']
  },
  {
    id: '6',
    title: 'AI Content Generator',
    description: 'Platform that uses advanced AI to create marketing content and blog posts.',
    longDescription: 'An intelligent content creation platform that leverages multiple AI models to generate high-quality marketing copy, blog posts, and social media content. Features include tone adjustment, SEO optimization, and multi-language support.',
    techStack: ['Next.js', 'OpenAI API', 'Node.js', 'Firebase', 'Stripe', 'Redis'],
    likes: 57,
    category: 'AI/ML',
    status: 'Completed',
    demoLink: 'https://ai-content-generator-demo.com',
    githubLink: 'https://github.com/yourusername/ai-content-generator',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    timeline: '3 months',
    role: 'AI Engineer',
    client: 'Content Agency',
    challenges: [
      {
        title: 'Content Quality Control',
        description: 'Ensuring generated content meets quality and brand standards.',
        solution: 'Developed multi-stage validation system with human-in-the-loop review.'
      }
    ],
    features: ['Multi-format content', 'SEO optimization', 'Brand voice training', 'Batch generation']
  }
];