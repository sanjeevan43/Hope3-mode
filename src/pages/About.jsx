import React from "react";
import AnimatedCounter from '../components/AnimatedCounter';

function AboutHeader() {
  return (
    <header className="text-center mb-12 animate-fadeIn">
      <div 
        className="h-80 bg-cover bg-center rounded-lg mb-8 flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slideInLeft">About HOPE3</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl animate-slideInRight delay-200">
            Join Hope3 and help provide education to all the economically challenged families. Don't be held back by all the barriers to your success. Join Hope3 today and attain the resources to chase your dreams! None left behind. Every one has an opportunity to rise and achieve. We lift others by providing them financial and education support along their journey for a bright future.
          </p>
        </div>
      </div>
    </header>
  );
}

function MissionVisionValues() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 animate-scaleIn">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">🎯</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          To empower underserved communities through comprehensive programs that provide education, 
          build confidence, and foster entrepreneurial skills for sustainable development.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 animate-scaleIn delay-100">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">👁️</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
        <p className="text-gray-700 leading-relaxed">
          A world where every individual has access to quality education, equal opportunities, 
          and the tools needed to create positive change in their communities.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 animate-scaleIn delay-200">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">💎</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
        <p className="text-gray-700 leading-relaxed">
          Integrity, inclusivity, innovation, and impact guide everything we do. 
          We believe in transparency, community collaboration, and sustainable solutions.
        </p>
      </div>
    </section>
  );
}

function ThreePillars() {
  const pillars = [
    {
      title: "Education",
      icon: "📚",
      description: "Quality learning opportunities for all ages",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1422&q=80",
      stats: "15,000+ Students Supported"
    },
    {
      title: "Empowerment",
      icon: "💪",
      description: "Building confidence and life skills",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      stats: "8,500+ Lives Empowered"
    },
    {
      title: "Entrepreneurship",
      icon: "🚀",
      description: "Fostering innovation and business skills",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      stats: "2,300+ Businesses Started"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fadeIn">
        The Three Pillars of HOPE3
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <div 
            key={pillar.title}
            className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-slideInLeft`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-4xl mb-2">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-1">{pillar.title}</h3>
                <p className="text-sm opacity-90">{pillar.description}</p>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{pillar.stats}</div>
                <p className="text-gray-600">and growing every day</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ImpactNumbers() {


  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 md:p-12 text-white mb-16 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact in Numbers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { number: 25800, label: "Lives Impacted", icon: "👥", suffix: "+" },
          { number: 50, label: "Countries Reached", icon: "🌍", suffix: "+" },
          { number: 2.5, label: "Funds Raised", icon: "💰", prefix: "$", suffix: "M+" },
          { number: 150, label: "Partner Organizations", icon: "🤝", suffix: "+" }
        ].map((stat, index) => (
          <div 
            key={stat.label}
            className={`text-center animate-scaleIn`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-4xl mb-4">{stat.icon}</div>
            <div className="text-3xl md:text-4xl font-bold mb-2">
              <AnimatedCounter 
                end={stat.number} 
                prefix={stat.prefix || ''} 
                suffix={stat.suffix || ''} 
              />
            </div>
            <div className="text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHeader />
        <MissionVisionValues />
        <ThreePillars />
        <ImpactNumbers />
        
        {/* Past Present Future */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fadeIn">
            Our Journey Through Time
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-slideInLeft">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Past</h3>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2018, we've transformed thousands of lives through education and empowerment. Our journey began with a simple vision to create lasting change in underserved communities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-slideInUp delay-100">
              <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Present</h3>
              <p className="text-gray-700 leading-relaxed">
                Currently serving 50+ countries with active programs in education, empowerment, and entrepreneurship. We're making a real difference in communities worldwide.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-slideInRight delay-200">
              <h3 className="text-2xl font-bold text-orange-900 mb-4 text-center">Future</h3>
              <p className="text-gray-700 leading-relaxed">
                Expanding our reach to impact 100,000+ lives by 2030 through innovative programs and strategic partnerships. The future holds unlimited possibilities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}