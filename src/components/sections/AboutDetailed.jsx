import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Heart, Lightbulb, Users, Target, Zap } from 'lucide-react';
import Photo1 from "../../assets/Photo2.jpg"

const AboutDetailed = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I believe in writing maintainable, readable code that stands the test of time.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Great products are built by great teams. I value open communication and teamwork.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on delivering impactful solutions that create real value for users.'
    }
  ];

  const journey = [
    {
      year: '2022',
      title: 'Started B.Tech Journey',
      description: 'Began Computer Science & Engineering at SKN Sinhgad COE, Pandharpur with focus on software development.'
    },
    {
      year: '2024',
      title: 'First Hackathon Success',
      description: 'Achieved Runner-Up position in SKNSCOE Hackathon 2024, showcasing problem-solving and technical skills.'
    },
    {
      year: '2025',
      title: 'Continued Excellence',
      description: 'Secured Runner-Up again in SKNSCOE Hackathon 2025, demonstrating consistent performance and growth.'
    },
    {
      year: '2024',
      title: 'Professional Experience',
      description: 'Joined Rezoomex as a Trainee Developer, working on AI-based recruitment platform features.'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Personal Story */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-light-text dark:text-dark-text">
            My Story
          </h3>
          <div className="space-y-4 text-light-muted dark:text-dark-muted leading-relaxed">
                         <p>
               Computer Science Engineering student with hands-on experience in React.js, Python, and MySQL. 
               Skilled in designing and developing responsive, user-friendly web applications, implementing 
               efficient database solutions, and optimizing application performance.
             </p>
             <p>
               Strong problem-solving abilities with a proven ability to collaborate in team-oriented environments. 
               Currently working as a Trainee Developer at Rezoomex, recently onboarded to learn and assist 
               in ongoing development tasks.
             </p>
             <p>
               Observing and gradually participating in real-world software development processes, 
               collaborating with the team on AI-based recruitment platform features and improvements.
             </p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src={Photo1}
              alt="Chaitanya working"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=Chaitanya+Kulkarni&background=3b82f6&color=fff&size=400&bold=true`;
              }}
            />
          </div>
          
          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center"
          >
            <Heart size={32} className="text-white" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center"
          >
            <Zap size={24} className="text-white" />
          </motion.div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-3xl font-bold text-center text-light-text dark:text-dark-text mb-12">
          What Drives Me
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex space-x-4 p-6 bg-light-surface dark:bg-dark-surface rounded-xl"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg flex-shrink-0">
                  <Icon size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">
                    {value.title}
                  </h4>
                  <p className="text-light-muted dark:text-dark-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Journey Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-3xl font-bold text-center text-light-text dark:text-dark-text mb-12">
          My Journey
        </h3>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 transform md:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-16 md:pl-0`}>
                  <div className="card">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">
                      {item.title}
                    </h4>
                    <p className="text-light-muted dark:text-dark-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform md:-translate-x-1/2 -translate-x-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Fun Facts */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center p-8 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 rounded-2xl"
      >
        <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-8">
          Fun Facts About Me
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🎓</div>
            <h4 className="font-semibold text-light-text dark:text-dark-text">Student</h4>
            <p className="text-light-muted dark:text-dark-muted text-sm">
              B.Tech CSE at SKN Sinhgad COE, Pandharpur
            </p>
          </div>
          
          <div>
            <div className="text-3xl mb-2">💼</div>
            <h4 className="font-semibold text-light-text dark:text-dark-text">Trainee Developer</h4>
            <p className="text-light-muted dark:text-dark-muted text-sm">
              Working at Rezoomex on AI-based recruitment platform
            </p>
          </div>
          
          <div>
            <div className="text-3xl mb-2">🏆</div>
            <h4 className="font-semibold text-light-text dark:text-dark-text">Achiever</h4>
            <p className="text-light-muted dark:text-dark-muted text-sm">
              Runner-Up in SKNSCOE Hackathons 2024 & 2025
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutDetailed;
