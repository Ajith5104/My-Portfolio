import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';

const categories = ['Frontend', 'Backend', 'AI-Tools'];

function SkillPill({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl transition-colors group cursor-default"
    >
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
        onError={(e) => {
          e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"; // Fallback
        }}
      />
      <span className="text-gray-200 text-sm font-medium tracking-wide">{skill.name}</span>
    </motion.div>
  );
}

function SkillCard({ category, skills, inView, index }) {
  const borderColors = {
    Frontend: 'border-blue-500/30 group-hover:border-blue-400/60',
    Backend: 'border-purple-500/30 group-hover:border-purple-400/60',
    Others: 'border-indigo-500/30 group-hover:border-indigo-400/60'
  };

  const glowColors = {
    Frontend: 'shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]',
    Backend: 'shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]',
    Others: 'shadow-[0_0_15px_rgba(99,102,241,0.15)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative p-8 rounded-3xl border ${borderColors[category]} ${glowColors[category]} bg-[#0f172a]/40 backdrop-blur-xl transition-all duration-500`}
    >
      <h3 className="text-2xl font-bold text-white mb-8 text-center tracking-tight">
        {category}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <SkillPill key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-18 relative overflow-hidden bg-[#030712]" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6"
          >
            My Expertise
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I've built a diverse toolkit of modern technologies to create seamless, 
            high-performance digital experiences from front to back.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => {
            const catSkills = skills.filter(s => s.category === cat);
            return (
              <div key={cat} className={`${cat === 'Others' ? 'md:col-span-2 lg:col-span-1 md:max-w-2xl md:mx-auto lg:max-w-none' : ''}`}>
                 <SkillCard category={cat} skills={catSkills} inView={inView} index={i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
