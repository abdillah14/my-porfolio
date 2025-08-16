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

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-700/50 shadow-lg shadow-black/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="group relative text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300"
        >
          <span className="relative group font-semibold text-lg">
  &lt; Abdillah /&gt;
  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
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
                className={`group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-800/50 hover:scale-105 ${
                  isActive 
                    ? 'text-blue-400 bg-blue-500/10 shadow-lg shadow-blue-500/20' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 transition-all duration-300 ${
                  isActive ? 'text-blue-400' : 'group-hover:text-blue-400'
                }`} />
                <span className="font-medium">{item.name}</span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300"></div>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 hover:scale-110"
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
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gray-800/95 backdrop-blur-md border-t border-gray-700/50">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-700/50 hover:translate-x-2 ${
                    isActive 
                      ? 'text-blue-400 bg-blue-500/10 border-l-2 border-blue-400' 
                      : 'text-gray-300 hover:text-white border-l-2 border-transparent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? 'text-blue-400' : 'group-hover:text-blue-400'
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