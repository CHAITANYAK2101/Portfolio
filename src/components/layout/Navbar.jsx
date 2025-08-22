import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/CHAITANYAK2101', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/chaitanya-kulkarni-ck21', icon: Linkedin },
    { name: 'Email', href: 'mailto:chaitanykulkarni2101@gmail.com', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
            onClick={closeMenu}
          >
            CK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link relative ${
                  location.pathname === item.href ? 'active' : ''
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-muted dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 hover:scale-110 transform"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-light-surface dark:bg-dark-surface hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-light-surface dark:bg-dark-surface hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-light-surface dark:bg-dark-surface hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass-effect rounded-lg p-4"
            >
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block nav-link text-lg ${
                      location.pathname === item.href ? 'active' : ''
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <hr className="border-light-border dark:border-dark-border" />
                
                <div className="flex items-center justify-center space-x-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-muted dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 hover:scale-110 transform"
                        aria-label={social.name}
                        onClick={closeMenu}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
