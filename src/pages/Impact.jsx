import React, { useState, useEffect, useRef } from "react";
import ImpactMap from '../components/ImpactMap';

// Color & style constants
const primaryBlueBg = "bg-blue-600";
const primaryBlueHoverBg = "hover:bg-blue-700";

const neutralBg = "bg-white";

function ImpactHeader({ year, setYear }) {
  const years = ["All", "2022", "2023", "2024"];
  return (
    <header className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8 text-center md:text-left">
      <div className="mb-8 animate-scaleIn">
        <img 
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Community members working together" 
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      <h1 tabIndex={-1} className="text-4xl font-extrabold text-gray-900 mb-2 animate-slideInLeft">
        Impact
      </h1>
      <p className="text-gray-700 mb-6 text-lg animate-slideInRight delay-200">Outcomes donors can trust</p>
      <label htmlFor="year-select" className="sr-only">
        Filter by Year
      </label>
      <select
        id="year-select"
        name="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        aria-label="Filter impact data by year"
      >
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </header>
  );
}

function KPIGrid({ kpis }) {
  // Small sparkline placeholder SVG
  const Sparkline = () => (
    <svg
      aria-hidden="true"
      className="w-full h-6"
      viewBox="0 0 100 24"
      fill="none"
      stroke="#2563eb"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      focusable="false"
    >
      {/* Simple zig-zag line */}
      <polyline points="0,20 20,8 40,16 60,4 80,12 100,6" />
    </svg>
  );

  return (
    <section
      aria-label="Key performance indicators"
      className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
    >
      {kpis.map(({ id, label, value }) => (
        <article
          key={id}
          className={`${neutralBg} p-6 rounded-lg shadow-md flex flex-col justify-between animate-fadeIn hover:shadow-xl hover:scale-105 transition-all duration-300 delay-${id * 100}`}
          role="region"
          aria-labelledby={`kpi-label-${id}`}
        >
          <p
            id={`kpi-label-${id}`}
            className="text-gray-700 font-semibold mb-1"
          >
            {label}
          </p>
          <p className="text-4xl font-extrabold text-gray-900 mb-3 tabular-nums">
            {value}
          </p>
          <Sparkline />
        </article>
      ))}
    </section>
  );
}

function ImpactChartPlaceholder() {
  return (
    <section
      aria-label="Impact chart placeholder"
      className="max-w-7xl mx-auto px-4 md:px-8 mb-12"
    >
      <div
        className="w-full h-64 md:h-96 bg-blue-100 border border-blue-300 rounded-lg flex flex-col justify-center items-center text-blue-600 font-semibold text-lg select-none"
        aria-hidden="true"
      >
        Chart placeholder - Interactive impact chart goes here
      </div>
      <p className="mt-2 text-gray-600 text-sm italic text-center md:text-left">
        Replace with Recharts/Chart.js and real data
      </p>
    </section>
  );
}

function ProgressTimeline({ timeline }) {
  return (
    <section
      aria-label="Progress timeline of major milestones"
      className="max-w-7xl mx-auto px-4 md:px-8 mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Progress Timeline</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {timeline.map(({ id, title, date, description }) => (
          <article
            key={id}
            className={`${neutralBg} min-w-[280px] p-4 rounded-lg shadow-md flex-shrink-0`}
            role="group"
            aria-labelledby={`timeline-title-${id}`}
            aria-describedby={`timeline-desc-${id}`}
          >
            <h3
              id={`timeline-title-${id}`}
              className="font-semibold text-gray-900 mb-1"
            >
              {title}
            </h3>
            <time
              dateTime={date}
              className="block text-sm text-gray-600 mb-2"
              aria-label={`Date: ${date}`}
            >
              {date}
            </time>
            <p id={`timeline-desc-${id}`} className="text-gray-700 text-sm">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function StoryCard({ story, onReadMore }) {
  return (
    <article
      className={`${neutralBg} rounded-lg shadow-md p-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 animate-fadeIn`}
      role="region"
      aria-labelledby={`story-title-${story.id}`}
    >
      <img
        src={story.photo}
        alt={`Photo of ${story.name}`}
        className="w-32 h-32 rounded-full object-cover flex-shrink-0"
        loading="lazy"
      />
      <div className="flex flex-col justify-between">
        <h3
          id={`story-title-${story.id}`}
          className="text-xl font-semibold text-gray-900 mb-2"
        >
          {story.name}
        </h3>
        <blockquote className="text-gray-700 italic mb-4" aria-label="Quote">
          &ldquo;{story.quote}&rdquo;
        </blockquote>
        <p className="text-gray-700 mb-4">{story.summary}</p>
        <button
          type="button"
          onClick={() => onReadMore(story)}
          className={`${primaryBlueBg} text-white px-4 py-2 rounded-md shadow-md ${primaryBlueHoverBg} focus:outline-none focus:ring-2 focus:ring-blue-600 transition self-start`}
          aria-label={`Read full story of ${story.name}`}
        >
          Read full story
        </button>
      </div>
    </article>
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
      if (e.key === "Escape") onClose();
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
      aria-describedby="story-modal-desc"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={modalRef}
        className={`${neutralBg} max-w-3xl w-full p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh] animate-fadeIn`}
      >
        <header className="flex justify-between items-center mb-4">
          <h2 id="story-modal-title" className="text-2xl font-bold text-gray-900">
            {story.name}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close story modal"
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
        <img
          src={story.photo}
          alt={story.name}
          className="w-48 h-48 rounded-full object-cover mb-4 mx-auto"
          loading="lazy"
        />
        <section id="story-modal-desc" className="text-gray-700 space-y-4">
          <blockquote className="italic text-lg">&ldquo;{story.quote}&rdquo;</blockquote>
          <p>{story.fullText}</p>
        </section>
      </div>
    </div>
  );
}

function ReportDownloads({ reports }) {
  return (
    <section
      aria-label="Downloadable reports"
      className="max-w-7xl mx-auto px-4 md:px-8 mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Reports for Donors</h2>
      <ul className="divide-y divide-gray-300 border border-gray-300 rounded-lg shadow-md">
        {reports.map(({ id, title, fileSize }) => (
          <li
            key={id}
            className="flex items-center justify-between p-4 hover:bg-blue-50 focus-within:bg-blue-50 transition"
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Download feature coming soon!");
              }}
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
              tabIndex={0}
              aria-label={`Download report: ${title}, file size: ${fileSize}`}
            >
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-gray-900 font-medium">{title}</span>
            </a>
            <span className="text-gray-600 text-sm select-none">{fileSize}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ImpactBreakdown({ breakdown }) {
  return (
    <section
      aria-label="Impact fund allocation breakdown"
      className="max-w-7xl mx-auto px-4 md:px-8 mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Fund Allocation</h2>
      <div className="space-y-4">
        {breakdown.map(({ id, label, percent, color }) => (
          <div key={id}>
            <div className="flex justify-between mb-1 font-medium text-gray-900">
              <span>{label}</span>
              <span>{percent}%</span>
            </div>
            <div
              className="w-full bg-gray-300 rounded-full h-5"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percent}
              aria-label={`${label} fund allocation`}
            >
              <div
                className={`${color} h-5 rounded-full transition-all duration-700 ease-in-out`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DataTransparencyNote() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-gray-700 text-center md:text-left"
      aria-label="Data transparency note"
    >
      <p>
        HOPE3 Foundation undergoes annual audits and complies with 80G/CSR regulations.
        Donors can request detailed reports and data at{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            alert("Contact feature coming soon!");
          }}
          className="text-blue-600 underline focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          contact@hope3foundation.org
        </a>
        .
      </p>
    </section>
  );
}

function FAQAccordion() {
  const faqItems = [
    {
      question: "How is impact data collected and verified?",
      answer:
        "We use a combination of participant surveys, third-party audits, and internal monitoring to ensure accuracy and transparency.",
    },
    {
      question: "What methodology is used for KPIs?",
      answer:
        "KPIs are aligned with industry standards and verified through independent evaluators to measure program effectiveness.",
    },
    {
      question: "How can I request donation receipts or reports?",
      answer:
        "Donors can request receipts and detailed reports via our contact email or through the donor portal.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="max-w-4xl mx-auto px-4 md:px-0 mb-16"
    >
      <h2
        id="faq-heading"
        className="text-3xl font-bold text-gray-900 mb-6 text-center"
      >
        Frequently Asked Questions
      </h2>
      <div className="border border-gray-300 rounded-lg divide-y divide-gray-300 shadow-md">
        {faqItems.map(({ question, answer }, i) => (
          <div key={i} className="border-b border-gray-300 last:border-0">
            <button
              type="button"
              aria-expanded={openIndex === i}
              aria-controls={`faq-panel-${i}`}
              id={`faq-header-${i}`}
              onClick={() => toggleIndex(i)}
              className="w-full text-left py-4 px-2 flex justify-between items-center font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {question}
              <span aria-hidden="true" className="ml-2">
                {openIndex === i ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === i && (
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-header-${i}`}
                className="px-4 pb-4 text-gray-700"
              >
                {answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Impact() {
  // Local state for year filter and modal story
  const [year, setYear] = useState("All");
  const [modalStory, setModalStory] = useState(null);
  const [ariaLiveMessage, setAriaLiveMessage] = useState("");

  // Mock KPIs by year
  const kpiData = {
    All: [
      { id: 1, label: "Students Mentored", value: "5,200+" },
      { id: 2, label: "Graduation Rate", value: "92%" },
      { id: 3, label: "Placements", value: "3,800+" },
      { id: 4, label: "Mentor Hours", value: "18,300" },
      { id: 5, label: "Scholarships Issued", value: "420" },
    ],
    "2022": [
      { id: 1, label: "Students Mentored", value: "1,500" },
      { id: 2, label: "Graduation Rate", value: "90%" },
      { id: 3, label: "Placements", value: "1,000" },
      { id: 4, label: "Mentor Hours", value: "5,200" },
      { id: 5, label: "Scholarships Issued", value: "120" },
    ],
    "2023": [
      { id: 1, label: "Students Mentored", value: "2,000" },
      { id: 2, label: "Graduation Rate", value: "93%" },
      { id: 3, label: "Placements", value: "1,500" },
      { id: 4, label: "Mentor Hours", value: "7,400" },
      { id: 5, label: "Scholarships Issued", value: "180" },
    ],
    "2024": [
      { id: 1, label: "Students Mentored", value: "1,700" },
      { id: 2, label: "Graduation Rate", value: "94%" },
      { id: 3, label: "Placements", value: "1,300" },
      { id: 4, label: "Mentor Hours", value: "5,700" },
      { id: 5, label: "Scholarships Issued", value: "120" },
    ],
  };

  // Mock timeline data by year
  const timelineData = {
    All: [
      {
        id: 1,
        title: "Program Launch",
        date: "2021-Q1",
        description: "HOPE3 Foundation officially launched its flagship programs.",
      },
      {
        id: 2,
        title: "First Audit Completed",
        date: "2022-Q4",
        description: "Successfully completed first independent financial audit.",
      },
      {
        id: 3,
        title: "Major Grant Received",
        date: "2023-Q2",
        description: "Received a $1M grant to expand scholarship programs.",
      },
      {
        id: 4,
        title: "New Tech Program",
        date: "2024-Q1",
        description: "Launched Girls in Tech initiative in urban areas.",
      },
    ],
    "2022": [
      {
        id: 2,
        title: "First Audit Completed",
        date: "2022-Q4",
        description: "Successfully completed first independent financial audit.",
      },
    ],
    "2023": [
      {
        id: 3,
        title: "Major Grant Received",
        date: "2023-Q2",
        description: "Received a $1M grant to expand scholarship programs.",
      },
    ],
    "2024": [
      {
        id: 4,
        title: "New Tech Program",
        date: "2024-Q1",
        description: "Launched Girls in Tech initiative in urban areas.",
      },
    ],
  };

  // Mock stories
  const stories = [
    {
      id: 1,
      name: "Maria S.",
      photo: "https://via.placeholder.com/128?text=Maria",
      quote: "HOPE3's mentorship changed my life and opened doors I never imagined.",
      summary:
        "Maria completed the Scholarship Bridge program and is now pursuing her dream career in engineering.",
      fullText:
        "Maria's full story: After joining HOPE3's Scholarship Bridge, she received dedicated mentorship and financial support that helped her graduate with honors. Today, Maria works as an engineer and mentors others.",
    },
    {
      id: 2,
      name: "Ayesha K.",
      photo: "https://via.placeholder.com/128?text=Ayesha",
      quote:
        "The Girls in Tech program gave me confidence and skills to succeed in STEM fields.",
      summary:
        "Ayesha completed a 9-month tech training program and secured an internship at a leading tech firm.",
      fullText:
        "Ayesha's full story: Participating in the Girls in Tech program empowered her with coding skills and leadership experience. She now interns at a major tech company and advocates for women in STEM.",
    },
    {
      id: 3,
      name: "Daniel R.",
      photo: "https://via.placeholder.com/128?text=Daniel",
      quote:
        "Thanks to HOPE3, I found a sustainable livelihood through vocational training.",
      summary:
        "Daniel attended the Bridge to Careers program and now runs a successful local business.",
      fullText:
        "Daniel's full story: After completing vocational training and receiving micro-grants from HOPE3, Daniel launched a small enterprise that supports his family and community.",
    },
  ];

  // Mock reports
  const reports = [
    { id: 1, title: "Audited Financials FY 2023-24", fileSize: "1.2 MB" },
    { id: 2, title: "Utilization Report Q2 2025", fileSize: "850 KB" },
    { id: 3, title: "Annual Impact Summary 2023", fileSize: "1.5 MB" },
  ];

  // Mock fund allocation breakdown
  const fundBreakdown = [
    { id: 1, label: "Scholarships", percent: 70, color: "bg-green-400" },
    { id: 2, label: "Programs", percent: 20, color: "bg-blue-400" },
    { id: 3, label: "Operations", percent: 10, color: "bg-yellow-400" },
  ];

  // Accessibility: announce filter changes
  useEffect(() => {
    setAriaLiveMessage(`Impact data filtered by year ${year}`);
  }, [year]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ImpactHeader year={year} setYear={setYear} />
      <main className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
          role="status"
          tabIndex={-1}
        >
          {ariaLiveMessage}
        </div>
        <KPIGrid kpis={kpiData[year]} />
        <ImpactChartPlaceholder />
        <ProgressTimeline timeline={timelineData[year]} />
        <section aria-label="Stories and testimonials" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Stories & Testimonials</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {stories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onReadMore={setModalStory}
              />
            ))}
          </div>
        </section>
        <ReportDownloads reports={reports} />
        <section className="mb-12">
          <ImpactMap />
        </section>
        <ImpactBreakdown breakdown={fundBreakdown} />
        <DataTransparencyNote />
        <FAQAccordion />
      </main>
      {modalStory && (
        <StoryModal story={modalStory} onClose={() => setModalStory(null)} />
      )}
    </div>
  );
}