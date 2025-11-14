import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md shadow-xl fixed top-0 left-0 z-30 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-2 xs:px-3 xs:py-3 sm:px-4 sm:py-4 md:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600 select-none animate-fadeIn hover:scale-105 transition-transform duration-200">
          <img 
            src={process.env.PUBLIC_URL + '/logo.png'} 
            alt="HOPE3 Foundation Logo" 
            className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
          />
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">H</span>
              <img 
                src={process.env.PUBLIC_URL +'/logo.png'} 
                alt="O" 
                className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mx-0.5 xs:mx-0.5 sm:mx-1"
              />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">PE 3</span>
            </div>
            <h6 className="text-xs xs:text-xs sm:text-xs text-gray-500 font-normal -mt-0.5 sm:-mt-1 hidden xs:block">FOR A BETTER TOMORROW</h6>
          </div>
        </Link>
        <ul className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-6 2xl:space-x-8 text-gray-700 font-medium text-xs md:text-sm lg:text-base xl:text-base">
          <li>
            <Link to="/" className={`relative px-1.5 md:px-2 lg:px-2.5 xl:px-3 py-1.5 md:py-2 rounded-md lg:rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              Home
              {isActive('/') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>
          <li>
            <Link to="/about" className={`relative px-1.5 md:px-2 lg:px-2.5 xl:px-3 py-1.5 md:py-2 rounded-md lg:rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/about') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              About
              {isActive('/about') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>

          <li>
            <Link to="/impact" className={`relative px-1.5 md:px-2 lg:px-2.5 xl:px-3 py-1.5 md:py-2 rounded-md lg:rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/impact') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              Impact
              {isActive('/impact') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>
          <li>
            <Link to="/community" className={`relative px-1.5 md:px-2 lg:px-2.5 xl:px-3 py-1.5 md:py-2 rounded-md lg:rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/community') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              Community
              {isActive('/community') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>
           <li>
            <Link to="/our-family" className={`relative px-1.5 md:px-2 lg:px-2.5 xl:px-3 py-1.5 md:py-2 rounded-md lg:rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/our-family') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              Our Family
              {isActive('/our-family') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>
          <li>
            <Link to="/volunteer" className={`relative px-1.5 md:px-2 lg:px-2.5 xl:px-3 py-1.5 md:py-2 rounded-md lg:rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/volunteer') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              Volunteer
              {isActive('/volunteer') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`relative px-1.5 md:px-2 lg:px-2.5 xl:px-3 py-1.5 md:py-2 rounded-md lg:rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 ${isActive('/contact') ? 'text-blue-600 bg-blue-50 shadow-sm' : ''}`}>
              Contact
              {isActive('/contact') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
            </Link>
          </li>         
        </ul>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1.5 sm:p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
          <ul className="flex flex-col space-y-3 sm:space-y-4 p-3 sm:p-4 font-medium text-gray-700 text-sm sm:text-base">
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