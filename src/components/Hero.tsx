import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Sparkles, MousePointer, Twitter, Cog } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden py-24">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Floating orbs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Intro Text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Greeting */}
            <div className="flex items-center gap-3">
              <Cog className="w-6 h-6 text-cyan-500 animate-spin" />
              <span className="text-lg text-gray-300 font-medium">Welcome to my digital space</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-100">
              <span className="block">Hello, I'm</span>
              <span className="block mt-2 bg-gradient-to-r from-neutral-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Abdillah Ally
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-3 text-gray-200">
              <Code className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl md:text-3xl font-semibold">
                Software Engineer & AI Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mt-4">
              I craft exceptional digital experiences that seamlessly blend cutting-edge technology
              with intuitive design. Specializing in modern JavaScript ecosystems, AI integration,
              and scalable cloud architectures.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="/projects"
                className="group flex items-center justify-center gap-2 px-8 py-3 bg-neutral-100  text-gray-800 text-lg font-semibold rounded-2xl hover:scale-105 hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl text-lg font-semibold hover:bg-gray-700/50 transition-all border border-gray-600/50 hover:border-gray-500"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-gray-400 font-medium text-sm">Quick Actions:</span>
              <div className="flex items-center gap-3">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                   className="group flex items-center gap-2 px-3 py-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/50 transition-all">
                  <Download className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300 group-hover:text-white">Resume</span>
                </a>
                <a href="https://github.com/abdillah14" target="_blank" rel="noopener noreferrer"
                   className="group p-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/50 transition-all">
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/abdillah-ally-50a347269" target="_blank" rel="noopener noreferrer"
                   className="group p-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/50 transition-all">
                  <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </a>
                <a href="https://x.com/Abdillahally10" target="_blank" rel="noopener noreferrer"
                   className="group p-2 bg-gray-800/30 rounded-lg hover:bg-gray-700/50 transition-all">
                  <Twitter className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-10 lg:mt-0">
            <StatCard value="5+" label="Projects Completed" color="text-cyan-400" />
            <StatCard value="3+" label="Years Experience" color="text-cyan-400" />
            <StatCard value="24/7" label="Coffee Powered" color="text-cyan-400" />
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <MousePointer className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-500 font-medium">Scroll to explore</span>
          <div className="w-[2px] h-8 bg-gradient-to-b from-gray-400 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* Helper component for stats */
function StatCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
      <div className={`text-3xl font-bold mb-2 ${color}`}>{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
}