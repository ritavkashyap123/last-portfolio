import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      period: '2023 July - Present',
      title: 'Co-Founder and CTO',
      company: 'NGIQ Frint Technologies LLP',
      skills: ['MERN Stack', 'Next.js', 'Azure'],  
    },
    {
      period: '2024 October - Present',
      title: 'Senior Software Engineer',
      company: 'Ninur Tech Pvt. Ltd.',
      skills: ['Flutter', 'React', 'Azure', 'Supabase'],
    },
    {
      period: '2024 July - 2024 October',
      title: 'IoT Engineer',
      company: 'Zsee Smart Solutions Pvt. Ltd.',
      skills: ['IoT', 'AWS', 'Embedded Systems'],
    },
    {
      period: '2022 August - 2023 July',
      title: 'Technical Consultant',
      company: 'Azim Premji University, Bangalore',
      skills: ['React', 'IoT'],
    },
  ];

  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          My Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="bg-dark bg-opacity-50 p-4 rounded-lg">
                <span className="text-primary text-sm">{exp.period}</span>
                <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <div className="mt-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
