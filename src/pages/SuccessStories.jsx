import React, { useState, useEffect, useRef } from "react";

// Mock data for success stories
const mockStories = [
  {
    id: 1,
    name: "Maria Rodriguez",
    photo: "https://via.placeholder.com/300x300?text=Maria",
    shortQuote: "HOPE3 gave me the confidence to pursue my dreams in engineering.",
    longStory: "Maria joined the Scholar+ program in 2020 when she was struggling to afford college. Through mentorship and financial support, she graduated with honors in Mechanical Engineering. Today, she works at Tesla and mentors other young women in STEM.",
    location: "San Francisco, CA",
    graduationYear: 2023,
    currentRole: "Mechanical Engineer at Tesla",
    program: "Scholar+",
    mentor: "Dr. Sarah Chen",
    outcomes: ["95% GPA", "3 Internships", "Full-time job offer"],
    featured: true
  },
  {
    id: 2,
    name: "Ayesha Patel",
    photo: "https://via.placeholder.com/300x300?text=Ayesha",
    shortQuote: "Girls in Tech opened doors I never knew existed.",
    longStory: "Ayesha discovered coding through the Girls in Tech program. Starting with zero programming knowledge, she completed a 9-month intensive bootcamp and secured an internship at Google. She now advocates for diversity in tech.",
    location: "Austin, TX",
    graduationYear: 2022,
    currentRole: "Software Engineer at Google",
    program: "Girls in Tech",
    mentor: "Jennifer Liu",
    outcomes: ["Completed 5 projects", "Google internship", "Tech conference speaker"],
    featured: true
  },
  {
    id: 3,
    name: "Daniel Kim",
    photo: "https://via.placeholder.com/300x300?text=Daniel",
    shortQuote: "Bridge program helped me transition from military to civilian career.",
    longStory: "After serving in the military, Daniel struggled to find his place in civilian life. The Bridge program provided career counseling, skills training, and networking opportunities that led to his current role in project management.",
    location: "Seattle, WA",
    graduationYear: 2023,
    currentRole: "Project Manager at Microsoft",
    program: "Bridge",
    mentor: "Mark Thompson",
    outcomes: ["PMP Certification", "Leadership training", "6-figure salary"],
    featured: true
  },
  {
    id: 4,
    name: "Priya Sharma",
    photo: "https://via.placeholder.com/300x300?text=Priya",
    shortQuote: "The scholarship made my medical school dreams possible.",
    longStory: "Coming from a low-income family, Priya thought medical school was impossible. The Scholar+ program provided full tuition support and mentorship throughout her journey. She's now in her residency program.",
    location: "Chicago, IL",
    graduationYear: 2024,
    currentRole: "Medical Resident at Northwestern",
    program: "Scholar+",
    mentor: "Dr. Michael Roberts",
    outcomes: ["MCAT 95th percentile", "Medical school acceptance", "Research publications"]
  },
  {
    id: 5,
    name: "James Wilson",
    photo: "https://via.placeholder.com/300x300?text=James",
    shortQuote: "From dropout to startup founder - HOPE3 changed everything.",
    longStory: "James was a high school dropout working minimum wage jobs. The Bridge program helped him earn his GED, learn business skills, and eventually start his own company. His startup now employs 15 people.",
    location: "Denver, CO",
    graduationYear: 2022,
    currentRole: "CEO of GreenTech Solutions",
    program: "Bridge",
    mentor: "Lisa Anderson",
    outcomes: ["GED completion", "Business certification", "Startup funding"]
  },
  {
    id: 6,
    name: "Fatima Al-Zahra",
    photo: "https://via.placeholder.com/300x300?text=Fatima",
    shortQuote: "Girls in Tech gave me the skills to break barriers.",
    longStory: "As a first-generation immigrant, Fatima faced many challenges. The Girls in Tech program provided not just technical skills but also confidence and community. She now works in cybersecurity and volunteers as a mentor.",
    location: "New York, NY",
    graduationYear: 2023,
    currentRole: "Cybersecurity Analyst at IBM",
    program: "Girls in Tech",
    mentor: "Rachel Green",
    outcomes: ["Security+ certification", "Hackathon winner", "Mentor to 10+ students"]
  },
  {
    id: 7,
    name: "Carlos Mendoza",
    photo: "https://via.placeholder.com/300x300?text=Carlos",
    shortQuote: "Scholar+ helped me become the first in my family to graduate college.",
    longStory: "Carlos grew up in a single-parent household and worked part-time throughout high school. The Scholar+ program provided financial support and academic mentoring that helped him graduate with a degree in Computer Science.",
    location: "Phoenix, AZ",
    graduationYear: 2024,
    currentRole: "Software Developer at Adobe",
    program: "Scholar+",
    mentor: "Dr. Patricia Wong",
    outcomes: ["Dean's List", "Internship at Adobe", "Full-time offer"]
  },
  {
    id: 8,
    name: "Aisha Johnson",
    photo: "https://via.placeholder.com/300x300?text=Aisha",
    shortQuote: "Bridge program helped me pivot my career into data science.",
    longStory: "After working in retail for years, Aisha wanted a career change. The Bridge program's data science track provided intensive training and job placement support. She now works as a data analyst at a Fortune 500 company.",
    location: "Atlanta, GA",
    graduationYear: 2023,
    currentRole: "Data Analyst at Coca-Cola",
    program: "Bridge",
    mentor: "Kevin Park",
    outcomes: ["Python certification", "Portfolio projects", "Career transition"]
  }
];

function StoriesHeader() {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        Meet the inspiring individuals whose lives have been transformed through HOPE3 Foundation programs.
        Their journeys showcase the power of education, mentorship, and opportunity.
      </p>
    </header>
  );
}

function FeaturedCarousel({ stories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredStories = stories.filter(story => story.featured);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredStories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredStories.length]);

  if (featuredStories.length === 0) return null;

  const currentStory = featuredStories[currentIndex];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-8 mb-12" aria-label="Featured success stories">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Stories</h2>
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <img
          src={currentStory.photo}
          alt={`Photo of ${currentStory.name}`}
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
        <div className="flex-1 text-center md:text-left">
          <blockquote className="text-2xl font-medium text-orange-600 italic mb-4">
            "{currentStory.shortQuote}"
          </blockquote>
          <p className="text-lg font-semibold text-gray-900 mb-2">{currentStory.name}</p>
          <p className="text-gray-700 mb-2">{currentStory.currentRole}</p>
          <p className="text-gray-600">{currentStory.program} • Class of {currentStory.graduationYear}</p>
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {featuredStories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to story ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search by name or keyword..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search success stories"
      />
      <svg
        className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}

function FiltersBar({ filters, setFilters }) {
  const years = ["All", "2022", "2023", "2024"];
  const programs = ["All", "Scholar+", "Girls in Tech", "Bridge"];

  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <div>
        <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Graduation Year
        </label>
        <select
          id="year-filter"
          value={filters.year}
          onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="program-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Program
        </label>
        <select
          id="program-filter"
          value={filters.program}
          onChange={(e) => setFilters(prev => ({ ...prev, program: e.target.value }))}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {programs.map(program => (
            <option key={program} value={program}>{program}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

function StoryCard({ story, onReadMore }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={story.photo}
        alt={`Photo of ${story.name}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{story.currentRole}</p>
        <p className="text-gray-500 text-sm mb-4">{story.program} • Class of {story.graduationYear}</p>
        <blockquote className="text-orange-600 italic mb-4">
          "{story.shortQuote}"
        </blockquote>
        <button
          onClick={() => onReadMore(story)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          aria-label={`Read full story of ${story.name}`}
        >
          Read More
        </button>
      </div>
    </article>
  );
}

function StoryGrid({ stories, onReadMore }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Success stories grid">
      {stories.map(story => (
        <StoryCard key={story.id} story={story} onReadMore={onReadMore} />
      ))}
    </section>
  );
}

function StoryModal({ story, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!story) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    firstEl?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [story, onClose]);

  if (!story) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={modalRef}
        className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl"
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 mb-8">
              <img
                src={story.photo}
                alt={`Photo of ${story.name}`}
                className="w-48 h-48 rounded-lg object-cover shadow-lg mx-auto md:mx-0"
              />
              <div className="flex-1">
                <h2 id="story-modal-title" className="text-3xl font-bold text-gray-900 mb-2">
                  {story.name}
                </h2>
                <p className="text-xl text-gray-700 mb-2">{story.currentRole}</p>
                <p className="text-gray-600 mb-4">{story.location}</p>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Program Details</p>
                  <p className="text-gray-600">Program: {story.program}</p>
                  <p className="text-gray-600">Graduation: {story.graduationYear}</p>
                  <p className="text-gray-600">Mentor: {story.mentor}</p>
                </div>
              </div>
            </div>

            <blockquote className="text-2xl font-medium text-orange-600 italic mb-6 text-center">
              "{story.shortQuote}"
            </blockquote>

            <div className="prose max-w-none mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Story</h3>
              <p className="text-gray-700 leading-relaxed">{story.longStory}</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Outcomes</h3>
              <ul className="space-y-2">
                {story.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">Share this story</h4>
                <div className="flex space-x-2">
                  {/* TODO: Replace with real sharing functionality */}
                  <button
                    onClick={() => alert("LinkedIn sharing coming soon!")}
                    className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => alert("WhatsApp sharing coming soon!")}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    aria-label="Share on WhatsApp"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">Support more students</h4>
                <button
                  onClick={() => alert("Sponsorship program coming soon!")}
                  className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors"
                  aria-label="Sponsor this alumni"
                >
                  Sponsor Alumni Like {story.name.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterNote() {
  return (
    <footer className="text-center text-gray-600 text-sm mt-16 py-8 border-t border-gray-200">
      <p className="mb-2">
        {/* TODO: Replace with real links to full alumni directory and impact reports */}
        Want to see more success stories? Visit our{" "}
        <a href="#" className="text-blue-600 hover:underline" onClick={(e) => { e.preventDefault(); alert("Alumni directory coming soon!"); }}>
          full alumni directory
        </a>{" "}
        or download our{" "}
        <a href="#" className="text-blue-600 hover:underline" onClick={(e) => { e.preventDefault(); alert("Impact report coming soon!"); }}>
          annual impact report
        </a>.
      </p>
      <p>
        {/* TODO: Add real analytics tracking for page views and engagement */}
        Stories are updated regularly. Last updated: December 2024
      </p>
    </footer>
  );
}

export default function SuccessStories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ year: "All", program: "All" });
  const [selectedStory, setSelectedStory] = useState(null);

  // Filter and search stories
  const filteredStories = mockStories.filter(story => {
    const matchesSearch = story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.shortQuote.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.currentRole.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = filters.year === "All" || story.graduationYear.toString() === filters.year;
    const matchesProgram = filters.program === "All" || story.program === filters.program;
    
    return matchesSearch && matchesYear && matchesProgram;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StoriesHeader />
        
        <FeaturedCarousel stories={mockStories} />
        
        <div className="mb-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="flex-1">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <FiltersBar filters={filters} setFilters={setFilters} />
        </div>

        {filteredStories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No stories match your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilters({ year: "All", program: "All" });
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <StoryGrid stories={filteredStories} onReadMore={setSelectedStory} />
        )}

        <FooterNote />
      </div>

      <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
    </div>
  );
}