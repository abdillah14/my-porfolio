// components/Header.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Home,
  User,
  FolderOpen,
  Mail,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#121212]/95 text-[#E0E0E0] backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="group relative text-lg font-semibold text-[#E0E0E0] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212] rounded-sm"
        >
          <span className="relative inline-block">
            &lt; Abdillah /&gt;
            <span
              className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 transition-all duration-300 ease-out group-hover:w-full"
              aria-hidden
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212] ${
                  isActive
                    ? 'text-indigo-300'
                    : 'text-[#E0E0E0]/70 hover:text-[#E0E0E0]'
                }`}
              >
                <span
                  className="absolute inset-0 rounded-lg bg-white/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <Icon
                  className={`relative z-10 w-4 h-4 transition-all duration-300 ease-out ${
                    isActive
                      ? 'text-indigo-400'
                      : 'text-[#E0E0E0]/60 group-hover:text-indigo-300 group-hover:-translate-y-px'
                  }`}
                />
                <span className="relative z-10">{item.name}</span>
                <span
                  className={`absolute bottom-1 left-4 right-4 h-px rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 transition-transform duration-300 ease-out origin-center ${
                    isActive
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden relative p-2.5 text-[#E0E0E0]/80 rounded-lg transition-colors duration-300 hover:text-[#E0E0E0] hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#121212]/95 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center gap-3 overflow-hidden px-4 py-3 rounded-lg font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 ${
                    isActive
                      ? 'text-indigo-300 bg-indigo-500/10'
                      : 'text-[#E0E0E0]/75 hover:text-[#E0E0E0] hover:bg-white/[0.05] hover:pl-5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span
                    className={`absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-indigo-400 to-cyan-400 transition-all duration-300 ${
                      isActive
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100'
                    }`}
                    aria-hidden
                  />
                  <Icon
                    className={`relative z-10 w-5 h-5 transition-colors duration-300 ${
                      isActive
                        ? 'text-indigo-400'
                        : 'text-[#E0E0E0]/55 group-hover:text-indigo-300'
                    }`}
                  />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
