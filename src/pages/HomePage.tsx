import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <Hero />
        <Services />
        <Experience />
        <Skills />
        <Education />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
    </main>
  );
};

export default HomePage;
