// app/projects/page.tsx
import ProjectCard from '@/components/ProjectCard';
import Technologies from '@/components/Technologies';

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
    tags: ['Next.js', 'convex', 'Tailwind CSS', 'langchain'],
    likes: 28,
  },
  {
    id: '3',
    title: 'Juridic law',
    description: 'Mobile-first application for tracking workouts, nutrition, and health metrics.',
    tags: ['React Native', 'Express', 'PostgreSQL', 'GraphQL'],
    likes: 35,
  },
  {
    id: '4',
    title: 'Real Estate Marketplace',
    description: 'Property listing platform with interactive maps and virtual tour capabilities.',
    tags: ['Next.js', 'Mapbox', 'Node.js', 'MongoDB'],
    likes: 31,
  },
  {
    id: '5',
    title: 'Social Media Analytics',
    description: 'Dashboard for tracking social media performance across multiple platforms.',
    tags: ['React', 'D3.js', 'Express', 'MongoDB'],
    likes: 26,
  },
  {
    id: '6',
    title: 'AI Content Generator',
    description: 'Platform that uses GPT-3 to create marketing content and blog posts.',
    tags: ['Next.js', 'OpenAI API', 'Node.js', 'Firebase'],
    likes: 57,
  }
];

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <Technologies />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore a collection of my work showcasing innovative solutions and clean code
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}