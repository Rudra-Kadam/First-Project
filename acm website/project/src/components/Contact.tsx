import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:acm@university.edu", label: "Email" }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
            Have questions? We'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-medium flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors duration-300 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-4 h-4" />
                </motion.button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 dark:text-green-400 text-center mt-4"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect With Us
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Computer Science Building<br />
                      University Campus<br />
                      City, State 12345
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Meeting Times
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Weekly Meetings: Thursdays @ 5:00 PM<br />
                      Workshop Sessions: Saturdays @ 2:00 PM
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Social Media
                    </h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.href}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                          aria-label={link.label}
                        >
                          <link.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;