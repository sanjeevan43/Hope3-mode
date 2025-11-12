import React, { useState, useEffect, useRef } from "react";

// Color & style constants
const primaryBlueBg = "bg-blue-600";
const primaryBlueText = "text-blue-600";
const primaryBlueHoverBg = "hover:bg-blue-700";
const softGreenBg = "bg-green-500";
const softGreenText = "text-green-500";
const softGreenHoverBg = "hover:bg-green-600";
const neutralDarkText = "text-gray-900";
const neutralLightText = "text-gray-700";
const neutralBg = "bg-white";
const roundedBase = "rounded-lg";
const shadowBase = "shadow-md";

// Mock data for programs
const mockPrograms = [
  {
    id: 1,
    name: "Scholarship Bridge",
    tagline: "Supporting underserved students with scholarships and mentorship.",
    pillars: ["Education", "Mentorship"],
    duration: "12 months",
    cohortSize: 50,
    fundingLevel: "Full",
    fundingAsk: 50000,
    fundingRaised: 35000,
    category: "Scholarship",
    location: "Rural",
  },
  {
    id: 2,
    name: "Girls in Tech",
    tagline: "Empowering young women through technology training and internships.",
    pillars: ["Skills", "Opportunity"],
    duration: "9 months",
    cohortSize: 30,
    fundingLevel: "Standard",
    fundingAsk: 30000,
    fundingRaised: 18000,
    category: "Girls in Tech",
    location: "Urban",
  },
  {
    id: 3,
    name: "Bridge to Careers",
    tagline: "Bridging education and employment for youth in underserved areas.",
    pillars: ["Education", "Livelihood"],
    duration: "6 months",
    cohortSize: 40,
    fundingLevel: "Micro",
    fundingAsk: 15000,
    fundingRaised: 9000,
    category: "Bridge",
    location: "All",
  },
];

// Pillar icons placeholders (simple SVGs)
const pillarIcons = {
  Education: (
    <svg
      className="w-6 h-6 text-blue-600"
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
  Mentorship: (
    <svg
      className="w-6 h-6 text-green-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a6.5 6.5 0 0113 0" />
    </svg>
  ),
  Skills: (
    <svg
      className="w-6 h-6 text-blue-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Opportunity: (
    <svg
      className="w-6 h-6 text-green-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Livelihood: (
    <svg
      className="w-6 h-6 text-blue-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20V4" />
    </svg>
  ),
};

// ProgramsHeader: Title and intro with Sponsor CTA
function ProgramsHeader({ onSponsorClick }) {
  return (
    <header className="mb-8 max-w-4xl mx-auto text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4" tabIndex={-1}>
        Programs
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        HOPE3 Foundation's programs are designed to empower communities through education,
        technology, and sustainable livelihoods. Join us in making a difference.
      </p>
      <button
        type="button"
        onClick={onSponsorClick}
        className={`${primaryBlueBg} text-white px-6 py-3 font-semibold ${roundedBase} shadow-md ${primaryBlueHoverBg} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
        aria-label="Sponsor a program"
      >
        Sponsor a Program
      </button>
    </header>
  );
}

// Filters component for Category, Location, Funding Level
function Filters({ filters, setFilters }) {
  const categories = ["Scholarship", "Girls in Tech", "Bridge"];
  const locations = ["All", "Rural", "Urban"];
  const fundingLevels = ["Micro", "Standard", "Full"];

  // Handle filter changes
  const handleChange = (e, type) => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <section
      aria-label="Filter programs"
      className="max-w-7xl mx-auto px-4 md:px-8 mb-12"
    >
      <form className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 justify-center" role="search">
        {/* Category Filter */}
        <div>
          <label htmlFor="filter-category" className="block mb-1 font-medium text-gray-700">
            Category
          </label>
          <select
            id="filter-category"
            name="category"
            value={filters.category}
            onChange={(e) => handleChange(e, "category")}
            className="w-full md:w-48 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by category"
          >
            <option value="">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        {/* Location Filter */}
        <div>
          <label htmlFor="filter-location" className="block mb-1 font-medium text-gray-700">
            Location
          </label>
          <select
            id="filter-location"
            name="location"
            value={filters.location}
            onChange={(e) => handleChange(e, "location")}
            className="w-full md:w-48 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by location"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc === "All" ? "" : loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        {/* Funding Level Filter */}
        <div>
          <label htmlFor="filter-funding" className="block mb-1 font-medium text-gray-700">
            Funding Level
          </label>
          <select
            id="filter-funding"
            name="funding"
            value={filters.funding}
            onChange={(e) => handleChange(e, "funding")}
            className="w-full md:w-48 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by funding level"
          >
            <option value="">All</option>
            {fundingLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
}

// ProgramCard component displaying program info with progress bar and buttons
function ProgramCard({ program, onViewDetails, onSponsor }) {
  const {
    name,
    tagline,
    pillars,
    duration,
    cohortSize,
    fundingAsk,
    fundingRaised,
  } = program;

  const progressPercent = Math.min(
    100,
    Math.round((fundingRaised / fundingAsk) * 100)
  );

  return (
    <article
      className={`${neutralBg} p-6 rounded-lg shadow-md flex flex-col justify-between`}
      role="region"
      aria-labelledby={`program-title-${program.id}`}
    >
      <header>
        <h3
          id={`program-title-${program.id}`}
          className="text-xl font-semibold text-gray-900 mb-1"
        >
          {name}
        </h3>
        <p className="text-gray-700 mb-3">{tagline}</p>
        {/* Pillars Icons */}
        <div className="flex space-x-3 mb-4" aria-label="Program pillars">
          {pillars.map((pillar) => (
            <div key={pillar} title={pillar} aria-hidden="true">
              {pillarIcons[pillar] || null}
            </div>
          ))}
        </div>
      </header>
      <section className="text-sm text-gray-700 mb-4 space-y-1" aria-label="Program details">
        <p>
          <strong>Duration:</strong> {duration}
        </p>
        <p>
          <strong>Cohort Size:</strong> {cohortSize}
        </p>
      </section>
      <section aria-label="Funding progress" className="mb-6">
        <p className="text-gray-700 text-sm mb-1">
          Funding Goal: ${fundingAsk.toLocaleString()}
        </p>
        <div
          className="w-full h-4 bg-gray-300 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={fundingAsk}
          aria-valuenow={fundingRaised}
          aria-label={`Funding progress: ${progressPercent}%`}
        >
          <div
            className={`${softGreenBg} h-4 rounded-full transition-all duration-1000 ease-in-out`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-green-700 text-sm mt-1 font-semibold">{progressPercent}% funded</p>
      </section>
      <footer className="flex space-x-4">
        <button
          type="button"
          onClick={() => onViewDetails(program)}
          className={`flex-1 ${primaryBlueBg} text-white py-2 font-semibold ${roundedBase} shadow-md ${primaryBlueHoverBg} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
          aria-label={`View details for ${name}`}
        >
          View Details
        </button>
        <button
          type="button"
          onClick={() => onSponsor(program)}
          className={`flex-1 ${softGreenBg} text-white py-2 font-semibold ${roundedBase} shadow-md ${softGreenHoverBg} focus:outline-none focus:ring-2 focus:ring-green-400 transition`}
          aria-label={`Sponsor program ${name}`}
        >
          Sponsor
        </button>
      </footer>
    </article>
  );
}

// ProgramDetailModal: modal showing detailed info about a program
function ProgramDetailModal({ program, onClose, onSponsor }) {
  const modalRef = useRef(null);

  // Trap focus inside modal for accessibility
  useEffect(() => {
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
  }, [onClose]);

  if (!program) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="program-modal-title"
      aria-describedby="program-modal-desc"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={modalRef}
        className={`${neutralBg} max-w-3xl w-full p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh] animate-fadeIn`}
      >
        <header className="flex justify-between items-center mb-4">
          <h2 id="program-modal-title" className="text-2xl font-bold text-gray-900">
            {program.name}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close program details"
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <section id="program-modal-desc" className="mb-6 text-gray-700 space-y-4">
          <p>{program.tagline}</p>
          <div>
            <h3 className="font-semibold mb-1">Eligibility</h3>
            <p>Applicants should meet program-specific criteria. (Placeholder text)</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Timelines</h3>
            <p>Applications open quarterly. Program duration: {program.duration}.</p>
          </div>
        </section>
        <button
          onClick={() => onSponsor(program)}
          className={`${softGreenBg} text-white px-6 py-3 font-semibold ${roundedBase} shadow-md ${softGreenHoverBg} focus:outline-none focus:ring-2 focus:ring-green-400 transition w-full`}
          aria-label={`Sponsor program ${program.name}`}
          type="button"
        >
          Sponsor This Program
        </button>
      </div>
    </div>
  );
}

// SponsorFormModal: local-only form modal with validation and success toast
function SponsorFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const modalRef = useRef(null);

  // Focus trap and escape key to close modal
  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errs.email = "Invalid email address";
    }
    if (!formData.amount.trim()) {
      errs.amount = "Donation amount is required";
    } else if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      errs.amount = "Enter a valid positive number";
    }
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSuccess(true);
    setFormData({ name: "", email: "", amount: "", message: "" });
    setErrors({});
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sponsor-form-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={modalRef}
        className={`${neutralBg} max-w-md w-full p-6 rounded-lg shadow-lg animate-fadeIn`}
      >
        <header className="mb-4 flex justify-between items-center">
          <h2 id="sponsor-form-title" className="text-2xl font-bold text-gray-900">
            Sponsor a Program
          </h2>
          <button
            onClick={onClose}
            aria-label="Close sponsor form"
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        {success ? (
          <p className="text-green-600 font-semibold text-center">
            Thank you for your sponsorship! We will contact you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
                  errors.name ? "border-red-600 focus:ring-red-600" : "border-gray-300 focus:ring-blue-500"
                }`}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "error-name" : undefined}
                required
              />
              {errors.name && (
                <p id="error-name" className="text-red-600 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-600 focus:ring-red-600" : "border-gray-300 focus:ring-blue-500"
                }`}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "error-email" : undefined}
                required
              />
              {errors.email && (
                <p id="error-email" className="text-red-600 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-gray-700 font-medium mb-1">
                Donation Amount (USD) <span className="text-red-600">*</span>
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                min="1"
                step="any"
                value={formData.amount}
                onChange={handleChange}
                className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
                  errors.amount ? "border-red-600 focus:ring-red-600" : "border-gray-300 focus:ring-blue-500"
                }`}
                aria-invalid={errors.amount ? "true" : "false"}
                aria-describedby={errors.amount ? "error-amount" : undefined}
                required
              />
              {errors.amount && (
                <p id="error-amount" className="text-red-600 text-sm mt-1">
                  {errors.amount}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              />
            </div>
            <button
              type="submit"
              className={`${softGreenBg} text-white px-6 py-3 font-semibold ${roundedBase} shadow-md ${softGreenHoverBg} focus:outline-none focus:ring-2 focus:ring-green-400 transition w-full`}
              aria-label="Submit sponsorship form"
            >
              Submit Sponsorship
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// Main Programs component
export default function Programs() {
  // Filters state
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    funding: "", 
  });

  // Modal state
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isSponsorFormOpen, setSponsorFormOpen] = useState(false);

  // Filter programs based on filters state
  const filteredPrograms = mockPrograms.filter((p) => {
    const categoryMatch = filters.category
      ? p.category === filters.category
      : true;
    const locationMatch = filters.location
      ? filters.location === "All"
        ? true
        : p.location === filters.location
      : true;
    const fundingMatch = filters.funding ? p.fundingLevel === filters.funding : true;
    return categoryMatch && locationMatch && fundingMatch;
  });

  // Handlers
  const openDetails = (program) => setSelectedProgram(program);
  const closeDetails = () => setSelectedProgram(null);

  const openSponsorForm = () => setSponsorFormOpen(true);
  const closeSponsorForm = () => setSponsorFormOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-24 pt-12">
      <ProgramsHeader onSponsorClick={openSponsorForm} />
      <Filters filters={filters} setFilters={setFilters} />
      <section
        aria-label="Programs grid"
        className="max-w-7xl mx-auto px-4 md:px-8 grid gap-8 grid-cols-1 md:grid-cols-3"
      >
        {filteredPrograms.length ? (
          filteredPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onViewDetails={openDetails}
              onSponsor={openSponsorForm}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-700">
            No programs match the selected filters.
          </p>
        )}
      </section>

      {selectedProgram && (
        <ProgramDetailModal
          program={selectedProgram}
          onClose={closeDetails}
          onSponsor={openSponsorForm}
        />
      )}

      {isSponsorFormOpen && (
        <SponsorFormModal isOpen={isSponsorFormOpen} onClose={closeSponsorForm} />
      )}
    </div>
  );
}