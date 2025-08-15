// components/FunFacts.tsx
import React from 'react';
import { m } from 'framer-motion';

const funFacts = [
  {
    id: 1,
    title: 'Coffee Cups',
    value: '1000+',
    description: 'Cups of coffee consumed while coding',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Projects',
    value: '50+',
    description: 'Projects completed for clients and personal growth',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Open Source',
    value: '15+',
    description: 'Contributions to open source projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Countries',
    value: '12',
    description: 'Countries visited for tech conferences',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

const FunFacts = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">Fun Facts</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {funFacts.map((fact, index) => (
          <div key={fact.id}>
          {/* // <m.div
          //   key={fact.id}
          //   initial={{ opacity: 0, y: 20 }}
          //   whileInView={{ opacity: 1, y: 0 }}
          //   viewport={{ once: true }}
          //   transition={{ delay: index * 0.1 }}
          //   whileHover={{ y: -10 }}
          //   className="bg-white p-6 rounded-xl shadow-md border border-slate-100 text-center"
          // > */}
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {fact.icon}
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">{fact.value}</h3>
            <p className="text-lg font-medium text-slate-800 mb-2">{fact.title}</p>
            <p className="text-slate-600">{fact.description}</p>
          {/* </m.div> */ }
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;