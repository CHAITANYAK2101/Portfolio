import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      id: 1,
      title: 'Trainee Developer',
      company: 'Rezoomex',
      location: 'Remote',
      period: 'Aug 2025 – Present',
      logo: '/logos/rezoomex.png',
      description: 'Recently onboarded as a Trainee Developer to learn and assist in ongoing development tasks. Observing and gradually participating in real-world software development processes.',
             highlights: [
         'Recently onboarded as a Trainee Developer to learn and assist in ongoing development tasks',
         'Observing and gradually participating in real-world software development processes',
         'Collaborating with the team on AI-based recruitment platform features and improvements'
       ],
      technologies: ['React.js', 'Python', 'AI/ML', 'Git', 'Slack'],
      current: true
    }
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
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-light-muted dark:text-dark-muted text-lg max-w-3xl mx-auto">
            My latest professional and internship experiences where I've applied
            my skills in real-world scenarios and contributed to meaningful projects.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card relative"
            >
              {experience.current && (
                <div className="absolute -top-2 -right-2 px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                  Current
                </div>
              )}

              <div className="flex flex-col lg:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className="text-primary-600 dark:text-primary-400 font-bold text-lg hidden">
                      {experience.company.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 text-light-muted dark:text-dark-muted">
                      <div className="flex items-center space-x-2">
                        <ExternalLink size={16} />
                        <span className="font-medium text-primary-600 dark:text-primary-400">
                          {experience.company}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-light-text dark:text-dark-text mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="text-light-muted dark:text-dark-muted text-sm flex items-start space-x-2"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mt-1.5 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-12 text-light-text dark:text-dark-text">
            Education & Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">🎓</span>
              </div>
              <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">
                B.Tech. Computer Science & Engineering
              </h4>
              <p className="text-light-muted dark:text-dark-muted text-sm">
                SKN Sinhgad COE, Pandharpur (2022-2026) • CGPA: 9.56/10
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">📚</span>
              </div>
              <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">
                MERN Stack Web Development
              </h4>
              <p className="text-light-muted dark:text-dark-muted text-sm">
                PrepInsta certification in full-stack web development
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
