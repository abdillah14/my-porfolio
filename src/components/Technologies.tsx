// components/Technologies.tsx
import { FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiDocker, SiPostgresql, SiMongodb, SiJest } from 'react-icons/si';

const technologyGroups = [
  {
    name: 'Frontend',
    items: [
      { icon: <FaReact className="w-8 h-8 text-blue-400" />, name: 'React' },
      { icon: <SiNextdotjs className="w-8 h-8 text-white" />, name: 'Next.js' },
      { icon: <SiTypescript className="w-8 h-8 text-blue-600" />, name: 'TypeScript' },
      { icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" />, name: 'Tailwind CSS' },
    ]
  },
  {
    name: 'Backend',
    items: [
      { icon: <FaNodeJs className="w-8 h-8 text-green-500" />, name: 'Node.js' },
      { icon: <FaPython className="w-8 h-8 text-yellow-500" />, name: 'Python' },
      { icon: <SiPostgresql className="w-8 h-8 text-blue-400" />, name: 'PostgreSQL' },
      { icon: <SiMongodb className="w-8 h-8 text-green-500" />, name: 'MongoDB' },
    ]
  },
  {
    name: 'Tools & DevOps',
    items: [
      { icon: <FaGitAlt className="w-8 h-8 text-orange-500" />, name: 'Git' },
      { icon: <SiDocker className="w-8 h-8 text-blue-500" />, name: 'Docker' },
      { icon: <FaAws className="w-8 h-8 text-yellow-500" />, name: 'AWS' },
      { icon: <SiJest className="w-8 h-8 text-red-500" />, name: 'Jest' },
    ]
  }
];

const Technologies = () => {
  return (
    <section className="py-20 bg-gray-900/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Technologies I Work With
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A selection of tools and technologies I use to craft efficient, scalable, and modern applications.
          </p>
        </div>
        
        {/* Technology Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologyGroups.map((group) => (
            <div 
              key={group.name}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 shadow-lg hover:border-blue-500/40 transition-all duration-300 group"
            >
              {/* Group Title */}
              <h3 className="text-xl font-semibold mb-6 text-center text-white">
                {group.name}
              </h3>

              {/* Icons Grid */}
              <div className="grid grid-cols-2 gap-6">
                {group.items.map((tech) => (
                  <div 
                    key={tech.name}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="p-4 bg-gray-900/80 rounded-full mb-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 group-hover:scale-105">
                      {tech.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;
