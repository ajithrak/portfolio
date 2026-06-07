import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer font-bold text-xl tracking-tight text-gray-900 dark:text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            AK<span className="text-indigo-600 dark:text-indigo-400">.</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button key={link} onClick={() => handleScroll(link)} className="text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {link}
              </button>
            ))}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-zinc-400 focus:outline-none" aria-label="Toggle Menu">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-4 space-y-1 bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800">
          {navLinks.map((link) => (
            <button key={link} onClick={() => handleScroll(link)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-900">
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};