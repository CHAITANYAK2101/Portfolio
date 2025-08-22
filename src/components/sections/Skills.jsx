import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Python', level: 90, color: 'bg-blue-600' },
        { name: 'C', level: 85, color: 'bg-gray-600' },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', level: 90, color: 'bg-blue-500' },
        { name: 'HTML5', level: 95, color: 'bg-orange-500' },
        { name: 'CSS3', level: 90, color: 'bg-blue-400' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
        { name: 'JavaScript', level: 88, color: 'bg-yellow-500' },
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MySQL', level: 80, color: 'bg-orange-600' },
        { name: 'Git', level: 85, color: 'bg-red-500' },
        { name: 'GitHub', level: 90, color: 'bg-gray-800' },
        { name: 'VS Code', level: 95, color: 'bg-blue-500' },
        { name: 'Postman', level: 80, color: 'bg-orange-500' },
      ]
    }
  ];

  const techStack = [
    'Python', 'C', 'React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 
    'JavaScript', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Postman'
  ];

  return (
    <section className="py-20">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-light-muted dark:text-dark-muted text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            in various programming languages, frameworks, and tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-light-text dark:text-dark-text">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-light-text dark:text-dark-text font-medium">
                        {skill.name}
                      </span>
                      <span className="text-light-muted dark:text-dark-muted text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-light-border dark:bg-dark-border rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-light-text dark:text-dark-text">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 1 + index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium cursor-default transition-all duration-200 hover:shadow-lg"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
