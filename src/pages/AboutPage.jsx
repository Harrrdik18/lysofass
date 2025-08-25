import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="max-w-4xl mx-auto px-10 relative z-20">
          <h1 className="text-6xl font-semibold mb-5 gradient-text">About Supreme Group</h1>
          <p className="text-xl text-gray-400 leading-relaxed">Leading innovation in nonwoven solutions for over three decades</p>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-blue-300 rounded-full"></div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-15 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-5xl font-semibold mb-8 text-white">Our Story</h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-5">
                Founded in 1990, Supreme Group has been at the forefront of nonwoven technology innovation. 
                We specialize in developing advanced solutions for automotive, apparel, and filtration industries, 
                delivering quality products that meet the highest standards of performance and sustainability.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                With our state-of-the-art manufacturing facilities and dedicated R&D team, we continue to push 
                the boundaries of what's possible in nonwoven materials, creating solutions that drive progress 
                across multiple industries.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="text-center py-8 px-5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 card-hover">
                <span className="block text-5xl font-bold text-blue-500 mb-2.5">30+</span>
                <span className="text-base text-gray-400 font-medium">Years of Experience</span>
              </div>
              <div className="text-center py-8 px-5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 card-hover">
                <span className="block text-5xl font-bold text-blue-500 mb-2.5">50+</span>
                <span className="text-base text-gray-400 font-medium">Countries Served</span>
              </div>
              <div className="text-center py-8 px-5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 card-hover">
                <span className="block text-5xl font-bold text-blue-500 mb-2.5">1000+</span>
                <span className="text-base text-gray-400 font-medium">Products Developed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-15">
            <h2 className="text-5xl font-semibold mb-5 text-white">Innovation</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">Driving the future through cutting-edge technology and research</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl border border-gray-700 text-center card-hover">
              <div className="text-5xl mb-5">🔬</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">R&D Excellence</h3>
              <p className="text-base leading-relaxed text-gray-300">Our dedicated research team works tirelessly to develop next-generation nonwoven materials that meet evolving industry demands.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl border border-gray-700 text-center card-hover">
              <div className="text-5xl mb-5">🌱</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Sustainable Solutions</h3>
              <p className="text-base leading-relaxed text-gray-300">We prioritize eco-friendly materials and processes, ensuring our products contribute to a more sustainable future.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl border border-gray-700 text-center card-hover">
              <div className="text-5xl mb-5">⚡</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Advanced Technology</h3>
              <p className="text-base leading-relaxed text-gray-300">State-of-the-art manufacturing facilities equipped with the latest technology for superior product quality.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl border border-gray-700 text-center card-hover">
              <div className="text-5xl mb-5">🤝</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Collaborative Approach</h3>
              <p className="text-base leading-relaxed text-gray-300">Working closely with clients to develop customized solutions that address specific industry challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Competency */}
      <section id="global-competency" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-15">
            <h2 className="text-5xl font-semibold mb-5 text-white">Global Competency</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">Delivering world-class solutions across international markets</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-white mt-10 first:mt-0">International Presence</h3>
              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                With manufacturing facilities and distribution networks spanning across multiple continents, 
                Supreme Group serves clients in over 50 countries worldwide. Our global presence enables 
                us to understand diverse market needs and deliver localized solutions.
              </p>
              
              <h3 className="text-3xl font-semibold mb-4 text-white">Quality Standards</h3>
              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                We maintain the highest international quality standards, with certifications including 
                ISO 9001, ISO 14001, and industry-specific certifications. Our commitment to quality 
                ensures consistent performance across all our products.
              </p>
              
              <h3 className="text-3xl font-semibold mb-4 text-white">Customer Support</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                Our global customer support team provides 24/7 assistance, ensuring seamless service 
                and support for our international clientele. We believe in building long-term partnerships 
                based on trust and reliability.
              </p>
            </div>
            
            <div className="flex justify-center items-center">
              <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-xl flex flex-col justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10"></div>
                <div className="absolute top-5 left-5 right-5 bottom-5 border border-gray-600 rounded-lg opacity-30"></div>
                <div className="text-center z-10">
                  <div className="text-6xl mb-4">🌍</div>
                  <div className="text-2xl font-semibold text-white mb-2.5">Global Distribution Network</div>
                  <div className="text-base text-blue-500">50+ Countries Served</div>
                </div>
                {/* Animated dots representing global presence */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-15">
            <h2 className="text-5xl font-semibold mb-5 text-white">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl border border-gray-700 text-center card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">Excellence</h3>
              <p className="text-base leading-relaxed text-gray-300">Striving for the highest standards in everything we do</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl border border-gray-700 text-center card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">Innovation</h3>
              <p className="text-base leading-relaxed text-gray-300">Continuously pushing boundaries to create better solutions</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl border border-gray-700 text-center card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">Integrity</h3>
              <p className="text-base leading-relaxed text-gray-300">Building trust through honest and transparent relationships</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl border border-gray-700 text-center card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">Sustainability</h3>
              <p className="text-base leading-relaxed text-gray-300">Committed to environmental responsibility and social impact</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
