// import React from 'react';

// function Models() {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Models</h2>
//       <p className="text-gray-700">Here are the models you can use to predict the calorie expenditure. [Provide model info here]</p>
//     </div>
//   );
// }

// export default Models;




import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal } from 'lucide-react';

function Models() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // New Notebook Icon
  const NewNotebookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.66667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V12C2 12.7364 2.59695 13.3333 3.33333 13.3333H10.6667C11.403 13.3333 12 12.7364 12 12V6.66667H8.66667V2.66667Z" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6.66667H8.66667V2.66667L12 6.66667Z" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.3335 8H10.6668" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5.3335 10.6667H10.6668" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  // Download Icon
  const DownloadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3333 10V12.6667H2.66659V10" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 2.66667V10.6667" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.3335 8L8.00016 10.6667L10.6668 8" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Notebook Score Icon
  const NotebookScoreIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z" stroke="#1A73E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 5V8L10 9.5" stroke="#1A73E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Empty State for Shared With You tab
  const SharedWithYouEmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="mb-6">
        <img 
          src="/Models_Empty_State.png" 
          alt="No models found" 
          className="w-24 h-24"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">No models found</h3>
      <p className="text-gray-600">You are not currently signed in. Sign in to see models shared with you</p>
    </div>
  );

  // Empty State for Your Work tab
  const YourWorkEmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="mb-6">
        <img 
          src="/Models_Empty_State.png" 
          alt="No models found" 
          className="w-24 h-24"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">No models found</h3>
      <p className="text-gray-600">You are not currently signed in. Sign in to see your work</p>
    </div>
  );

  // Render Content based on active tab
  const renderContent = () => {
    if (activeTab === 'Your Work') {
      return <YourWorkEmptyState />;
    }
    
    if (activeTab === 'Shared With You') {
      return <SharedWithYouEmptyState />;
    }

    return (
      <>
        <div className="flex items-center border-t rounded-none p-4">
          <div className="flex items-center space-x-4 flex-grow">
            {/* Google Avatar */}
            <div 
              className="w-12 h-12 rounded-full bg-cover bg-center flex items-center justify-center relative"
              style={{
                backgroundImage: 'url("https://storage.googleapis.com/kaggle-organizations/855/thumbnail.png")',
                backgroundSize: 'cover'
              }}
            >
              <svg width="64" height="64" className="absolute opacity-50">
                <circle 
                  r="30.5" 
                  cx="32" 
                  cy="32" 
                  fill="none" 
                  strokeWidth="3" 
                  stroke="rgb(32, 33, 36)"
                />
              </svg>
            </div>
            
            {/* Model Details */}
            <div className="flex-grow">
              <div className="font-semibold text-gray-800">Gemma 3 · gemma-3-12b-it</div>
              <div className="text-sm text-gray-500">
                Google · Transformers · Gemma is a family of lightweight, state-of-the-art open models from Google, built from the same research and technology used to create the Ge...
              </div>
              <div className="text-sm text-gray-500 mt-1">1 user</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2 relative">
            {/* Number of Users/Activity */}
            <div className="flex justify-center mt-2">
              {/* Three dots menu */}
              <div className="relative">
                <button 
                  className="px-2 py-1 hover:bg-transparent rounded"
                  onClick={toggleMenu}
                >
                  <MoreHorizontal size={20} className="text-gray-500" />
                </button>
                
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                    <div className="py-1">
                      <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                        <NewNotebookIcon />
                        New Notebook
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                        <DownloadIcon />
                        Download
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom border line without number 1 */}
        <div className="relative">
          <div className="border-t border-gray-200"></div>
        </div>
        
        {/* Number 1 badge positioned at the red arrow location */}
        <div className="flex justify-center mt-4">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">1</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Models</h1>
        
        {/* Add search functionality as in Discussion component */}
        <div className="flex gap-2">
          <button className="px-3 py-1.5 border border-gray-300 rounded-full font-medium flex items-center text-gray-700 text-sm">
            <span className="text-lg mr-1">+</span> New Model
          </button>
        </div>
      </div>

      {/* Search bar like in Discussion component */}
      <div className="relative mb-6">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
          <Search size={20} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search models"
            className="w-full bg-transparent border-none focus:outline-none text-gray-700"
          />
          <div className="border-l border-gray-300 pl-3 flex items-center">
            <Filter size={18} className="text-gray-500 mr-1" />
            <span className="text-gray-700 font-medium">Filters</span>
          </div>
        </div>
      </div>
      
      {/* Tabs and Dropdown Container */}
      <div className="border-b border-gray-200 mb-4">
        <div className="flex justify-between items-center">
          {/* Tabs */}
          <div className="flex">
            <button 
              className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'All' ? 'text-gray-700 border-gray-900' : 'text-gray-500 border-transparent'}`}
              onClick={() => setActiveTab('All')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'Your Work' ? 'text-gray-700 border-gray-900' : 'text-gray-500 border-transparent'}`}
              onClick={() => setActiveTab('Your Work')}
            >
              Your Work
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'Shared With You' ? 'text-gray-700 border-gray-900' : 'text-gray-500 border-transparent'}`}
              onClick={() => setActiveTab('Shared With You')}
            >
              Shared With You
            </button>
          </div>

          {/* Dropdown - Only show for All tab */}
          {activeTab === 'All' && (
            <div className="relative">
              <div 
                className="flex items-center space-x-1 text-sm text-gray-500 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Most Usage</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      <NotebookScoreIcon />
                      Best Notebook Score
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      Most Usage
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Content Area */}
      {renderContent()}
    </div>
  );
}

export default Models;