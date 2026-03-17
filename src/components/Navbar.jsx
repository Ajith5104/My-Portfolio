import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 font-display font-bold text-xl text-gray-900 dark:text-white cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="gradient-text">Ajith M</span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className={`nav-link text-sm font-medium transition-colors ${
                    active === item.href ? 'text-primary-500' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={toggle}
                aria-label="Toggle theme"
                className="p-2 rounded-xl glass text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'moon' : 'sun'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Resume Button */}
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex btn-primary text-sm py-2 px-4"
              >
                Resume
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(p => !p)}
                className="md:hidden p-2 rounded-xl glass text-gray-600 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(item.href)}
                  className="text-left text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 py-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
                >
                  {item.label}
                </motion.button>
              ))}
              <a 
                href={personalInfo.resumeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center text-sm mt-2"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
