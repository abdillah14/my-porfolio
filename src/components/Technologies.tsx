// components/Technologies.tsx
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiDocker, 
  SiPostgresql, SiMongodb, SiJest 
} from 'react-icons/si';

const technologies = [
  { icon: <FaReact className="w-8 h-8 text-blue-400" />, name: 'React' },
  { icon: <SiNextdotjs className="w-8 h-8 text-white" />, name: 'Next.js' },
  { icon: <SiTypescript className="w-8 h-8 text-blue-600" />, name: 'TypeScript' },
  { icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" />, name: 'Tailwind CSS' },
  { icon: <FaNodeJs className="w-8 h-8 text-green-500" />, name: 'Node.js' },
  { icon: <FaPython className="w-8 h-8 text-yellow-500" />, name: 'Python' },
  { icon: <SiPostgresql className="w-8 h-8 text-blue-400" />, name: 'PostgreSQL' },
  { icon: <SiMongodb className="w-8 h-8 text-green-500" />, name: 'MongoDB' },
  { icon: <FaGitAlt className="w-8 h-8 text-orange-500" />, name: 'Git' },
  { icon: <SiDocker className="w-8 h-8 text-blue-500" />, name: 'Docker' },
  { icon: <FaAws className="w-8 h-8 text-yellow-500" />, name: 'AWS' },
  { icon: <SiJest className="w-8 h-8 text-red-500" />, name: 'Jest' },
];

const Technologies = () => {
  return (
    <section className="py-20 bg-gray-900/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
            <div className="inline-block">
              <h1 className="text-2xl lg:text-3xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative">
              Technologies I Work With
                <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 blur-2xl -z-10"></div>
              </h1>
            </div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Tools and frameworks I use to build high-quality, scalable, and modern applications.
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Technologies I Work With
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Tools and frameworks I use to build high-quality, scalable, and modern applications.
          </p>
        </div> */}
        
        {/* Technology Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-6 bg-gray-800/60 border border-gray-700 rounded-xl shadow-md hover:shadow-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="p-4 bg-gray-900/80 rounded-full mb-3 flex items-center justify-center">
                {tech.icon}
              </div>
              <span className="text-gray-300 text-sm font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;
