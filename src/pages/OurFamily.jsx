import React from 'react';

function OurFamily() {
  const founders = [
    { name: "John Smith", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
    { name: "Sarah Johnson", role: "Co-Founder & Director", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face" }
  ];

  const donors = [
    { name: "Michael Chen", role: "Major Donor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
    { name: "Emily Davis", role: "Corporate Sponsor", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
    { name: "Robert Wilson", role: "Community Supporter", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" }
  ];

  const helpers = [
    { name: "Lisa Anderson", role: "Volunteer Coordinator", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face" },
    { name: "David Brown", role: "Program Manager", image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face" },
    { name: "Maria Garcia", role: "Community Outreach", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Family</h1>
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-3xl shadow-lg mb-8 max-w-4xl mx-auto">
            <blockquote className="text-gray-800 text-lg md:text-xl font-medium italic leading-relaxed mb-4">
              "My HOPE3 family is endless, filled with hearts that guide and care, A circle so wide and warm, even I can't count everyone who stands there."
            </blockquote>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals who make HOPE3 Foundation's mission possible through their leadership, generosity, and commitment.
          </p>
        </div>

        {/* Founders */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Founders</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((person, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300">
                <img src={person.image} alt={person.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{person.name}</h3>
                <p className="text-blue-600 font-semibold">{person.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Donors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-8">Donors & Supporters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {donors.map((person, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300">
                <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h3>
                <p className="text-green-600 font-semibold">{person.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Helpers */}
        <section>
          <h2 className="text-3xl font-bold text-center text-orange-900 mb-8">Team & Volunteers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {helpers.map((person, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300">
                <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h3>
                <p className="text-orange-600 font-semibold">{person.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Our Family Button */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Join Our Family?</h3>
            <p className="text-blue-100 mb-6">Be part of our mission to transform lives through education, empowerment, and entrepreneurship.</p>
            <a href="mailto:info@hope3foundation.org" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Join Our Family
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFamily;