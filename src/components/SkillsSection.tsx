// components/SkillsSection.tsx
'use client';
import React from 'react';

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
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-gray-100 animate-fade-in-up">My Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div
            key={skillGroup.category}
            className={`bg-slate-50 dark:bg-gray-800/50 rounded-xl p-6 shadow-md dark:shadow-gray-900/30 card-hover animate-fade-in-up animate-delay-${(index + 1) * 100}`}
          >
            <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-2 bg-white dark:bg-gray-700 border border-slate-200 dark:border-gray-600 text-slate-700 dark:text-gray-300 rounded-lg text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:border-indigo-400 dark:hover:border-indigo-500"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;