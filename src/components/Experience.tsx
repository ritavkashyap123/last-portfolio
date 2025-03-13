import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experienceData';

const Experience = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['all']);
  const [visibleExperiences, setVisibleExperiences] = useState(6);
  
  const filters = ['all', 'software', 'hardware', 'internship', 'freelance', 'job'];
  
  const handleFilterClick = (filter: string) => {
    if (filter === 'all') {
      setSelectedFilters(['all']);
    } else {
      const newFilters = selectedFilters.includes('all') 
        ? [filter]
        : selectedFilters.includes(filter)
          ? selectedFilters.filter(f => f !== filter)
          : [...selectedFilters, filter];
      
      setSelectedFilters(newFilters.length ? newFilters : ['all']);
    }
    setVisibleExperiences(6); // Reset visible items when changing filters
  };

  const filteredExperiences = selectedFilters.includes('all')
    ? experienceData
    : experienceData.filter(experience => 
        experience.category.some(cat => selectedFilters.includes(cat))
      );

  const displayedExperiences = filteredExperiences.slice(0, visibleExperiences);
  const isShowingAll = visibleExperiences >= filteredExperiences.length;

  const handleShowMore = () => {
    setVisibleExperiences(prev => 
      isShowingAll ? 6 : Math.min(prev + 6, filteredExperiences.length)
    );
  };

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">My Experience</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here's a showcase of my professional journey and the impactful roles I've held throughout my career.
        </p>
      </motion.div>

      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap justify-center gap-2 bg-dark bg-opacity-50 p-2 rounded-xl max-w-3xl">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                selectedFilters.includes(filter)
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
        {displayedExperiences.map((experience) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="experience-card group"
          >
            <Link to={`/experience/${experience.id}`}>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Details</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-primary text-sm">{experience.period}</span>
                <h3 className="text-xl font-bold mt-2">{experience.title}</h3>
                <p className="text-gray-400 mt-1">{experience.company}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.category.map((cat, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800 text-gray-400 rounded-full text-xs"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredExperiences.length > 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
          >
            {isShowingAll ? 'Show Less' : 'Show More'}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Experience;
