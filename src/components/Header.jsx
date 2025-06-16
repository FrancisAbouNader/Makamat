import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: Install lucide-react or use plain SVG

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Subsidiaries', path: '/subsidiaries' },
    { name: 'Our Experts', path: '/experts' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg'
              : 'bg-white shadow-sm'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300">
              <img src="/logo-2.png" alt="Makamat Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                  <Link
                      key={link.name}
                      to={link.path}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          isActive(link.path)
                              ? 'text-blue-600 border-b-2 border-blue-600'
                              : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {link.name}
                  </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="text-gray-700 focus:outline-none"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileOpen && (
              <div className="md:hidden mt-2 space-y-2 pb-4 border-t border-gray-200">
                {navLinks.map(link => (
                    <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-2 text-sm font-medium ${
                            isActive(link.path)
                                ? 'text-blue-600 bg-gray-100 rounded-md'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                        }`}
                    >
                      {link.name}
                    </Link>
                ))}
              </div>
          )}
        </nav>
      </header>
  );
};

export default Header;
