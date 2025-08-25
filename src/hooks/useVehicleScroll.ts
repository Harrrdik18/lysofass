'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export const useVehicleScroll = (totalSections: number) => {
  const [activeSection, setActiveSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSection = useCallback((sectionIndex: number) => {
    if (sectionIndex >= 0 && sectionIndex < totalSections && !isTransitioning) {
      setIsTransitioning(true);
      setActiveSection(sectionIndex);
      
      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  }, [totalSections, isTransitioning]);

  const nextSection = useCallback(() => {
    if (activeSection < totalSections - 1) {
      goToSection(activeSection + 1);
    }
  }, [activeSection, totalSections, goToSection]);

  const prevSection = useCallback(() => {
    if (activeSection > 0) {
      goToSection(activeSection - 1);
    }
  }, [activeSection, goToSection]);

  // Handle wheel scroll
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isInVehicleArea = false;
    
    const checkIfInVehicleArea = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        isInVehicleArea = rect.top <= 0 && rect.bottom >= window.innerHeight;
      }
    };
    
    const handleWheel = (e: Event) => {
      checkIfInVehicleArea();
      
      if (!isInVehicleArea) return;
      
      const wheelEvent = e as WheelEvent;
      e.preventDefault();
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (wheelEvent.deltaY > 0) {
          // Scrolling down
          if (activeSection < totalSections - 1) {
            nextSection();
          }
        } else {
          // Scrolling up
          if (activeSection > 0) {
            prevSection();
          }
        }
      }, 100);
    };

    // Check initial position
    checkIfInVehicleArea();
    
    // Add event listeners
    window.addEventListener('scroll', checkIfInVehicleArea);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('resize', checkIfInVehicleArea);

    return () => {
      window.removeEventListener('scroll', checkIfInVehicleArea);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', checkIfInVehicleArea);
      clearTimeout(timeoutId);
    };
  }, [activeSection, totalSections, nextSection, prevSection]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSection();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        prevSection();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextSection, prevSection]);

  return {
    activeSection,
    isTransitioning,
    goToSection,
    nextSection,
    prevSection,
    containerRef
  };
};
