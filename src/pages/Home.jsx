import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 transform ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full animate-bounce delay-1000 shadow-lg"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full animate-pulse delay-2000 shadow-lg"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full animate-bounce delay-3000 shadow-lg"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-gradient-to-br from-purple-400/30 to-indigo-400/30 rounded-full animate-ping delay-500 shadow-lg"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full animate-pulse delay-4000 shadow-lg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-6 animate-fadeIn">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🌟 Transforming Lives Since 2018</span>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slideInLeft leading-tight">
          Building Hope Through
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
            Three Pillars
          </span>
        </h1>
        
        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 animate-slideInRight delay-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <span className="flex items-center gap-2">
              <span className="text-3xl">📚</span>
              <span className="text-blue-400">Education</span>
            </span>
            <span className="hidden sm:block text-white/60">•</span>
            <span className="flex items-center gap-2">
              <span className="text-3xl">💪</span>
              <span className="text-green-400">Empowerment</span>
            </span>
            <span className="hidden sm:block text-white/60">•</span>
            <span className="flex items-center gap-2">
              <span className="text-3xl">🚀</span>
              <span className="text-orange-400">Entrepreneurship</span>
            </span>
          </div>
        </div>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-10 animate-fadeIn delay-400 max-w-4xl mx-auto leading-relaxed">
          Transforming lives and communities through comprehensive programs that educate, empower, and inspire entrepreneurship across 50+ countries worldwide
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn delay-600">
          <Link to="/programs" className="group bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border border-blue-500/20 backdrop-blur-sm">
            <span className="flex items-center justify-center gap-2">
              Explore Our Programs
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link to="/contact" className="group border-2 border-white/60 text-white hover:bg-white/10 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-md hover:shadow-xl hover:shadow-white/10">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              Join Our Mission
            </span>
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fadeIn delay-800">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400">25,800+</div>
            <div className="text-sm text-white/80">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-400">50+</div>
            <div className="text-sm text-white/80">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-400">$2.5M+</div>
            <div className="text-sm text-white/80">Funds Raised</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Image indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <div>
      {/* Hero Section with Background Slideshow */}
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
                <span className="text-orange-600 font-semibold">📖 Our Story</span>
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
              <span className="text-white font-semibold">📊 Our Global Impact</span>
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
              { number: "25,800+", label: "Lives Impacted", icon: "👥", color: "from-blue-500 via-cyan-500 to-blue-600" },
              { number: "50+", label: "Countries Reached", icon: "🌍", color: "from-green-500 via-emerald-500 to-green-600" },
              { number: "$2.5M+", label: "Funds Raised", icon: "💰", color: "from-orange-500 via-pink-500 to-orange-600" },
              { number: "150+", label: "Partner Organizations", icon: "🤝", color: "from-purple-500 via-violet-500 to-purple-600" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative animate-bounceIn hover-lift`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/20`}>
                      <span className="text-4xl">{stat.icon}</span>
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