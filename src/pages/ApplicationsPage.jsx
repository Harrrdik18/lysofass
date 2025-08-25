import React, { useState } from 'react';

const ApplicationsPage = () => {
  const [activeTab, setActiveTab] = useState('automotive');

  const applications = {
    automotive: {
      title: 'Automotive Solutions',
      subtitle: 'Advanced nonwoven materials for modern vehicles',
      description: 'Our automotive solutions provide superior performance, durability, and comfort for all vehicle components. From interior trims to engine filtration, we deliver innovative materials that meet the highest industry standards.',
      icon: '🚗',
      features: [
        'Interior Trims & Upholstery',
        'Engine Air Filtration',
        'Cabin Air Filtration',
        'Sound Absorption Materials',
        'Thermal Insulation',
        'Structural Components'
      ],
      benefits: [
        'Enhanced comfort and luxury',
        'Improved fuel efficiency',
        'Better air quality',
        'Reduced noise levels',
        'Longer component lifespan',
        'Sustainable materials'
      ]
    },
    apparel: {
      title: 'Apparel & Textiles',
      subtitle: 'Innovative fabrics for modern fashion',
      description: 'Our apparel solutions combine comfort, style, and functionality. We develop advanced nonwoven materials that are breathable, durable, and environmentally conscious for the fashion industry.',
      icon: '👕',
      features: [
        'Fashion Fabrics',
        'Technical Textiles',
        'Sportswear Materials',
        'Medical Textiles',
        'Protective Clothing',
        'Eco-friendly Fabrics'
      ],
      benefits: [
        'Superior comfort and fit',
        'Moisture management',
        'Temperature regulation',
        'Durability and longevity',
        'Sustainable production',
        'Customizable properties'
      ]
    },
    filtration: {
      title: 'Filtration Systems',
      subtitle: 'Pure performance through advanced filtration',
      description: 'Our filtration solutions provide exceptional air and liquid purification for various industrial and commercial applications. We design materials that capture contaminants while maintaining optimal flow rates.',
      icon: '🔬',
      features: [
        'Air Filtration',
        'Liquid Filtration',
        'HEPA Filters',
        'Industrial Filters',
        'Medical Filters',
        'Automotive Filters'
      ],
      benefits: [
        'High efficiency filtration',
        'Low pressure drop',
        'Extended filter life',
        'Cost-effective solutions',
        'Customizable specifications',
        'Regulatory compliance'
      ]
    },
    customised: {
      title: 'Customized Solutions',
      subtitle: 'Tailored materials for unique requirements',
      description: 'We work closely with clients to develop bespoke nonwoven solutions that address specific challenges and requirements. Our engineering team creates custom materials with precise properties and performance characteristics.',
      icon: '⚙️',
      features: [
        'Custom Material Development',
        'Performance Testing',
        'Prototype Development',
        'Scale-up Support',
        'Technical Consultation',
        'Quality Assurance'
      ],
      benefits: [
        'Tailored to specific needs',
        'Optimized performance',
        'Reduced development time',
        'Technical expertise',
        'Comprehensive support',
        'Long-term partnership'
      ]
    }
  };

  const currentApp = applications[activeTab];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="max-w-4xl mx-auto px-10 relative z-20">
          <h1 className="text-6xl font-semibold mb-5 gradient-text">Applications</h1>
          <p className="text-xl text-gray-400 leading-relaxed">Innovative nonwoven solutions across industries</p>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-blue-300 rounded-full"></div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-gray-900 py-10 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex justify-center gap-5 flex-wrap">
            <button 
              className={`border-2 border-gray-700 text-gray-400 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 min-w-36 ${
                activeTab === 'automotive' 
                  ? 'bg-blue-500 border-blue-500 text-white' 
                  : 'hover:border-blue-500 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab('automotive')}
            >
              🚗 Automotive
            </button>
            <button 
              className={`border-2 border-gray-700 text-gray-400 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 min-w-36 ${
                activeTab === 'apparel' 
                  ? 'bg-blue-500 border-blue-500 text-white' 
                  : 'hover:border-blue-500 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab('apparel')}
            >
              👕 Apparel
            </button>
            <button 
              className={`border-2 border-gray-700 text-gray-400 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 min-w-36 ${
                activeTab === 'filtration' 
                  ? 'bg-blue-500 border-blue-500 text-white' 
                  : 'hover:border-blue-500 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab('filtration')}
            >
              🔬 Filtration
            </button>
            <button 
              className={`border-2 border-gray-700 text-gray-400 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 min-w-36 ${
                activeTab === 'customised' 
                  ? 'bg-blue-500 border-blue-500 text-white' 
                  : 'hover:border-blue-500 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab('customised')}
            >
              ⚙️ Customised Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Application Content */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-15">
            <div className="text-6xl mb-4">{currentApp.icon}</div>
            <h2 className="text-5xl font-semibold mb-4 text-white">{currentApp.title}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">{currentApp.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-15">
            <div className="lg:col-span-2">
              <div className="mb-10">
                <h3 className="text-3xl font-semibold mb-5 text-white">Overview</h3>
                <p className="text-lg leading-relaxed text-gray-300">{currentApp.description}</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-5 text-white">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {currentApp.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 p-5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50">
                      <div className="text-blue-500 text-lg font-bold">✓</div>
                      <span className="text-base text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-semibold mb-5 text-white">Benefits</h3>
                <ul className="space-y-3">
                  {currentApp.benefits.map((benefit, index) => (
                    <li key={index} className="py-3 border-b border-gray-700 text-gray-300 text-base leading-relaxed relative pl-6 before:content-['•'] before:text-blue-500 before:text-2xl before:absolute before:left-0 before:top-2 last:border-b-0">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 text-center card-hover">
                <h3 className="text-2xl font-semibold mb-5 text-white">Get Started</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Ready to explore our solutions for your specific needs?</p>
                <button className="bg-blue-500 text-white border-none px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:bg-blue-600 hover:-translate-y-0.5">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Applications */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-5xl font-semibold mb-12 text-center text-white">Explore Other Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(applications).map(([key, app]) => (
              <div 
                key={key} 
                className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                  activeTab === key ? 'border-blue-500' : 'border-gray-700 hover:border-blue-500'
                } hover:-translate-y-1`}
                onClick={() => setActiveTab(key)}
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold mb-2.5 text-white">{app.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{app.subtitle}</p>
                <div className="absolute top-5 right-5 text-2xl text-blue-500 transition-transform duration-300 group-hover:translate-x-1">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationsPage;
