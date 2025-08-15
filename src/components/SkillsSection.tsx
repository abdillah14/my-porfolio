// components/SkillsSection.tsx
import React from 'react';
import { m } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'GraphQL']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Firebase']
  },
  {
    category: 'DevOps & Tools',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack', 'Jest', 'Cypress', 'Linux']
  },
  {
    category: 'Soft Skills',
    items: ['Problem Solving', 'Communication', 'Team Leadership', 'Agile Methodologies', 'Mentoring', 'Project Management']
  }
];

const SkillsSection = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">My Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <m.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-50 rounded-xl p-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 text-indigo-600">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, idx) => (
                <span 
                  key={skill} 
                  className="px-3 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;