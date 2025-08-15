// app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transforming ideas into exceptional digital experiences through innovative software solutions.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Profile Image */}
                <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-lg hover:shadow-blue-500/20 transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                  <div className="relative flex flex-col items-center">
                    <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-lg mb-6">
                      <Image
                        src="/images/profile.jpg"
                        alt="Abdillah Ally"
                        width={192}
                        height={192}
                        className="rounded-xl object-cover"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-1">Abdillah Ally</h2>
                    <p className="text-purple-400 font-medium text-center">Software Engineer & AI Developer</p>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-purple-500/20 transition-shadow">
                  <h3 className="font-semibold mb-4 text-lg text-white">Let's Connect</h3>
                  <div className="flex flex-col gap-3">
                    <a href="mailto:abdillahally378@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 text-gray-300 hover:text-blue-400 transition-all">
                      📧 <span>Email Me</span>
                    </a>
                    <a href="https://linkedin.com/in/johndoe" className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 text-gray-300 hover:text-blue-400 transition-all">
                      💼 <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/abdillah14" className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 text-gray-300 hover:text-blue-400 transition-all">
                      🖥 <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main About Section */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-lg hover:shadow-blue-500/20 transition-shadow">
                <h2 className="text-3xl font-bold mb-6 text-white">My Journey</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    With over <strong className="text-white">2 years of experience</strong> in software engineering, I specialize in creating scalable web applications and innovative digital solutions that drive business growth and enhance user experiences.
                  </p>
                  <p>
                    My journey began with a <strong className="text-blue-400">Software engineering degree from International University of Equator </strong>, where I developed a foundation in algorithms, system design, and software architecture. Since then, I've had the privilege of working with both emerging startups and Fortune 500 companies, helping them transform their digital presence.
                  </p>
                  <p>
                    I'm passionate about leveraging cutting-edge technologies like <strong className="text-purple-400">React, Next.js, and cloud infrastructure</strong> to build performant, user-centric applications. My approach combines technical excellence with business acumen, ensuring that every solution I deliver creates measurable value.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 shadow-lg hover:shadow-purple-500/30 transition-shadow">
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
