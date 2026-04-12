import { Suspense } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Technologies from '@/components/Technologies';
import ProjectFilter from '@/components/ProjectFilter';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-white dark:bg-[#121212] min-h-screen">
      <Technologies />
      <div className="container mx-auto px-4">
        
        
        <Suspense fallback={<div className="text-center text-gray-600 dark:text-[#E0E0E0]">Loading filters...</div>}>
          <ProjectFilter projects={projects} />
        </Suspense>
      </div>
    </section>
  );
}