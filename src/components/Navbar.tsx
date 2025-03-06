import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { toast } from 'sonner';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Works', to: 'portfolio' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleHireMe = () => {
    toast.info('Hehh Noob 😂');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark bg-opacity-80 backdrop-blur-lg shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="nav-link cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button className="hidden md:block btn-primary" onClick={() => handleHireMe()}>
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-dark bg-opacity-95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link block py-2"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-primary mt-4 w-full">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
