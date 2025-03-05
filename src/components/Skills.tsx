import React, { useState } from 'react';
import { FaJs, FaReact, FaWordpress, FaFigma, FaPython, FaHtml5, FaCss3Alt, FaGit, FaDocker, FaAws, FaGoogle, FaWix, FaJira, FaMicrosoft } from 'react-icons/fa';
import { FaC } from 'react-icons/fa6';
import { DiDart } from "react-icons/di";
import { SiArduino, SiComsol, SiFlutter, SiMultisim, SiNextdotjs, SiOverleaf, SiSolid, SiVercel } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

import { motion } from 'framer-motion';

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const skills = [
    { name: 'C/C++', icon: FaC, percentage: 85, color: 'from-orange-400 to-orange-600' },
    { name: 'Python', icon: FaPython, percentage: 75, color: 'from-blue-400 to-blue-600' },
    { name: 'JS/TS', icon: FaJs, percentage: 85, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Dart', icon: DiDart, percentage: 80, color: 'from-yellow-400 to-yellow-600' },
    { name: 'HTML', icon: FaHtml5, percentage: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'CSS/SCSS/Tailwind', icon: FaCss3Alt, percentage: 95, color: 'from-yellow-400 to-yellow-600' },

    { name: 'React/React Native', icon: FaReact, percentage: 95, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Next.js', icon: SiNextdotjs, percentage: 80, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Flutter', icon: SiFlutter, percentage: 85, color: 'from-blue-500 to-blue-700' },

    { name: 'WordPress', icon: FaWordpress, percentage: 95, color: 'from-blue-500 to-blue-700' },
    { name: 'Wixsite', icon: FaWix, percentage: 85, color: 'from-blue-500 to-blue-700' },
    { name: 'Figma', icon: FaFigma, percentage: 75, color: 'from-purple-400 to-purple-600' },

    { name: 'Git/GitHub', icon: FaGit, percentage: 85, color: 'from-purple-400 to-purple-600' },
    { name: 'Docker', icon: FaDocker, percentage: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'Vercel', icon: SiVercel, percentage: 80, color: 'from-purple-400 to-purple-600' },

    { name: 'Azure', icon: VscAzure, percentage: 85, color: 'from-purple-400 to-purple-600' },
    { name: 'GCP', icon: FaGoogle, percentage: 85, color: 'from-purple-400 to-purple-600' },
    { name: 'AWS', icon: FaAws, percentage: 80, color: 'from-purple-400 to-purple-600' },

    { name: 'Jira', icon: FaJira, percentage: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'Overleaf', icon: SiOverleaf, percentage: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'MS Office', icon: FaMicrosoft, percentage: 80, color: 'from-purple-400 to-purple-600' },

    { name: 'AutoCAD', icon: VscAzure, percentage: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'SolidWorks', icon: SiSolid, percentage: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'Comsol', icon: SiComsol, percentage: 80, color: 'from-purple-400 to-purple-600' },

    { name: 'Matlab', icon: FaMicrosoft, percentage: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'Multisim', icon: SiMultisim, percentage: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'Arduino', icon: SiArduino, percentage: 80, color: 'from-purple-400 to-purple-600' },


  ];

  const visibleSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I have expertise in various technologies and tools that help me deliver high-quality work to my clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 3xl:grid-cols-6 gap-8">
          {visibleSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="relative mb-6 flex justify-center">
                  <svg className="w-32 h-32">
                    <circle
                      className="text-gray-700"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="58"
                      cx="64"
                      cy="64"
                    />
                    <circle
                      className={`text-transparent bg-gradient-to-r ${skill.color}`}
                      strokeWidth="8"
                      strokeLinecap="round"
                      stroke="url(#gradient)"
                      fill="transparent"
                      r="58"
                      cx="64"
                      cy="64"
                      strokeDasharray={`${2 * Math.PI * 58}`}
                      strokeDashoffset={`${2 * Math.PI * 58 * (1 - skill.percentage / 100)}`}
                      transform="rotate(-90 64 64)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <skill.icon className="text-4xl text-white group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-medium mb-1">{skill.name}</h3>
                  <p className="text-primary font-bold">{skill.percentage}%</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-gradient-to-r from-primary to-purple-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            >
              Load More
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Skills;
