import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/CHAITANYAK2101', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/chaitanya-kulkarni-ck21', icon: Linkedin },
    { name: 'Email', href: 'mailto:chaitanykulkarni2101@gmail.com', icon: Mail },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border">
      <div className="container-max section-padding">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <Link to="/" className="text-2xl font-bold gradient-text">
                Chaitanya Kulkarni
              </Link>
              <p className="text-light-muted dark:text-dark-muted text-sm leading-relaxed">
                Full Stack Developer passionate about creating dynamic web experiences
                and exploring machine learning. Building the future, one line of code at a time.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-muted dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-light-muted dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <p className="text-light-muted dark:text-dark-muted text-sm">
                  Always interested in new opportunities and collaborations.
                </p>
                <Link
                  to="/contact"
                  className="inline-block btn-primary text-sm px-4 py-2"
                >
                  Connect
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-light-border dark:border-dark-border pt-8 pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-light-muted dark:text-dark-muted text-sm">
              <span>© {currentYear} Chaitanya Kulkarni. Made with</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              <span>and React</span>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-light-muted dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
