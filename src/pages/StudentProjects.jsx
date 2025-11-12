import React, { useState, useEffect, useRef } from "react";

// Mock student projects data
const mockProjects = [
  {
    id: 1,
    title: "EcoTracker Mobile App",
    shortSummary: "Carbon footprint tracking app with gamification features.",
    detailedDescription: "A comprehensive mobile application that helps users track their daily carbon footprint through smart integrations with transportation, energy usage, and consumption data. Features include personalized recommendations, achievement badges, and community challenges to promote sustainable living habits.",
    studentNames: ["Maria Rodriguez", "James Chen"],
    cohortYear: 2024,
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    repoLink: "https://github.com/placeholder/ecotracker",
    demoLink: "https://ecotracker-demo.netlify.app",
    thumbnail: "https://via.placeholder.com/400x300?text=EcoTracker+App",
    status: "Completed",
    milestones: ["MVP Development", "User Testing", "App Store Submission"],
    needsSponsor: false,
    popularity: 95
  },
  {
    id: 2,
    title: "Community Learning Platform",
    shortSummary: "Peer-to-peer learning platform connecting students globally.",
    detailedDescription: "An innovative platform that connects students from different backgrounds to share knowledge and learn from each other. Features include video calls, collaborative whiteboards, skill matching algorithms, and progress tracking to facilitate meaningful educational exchanges.",
    studentNames: ["Ayesha Patel", "Carlos Mendoza", "Fatima Al-Zahra"],
    cohortYear: 2023,
    technologies: ["React", "Express.js", "PostgreSQL", "WebRTC"],
    repoLink: "https://github.com/placeholder/community-learning",
    demoLink: "https://community-learn-demo.vercel.app",
    thumbnail: "https://via.placeholder.com/400x300?text=Learning+Platform",
    status: "Completed",
    milestones: ["Platform Architecture", "Video Integration", "Beta Launch"],
    needsSponsor: false,
    popularity: 88
  },
  {
    id: 3,
    title: "Smart Agriculture IoT System",
    shortSummary: "IoT sensors and ML for optimizing crop yields in small farms.",
    detailedDescription: "A comprehensive IoT solution combining soil sensors, weather monitoring, and machine learning algorithms to provide farmers with actionable insights for crop optimization. The system includes a mobile dashboard for real-time monitoring and automated irrigation controls.",
    studentNames: ["Priya Sharma", "Daniel Kim"],
    cohortYear: 2024,
    technologies: ["Python", "Arduino", "TensorFlow", "React", "AWS IoT"],
    repoLink: "https://github.com/placeholder/smart-agriculture",
    demoLink: "https://smart-farm-demo.herokuapp.com",
    thumbnail: "https://via.placeholder.com/400x300?text=Smart+Agriculture",
    status: "In Progress",
    milestones: ["Sensor Deployment", "ML Model Training", "Dashboard Development"],
    needsSponsor: true,
    popularity: 76
  },
  {
    id: 4,
    title: "Mental Health Chatbot",
    shortSummary: "AI-powered chatbot providing mental health support and resources.",
    detailedDescription: "An empathetic AI chatbot designed to provide initial mental health support, resource recommendations, and crisis intervention. Built with natural language processing and trained on therapeutic conversation patterns while maintaining strict privacy and ethical guidelines.",
    studentNames: ["Aisha Johnson", "Kevin Park"],
    cohortYear: 2023,
    technologies: ["Python", "NLP", "TensorFlow", "Flask", "React"],
    repoLink: "https://github.com/placeholder/mental-health-bot",
    demoLink: "https://mindbot-demo.netlify.app",
    thumbnail: "https://via.placeholder.com/400x300?text=Mental+Health+Bot",
    status: "Completed",
    milestones: ["NLP Model Development", "Safety Protocols", "User Testing"],
    needsSponsor: false,
    popularity: 92
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    shortSummary: "Secure and transparent voting platform using blockchain technology.",
    detailedDescription: "A decentralized voting system that ensures election integrity through blockchain technology. Features include voter authentication, transparent vote counting, real-time results, and immutable audit trails while maintaining voter privacy through advanced cryptographic techniques.",
    studentNames: ["Lisa Anderson", "Michael Roberts"],
    cohortYear: 2024,
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    repoLink: "https://github.com/placeholder/blockchain-voting",
    demoLink: "https://vote-chain-demo.vercel.app",
    thumbnail: "https://via.placeholder.com/400x300?text=Blockchain+Voting",
    status: "Prototype",
    milestones: ["Smart Contract Development", "Frontend Integration", "Security Audit"],
    needsSponsor: true,
    popularity: 84
  },
  {
    id: 6,
    title: "AR Learning Assistant",
    shortSummary: "Augmented reality app for interactive STEM education.",
    detailedDescription: "An immersive AR application that brings STEM concepts to life through interactive 3D models and simulations. Students can visualize complex molecular structures, explore historical events, and conduct virtual experiments in an engaging augmented reality environment.",
    studentNames: ["Jennifer Liu", "Mark Thompson"],
    cohortYear: 2023,
    technologies: ["Unity", "ARCore", "C#", "Blender", "Firebase"],
    repoLink: "https://github.com/placeholder/ar-learning",
    demoLink: "https://ar-learn-demo.github.io",
    thumbnail: "https://via.placeholder.com/400x300?text=AR+Learning",
    status: "In Progress",
    milestones: ["3D Model Creation", "AR Integration", "Educational Content"],
    needsSponsor: true,
    popularity: 79
  },
  {
    id: 7,
    title: "Food Waste Reduction App",
    shortSummary: "Connecting restaurants with food banks to reduce waste.",
    detailedDescription: "A platform that connects restaurants, grocery stores, and food banks to redistribute surplus food before it goes to waste. Features include real-time inventory tracking, pickup scheduling, impact metrics, and volunteer coordination to maximize food rescue efforts.",
    studentNames: ["Rachel Green", "Patricia Wong"],
    cohortYear: 2024,
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
    repoLink: "https://github.com/placeholder/food-rescue",
    demoLink: "https://food-rescue-demo.netlify.app",
    thumbnail: "https://via.placeholder.com/400x300?text=Food+Rescue",
    status: "Completed",
    milestones: ["Partner Onboarding", "Logistics System", "Impact Dashboard"],
    needsSponsor: false,
    popularity: 87
  },
  {
    id: 8,
    title: "Accessibility Web Checker",
    shortSummary: "Automated tool for web accessibility compliance testing.",
    detailedDescription: "A comprehensive web accessibility testing tool that automatically scans websites for WCAG compliance issues. Provides detailed reports, remediation suggestions, and integration with popular development workflows to help create more inclusive web experiences.",
    studentNames: ["Sarah Chen", "David Wilson"],
    cohortYear: 2023,
    technologies: ["JavaScript", "Puppeteer", "React", "Express.js", "Docker"],
    repoLink: "https://github.com/placeholder/accessibility-checker",
    demoLink: "https://a11y-checker-demo.vercel.app",
    thumbnail: "https://via.placeholder.com/400x300?text=Accessibility+Checker",
    status: "Completed",
    milestones: ["Core Engine Development", "Report Generation", "CI/CD Integration"],
    needsSponsor: false,
    popularity: 81
  },
  {
    id: 9,
    title: "Renewable Energy Monitor",
    shortSummary: "Real-time monitoring system for solar panel efficiency.",
    detailedDescription: "An IoT-based monitoring system that tracks solar panel performance, weather conditions, and energy production in real-time. Includes predictive maintenance alerts, efficiency optimization recommendations, and detailed analytics to maximize renewable energy output.",
    studentNames: ["Alex Kumar", "Sophie Martinez"],
    cohortYear: 2024,
    technologies: ["Python", "Raspberry Pi", "InfluxDB", "Grafana", "MQTT"],
    repoLink: "https://github.com/placeholder/solar-monitor",
    demoLink: "https://solar-monitor-demo.herokuapp.com",
    thumbnail: "https://via.placeholder.com/400x300?text=Solar+Monitor",
    status: "Prototype",
    milestones: ["Hardware Setup", "Data Collection", "Analytics Dashboard"],
    needsSponsor: true,
    popularity: 73
  },
  {
    id: 10,
    title: "Language Exchange Platform",
    shortSummary: "AI-powered platform for language learning through conversation.",
    detailedDescription: "A social platform that pairs language learners with native speakers for conversational practice. Features AI-powered matching algorithms, progress tracking, cultural exchange activities, and gamified learning experiences to make language acquisition engaging and effective.",
    studentNames: ["Elena Rodriguez", "Yuki Tanaka"],
    cohortYear: 2023,
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "WebRTC"],
    repoLink: "https://github.com/placeholder/language-exchange",
    demoLink: "https://lang-exchange-demo.netlify.app",
    thumbnail: "https://via.placeholder.com/400x300?text=Language+Exchange",
    status: "In Progress",
    milestones: ["Matching Algorithm", "Video Chat Integration", "Progress Tracking"],
    needsSponsor: false,
    popularity: 85
  }
];

function ProjectsHeader() {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Projects</h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        Discover innovative projects created by our talented students. From mobile apps to IoT systems, 
        these projects showcase the real-world impact of our education programs.
      </p>
    </header>
  );
}

function SponsorProjectPanel() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Student Innovation</h3>
          <p className="text-gray-700">Help fund equipment, hosting, and mentorship for student projects.</p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => alert("Sponsorship program coming soon!")}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Sponsor Projects
          </button>
          <button
            onClick={() => alert("Mentor signup coming soon!")}
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Become a Mentor
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectFilters({ filters, setFilters, searchTerm, setSearchTerm, sortBy, setSortBy }) {
  const statuses = ["All", "Completed", "In Progress", "Prototype"];
  const years = ["All", "2023", "2024"];
  const allTechnologies = [...new Set(mockProjects.flatMap(p => p.technologies))];
  const sortOptions = ["Newest", "Popular", "Needs Sponsor"];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search Projects
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search by title or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            id="status-filter"
            value={filters.status}
            onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Cohort Year
          </label>
          <select
            id="year-filter"
            value={filters.year}
            onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sort-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Sort By
          </label>
          <select
            id="sort-filter"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {sortOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="tech-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Technology
        </label>
        <select
          id="tech-filter"
          value={filters.technology}
          onChange={(e) => setFilters(prev => ({ ...prev, technology: e.target.value }))}
          className="w-full md:w-64 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Technologies</option>
          {allTechnologies.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

function TechTags({ technologies }) {
  const techColors = {
    "React": "bg-blue-100 text-blue-800",
    "React Native": "bg-blue-100 text-blue-800",
    "Node.js": "bg-green-100 text-green-800",
    "Python": "bg-yellow-100 text-yellow-800",
    "JavaScript": "bg-yellow-100 text-yellow-800",
    "MongoDB": "bg-green-100 text-green-800",
    "PostgreSQL": "bg-blue-100 text-blue-800",
    "Firebase": "bg-orange-100 text-orange-800",
    "TensorFlow": "bg-orange-100 text-orange-800",
    "Unity": "bg-purple-100 text-purple-800",
    "Solidity": "bg-gray-100 text-gray-800",
    "Arduino": "bg-teal-100 text-teal-800",
    "AWS IoT": "bg-orange-100 text-orange-800",
    "Docker": "bg-blue-100 text-blue-800"
  };

  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            techColors[tech] || "bg-gray-100 text-gray-800"
          }`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={project.thumbnail}
        alt={`${project.title} project thumbnail`}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            project.status === "Completed" ? "bg-green-100 text-green-800" :
            project.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
            "bg-blue-100 text-blue-800"
          }`}>
            {project.status}
          </span>
          <span className="text-sm text-gray-600">Class of {project.cohortYear}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-3 line-clamp-2">{project.shortSummary}</p>
        
        <div className="mb-4">
          <TechTags technologies={project.technologies.slice(0, 3)} />
          {project.technologies.length > 3 && (
            <span className="text-xs text-gray-500 ml-2">+{project.technologies.length - 3} more</span>
          )}
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600">
            By: {project.studentNames.join(", ")}
          </p>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            View Details
          </button>
          <a
            href={project.demoLink}
            onClick={(e) => {
              e.preventDefault();
              // TODO: Connect to real demo links
              alert("Demo link coming soon!");
            }}
            className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-center"
          >
            View Demo
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  useEffect(() => {
    if (project && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      );
      focusableElements[0]?.focus();
    }
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2 z-10"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 id="project-modal-title" className="text-3xl font-bold text-gray-900">
              {project.title}
            </h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === "Completed" ? "bg-green-100 text-green-800" :
              project.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
              "bg-blue-100 text-blue-800"
            }`}>
              {project.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Description</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{project.detailedDescription}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Milestones</h3>
              <ul className="space-y-2 mb-6">
                {project.milestones.map((milestone, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {milestone}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Team Members</h4>
                    <p className="text-gray-700">{project.studentNames.join(", ")}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Cohort Year</h4>
                    <p className="text-gray-700">{project.cohortYear}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Technologies</h4>
                    <TechTags technologies={project.technologies} />
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="space-y-2">
                      <a
                        href={project.repoLink}
                        onClick={(e) => {
                          e.preventDefault();
                          // TODO: Connect to real GitHub repositories
                          alert("Repository link coming soon!");
                        }}
                        className="block w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors text-center"
                      >
                        View Repository
                      </a>
                      <a
                        href={project.demoLink}
                        onClick={(e) => {
                          e.preventDefault();
                          // TODO: Embed demo iframes or connect to live demos
                          alert("Live demo coming soon!");
                        }}
                        className="block w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-center"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {project.needsSponsor && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Needs Sponsorship</h4>
                  <p className="text-orange-700 text-sm mb-3">
                    This project needs funding for hosting, equipment, or additional development resources.
                  </p>
                  <button
                    onClick={() => alert("Sponsorship program coming soon!")}
                    className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                  >
                    Sponsor This Project
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StudentProjects() {
  const [filters, setFilters] = useState({
    status: "All",
    year: "All",
    technology: "All"
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter and sort projects
  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         project.shortSummary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filters.status === "All" || project.status === filters.status;
    const matchesYear = filters.year === "All" || project.cohortYear.toString() === filters.year;
    const matchesTechnology = filters.technology === "All" || project.technologies.includes(filters.technology);
    
    return matchesSearch && matchesStatus && matchesYear && matchesTechnology;
  }).sort((a, b) => {
    switch (sortBy) {
      case "Popular":
        return b.popularity - a.popularity;
      case "Needs Sponsor":
        return b.needsSponsor - a.needsSponsor;
      case "Newest":
      default:
        return b.cohortYear - a.cohortYear || b.id - a.id;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsHeader />
        
        <SponsorProjectPanel />
        
        <ProjectFilters
          filters={filters}
          setFilters={setFilters}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No projects match your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilters({ status: "All", year: "All", technology: "All" });
                setSortBy("Newest");
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>
        )}

        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>
            {/* TODO: Connect to real contributor profiles and project repositories */}
            Want to showcase your project? Contact our program coordinators to get featured.
          </p>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}