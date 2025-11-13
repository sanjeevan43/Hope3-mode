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
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>info@hope3foundation.org</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Hope Street, Education City, EC 12345</p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
              <Link to="/about" className="hover:text-white transition-colors duration-300">About Us</Link>
              <Link to="/programs" className="hover:text-white transition-colors duration-300">Programs</Link>
              <Link to="/impact" className="hover:text-white transition-colors duration-300">Impact</Link>
              <Link to="/community" className="hover:text-white transition-colors duration-300">Community</Link>
              <Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/hope3foundation" className="hover:text-white transition-colors duration-300">Facebook</a>
              <a href="https://twitter.com/hope3foundation" className="hover:text-white transition-colors duration-300">Twitter</a>
              <a href="https://linkedin.com/company/hope3foundation" className="hover:text-white transition-colors duration-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} HOPE3 Foundation. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;