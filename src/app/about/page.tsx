// app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-15 lg:py-32">
        <div className="container mx-auto px-4 ">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h1 className="text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative">
                About Me
                <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 blur-2xl -z-10"></div>
              </h1>
            </div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Crafting next-generation digital experiences with cutting-edge technology and innovative design
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Side - Profile & Image */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Image Card */}
              <div className="relative group">
                <div className="absolute inset-0  rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gray-800/40 backdrop-blur-xl p-1 rounded-3xl border border-gray-700/30 shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/20">
                    <div className="relative">
                      {/* Main Profile Image */}
                      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-transparent  p-0.5 shadow-2xl mb-8 group-hover:scale-105 transition-transform duration-500">
                        <div className="w-full h-full rounded-2xl overflow-hidden">
                          <Image
                            src="/images/profile.jpg"
                            alt="Abdillah Ally"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Profile Info */}
                      <div className="text-center relative z-10">
                        <h2 className="text-3xl font-bold mb-2 text-white">Abdillah Ally</h2>
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-4">
                          <p className="text-purple-300 font-medium">Software Engineer & AI Developer</p>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30">
                            <div className="text-2xl font-bold text-blue-400">2+</div>
                            <div className="text-sm text-gray-400">Years Exp.</div>
                          </div>
                          <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30">
                            <div className="text-2xl font-bold text-purple-400">5+</div>
                            <div className="text-sm text-gray-400">Projects</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gray-800/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/30 shadow-xl">
                  <h3 className="font-bold mb-6 text-xl text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Let's Connect
                  </h3>
                  <div className="space-y-3">
                    <a href="mailto:abdillahally378@gmail.com" 
                       className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/60 text-gray-300 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/30 group/link">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-lg group-hover/link:scale-110 transition-transform">
                        📧
                      </div>
                      <span className="font-medium">Email Me</span>
                    </a>
                    <a href="https://linkedin.com/in/johndoe" 
                       className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/60 text-gray-300 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/30 group/link">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-lg group-hover/link:scale-110 transition-transform">
                        💼
                      </div>
                      <span className="font-medium">LinkedIn</span>
                    </a>
                    <a href="https://github.com/abdillah14" 
                       className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/60 text-gray-300 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/30 group/link">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-lg group-hover/link:scale-110 transition-transform">
                        🖥
                      </div>
                      <span className="font-medium">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Journey Section */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-gray-800/20 backdrop-blur-2xl p-10 rounded-3xl border border-gray-700/20 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl">
                      🚀
                    </div>
                    <h2 className="text-4xl font-bold text-white">My Journey</h2>
                  </div>
                  
                  <div className="space-y-8 text-gray-300 leading-relaxed">
                    <div className="relative pl-8 border-l-2 border-gradient-to-b from-blue-500 to-purple-500">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <p className="text-lg font-light">
                        With over <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">2 years of dedicated experience</span> in software engineering, I specialize in architecting scalable web applications and crafting innovative digital solutions that drive exponential business growth.
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-gradient-to-b from-purple-500 to-cyan-500">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                      <p className="font-light">
                        My academic foundation at <span className="text-blue-400 font-semibold">International University of Equator</span> in Software Engineering equipped me with deep expertise in algorithms, distributed systems, and enterprise architecture. This knowledge has empowered me to collaborate with both disruptive startups and Fortune 500 enterprises.
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-gradient-to-b from-cyan-500 to-blue-500">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>
                      <p className="font-light">
                        I'm passionate about leveraging emerging technologies like <span className="text-purple-400 font-semibold">React, Next.js, TypeScript, and cloud-native infrastructure</span> to build high-performance, user-centric applications that deliver exceptional experiences and measurable ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

           

              {/* CTA Section */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 backdrop-blur-2xl p-10 rounded-3xl border border-gradient-to-r border-blue-500/20 shadow-2xl">
                  <div className="text-center">
                    <div className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mb-6">
                      <h3 className="text-3xl font-bold text-white">Ready to Build Something Amazing?</h3>
                    </div>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                      I'm always excited to collaborate on groundbreaking projects and transform visionary ideas into reality. Let's create the future together.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                      <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative flex items-center gap-2">
                          View My Work
                          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                        </span>
                      </button>
                      <button className="group/btn relative px-8 py-4 border-2 border-purple-500/50 text-purple-300 hover:text-white font-semibold rounded-2xl hover:bg-purple-500/10 transition-all duration-300">
                        <span className="flex items-center gap-2">
                          Get In Touch
                          <span className="group-hover/btn:scale-110 transition-transform">💬</span>
                        </span>
                      </button>
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