import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const ContactSocial = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'chaitanykulkarni2101@gmail.com', link: 'mailto:chaitanykulkarni2101@gmail.com' },
    { icon: Phone, title: 'Phone', value: '+91 8482865983', link: 'tel:+918482865983' },
    { icon: MapPin, title: 'Location', value: 'Satara, Maharashtra, India', link: null },
  ];

  const socialProfiles = [
    { icon: Linkedin, name: 'LinkedIn', link: 'https://www.linkedin.com/in/chaitanya-kulkarni-ck21/' },
    { icon: Twitter, name: 'Twitter', link: 'https://x.com/Chaitanyak_21' },
    { icon: Github, name: 'GitHub', link: 'https://github.com/CHAITANYAK2101' },
    { icon: Instagram, name: 'Instagram', link: 'https://www.instagram.com/chaitanyak_21/' },
  ];

  return (
    <div className="pb-24"> {/* Add bottom padding to prevent overlap with footer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text mb-4">
              Let's Start a Conversation
            </h3>
            <p className="text-light-muted dark:text-dark-muted leading-relaxed">
              I'm always excited to work on new projects and collaborate with talented individuals.
              Whether you're looking for a developer, have a question, or just want to say hello, I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-light-surface dark:bg-dark-surface rounded-lg"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <Icon size={24} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-text dark:text-dark-text">{info.title}</h4>
                    <p className="text-primary-600 dark:text-primary-400">{info.value}</p>
                  </div>
                </motion.div>
              );
              return info.link ? (
                <a key={info.title} href={info.link} className="block hover:scale-105 transition-transform duration-200">{content}</a>
              ) : (
                <div key={info.title}>{content}</div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side - Social Media Horizontal Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">
            Connect with me
          </h3>

          {socialProfiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.a
                key={profile.name}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center p-4 bg-light-surface dark:bg-dark-surface rounded-lg hover:scale-105 transition-transform duration-200"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <Icon size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-light-text dark:text-dark-text font-medium">{profile.name}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSocial;
