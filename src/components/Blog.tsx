import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogData } from '../data/blogData';

const Blog = () => {
  // Only show the latest 3 blogs
  const latestBlogs = blogData.slice(0, 3);

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Recent Blogs</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Check out my latest articles and insights on web development, design, and digital trends.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestBlogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <Link to={`/blog/${blog.id}`}>
              <img src={blog.image} alt={blog.title} />
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <span className="text-primary text-sm">{blog.category}</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold hover:text-primary transition-colors">{blog.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
