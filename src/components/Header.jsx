import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'Solutions',
            type: 'list',
            path:'/solutions',
            children: [
                { name: 'Case Studies', path: '/case-studies' },
            ]
        },
        {name: 'Subsidiaries', path: '/subsidiaries',type:'list',       children: [
                { name: 'GBMS', path: '/gbms' },
                { name: 'DIGILINK', path: '/digilink' },
            ]},
        {name: 'Our Experts', path: '/experts'},
        {name: 'Contact Us', path: '/contact'},
    ];


    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
        }`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                        <img src="/logo.png" alt="Makamat Logo" className="h-16 w-auto" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link =>
                            link.type !== 'list' ? (
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
                            ) : (
                                <div key={link.name} className="relative group">

                                    <a href={link.path} className="px-3 py-2 text-sm flex items-center gap-x-3 font-medium text-gray-700 hover:text-blue-600 focus:outline-none">
                                        {link.name}
                                        <span> <svg
                                        className="w-4 h-4 mt-1 rotate-180 transition-transform group-hover:rotate-0"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg></span>
                                    </a>
                                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                to={child.path}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        )}
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
                        {navLinks.map(link =>
                            link.type !== 'list' ? (
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
                            ) : (
                                <div key={link.name} className="px-4">
                                    <p className="text-sm font-medium text-gray-700 mb-1">{link.name}</p>
                                    <div className="space-y-1 pl-2">
                                        {link.children.map(child => (
                                            <Link
                                                key={child.name}
                                                to={child.path}
                                                onClick={() => setMobileOpen(false)}
                                                className="block text-sm text-gray-600 hover:text-blue-600"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
