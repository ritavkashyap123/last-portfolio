import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      position: 'CEO, Tech Solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      text: 'Ritav is an exceptional developer who delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are impressive.',
    },
    {
      name: 'Sarah Johnson',
      position: 'Marketing Director, Brand Co',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      text: 'Working with Ritav was a pleasure. He understood our brand vision and translated it into a beautiful website that has significantly increased our conversion rates.',
    },
    {
      name: 'Michael Brown',
      position: 'Founder, Startup Inc',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      text: 'Ritav helped us launch our startup with a stunning website and user-friendly interface. His technical expertise and creative approach made all the difference.',
    },
  ];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">My Client's Stories</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here's what some of my clients have to say about working with me and the results we achieved together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card hover:bg-primary/20"
          >
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-primary text-sm">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-300 italic">"{testimonial.text}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
