import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Sparkles, MousePointer, Twitter, Cog } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden py-24 min-h-screen">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Floating orbs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-bounce-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl animate-bounce-subtle" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Intro Text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Greeting */}
            <div className="flex items-center gap-3 animate-fade-in">
              <Cog className="w-6 h-6 text-cyan-500 dark:text-cyan-400 animate-rotate-slow" />
              <span className="text-lg text-gray-600 dark:text-gray-300 font-medium">Welcome to my digital space</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-gray-100 animate-fade-in-up animate-delay-200">
              <span className="block">Hello, I'm</span>
              <span className="block mt-2 text-gray-700 dark:text-neutral-400 animate-gradient">
                Abdillah Ally
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200 animate-fade-in-up animate-delay-300">
              <Code className="w-8 h-8 text-blue-500 dark:text-blue-400" />
              <h2 className="text-xl md:text-3xl font-semibold">
                Software Engineer & AI Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mt-4 animate-fade-in-up animate-delay-400">
              I craft exceptional digital experiences that seamlessly blend cutting-edge technology
              with intuitive design. Specializing in modern JavaScript ecosystems, AI integration,
              and scalable cloud architectures.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in-up animate-delay-500">
              <Link
                href="/projects"
                className="group flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white text-lg font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/20"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-3 bg-gray-200 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl text-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700/50 transition-all duration-300 border border-gray-300 dark:border-gray-600/50 hover:border-gray-400 dark:hover:border-gray-500 text-gray-800 dark:text-gray-100"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-4 mt-6 animate-fade-in-up animate-delay-600">
              <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">Quick Actions:</span>
              <div className="flex items-center gap-3">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                   className="group flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-800/30 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                  <Download className="w-4 h-4 text-green-500 dark:text-green-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">Resume</span>
                </a>
                <a href="https://github.com/abdillah14" target="_blank" rel="noopener noreferrer"
                   className="group p-2 bg-gray-200 dark:bg-gray-800/30 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/abdillah-ally-50a347269" target="_blank" rel="noopener noreferrer"
                   className="group p-2 bg-gray-200 dark:bg-gray-800/30 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                </a>
                <a href="https://x.com/Abdillahally10" target="_blank" rel="noopener noreferrer"
                   className="group p-2 bg-gray-200 dark:bg-gray-800/30 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110">
                  <Twitter className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-10 lg:mt-0">
            <div className="animate-scale-in animate-delay-700">
              <StatCard value="5+" label="Projects Completed" color="text-cyan-500 dark:text-cyan-400" />
            </div>
            <div className="animate-scale-in animate-delay-800">
              <StatCard value="3+" label="Years Experience" color="text-cyan-500 dark:text-cyan-400" />
            </div>
            <div className="animate-scale-in animate-delay-1000">
              <StatCard value="24/7" label="Coffee Powered" color="text-cyan-500 dark:text-cyan-400" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animate-delay-1000">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <MousePointer className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          <span className="text-xs text-gray-600 dark:text-gray-500 font-medium">Scroll to explore</span>
          <div className="w-[2px] h-8 bg-gray-500 dark:bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* Helper component for stats */
function StatCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-900/50 rounded-2xl backdrop-blur-sm card-hover border border-gray-200 dark:border-gray-800">
      <div className={`text-3xl font-bold mb-2 ${color}`}>{value}</div>
      <div className="text-gray-600 dark:text-gray-400 text-sm">{label}</div>
    </div>
  );
}