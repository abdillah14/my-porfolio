// components/Testimonials.tsx
import React from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    content: 'Alex transformed our web application with his expertise in Next.js. His attention to detail and problem-solving skills are exceptional. The project was delivered on time and exceeded our expectations.',
    avatar: '/testimonial1.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO at StartupX',
    content: "Working with Alex was a game-changer for our platform. He implemented complex features with clean, maintainable code. His ability to understand business requirements and translate them into technical solutions is impressive.",
    avatar: '/testimonial2.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Lead Designer at CreativeHub',
    content: "Alex's technical skills are matched only by his collaborative spirit. He worked seamlessly with our design team to implement pixel-perfect interfaces while ensuring optimal performance across all devices.",
    avatar: '/testimonial3.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            What People Say
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Testimonials from colleagues and clients I've collaborated with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              // transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-indigo-100">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{testimonial.name}</h3>
                  <p className="text-slate-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-slate-700 italic">
                "{testimonial.content}"
              </p>
              
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-yellow-400" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;