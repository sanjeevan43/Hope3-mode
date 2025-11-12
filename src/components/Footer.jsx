import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">&copy; {new Date().getFullYear()} HOPE3 Foundation. All rights reserved.</div>
        <nav className="space-x-6 mt-4 md:mt-0">
          <Link to="/education" className="hover:text-white">Education</Link>
          <Link to="/empowerment" className="hover:text-white">Empowerment</Link>
          <Link to="/entrepreneurship" className="hover:text-white">Entrepreneurship</Link>
          <Link to="/programs" className="hover:text-white">Programs</Link>
          <Link to="/impact" className="hover:text-white">Impact</Link>
          <Link to="/success-stories" className="hover:text-white">Stories</Link>
          <Link to="/events" className="hover:text-white">Events</Link>
          <Link to="/student-projects" className="hover:text-white">Projects</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;