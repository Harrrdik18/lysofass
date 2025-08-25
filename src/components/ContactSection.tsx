'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-supreme-blue py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">
                Get in touch
              </h2>
              <div className="w-20 h-1 bg-white mb-6"></div>
              <p className="text-white text-xl">
                For general enquiries
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 hover-lift p-4 rounded-lg transition-all duration-300">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Address:</p>
                  <p className="text-white/90">110, 16th Road, Chembur, Mumbai - 400071</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover-lift p-4 rounded-lg transition-all duration-300">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Phone:</p>
                  <p className="text-white/90">+91 22 25208822</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover-lift p-4 rounded-lg transition-all duration-300">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Email:</p>
                  <p className="text-white/90">info@supremegroup.co.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition-all duration-300 group-hover:border-white/50"
                  required
                />
              </div>

              <div className="group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-mail"
                  className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition-all duration-300 group-hover:border-white/50"
                  required
                />
              </div>

              <div className="group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition-all duration-300 group-hover:border-white/50"
                  required
                />
              </div>

              <div className="group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition-all duration-300 group-hover:border-white/50 resize-none"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-supreme-light-blue text-white px-8 py-3 rounded-lg hover:bg-white hover:text-supreme-blue transition-all duration-300 font-medium btn-animate disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
