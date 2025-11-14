import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-cyan-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-400/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-cyan-400/10 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-sky-400/10 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Full Screen Image Slider */}
      <div className="absolute inset-0 z-10">
        <div className="flex animate-slide h-full" style={{animation: 'slide 15s infinite'}}>
          <img src={process.env.PUBLIC_URL + '/myTeam.jpg'} alt="HOPE3 Team Members" className="w-full h-full object-cover flex-shrink-0" />
          <img src={process.env.PUBLIC_URL + '/hope.jpg'} alt="Community Outreach" className="w-full h-full object-cover flex-shrink-0" />
          <img src={process.env.PUBLIC_URL + '/liked-one.jpg'} alt="Empowerment Program" className="w-full h-full object-cover flex-shrink-0" />
          <img src={process.env.PUBLIC_URL + '/first.jpg'} alt="Foundation Activities" className="w-full h-full object-cover flex-shrink-0" />
          <img src={process.env.PUBLIC_URL + '/function.jpg'} alt="Community Events" className="w-full h-full object-cover flex-shrink-0" />
          <img src={process.env.PUBLIC_URL + '/pongal.jpg'} alt="Cultural Celebration" className="w-full h-full object-cover flex-shrink-0" />
        </div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-20 min-h-screen flex items-end pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white space-y-6">
            <div className="animate-slideInUp delay-200">
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-6">
                I'm shaped by a big HOPE3 family, where every person adds strength to my journey.
              </p>
            </div>
            
            <div className="animate-scaleIn delay-600">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/volunteer" className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="flex items-center justify-center gap-2">
                    Join as Volunteer
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link to="/contact" className="group border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    Join Mission
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs mb-2">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Abdul Kalam Quote */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-12 rounded-3xl shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute right-8 top-8 w-32 h-32 opacity-20">
                    <img src={process.env.PUBLIC_URL + '/kalam.webp'} alt="Education" className="w-full h-64 object-cover flex-shrink-0" />
          </div>
          <div className="relative z-10">
            <blockquote className="text-white text-xl md:text-2xl font-medium italic leading-relaxed mb-4">
              "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great"
            </blockquote>
            <cite className="text-blue-200 text-lg">- Dr. A.P.J. Abdul Kalam</cite>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="group bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
              <span className="text-white font-bold text-lg">EDU</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Education</h3>
            <ul className="text-gray-700 space-y-3 text-left">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                Economic assistance towards an accredited College degree
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                Learning with peers through collaborative clubs, events and workshops
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                Practical knowledge through interactions with industry experts
              </li>
            </ul>
          </div>

          <div className="group bg-gradient-to-br from-white to-indigo-50/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-3">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
              <span className="text-white font-bold text-lg">EMP</span>
            </div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">Empowerment</h3>
            <ul className="text-gray-700 space-y-3 text-left">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                Opportunity to lead and be part of initiatives
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                Discovering inner strengths and understanding soft skills
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                Understanding of English language skills for official communication purposes
              </li>
            </ul>
          </div>

          <div className="group bg-gradient-to-br from-white to-orange-50/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-3">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
              <span className="text-white font-bold text-lg">ENT</span>
            </div>
            <h3 className="text-2xl font-bold text-orange-900 mb-4 text-center">Entrepreneurship</h3>
            <ul className="text-gray-700 space-y-3 text-left">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                Practicing and testing startup ideas
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                Exposure and advice from industry experts on Business thinking
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                Opportunities to present and promote ideas to clients and investors
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30 p-12 rounded-3xl shadow-2xl animate-fadeIn border border-orange-100/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-pink-100 rounded-full px-6 py-3 mb-6 shadow-lg">
                <span className="text-orange-600 font-semibold">Our Story</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-orange-900 to-pink-900 bg-clip-text text-transparent mb-6">From Vision to Impact</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Founded in 2018, HOPE3 Foundation emerged from a simple yet powerful belief: that every individual
                  deserves the opportunity to learn, grow, and thrive. Our founders recognized that sustainable
                  development requires a holistic approach that addresses education, personal empowerment, and
                  economic opportunity simultaneously.
                </p>
                <p>
                  The "3" in HOPE3 represents our three pillars - Education, Empowerment, and Entrepreneurship -
                  which work together to create a comprehensive framework for community development. We've learned
                  that when these three elements are combined, they create a powerful catalyst for positive change
                  that extends far beyond individual beneficiaries to entire communities.
                </p>
                <p>
                  Today, HOPE3 continues to grow and evolve, always staying true to our core mission while
                  adapting our approaches to meet the changing needs of the communities we serve. We're proud
                  of what we've accomplished, but we know our work is far from over.
                </p>
              </div>
              
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                  alt="Team collaboration"
                  className="rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 border border-white/50"
                />
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Education program"
                  className="rounded-3xl shadow-xl mt-8 hover:scale-105 hover:shadow-2xl transition-all duration-500 border border-white/50"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl shadow-xl p-4 animate-pulse border border-orange-400/20">
                <div className="text-2xl font-bold text-white">2018</div>
                <div className="text-sm text-orange-100">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;