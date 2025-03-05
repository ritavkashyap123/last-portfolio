import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebook } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-dark py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo />
          
          <div className="flex space-x-6 my-6 md:my-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <FaFacebook size={20} />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ritav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
