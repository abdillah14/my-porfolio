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
      '/test-1.png',
      '/test-2.png',
      '/test-3.png'
    ],
    thumbnail: '/test-1.png',
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
      '/tafiti-1.png',
      '/tafiti-2.png',
      '/tafiti-3.png'
    ],
    thumbnail: '/tafiti-1.png',
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
      '/law-1.png',
      '/law-2.png',
      '/law-3.png'
    ],
    thumbnail: '/law-1.png',
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
    title: 'Nyaraka Docs',
    description: 'Dashboard for tracking social media performance across multiple platforms.',
    longDescription: 'A comprehensive analytics dashboard that aggregates data from multiple social media platforms, providing insights into engagement, reach, and audience demographics through interactive visualizations and automated reports.',
    techStack: ['React', 'Tailwind','shadcn UI', 'Supabase DB'],
    likes: 46,
    category: 'Analytics',
    status: 'Completed',
    demoLink: 'https://nyaraka-docs.vercel.app',
    githubLink: 'https://github.com/yourusername/social-analytics',
    images: [
      '/nyara-1.png',
      '/nyara-2.png',
      '/nyara-3.png'
    ],
    thumbnail: '/nyara-1.png',
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
    id: '5',
    title: 'Sawa Struct',
    description: 'To reduce architectural guesswork and provide structured, expert-level technical guidance using AI.',
    longDescription: 'a new agent system called SawaStruct — an intelligent Software Architecture Advisor designed to help engineers and founders make smarter architectural decisions from day one',
    techStack: ['Next.js', 'convex', 'Node.js', 'langchain'],
    likes: 51,
    category: 'artificial intelligence',
    status: 'In Progress',
    demoLink: 'https://sawa-struct.vercel.app/',
    githubLink: 'https://github.com/yourusername/realestate-marketplace',
    images: [
      '/sawa-struct.png',
      '/sawa-2.png',
      '/sawa-3.png'
    ],
    thumbnail: '/sawa-struct.png',
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
    id: '6',
    title: 'Press Pilot',
    description: 'Platform that uses advanced AI to create article and blog posts.',
    longDescription: 'An intelligent content creation platform that leverages multiple AI models to generate high-quality marketing copy, blog posts, and social media content. Features include tone adjustment, SEO optimization, and multi-language support.',
    techStack: ['Next.js', 'OpenAI API', 'Node.js', 'langchain'],
    likes: 37,
    category: 'AI/Agent',
    status: 'Completed',
    demoLink: 'https://press-pilot.vercel.app/',
    githubLink: 'https://github.com/yourusername/ai-content-generator',
    images: [
      '/press-1.png',
      '/press-2.png',
      '/press-pilot.png'
    ],
    thumbnail: '/press-1.png',
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