import React, { useState } from 'react';

function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    interests: []
  });

  const opportunities = [
    {
      id: 1,
      title: "Education Mentor",
      description: "Guide students in their academic journey and career planning",
      commitment: "4 hours/week",
      skills: ["Teaching", "Communication", "Patience"],
      icon: "📚"
    },
    {
      id: 2,
      title: "Event Coordinator",
      description: "Help organize community events and fundraising activities",
      commitment: "6 hours/month",
      skills: ["Organization", "Leadership", "Planning"],
      icon: "🎉"
    },
    {
      id: 3,
      title: "Tech Support",
      description: "Assist with website maintenance and digital literacy programs",
      commitment: "3 hours/week",
      skills: ["Programming", "Web Design", "IT Support"],
      icon: "💻"
    },
    {
      id: 4,
      title: "Community Outreach",
      description: "Connect with local communities and spread awareness",
      commitment: "5 hours/week",
      skills: ["Communication", "Networking", "Social Media"],
      icon: "🤝"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in volunteering! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      skills: '',
      availability: '',
      interests: []
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Join Our Volunteer Family
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp delay-200">
            Make a difference in your community by volunteering with HOPE3. 
            Every hour you contribute helps transform lives and build a better tomorrow.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "500+", label: "Active Volunteers", color: "bg-blue-500" },
            { number: "15,000", label: "Volunteer Hours", color: "bg-green-500" },
            { number: "50+", label: "Programs Supported", color: "bg-orange-500" },
            { number: "25", label: "Countries", color: "bg-purple-500" }
          ].map((stat, index) => (
            <div key={index} className={`bg-white p-6 rounded-2xl shadow-lg text-center animate-scaleIn delay-${index * 100}`}>
              <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <span className="text-white font-bold">V</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Volunteer Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={opportunity.id} className={`bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-slideInLeft delay-${index * 100}`}>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{opportunity.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{opportunity.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{opportunity.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600">Time Commitment: {opportunity.commitment}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {opportunity.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer Registration Form */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Volunteer Registration</h2>
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="evenings">Evenings</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="skills" className="block text-gray-700 font-medium mb-2">
                Skills & Experience
              </label>
              <textarea
                id="skills"
                name="skills"
                rows="4"
                value={formData.skills}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your skills, experience, and what you're passionate about..."
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-4">
                Areas of Interest (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {opportunities.map((opportunity) => (
                  <label key={opportunity.id} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(opportunity.title)}
                      onChange={() => handleInterestChange(opportunity.title)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{opportunity.title}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Join Our Volunteer Family
              </button>
            </div>
          </form>
        </section>

        {/* Testimonials */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Volunteers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Education Mentor",
                quote: "Volunteering with HOPE3 has been incredibly rewarding. Seeing students achieve their dreams makes every hour worthwhile.",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
              },
              {
                name: "Michael Chen",
                role: "Tech Support Volunteer",
                quote: "The tech team is amazing! I've learned so much while helping others develop their digital skills.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              },
              {
                name: "Emily Rodriguez",
                role: "Event Coordinator",
                quote: "Organizing events for HOPE3 has connected me with an incredible community of changemakers.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <div key={index} className={`bg-white p-6 rounded-2xl shadow-lg animate-fadeIn delay-${index * 200}`}>
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Volunteer;