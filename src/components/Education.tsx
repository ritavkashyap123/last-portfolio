import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      period: '2020 - 2024',
      title: 'B. Tech in Electronics and Communication Engineering',
      institution: 'Assam Engineering College, Guwahati',
    },
    {
      period: '2018 - 2020',
      title: 'Higher Secondary Education',
      institution: 'Gurukul Grammar School, Guwahati',
    },
    {
      period: '2013 - 2018',
      title: 'Secondary Education',
      institution: 'Assam Jatiya Bidyalaya, Guwahati',
    },
    {
      period: '2006 - 2012',
      title: 'Primary Education',
      institution: 'Shankardev Vidya Niketan, Guwahati',
    },
  ];

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

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="bg-dark bg-opacity-50 p-4 rounded-lg">
                <span className="text-primary text-sm">{edu.period}</span>
                <h3 className="text-xl font-bold mt-1">{edu.title}</h3>
                <p className="text-gray-400">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
