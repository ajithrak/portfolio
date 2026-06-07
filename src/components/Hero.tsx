import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl text-center">
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4"
        >
          {HERO_DATA.name}
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-4xl font-bold text-gray-600 dark:text-zinc-400 mb-6"
        >
          {HERO_DATA.role}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-zinc-400 mb-10 leading-relaxed"
        >
          {HERO_DATA.tagline}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all duration-200"
          >
            View Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-transparent border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-900 text-gray-900 dark:text-white font-medium rounded-lg transition-all duration-200"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};