import React, { useState, useEffect, useRef } from "react";

// Mock events data
const mockEvents = [
  {
    id: 1,
    title: "Annual Scholarship Ceremony 2023",
    date: "2023-12-15",
    year: 2023,
    heroPhoto: "https://via.placeholder.com/400x300?text=Scholarship+Ceremony",
    gallery: [
      "https://via.placeholder.com/600x400?text=Gallery+1",
      "https://via.placeholder.com/600x400?text=Gallery+2",
      "https://via.placeholder.com/600x400?text=Gallery+3"
    ],
    shortDescription: "Celebrating 150 scholarship recipients and their achievements.",
    longDescription: "Our annual scholarship ceremony brought together students, families, and mentors to celebrate academic excellence and community impact. This year we awarded scholarships to 150 deserving students across our three programs.",
    location: "San Francisco Convention Center",
    type: "Graduation"
  },
  {
    id: 2,
    title: "Girls in Tech Workshop Series",
    date: "2023-09-20",
    year: 2023,
    heroPhoto: "https://via.placeholder.com/400x300?text=Tech+Workshop",
    gallery: [
      "https://via.placeholder.com/600x400?text=Coding+Session",
      "https://via.placeholder.com/600x400?text=Team+Projects",
      "https://via.placeholder.com/600x400?text=Demo+Day"
    ],
    shortDescription: "Intensive coding bootcamp for young women in STEM.",
    longDescription: "A comprehensive 3-day workshop series covering web development, data science, and entrepreneurship. Over 80 participants learned cutting-edge technologies and built real-world projects.",
    location: "Tech Hub Austin",
    type: "Workshop"
  },
  {
    id: 3,
    title: "Community Food Drive",
    date: "2023-11-25",
    year: 2023,
    heroPhoto: "https://via.placeholder.com/400x300?text=Food+Drive",
    gallery: [
      "https://via.placeholder.com/600x400?text=Volunteers",
      "https://via.placeholder.com/600x400?text=Food+Collection",
      "https://via.placeholder.com/600x400?text=Distribution"
    ],
    shortDescription: "Thanksgiving food distribution serving 500+ families.",
    longDescription: "Our annual Thanksgiving food drive mobilized over 200 volunteers to collect and distribute meals to families in need. We served over 500 families across three communities.",
    location: "Multiple Community Centers",
    type: "Drive"
  },
  {
    id: 4,
    title: "Bridge Program Graduation",
    date: "2023-08-10",
    year: 2023,
    heroPhoto: "https://via.placeholder.com/400x300?text=Bridge+Graduation",
    gallery: [
      "https://via.placeholder.com/600x400?text=Graduates",
      "https://via.placeholder.com/600x400?text=Ceremony",
      "https://via.placeholder.com/600x400?text=Celebration"
    ],
    shortDescription: "45 graduates complete career transition program.",
    longDescription: "Celebrating the achievements of 45 individuals who successfully completed our Bridge program, transitioning into new careers in technology, healthcare, and business.",
    location: "Seattle Community College",
    type: "Graduation"
  },
  {
    id: 5,
    title: "Annual Fundraising Gala",
    date: "2024-03-15",
    year: 2024,
    heroPhoto: "https://via.placeholder.com/400x300?text=Fundraising+Gala",
    gallery: [
      "https://via.placeholder.com/600x400?text=Gala+Night",
      "https://via.placeholder.com/600x400?text=Auction",
      "https://via.placeholder.com/600x400?text=Speakers"
    ],
    shortDescription: "Elegant evening raising $2M for education programs.",
    longDescription: "Our most successful fundraising gala to date, featuring keynote speakers, silent auction, and entertainment. The event raised over $2 million to support our education initiatives.",
    location: "Grand Ballroom, Chicago",
    type: "Fundraiser"
  },
  {
    id: 6,
    title: "Entrepreneurship Bootcamp",
    date: "2024-06-20",
    year: 2024,
    heroPhoto: "https://via.placeholder.com/400x300?text=Entrepreneur+Bootcamp",
    gallery: [
      "https://via.placeholder.com/600x400?text=Pitch+Session",
      "https://via.placeholder.com/600x400?text=Mentoring",
      "https://via.placeholder.com/600x400?text=Networking"
    ],
    shortDescription: "5-day intensive program for aspiring entrepreneurs.",
    longDescription: "An intensive bootcamp covering business planning, funding strategies, and market validation. 60 participants developed business plans and pitched to a panel of investors.",
    location: "Innovation Hub, Denver",
    type: "Workshop"
  },
  {
    id: 7,
    title: "Summer STEM Camp",
    date: "2024-07-15",
    year: 2024,
    heroPhoto: "https://via.placeholder.com/400x300?text=STEM+Camp",
    gallery: [
      "https://via.placeholder.com/600x400?text=Lab+Work",
      "https://via.placeholder.com/600x400?text=Robotics",
      "https://via.placeholder.com/600x400?text=Science+Fair"
    ],
    shortDescription: "Two-week STEM immersion for middle school students.",
    longDescription: "Our summer STEM camp engaged 120 middle school students in hands-on science, technology, engineering, and math activities. Students built robots, conducted experiments, and presented their projects.",
    location: "University of California, Berkeley",
    type: "Workshop"
  },
  {
    id: 8,
    title: "Holiday Toy Drive",
    date: "2024-12-20",
    year: 2024,
    heroPhoto: "https://via.placeholder.com/400x300?text=Toy+Drive",
    gallery: [
      "https://via.placeholder.com/600x400?text=Toy+Collection",
      "https://via.placeholder.com/600x400?text=Wrapping",
      "https://via.placeholder.com/600x400?text=Distribution"
    ],
    shortDescription: "Bringing joy to 800+ children during the holidays.",
    longDescription: "Our annual holiday toy drive collected and distributed gifts to over 800 children from low-income families. Volunteers worked tirelessly to ensure every child received age-appropriate gifts.",
    location: "Community Centers Nationwide",
    type: "Drive"
  },
  {
    id: 9,
    title: "Spring Scholarship Awards",
    date: "2025-05-10",
    year: 2025,
    heroPhoto: "https://via.placeholder.com/400x300?text=Spring+Awards",
    gallery: [
      "https://via.placeholder.com/600x400?text=Award+Ceremony",
      "https://via.placeholder.com/600x400?text=Recipients",
      "https://via.placeholder.com/600x400?text=Families"
    ],
    shortDescription: "Recognizing academic excellence and community service.",
    longDescription: "Our spring scholarship ceremony will honor outstanding students who have demonstrated academic excellence and commitment to community service. We plan to award 200 scholarships this year.",
    location: "Los Angeles Convention Center",
    type: "Graduation"
  },
  {
    id: 10,
    title: "Tech Innovation Summit",
    date: "2025-09-25",
    year: 2025,
    heroPhoto: "https://via.placeholder.com/400x300?text=Tech+Summit",
    gallery: [
      "https://via.placeholder.com/600x400?text=Keynote",
      "https://via.placeholder.com/600x400?text=Panels",
      "https://via.placeholder.com/600x400?text=Demos"
    ],
    shortDescription: "Showcasing student innovations and industry partnerships.",
    longDescription: "A day-long summit featuring student project showcases, industry panels, and networking opportunities. The event will highlight innovations from our tech programs and foster industry partnerships.",
    location: "Silicon Valley Conference Center",
    type: "Workshop"
  }
];

function EventsHeader() {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Events</h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        Discover our community events, celebrations, and milestones. From graduation ceremonies to workshops, 
        each event brings our mission to life and strengthens our community bonds.
      </p>
    </header>
  );
}

function YearTabs({ selectedYear, onYearChange, availableYears }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-100 rounded-lg p-1" role="tablist" aria-label="Filter events by year">
        {availableYears.map(year => (
          <button
            key={year}
            role="tab"
            aria-selected={selectedYear === year}
            onClick={() => onYearChange(year)}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              selectedYear === year
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}

function EventFilter({ selectedType, onTypeChange, availableTypes }) {
  return (
    <div className="mb-8">
      <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-2">
        Filter by Event Type
      </label>
      <select
        id="event-type"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All Events</option>
        {availableTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}

function EventCard({ event, onViewGallery, onReadMore, expandedId }) {
  const isExpanded = expandedId === event.id;
  
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={event.heroPhoto}
          alt={`${event.title} event photo`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <span className="bg-blue-600 px-2 py-1 rounded text-sm font-medium">
            {event.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {new Date(event.date).toLocaleDateString()}
          <span className="mx-2">•</span>
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {event.location}
        </div>
        
        <p className="text-gray-700 mb-4">
          {isExpanded ? event.longDescription : event.shortDescription}
        </p>
        
        <div className="flex space-x-3">
          <button
            onClick={() => onViewGallery(event)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            View Gallery
          </button>
          <button
            onClick={() => onReadMore(event.id)}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    </article>
  );
}

function TimelineView({ events }) {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <div key={event.id} className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-24 text-right">
            <div className="text-sm font-medium text-gray-900">
              {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
            <div className="text-xs text-gray-600">{event.year}</div>
          </div>
          
          <div className="flex-shrink-0 relative">
            <div className="w-3 h-3 bg-blue-600 rounded-full" />
            {index < events.length - 1 && (
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start space-x-4">
              <img
                src={event.heroPhoto}
                alt={event.title}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{event.location}</p>
                <p className="text-gray-700">{event.shortDescription}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function EventGalleryModal({ event, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!event) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex(prev => 
          prev > 0 ? prev - 1 : event.gallery.length - 1
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex(prev => 
          prev < event.gallery.length - 1 ? prev + 1 : 0
        );
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [event, onClose]);

  useEffect(() => {
    if (event && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      focusableElements[0]?.focus();
    }
  }, [event]);

  if (!event) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div ref={modalRef} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 id="gallery-title" className="text-xl font-semibold text-gray-900">
            {event.title} - Gallery
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="Close gallery"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="relative">
          <img
            src={event.gallery[currentImageIndex]}
            alt={`${event.title} photo ${currentImageIndex + 1}`}
            className="w-full h-96 object-cover"
          />
          
          {event.gallery.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImageIndex(prev => 
                  prev > 0 ? prev - 1 : event.gallery.length - 1
                )}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setCurrentImageIndex(prev => 
                  prev < event.gallery.length - 1 ? prev + 1 : 0
                )}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {event.gallery.length}
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-center space-x-2 mb-4">
            {event.gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          
          <p className="text-center text-gray-600">
            {/* TODO: Add real photo captions from database */}
            Photo {currentImageIndex + 1}: Event highlights and memorable moments
          </p>
        </div>
      </div>
    </div>
  );
}

function DownloadPhotosPanel({ selectedYear }) {
  return (
    <div className="bg-blue-50 rounded-lg p-6 mt-12">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Download Event Photos</h3>
      <p className="text-gray-700 mb-4">
        Get high-resolution photos from our {selectedYear} events for your personal use or media coverage.
      </p>
      <div className="space-y-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            // TODO: Connect to real S3/Google Drive download links
            alert("Photo download coming soon! Will connect to cloud storage.");
          }}
          className="block text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label={`Download all ${selectedYear} event photos`}
        >
          📁 All {selectedYear} Events Photos (ZIP - ~50MB)
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            // TODO: Connect to real media kit
            alert("Media kit coming soon!");
          }}
          className="block text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="Download media kit"
        >
          📄 Media Kit & Press Photos (ZIP - ~25MB)
        </a>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        {/* TODO: Add real usage guidelines and attribution requirements */}
        Photos are for personal and editorial use. Please credit "HOPE3 Foundation" when sharing.
      </p>
    </div>
  );
}

export default function Events() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedType, setSelectedType] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "timeline"
  const [expandedEventId, setExpandedEventId] = useState(null);
  const [galleryEvent, setGalleryEvent] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState(6);

  const availableYears = [...new Set(mockEvents.map(event => event.year))].sort((a, b) => b - a);
  const availableTypes = [...new Set(mockEvents.map(event => event.type))];

  // Filter events
  const filteredEvents = mockEvents.filter(event => {
    const yearMatch = event.year === selectedYear;
    const typeMatch = selectedType === "All" || event.type === selectedType;
    return yearMatch && typeMatch;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  const displayedEvents = filteredEvents.slice(0, visibleEvents);

  const handleReadMore = (eventId) => {
    setExpandedEventId(expandedEventId === eventId ? null : eventId);
  };

  const handleLoadMore = () => {
    setVisibleEvents(prev => Math.min(prev + 6, filteredEvents.length));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EventsHeader />
        
        <YearTabs 
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          availableYears={availableYears}
        />
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
          <EventFilter
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            availableTypes={availableTypes}
          />
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">View:</span>
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  viewMode === "grid"
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Grid view"
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("timeline")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  viewMode === "timeline"
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Timeline view"
              >
                Timeline
              </button>
            </div>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No events found for the selected filters.</p>
          </div>
        ) : (
          <>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {displayedEvents.map(event => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onViewGallery={setGalleryEvent}
                    onReadMore={handleReadMore}
                    expandedId={expandedEventId}
                  />
                ))}
              </div>
            ) : (
              <div className="mb-12">
                <TimelineView events={displayedEvents} />
              </div>
            )}

            {visibleEvents < filteredEvents.length && (
              <div className="text-center mb-12">
                <button
                  onClick={handleLoadMore}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  Load More Events ({filteredEvents.length - visibleEvents} remaining)
                </button>
              </div>
            )}
          </>
        )}

        <DownloadPhotosPanel selectedYear={selectedYear} />
      </div>

      <EventGalleryModal
        event={galleryEvent}
        onClose={() => setGalleryEvent(null)}
      />
    </div>
  );
}