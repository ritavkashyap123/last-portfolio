import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const filters = ['all', 'hardware', 'app', 'website', 'software'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const isShowingAll = visibleProjects >= filteredProjects.length;

  const handleShowMore = () => {
    setVisibleProjects(prev => 
      isShowingAll ? 6 : Math.min(prev + 6, filteredProjects.length)
    );
  };

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
              onClick={() => {
                setActiveFilter(filter);
                setVisibleProjects(6); // Reset visible projects when changing filter
              }}
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
        {displayedProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="project-card group"
          >
            <Link to={`/project/${project.id}`}>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Details</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">{project.title}</h3>
              <p className="text-primary capitalize">{project.category}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length > 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-gradient-to-r from-primary to-purple-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
          >
            {isShowingAll ? 'Show Less' : 'Show More'}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;
