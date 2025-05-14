import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react';

function NotebooksInterface() {
  const [activeTab, setActiveTab] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Set notebook badge colors when component mounts
    const setNotebookColors = () => {
      notebooks.forEach(notebook => {
        const badgeInfo = getBadgeColor(notebook.badge);
        notebook.progressColor = badgeInfo.colorValue;
      });
    };
    
    setNotebookColors();
  }, []);

  // Handle tab switching with transition
  const handleTabSwitch = (tabName) => {
    if (activeTab === tabName) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabName);
      setIsTransitioning(false);
    }, 150);
  };
  
  // Data for notebook entries with real avatar URLs
  const notebooks = [
    {
      id: 1,
      title: "S05E05 | Calorie Expenditure | Hill Climbing",
      avatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/16179447-kg.png?t=2024-09-12-18-47-35",
      updated: "1h ago",
      score: "0.05697",
      comments: 2,
      tag: "Predict Calorie Expenditure",
      badge: "Silver",
      progress: 30,
      userName: "Mahdi Ravaghi",
      progressColor: "rgb(108, 117, 125)" // Silver color
    },
    {
      id: 2,
      title: "Calories Prediction | Simple XGBoost-CatBoost | R",
      avatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/13381855-kg.JPG",
      updated: "26m ago",
      score: "0.05731",
      comments: 5,
      tag: "Predict Calorie Expenditure",
      badge: "Silver",
      progress: 60,
      userName: "Ieman Ihsan",
      progressColor: "rgb(108, 117, 125)" // Silver color
    },
    {
      id: 3,
      title: "S5E5: Predict Calorie Expenditure",
      avatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/801148-kg.jpg?t=2025-01-29-15-53-14",
      updated: "3h ago",
      score: "0.05901",
      comments: 0,
      tag: "Predict Calorie Expenditure",
      badge: "Bronze",
      progress: 60,
      userName: "Kheirallah Samaha",
      progressColor: "rgb(180, 83, 9)" // Bronze color
    },
  ];

  // Helper function to get badge color
  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Silver":
        return {
          textClass: "text-gray-600",
          colorValue: "rgb(108, 117, 125)"
        };
      case "Bronze":
        return {
          textClass: "text-amber-700",
          colorValue: "rgb(180, 83, 9)"
        };
      default:
        return {
          textClass: "text-gray-500",
          colorValue: "rgb(107, 114, 128)"
        };
    }
  };

  // Empty state component for "Your Work" tab
  const EmptyNotebooksState = ({ title = "No notebooks found", message = "You're not currently signed in. Sign in to see your work" }) => (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="bg-cyan-100 rounded-full p-6 mb-6">
        <div className="w-24 h-24 relative">
          <svg viewBox="0 0 100 100" width="100" height="100">
            <rect x="15" y="15" width="70" height="70" rx="5" fill="none" stroke="#333" strokeWidth="2" />
            <rect x="25" y="25" width="50" height="5" rx="1" fill="#333" />
            <rect x="25" y="35" width="40" height="2" rx="1" fill="#65D9EF" />
            <rect x="25" y="42" width="30" height="2" rx="1" fill="#333" />
            <rect x="25" y="49" width="50" height="2" rx="1" fill="#333" />
            <rect x="25" y="56" width="20" height="2" rx="1" fill="#A6E22E" />
          </svg>
        </div>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{message}</p>
    </div>
  );

  // Empty state component for "Bookmarks" tab
  const EmptyBookmarksState = () => (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="mb-6">
        <div className="w-32 h-32 relative">
          <svg viewBox="0 0 140 140" width="140" height="140">
            {/* Blue background circle */}
            <circle cx="70" cy="70" r="70" fill="#29B6F6" />
            
            {/* Notebook/book icon */}
            <g transform="translate(35, 30)">
              {/* Book body */}
              <rect x="0" y="5" width="70" height="60" rx="2" fill="#111" />
              
              {/* Book details - white line */}
              <rect x="0" y="15" width="70" height="2" fill="#FFF" opacity="0.3" />
              
              {/* Book pages */}
              <rect x="0" y="0" width="70" height="10" rx="1" fill="#FFF" />
              <rect x="5" y="20" width="20" height="3" fill="#FFF" opacity="0.5" />
              <rect x="5" y="27" width="15" height="3" fill="#FFF" opacity="0.5" />
            </g>
          </svg>
        </div>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">No Bookmarks here</h2>
      <p className="text-gray-600 mb-1">To save a Notebook, look for the Bookmark icon in the overflow menu for that Notebook.</p>
      <p className="text-gray-600">
        <span>View all your bookmarks on your profile.</span>
       
      </p>
    </div>
  );

  // Render notebooks list
  const renderNotebooks = () => (
    <div className="space-y-2">
      {notebooks.map(notebook => (
        <div key={notebook.id} className="border-b border-gray-200 py-3">
          <div className="flex justify-between">
            <div className="flex items-start">
              <div className="mr-3">
                <div className="w-14 h-14 relative">
                  <svg width="56" height="56" viewBox="0 0 64 64" className="absolute">
                    <circle r="28" cx="32" cy="32" fill="none" strokeWidth="3" style={{ stroke: "rgb(241, 243, 244)" }}></circle>
                    <circle
                      r="28"
                      cx="32"
                      cy="32"
                      fill="none"
                      strokeWidth="3"
                      style={{
                        stroke: notebook.progressColor,
                        strokeDasharray: `${2 * Math.PI * 28}`,
                        strokeDashoffset: `${2 * Math.PI * 28 * (1 - notebook.progress / 100)}`,
                        transform: "rotate(-90deg)",
                        transformOrigin: "center",
                      }}
                    ></circle>
                  </svg>
                  <div 
                    className="w-10 h-10 rounded-full bg-cover bg-center absolute"
                    style={{
                      backgroundImage: `url('${notebook.avatar}')`,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)"
                    }}
                    title={notebook.userName}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <h3 className="text-base font-medium text-gray-800">{notebook.title}</h3>
                  <div className="flex items-center ml-2">
                    <ChevronUp size={14} className="text-gray-500" />
                    <span className="ml-1 mr-2 px-1.5 py-0.5 bg-gray-100 rounded text-xs">{notebook.progress}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Updated {notebook.updated} · Score: {notebook.score} · 
                  <a href="#" className="underline ml-1">{notebook.comments} comments</a> · 
                  <a href="#" className="text-blue-700 ml-1">{notebook.tag}</a> +1
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                {notebook.badge === "Silver" && 
                  <span className="inline-block w-2.5 h-2.5 bg-gray-400 rounded-full mr-1"></span>
                }
                {notebook.badge === "Bronze" && 
                  <span className="inline-block w-2.5 h-2.5 bg-amber-600 rounded-full mr-1"></span>
                }
                <span className={`text-xs ${getBadgeColor(notebook.badge).textClass}`}>{notebook.badge}</span>
              </div>
              
              <div className="flex items-center rounded-full border border-gray-200 overflow-hidden mr-2">
                <div className="py-0.5 px-1.5 bg-gray-100 border-r border-gray-200">
                  <ChevronUp size={12} className="text-gray-500" />
                </div>
                <div className="py-0.5 px-2">
                  <span className="font-medium text-sm text-gray-800">{notebook.progress}</span>
                </div>
              </div>
              
              <button className="p-1">
                <MoreHorizontal size={16} className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Render content based on active tab
  const renderContent = () => {
    // Apply opacity class based on transition state
    const opacityClass = isTransitioning ? 'opacity-0' : 'opacity-100';
    const transitionClass = 'transition-opacity duration-150 ease-in-out';
    
    if (activeTab === 'Your Work') {
      return (
        <div className={`${opacityClass} ${transitionClass}`}>
          <EmptyNotebooksState 
            title="No notebooks found" 
            message="You're not currently signed in. Sign in to see your work" 
          />
        </div>
      );
    } else if (activeTab === 'Shared With You') {
      return (
        <div className={`${opacityClass} ${transitionClass}`}>
          <EmptyNotebooksState 
            title="No shared notebooks" 
            message="No one has shared any notebooks with you yet" 
          />
        </div>
      );
    } else if (activeTab === 'Bookmarks') {
      return (
        <div className={`${opacityClass} ${transitionClass}`}>
          <EmptyBookmarksState />
        </div>
      );
    } else {
      return (
        <div className={`${opacityClass} ${transitionClass}`}>
          {renderNotebooks()}
        </div>
      );
    }
  };

  return (
    <div className="w-full">
      <div className="text-left">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Notebooks</h1>
          <button className="px-3 py-1.5 border border-gray-300 rounded-full font-medium flex items-center text-gray-700 text-sm">
            <span className="text-xl mr-1">+</span> New Notebook
          </button>
        </div>

        {/* Search box matching Discussion.jsx */}
        <div className="relative mb-4">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <Search size={20} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search notebooks"
              className="w-full bg-transparent border-none focus:outline-none text-gray-700"
            />
            <div className="border-l border-gray-300 pl-3 flex items-center">
              <Filter size={18} className="text-gray-500 mr-1" />
              <span className="text-gray-700 font-medium">Filters</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-4">
          <div className="flex justify-between">
            <div className="flex">
              <button 
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'All' ? 'border-b-2 text-gray-700 border-gray-900' : 'text-gray-500'}`}
                onClick={() => handleTabSwitch('All')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'Your Work' ? 'border-b-2 text-gray-700 border-gray-900' : 'text-gray-500'}`}
                onClick={() => handleTabSwitch('Your Work')}
              >
                Your Work
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'Shared With You' ? 'border-b-2 text-gray-700 border-gray-900' : 'text-gray-500'}`}
                onClick={() => handleTabSwitch('Shared With You')}
              >
                Shared With You
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'Bookmarks' ? 'border-b-2 text-gray-700 border-gray-900' : 'text-gray-500'}`}
                onClick={() => handleTabSwitch('Bookmarks')}
              >
                Bookmarks
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700">Hotness</span>
              <ChevronDown size={16} className="text-gray-500 ml-1" />
            </div>
          </div>
        </div>

        {/* Content area with minimum height to prevent layout shift */}
        <div className="min-h-[400px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default NotebooksInterface;