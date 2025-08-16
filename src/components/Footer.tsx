// components/Footer.tsx
import Link from 'next/link';
import { Github, Linkedin, Twitter, Dribbble, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/abdillah14', // Replace with your actual URLs
      icon: Github,
      hoverColor: 'hover:text-white'
    },
    {
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/abdillahally',
      icon: Linkedin,
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/abdillahally10',
      icon: Twitter,
      hoverColor: 'hover:text-sky-400'
    }
  ];

  return (
    <footer className="bg-gray-900/90 backdrop-blur-sm border-t border-gray-800/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link 
              href="/" 
              className="group text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-pink-400 transition-all duration-300"
            >
              &lt; Abdillah /&gt;
            </Link>
            <div className="flex items-center justify-center md:justify-start mt-3 text-gray-400">
              <Code2 className="w-4 h-4 mr-2 text-blue-400" />
              <p className="text-sm">
                Building exceptional digital experiences
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className={`group relative text-gray-500 ${social.hoverColor} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-gray-800/80 hover:bg-gray-700/80 p-3 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {social.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <div className="flex items-center mb-4 md:mb-0">
              <p>&copy; {currentYear} Abdillah Ally. All rights reserved.</p>
            </div>
            
            <div className="flex items-center text-gray-600">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
              <span>by abdillah ally</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;