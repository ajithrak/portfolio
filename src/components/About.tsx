import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 border-b pb-2 border-gray-100 dark:border-zinc-800">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4 text-gray-600 dark:text-zinc-400 text-lg leading-relaxed">
            <p>{ABOUT_DATA.bio}</p>
          </div>
          <div className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-gray-100 dark:border-zinc-800">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Core Principles</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-zinc-400">
              {ABOUT_DATA.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};