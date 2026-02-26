// components/ProjectFilter.tsx
'use client';

import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { ProjectType } from '@/types/project';

const ProjectFilter = ({ projects }: { projects: ProjectType[] }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('likes');

  const categories = useMemo(() => {
    const cats = projects.map(project => project.category);
    return ['All', ...Array.from(new Set(cats))];
  }, [projects]);

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = activeCategory === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeCategory);

    return filtered.sort((a, b) => {
      if (sortBy === 'likes') return b.likes - a.likes;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'status') return a.status.localeCompare(b.status);
      return 0;
    });
  }, [projects, activeCategory, sortBy]);

  return (
      <section className='py-5'>
          <div className='container mx-auto px-4'>
          <div className="text-center mb-20">
            <div className="inline-block">
              <h1 className="text-3xl lg:text-4xl font-black mb-6 bg-neutral-100  text-gray-800 to-cyan-400 bg-clip-text text-transparent relative">
                 Projects
                <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-blue-300/20 via-purple-400/20 to-cyan-400/20 blur-2xl -z-10"></div>
              </h1>
            </div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Explore a collection of my work showcasing innovative solutions and clean code
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>

      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-neutral-100  text-gray-800'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500"
        >
          <option value="likes">Most Liked</option>
          <option value="title">Alphabetical</option>
          <option value="status">Status</option>
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAndSortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredAndSortedProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No projects found for the selected category.</p>
        </div>
      )}
          </div>
    </section>
  );
};

export default ProjectFilter;