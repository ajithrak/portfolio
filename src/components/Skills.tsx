import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-12 border-b pb-2 border-gray-100 dark:border-zinc-800">
          Technical Expertise
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((cat, idx) => (
            <div key={idx} className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-indigo-600 dark:text-indigo-400">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/60 rounded-md text-sm font-medium text-gray-700 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};