import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "InstaChat - AI Language Translation Extension",
      description: "Revolutionary Chrome extension enabling real-time multilingual conversations. Automatically translates messages between any languages - chat with Chinese friends in Hindi, English, or Hinglish. Break language barriers effortlessly with instant AI-powered translation for Instagram, WhatsApp, and social platforms.",
      metrics: "Live Product • Multi-language Support",
      tech: ["Chrome Extension", "AI Translation", "JavaScript"],
      cta: "Buy Now",
      ctaUrl: "https://saiyedkaifali.gumroad.com/l/instachat",
      badge: "Extension"
    },
    {
      title: "Video Splitter - Automated Video Cutter",
      description: "Professional desktop application for batch video processing. Automatically split videos into thousands of segments based on custom time intervals. Perfect for content creators, editors, and social media managers needing precise video segmentation at scale.",
      metrics: "Desktop App • Batch Processing",
      tech: ["Desktop App", "Video Processing", "Automation"],
      cta: "Try Free",
      ctaUrl: "https://splittter.vercel.app/",
      badge: "Desktop App"
    },
    {
      title: "Frame Splitter - Video to Image Converter",
      description: "Advanced frame extraction tool converting videos into high-quality image sequences. Extract frames at custom intervals for animation, analysis, or thumbnail creation. Intelligent processing with adjustable frame rates and output formats.",
      metrics: "Web App • High Quality Output",
      tech: ["Web App", "Image Processing", "FFmpeg"],
      cta: "Launch App",
      ctaUrl: "https://framesplitter.vercel.app/",
      badge: "Web App"
    },
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
    <section id="projects" className="bg-[#F7F5EE] py-20 px-8" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center mb-16">
          <p className="text-[#F2A93B] text-xl mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            Recent Work
          </p>
          <h2 id="projects-heading" className="text-[#1A3C34] text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Projects & Case Studies
          </h2>
        </header>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 flex flex-col"
              role="listitem"
            >
              {/* Badge for product type */}
              {project.badge && (
                <div className="mb-3">
                  <span className="inline-block bg-[#F2A93B] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.badge}
                  </span>
                </div>
              )}
              
              <h3 className="text-[#1A3C34] text-xl font-bold mb-3">
                {project.title}
              </h3>
              <p className="text-[#43645C] text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Metrics */}
              <div className="bg-[#F7F5EE] rounded-lg px-3 py-2 mb-4">
                <p className="text-[#1A3C34] text-xs font-semibold">
                  <span aria-hidden="true">📊</span> {project.metrics}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-[#1A6F5C] text-white px-3 py-1 rounded-full"
                    role="listitem"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* CTA Button */}
              {project.cta && project.ctaUrl && (
                <div className="mt-auto pt-2">
                  <a 
                    href={project.ctaUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-[#F2A93B] hover:bg-[#1A3C34] text-white text-center font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                    aria-label={`${project.cta} - ${project.title}`}
                  >
                    {project.cta} →
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
