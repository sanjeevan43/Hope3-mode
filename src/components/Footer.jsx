import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-gray-300 py-12 mt-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center relative">
        <div className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} HOPE3 Foundation. All rights reserved.</div>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
          <Link to="/" className="hover:text-white transition-colors duration-300 hover:scale-105 relative">
            Home
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 hover:w-full"></div>
          </Link>
          <Link to="/about" className="hover:text-white transition-colors duration-300 hover:scale-105 relative">
            About
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300 hover:w-full"></div>
          </Link>
          <Link to="/programs" className="hover:text-white transition-colors duration-300 hover:scale-105 relative">
            Programs
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-300 hover:w-full"></div>
          </Link>
          <Link to="/impact" className="hover:text-white transition-colors duration-300 hover:scale-105 relative">
            Impact
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-violet-400 transition-all duration-300 hover:w-full"></div>
          </Link>
          <Link to="/community" className="hover:text-white transition-colors duration-300 hover:scale-105 relative">
            Community
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 hover:w-full"></div>
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors duration-300 hover:scale-105 relative">
            Contact
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 transition-all duration-300 hover:w-full"></div>
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;