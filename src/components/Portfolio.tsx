'use client';

import { useState } from 'react';
import FeaturedProjects from './FeaturedProjects';
import Technologies from './Technologies';



// Main Portfolio component with tabs
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Featured Projects' },
    { id: 'technologies', label: 'Technologies' }
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="bg-gray-800/30 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Portfolio
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my featured projects and the technologies I use to bring ideas to life
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-0">
            <div className="flex bg-gray-800/50 rounded-lg p-1 border border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="transition-all duration-300">
        {activeTab === 'projects' && <FeaturedProjects />}
        {activeTab === 'technologies' && <Technologies />}
      </div>
    </div>
  );
};

export default Portfolio;