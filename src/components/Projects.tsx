import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/portfolioData';

// Maps a project card to its dedicated case study route, if one exists.
const PROJECT_ROUTES: Record<string, string> = {
  "Enterprise Banking Web Application": "/fintech",
  "Mental Health Appointment Booking Platform": "/healthcare",
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-12 border-b pb-2 border-gray-100 dark:border-zinc-800">
          Selected Production Architecture
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, idx) => {
            const route = PROJECT_ROUTES[project.title];
            const card = (
              <div className="p-6 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                {route && (
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:underline">
                    View case study →
                  </span>
                )}
              </div>
            );

            return route ? (
              <Link
                key={idx}
                to={route}
                className="group flex flex-col h-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                {card}
              </Link>
            ) : (
              <div key={idx} className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                {card}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
