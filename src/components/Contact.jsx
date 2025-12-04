import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can add email service integration here)
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-white py-20 px-8" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center mb-16">
          <p className="text-[#F2A93B] text-xl mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            Let's Talk
          </p>
          <h2 id="contact-heading" className="text-[#1A3C34] text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Get In Touch
          </h2>
          <p className="text-[#43645C] text-lg max-w-2xl mx-auto">
            Have a project in mind? Need web scraping or automation? Let's discuss how I can help you.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            
            {/* WhatsApp CTA */}
            <div className="bg-[#F7F5EE] p-8 rounded-2xl border-2 border-[#F2A93B]">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-3xl">
                  💬
                </div>
                <div>
                  <h4 className="text-[#1A3C34] text-xl font-bold">WhatsApp</h4>
                  <p className="text-[#43645C] text-sm">Quick Response</p>
                </div>
              </div>
              <a 
                href="https://wa.me/yourphonenumber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#1fb855] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="bg-[#F7F5EE] p-8 rounded-2xl">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#F2A93B] rounded-full flex items-center justify-center text-3xl">
                  📧
                </div>
                <div>
                  <h4 className="text-[#1A3C34] text-xl font-bold">Email</h4>
                  <a 
                    href="mailto:kaifali@example.com" 
                    className="text-[#1A6F5C] hover:text-[#F2A93B] transition-colors"
                  >
                    contac@kaifali.tech
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-[#F7F5EE] p-8 rounded-2xl">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#1A6F5C] rounded-full flex items-center justify-center text-3xl">
                  📍
                </div>
                <div>
                  <h4 className="text-[#1A3C34] text-xl font-bold">Location</h4>
                  <p className="text-[#43645C]">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#F7F5EE] p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-[#1A3C34] font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F2A93B] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#1A3C34] font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F2A93B] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#1A3C34] font-semibold mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F2A93B] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your scraping or automation needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A6F5C] text-white py-3 rounded-lg font-semibold hover:bg-[#1A3C34] transition-colors shadow-md"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
