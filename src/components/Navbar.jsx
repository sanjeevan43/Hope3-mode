import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md shadow-xl fixed top-0 left-0 z-30 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-8">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600 select-none animate-fadeIn hover:scale-105 transition-transform duration-200">
          <img 
            src={process.env.PUBLIC_URL + '/logo.png'} 
            alt="HOPE3 Foundation Logo" 
            className="w-10 h-10 rounded-xl shadow-lg"
          />
          <div className="flex flex-col">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">HOPE 3</span>
            <h6 className="text-xs text-gray-500 font-normal -mt-1">FOR A BETTER TOMORROW</h6>
          </div>
        </Link>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              Home
              {isActive('/') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>
          <li>
            <Link to="/about" className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/about') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              About
              {isActive('/about') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>

          <li>
            <Link to="/impact" className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/impact') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              Impact
              {isActive('/impact') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>
          <li>
            <Link to="/community" className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/community') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              Community
              {isActive('/community') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>
           <li>
            <Link to="/our-family" className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/our-family') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              Our Family
              {isActive('/our-family') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>
          <li>
            <Link to="/volunteer" className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/volunteer') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              Volunteer
              {isActive('/volunteer') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/contact') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              Contact
              {isActive('/contact') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>         
        </ul>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-200">
          <ul className="flex flex-col space-y-4 p-4 font-medium text-gray-700">
            <li><Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">About</Link></li>

            <li><Link to="/impact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Impact</Link></li>
            <li><Link to="/community" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Community</Link></li>
            <li><Link to="/volunteer" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Volunteer</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Contact</Link></li>
            <li><Link to="/our-family" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Our Family</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;