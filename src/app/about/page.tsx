// app/about/page.tsx
import Image from 'next/image';
import pic from "../../../public/profil.jpg"
import Link from 'next/link';
import { NotepadText } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#121212] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-bounce-subtle"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-15 lg:py-32">
        <div className="container mx-auto px-4 ">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block">
              <h1 className="text-3xl lg:text-4xl font-black mb-6 text-gray-900 dark:text-[#E0E0E0] relative">
                About Me
              </h1>
            </div>
            <p className="text-2xl text-gray-600 dark:text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed font-light">
              Crafting next-generation digital experiences with cutting-edge technology and innovative design
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-40 h-1 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Side - Profile & Image */}
            <div className="lg:col-span-2 space-y-8 animate-fade-in-up animate-delay-200">
              {/* Hero Image Card */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gray-100 dark:bg-[#1E1E1E] backdrop-blur-xl p-1 rounded-3xl border border-gray-300 dark:border-gray-700/30 shadow-2xl">
                  <div className="bg-white dark:bg-[#1E1E1E] backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-gray-600/20">
                    <div className="relative">
                      {/* Main Profile Image */}
                      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-transparent p-0.5 shadow-2xl mb-8 group-hover:scale-105 transition-transform duration-500">
                        <div className="w-full h-full rounded-2xl overflow-hidden">
                          <Image
                            src={pic}
                            alt="Abdillah Ally"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Profile Info */}
                      <div className="text-center relative z-10">
                        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-[#E0E0E0]">Abdillah Ally</h2>
                        <div className="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 dark:border-purple-500/30 mb-4">
                          <p className="text-gray-700 dark:text-[#E0E0E0] font-medium">Software Engineer & AI Developer</p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="bg-gray-200 dark:bg-[#121212] backdrop-blur-sm p-4 rounded-xl border border-gray-300 dark:border-gray-700/30 card-hover">
                            <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">3+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp.</div>
                          </div>
                          <div className="bg-gray-200 dark:bg-[#121212] backdrop-blur-sm p-4 rounded-xl border border-gray-300 dark:border-gray-700/30 card-hover">
                            <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">5+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              {/* <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gray-800/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/30 shadow-xl">
                  <h3 className="font-bold mb-6 text-xl text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Let's Connect
                  </h3>
                  <div className="space-y-3">
                    <a href="mailto:abdillahally378@gmail.com" 
                       className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/60 text-gray-300 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/30 group/link">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-lg group-hover/link:scale-110 transition-transform">
                        📧
                      </div>
                      <span className="font-medium">Email Me</span>
                    </a>
                    <a href="https://www.linkedin.com/in/abdillah-ally-50a347269" 
                       className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/60 text-gray-300 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/30 group/link">
                      <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-lg group-hover/link:scale-110 transition-transform">
                        💼
                      </div>
                      <span className="font-medium">LinkedIn</span>
                    </a>
                    <a href="https://github.com/abdillah14" 
                       className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/60 text-gray-300 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/30 group/link">
                      <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-lg group-hover/link:scale-110 transition-transform">
                        🖥
                      </div>
                      <span className="font-medium">GitHub</span>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Journey Section */}
              <div className="relative group animate-fade-in-up animate-delay-300">
                <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/5 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-gray-100 dark:bg-[#1E1E1E] backdrop-blur-2xl p-10 rounded-3xl border border-gray-300 dark:border-gray-700/20 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-cyan-500 dark:bg-cyan-400 rounded-xl flex items-center justify-center text-2xl">
                      <NotepadText className='text-gray-900 dark:text-gray-800'/>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-[#E0E0E0]">My Journey</h2>
                  </div>

                  <div className="space-y-8 text-gray-700 dark:text-[#E0E0E0] leading-relaxed">
                    <div className="relative pl-8 border-l-2 border-gradient-to-b from-blue-500 to-purple-500">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 dark:bg-cyan-400 rounded-full"></div>
                      <p className="text-lg font-light">
                        With over <span className="text-gray-900 dark:text-white font-semibold text-blue-600 dark:text-blue-400">3 years of dedicated experience</span> in software engineering, I specialize in architecting scalable web applications and crafting innovative digital solutions that drive exponential business growth.
                      </p>
                    </div>

                    <div className="relative pl-8 border-l-2 border-gradient-to-b from-purple-500 to-cyan-500">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 dark:bg-cyan-400 rounded-full"></div>
                      <p className="font-light">
                        My academic foundation at <span className="text-cyan-600 dark:text-cyan-200 font-semibold">International University of Equator</span> in Software Engineering equipped me with deep expertise in algorithms, distributed systems, and enterprise architecture.
                      </p>
                    </div>

                    <div className="relative pl-8 border-l-2 border-gradient-to-b from-cyan-500 to-blue-500">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 dark:bg-cyan-400 rounded-full"></div>
                      <p className="font-light">
                        I'm passionate about leveraging emerging technologies like <span className="text-cyan-600 dark:text-cyan-200 font-semibold">React, Next.js, TypeScript, and Nodejs as backend</span> to build high-performance, user-centric applications that deliver exceptional experiences and measurable ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>



              {/* CTA Section */}
              <div className="relative group animate-fade-in-up animate-delay-400">
                <div className="relative bg-gray-100 dark:bg-[#1E1E1E] backdrop-blur-2xl rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-blue-100 dark:bg-[#1E1E1E] backdrop-blur-2xl p-10 rounded-3xl border border-blue-300 dark:border-blue-500/20 shadow-2xl">
                  <div className="text-center">
                    <div className="inline-block p-4 bg-blue-200 dark:bg-blue-500/20 rounded-2xl mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-[#E0E0E0]">Ready to Build Something Amazing?</h3>
                    </div>
                    <p className="text-xl text-gray-700 dark:text-[#E0E0E0] mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                      I'm always excited to collaborate on groundbreaking projects and transform visionary ideas into reality. Let's create the future together.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                      <Link
                        href="/projects"
                        className="group flex items-center justify-center gap-3 px-10 py-4 bg-gray-200 text-[#1E1E1E] rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/20"
                      >
                        <span className="relative flex items-center gap-2">
                          View My Work
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                      </Link>
                      <Link
                        href="/contact"
                        className="group flex items-center justify-center gap-3 px-10 py-4 bg-gray-200 dark:bg-[#121212] backdrop-blur-sm rounded-2xl font-semibold text-lg hover:bg-gray-300 dark:hover:bg-gray-900 transition-all duration-300 border border-gray-300 dark:border-gray-600/50 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-[#E0E0E0]"
                      >
                        <span className="flex items-center gap-2">
                          Get In Touch
                          <span className="group-hover:scale-110 transition-transform">💬</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}