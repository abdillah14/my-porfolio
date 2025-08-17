// components/Hero.tsx
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Sparkles, MousePointer,Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden ">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 py-18 z-10 grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-4xl">
          {/* Greeting with icon */}
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
            <span className="text-lg text-gray-300 font-medium">Welcome to my digital space</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gray-100">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mt-2 animate-gradient bg-[length:200%_auto]">
              Abdillah Ally
            </span>
          </h1>
          
          {/* Subtitle with icon */}
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-200">
              Software Engineer & AI Developer
            </h2>
          </div>
          
          {/* Enhanced description */}
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
            I craft exceptional digital experiences that seamlessly blend cutting-edge technology 
            with intuitive design. Specializing in modern JavaScript ecosystems, AI integration, 
            and scalable cloud architectures.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Link
              href="/projects"
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl font-semibold text-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-600/50 hover:border-gray-500"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </Link>
          </div>
          
          {/* Quick actions */}
          <div className="flex items-center gap-6">
            <span className="text-gray-400 text-sm font-medium">Quick Actions:</span>
            <div className="flex items-center gap-4">
              <a
                href="/resume.pdf"
                className="group flex items-center gap-2 px-4 py-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                download
              >
                <Download className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300 group-hover:text-white">Resume</span>
              </a>
              
              <a
                href="https://github.com/abdillah14"
                className="group p-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              
              <a
                href="https://linkedin.com/in/abdillahally"
                className="group p-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                          </a>
                          <a href="https://x.com/Abdillahally10" className="group p-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                target="_blank"
                              rel="noopener noreferrer">
                              <Twitter className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </a>
            </div>
          </div>
        </div>
        
        {/* Stats or highlights section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-60 max-w-2xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Coffee Powered</div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <MousePointer className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-500 font-medium">Scroll to explore</span>
          <div className="w-[2px] h-8 bg-gradient-to-b from-gray-400 to-transparent rounded-full" />
        </div>
      </div>
      
      {/* Custom CSS for gradient animation */}
      {/* <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .bg-grid-white\\/\\[0\\.02\\] {
          background-image: radial-gradient(circle, white 1px, transparent 1px);
        }
      `}</style> */}
    </section>
  );
};

export default Hero;