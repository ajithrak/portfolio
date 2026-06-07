import React from 'react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Ajithkumar. All rights reserved.</p>
        <div className="flex space-x-6">
          <a 
            href={SOCIAL_LINKS.linkedIn} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-indigo-500 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href={SOCIAL_LINKS.gitHub} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-indigo-500 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};