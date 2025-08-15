'use client';

import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ProjectDetail from '@/components/ProjectDetail';

const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping platform with payment processing and inventory management.',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    likes: 42,
  },
  {
    id: '2',
    title: 'Task Management Dashboard',
    description: 'Real-time collaborative task manager with drag-and-drop interface and analytics.',
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    likes: 28,
  },
  {
    id: '3',
    title: 'Health & Fitness Tracker',
    description: 'Mobile-first application for tracking workouts, nutrition, and health metrics.',
    techStack: ['React Native', 'Express', 'PostgreSQL', 'GraphQL'],
    likes: 35,
  },
  {
    id: '4',
    title: 'Real Estate Marketplace',
    description: 'Property listing platform with interactive maps and virtual tour capabilities.',
    techStack: ['Next.js', 'Mapbox', 'Node.js', 'MongoDB'],
    likes: 31,
  },
  {
    id: '5',
    title: 'Social Media Analytics',
    description: 'Dashboard for tracking social media performance across multiple platforms.',
    techStack: ['React', 'D3.js', 'Express', 'MongoDB'],
    likes: 26,
  },
  {
    id: '6',
    title: 'AI Content Generator',
    description: 'Platform that uses GPT-3 to create marketing content and blog posts.',
    techStack: ['Next.js', 'OpenAI API', 'Node.js', 'Firebase'],
    likes: 57,
  },
];

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // ✅ unwrap params promise
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === id);

    if (foundProject) {
      setProject(foundProject);
      setLoading(false);
    } else {
      router.push('/projects');
    }
  }, [id, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Project not found</p>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </motion.button>

        <ProjectDetail project={project} />
      </div>
    </section>
  );
}
