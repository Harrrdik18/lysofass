import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 0,
      type: 'intro',
      title: 'Evolving the drive with 360-degree nonwoven solutions',
      description: 'Click anywhere for next slide',
      note: 'Only visible for prototype'
    },
    {
      id: 1,
      type: 'passenger',
      title: 'Evolving the drive with 360-degree nonwoven solutions',
      vehicleType: 'Passenger vehicles',
      description: 'Paving up Nonwoven innovation from interior to exterior.',
      view: 'Composite Body',
      video: '/Passenger Alpha - Trim.mp4'
    },
    {
      id: 2,
      type: 'commercial',
      title: 'Evolving the drive with 360-degree nonwoven solutions',
      vehicleType: 'Commercial vehicles',
      description: 'Advancing Nonwoven engineering for heavy-duty vehicles.',
      video: '/Commercial Alpha.mp4'
    },
    {
      id: 3,
      type: 'passenger',
      title: 'Evolving the drive with 360-degree nonwoven solutions',
      vehicleType: 'Passenger vehicles',
      description: 'Paving up Nonwoven innovation from interior to exterior.',
      view: 'Front',
      video: '/Front.mp4'
    },
    {
      id: 4,
      type: 'passenger',
      title: 'Evolving the drive with 360-degree nonwoven solutions',
      vehicleType: 'Passenger vehicles',
      description: 'Paving up Nonwoven innovation from interior to exterior.',
      view: 'Cabin',
      video: '/Cabin.mp4'
    },
    {
      id: 5,
      type: 'passenger',
      title: 'Evolving the drive with 360-degree nonwoven solutions',
      vehicleType: 'Passenger vehicles',
      description: 'Paving up Nonwoven innovation from interior to exterior.',
      view: 'Trunk',
      video: '/Trunk.mp4'
    },
    {
      id: 6,
      type: 'passenger',
      title: 'Evolving the drive with 360-degree nonwoven solutions',
      vehicleType: 'Passenger vehicles',
      description: 'Paving up Nonwoven innovation from interior to exterior.',
      view: 'Exterior',
      video: '/Exterior.mp4'
    }
  ];

  const navigationItems = ['Composite Body', 'Front', 'Cabin', 'Trunk', 'Exterior'];

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isPlaying, slides.length]);

  const handleSlideClick = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleNavigationClick = (index) => {
    setCurrentSlide(index + 1); // +1 because slide 0 is intro
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-black min-h-screen flex items-center justify-center cursor-pointer relative" onClick={handleSlideClick}>
        <div className="w-full h-screen flex flex-col p-10 relative pt-32">
          {/* Main Title */}
          <h1 className="text-5xl font-light text-center mb-5 leading-tight text-white">
            {currentSlideData.title.split('**').map((part, index) => 
              index % 2 === 1 ? <strong key={index} className="font-semibold">{part}</strong> : part
            )}
          </h1>

          {/* Instructional Text */}
          {currentSlideData.type === 'intro' && (
            <div className="text-center text-gray-400 text-sm leading-relaxed">
              <p>{currentSlideData.description}</p>
              <p>{currentSlideData.note}</p>
            </div>
          )}

          {/* Main Content */}
          {currentSlideData.type !== 'intro' && (
            <div className="flex flex-1 mt-10 gap-10">
              {/* Left Panel */}
              <div className="w-80 border-r border-gray-700 pr-10 flex items-center">
                <div className="w-full">
                  <h2 className="text-3xl font-normal mb-4 text-white">{currentSlideData.vehicleType}</h2>
                  <p className="text-base leading-relaxed text-gray-400 font-light">{currentSlideData.description}</p>
                </div>
              </div>

              {/* Right Panel - Vehicle Display */}
              <div className="flex-1 flex flex-col justify-center items-center relative">
                <div className="w-full h-96 flex justify-center items-center mb-16">
                  {currentSlideData.video ? (
                    <video 
                      className="w-full h-full object-cover rounded-xl"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    >
                      <source src={currentSlideData.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl flex flex-col justify-center items-center relative">
                      <div className="absolute top-5 left-5 right-5 bottom-5 border border-gray-600 rounded-lg opacity-30"></div>
                      <div className="text-2xl font-medium text-white mb-2 z-10">
                        {currentSlideData.view || currentSlideData.vehicleType}
                      </div>
                      <div className="text-sm text-gray-500 z-10">3D Model View</div>
                    </div>
                  )}
                </div>

                {/* Navigation Icons for Passenger Vehicles */}
                {currentSlideData.type === 'passenger' && (
                  <div className="flex gap-5 justify-center items-center">
                    {navigationItems.map((item, index) => (
                      <div
                        key={item}
                        className={`flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                          currentSlideData.view === item ? 'active' : ''
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigationClick(index);
                        }}
                      >
                        <div className={`w-12 h-12 border-2 border-white rounded-full flex justify-center items-center transition-all duration-300 ${
                          currentSlideData.view === item ? 'bg-white text-black' : ''
                        } hover:scale-110 hover:shadow-lg hover:shadow-white/30`}>
                          <span className="text-lg font-semibold">{item.charAt(0)}</span>
                        </div>
                        <span className="text-xs text-white text-center whitespace-nowrap">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Control Button */}
          <div 
            className="absolute top-10 right-10 w-12 h-12 border-2 border-white rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-white/30"
            onClick={(e) => {
              e.stopPropagation();
              togglePlayPause();
            }}
          >
            <div className="flex gap-1 items-center">
              <div className="w-0.5 h-4 bg-white rounded"></div>
              <div className="w-0.5 h-4 bg-white rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-500 py-20 text-white">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-15 items-start">
          <div className="flex flex-col gap-8">
            <h2 className="text-5xl font-semibold">Get in touch</h2>
            <div className="w-15 h-1 bg-white mt-2.5"></div>
            <p className="text-lg opacity-90">For general enquiries</p>
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-sm">Address:</span>
                <span className="text-base opacity-90">110, 16th Road, Chembur, Mumbai - 400071</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-sm">Phone:</span>
                <span className="text-base opacity-90">+91 22 25208822</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-sm">Email:</span>
                <span className="text-base opacity-90">info@supremegroup.co.in</span>
              </div>
            </div>
          </div>

          <div>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col">
                <input 
                  type="text" 
                  placeholder="Full name" 
                  className="bg-transparent border-none border-b-2 border-white/30 py-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-white placeholder-white/70"
                />
              </div>
              <div className="flex flex-col">
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  className="bg-transparent border-none border-b-2 border-white/30 py-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-white placeholder-white/70"
                />
              </div>
              <div className="flex flex-col">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="bg-transparent border-none border-b-2 border-white/30 py-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-white placeholder-white/70"
                />
              </div>
              <div className="flex flex-col">
                <textarea 
                  placeholder="Message" 
                  rows="4"
                  className="bg-transparent border-none border-b-2 border-white/30 py-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-white placeholder-white/70 resize-y min-h-24"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 self-start mt-2.5 hover:bg-white hover:text-blue-500 hover:-translate-y-0.5"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
