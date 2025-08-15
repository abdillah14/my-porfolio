// components/FeaturedProjects.tsx
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    id: '1',
    title: 'KuwaSafe',
    description: 'Turn your code into full unit tests in a few seconds with KuwaSafe.',
    tags: ['Next.js', 'Convex', 'Langchain', 'gemini'],
    likes: 42,
  },
  {
    id: '2',
    title: 'Tafiti IQ',
    description: 'Connect your SQL database and explore insights using plain English. No SQL expertise required - just ask questions and get instant visualizations.',
    tags: ['Next.js', 'MySQl', 'convex', 'langchain'],
    likes: 28,
  },
  {
    id: '3',
    title: 'Yako law',
    description: 'Specialized in comparative law across East Africa and international legal systems.',
    tags: ['Next.js', 'Convex', 'langChain', 'Gemini'],
    likes: 35,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/projects" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;