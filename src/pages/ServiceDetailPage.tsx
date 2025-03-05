import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = servicesData.find(service => service.id === parseInt(id));
  
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Service not found</h2>
        <Link to="/" className="text-primary hover:underline">Return to home</Link>
      </div>
    );
  }

  const caseStudies = service.caseStudies.map(id => projectsData.find(project => project.id === id)).filter(Boolean);

  // Get service icon component
  const getServiceIcon = () => {
    switch(service.icon) {
      case 'branding':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case 'uiux':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'web':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case 'app':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-dark to-darker py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-[120px] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center text-primary mb-8 hover:underline">
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}
            >
              {getServiceIcon()}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-gray-300 max-w-2xl">{service.description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-8"
          >
            {/* Overview */}
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl mb-12">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: service.fullDescription }}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-dark/70 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Process */}
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl mb-12">
              <h2 className="text-3xl font-bold mb-8">My Process</h2>
              
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex"
                  >
                    <div className="mr-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                      {index < service.process.length - 1 && (
                        <div className="w-0.5 h-16 bg-primary/30 mx-auto mt-2"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Case Studies */}
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/project/${project.id}`} className="block">
                      <div className="overflow-hidden rounded-xl mb-4">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-gray-400 mt-2">{project.description.substring(0, 100)}...</p>
                      <div className="flex items-center text-primary mt-4 group-hover:translate-x-2 transition-transform">
                        <span className="mr-2">View Project</span>
                        <FaArrowRight size={14} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-4"
          >
            {/* Testimonial */}
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Client Testimonial</h3>
              <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl p-6">
                <p className="italic text-gray-300 mb-6">"{service.testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={service.testimonial.image} 
                    alt={service.testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{service.testimonial.author}</h4>
                    <p className="text-primary text-sm">{service.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ */}
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {service.faq.map((item, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4 last:border-0">
                    <h4 className="font-bold mb-2">{item.question}</h4>
                    <p className="text-gray-300 text-sm">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-6 shadow-xl text-white">
              <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
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

export default ServiceDetailPage;
