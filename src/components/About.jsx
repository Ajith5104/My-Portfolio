import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Coffee, Rocket } from 'lucide-react';
import { personalInfo, stats } from '../data';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
  }),
};

function StatCard({ stat, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="glass-card p-6 text-center group hover:shadow-glow transition-all duration-300"
    >
      <div className="text-3xl mb-2">{stat.icon}</div>
      <div className="font-display text-3xl font-bold gradient-text mb-1">{stat.value}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    { icon: MapPin, text: personalInfo.location },
    { icon: Rocket, text: 'Open Source Contributor' },
    // { icon: Calendar, text: '3+ Years Experience' },
    // { icon: Coffee, text: 'Coffee-Driven Developer' },
  ];

  return (
    <section id="about" className="py-18 bg-white dark:bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
            About Me
          </div>
          <h2 className="section-title text-gray-900 dark:text-white mb-4">
            Crafting Digital{' '}
            <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about turning complex problems into elegant, user-friendly solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Avatar/Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card w-full h-full rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-primary-500 via-accent-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-6 flex items-center justify-center text-6xl font-display font-bold text-white shadow-lg">
                      AM
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-1">{personalInfo.name}</h3>
                    <p className="text-white/80">{personalInfo.title}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 glass-card px-4 py-3 shadow-glow"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">Available for hire</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {personalInfo.bio.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {para}
              </p>
            ))}

            {/* Quick highlights */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {highlights.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium"
                >
                  <Icon size={16} className="text-primary-500 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Talk
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
