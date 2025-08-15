// types/project.ts
export interface ProjectType {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    likes: number;
    category: string;
    status: 'Completed' | 'In Progress' | 'Planning';
    demoLink?: string;
    githubLink?: string;
    images: string[];
    thumbnail: string;
    timeline: string;
    role: string;
    client?: string;
    challenges: Array<{
      title: string;
      description: string;
      solution: string;
    }>;
    features: string[];
  }
  