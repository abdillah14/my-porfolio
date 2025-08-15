// app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transforming ideas into exceptional digital experiences through innovative software solutions
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image & Quick Stats */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                  <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 mb-6">
                      <div className="bg-gradient-to-br from-gray-700 to-gray-800 w-full h-full flex items-center justify-center">
                        <div className="text-6xl text-gray-400">👨‍💻</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-2">John Doe</h2>
                      <p className="text-purple-400 font-medium mb-4">Senior Software Engineer</p>
                      <div className="flex justify-center gap-4 text-sm text-gray-400">
                        <div className="text-center">
                          <div className="font-bold text-white text-lg">8+</div>
                          <div>Years</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white text-lg">50+</div>
                          <div>Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white text-lg">15+</div>
                          <div>Clients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                  <h3 className="font-semibold mb-4 text-lg">Let's Connect</h3>
                  <div className="space-y-3 text-sm">
                    <a href="mailto:john@example.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                      <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      john@example.com
                    </a>
                    <a href="https://linkedin.com/in/johndoe" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                      <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                      </svg>
                      LinkedIn Profile
                    </a>
                    <a href="https://github.com/johndoe" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                      <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                      </svg>
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <h2 className="text-3xl font-bold mb-6 text-white">My Journey</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    With over <strong className="text-white">8 years of experience</strong> in software engineering, I specialize in creating scalable web applications and innovative digital solutions that drive business growth and enhance user experiences.
                  </p>
                  <p>
                    My journey began with a <strong className="text-blue-400">Computer Science degree from Stanford University</strong>, where I developed a foundation in algorithms, system design, and software architecture. Since then, I've had the privilege of working with both emerging startups and Fortune 500 companies, helping them transform their digital presence.
                  </p>
                  <p>
                    I'm passionate about leveraging cutting-edge technologies like <strong className="text-purple-400">React, Next.js, and cloud infrastructure</strong> to build performant, user-centric applications. My approach combines technical excellence with business acumen, ensuring that every solution I deliver creates measurable value.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">Ready to Collaborate?</h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    I'm always excited to work on challenging projects and help bring innovative ideas to life. Let's discuss how we can create something amazing together.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                      View My Work
                    </button>
                    <button className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-medium rounded-lg transition-colors">
                      Get In Touch
                    </button>
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