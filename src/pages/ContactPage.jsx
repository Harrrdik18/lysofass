import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-32 text-center">
        <div className="max-w-4xl mx-auto px-10">
          <h1 className="text-6xl font-semibold mb-5 gradient-text">Contact Us</h1>
          <p className="text-xl text-gray-400 leading-relaxed">Get in touch with our team for any inquiries</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-start">
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

              <div className="mt-5">
                <h3 className="text-xl font-semibold mb-4 text-white">Office Hours</h3>
                <p className="text-base text-gray-200 mb-2 leading-relaxed">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-base text-gray-200 mb-2 leading-relaxed">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-base text-gray-200 leading-relaxed">Sunday: Closed</p>
              </div>
            </div>

            <div>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Full name" 
                    className="bg-transparent border-none border-b-2 border-white/30 py-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-white placeholder-white/70"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="E-mail" 
                    className="bg-transparent border-none border-b-2 border-white/30 py-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-white placeholder-white/70"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Subject" 
                    className="bg-transparent border-none border-b-2 border-white/30 py-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-white placeholder-white/70"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <textarea 
                    name="message"
                    placeholder="Message" 
                    rows="4"
                    className="bg-transparent border-none border-b-2 border-white/30 py-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-white placeholder-white/70 resize-y min-h-24"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
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
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl border border-gray-700 text-center card-hover">
              <div className="text-5xl mb-5">📞</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Call Us</h3>
              <p className="text-base leading-relaxed text-gray-300 mb-5">Speak directly with our team</p>
              <a href="tel:+912225208822" className="text-blue-500 font-medium transition-colors duration-300 hover:text-blue-400">+91 22 25208822</a>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl border border-gray-700 text-center card-hover">
              <div className="text-5xl mb-5">✉️</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Email Us</h3>
              <p className="text-base leading-relaxed text-gray-300 mb-5">Send us a detailed message</p>
              <a href="mailto:info@supremegroup.co.in" className="text-blue-500 font-medium transition-colors duration-300 hover:text-blue-400">info@supremegroup.co.in</a>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl border border-gray-700 text-center card-hover">
              <div className="text-5xl mb-5">📍</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Visit Us</h3>
              <p className="text-base leading-relaxed text-gray-300 mb-5">Come see our facilities</p>
              <span className="text-blue-500 font-medium">110, 16th Road, Chembur, Mumbai - 400071</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-5xl font-semibold mb-12 text-center text-white">Find Us</h2>
          <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-xl flex justify-center items-center relative">
            <div className="absolute top-5 left-5 right-5 bottom-5 border border-gray-600 rounded-lg opacity-30"></div>
            <div className="text-center z-10">
              <div className="text-2xl font-semibold text-white mb-2.5">Interactive Map</div>
              <div className="text-xl text-blue-500 mb-2.5">Supreme Group Headquarters</div>
              <div className="text-base text-gray-400 leading-relaxed">110, 16th Road, Chembur, Mumbai - 400071</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
