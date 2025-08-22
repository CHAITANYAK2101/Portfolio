import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Target, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      id: 1,
      title: 'Runner-Up in SKNSCOE Hackathon 2024',
      description: 'Secured second position in the prestigious SKNSCOE Hackathon with an innovative web application solution.',
      icon: Trophy,
      year: '2024',
      category: 'Hackathon',
      color: 'bg-yellow-500',
      link: '#'
    },
    {
      id: 2,
      title: 'MERN Stack Web Development Certification',
      description: 'Earned PrepInsta certification in MERN Stack Web Development, demonstrating expertise in modern web technologies.',
      icon: Award,
      year: '2024',
      category: 'Certification',
      color: 'bg-orange-500',
      link: '#'
    },
    {
      id: 3,
      title: 'Runner-Up in SKNSCOE Hackathon 2025',
      description: 'Achieved second position again in the latest SKNSCOE Hackathon, showcasing consistent performance and problem-solving skills.',
      icon: Trophy,
      year: '2025',
      category: 'Hackathon',
      color: 'bg-yellow-500',
      link: '#'
    },
    {
      id: 4,
      title: 'High Academic Performance',
      description: 'Maintained excellent academic record with CGPA of 9.56/10 in Computer Science & Engineering.',
      icon: Target,
      year: '2025',
      category: 'Education',
      color: 'bg-green-500',
      link: '#'
    }
  ];

  const stats = [
    { label: 'Hackathons', value: '2', icon: Trophy },
    { label: 'Certifications', value: '1', icon: Award },
    { label: 'Projects Completed', value: '4', icon: Target },
    { label: 'CGPA', value: '9.56', icon: ExternalLink }
  ];

  return (
    <section className="py-20 bg-light-surface dark:bg-dark-surface">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-light-muted dark:text-dark-muted text-lg max-w-3xl mx-auto">
            A showcase of my accomplishments, certifications, and recognition
            received for technical excellence and innovative problem-solving.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                  <Icon size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-light-text dark:text-dark-text mb-2">
                  {stat.value}
                </div>
                <div className="text-light-muted dark:text-dark-muted text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card group relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <Icon size={128} className="text-primary-600 dark:text-primary-400" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 ${achievement.color} rounded-lg flex-shrink-0`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium">
                          {achievement.category}
                        </span>
                        <span className="text-light-muted dark:text-dark-muted text-sm">
                          {achievement.year}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-3">
                        {achievement.title}
                      </h3>
                      
                      <p className="text-light-muted dark:text-dark-muted text-sm leading-relaxed mb-4">
                        {achievement.description}
                      </p>
                      
                      <a
                        href={achievement.link}
                        className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 text-sm font-medium"
                      >
                        <span>View Details</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-300 to-primary-100 dark:from-primary-950 dark:to-primary-900 rounded-2xl"
        >
     <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-lg">
  Ready to Achieve More Together?
</h3>
<p className="text-gray-300 mb-6 max-w-2xl mx-auto drop-shadow-sm">
  I'm always looking for new challenges and opportunities to create
  innovative solutions. Let's collaborate and build something amazing.
</p>


          <a
            href="/contact"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Start a Project</span>
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
