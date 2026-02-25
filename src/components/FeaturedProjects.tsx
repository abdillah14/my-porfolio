// components/FeaturedProjects.tsx
import ProjectCard from '@/components/ProjectCard';
import { ProjectType } from '@/types/project';


const FeaturedProjects = ({ projects }: { projects: ProjectType[] }) => {
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
            <div className="inline-block">
              <h1 className="text-3xl lg:text-4xl font-black mb-6 bg-neutral-100  text-gray-800 to-cyan-400 bg-clip-text text-transparent relative">
              Featured Projects
                <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 blur-2xl -z-10"></div>
              </h1>
            </div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Here are some of my recent projects that showcase my skills and expertise
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-pulse"></div>
            </div>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/projects" 
            className="inline-block px-8 py-3 bg-neutral-100  text-gray-800 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;