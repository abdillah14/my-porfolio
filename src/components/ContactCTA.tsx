// components/ContactCTA.tsx
'use client';
import React from 'react';
import Link from 'next/link';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-indigo-600 dark:bg-indigo-900/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-bounce-subtle"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-indigo-100 dark:text-indigo-200 mb-10 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get In Touch
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;