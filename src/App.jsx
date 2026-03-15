import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

export default function App() {
  return (
    <ThemeProvider>
      <AnimatePresence>
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          className="min-h-screen"
        >
          <Navbar />
          <main id="main-content">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
