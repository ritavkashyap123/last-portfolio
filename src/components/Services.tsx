import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';

const Services = () => {
  return (
    <section id="services" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">My Quality Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I offer a wide range of services to help businesses grow and succeed in the digital world. Here are some of the services I provide.
        </p>
      </motion.div>

      <div className="space-y-6">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="service-card"
          >
            <Link to={`/service/${service.id}`} className="flex justify-between items-center w-full">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
                </div>
              </div>
              <div className="text-primary">
                <FaArrowRight />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
