import React, { useState, useEffect } from 'react';

function DonationTracker() {
  const [currentAmount, setCurrentAmount] = useState(0);
  const targetAmount = 500000; // $500K target
  const percentage = Math.min((currentAmount / targetAmount) * 100, 100);

  // Simulate real-time donation updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAmount(prev => {
        const increment = Math.random() * 100 + 50; // Random donation between $50-$150
        return Math.min(prev + increment, targetAmount);
      });
    }, 5000); // Update every 5 seconds

    // Initial amount
    setCurrentAmount(387500); // Starting at $387.5K

    return () => clearInterval(interval);
  }, [targetAmount]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 rounded-3xl shadow-2xl text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">🎯 2024 Fundraising Goal</h3>
        <p className="text-green-100">Help us reach our target to support more students</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Progress</span>
          <span className="text-sm font-medium">{percentage.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-green-400/30 rounded-full h-4 overflow-hidden">
          <div 
            className="bg-white h-full rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="text-3xl font-bold">{formatCurrency(currentAmount)}</div>
          <div className="text-green-100 text-sm">Raised</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">{formatCurrency(targetAmount)}</div>
          <div className="text-green-100 text-sm">Goal</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6 text-center">
        <div className="bg-white/20 rounded-lg p-3">
          <div className="text-lg font-bold">1,247</div>
          <div className="text-xs text-green-100">Donors</div>
        </div>
        <div className="bg-white/20 rounded-lg p-3">
          <div className="text-lg font-bold">23</div>
          <div className="text-xs text-green-100">Days Left</div>
        </div>
        <div className="bg-white/20 rounded-lg p-3">
          <div className="text-lg font-bold">$311</div>
          <div className="text-xs text-green-100">Avg. Donation</div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-white text-green-600 font-bold py-3 px-6 rounded-xl hover:bg-green-50 transition-colors">
          Donate Now
        </button>
        <button className="flex-1 border-2 border-white text-white font-bold py-3 px-6 rounded-xl hover:bg-white hover:text-green-600 transition-colors">
          Share Campaign
        </button>
      </div>

      {/* Live donation feed */}
      <div className="mt-6 pt-6 border-t border-green-400/30">
        <div className="text-sm text-green-100 mb-2">Recent Donations</div>
        <div className="space-y-2 max-h-20 overflow-hidden">
          <div className="flex justify-between text-sm animate-fadeIn">
            <span>Anonymous donated</span>
            <span className="font-semibold">$100</span>
          </div>
          <div className="flex justify-between text-sm animate-fadeIn delay-100">
            <span>Sarah M. donated</span>
            <span className="font-semibold">$50</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationTracker;