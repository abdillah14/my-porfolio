// data/projects.ts
import { ProjectType } from '@/types/project';

export const projects: ProjectType[] = [
  {
    id: '1',
    title: 'Cartify',
    description: 'A modern supermarket management system built to optimize retail operations and enhance customer experience.',
    longDescription: 'Cartify enables efficient inventory tracking, sales management, and customer insights. With barcode scanning, automated stock updates, and analytics, it helps retailers run smarter and faster.',
    techStack: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Express'],
    likes: 72,
    category: 'Retail Management',
    status: 'Completed',
    demoLink: '',
    githubLink: 'https://github.com/yourusername/cartify',
    images: [
      "/cartify/cartify-2.png",
      "/cartify/cartify-3.png",
      "/cartify/cartify-4.png",
      "/cartify/cartify-6.png",
      "/cartify/cartify-7.png",
    ],
    thumbnail: '/cartify/cartify-1.png',
    timeline: '3 months',
    role: 'Full Stack Developer',
    client: 'Supermarket',
    challenges: [
      {
        title: "Real-Time Inventory Synchronization",
        description:
          "Ensuring that product stock levels update instantly after every sale or restock operation.",
        solution:
          "Implemented real-time updates using optimized API calls and efficient database queries to keep inventory data consistent across the system."
      },
      {
        title: "Efficient Product Search and Management",
        description:
          "Managing and retrieving thousands of products quickly within the system.",
        solution:
          "Designed indexed database queries and integrated barcode scanning to enable fast product lookup and accurate sales processing."
      }
    ],
    features: ['Real-time inventory tracking', 'Product search and management',"Sales and revenue analytics dashboard", 'Sales analytics', 'Customer insights']
  },
  {
    id: '2',
    title: 'FlashCargo  ',
    description: 'a Cargo Management System (CMS). It’s organized so you can drop sections into a project wiki, hand to engineers, or feed into planning tools.',
    longDescription: 'FlashCargo is a Cargo Management System (CMS) to manage cargo lifecycle: quoting, booking, pickup, transit, warehousing, customs, delivery, billing and tracking for shippers, carriers, warehouses, and internal operators.',
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Express.js', 'Node.js'],
    likes: 72,
    category: 'Cargo Management',
    status: 'Completed',
    demoLink: '',
    githubLink: 'https://github.com/yourusername/flashcargo',
    images: [
      "/cargo/cargo-2.png",
      "/cargo/cargo-3.png",
      "/cargo/cargo-4.png",
      "/cargo/cargo-5.png",
      "/cargo/cargo-6.png",
    ],
    thumbnail: '/cargo/cargo-1.png',
      timeline: '3 months',
      role: 'Full Stack Developer',
      client: 'Cargo Management',
      challenges: [
        {
          title: "Real-Time Cargo Tracking",
          description:
            "Ensuring that cargo status updates instantly after every pickup, transit, or delivery operation.",
          solution:
            "Implemented real-time updates using optimized API calls and efficient database queries to keep cargo data consistent across the system."
        },
        {
          title: "Efficient Cargo Search and Management",
          description:
            "Managing and retrieving thousands of cargo quickly within the system.",
          solution:
            "Designed indexed database queries and integrated barcode scanning to enable fast cargo lookup and accurate cargo processing."
        }
      ],
      features: ['Real-time cargo tracking', 'Cargo search and management',"Cargo booking and tracking", 'Cargo warehousing and customs', 'Cargo delivery and billing']
    },
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
    features: ['Automatic test generation', 'Multi-language support', 'Real-time analysis',]
  },
  {
    id: '3',
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
    features: ['Natural language queries', 'Interactive dashboards', 'database support', 'Export capabilities']
  },
  {
    id: '4',
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
        title: 'Platform specialized in comparative law',
        description: 'YakoLaw is designed to bridge language and legal barriers by offering specialized support in comparative law across East Africa and international legal systems.',
        solution: 'Implemented end-to-end encryption and comprehensive audit trails.'
      }
    ],
    features: [' provides general legal information only']
  },
  {
    id: '5',
    title: 'Nyaraka Docs',
    description: 'document intelligence platform that lets you have natural conversations with your PDFs and Word documents.',
    longDescription: 'Whether you’re a student, researcher, or professional, Nyaraka turns your documents into an interactive knowledge assistant. Curious how AI can make your PDFs talk? Try Nyaraka and see the difference!',
    techStack: ['React', 'Tailwind','shadcn UI', 'Supabase DB'],
    likes: 46,
    category: 'Document Extraction',
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
    role: 'Document extraction',
    client: 'Agent AI',
    challenges: [
      {
        title: 'API Rate Limiting',
        description: 'Managing multiple social media API rate limits efficiently.',
        solution: 'Implemented intelligent queueing system with retry logic and caching.'
      }
    ],
    features: ['Upload any PDF or DOCX', 'Ask questions and get accurate, contextual answers', 'Generate smart summaries — concise or detailed ', 'Create quiz questions from your content']
  },
  {
    id: '6',
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
        title: 'SawaStruct an intelligent Software',
        description: 'agent system called SawaStruct — an intelligent Software Architecture Advisor designed to help engineers and founders make smarter architectural decisions from day one.',
        solution: 'To reduce architectural guesswork and provide structured, expert-level technical guidance using AI.'
      }
    ],
    features: ['Analyzes complex system requirements', 'Recommends architecture patterns', 'Designs database structures', 'Plans scalable infrastructure']
  },
  {
    id: '7',
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
        title: 'Content and article generator',
        description: 'a cutting-edge AI-powered platform that automates research, writing, and editing to create high-quality, newsroom-ready articles..',
        solution: 'Developed multi-stage validation system with human-in-the-loop review.'
      }
    ],
    features: ['Searches the web for relevant, up-to-date sources', 'Generates well-structured, engaging articles on any topic', 'Edits and refines content to meet professional journalism standards',]
  }
];