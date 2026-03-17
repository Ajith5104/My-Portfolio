import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { education } from '../data';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
  }),
};

function EducationCard({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative pl-5 pb-10 last:pb-0 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-transparent group-last:from-primary-500 group-last:to-primary-500/20" />
      
      {/* Timeline Node */}
      <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-150 transition-transform duration-300" />

      <div className="glass-card p-6 sm:p-8 hover:shadow-glow transition-all duration-500 group-hover:translate-x-2">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 dark:text-primary-400 text-xs font-bold mb-3 uppercase tracking-wider">
              {item.duration}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:gradient-text transition-all duration-300">
              {item.degree}
            </h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1.5 font-semibold text-gray-800 dark:text-gray-200">
                <BookOpen size={16} className="text-primary-500" />
                {item.institution}
              </span>
            </div>
          </div>
          
          {item.logo && (
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-gray-800 p-2 shadow-lg border border-gray-100 dark:border-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={item.logo} 
                  alt={item.institution} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <span className="flex items-center gap-1.5">
            <MapPin size={16} className="text-primary-500" />
            {item.location}
          </span>
          <span className="flex items-center gap-1.2 font-bold text-primary-600 dark:text-primary-400">
            CGPA: {item.cgpa}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {item.description}
        </p>

       
      </div>
    </motion.div>
  );
}

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-[#020617] relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 dark:text-primary-400 text-sm font-semibold mb-4">
            Academic Background
          </div>
          <h2 className="section-title text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A reflection of my academic journey and the foundational knowledge I've gained in computer science and software engineering.
          </p>
        </motion.div>

        <div className="relative">
          {education.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
