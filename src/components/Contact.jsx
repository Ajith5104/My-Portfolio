import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { personalInfo } from '../data';

const INITIAL = { name: '', email: '', subject: '', message: '' };

function validate(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email';
  if (!data.subject.trim()) errors.subject = 'Subject is required';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.length < 3) errors.message = 'Message must be at least 10 characters';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus('loading');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '5f9c3e60-1613-4794-8673-a21147099627',
          ...form
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setForm(INITIAL);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
    { icon: Phone, label: 'Contact No', value: '+91 8754083032', href: '#' },
  ];

  return (
    <section id="contact" className="py-18 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="section-title text-gray-900 dark:text-white mb-4">
            Contact{' '}
            <span className="gradient-text">Details</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Info Cards */}
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.03, x: 4 }}
                className="glass-card p-5 flex items-start gap-4 group cursor-pointer block"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-0.5">{label}</div>
                  <div className="text-sm text-gray-800 dark:text-gray-200 font-semibold group-hover:text-primary-500 transition-colors">
                    {value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Fun card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card p-6 bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-200/50 dark:border-primary-800/50"
            >
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">Ready to start?</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Whether it's a freelance project, full-time role, or just a chat — I'm all ears. 
                Let's build something great together!
              </p>
            </motion.div> */}
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-3">Message Sent! 🎉</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline text-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <input type="hidden" name="access_key" value="5f9c3e60-1613-4794-8673-a21147099627" />
                  
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-2"
                    >
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email me directly.
                    </motion.div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`form-input ${errors.name ? 'ring-2 ring-red-500 border-red-500' : ''}`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`form-input ${errors.email ? 'ring-2 ring-red-500 border-red-500' : ''}`}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration / Job Opportunity"
                      className={`form-input ${errors.subject ? 'ring-2 ring-red-500 border-red-500' : ''}`}
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      className={`form-input resize-none ${errors.message ? 'ring-2 ring-red-500 border-red-500' : ''}`}
                      aria-invalid={!!errors.message}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.message ? (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.message}
                        </p>
                      ) : <div />}
                      <span className="text-xs text-gray-400">{form.message.length}/500</span>
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
