import { motion } from 'framer-motion';
import { Github, Linkedin, Phone, MessageCircle, Mail, Code2, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Github, label: 'GitHub', href: personalInfo.socials.github },
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.socials.linkedin },
  { icon: Phone, label: 'Phone', href: `tel:${personalInfo.socials.phone}` },
  { icon: MessageCircle, label: 'WhatsApp', href: personalInfo.socials.whatsapp },
  { icon: Mail, label: 'Email', href: `mailto:${personalInfo.socials.email}` },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white gradient-text">Ajith M</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-5">
              Full-stack developer passionate about building scalable, performant web apps with great user experiences.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-icon bg-gray-800/50 border-gray-700/50 text-gray-400 hover:text-primary-400"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors hover:translate-x-1 inline-block transition-transform"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.location}</li>
              <li className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for hire
              </li>
            </ul>

            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-5 inline-flex btn-primary text-sm py-2 px-4"
            >
              Download Resume
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 flex items-center gap-1.5 flex-wrap justify-center">
            © {new Date().getFullYear()} Ajith M. Built with
            using React & 
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <div className="p-1.5 rounded-lg bg-gray-800 group-hover:bg-primary-500/20 transition-colors">
              <ArrowUp size={14} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
