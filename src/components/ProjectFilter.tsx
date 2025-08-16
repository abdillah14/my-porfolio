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
      <section>
          <div className='container mx-auto px-4'>
              
      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
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