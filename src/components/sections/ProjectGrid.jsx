import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter, Search } from 'lucide-react';

const ProjectGrid = ({ showAll = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allProjects = [
   
    {
      id: 1,
      title: 'CareerXpert AI',
      subtitle: 'AI-Powered Career Guidance',
      description: 'An intelligent career guidance platform using machine learning to provide personalized career recommendations based on skills, interests, and market trends.',
      image: '/projects/careerxpert.jpg',
      technologies: ['Python', 'Machine Learning', 'React', 'TensorFlow', 'NLP'],
      category: 'ai',
      // liveUrl: 'https://careerxpert-ai.com',
      // githubUrl: 'https://github.com/chaitanyakulkarni/careerxpert-ai',
      featured: true
    },
    {
      id: 2,
      title: 'SkillSwap - Skill Sharing & Learning Platform Website',
      subtitle: 'Interactive Community Platform',
      description: 'Developed a responsive web application enabling users to share, teach, and learn skills within an interactive community. Designed intuitive user flows to enhance collaboration, knowledge exchange, and engagement.',
      image: 'src/images/SkillSwap.jpg',
      technologies: ['React.js', 'Tailwind CSS', 'Firebase'],
      category: 'web',
      liveUrl: 'https://skill-swap-1564d.web.app/',
      // githubUrl: 'https://github.com/CHAITANYAK2101/skillswap',
      featured: true
    },
    {
      id: 3,
      title: 'School Management System',
      subtitle: 'Student & Teacher Records Management',
      description: 'Developed a responsive and user-friendly frontend for managing student and teacher records. Created interactive dashboards for admins and teachers to view, add, and edit student information efficiently. Integrated Firebase for real-time data retrieval and display.',
      image: '/projects/school-management.jpg',
      technologies: ['React.js', 'JavaScript', 'Firebase'],
      category: 'web',
      // liveUrl: 'https://school-management-demo.com',
      // githubUrl: 'https://github.com/CHAITANYAK2101/school-management',
      featured: true
    },
    {
      id: 4,
      title: 'Agricultural Products Marketplace',
      subtitle: 'Farmers & Agro-Industries Platform',
      description: 'Developed a fully responsive and visually appealing frontend for a marketplace connecting farmers and agro-industries. Implemented dynamic product listing pages with category-based filters, search functionality, and sorting options.',
      image: '/projects/agricultural-marketplace.jpg',
      technologies: ['React.js', 'Tailwind CSS'],
      category: 'marketplace',
      // liveUrl: 'https://agricultural-marketplace-demo.com',
      // githubUrl: 'https://github.com/CHAITANYAK2101/agricultural-marketplace',
      featured: true
    }
    
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: allProjects.length },
    { id: 'fullstack', name: 'Full Stack', count: allProjects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: allProjects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: allProjects.filter(p => p.category === 'backend').length },
    { id: 'ai', name: 'AI/ML', count: allProjects.filter(p => p.category === 'ai').length },
    { id: 'iot', name: 'IoT', count: allProjects.filter(p => p.category === 'iot').length },
  ];

  const filteredProjects = allProjects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (!showAll) {
      return project.featured && matchesFilter && matchesSearch;
    }
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {showAll && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-6 items-center justify-between"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-muted dark:text-dark-muted" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 text-light-text dark:text-dark-text"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-light-surface dark:bg-dark-surface text-light-muted dark:text-dark-muted hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
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
              
              {project.featured && (
                <div className="absolute top-4 left-4 px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                  Featured
                </div>
              )}
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
                
                <span className="text-xs text-light-muted dark:text-dark-muted px-2 py-1 bg-light-surface dark:bg-dark-surface rounded">
                  {project.category.toUpperCase()}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-light-muted dark:text-dark-muted text-lg">
            No projects found matching your criteria.
          </p>
          <button
            onClick={() => {
              setFilter('all');
              setSearchTerm('');
            }}
            className="mt-4 btn-secondary"
          >
            Clear Filters
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectGrid;
