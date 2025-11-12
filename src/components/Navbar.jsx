import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-30">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-8">
        <Link to="/" className="text-2xl font-bold text-blue-600 select-none">
          HOPE3
        </Link>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className={`hover:text-blue-600 ${isActive('/') ? 'text-blue-600' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/programs" className={`hover:text-blue-600 ${isActive('/programs') ? 'text-blue-600' : ''}`}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="/impact" className={`hover:text-blue-600 ${isActive('/impact') ? 'text-blue-600' : ''}`}>
              Impact
            </Link>
          </li>
          <li>
            <Link to="/success-stories" className={`hover:text-blue-600 ${isActive('/success-stories') ? 'text-blue-600' : ''}`}>
              Stories
            </Link>
          </li>
          <li>
            <Link to="/events" className={`hover:text-blue-600 ${isActive('/events') ? 'text-blue-600' : ''}`}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/student-projects" className={`hover:text-blue-600 ${isActive('/student-projects') ? 'text-blue-600' : ''}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`hover:text-blue-600 ${isActive('/contact') ? 'text-blue-600' : ''}`}>
              Contact
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
            <li><Link to="/programs" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Programs</Link></li>
            <li><Link to="/impact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Impact</Link></li>
            <li><Link to="/success-stories" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Stories</Link></li>
            <li><Link to="/events" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Events</Link></li>
            <li><Link to="/student-projects" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Projects</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;