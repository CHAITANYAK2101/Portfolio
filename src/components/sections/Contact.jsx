import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20">
      <div className="container-max section-padding">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-light-muted dark:text-dark-muted text-lg max-w-3xl mx-auto">
            I’m always open to new ideas, collaborations, and exciting projects. 
            Feel free to reach out via my dedicated contact page.
          </p>
        </motion.div>

        {/* Static CTA Card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto bg-light-surface dark:bg-dark-surface rounded-xl shadow-lg p-10 text-center hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text mb-4">
            Want to get in touch?
          </h3>
          <p className="text-light-muted dark:text-dark-muted mb-6">
            Visit my contact page for multiple ways to reach out, whether it’s 
            for collaboration, freelance work, or just a chat about technology.
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-colors duration-200"
            >
              <MessageCircle size={20} />
              <span>Go to Contact Page</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
