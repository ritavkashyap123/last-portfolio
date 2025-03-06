import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'web', 'app', 'wordpress'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">My Recent Works</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and expertise in web development and design.
        </p>
      </motion.div>

      <div className="flex justify-center mb-10">
        <div className="flex space-x-2 bg-dark bg-opacity-50 p-1 rounded-full">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <Link to={`/project/${project.id}`}>
              <img src={project.image} alt={project.title} />
              <h3 className="text-xl font-bold mt-4 mb-2">{project.title}</h3>
              <p className="text-primary capitalize">{project.category}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
