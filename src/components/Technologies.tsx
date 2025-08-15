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
  // {
  //   name: 'Tools & DevOps',
  //   items: [
  //     { icon: <FaGitAlt className="w-8 h-8 text-orange-500" />, name: 'Git' },
  //     { icon: <SiDocker className="w-8 h-8 text-blue-500" />, name: 'Docker' },
  //     { icon: <FaAws className="w-8 h-8 text-yellow-500" />, name: 'AWS' },
  //     { icon: <SiJest className="w-8 h-8 text-red-500" />, name: 'Jest' },
  //   ]
  // }
];

const Technologies = () => {
  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technologies I Work With</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologyGroups.map((group) => (
            <div 
              key={group.name}
              className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{group.name}</h3>
              <div className="grid grid-cols-2 gap-6">
                {group.items.map((tech) => (
                  <div 
                    key={tech.name}
                    className="flex flex-col items-center group"
                  >
                    <div className="p-4 bg-gray-900 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
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