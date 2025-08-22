import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const featuredProjects = [
    {
      id: 1,
      title: 'CareerXpert AI',
      subtitle: 'Get Ready for Your Dream Job',
      description: 'Designed and developed a real-time interview preparation and mock interview web application. Integrated features like resume analysis, AI-powered resume generation, interactive quizzes, and real-time conversation practice.',
      image: '/projects/careerxpert.jpg',
      technologies: ['React.js', 'Tailwind CSS', 'Django REST Framework', 'PostgreSQL', 'Gemini API'],
      // liveUrl: 'https://careerxpert-ai.com',
            //  githubUrl: 'https://github.com/CHAITANYAK2101/careerxpert-ai',
      featured: true
    },
         {
       id: 2,
       title: 'SkillSwap - Skill Sharing & Learning Platform Website',
       subtitle: 'Interactive Community Platform',
       description: 'Developed a responsive web application enabling users to share, teach, and learn skills within an interactive community. Designed intuitive user flows to enhance collaboration, knowledge exchange, and engagement.',
       image: 'src/images/SkillSwap.jpg ',
       technologies: ['React.js', 'Tailwind CSS', 'Firebase'],
       liveUrl: 'https://skill-swap-1564d.web.app/',
      //  githubUrl: 'https://github.com/CHAITANYAK2101/skillswap',
       featured: true
     },
         {
       id: 3,
       title: 'School Management System',
       subtitle: 'Student & Teacher Records Management',
       description: 'Developed a responsive and user-friendly frontend for managing student and teacher records. Created interactive dashboards for admins and teachers to view, add, and edit student information efficiently. Integrated Firebase for real-time data retrieval and display.',
       image: '/projects/school-management.jpg',
       technologies: ['React.js', 'JavaScript', 'Firebase'],
      //  liveUrl: 'https://school-management-demo.com',
      //  githubUrl: 'https://github.com/CHAITANYAK2101/school-management',
       featured: true
     },
     {
       id: 4,
       title: 'Agricultural Products Marketplace',
       subtitle: 'Farmers & Agro-Industries Platform',
       description: 'Developed a fully responsive and visually appealing frontend for a marketplace connecting farmers and agro-industries. Implemented dynamic product listing pages with category-based filters, search functionality, and sorting options.',
       image: '/projects/agricultural-marketplace.jpg',
       technologies: ['React.js', 'Tailwind CSS'],
      //  liveUrl: 'https://agricultural-marketplace-demo.com',
      //  githubUrl: 'https://github.com/CHAITANYAK2101/agricultural-marketplace',
       featured: true
     }
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-light-muted dark:text-dark-muted text-lg max-w-3xl mx-auto">
            Take a look at some of my recent projects that showcase my skills
            in full-stack development and innovative problem-solving.
          </p>
        </motion.div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x240/3b82f6/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                      aria-label="View source code"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-light-muted dark:text-dark-muted text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-light-border dark:border-dark-border">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-muted dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      aria-label="View live project"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-muted dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      aria-label="View source code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 btn-secondary group"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
