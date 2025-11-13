import React, { useState, useEffect } from 'react';

function LiveActivityFeed() {
  const [activities, setActivities] = useState([]);
  const [isLive, setIsLive] = useState(true);

  const activityTypes = [
    { type: 'donation', icon: '💝', color: 'text-green-600', bgColor: 'bg-green-100' },
    { type: 'volunteer', icon: '🙋‍♀️', color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { type: 'graduation', icon: '🎓', color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { type: 'milestone', icon: '🎯', color: 'text-orange-600', bgColor: 'bg-orange-100' },
    { type: 'partnership', icon: '🤝', color: 'text-indigo-600', bgColor: 'bg-indigo-100' }
  ];

  const generateActivity = () => {
    const activities = [
      { type: 'donation', message: 'Anonymous donated $100 to Education Fund', time: 'Just now' },
      { type: 'volunteer', message: 'Sarah J. signed up as a mentor', time: '2 min ago' },
      { type: 'graduation', message: 'Maria completed Software Engineering program', time: '5 min ago' },
      { type: 'donation', message: 'Tech Corp donated $5,000', time: '8 min ago' },
      { type: 'milestone', message: 'Reached 26,000 lives impacted!', time: '12 min ago' },
      { type: 'volunteer', message: 'David K. joined Event Planning team', time: '15 min ago' },
      { type: 'partnership', message: 'New partnership with Local University', time: '18 min ago' },
      { type: 'graduation', message: 'James started his own business', time: '22 min ago' },
      { type: 'donation', message: 'Community raised $2,500 in fundraiser', time: '25 min ago' },
      { type: 'volunteer', message: 'Emily R. completed 100 volunteer hours', time: '28 min ago' }
    ];

    return activities[Math.floor(Math.random() * activities.length)];
  };

  useEffect(() => {
    // Initialize with some activities
    const initialActivities = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      ...generateActivity(),
      timestamp: Date.now() - (i * 60000) // Stagger by minutes
    }));
    setActivities(initialActivities);

    // Add new activities periodically
    const interval = setInterval(() => {
      if (isLive) {
        const newActivity = {
          id: Date.now(),
          ...generateActivity(),
          timestamp: Date.now()
        };
        
        setActivities(prev => [newActivity, ...prev.slice(0, 9)]); // Keep only 10 activities
      }
    }, 8000); // New activity every 8 seconds

    return () => clearInterval(interval);
  }, [isLive]);

  const getActivityStyle = (type) => {
    return activityTypes.find(at => at.type === type) || activityTypes[0];
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Just now';
    if (minutes === 1) return '1 min ago';
    return `${minutes} min ago`;
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            {isLive && (
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900">Live Activity Feed</h3>
        </div>
        <button
          onClick={() => setIsLive(!isLive)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            isLive 
              ? 'bg-green-100 text-green-800 hover:bg-green-200' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {isLive ? 'Live' : 'Paused'}
        </button>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities.map((activity, index) => {
          const style = getActivityStyle(activity.type);
          return (
            <div
              key={activity.id}
              className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-500 hover:bg-gray-50 ${
                index === 0 ? 'animate-slideInLeft' : ''
              }`}
            >
              <div className={`flex-shrink-0 w-10 h-10 ${style.bgColor} rounded-full flex items-center justify-center`}>
                <span className="text-lg">{style.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 font-medium">
                  {activity.message}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatTime(activity.timestamp)}
                </p>
              </div>
              {index === 0 && (
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    New
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Updates every 8 seconds</span>
          <span>{activities.length} recent activities</span>
        </div>
      </div>
    </div>
  );
}

export default LiveActivityFeed;