import React, { useState, useRef, useEffect } from 'react';
import { Search, Filter, ChevronDown, MoreHorizontal, ChevronUp, Bell, Bookmark, Plus, X } from 'lucide-react';

export default function KaggleBlog() {
  const [hotnessDropdownOpen, setHotnessDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Hotness');
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [recency, setRecency] = useState('Last 30 Days');
  const [author, setAuthor] = useState('Admin');
  const [searchTags, setSearchTags] = useState('');
  const [activeFilters, setActiveFilters] = useState(0);
  
  const filterRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFiltersOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const sortOptions = [
    'Hotness',
    'Recent Comments',
    'Recent Posted',
    'Most Votes',
    'Most Comments'
  ];

  const recencyOptions = [
    'Last 30 Days',
    'Last 7 Days',
    'Today'
  ];

  const authorOptions = [
    'Admin',
    'Meg Risdal',
    'Nate Keating',
    'Will Cukierski'
  ];

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setHotnessDropdownOpen(false);
  };

  const handleMoreOptions = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
  
  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };
  
  const handleRecencySelect = (option) => {
    setRecency(option);
  };
  
  const handleAuthorSelect = (option) => {
    setAuthor(option);
  };
  
  const handleApplyFilters = () => {
    // Count active filters
    let count = 0;
    if (recency !== 'Last 30 Days') count++;
    if (author !== 'Admin') count++;
    if (searchTags !== '') count++;
    
    setActiveFilters(count);
    setFiltersOpen(false);
  };
  
  const handleClearFilters = () => {
    setRecency('Last 30 Days');
    setAuthor('Admin');
    setSearchTags('');
    setActiveFilters(0);
    setFiltersOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Kaggle Blog</h1>
              <p className="text-gray-600 mt-1">Keep up with Kaggle news and updates.</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              <Bell size={16} />
              <span>Follow</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search and Filters in same bar */}
        <div className="flex items-center gap-0 mb-8 relative">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search blog posts"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-l-lg border-r-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative" ref={filterRef}>
            <button 
              onClick={toggleFilters}
              className={`flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-r-lg text-gray-700 hover:bg-gray-50 ${filtersOpen ? 'bg-gray-100' : ''} ${activeFilters > 0 ? 'border-gray-900 text-gray-900' : ''}`}
            >
              <Filter size={16} />
              <span>Filters</span>
              {activeFilters > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-900 text-white text-xs rounded-full ml-1">
                  {activeFilters}
                </span>
              )}
            </button>
            
            {filtersOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20 w-72 p-6">
                {/* Recency Filter */}
                <div className="mb-6">
                  <h4 className="uppercase text-xs font-medium text-gray-800 mb-3">RECENCY</h4>
                  <div className="flex flex-wrap gap-2">
                    {recencyOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleRecencySelect(option)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          recency === option 
                            ? 'bg-gray-900 text-white' 
                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Author Filter */}
                <div className="mb-6">
                  <h4 className="uppercase text-xs font-medium text-gray-800 mb-3">AUTHOR</h4>
                  <div className="flex flex-wrap gap-2">
                    {authorOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAuthorSelect(option)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          author === option 
                            ? 'bg-gray-900 text-white' 
                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Tags Filter */}
                <div className="mb-8">
                  <h4 className="uppercase text-xs font-medium text-gray-800 mb-3">TAGS</h4>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Search for tags"
                      value={searchTags}
                      onChange={(e) => setSearchTags(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-gray-400 text-sm"
                    />
                  </div>
                </div>
                
                {/* Filter Actions */}
                <div className="flex justify-end gap-4">
                  <button
                    onClick={handleClearFilters}
                    className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Clear
                  </button>
                  <button
                    onClick={handleApplyFilters}
                    className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation and Sort */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex">
            <button className="px-4 py-2 text-gray-900 font-medium border-b-2 border-gray-900">
              All
            </button>
          </div>
          <div className="relative">
            <button 
              onClick={() => setHotnessDropdownOpen(!hotnessDropdownOpen)}
              className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-md"
            >
              <span>{selectedSort}</span>
              <ChevronDown size={16} className={`transition-transform ${hotnessDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {hotnessDropdownOpen && (
              <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-48">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSortSelect(option)}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                      selectedSort === option ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {/* Post 1 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <img
                  src="/Improving Hugging Face Models kaggle.jpeg"
                  alt="Meg Risdal"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    Improving Hugging Face Model Access for Kaggle Users
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span className="text-blue-600 hover:underline cursor-pointer font-medium">Meg Risdal</span>
                    <span>·</span>
                    <span>Last comment 12h ago by</span>
                    <span className="text-blue-600 hover:underline cursor-pointer font-medium">Wadiel Rahman</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600 ml-4">
                <div className="flex items-center border border-gray-200 rounded-md">
                  <button className="p-2 hover:bg-gray-50 border-r border-gray-200">
                    <ChevronUp size={16} className="text-gray-700" />
                  </button>
                  <div className="px-3 py-1 font-medium text-gray-900 min-w-8 text-center">35</div>
                  <button className="p-2 hover:bg-gray-50 border-l border-gray-200">
                    <ChevronDown size={16} className="text-gray-700" />
                  </button>
                </div>
                <span className="text-gray-500">13 comments</span>
                <div className="relative">
                  <button
                    onClick={() => handleMoreOptions(0)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <MoreHorizontal size={16} />
                  </button>
                  {openDropdownIndex === 0 && (
                    <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-48">
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 first:rounded-t-lg">
                        <Plus size={14} />
                        Add to Collection
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 last:rounded-b-lg">
                        <Bookmark size={14} />
                        Bookmark
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <img
                  src="/Introducing the OpenAI to Z Challenge.jpeg"
                  alt="Nate Keating"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    Introducing the OpenAI to Z Challenge: Kaggle's First Hackathon!
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span className="text-blue-600 hover:underline cursor-pointer font-medium">Nate Keating</span>
                    <span>·</span>
                    <span>Posted 4d ago</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600 ml-4">
                <div className="flex items-center border border-gray-200 rounded-md">
                  <button className="p-2 hover:bg-gray-50 border-r border-gray-200">
                    <ChevronUp size={16} className="text-gray-700" />
                  </button>
                  <div className="px-3 py-1 font-medium text-gray-900 min-w-8 text-center">8</div>
                  <button className="p-2 hover:bg-gray-50 border-l border-gray-200">
                    <ChevronDown size={16} className="text-gray-700" />
                  </button>
                </div>
                <span className="text-gray-500"></span>
                <div className="relative">
                  <button
                    onClick={() => handleMoreOptions(1)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <MoreHorizontal size={16} />
                  </button>
                  {openDropdownIndex === 1 && (
                    <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-48">
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 first:rounded-t-lg">
                        <Plus size={14} />
                        Add to Collection
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 last:rounded-b-lg">
                        <Bookmark size={14} />
                        Bookmark
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <img
                  src="/Kaggle Blog We are Back.jpeg"
                  alt="Nate Keating"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    Kaggle Blog: We're Back!
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span className="text-blue-600 hover:underline cursor-pointer font-medium">Nate Keating</span>
                    <span>·</span>
                    <span>Posted 7d ago</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600 ml-4">
                <div className="flex items-center border border-gray-200 rounded-md">
                  <button className="p-2 hover:bg-gray-50 border-r border-gray-200">
                    <ChevronUp size={16} className="text-gray-700" />
                  </button>
                  <div className="px-3 py-1 font-medium text-gray-900 min-w-8 text-center">13</div>
                  <button className="p-2 hover:bg-gray-50 border-l border-gray-200">
                    <ChevronDown size={16} className="text-gray-700" />
                  </button>
                </div>
                <span className="text-gray-500"></span>
                <div className="relative">
                  <button
                    onClick={() => handleMoreOptions(2)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <MoreHorizontal size={16} />
                  </button>
                  {openDropdownIndex === 2 && (
                    <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-48">
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 first:rounded-t-lg">
                        <Plus size={14} />
                        Add to Collection
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 last:rounded-b-lg">
                        <Bookmark size={14} />
                        Bookmark
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-medium">
            1
          </div>
        </div>
      </div>
    </div>
  );
}
