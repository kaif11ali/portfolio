import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Amazon Review Scraper",
      description: "Extracted 50,000+ product reviews with ratings, verified purchase status, and timestamps. Delivered clean CSV with sentiment analysis.",
      metrics: "50K+ reviews • 3-day delivery",
      tech: ["Python", "BeautifulSoup", "Selenium"]
    },
    {
      title: "Google Maps 1-Star Review Scraper",
      description: "Automated collection of negative reviews from Google Maps for reputation monitoring. Included business names, ratings, and review text.",
      metrics: "10K+ reviews • Real-time updates",
      tech: ["Selenium", "API Integration", "MongoDB"]
    },
    {
      title: "SEC EDGAR Filing Extractor",
      description: "Scraped and parsed financial documents from SEC EDGAR database. Extracted structured data from 10-K and 10-Q filings.",
      metrics: "5,000+ filings • Structured JSON",
      tech: ["Python", "Pandas", "RegEx"]
    },
    {
      title: "E-commerce Price Monitor",
      description: "Automated price tracking system for competitor analysis. Monitors 1,000+ products across multiple platforms with alerts.",
      metrics: "1K+ products • Hourly updates",
      tech: ["Scrapy", "Redis", "FastAPI"]
    },
    {
      title: "LinkedIn Job Scraper",
      description: "Collected job postings from LinkedIn with titles, companies, locations, and descriptions. Built custom automation to handle rate limits.",
      metrics: "20K+ jobs • Daily automation",
      tech: ["Playwright", "Node.js", "PostgreSQL"]
    },
    {
      title: "Real Estate Data Aggregator",
      description: "Scraped property listings from multiple real estate sites. Normalized data and delivered unified dataset with images and pricing.",
      metrics: "15K+ properties • Multi-source",
      tech: ["Scrapy", "AWS S3", "Airflow"]
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
