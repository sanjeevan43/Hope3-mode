import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">&copy; {new Date().getFullYear()} HOPE3 Foundation. All rights reserved.</div>
        <nav className="space-x-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/programs" className="hover:text-white">Programs</Link>
          <Link to="/impact" className="hover:text-white">Impact</Link>
          <Link to="/community" className="hover:text-white">Community</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;