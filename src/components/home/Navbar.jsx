
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="https://www.kaggle.com/static/images/site-logo.png" alt="Kaggle" className="h-6" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/competitions" className="text-gray-700 hover:text-gray-900">Competitions</Link>
            <Link to="/datasets" className="text-gray-700 hover:text-gray-900">Datasets</Link>
            <Link to="/models" className="text-gray-700 hover:text-gray-900">Models</Link>
            <Link to="/code" className="text-gray-700 hover:text-gray-900">Code</Link>
            <Link to="/discussions" className="text-gray-700 hover:text-gray-900">Discussions</Link>
            <Link to="/courses" className="text-gray-700 hover:text-gray-900">Courses</Link>
            <button className="text-gray-700">...</button>
          </nav>

          {/* Search and User Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-72"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Link to="/signin" className="text-gray-700 font-medium">Sign In</Link>
              <Link to="/register" className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800">
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <div className="relative px-4 pb-4">
              <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 focus:outline-none"
                placeholder="Search"
              />
            </div>
            <div className="flex flex-col space-y-2 px-4">
              <Link to="/competitions" className="py-2 text-gray-700">Competitions</Link>
              <Link to="/datasets" className="py-2 text-gray-700">Datasets</Link>
              <Link to="/models" className="py-2 text-gray-700">Models</Link>
              <Link to="/code" className="py-2 text-gray-700">Code</Link>
              <Link to="/discussions" className="py-2 text-gray-700">Discussions</Link>
              <Link to="/courses" className="py-2 text-gray-700">Courses</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
