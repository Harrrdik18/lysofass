'use client';

import { useState } from 'react';

interface VehicleSectionProps {
  vehicleType: string;
  description: string;
  modelType: string;
}

export default function VehicleSection({ vehicleType, description, modelType }: VehicleSectionProps) {
  const [activeComponent, setActiveComponent] = useState('cabin');
  const [isPlaying, setIsPlaying] = useState(false);

  const components = [
    { id: 'composite', label: 'Composite body', icon: '🚗' },
    { id: 'front', label: 'Front', icon: '🔧' },
    { id: 'cabin', label: 'Cabin', icon: '🪑' },
    { id: 'trunk', label: 'Trunk', icon: '📦' },
    { id: 'exterior', label: 'Exterior', icon: '🚙' }
  ];

  const getModelImage = () => {
    switch (modelType) {
      case 'suv':
        return '/Front.mp4';
      case 'truck':
        return '/Commercial Alpha.mp4';
      case 'engine':
        return '/Passenger Alpha - Trim.mp4';
      case 'interior':
        return '/Cabin.mp4';
      case 'seat':
        return '/Passenger Alpha - Trim.mp4';
      case 'chassis':
        return '/Trunk.mp4';
      default:
        return '/Front.mp4';
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
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src={getModelImage()}
              />
              
              {/* Overlay for interaction */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🚗</div>
                  <div className="text-sm">3D Model View</div>
                </div>
              </div>
            </div>

            {/* Interactive Controls */}
            <div className="flex items-center justify-between">
              {/* Component Buttons */}
              <div className="flex space-x-4">
                {components.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => setActiveComponent(component.id)}
                    className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                      activeComponent === component.id
                        ? 'bg-white/20 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="text-lg">{component.icon}</span>
                    <span className="text-xs text-center max-w-16">{component.label}</span>
                  </button>
                ))}
              </div>

              {/* Play/Pause Button */}
              <div className="flex items-center space-x-2">
                <div className="w-px h-8 bg-white/30"></div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
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
