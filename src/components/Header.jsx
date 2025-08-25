import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [language, setLanguage] = useState('ENG');
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-black py-5 fixed top-0 left-0 right-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-semibold tracking-wide hover:text-blue-500 transition-colors duration-300">
          S SUPREME GROUP
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10">
          <Link 
            to="/" 
            className={`text-white text-base font-normal transition-colors duration-300 relative ${
              isActive('/') ? 'text-blue-500' : 'hover:text-blue-500'
            }`}
          >
            Home
            {isActive('/') && (
              <div className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></div>
            )}
          </Link>
          <Link 
            to="/about" 
            className={`text-white text-base font-normal transition-colors duration-300 relative ${
              isActive('/about') ? 'text-blue-500' : 'hover:text-blue-500'
            }`}
          >
            About
            {isActive('/about') && (
              <div className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></div>
            )}
          </Link>
          <Link 
            to="/applications" 
            className={`text-white text-base font-normal transition-colors duration-300 relative ${
              isActive('/applications') ? 'text-blue-500' : 'hover:text-blue-500'
            }`}
          >
            Applications
            {isActive('/applications') && (
              <div className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></div>
            )}
          </Link>
        </nav>

        {/* Right side elements */}
        <div className="flex items-center gap-5">
          <Link 
            to="/contact" 
            className="bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl font-semibold transition-colors duration-300 hover:text-blue-500"
          >
            in
          </a>
          
          <div className="flex items-center gap-1 cursor-pointer text-white text-sm transition-colors duration-300 hover:text-blue-500">
            <span>{language}</span>
            <span className="text-xs mt-0.5">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
