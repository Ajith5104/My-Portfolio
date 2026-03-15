import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Phone, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data';

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE = 1800;

function useTypewriter(words) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState('typing');
  const timeoutRef = useRef(null);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    if (phase === 'typing') {
      if (displayed.length < word.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), TYPING_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => setPhase('pausing'), PAUSE);
      }
    } else if (phase === 'pausing') {
      timeoutRef.current = setTimeout(() => setPhase('deleting'), 200);
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), DELETING_SPEED);
      } else {
        setWordIndex(i => i + 1);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, phase, wordIndex, words]);

  return displayed;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const typedText = useTypewriter(personalInfo.roles);

  const socials = [
    { icon: Github, label: 'GitHub', href: personalInfo.socials.github },
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.socials.linkedin },
    { icon: Phone, label: 'Phone', href: `tel:${personalInfo.socials.phone}` },
    { icon: MessageCircle, label: 'WhatsApp', href: personalInfo.socials.whatsapp },
    { icon: Mail, label: 'Email', href: `mailto:${personalInfo.socials.email}` },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-950"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob blob-1 dark:opacity-20 opacity-10" />
        <div className="blob blob-2 dark:opacity-20 opacity-10" />
        <div className="blob blob-3 dark:opacity-20 opacity-10" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
              Open to opportunities
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              variants={itemVariants}
              className="h-14 flex items-center justify-center lg:justify-start mb-6"
            >
              <span className="font-display text-2xl sm:text-3xl font-bold text-gray-600 dark:text-gray-300">
                {typedText}
                <span className="typewriter-cursor" aria-hidden="true" />
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              {personalInfo.tagline} I craft clean, scalable, and performant
              web applications that users love. Let's build something amazing together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
                <ExternalLink size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
                <Mail size={16} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-3 justify-center lg:justify-start">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-icon"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Floating ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-500/30 to-accent-400/30 blur-xl animate-pulse-slow" />

              {/* Avatar */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden glass-card p-1"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                  {personalInfo.avatar ? (
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full bg-gradient-to-br from-primary-500 via-accent-500 to-purple-600 flex items-center justify-center ${personalInfo.avatar ? 'hidden' : 'flex'}`}>
                    <div className="text-center text-white">
                      <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center text-5xl font-display font-bold">
                        {personalInfo.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="font-display font-semibold text-lg">{personalInfo.name}</p>
                      <p className="text-white/70 text-sm">{personalInfo.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 glass-card px-3 py-2 text-xs font-semibold text-primary-600 dark:text-primary-400 shadow-glow"
              >
                ⚛️ React Expert
              </motion.div>

              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card px-3 py-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
              >
                🟩 Node.js Developer
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
