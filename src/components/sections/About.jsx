import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
         {
       icon: Code,
       title: 'Web Development',
       description: 'Skilled in designing and developing responsive, user-friendly web applications using React.js, Python, and MySQL'
     },
     {
       icon: Zap,
       title: 'Database Solutions',
       description: 'Implementing efficient database solutions and optimizing application performance'
     },
     {
       icon: Users,
       title: 'Team Collaboration',
       description: 'Strong problem-solving abilities with proven ability to collaborate in team-oriented environments'
     }
  ];

  return (
    <section id="about" className="py-20 bg-light-surface dark:bg-dark-surface">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-light-muted dark:text-dark-muted text-lg max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a keen interest in creating 
            dynamic web experiences, solving complex problems, and exploring the fascinating 
            world of machine learning and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary-100 dark:bg-primary-900 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300">
                    <Icon size={32} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                    {feature.title}
                  </h3>
                  
                  <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Personal Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-light-text dark:text-dark-text">
              My Journey
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                  Background
                </h4>
                                 <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                   Currently working as a Trainee Developer at Rezoomex, recently onboarded to learn 
                   and assist in ongoing development tasks. Observing and gradually participating in 
                   real-world software development processes.
                 </p>
               </div>
               
               <div className="space-y-4">
                 <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                   Expertise
                 </h4>
                 <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                   Collaborating with the team on AI-based recruitment platform features and improvements. 
                   Working with React.js, Python, and modern development tools to solve real-world problems.
                 </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
