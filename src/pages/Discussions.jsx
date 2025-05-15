import React from 'react';
import { MessageSquare, Search, Filter, ChevronUp, MoreHorizontal, ChevronDown } from 'lucide-react';

const KaggleDiscussionsPage = () => {
  // User profile images
  const userImages = {
    'AtulGoyal1': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    'Zahra_Bashirrr': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/25669412-kg.jpg?t=2025-04-07-06-46-00',
    'Piyush Yadav': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    'Vikas Rajbhar': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    'Muhammad Muneebullah': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    'c-number': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    'Ravi Ramakrishnan': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/8273630-kg.JPG?t=2024-03-26-14-51-52',
    'Hongyan Zhang': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    'Abhishek': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/18182106-kg.png?t=2024-07-22-18-36-26',
    'Prathamesh Bang': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/11212929-kg.jpg?t=2024-02-21-16-16-18',
    'Nitay L': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/18617578-kg.png?t=2024-01-17-21-25-47',
    'Younus_Mohamed': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/15648748-kg.JPG'
  };

  // NEW - Color mapping for each user
  const userColors = {
    'AtulGoyal1': 'rgb(59, 130, 246)', // Blue
    'Zahra_Bashirrr': 'rgb(16, 185, 129)', // Green
    'Piyush Yadav': 'rgb(236, 72, 153)', // Pink
    'Vikas Rajbhar': 'rgb(245, 158, 11)', // Amber
    'Muhammad Muneebullah': 'rgb(139, 92, 246)', // Purple
    'c-number': 'rgb(239, 68, 68)', // Red
    'Ravi Ramakrishnan': 'rgb(14, 165, 233)', // Light Blue
    'Hongyan Zhang': 'rgb(168, 85, 247)', // Purple
    'Abhishek': 'rgb(249, 115, 22)', // Orange
    'Prathamesh Bang': 'rgb(79, 70, 229)', // Indigo
    'Nitay L': 'rgb(236, 72, 153)', // Pink
    'Younus_Mohamed': 'rgb(20, 184, 166)', // Teal
    'Bartley': 'rgb(251, 191, 36)', // Yellow
    'Wayne_127': 'rgb(124, 58, 237)' // Violet
  };

  // Function to get color for a user - fallback to random colors if user not found
  const getUserColor = (username) => {
    if (userColors[username]) {
      return userColors[username];
    }

    // Generate a pseudo-random color based on username string
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }

    const r = (hash & 0xFF) % 200 + 55; // Avoid too dark or too light
    const g = ((hash >> 8) & 0xFF) % 200 + 55;
    const b = ((hash >> 16) & 0xFF) % 200 + 55;

    return `rgb(${r}, ${g}, ${b})`;
  };

  const forumCategories = [
    {
      id: 1,
      title: 'General',
      description: 'Announcements, resources, and interesting discussions',
      iconSrc: "https://www.kaggle.com/static/images/discussion/landing/kaggle-forum_light.svg",
      lastPost: {
        time: '43 minutes ago',
        by: 'AtulGoyal1'
      },
      recentTopics: ['AtulGoyal1', 'AtulGoyal1', 'Zahra_Bashirrr']
    },
    {
      id: 2,
      title: 'Getting Started',
      description: 'The first stop for new Kagglers',
      iconSrc: "https://www.kaggle.com/static/images/discussion/landing/getting-started_light.svg",
      lastPost: {
        time: '19 hours ago',
        by: 'Piyush Yadav'
      },
      recentTopics: ['Piyush Yadav', 'Vikas Rajbhar', 'Muhammad Muneebullah']
    },
    {
      id: 3,
      title: 'Product Feedback',
      description: 'Tell us what you love, hate, and wish for',
      iconSrc: "https://www.kaggle.com/static/images/discussion/landing/product-feedback_light.svg",
      lastPost: {
        time: '9 hours ago',
        by: 'c-number'
      },
      recentTopics: ['c-number', 'Ravi Ramakrishnan', 'Hongyan Zhang']
    },
    {
      id: 4,
      title: 'Celebration',
      description: 'Celebrate achievements, wins, and milestones',
      iconSrc: "https://www.kaggle.com/static/images/discussion/landing/celebration_light.svg",
      lastPost: {
        time: '1 day ago',
        by: 'Nitay L'
      },
      recentTopics: ['Nitay L', 'Younus_Mohamed', 'Piyush Yadav']
    },
    {
      id: 5,
      title: 'Competition Hosting',
      description: 'Discuss hosting competitions, tips, and tricks',
      iconSrc: "https://www.kaggle.com/static/images/discussion/landing/competition-hosting_light.svg",
      lastPost: {
        time: '2 hours ago',
        by: 'Ravi Ramakrishnan'
      },
      recentTopics: ['Ravi Ramakrishnan', 'Vikas Rajbhar', 'Hongyan Zhang']
    },
    {
      id: 6,
      title: 'Q & A',
      description: 'Ask questions, get answers from experts',
      iconSrc: "https://www.kaggle.com/static/images/discussion/landing/q-and-a_light.svg",
      lastPost: {
        time: '5 hours ago',
        by: 'Piyush Yadav'
      },
      recentTopics: ['Piyush Yadav', 'AtulGoyal1', 'Abhishek']
    }
  ];

// Updated UserAvatar component
// Updated UserAvatar component with badge support
const UserAvatar = ({ username, progress = 0, badge = null }) => {
  const imageUrl = userImages[username] || 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png';
  const progressColor = getUserColor(username);
  const badgeColor = badge ? getBadgeColor(badge) : null;

  return (
    <div className="relative w-6 h-6 flex-shrink-0">
      <svg width="24" height="24" viewBox="0 0 24 24" className="absolute top-0 left-0">
        <circle 
          r="11" 
          cx="12" 
          cy="12" 
          fill="none" 
          strokeWidth="2" 
          className="stroke-gray-200"
        />
        {progress > 0 && (
          <circle
            r="11"
            cx="12"
            cy="12"
            fill="none"
            strokeWidth="2"
            stroke={progressColor}
            strokeDasharray={2 * Math.PI * 11}
            strokeDashoffset={2 * Math.PI * 11 * (1 - progress / 100)}
            transform="rotate(-90 12 12)"
            strokeLinecap="round"
          />
        )}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={`Avatar for ${username}`}
          className="w-4 h-4 rounded-full object-cover"
        />
      </div>
      {badge && (
        <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white" 
             style={{ backgroundColor: badgeColor.colorValue }} />
      )}
    </div>
  );
};

// Updated UserAvatarLarge component
const UserAvatarLarge = ({ username, progress = 0 }) => {
  const imageUrl = userImages[username] || 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png';
  const progressColor = getUserColor(username);

  return (
    <div className="relative w-12 h-12 flex-shrink-0">
      <svg width="48" height="48" viewBox="0 0 48 48" className="absolute top-0 left-0">
        <circle 
          r="22" 
          cx="24" 
          cy="24" 
          fill="none" 
          strokeWidth="3" 
          className="stroke-gray-200"
        />
        {progress > 0 && (
          <circle
            r="22"
            cx="24"
            cy="24"
            fill="none"
            strokeWidth="3"
            stroke={progressColor}
            strokeDasharray={2 * Math.PI * 22}
            strokeDashoffset={2 * Math.PI * 22 * (1 - progress / 100)}
            transform="rotate(-90 24 24)"
            strokeLinecap="round"
          />
        )}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={`Avatar for ${username}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

  // Helper function to get badge color
  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Silver":
        return {
          textClass: "text-gray-500",
          bgClass: "bg-gray-400",
          colorValue: "rgb(108, 117, 125)"
        };
      case "Bronze":
        return {
          textClass: "text-amber-600",
          bgClass: "bg-amber-500",
          colorValue: "rgb(180, 83, 9)"
        };
      case "Gold":
        return {
          textClass: "text-yellow-500",
          bgClass: "bg-yellow-400",
          colorValue: "rgb(217, 119, 6)"
        };
      default:
        return {
          textClass: "text-gray-400",
          bgClass: "bg-gray-300",
          colorValue: "rgb(107, 114, 128)"
        };
    }
  };

  // Discussion items data with added progress percentage
  const discussionItems = [
    {
      id: 1,
      title: "Duration & Heart-Rate: The Primary Drivers of Calorie Burn",
      author: "Younus_Mohamed",
      competition: "Predict Calorie Expenditure",
      lastComment: "4h ago by Abdishakur Mohamed Ali",
      upvotes: 53,
      comments: 26,
      progress: 65 // Added progress percentage
    },
    {
      id: 2,
      title: "HGNet-V2 Encoder - [CV 55.6 LB 60.9]",
      author: "Bartley",
      authorAvatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/5570735-kg.png?t=2024-03-12-19-54-34",
      competition: "Yale/UNC-CH - Geophysical Waveform Inversion",
      lastComment: "3h ago by Wayne_127",
      upvotes: 21,
      comments: 16,
      progress: 40 // Added progress percentage
    },
    {
      id: 3,
      title: "May12 update analysis",
      author: "Ravi Ramakrishnan",
      competition: "Jane Street Real-Time Market Data Forecasting",
      lastComment: "6h ago by Wayne_127",
      upvotes: 13,
      comments: 4,
      progress: 85 // Added progress percentage
    },
    {
      id: 4,
      title: "Enhanced Feature Engineering for Satellite Imagery Classification",
      author: "Zahra_Bashirrr",
      competition: "Earth Observation Challenge",
      lastComment: "2h ago by Abhishek",
      upvotes: 32,
      comments: 19,
      progress: 75
    },
    {
      id: 5,
      title: "Optimizing transformer models for text classification",
      author: "Piyush Yadav",
      competition: "NLP Text Analysis Competition",
      lastComment: "5h ago by Hongyan Zhang",
      upvotes: 45,
      comments: 23,
      progress: 60
    }
  ];

  return (
    <div className="bg-white font-sans" style={{ minHeight: "150vh", width: "100%" }}>
      {/* Main Content */}
      <div className="w-full mx-auto px-4 sm:px-6 pt-8 pb-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Discussions</h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Discuss the Kaggle platform & machine learning topics – this 
              includes sharing feedback, asking questions, and more.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <img src="https://www.kaggle.com/static/images/discussion/landing/header-light.svg" alt="Discussions" className="w-48 sm:w-56" />
          </div>
        </div>

        {/* Forums Section */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-700" />
            <h2 className="text-xl sm:text-xl font-bold text-gray-900">Forums</h2>
          </div>

          {/* Forum Categories */}
          <div className="space-y-4">
            {forumCategories.map(category => (
              <div key={category.id} className="border-b border-gray-200 pb-4">
  <div className="flex flex-col sm:flex-row">
    {/* Left - Icon */}
    <div className="mr-4 mb-3 sm:mb-0">
      <div className="w-12 h-12 flex items-center justify-center">
        <img src={category.iconSrc} alt="" width="48" height="48" />
      </div>
    </div>

    {/* Middle - Title and Description */}
    <div className="flex-1">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900">{category.title}</h3>
      <p className="text-sm text-gray-700 mt-1">{category.description}</p>
      <div className="mt-1 text-xs text-gray-600 flex items-center">
        last <a href="#" className="text-blue-600 hover:underline ml-1">post</a> 
        <span className="ml-1">{category.lastPost.time} by {category.lastPost.by}</span>
      </div>
    </div>

    {/* Right - Recent Topics - Now properly aligned */}
    <div className="ml-auto flex flex-col justify-end">
      <div className="flex justify-end mb-1">
        {category.recentTopics.map((user, index) => (
          <div key={index} className={index > 0 ? "-ml-1" : ""}>
            <UserAvatar username={user} />
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-600">
        Recent topics by {category.recentTopics.join(', ')}
      </div>
    </div>
  </div>
</div>
            ))}
          </div>
        </div>

        {/* Discussion from across Kaggle Section */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-700" />
            <h2 className="text-xl sm:text-xl font-bold text-gray-900">Discussion from across Kaggle</h2>
          </div>

          {/* Updated Search Bar with Filter */}
          <div className="relative mb-6">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
              <Search size={16} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search discussions"
                className="w-full bg-transparent border-none focus:outline-none text-gray-700 text-xs sm:text-sm"
              />
              <div className="border-l border-gray-300 pl-3 flex items-center">
                <Filter size={14} className="text-gray-500 mr-1" />
                <span className="text-gray-700 font-medium text-xs sm:text-sm">Filters</span>
              </div>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <button className="px-3 py-1 border border-gray-300 rounded-full text-xs font-medium">Beginner</button>
            <button className="px-3 py-1 border border-gray-300 rounded-full text-xs font-medium">Data Visualization</button>
            <button className="px-3 py-1 border border-gray-300 rounded-full text-xs font-medium">Computer Vision</button>
            <button className="px-3 py-1 border border-gray-300 rounded-full text-xs font-medium">NLP</button>
            <button className="px-3 py-1 border border-gray-300 rounded-full text-xs font-medium">Neural Networks</button>
            <button className="px-3 py-1 border border-gray-300 rounded-full text-xs font-medium">More Filters</button>
            {/* Filter Section - FIXED - Added custom dropdown with icon positioned properly */}
            <div className="flex flex-wrap items-center gap-2 ml-auto mt-4 md:mt-0">
              <div className="relative">
                <div className="flex items-center text-sm text-gray-700 cursor-pointer">
                  <span>Hotness</span>
                  <ChevronDown size={14} className="ml-1 text-gray-500" />
                </div>
                {/* Dropdown items would appear here */}
              </div>
            </div>
          </div>

          {/* Discussion Items with Updated Design and circular avatar progress */}
          <div className="space-y-4 border-t border-gray-200 pt-4">
            {discussionItems.map(item => (
              <div key={item.id} className="flex items-start gap-3 py-4 border-b border-gray-200">
                {/* Avatar with circular progress */}
                <UserAvatarLarge 
                  username={item.author} 
                  progress={item.progress} 
                  badge={item.badge} 
                />
                
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <div className="text-xs text-gray-600">
                    <a href="#" className="text-blue-600 hover:underline">{item.author}</a> · in <a href="#" className="text-blue-600 hover:underline">{item.competition}</a> · Last comment {item.lastComment}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <div className="flex items-center">
                    {item.badge && (
                      <>
                        <span className={`inline-block w-2 h-2 ${getBadgeColor(item.badge).bgClass} rounded-full mr-1`}></span>
                        <span className={`${getBadgeColor(item.badge).textClass}`}>{item.badge}</span>
                      </>
                    )}
                  </div>
                  
                  {/* Stacked upvote counter and comments */}
                  <div className="flex flex-col items-center">
                    {/* Upvote button with count */}
                    <div className="flex items-center rounded-full border border-gray-200 overflow-hidden mb-1">
                      <div className="py-0.5 px-1.5 bg-gray-100 border-r border-gray-200">
                        <ChevronUp size={12} className="text-gray-500" />
                      </div>
                      <div className="py-0.5 px-2">
                        <span className="font-medium text-xs text-gray-800">{item.upvotes}</span>
                      </div>
                    </div>
                    {/* Comments count */}
                    <div className="text-2xs text-gray-500">{item.comments} comments</div>
                  </div>
                  
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <MoreHorizontal size={14} className="text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaggleDiscussionsPage;