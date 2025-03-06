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
            <a href="https://github.com/ritavkashyap123" className="text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://www.instagram.com/suhrid_kashyap" className="text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ritav-kashyap/" className="text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://www.facebook.com/share/12BeuWLAT1V/" className="text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
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
