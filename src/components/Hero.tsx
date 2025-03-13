import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '10+', label: 'Hardware Projects' },
    { number: '15+', label: 'Software Projects' },
    { number: '8', label: 'Awards & Honors' },
  ];

  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/ritavkashyap123' },
    { icon: FaInstagram, link: 'https://www.instagram.com/suhrid_kashyap' },
    { icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/ritav-kashyap/' },
    { icon: FaFacebook, link: 'https://www.facebook.com/share/12BeuWLAT1V/' },
    { icon: FaWhatsapp, link: 'https://wa.me/9365353256' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-medium">👋 I am Ritav Kashyap</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Full Stack Developer
              <span className="relative">
                <span className="absolute -top-1 -right-4 text-2xl animate-bounce">+</span>
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 text-2xl md:text-5xl">
                IoT and Robotics Engineer
              </span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              I build dope digital solutions and innovative hardware that empower brands to connect, engage, and thrive in a fast-paced world. Let’s create the future together!
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => window.open('/Ritav_CV.pdf', '_blank')}
              >
                Download CV
              </motion.button>

              <div className="flex items-center space-x-6 ml-4">
                {socialLinks.map(({ icon: Icon, link }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: '#8B5CF6' }}
                    className="text-gray-400 hover:text-primary text-xl transition-colors"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark/50 backdrop-blur-lg rounded-2xl p-4 text-center"
                >
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-30 blur-3xl animate-pulse" />
              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-dark/80">
                <img
                  src="/avater.png"
                  alt="Ritav"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
