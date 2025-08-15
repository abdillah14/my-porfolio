// components/ContactCTA.tsx
import React from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </Link>
              <Link 
                href="/projects" 
                className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white/10 transition-colors"
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