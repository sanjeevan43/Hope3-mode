import React, { useState, useEffect } from 'react';

function ImpactMap() {
  const [activeRegion, setActiveRegion] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({});

  const regions = [
    {
      id: 'north-america',
      name: 'North America',
      countries: 3,
      beneficiaries: 8500,
      programs: 12,
      color: '#3b82f6',
      position: { top: '25%', left: '20%' }
    },
    {
      id: 'south-america',
      name: 'South America',
      countries: 5,
      beneficiaries: 3200,
      programs: 8,
      color: '#10b981',
      position: { top: '55%', left: '25%' }
    },
    {
      id: 'europe',
      name: 'Europe',
      countries: 8,
      beneficiaries: 4100,
      programs: 15,
      color: '#f59e0b',
      position: { top: '20%', left: '50%' }
    },
    {
      id: 'africa',
      name: 'Africa',
      countries: 12,
      beneficiaries: 6800,
      programs: 18,
      color: '#ef4444',
      position: { top: '45%', left: '52%' }
    },
    {
      id: 'asia',
      name: 'Asia',
      countries: 15,
      beneficiaries: 12400,
      programs: 25,
      color: '#8b5cf6',
      position: { top: '35%', left: '70%' }
    },
    {
      id: 'oceania',
      name: 'Oceania',
      countries: 2,
      beneficiaries: 900,
      programs: 4,
      color: '#06b6d4',
      position: { top: '65%', left: '80%' }
    }
  ];

  useEffect(() => {
    // Animate stats when component mounts
    const timer = setTimeout(() => {
      regions.forEach((region, index) => {
        setTimeout(() => {
          setAnimatedStats(prev => ({
            ...prev,
            [region.id]: true
          }));
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [regions]);

  const totalStats = regions.reduce((acc, region) => ({
    countries: acc.countries + region.countries,
    beneficiaries: acc.beneficiaries + region.beneficiaries,
    programs: acc.programs + region.programs
  }), { countries: 0, beneficiaries: 0, programs: 0 });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">🌍 Global Impact Map</h3>
          <p className="text-blue-200">Our reach across the world</p>
        </div>

        {/* World Map Representation */}
        <div className="relative bg-slate-800/50 rounded-2xl p-8 mb-8 min-h-[300px] border border-slate-700">
          {/* Simplified world map background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              <path
                d="M150,100 Q200,80 250,100 L300,120 Q350,100 400,120 L450,100 Q500,80 550,100 L600,120 Q650,100 700,120 L750,100 Q800,80 850,100"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M100,200 Q150,180 200,200 L250,220 Q300,200 350,220 L400,200 Q450,180 500,200 L550,220 Q600,200 650,220 L700,200 Q750,180 800,200"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="animate-pulse delay-500"
              />
              <path
                d="M120,300 Q170,280 220,300 L270,320 Q320,300 370,320 L420,300 Q470,280 520,300 L570,320 Q620,300 670,320 L720,300 Q770,280 820,300"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="animate-pulse delay-1000"
              />
            </svg>
          </div>

          {/* Region Markers */}
          {regions.map((region) => (
            <div
              key={region.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={region.position}
              onMouseEnter={() => setActiveRegion(region)}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 hover:scale-150 ${
                  animatedStats[region.id] ? 'animate-pulse' : ''
                }`}
                style={{ backgroundColor: region.color }}
              >
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-75"
                  style={{ backgroundColor: region.color }}
                ></div>
              </div>
              
              {/* Tooltip */}
              {activeRegion?.id === region.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white p-3 rounded-lg shadow-xl whitespace-nowrap animate-fadeIn">
                  <div className="font-bold text-sm">{region.name}</div>
                  <div className="text-xs space-y-1 mt-1">
                    <div>{region.countries} countries</div>
                    <div>{region.beneficiaries.toLocaleString()} beneficiaries</div>
                    <div>{region.programs} programs</div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-300">
              {totalStats.countries}
            </div>
            <div className="text-sm text-blue-200">Countries</div>
          </div>
          <div className="text-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold text-green-300">
              {totalStats.beneficiaries.toLocaleString()}
            </div>
            <div className="text-sm text-green-200">Beneficiaries</div>
          </div>
          <div className="text-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold text-orange-300">
              {totalStats.programs}
            </div>
            <div className="text-sm text-orange-200">Programs</div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {regions.map((region) => (
            <div key={region.id} className="flex items-center space-x-2 text-sm">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: region.color }}
              ></div>
              <span className="text-gray-300">{region.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImpactMap;