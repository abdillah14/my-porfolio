import { Suspense } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Technologies from '@/components/Technologies';
import ProjectFilter from '@/components/ProjectFilter';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <Technologies />
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore a collection of my work showcasing innovative solutions and clean code
          </p>
        </div> */}
        
        <Suspense fallback={<div>Loading filters...</div>}>
          <ProjectFilter projects={projects} />
        </Suspense>
      </div>
    </section>
  );
}