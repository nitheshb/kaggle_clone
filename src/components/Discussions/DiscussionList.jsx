import React from 'react';
import { MessageSquare, Search, Filter, ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react';
import { UserAvatarLarge, getBadgeColor } from './UserComponents';

const DiscussionList = ({ discussions }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-700" />
        <h2 className="text-xl sm:text-xl font-bold text-gray-900">Discussion from across Kaggle</h2>
      </div>

      {/* Search Bar with Filter */}
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
        
        {/* Filter Dropdown */}
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

      {/* Discussion Items */}
      <div className="space-y-4 border-t border-gray-200 pt-4">
        {discussions.map(item => (
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
  );
};

export default DiscussionList;