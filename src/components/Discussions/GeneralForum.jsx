import React from 'react';
import { useState } from 'react';
import { Bell, Search, ChevronDown, Filter, MoreHorizontal } from 'lucide-react';
import CompetitionNavbarA from '../../components/layout/NavbarA';
import { useLocation } from 'react-router-dom';

const ForumPage = () => {
  const [navbarVisible] = useState(true);
  // Get location state with the category title
  const location = useLocation();
  const { categoryTitle = "General", categoryDescription = "Announcements, resources, and interesting discussions" } = location.state || {};

  const pinnedTopics = [
    {
      id: 1,
      title: 'Official Kaggle Badge List',
      author: 'Myles O\'Neill',
      lastComment: {
        time: '6h ago',
        by: 'togenuts'
      },
      commentCount: 662,
      upvotes: 603,
      isPinned: true
    },
    {
      id: 2,
      title: 'Official Kaggle Award List',
      author: 'Myles O\'Neill',
      lastComment: {
        time: '3d ago',
        by: 'Mahdi Mashayekhi'
      },
      commentCount: 249,
      upvotes: 277,
      isPinned: true
    },
    {
      id: 3,
      title: 'Meetup Organizer Award',
      author: 'Myles O\'Neill',
      lastComment: {
        time: '3d ago',
        by: 'Zafar'
      },
      commentCount: 86,
      upvotes: 112,
      isPinned: true
    }
  ];

  const forumTopics = [
    {
      id: 4,
      title: 'Analyze your current role well for organic career development in AI-ML at your current organization',
      author: 'Ravi Ramakrishnan',
      avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/8273630-kg.JPG?t=2024-03-26-14-51-52',
      lastComment: {
        time: '8h ago',
        by: 'MOHAMMAD HARIS'
      },
      commentCount: 23,
      upvotes: 30,
      isPinned: false,
      percentage: 75
    },
    {
      id: 5,
      title: 'Real Talk: Data Science Portfolios – Effective or Just Extra Work?',
      author: 'Younus_Mohamed',
      avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/15648748-kg.JPG',
      lastComment: {
        time: '4h ago',
        by: 'Rahul Rawal'
      },
      commentCount: 41,
      upvotes: 28,
      isPinned: false,
      percentage: 60
    },
    {
      id: 6,
      title: 'AI AND PRIVACY: UNDERSTANDING THE CONCERNS AND FINDING SOLUTIONS',
      author: 'Manav Joshi 555',
      avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/18814255-kg.jpg?t=2025-01-22-15-23-29',
      lastComment: {
        time: '26s ago',
        by: 'Evil Spirit05'
      },
      commentCount: 13,
      upvotes: 7,
      isPinned: false,
      percentage: 40
    },
    {
      id: 7,
      title: 'Choosing your career path in AI-ML - boon/ bane? - Part1',
      author: 'Ravi Ramakrishnan',
      avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/8273630-kg.JPG?t=2024-03-26-14-51-52',
      lastComment: {
        time: '3h ago',
        by: 'Ratinderdeep Singh'
      },
      commentCount: 7,
      upvotes: 7,
      isPinned: false,
      percentage: 25
    },
    {
      id: 8,
      title: 'Why MACHINE LEARNING Is No Friend To Small Business 😓 📉',
      author: 'Adnan Alaref',
      avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/22346751-kg.jpeg?t=2024-11-24-05-27-47',
      lastComment: {
        time: '17h ago',
        by: 'Muhammad Ehsan'
      },
      commentCount: 15,
      upvotes: 9,
      isPinned: false,
      percentage: 50
    }
  ];

  const getPercentageColor = (percentage) => {
    if (percentage >= 75) return '#10B981'; // Green
    if (percentage >= 50) return '#3B82F6'; // Blue
    if (percentage >= 25) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  const renderAuthorAvatar = (author, isPinned, avatarUrl, percentage) => {
    return (
      <div className="relative w-10 h-10">
        {/* Avatar with direct image URL */}
        <div className="w-full h-full rounded-full overflow-hidden">
          <img 
            src={avatarUrl || "https://storage.googleapis.com/kaggle-avatars/thumbnails/304806-kg.jpg"} 
            alt={author} 
            className="w-full h-full object-cover" 
          />
        </div>
        {/* Circular progress border for pin indicator or percentage */}
        <div className="absolute -top-1 -left-1 w-12 h-12 rounded-full">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="4"
            />
            {/* Progress circle */}
            {isPinned ? (
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#3b82f6" // Blue color for pinned
                strokeWidth="4"
                strokeDasharray="301.6" // 2πr ≈ 301.6 (for r=48)
                strokeDashoffset="60.32" // 20% of 301.6 ≈ 60.32 (showing 80%)
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            ) : (
              percentage !== undefined && (
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke={getPercentageColor(percentage)}
                  strokeWidth="4"
                  strokeDasharray="301.6"
                  strokeDashoffset={301.6 * (1 - percentage / 100)}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              )
            )}
          </svg>
        </div>
        
        {/* Pin emoji for pinned topics */}
        {isPinned && (
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full w-5 h-5 flex items-center justify-center text-xs border border-gray-200 shadow-sm">
            📌
          </div>
        )}

      </div>
    );
  };

  const renderCompactStats = (upvotes, commentCount) => {
    return (
      <div className="flex flex-col items-end">
        {/* Voting buttons */}
        <div className="flex items-center border rounded-full overflow-hidden bg-white mb-1">
          <button className="px-2 py-1 hover:bg-gray-100">
            <ChevronDown size={16} className="rotate-180" />
          </button>
          <div className="h-4 w-px bg-gray-300"></div>
          <span className="px-1 font-medium text-gray-800">{upvotes}</span>
          <div className="h-4 w-px bg-gray-300"></div>
          <button className="px-2 py-1 hover:bg-gray-100">
            <ChevronDown size={16} />
          </button>
        </div>
        
        {/* Comment count aligned with author line */}
        <div className="text-sm text-gray-600">
          <span>{commentCount} comments</span>
          <button className="ml-2 text-gray-400 hover:text-gray-600">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
    );
  };

  const renderTopicItem = (topic) => (
    <div key={topic.id} className="border-b border-gray-200 py-4">
      <div className="flex justify-between">
        <div className="flex">
          {/* Author Avatar with pin indicator or percentage */}
          {renderAuthorAvatar(topic.author, topic.isPinned, topic.avatarUrl, topic.percentage)}
          
          {/* Topic Title & Author */}
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{topic.title}</h3>
            <div className="flex items-center">
              <div className="text-sm text-gray-600">
                <span className="text-blue-600">{topic.author}</span> · Last comment <span className="text-blue-600">{topic.lastComment.time}</span> by <span className="text-blue-600">{topic.lastComment.by}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats with comment count aligned */}
        {renderCompactStats(topic.upvotes, topic.commentCount)}
      </div>
    </div>
  );

  return (
    <>
      {/* Include the CompetitionNavbarA component */}
      <CompetitionNavbarA visible={navbarVisible} />
      
      {/* Main content with top margin to account for fixed navbar */}
      <div className="max-w-screen-xl mx-aut px-7 py-4 mt-0">
        {/* Breadcrumb */}
        <div className="mb-6">
          <a href="/discussions" className="text-black-600 text-sm hover:underline">All forums</a>
        </div>

        {/* Forum Header - DYNAMIC TITLE HERE */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{categoryTitle}</h1>
            <p className="text-gray-600">{categoryDescription}</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600">
              <Bell size={18} />
              <span>Follow</span>
              <ChevronDown size={18} />
            </button>
            <button className="flex items-center gap-3 px-5 py-2.5 bg-black text-white font-bold rounded-full cursor-pointer">
              <span className="text-lg leading-none">+</span>
              <span>New Topic</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <Search size={20} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search discussions"
              className="w-full bg-transparent border-none focus:outline-none text-gray-700"
            />
            <div className="border-l border-gray-300 pl-3 flex items-center">
              <Filter size={18} className="text-gray-500 mr-1" />
              <span className="text-gray-700 font-medium">Filters</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-between items-center border-b border-gray-200 mb-4">
          <div className="flex">
            <button className="px-4 py-2 text-gray-900 font-medium border-b-2 border-gray-900">
              All
            </button>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-700">Hotness</span>
            <ChevronDown size={18} />
          </div>
        </div>

        {/* Pinned Topics */}
        <div className="mb-6">
          <h3 className="text-sm text-gray-600 mb-4">Pinned topics</h3>
          <div className="space-y-2">
            {pinnedTopics.map(topic => renderTopicItem(topic))}
          </div>
        </div>

        {/* All Other Topics */}
        <div className="mb-6">
          <h3 className="text-sm text-gray-600 mb-4">All other topics</h3>
          <div className="space-y-2">
            {forumTopics.map(topic => renderTopicItem(topic))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumPage;