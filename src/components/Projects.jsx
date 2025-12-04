import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Amazon Review Intelligence System",
      description: "Engineered comprehensive review extraction system processing 50,000+ entries with multi-dimensional data capture including ratings, verification status, temporal data, and integrated sentiment analysis.",
      metrics: "50K+ reviews • 3-day delivery",
      tech: ["Puppeteer", "Cheerio", "Node.js"]
    },
    {
      title: "Reputation Monitoring Platform",
      description: "Developed automated Google Maps review aggregation system for enterprise reputation management. Real-time collection of business intelligence including sentiment analysis, rating trends, and comprehensive metadata.",
      metrics: "10K+ reviews • Real-time updates",
      tech: ["Playwright", "API Integration", "MongoDB"]
    },
    {
      title: "Financial Document Intelligence",
      description: "Architected sophisticated SEC EDGAR data extraction engine for financial document analysis. Automated parsing and structuring of 10-K and 10-Q filings into queryable formats.",
      metrics: "5,000+ filings • Structured JSON",
      tech: ["Cheerio", "Node.js", "RegEx"]
    },
    {
      title: "Dynamic Pricing Intelligence Platform",
      description: "Built real-time competitive pricing surveillance system monitoring 1,000+ products across multiple e-commerce platforms. Features intelligent alerting, historical trend analysis, and predictive insights.",
      metrics: "1K+ products • Hourly updates",
      tech: ["Puppeteer", "Redis", "Express.js"]
    },
    {
      title: "Career Intelligence Aggregator",
      description: "Developed sophisticated LinkedIn job market analysis system extracting comprehensive employment data including role specifications, organizational information, and geographic distribution. Implemented intelligent rate limiting and session management.",
      metrics: "20K+ jobs • Daily automation",
      tech: ["Playwright", "Node.js", "PostgreSQL"]
    },
    {
      title: "Multi-Source Property Intelligence",
      description: "Engineered comprehensive real estate data aggregation platform consolidating listings from disparate sources. Implemented advanced data normalization, image processing pipelines, and unified schema design.",
      metrics: "15K+ properties • Multi-source",
      tech: ["Apify Actor", "AWS S3", "Node.js"]
    }
  ];

  return (
    <section id="projects" className="bg-[#F7F5EE] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#F2A93B] text-xl mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            Recent Work
          </h2>
          <h3 className="text-[#1A3C34] text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Projects & Case Studies
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <h4 className="text-[#1A3C34] text-xl font-bold mb-3">
                {project.title}
              </h4>
              <p className="text-[#43645C] text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Metrics */}
              <div className="bg-[#F7F5EE] rounded-lg px-3 py-2 mb-4">
                <p className="text-[#1A3C34] text-xs font-semibold">
                  📊 {project.metrics}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-[#1A6F5C] text-white px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
