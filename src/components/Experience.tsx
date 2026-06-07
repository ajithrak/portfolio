import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-12 border-b pb-2 border-gray-100 dark:border-zinc-800">
          Professional Timeline
        </h2>
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-gray-200 before:dark:bg-zinc-800">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-zinc-950 transform -translate-x-1/2 top-1.5" />
              <div className="w-full md:w-1/2 pl-8 md:px-8">
                <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm">
                  <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{exp.role}</h3>
                  <h4 className="text-md font-medium text-gray-500 dark:text-zinc-400 mb-4">{exp.company}</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-zinc-400 list-disc list-inside">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="leading-relaxed">{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};