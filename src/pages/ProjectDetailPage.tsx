import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaGithub, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectsData.find(project => project.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Project not found</h2>
        <Link to="/" className="text-primary hover:underline">Return to home</Link>
      </div>
    );
  }

  // Find next and previous projects
  const currentIndex = projectsData.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  // Image gallery navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-dark/90 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
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
                <FaArrowLeft className="mr-2" /> Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-8">
                <span className="px-4 py-2 bg-primary/20 rounded-full text-primary">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
                <span className="text-gray-400">Client: {project.client}</span>
                <span className="text-gray-400">Year: {project.year}</span>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl">{project.description}</p>
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
              src={project.gallery[currentImageIndex]} 
              alt={`${project.title} - Gallery image ${currentImageIndex + 1}`} 
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
              {project.gallery.map((_, index) => (
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
          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl mb-8">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">The Solution</h3>
                  <p className="text-gray-300">{project.solution}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">
                          <FaArrowRight size={14} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Results</h3>
                  <p className="text-gray-300">{project.results}</p>
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
                  src={project.testimonial.image} 
                  alt={project.testimonial.author} 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-xl italic mb-4">"{project.testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold">{project.testimonial.author}</h4>
                    <p className="text-primary">{project.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Project Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {prevProject && (
                <Link 
                  to={`/project/${prevProject.id}`}
                  className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 flex items-center group hover:bg-dark/70 transition-colors"
                >
                  <FaChevronLeft className="mr-4 text-primary group-hover:-translate-x-2 transition-transform" />
                  <div>
                    <span className="text-sm text-gray-400">Previous Project</span>
                    <h4 className="font-bold">{prevProject.title}</h4>
                  </div>
                </Link>
              )}
              
              {nextProject && (
                <Link 
                  to={`/project/${nextProject.id}`}
                  className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 flex items-center justify-end text-right group hover:bg-dark/70 transition-colors"
                >
                  <div>
                    <span className="text-sm text-gray-400">Next Project</span>
                    <h4 className="font-bold">{nextProject.title}</h4>
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
            {/* Project Info */}
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Project Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-400 mb-1">Client</h4>
                  <p className="font-medium">{project.client}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 mb-1">Year</h4>
                  <p className="font-medium">{project.year}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 mb-1">Category</h4>
                  <p className="font-medium capitalize">{project.category}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 mb-1">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Links */}
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Project Links</h3>
              
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center p-4 bg-dark/70 rounded-xl hover:bg-dark transition-colors"
                >
                  <FaGlobe className="text-primary mr-4" />
                  <span>Live Preview</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center p-4 bg-dark/70 rounded-xl hover:bg-dark transition-colors"
                >
                  <FaGithub className="text-primary mr-4" />
                  <span>View Source</span>
                </a>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-6 shadow-xl text-white">
              <h3 className="text-xl font-bold mb-4">Like what you see?</h3>
              <p className="mb-6">Let's discuss your project and create something amazing together.</p>
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

export default ProjectDetailPage;
