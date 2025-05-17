import React from 'react';

function NavigationTabs({ activeTab, setActiveTab }) {
  const tabs = ['Overview', 'Data', 'Code', 'Models', 'Discussion', 'Leaderboard', 'Rules'];
  
  return (
    <div className="border-b border-gray-200">
      {/* Remove px-4 padding from the nav container */}
      <nav className="flex">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-5 py-3 font-medium text-base relative ${
              activeTab === tab 
                ? 'text-gray-800'
                : 'text-gray-500 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black mx-5"></div>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default NavigationTabs;