import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/educationData';

const Education = () => {

  return (
    <section className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </span>
          My Education
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-0 right-0 h-1 bg-primary/20 top-2.5 transform -translate-y-1/2" />

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="timeline-item relative"
              >

                <div className="bg-dark bg-opacity-50 p-4 rounded-lg lg:mt-8 relative">
                  <span className="text-primary text-sm">{edu.period}</span>
                  <h3 className="text-xl font-bold mt-1">{edu.title}</h3>
                  <p className="text-gray-400">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
