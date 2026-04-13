// components/Footer.tsx
import Link from 'next/link';
import { Github, Linkedin, Twitter, Heart, Code2, Mail, ArrowUpRight } from 'lucide-react';

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
      href: 'https://www.linkedin.com/in/abdillah-ally-50a347269/',
      icon: Linkedin,
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/abdillahally10',
      icon: Twitter,
      hoverColor: 'hover:text-sky-400',
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#121212] text-[#E0E0E0]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent animate-pulse-glow"></div>
      <div className="container mx-auto px-4">
        <div className="grid gap-10 py-14 md:grid-cols-3">
          <div className="animate-fade-in-up">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#E0E0E0] transition-all duration-300 hover:text-indigo-300"
            >
              <Code2 className="h-5 w-5 animate-bounce-subtle text-indigo-400" />
              <span>&lt; Abdillah /&gt;</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#E0E0E0]/75">
              Software engineer focused on crafting fast, scalable, and visually polished web experiences.
            </p>
            <a
              href="mailto:abdillahally10@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-[#E0E0E0]/85 transition-all duration-300 hover:text-indigo-300"
            >
              <Mail className="h-4 w-4" />
              abdillahally10@gmail.com
            </a>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E0E0E0]/70">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[#E0E0E0]/80 transition-all duration-300 hover:text-indigo-300"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up animate-delay-300">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E0E0E0]/70">Connect</h3>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`group relative rounded-xl border border-white/10 bg-white/5 p-3 text-[#E0E0E0]/80 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/60 hover:bg-indigo-500/10 ${social.hoverColor}`}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#181818] px-2 py-1 text-[11px] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-[#E0E0E0]/70 md:flex-row">
          <div className="flex items-center">
              <p>&copy; {currentYear} Abdillah Ally. All rights reserved.</p>
          </div>

          <div className="flex items-center">
            <span>Made with</span>
            <Heart className="mx-2 h-4 w-4 animate-pulse text-red-500" />
            <span>by Abdillah Ally</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;