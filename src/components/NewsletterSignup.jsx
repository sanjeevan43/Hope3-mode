import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl shadow-2xl text-white text-center animate-scaleIn">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-2">Welcome to the HOPE3 Family!</h3>
        <p className="text-blue-100 mb-4">
          Thank you for subscribing! You'll receive our monthly impact updates and exclusive content.
        </p>
        <div className="flex justify-center space-x-4 text-sm">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Monthly Impact Reports
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Exclusive Events
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-8 rounded-3xl shadow-2xl text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">📧 Stay Connected</h3>
        <p className="text-orange-100">
          Get monthly updates on our impact, success stories, and exclusive volunteer opportunities
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-600 mr-2"></div>
              Subscribing...
            </div>
          ) : (
            'Subscribe to Newsletter'
          )}
        </button>
      </form>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
        <div>
          <div className="font-bold text-lg">5,200+</div>
          <div className="text-orange-200">Subscribers</div>
        </div>
        <div>
          <div className="font-bold text-lg">Monthly</div>
          <div className="text-orange-200">Updates</div>
        </div>
        <div>
          <div className="font-bold text-lg">No Spam</div>
          <div className="text-orange-200">Promise</div>
        </div>
      </div>

      <div className="mt-4 text-xs text-orange-200 text-center">
        We respect your privacy. Unsubscribe at any time.
      </div>
    </div>
  );
}

export default NewsletterSignup;