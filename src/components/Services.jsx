import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "🕷️",
      title: "Enterprise Web Scraping",
      description: "Architect robust, scalable data extraction solutions tailored to your business requirements. Precision-engineered scrapers handling complex website structures with reliability."
    },
    {
      icon: "⚙️",
      title: "Custom Scraper Architecture",
      description: "Engineering sophisticated JavaScript scrapers leveraging Puppeteer, Playwright, and Cheerio. Expertly handling dynamic content, SPA frameworks, infinite scrolling, and complex authentication flows."
    },
    {
      icon: "🤖",
      title: "Intelligent Automation Workflows",
      description: "Designing comprehensive Node.js automation architectures encompassing data acquisition, transformation, validation, and orchestrated delivery with enterprise-grade reliability."
    },
    {
      icon: "🔌",
      title: "Data Integration & API Development",
      description: "Seamless data delivery through RESTful APIs, structured formats (CSV, JSON, Excel), or direct database integration. Ensuring data integrity and optimal performance."
    },
    {
      icon: "📊",
      title: "Large-Scale Data Extraction",
      description: "Enterprise-grade scraping infrastructure capable of processing millions of records. Optimized for performance, fault tolerance, and distributed processing with guaranteed reliability."
    },
    {
      icon: "🛡️",
      title: "Advanced Bot Mitigation",
      description: "Implementing sophisticated strategies for bot detection circumvention, intelligent CAPTCHA resolution, rate limit management, and fingerprint randomization."
    },
    {
      icon: "🎯",
      title: "Apify Actor Engineering",
      description: "Developing production-grade Apify Actors for cloud-native scraping infrastructure. Featuring automated scheduling, comprehensive monitoring, and horizontal scalability."
    }
  ];

  return (
    <section id="services" className="bg-white py-20 px-8" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center mb-16">
          <p className="text-[#F2A93B] text-xl mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            What I Do
          </p>
          <h2 id="services-heading" className="text-[#1A3C34] text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Services
          </h2>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {services.map((service, index) => (
            <article 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover:border-[#F2A93B]"
              role="listitem"
            >
              <div className="text-5xl mb-4" aria-hidden="true">{service.icon}</div>
              <h3 className="text-[#1A3C34] text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-[#43645C] leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
