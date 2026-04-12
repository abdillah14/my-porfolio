// components/FeaturedProjects.tsx
'use client';
import ProjectCard from '@/components/ProjectCard';
import { ProjectType } from '@/types/project';


const FeaturedProjects = ({ projects }: { projects: ProjectType[] }) => {
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
            <div className="inline-block animate-fade-in-up">
              <h1 className="text-3xl lg:text-4xl font-black mb-6 text-gray-800 dark:text-gray-100 relative">
              Featured Projects
              </h1>
            </div>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-200">
            Here are some of my recent projects that showcase my skills and expertise
            </p>
            <div className="flex justify-center mt-8 animate-fade-in-up animate-delay-300">
              <div className="w-40 h-1 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <div key={project.id} className={`animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in-up animate-delay-500">
          <a 
            href="/projects" 
            className="inline-block px-8 py-3 bg-neutral-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10 hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;