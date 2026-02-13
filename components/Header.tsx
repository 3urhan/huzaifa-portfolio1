
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants.tsx';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background-dark/80 backdrop-blur-md border-b border-white/5 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-white font-black text-lg shadow-glow">
              HA
            </div>
            <span className="font-bold text-xl text-white tracking-tight hidden sm:block">
              Huzaifa
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-primary hover:bg-orange-600 transition-all shadow-glow"
            >
              Book Consult
            </a>
            <button 
              className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-icons-round">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-surface-dark border-b border-white/5 transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 py-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="block text-gray-300 hover:text-primary text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="block w-full py-3 text-center bg-primary text-white rounded-lg font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
