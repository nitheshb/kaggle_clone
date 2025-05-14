import React, { useState } from 'react';
import { Search, ChevronUp, ChevronDown, MoreHorizontal, Bell, Filter } from 'lucide-react';

function Discussion() {
  const [activeTab, setActiveTab] = useState('All');
  
  // Sample data for discussion topics
  const pinnedTopics = [
    {
      id: 1,
      title: 'This Competition Has an Official Discord Channel',
      author: 'Addison Howard',
      avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/1095143-kg.jpeg',
      lastComment: '2d ago',
      lastCommentBy: 'jiongdaxia',
      commentCount: 1,
      votes: 5,
      isPinned: true
    }
  ];
  
  const regularTopics = [
    {
      id: 2,
      title: 'Duration & Heart Rate: The Primary Drivers of Calorie Burn',
      author: 'Younus_Mohamed',
      avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/16179447-kg.png?t=2024-09-12-18-47-35',
      lastComment: '1h ago',
      lastCommentBy: 'sdy623',
      commentCount: 2,
      votes: 4
    },
    {
      id: 3,
      title: 'How To Ensemble with RMSLE',
      author: 'Chris Deotte',
      avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/1723677-kg.jpg',
      lastComment: '4h ago',
      lastCommentBy: 'abdelmalek eladjelat',
      commentCount: 3,
      votes: 10
    }
  ];

  return (
    <div className="w-full">
      {/* Header and controls */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Discussion</h1>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 border border-gray-300 rounded-full font-medium flex items-center text-gray-700 text-sm">
            <Bell size={14} className="mr-1" />
            Follow
          </button>
          <button className="px-3 py-1.5 border border-gray-300 rounded-full font-medium flex items-center text-gray-700 text-sm">
            <span className="text-lg mr-1">+</span> New Topic
          </button>
        </div>
      </div>
      
      {/* Original search bar CSS */}
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
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-4">
        <div className="flex">
          <button 
            className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'All' ? 'text-gray-700 border-gray-900' : 'text-gray-500 border-transparent'}`}
            onClick={() => setActiveTab('All')}
          >
            All
          </button>
        </div>
      </div>
      
      {/* Pinned Topics */}
      <div className="mb-6">
        <h3 className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Pinned topics</h3>
        {pinnedTopics.map(topic => (
          <div key={topic.id} className="border-b border-gray-200 py-3">
            <div className="flex justify-between">
              <div className="flex items-start space-x-3 flex-grow">
                <div className="flex-shrink-0 relative">
                  <div 
                    className="w-8 h-8 rounded-full overflow-hidden bg-cover bg-center border border-gray-200"
                    style={{ backgroundImage: `url("${topic.avatar}")` }}
                    title={topic.author}
                  />
                  {topic.isPinned && (
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full border border-gray-200 w-4 h-4 flex items-center justify-center text-[10px]">
                      📌
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center">
                    <h4 className="text-sm font-semibold text-gray-800">{topic.title}</h4>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>{topic.author}</span>
                    <span className="mx-1">•</span>
                    <span>Last <a href="#" className="text-blue-600 hover:underline">comment</a> {topic.lastComment} by {topic.lastCommentBy}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center w-10 justify-center">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <ChevronUp size={12} />
                  </button>
                  <span className="mx-1 text-xs text-gray-700">{topic.votes}</span>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <ChevronDown size={12} />
                  </button>
                </div>
                
                <div className="text-xs text-gray-500 w-16">
                  {topic.commentCount} comment{topic.commentCount !== 1 ? 's' : ''}
                </div>
                
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Regular Topics */}
      <div>
        <h3 className="text-xs text-gray-500 mb-2 uppercase tracking-wider">All other topics</h3>
        {regularTopics.map(topic => (
          <div key={topic.id} className="border-b border-gray-200 py-3">
            <div className="flex justify-between">
              <div className="flex items-start space-x-3 flex-grow">
                <div className="flex-shrink-0">
                  <div 
                    className="w-8 h-8 rounded-full overflow-hidden bg-cover bg-center border border-gray-200"
                    style={{ backgroundImage: `url("${topic.avatar}")` }}
                    title={topic.author}
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-semibold text-gray-800">{topic.title}</h4>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>{topic.author}</span>
                    <span className="mx-1">•</span>
                    <span>Last comment {topic.lastComment} by {topic.lastCommentBy}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center w-10 justify-center">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <ChevronUp size={12} />
                  </button>
                  <span className="mx-1 text-xs text-gray-700">{topic.votes}</span>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <ChevronDown size={12} />
                  </button>
                </div>
                
                <div className="text-xs text-gray-500 w-16">
                  {topic.commentCount} comment{topic.commentCount !== 1 ? 's' : ''}
                </div>
                
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discussion;
