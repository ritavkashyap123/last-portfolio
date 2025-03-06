import React from 'react';
import { motion } from 'framer-motion';

const Internship = () => {
  const internships = [
    {
      period: '2021 April - 2024 June',
      title: '3D designer and Chief Mechanic',
      company: 'Eastern Botz',
      skills: ['Solidworks', 'Robotics'],
    },
    {
      period: '2023 July - 2023 August',
      title: 'Software Developer Intern',
      company: 'CDAC, NIT Silchar',
      skills: ['Python', 'React', 'Figma'],
    },
    {
      period: '2021 September - 2022 April',
      title: 'Editor and SEO Manager',
      company: 'Adamomedia, Remote',
      skills: ['SEO', 'Wordpress'],
    },
    {
      period: '2020 April - 2020 October',
      title: 'Editor in Chief',
      company: 'Blogbug Assamese, Remote',
      skills: ['Content Writing', 'Wordpress'],
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
          My Internship
        </h2>

        <div className="space-y-6">
          {internships.map((int, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="bg-dark bg-opacity-50 p-4 rounded-lg">
                <span className="text-primary text-sm">{int.period}</span>
                <h3 className="text-xl font-bold mt-1">{int.title}</h3>
                <p className="text-gray-400">{int.company}</p>
                <div className="mt-2">
                  {int.skills.map((skill, skillIndex) => (
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

export default Internship;
