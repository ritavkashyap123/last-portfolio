import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BlogDetailPage from './pages/BlogDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'sonner';

function App() {
  const location = useLocation();
  
  return (
    <div className="font-poppins">
      <ScrollToTop />
      {location.pathname === '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/service/:id" element={<ServiceDetailPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
      <Footer />
      <Toaster richColors/>
    </div>
  );
}

export default App;
