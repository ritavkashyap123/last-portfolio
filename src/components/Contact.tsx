import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaTwitter, FaLinkedinIn, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {

  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/yourusername' },
    { icon: FaLinkedinIn, link: 'https://linkedin.com/in/yourusername' },
    { icon: FaInstagram, link: 'https://instagram.com/yourusername' },
    { icon: FaFacebook, link: 'https://facebook.com/yourusername' }
  ];

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'kashyap.ritav@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+91 9365353526' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Guwahati, India' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently available for freelance work. Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-dark/50 backdrop-blur-lg rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-3xl opacity-20" />
            
            <h3 className="text-2xl font-bold mb-8">Get in touch</h3>
            
            <div className="space-y-6 mb-8 relative">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                >
                  <item.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-dark/50 backdrop-blur-lg rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary to-purple-600 rounded-full blur-3xl opacity-20" />
            
            <h3 className="text-2xl font-bold mb-8">Send me a message</h3>
            
            <form className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-dark/50 border border-gray-700 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-dark/50 border border-gray-700 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full bg-dark/50 border border-gray-700 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <textarea 
                  rows={4} 
                  placeholder="Message" 
                  className="w-full bg-dark/50 border border-gray-700 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-purple-600 text-white font-medium py-4 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
