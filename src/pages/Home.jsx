import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-r from-blue-50 to-white text-center max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          HOPE3 Foundation
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Transforming lives through Education, Empowerment, and Entrepreneurship
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#mission" className="bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Learn More
          </a>
          <Link to="/contact" className="border-2 border-blue-600 text-blue-600 px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition">
            Get Involved
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-white p-8 rounded-lg shadow mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            HOPE3 Foundation is dedicated to transforming lives and communities through our three core pillars: 
            Education, Empowerment, and Entrepreneurship. We believe that by providing quality education, 
            empowering individuals and communities, and fostering entrepreneurial spirit, we can create 
            sustainable positive change that lasts for generations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
            <div className="text-blue-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-700">A world where everyone has access to quality education, feels empowered to reach their potential, and has opportunities to create sustainable livelihoods.</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow text-center">
            <div className="text-green-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
            <p className="text-gray-700">Integrity, compassion, innovation, sustainability, and community-centered approach guide everything we do.</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg shadow text-center">
            <div className="text-purple-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Impact</h3>
            <p className="text-gray-700">Since our founding, we've reached over 25 communities, educated 500+ individuals, and helped start 50+ businesses.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Founded in 2020, HOPE3 Foundation emerged from a simple yet powerful belief: that every individual 
            deserves the opportunity to learn, grow, and thrive. Our founders recognized that sustainable 
            development requires a holistic approach that addresses education, personal empowerment, and 
            economic opportunity simultaneously.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The "3" in HOPE3 represents our three pillars - Education, Empowerment, and Entrepreneurship - 
            which work together to create a comprehensive framework for community development. We've learned 
            that when these three elements are combined, they create a powerful catalyst for positive change 
            that extends far beyond individual beneficiaries to entire communities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, HOPE3 continues to grow and evolve, always staying true to our core mission while 
            adapting our approaches to meet the changing needs of the communities we serve. We're proud 
            of what we've accomplished, but we know our work is far from over.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-blue-50 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Impact by the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-4xl font-extrabold text-blue-600 mb-2">500+</p>
            <p className="text-gray-700 font-medium">Students Educated</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-4xl font-extrabold text-green-600 mb-2">200+</p>
            <p className="text-gray-700 font-medium">Lives Empowered</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-4xl font-extrabold text-purple-600 mb-2">50+</p>
            <p className="text-gray-700 font-medium">Businesses Started</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-4xl font-extrabold text-orange-600 mb-2">25+</p>
            <p className="text-gray-700 font-medium">Communities Served</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;