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
  ExternalLink
} from 'lucide-react';
import Image from 'next/image';
import pic from "../../public/icon-1.png"

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
          className="group relative text-2xl font-bold text-[#E0E0E0] hover:scale-105 transition-all duration-300"
        >
          <span className="relative group font-semibold text-lg">
          {/* <Image
            src={pic}
            alt="Abdillah Ally"
            fill
            className="object-cover"
          /> */}
            &lt; Abdillah /&gt;
            <div className="absolute -bottom-1 left-0 w-0 h-0.5  group-hover:w-full transition-all duration-300"></div>
          </span>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 ${isActive
                    ? 'text-indigo-400 bg-indigo-500/10 shadow-lg shadow-indigo-900/30'
                    : 'text-[#E0E0E0]/85 hover:text-[#E0E0E0]'
                  }`}
              >
                <Icon className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-[#E0E0E0]' : 'group-hover:text-[#E0E0E0]'
                  }`} />
                <span className="font-medium text-[#E0E0E0]">{item.name}</span>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full"></div>
                )}

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-lg bg-indigo-100/0 group-hover:bg-indigo-100/5 transition-all duration-300"></div>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#E0E0E0]/80 hover:text-[#E0E0E0] hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="bg-[#121212]/95 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:translate-x-2 ${isActive
                      ? 'text-indigo-400 bg-indigo-500/10 border-l-2 border-indigo-400'
                      : 'text-[#E0E0E0]/85 hover:text-[#E0E0E0] border-l-2 border-transparent'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-indigo-400' : 'group-hover:text-indigo-400'
                    }`} />
                  <span className="font-medium">{item.name}</span>

                  {/* External link indicator for mobile */}
                  <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-50 transition-all duration-300" />
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