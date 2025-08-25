'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import VehicleSection from '../components/VehicleSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  
  const vehicleSections = [
    {
      vehicleType: "Passenger vehicles",
      description: "Having a nonwoven innovation from interior to exterior",
      modelType: "suv"
    },
    {
      vehicleType: "Commercial vehicles",
      description: "Adding a nonwoven engineering for heavy-duty vehicles",
      modelType: "truck"
    }
  ];

  // Simple scroll detection for indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = vehicleSections.map((_, index) => 
        document.getElementById(`vehicle-section-${index}`)
      );
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [vehicleSections.length]);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Vehicle Sections Container */}
        <div className="relative bg-black">
          {/* Custom Scroll Indicator */}
          <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20">
            <div className="flex flex-col space-y-4">
              {vehicleSections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.getElementById(`vehicle-section-${index}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                    index === activeSection 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  data-section={index}
                >
                  <span className="sr-only">Section {index + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Sections */}
          <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
            {vehicleSections.map((section, index) => (
              <div 
                key={index} 
                id={`vehicle-section-${index}`}
                className="h-screen snap-start animate-slide-fade-in"
                data-section={index}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <VehicleSection
                  vehicleType={section.vehicleType}
                  description={section.description}
                  modelType={section.modelType}
                />
              </div>
            ))}
          </div>
        </div>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
