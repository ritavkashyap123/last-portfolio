import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaTag, FaArrowLeft, FaTwitter, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { blogData } from '../data/blogData';

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogData.find(blog => blog.id === parseInt(id ?? ''));
  
  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Blog post not found</h2>
        <Link to="/" className="text-primary hover:underline">Return to home</Link>
      </div>
    );
  }

  const relatedPosts = blog.relatedPosts.map(id => blogData.find(blog => blog.id === id)).filter(Boolean);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-dark/90 z-10"></div>
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Link to="/" className="inline-flex items-center text-primary mb-6 hover:underline">
                <FaArrowLeft className="mr-2" /> Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{blog.title}</h1>
              <div className="flex flex-wrap justify-center items-center gap-4 text-gray-300">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-primary" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center">
                  <FaTag className="mr-2 text-primary" />
                  <span>{blog.category}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              {/* Author Info */}
              <div className="flex items-center mb-8 pb-8 border-b border-gray-700">
                <img 
                  src={blog.author.avatar} 
                  alt={blog.author.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">{blog.author.name}</h3>
                  <p className="text-primary text-sm">{blog.author.role}</p>
                </div>
              </div>

              {/* Blog Content */}
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Share this post</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                    <FaFacebook />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-4"
          >
            {/* Related Posts */}
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Related Posts</h3>
              <div className="space-y-6">
                {relatedPosts.map((post, index) => (
                  <Link key={index} to={`/blog/${post?.id}`} className="flex group">
                    <img 
                      src={post?.image} 
                      alt={post?.title} 
                      className="w-20 h-20 rounded-lg object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">{post?.title}</h4>
                      <p className="text-sm text-gray-400">{post?.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-dark/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-6">Categories</h3>
              <div className="space-y-2">
                {['UI/UX Design', 'Web Development', 'Branding', 'Technology'].map((category, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0">
                    <span>{category}</span>
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                      {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
