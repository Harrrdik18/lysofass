import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Logo and Copyright */}
        <div className="flex flex-col gap-5">
          <div className="text-blue-500 text-2xl font-semibold tracking-wide">
            S SUPREME GROUP
          </div>
          <p className="text-gray-600 text-sm">©2023. All Rights Reserved.</p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Applications */}
          <div>
            <h3 className="text-gray-800 text-sm font-semibold mb-4 uppercase tracking-wider">
              APPLICATIONS
            </h3>
            <ul className="space-y-2">
              <li><Link to="/applications#apparel" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Apparel</Link></li>
              <li><Link to="/applications#automotive" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Automotive</Link></li>
              <li><Link to="/applications#filtration" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Filtration</Link></li>
              <li><Link to="/applications#customised" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Customised Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-800 text-sm font-semibold mb-4 uppercase tracking-wider">
              COMPANY
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about#innovation" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Innovation</Link></li>
              <li><Link to="/about#global-competency" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Global Competency</Link></li>
              <li><Link to="/about" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-gray-800 text-sm font-semibold mb-4 uppercase tracking-wider">
              MORE
            </h3>
            <ul className="space-y-2">
              <li><Link to="/careers" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Careers</Link></li>
              <li><Link to="/privacy" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-gray-800 text-sm font-semibold mb-4 uppercase tracking-wider">
              FOLLOW US
            </h3>
            <ul className="space-y-2">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Instagram</a></li>
              <li><a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300">Medium</a></li>
            </ul>
          </div>
        </div>

        {/* Address */}
        <div className="text-right lg:text-left">
          <p className="text-gray-600 text-sm leading-relaxed">
            Supreme house 110, 16th Road, Chembur Mumbai - 400071.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
