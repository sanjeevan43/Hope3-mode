import React, { useState } from "react";

// Mock data from original pages
const mockStories = [
  {
    id: 1,
    name: "Maria Rodriguez",
    photo: "https://via.placeholder.com/300x300?text=Maria",
    shortQuote: "HOPE3 gave me the confidence to pursue my dreams in engineering.",
    currentRole: "Mechanical Engineer at Tesla",
    program: "Scholar+",
    graduationYear: 2023
  },
  {
    id: 2,
    name: "Ayesha Patel",
    photo: "https://via.placeholder.com/300x300?text=Ayesha",
    shortQuote: "Girls in Tech opened doors I never knew existed.",
    currentRole: "Software Engineer at Google",
    program: "Girls in Tech",
    graduationYear: 2022
  },
  {
    id: 3,
    name: "Daniel Kim",
    photo: "https://via.placeholder.com/300x300?text=Daniel",
    shortQuote: "Bridge program helped me transition from military to civilian career.",
    currentRole: "Project Manager at Microsoft",
    program: "Bridge",
    graduationYear: 2023
  }
];

const mockEvents = [
  {
    id: 1,
    title: "Annual Scholarship Ceremony 2023",
    date: "2023-12-15",
    heroPhoto: "https://via.placeholder.com/400x300?text=Scholarship+Ceremony",
    shortDescription: "Celebrating 150 scholarship recipients and their achievements.",
    location: "San Francisco Convention Center",
    type: "Graduation"
  },
  {
    id: 2,
    title: "Girls in Tech Workshop Series",
    date: "2023-09-20",
    heroPhoto: "https://via.placeholder.com/400x300?text=Tech+Workshop",
    shortDescription: "Intensive coding bootcamp for young women in STEM.",
    location: "Tech Hub Austin",
    type: "Workshop"
  },
  {
    id: 3,
    title: "Annual Fundraising Gala",
    date: "2024-03-15",
    heroPhoto: "https://via.placeholder.com/400x300?text=Fundraising+Gala",
    shortDescription: "Elegant evening raising $2M for education programs.",
    location: "Grand Ballroom, Chicago",
    type: "Fundraiser"
  }
];

const mockProjects = [
  {
    id: 1,
    title: "EcoTracker Mobile App",
    shortSummary: "Carbon footprint tracking app with gamification features.",
    studentNames: ["Maria Rodriguez", "James Chen"],
    cohortYear: 2024,
    technologies: ["React Native", "Node.js", "MongoDB"],
    thumbnail: "https://via.placeholder.com/400x300?text=EcoTracker+App",
    status: "Completed"
  },
  {
    id: 2,
    title: "Community Learning Platform",
    shortSummary: "Peer-to-peer learning platform connecting students globally.",
    studentNames: ["Ayesha Patel", "Carlos Mendoza"],
    cohortYear: 2023,
    technologies: ["React", "Express.js", "PostgreSQL"],
    thumbnail: "https://via.placeholder.com/400x300?text=Learning+Platform",
    status: "Completed"
  },
  {
    id: 3,
    title: "Smart Agriculture IoT System",
    shortSummary: "IoT sensors and ML for optimizing crop yields in small farms.",
    studentNames: ["Priya Sharma", "Daniel Kim"],
    cohortYear: 2024,
    technologies: ["Python", "Arduino", "TensorFlow"],
    thumbnail: "https://via.placeholder.com/400x300?text=Smart+Agriculture",
    status: "In Progress"
  }
];

function CommunityHeader() {
  return (
    <header className="text-center mb-12 animate-fadeIn">
      <div 
        className="h-64 bg-cover bg-center rounded-lg mb-8 flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80')"
        }}
      >
        <div className="bg-black bg-opacity-50 rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-4">Our Community</h1>
          <p className="text-xl text-white max-w-3xl">
            Discover our success stories, events, and student innovations that showcase the impact of our programs.
          </p>
        </div>
      </div>
    </header>
  );
}

function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'stories', label: 'Success Stories', icon: '🌟' },
    { id: 'events', label: 'Events', icon: '📅' },
    { id: 'projects', label: 'Student Projects', icon: '💡' }
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white rounded-lg shadow-md p-1" role="tablist">
        {tabs.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center space-x-2 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function SuccessStoriesSection() {
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockStories.map((story, index) => (
          <article 
            key={story.id} 
            className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-slideInLeft`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={story.photo}
              alt={`Photo of ${story.name}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{story.currentRole}</p>
              <p className="text-gray-500 text-sm mb-4">{story.program} • Class of {story.graduationYear}</p>
              <blockquote className="text-orange-600 italic">
                "{story.shortQuote}"
              </blockquote>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => alert("Full stories coming soon!")}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          View All Success Stories
        </button>
      </div>
    </div>
  );
}

function EventsSection() {
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockEvents.map((event, index) => (
          <article 
            key={event.id} 
            className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-slideInRight`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative">
              <img
                src={event.heroPhoto}
                alt={`${event.title} event photo`}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-600 px-2 py-1 rounded text-sm font-medium text-white">
                  {event.type}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <span>{new Date(event.date).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{event.location}</span>
              </div>
              <p className="text-gray-700">{event.shortDescription}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => alert("Event gallery coming soon!")}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          View All Events
        </button>
      </div>
    </div>
  );
}

function StudentProjectsSection() {
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProjects.map((project, index) => (
          <article 
            key={project.id} 
            className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-scaleIn`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
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
              <p className="text-gray-700 mb-3">{project.shortSummary}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">
                By: {project.studentNames.join(", ")}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => alert("Project details coming soon!")}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          View All Projects
        </button>
      </div>
    </div>
  );
}

export default function Community() {
  const [activeTab, setActiveTab] = useState('stories');

  const renderContent = () => {
    switch (activeTab) {
      case 'stories':
        return <SuccessStoriesSection />;
      case 'events':
        return <EventsSection />;
      case 'projects':
        return <StudentProjectsSection />;
      default:
        return <SuccessStoriesSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CommunityHeader />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
      </div>
    </div>
  );
}