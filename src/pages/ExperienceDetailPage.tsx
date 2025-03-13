import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight, FaLinkedin, FaGlobe, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experienceData';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'FaGlobe':
      return <FaGlobe />;
    case 'FaLinkedin':
      return <FaLinkedin />;
    case 'FaGithub':
      return <FaGithub />;
    default:
      return <FaExternalLinkAlt />;
  }
};

const ExperienceDetailPage = () => {
  const { id } = useParams();
  const experience = experienceData.find(exp => exp.id === parseInt(id ?? ''));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!experience) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Experience not found</h2>
        <Link to="/" className="text-primary hover:underline">Return to home</Link>
      </div>
    );
  }

  // Find next and previous experiences
  const currentIndex = experienceData.findIndex(e => e.slug === experience.slug);
  const prevExperience = currentIndex > 0 ? experienceData[currentIndex - 1] : null;
  const nextExperience = currentIndex < experienceData.length - 1 ? experienceData[currentIndex + 1] : null;

  // Image gallery navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === experience.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? experience.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-dark/90 z-10"></div>
        <img 
          src={experience.image} 
          alt={experience.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <Link to="/" className="inline-flex items-center text-primary mb-6 hover:underline">
                <FaArrowLeft className="mr-2" /> Back to Experience
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{experience.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-8">
                {experience.category.map((cat, index) => (
                  <span key={index} className="px-4 py-2 bg-primary/20 rounded-full text-primary">
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </span>
                ))}
                <span className="text-gray-400">Company: {experience.company}</span>
                <span className="text-gray-400">Period: {experience.period}</span>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl">{experience.description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 relative"
        >
          <div className="relative overflow-hidden rounded-2xl h-[60vh]">
            <img 
              src={experience.gallery[currentImageIndex]} 
              alt={`${experience.title} - Gallery image ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover"
            />
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-dark/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/70 transition-colors"
            >
              <FaChevronLeft />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-dark/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/70 transition-colors"
            >
              <FaChevronRight />
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {experience.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl mb-8">
              <h2 className="text-3xl font-bold mb-6">Role Overview</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Responsibilities</h3>
                  <p className="text-gray-300">{experience.responsibilities}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">
                          <FaArrowRight size={14} />
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Impact</h3>
                  <p className="text-gray-300">{experience.impact}</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl p-8 shadow-xl mb-8"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <img 
                  src={experience.testimonial.image} 
                  alt={experience.testimonial.author} 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-xl italic mb-4">"{experience.testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold">{experience.testimonial.author}</h4>
                    <p className="text-primary">{experience.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Experience Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {prevExperience && (
                <Link 
                  to={`/experience/${prevExperience.slug}`}
                  className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 flex items-center group hover:bg-dark/70 transition-colors"
                >
                  <FaChevronLeft className="mr-4 text-primary group-hover:-translate-x-2 transition-transform" />
                  <div>
                    <span className="text-sm text-gray-400">Previous Role</span>
                    <h4 className="font-bold">{prevExperience.title}</h4>
                  </div>
                </Link>
              )}
              
              {nextExperience && (
                <Link 
                  to={`/experience/${nextExperience.slug}`}
                  className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 flex items-center justify-end text-right group hover:bg-dark/70 transition-colors"
                >
                  <div>
                    <span className="text-sm text-gray-400">Next Role</span>
                    <h4 className="font-bold">{nextExperience.title}</h4>
                  </div>
                  <FaChevronRight className="ml-4 text-primary group-hover:translate-x-2 transition-transform" />
                </Link>
              )}
            </motion.div>
          </motion.div>
          
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Experience Info */}
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Role Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-400 mb-1">Company</h4>
                  <p className="font-medium">{experience.company}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 mb-1">Period</h4>
                  <p className="font-medium">{experience.period}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 mb-1">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.category.map((cat, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm capitalize"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-gray-400 mb-1">Skills</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {experience.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* External Links */}
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl mb-8">
              <h3 className="text-xl font-bold mb-6">External Links</h3>
              
              <div className="space-y-4">
                {experience.links ? (
                  experience.links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-dark/70 rounded-xl hover:bg-dark transition-colors"
                    >
                      {getIconComponent(link.icon)}
                      <span className="ml-4">{link.name}</span>
                    </a>
                  ))
                ) : (
                  <p className="text-gray-400">No external links available</p>
                )}
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-6 shadow-xl text-white">
              <h3 className="text-xl font-bold mb-4">Interested in working together?</h3>
              <p className="mb-6">Let's discuss how we can collaborate on your next project.</p>
              <Link to="/#contact" className="block w-full bg-white text-primary font-medium py-3 rounded-xl text-center hover:bg-gray-100 transition-colors">
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetailPage; 