'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Performance in motion",
      subtitle: "Soft Trims and NVH Solutions",
      description: "for seamless rides",
      tagline: "Evolving the drive with 360-degree nonwoven solutions."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-supreme-blue/20 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-gray-300 text-lg sm:text-xl font-light mb-4">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-white text-lg sm:text-xl font-light">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-12">
            <p className="text-white text-xl sm:text-2xl font-medium">
              {slides[currentSlide].tagline}
            </p>
          </div>

          {/* Prototype Note */}
          <div className="text-gray-400 text-sm mb-8">
            Click anywhere for next slide (Only written for prototype)
          </div>

          {/* Interactive Elements */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            {/* Vehicle Type Buttons */}
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
                Passenger Vehicles
              </button>
              <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
                Commercial Vehicles
              </button>
            </div>

            {/* Play/Pause Button */}
            <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Clickable overlay for next slide */}
      <div 
        className="absolute inset-0 cursor-pointer z-5"
        onClick={handleNextSlide}
        style={{ zIndex: 5 }}
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
