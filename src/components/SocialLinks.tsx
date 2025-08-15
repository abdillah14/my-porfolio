// components/SocialLinks.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SocialLinks = () => {
  const socials = [
    { name: 'GitHub', icon: 'github.svg', url: 'https://github.com' },
    { name: 'LinkedIn', icon: 'linkedin.svg', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'twitter.svg', url: 'https://twitter.com' },
    { name: 'Dribbble', icon: 'dribbble.svg', url: 'https://dribbble.com' },
  ];
  
  return (
    <div className="flex space-x-4">
      {socials.map((social) => (
        <Link 
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full border border-slate-200 hover:bg-indigo-50 transition-colors group"
          aria-label={social.name}
        >
          <div className="w-6 h-6 relative">
            <Image 
              src={`/icons/${social.icon}`}
              alt={social.name}
              fill
              className="object-contain group-hover:opacity-75 transition-opacity"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;