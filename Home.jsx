// Home.jsx
// React functional component for HOPE3 Foundation Home page
// Uses Tailwind CSS for styling (assumed pre-configured)
// Google Font "Inter" recommended: https://fonts.google.com/specimen/Inter

import React, { useState, useEffect } from "react";

const primaryBlue = "text-blue-600";
const primaryBlueBg = "bg-blue-600";
const primaryBlueHoverBg = "hover:bg-blue-700";
const softGreen = "text-green-500";
const softGreenBg = "bg-green-500";
const softGreenHoverBg = "hover:bg-green-600";
const neutralDark = "text-gray-900";
const neutralLight = "text-gray-700";
const neutralBg = "bg-white";
const shadowBase = "shadow-md";
const roundedBase = "rounded-lg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className="w-full bg-white shadow-md fixed top-0 left-0 z-30"
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-8">
        <div className="text-2xl font-bold text-blue-600 select-none" aria-label="HOPE3 Foundation Logo">
          HOPE3
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium" role="menubar">
          <li role="none">
            <a href="#mission" role="menuitem" tabIndex={0} className="hover:text-blue-600 focus:outline-none focus:text-blue-600">Mission</a>
          </li>
          <li role="none">
            <a href="#programs" role="menuitem" tabIndex={0} className="hover:text-blue-600 focus:outline-none focus:text-blue-600">Programs</a>
          </li>
          <li role="none">
            <a href="#impact" role="menuitem" tabIndex={0} className="hover:text-blue-600 focus:outline-none focus:text-blue-600">Impact</a>
          </li>
          <li role="none">
            <a href="#advisors" role="menuitem" tabIndex={0} className="hover:text-blue-600 focus:outline-none focus:text-blue-600">Advisors</a>
          </li>
          <li role="none">
            <a href="#donate" role="menuitem" tabIndex={0} className="hover:text-blue-600 focus:outline-none focus:text-blue-600">Donate</a>
          </li>
          <li role="none">
            <a href="#contact" role="menuitem" tabIndex={0} className="hover:text-blue-600 focus:outline-none focus:text-blue-600">Contact</a>
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="button"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white shadow-inner border-t border-gray-200"
          role="menu"
          aria-label="Mobile menu"
        >
          <ul className="flex flex-col space-y-4 p-4 font-medium text-gray-700">
            <li role="none">
              <a href="#mission" role="menuitem" tabIndex={0} onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Mission</a>
            </li>
            <li role="none">
              <a href="#programs" role="menuitem" tabIndex={0} onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Programs</a>
            </li>
            <li role="none">
              <a href="#impact" role="menuitem" tabIndex={0} onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Impact</a>
            </li>
            <li role="none">
              <a href="#advisors" role="menuitem" tabIndex={0} onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Advisors</a>
            </li>
            <li role="none">
              <a href="#donate" role="menuitem" tabIndex={0} onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Donate</a>
            </li>
            <li role="none">
              <a href="#contact" role="menuitem" tabIndex={0} onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 md:pt-32 pb-16 bg-gradient-to-r from-blue-50 to-white text-center md:text-left max-w-7xl mx-auto px-6 md:px-12"
      aria-label="Hero Section"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto md:mx-0 animate-fadeIn">
        Empowering Communities, Inspiring Change
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto md:mx-0 animate-fadeIn delay-100">
        HOPE3 Foundation is dedicated to fostering education, health, and sustainability worldwide.
      </p>
      <div className="mt-8 flex justify-center md:justify-start space-x-4 animate-fadeIn delay-200">
        <button
          onClick={() => {}}
          className={`${primaryBlueBg} text-white px-6 py-3 font-semibold ${roundedBase} shadow-md ${primaryBlueHoverBg} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
          aria-label="Learn more about HOPE3 Foundation"
          type="button"
        >
          Learn More
        </button>
        <button
          onClick={() => {}}
          className={`border-2 border-blue-600 text-blue-600 px-6 py-3 font-semibold ${roundedBase} shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
          aria-label="Get involved with HOPE3 Foundation"
          type="button"
        >
          Get Involved
        </button>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section
      id="mission"
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-white rounded-lg shadow-md mt-12"
      aria-labelledby="mission-heading"
    >
      <h2 id="mission-heading" className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
        Our Mission
      </h2>
      <p className="text-gray-700 text-lg max-w-4xl mx-auto md:mx-0 leading-relaxed">
        HOPE3 Foundation strives to create sustainable impact through education, healthcare, and environmental programs that uplift communities and empower individuals to build a better future.
      </p>
    </section>
  );
}

const programsData = [
  {
    id: 1,
    title: "Education for All",
    description:
      "Providing access to quality education and resources for children and adults in underserved areas.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.84 6.88L12 21l-7-3.542a12.083 12.083 0 01.84-6.88L12 14z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Health & Wellness",
    description:
      "Supporting healthcare initiatives to improve well-being and access to medical services.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8m12 4a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Environmental Sustainability",
    description:
      "Promoting green initiatives and sustainable practices to protect our planet.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 0110 10c0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.523 4.477-10 10-10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

function Programs() {
  return (
    <section
      id="programs"
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-blue-50 rounded-lg shadow-md mt-12"
      aria-labelledby="programs-heading"
    >
      <h2 id="programs-heading" className="text-3xl font-bold text-gray-900 mb-10 text-center md:text-left">
        Our Programs
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {programsData.map(({ id, title, description, icon }) => (
          <article
            key={id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-default"
            role="region"
            aria-labelledby={`program-title-${id}`}
          >
            <div>{icon}</div>
            <h3 id={`program-title-${id}`} className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-700">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const impactStats = [
  { id: 1, label: "Communities Served", value: "120+" },
  { id: 2, label: "Volunteers Engaged", value: "850+" },
  { id: 3, label: "Funds Raised", value: "$2.3M" },
  { id: 4, label: "Projects Completed", value: "45" },
];

function Impact() {
  return (
    <section
      id="impact"
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-white rounded-lg shadow-md mt-12"
      aria-labelledby="impact-heading"
    >
      <h2 id="impact-heading" className="text-3xl font-bold text-gray-900 mb-10 text-center md:text-left">
        Our Impact
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {impactStats.map(({ id, label, value }) => (
          <div
            key={id}
            className="p-6 bg-blue-50 rounded-lg shadow flex flex-col items-center justify-center"
            role="region"
            aria-label={`${label}: ${value}`}
          >
            <p className="text-4xl font-extrabold text-blue-600 mb-2">{value}</p>
            <p className="text-gray-700 font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Transparency() {
  // Placeholder fund allocation data
  const allocations = [
    { label: "Programs", percent: 65, colorClass: "bg-green-400" },
    { label: "Administration", percent: 20, colorClass: "bg-blue-400" },
    { label: "Fundraising", percent: 15, colorClass: "bg-yellow-400" },
  ];

  return (
    <section
      id="transparency"
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-blue-50 rounded-lg shadow-md mt-12"
      aria-labelledby="transparency-heading"
    >
      <h2 id="transparency-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        Transparency & Fund Allocation
      </h2>
      <p className="text-gray-700 max-w-3xl mb-8">
        We prioritize transparency with our donors and stakeholders. Here is how funds are allocated to maximize impact.
      </p>
      <div className="space-y-4 max-w-md mx-auto md:mx-0">
        {allocations.map(({ label, percent, colorClass }) => (
          <div key={label}>
            <div className="flex justify-between mb-1 font-medium text-gray-900">
              <span>{label}</span>
              <span>{percent}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className={`${colorClass} h-4 rounded-full transition-all duration-700 ease-in-out`}
                style={{ width: `${percent}%` }}
                aria-valuenow={percent}
                aria-valuemin="0"
                aria-valuemax="100"
                role="progressbar"
                aria-label={`${label} fund allocation`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DonatePanel() {
  return (
    <section
      id="donate"
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-white rounded-lg shadow-md mt-12 text-center"
      aria-labelledby="donate-heading"
    >
      <h2 id="donate-heading" className="text-3xl font-bold text-gray-900 mb-6">
        Support Our Cause
      </h2>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        Your generous donation helps us continue our work and expand our reach. Every contribution makes a difference.
      </p>
      <button
        onClick={() => {
          // TODO: Integrate real payment gateway here
        }}
        className={`${softGreenBg} text-white px-8 py-4 font-semibold ${roundedBase} shadow-md ${softGreenHoverBg} focus:outline-none focus:ring-2 focus:ring-green-400 transition`}
        type="button"
        aria-label="Donate to HOPE3 Foundation"
      >
        Donate Now
      </button>
    </section>
  );
}

const advisorsData = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    role: "Education Advisor",
    photo: null,
  },
  {
    id: 2,
    name: "Mr. James Lee",
    role: "Healthcare Mentor",
    photo: null,
  },
  {
    id: 3,
    name: "Ms. Sophia Nguyen",
    role: "Sustainability Expert",
    photo: null,
  },
  {
    id: 4,
    name: "Prof. Daniel Smith",
    role: "Community Outreach",
    photo: null,
  },
];

function AdvisorsGrid() {
  return (
    <section
      id="advisors"
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-blue-50 rounded-lg shadow-md mt-12"
      aria-labelledby="advisors-heading"
    >
      <h2 id="advisors-heading" className="text-3xl font-bold text-gray-900 mb-10 text-center md:text-left">
        Our Advisors & Mentors
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {advisorsData.map(({ id, name, role, photo }) => (
          <article
            key={id}
            className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center"
            role="region"
            aria-label={`Advisor: ${name}, Role: ${role}`}
          >
            {/* Placeholder avatar circle with initials */}
            <div
              className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-2xl mb-4 select-none"
              aria-hidden="true"
            >
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-700 text-sm mt-1">{role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  // Non-functional form with placeholders
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-white rounded-lg shadow-md mt-12"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        Contact Us
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: Implement contact form submission logic
          alert("Form submission is not implemented yet.");
        }}
        className="max-w-3xl mx-auto md:mx-0 space-y-6"
        aria-label="Contact form"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-required="true"
            aria-describedby="name-desc"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-required="true"
            aria-describedby="email-desc"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            aria-required="true"
            placeholder="Write your message here"
          />
        </div>
        <button
          type="submit"
          className={`${primaryBlueBg} text-white px-6 py-3 font-semibold ${roundedBase} shadow-md ${primaryBlueHoverBg} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
          aria-label="Submit contact form"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">&copy; {new Date().getFullYear()} HOPE3 Foundation. All rights reserved.</div>
        <nav aria-label="Footer navigation" className="space-x-6 mt-4 md:mt-0">
          <a href="#mission" className="hover:text-white focus:outline-none focus:text-white">
            Mission
          </a>
          <a href="#programs" className="hover:text-white focus:outline-none focus:text-white">
            Programs
          </a>
          <a href="#impact" className="hover:text-white focus:outline-none focus:text-white">
            Impact
          </a>
          <a href="#donate" className="hover:text-white focus:outline-none focus:text-white">
            Donate
          </a>
          <a href="#contact" className="hover:text-white focus:outline-none focus:text-white">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default function Home() {
  // Add fade-in animation on mount
  useEffect(() => {
    // This effect is for triggering Tailwind animate-fadeIn classes on mount
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen text-gray-900">
      <Navbar />
      <main className="pt-20 md:pt-24 pb-16">
        <Hero />
        <Mission />
        <Programs />
        <Impact />
        <Transparency />
        <DonatePanel />
        <AdvisorsGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

/* Tailwind CSS animation utilities (add these to your global styles if not present):
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 0.6s ease forwards;
}
.animate-fadeIn.delay-100 {
  animation-delay: 0.1s;
}
.animate-fadeIn.delay-200 {
  animation-delay: 0.2s;
}
*/

/* TODO:
- Replace placeholder images/avatars with real photos.
- Replace mock data with real data fetched or imported.
- Integrate real payment gateway for Donate button.
- Implement contact form submission backend.
- Add real navigation links or routing if needed.
- Consider adding more accessibility features if required.
*/