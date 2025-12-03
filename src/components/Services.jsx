import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "🕷️",
      title: "Web Scraping",
      description: "Extract structured data from any website with precision. Custom scrapers built for your specific needs."
    },
    {
      icon: "⚙️",
      title: "Custom Scraper Development",
      description: "Tailored scraping solutions for complex websites with dynamic content, pagination, and JavaScript rendering."
    },
    {
      icon: "🤖",
      title: "Automation Workflows",
      description: "End-to-end automation pipelines from data collection to processing and delivery on schedule."
    },
    {
      icon: "🔌",
      title: "API/Data Delivery",
      description: "Clean data delivery via REST API, CSV, JSON, Excel, or direct database integration."
    },
    {
      icon: "📊",
      title: "Bulk Scraping",
      description: "Enterprise-level scraping for millions of records with optimized performance and reliability."
    },
    {
      icon: "🛡️",
      title: "Anti-Bot + CAPTCHA Handling",
      description: "Advanced techniques to bypass bot detection, solve CAPTCHAs, and handle rate limiting."
    }
  ];

  return (
    <section id="services" className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#F2A93B] text-xl mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            What I Do
          </h2>
          <h3 className="text-[#1A3C34] text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Services
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover:border-[#F2A93B]"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h4 className="text-[#1A3C34] text-xl font-bold mb-3">
                {service.title}
              </h4>
              <p className="text-[#43645C] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
