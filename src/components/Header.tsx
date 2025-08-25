'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-supreme-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-supreme-blue font-bold text-lg">SUPREME</span>
                <span className="text-black font-medium text-xs">GROUP</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#applications" className="text-gray-700 hover:text-supreme-blue transition-colors">
              Applications
            </a>
            <a href="#about" className="text-gray-700 hover:text-supreme-blue transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-supreme-blue transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com" className="text-gray-700 hover:text-supreme-blue transition-colors">
                in
              </a>
              <div className="flex items-center space-x-1">
                <span className="text-gray-700">ENG</span>
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <button className="bg-supreme-light-blue text-white px-4 py-2 rounded-lg hover:bg-supreme-blue transition-colors">
                Contact Us
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-supreme-blue focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#applications" className="block px-3 py-2 text-gray-700 hover:text-supreme-blue transition-colors">
                Applications
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-supreme-blue transition-colors">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-supreme-blue transition-colors">
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="w-full bg-supreme-light-blue text-white px-4 py-2 rounded-lg hover:bg-supreme-blue transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
