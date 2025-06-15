import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm relative z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Makamat Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium ${
                  location.pathname === '/' 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/solutions" 
                className={`px-3 py-2 text-sm font-medium ${
                  location.pathname === '/solutions' 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Solutions
              </Link>
              <a href="/subsidiaries" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Subsidiaries
              </a>
              <a href="/experts" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Our Experts
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;