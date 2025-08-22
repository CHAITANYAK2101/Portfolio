import React from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from '../components/sections/ProjectGrid';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      <div className="container-max section-padding">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-light-muted dark:text-dark-muted text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development,
            machine learning, and modern web technologies.
          </p>
        </motion.div>
        
        <ProjectGrid showAll={true} />
      </div>
    </motion.div>
  );
};

export default Projects;
