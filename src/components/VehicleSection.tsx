'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface VehicleSectionProps {
  vehicleType: string;
  description: string;
  modelType: string;
}

export default function VehicleSection({ vehicleType, description, modelType }: VehicleSectionProps) {
  const [activeComponent, setActiveComponent] = useState('cabin');
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const components = [
    { 
      id: 'composite', 
      label: 'Composite body', 
      icon: '/ca3f7d1aca7720c84c7d80fc4e21e4260dff0088.png' 
    },
    { 
      id: 'front', 
      label: 'Front', 
      icon: '/ca3f7d1aca7720c84c7d80fc4e21e4260dff0088.png' 
    },
    { 
      id: 'cabin', 
      label: 'Cabin', 
      icon: '/Cabin 1.png' 
    },
    { 
      id: 'trunk', 
      label: 'Trunk', 
      icon: '/ca3f7d1aca7720c84c7d80fc4e21e4260dff0088.png' 
    },
    { 
      id: 'exterior', 
      label: 'Exterior', 
      icon: '/ca3f7d1aca7720c84c7d80fc4e21e4260dff0088.png' 
    }
  ];

  const getModelVideo = (component: string) => {
    // For Passenger vehicles, use Passenger Alpha as base and specific videos for components
    if (modelType === 'suv') {
      switch (component) {
        case 'composite':
          return '/Passenger Alpha - Trim.mp4';
        case 'front':
          return '/Front.mp4';
        case 'cabin':
          return '/Cabin.mp4';
        case 'trunk':
          return '/Trunk.mp4';
        case 'exterior':
          return '/Exterior.mp4';
        default:
          return '/Passenger Alpha - Trim.mp4';
      }
    }
    // For Commercial vehicles, use Commercial Alpha
    else if (modelType === 'truck') {
      return '/Commercial Alpha.mp4';
    }
    return '/Passenger Alpha - Trim.mp4';
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleComponentChange = (componentId: string) => {
    setActiveComponent(componentId);
    // Reset video to beginning when changing components
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  };

  return (
    <section className="min-h-screen bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
                {vehicleType}
              </h2>
              <p className="text-gray-300 text-lg">
                {description}
              </p>
            </div>

            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-white text-2xl sm:text-3xl font-medium">
                Evolving the drive with 360-degree nonwoven solutions
              </h1>
            </div>

            {/* Prototype Note */}
            <div className="text-gray-400 text-sm">
              Click anywhere for next slide / Or a button for prototype
            </div>
          </div>

          {/* Right Column - 3D Model and Controls */}
          <div className="animate-slide-in-right">
            {/* 3D Model Container */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video mb-8">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                key={getModelVideo(activeComponent)} // Force re-render when video changes
                src={getModelVideo(activeComponent)}
              />
              
              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handlePlayPause}
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                >
                  {isPlaying ? (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Interactive Controls */}
            <div className="flex items-center justify-between">
              {/* Component Buttons */}
              <div className="flex space-x-6">
                {components.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => handleComponentChange(component.id)}
                    className={`flex flex-col items-center space-y-2 p-3 rounded-lg transition-all duration-300 ${
                      activeComponent === component.id
                        ? 'bg-white/20 text-white scale-105'
                        : 'text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105'
                    }`}
                  >
                    <div className="w-12 h-12 relative">
                      <Image
                        src={component.icon}
                        alt={component.label}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    <span className="text-xs text-center max-w-20">{component.label}</span>
                  </button>
                ))}
              </div>

              {/* Play/Pause Button */}
              <div className="flex items-center space-x-2 ml-8">
                <div className="w-px h-8 bg-white/30"></div>
                <button
                  onClick={handlePlayPause}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
