// components/ProjectCard.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const ProjectCard = ({ project }: { project: any }) => {
  const [likes, setLikes] = useState(project.likes);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedProjects = JSON.parse(localStorage.getItem('likedProjects') || '{}');
    if (likedProjects[project.id]) {
      setIsLiked(true);
    }
  }, [project.id]);

  const handleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setIsLiked(!isLiked);
    
    const likedProjects = JSON.parse(localStorage.getItem('likedProjects') || '{}');
    likedProjects[project.id] = !isLiked;
    localStorage.setItem('likedProjects', JSON.stringify(likedProjects));
  };

  return (
    <div className="group bg-white dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-lg dark:hover:shadow-xl/10 h-full flex flex-col backdrop-blur-sm">
      {/* Compact header image */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-purple-900/20 h-32 relative rounded-t-lg">
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg w-12 h-12 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex-grow line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span 
              key={tag} 
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md transition-all duration-200 ${
              isLiked 
                ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20' 
                : 'text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
            }`}
            aria-label={isLiked ? 'Unlike project' : 'Like project'}
          >
            <svg
              className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`}
              viewBox="0 0 20 20"
              fill={isLiked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path 
                fillRule="evenodd" 
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-sm font-medium">{likes}</span>
          </button>

          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-all duration-200"
          >
            View Project
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;