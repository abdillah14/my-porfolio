// components/ProjectDetail.tsx (Enhanced)
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectType } from '@/types/project';

const ProjectDetail = ({ project }: { project: ProjectType }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  
  const handlePrev = () => {
    setActiveImage(prev => (prev === 0 ? project.images.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveImage(prev => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };

  const statusColors = {
    'Completed': 'text-green-400',
    'In Progress': 'text-yellow-400',
    'Planning': 'text-blue-400'
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
            <div className="flex items-center gap-4 text-gray-400">
              <span>{project.category}</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className={statusColors[project.status]}>{project.status}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
              >
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gray-800 rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Project Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative rounded-xl overflow-hidden border border-gray-700">
            <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
              {!imageError[activeImage] && project.images[activeImage] ? (
                <Image
                  src={project.images[activeImage]}
                  alt={`${project.title} screenshot ${activeImage + 1}`}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(activeImage)}
                />
              ) : (
                <div className="bg-gray-700 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>Project Screenshot</p>
                  </div>
                </div>
              )}
              
              {/* Navigation Arrows */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/70 p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/70 p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {project.images.map((_, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === activeImage ? 'bg-white' : 'bg-gray-600'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-3 mt-3">
            {project.images.slice(0, 4).map((image, index: number) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`aspect-video bg-gray-800 rounded-md overflow-hidden border-2 ${
                  index === activeImage ? 'border-blue-500' : 'border-gray-700'
                } hover:border-blue-400 transition-colors`}
              >
                {!imageError[index] && image ? (
                  <Image
                    src={image}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    width={200}
                    height={113}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="bg-gray-700 w-full h-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm mb-8">
            <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-400 mb-6">{project.longDescription}</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Timeline</h3>
                <p className="font-medium">{project.timeline}</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Role</h3>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Client</h3>
                <p className="font-medium">{project.client}</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Status</h3>
                <p className={`font-medium ${statusColors[project.status]}`}>
                  {project.status}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm mb-8">
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string, index: number) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 bg-gray-700 rounded-lg text-sm hover:bg-gray-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-400">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      
      {/* Project Challenges & Solutions */}
      <motion.div
        className="mt-12 bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold mb-6">Challenges & Solutions</h2>
        
        <div className="space-y-6">
          {project.challenges.map((challenge, index: number) => (
            <div key={index} className="pb-6 border-b border-gray-700 last:border-0 last:pb-0">
              <h3 className="font-medium text-gray-300 mb-4">{challenge.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Challenge
                  </h4>
                  <p className="text-gray-400 bg-red-900/10 p-3 rounded-lg border border-red-900/20">{challenge.description}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Solution
                  </h4>
                  <p className="text-gray-400 bg-green-900/10 p-3 rounded-lg border border-green-900/20">{challenge.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;