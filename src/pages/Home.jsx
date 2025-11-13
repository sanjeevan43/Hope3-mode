import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-400/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-orange-400/10 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-400/10 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="animate-fadeIn">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Transforming Lives Since 2018
                  </span>
                </div>
              </div>
              
              <div className="animate-slideInLeft">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                  Building
                  <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
                    HOPE
                  </span>
                  <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light">
                    for Communities
                  </span>
                </h1>
              </div>
              
              <div className="animate-slideInLeft delay-200">
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  Empowering lives through Education, Empowerment, and Entrepreneurship across 50+ countries worldwide
                </p>
              </div>
              
              <div className="animate-fadeIn delay-400">
                <div className="flex flex-wrap gap-6 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span>25,800+ Lives Impacted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>50+ Countries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span>$2.5M+ Raised</span>
                  </div>
                </div>
              </div>
              
              <div className="animate-scaleIn delay-600">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/programs" className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <span className="flex items-center justify-center gap-2">
                      Explore Programs
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
            
            {/* Right Visual */}
            <div className="relative animate-slideInRight delay-300">
              <div className="relative">
                {/* Main Circle */}
                <div className="w-96 h-96 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-blue-500/30 to-purple-700/30 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-blue-600/40 to-purple-800/40 rounded-full animate-pulse delay-1000"></div>
                  
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white mb-4">H3</div>
                      <div className="text-xl font-semibold text-blue-200">HOPE3</div>
                      <div className="text-sm text-blue-300 mt-2">Foundation</div>
                    </div>
                  </div>
                  
                  {/* Orbiting Elements */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold animate-bounce">
                    EDU
                  </div>
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center text-white font-bold animate-bounce delay-500">
                    EMP
                  </div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold animate-bounce delay-1000">
                    ENT
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 animate-float">
                  <div className="text-2xl font-bold text-white">25K+</div>
                  <div className="text-xs text-blue-200">Lives Changed</div>
                </div>
                
                <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 animate-float delay-1000">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-xs text-blue-200">Countries</div>
                </div>
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

      {/* Mission Section */}
      <section id="mission" className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-12 rounded-3xl shadow-2xl mb-16 animate-fadeIn border border-white/50 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6 shadow-lg">
              <span className="text-blue-600 font-semibold">🎯 Our Mission</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">Transforming Communities</h2>
          </div>
          <p className="text-xl text-gray-800 leading-relaxed text-center max-w-4xl mx-auto">
            HOPE3 Foundation is dedicated to transforming lives and communities through our three core pillars:
            Education, Empowerment, and Entrepreneurship. We believe that by providing quality education,
            empowering individuals and communities, and fostering entrepreneurial spirit, we can create
            sustainable positive change that lasts for generations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="group bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3 animate-scaleIn border border-blue-100/50 backdrop-blur-sm">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
              <span className="text-3xl">👁️</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">A world where everyone has access to quality education, feels empowered to reach their potential, and has opportunities to create sustainable livelihoods.</p>
          </div>

          <div className="group bg-gradient-to-br from-white to-green-50/50 p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-3 animate-scaleIn delay-100 border border-green-100/50 backdrop-blur-sm">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
              <span className="text-3xl">💎</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-900 to-emerald-900 bg-clip-text text-transparent mb-4">Our Values</h3>
            <p className="text-gray-700 leading-relaxed">Integrity, compassion, innovation, sustainability, and community-centered approach guide everything we do.</p>
          </div>

          <div className="group bg-gradient-to-br from-white to-purple-50/50 p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3 animate-scaleIn delay-200 border border-purple-100/50 backdrop-blur-sm">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-violet-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-900 to-pink-900 bg-clip-text text-transparent mb-4">Our Impact</h3>
            <p className="text-gray-700 leading-relaxed">Since our founding, we've reached over 25 communities, educated 500+ individuals, and helped start 50+ businesses.</p>
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
              <div className="mt-8">
                <Link to="/about" className="group bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 hover:from-orange-600 hover:via-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 border border-orange-400/20 backdrop-blur-sm">
                  <span className="flex items-center gap-2">
                    Learn More About Us
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
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

      {/* Impact Stats */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6 animate-fadeIn border border-white/20 shadow-xl">
              <span className="text-white font-semibold">Our Global Impact</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-slideInUp">
              Transforming Lives
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
                Across the Globe
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fadeIn delay-400">
              Every number represents a life changed, a dream realized, and a community empowered
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "25,800+", label: "Lives Impacted", icon: "LIVES", color: "from-blue-500 via-cyan-500 to-blue-600" },
              { number: "50+", label: "Countries Reached", icon: "GLOBAL", color: "from-green-500 via-emerald-500 to-green-600" },
              { number: "$2.5M+", label: "Funds Raised", icon: "FUNDS", color: "from-orange-500 via-pink-500 to-orange-600" },
              { number: "150+", label: "Partner Organizations", icon: "PARTNERS", color: "from-purple-500 via-violet-500 to-purple-600" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative animate-bounceIn hover-lift`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/20`}>
                      <span className="text-white font-bold text-xs">{stat.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse shadow-lg"></div>
                  </div>

                  <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium text-lg">{stat.label}</div>

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;