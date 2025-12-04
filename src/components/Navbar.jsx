import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#F7F5EE] py-6 px-8 sticky top-0 z-50 shadow-sm" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-3xl font-bold text-[#F2A93B]" style={{ fontFamily: 'Caveat, cursive' }} aria-label="KF - Homepage">
          KF.
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center" role="list">
          <a href="#home" className="text-[#1A3C34] hover:text-[#F2A93B] transition-colors font-medium" role="listitem">
            Home
          </a>
          <a href="#services" className="text-[#1A3C34] hover:text-[#F2A93B] transition-colors font-medium" role="listitem">
            Services
          </a>
          <a href="#projects" className="text-[#1A3C34] hover:text-[#F2A93B] transition-colors font-medium" role="listitem">
            Projects
          </a>
          <a href="#contact" className="text-[#1A3C34] hover:text-[#F2A93B] transition-colors font-medium" role="listitem">
            Contact
          </a>
          <a 
            href="#download" 
            className="bg-[#1A6F5C] text-white px-6 py-2.5 rounded-full hover:bg-[#1A3C34] transition-colors font-medium shadow-md"
            role="listitem"
            aria-label="Download resume/CV"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#1A3C34]" aria-label="Toggle mobile menu" aria-expanded="false">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
