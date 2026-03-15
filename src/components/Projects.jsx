import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '../data';

const filters = ['All', 'WEB-APPS', 'WEBSITE'];

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      layout
      className="h-full"
    >
      <motion.div
        layout
        className="project-card h-full p-3 flex flex-col bg-[#111827]/80 backdrop-blur-sm border border-gray-800 group shadow-lg"
        style={{ borderRadius: '15px' }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        {/* Project Image Container */}
        <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
          <img  
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Project Content */}
        <div className="flex flex-col flex-1 px-1">

          <div className="mb-3">
            <h3 className="text-base font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-[10px] text-gray-500 mt-0.5 font-medium tracking-wide">{project.year}</p>
          </div>

          <motion.p 
            layout
            className={`text-xs text-gray-400 leading-relaxed mb-1 ${isExpanded ? '' : 'line-clamp-2'}`}
          >
            {project.description}
          </motion.p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[10px] text-primary-400 font-bold hover:text-primary-300 transition-colors mb-4 text-left uppercase tracking-wider"
          >
            {isExpanded ? 'Show less ↑' : 'Learn more →'}
          </button>
          {/* Tags */}
           <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="px-2 py-0.5 rounded-lg bg-primary-500/10 text-primary-400 text-[9px] font-bold tracking-wider uppercase border border-primary-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-auto pt-1">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gray-800/80 text-gray-300 text-[10px] font-bold border border-gray-700 hover:bg-gray-800 hover:text-white transition-all"
            >
              <Github size={16} />
              Code
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white text-[10px] font-bold hover:shadow-glow transition-all"
            >
              <ExternalLink size={16} />
              Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-18 bg-white dark:bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
            My Work
          </div>
          <h2 className="section-title text-gray-900 dark:text-white mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
            A selection of projects I've built with passion, modern technologies, and attention to detail.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex gap-3 justify-center mb-10"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-glow'
                  : 'glass text-gray-600 dark:text-gray-300 hover:text-primary-500'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="max-w-5xl mx-auto">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/Ajith5104/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={18} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
