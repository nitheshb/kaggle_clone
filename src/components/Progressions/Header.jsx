// Header.jsx
import React from 'react';
import CompetitionNavbarA from '../layout/NavbarA';

// This is your component
const Header = () => {
  return (
    <>
      <CompetitionNavbarA visible={true} />
      <div className="flex justify-between items-center mb-8 pt-16">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Kaggle Progression System</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Kaggle's Progression System uses performance tiers to track 
            your growth as a data scientist on Kaggle. Along the way, you'll 
            earn medals for your achievements and compete for data 
            science glory on live leaderboards.
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
            <img 
              src="/tier-animation-transparent.gif" 
              alt="Progression system logo" 
              className="w-24 h-24 text-white"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Make sure to use default export
export default Header;