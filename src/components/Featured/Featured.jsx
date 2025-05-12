import React, { useState } from 'react';
import { ChevronDown,X, Grid, LayoutGrid, MoreHorizontal, Bookmark, PlusCircle } from 'lucide-react';

export default function FeaturedPage() {
  // State for view mode and sort options
  const [viewMode, setViewMode] = useState('list');
  const [sortOption, setSortOption] = useState('Recently Launched');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
   
    const [filterActive, setFilterActive] = useState(true);

  // Sort options
  const sortOptions = ['Hotness', 'Recently Launched', 'Closing Soon', 'Recently Completed', 'Rewards', 'Total Teams'];

  // More options menu items
  const moreOptions = [
    { icon: <PlusCircle className="h-4 w-4 mr-2" />, label: "Add to collections" },
    { icon: <Bookmark className="h-4 w-4 mr-2" />, label: "Bookmark" },
  ];

  // Handle dropdown toggle
  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle option selection
  const handleSelectOption = (option) => {
    setSortOption(option);
    setDropdownOpen(false);
  };

  // Handle more options dropdown
  const handleToggleMoreOptions = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Competitions data matching the image
  const competitions = [
    {
      id: 1,
      title: "ARC Prize 2025",
      type: "Code Competition",
      teams: 357,
      timeRemaining: "6 months to go",
      prize: "$725,000",
      image: "/api/placeholder/500/300"
    },
    {
      id: 2,
      title: "Stanford RNA 3D Folding",
      type: "Code Competition",
      teams: 1265,
      timeRemaining: "18 days to go",
      prize: "$75,000",
      image: "/api/placeholder/500/300"
    },
    {
      id: 3,
      title: "Drawing with LLMs",
      type: "Code Competition", 
      teams: 1276,
      timeRemaining: "16 days to go",
      prize: "$50,000",
      image: "/api/placeholder/500/300"
    },
    {
      id: 4,
      title: "March Machine Learning Mania 2025",
      type: "Code Competition",
      teams: 1727,
      timeRemaining: "A month ago",
      prize: "$50,000",
      image: "/api/placeholder/500/300"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-left">Competitions</h1>


    {/* Active Filters */}
        {filterActive && (
          <div className="mb-6 flex items-center gap-2">
            <div className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 shadow-sm border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-700">
              <span className="font-medium">All competitions</span>
              <button
                onClick={() => setFilterActive(false)}
                className="p-1 rounded-full hover:bg-gray-300 transition"
                aria-label="Remove filter"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
        {/* Results Section */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Results</h2>
          <div className="flex items-center gap-4">
            {/* Dropdown component */}
            <div className="relative">
              <button
                className="flex items-center gap-2 text-gray-700"
                onClick={handleToggleDropdown}
                aria-label="Sort options"
              >
                <span>{sortOption}</span>
                <ChevronDown className="h-4 w-4 text-gray-700" />
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-10 border border-gray-200">
                  {sortOptions.map((option) => (
                    <div
                      key={option}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                        option === sortOption ? 'bg-gray-200' : ''
                      }`}
                      onClick={() => handleSelectOption(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
              aria-label="Toggle view mode"
            >
              {viewMode === 'list' ? (
                <Grid className="h-5 w-5 text-gray-700" />
              ) : (
                <LayoutGrid className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Competition Cards - List or Grid View */}
        {viewMode === 'list' ? (
          // List View
          <div className="space-y-4">
            {competitions.map((competition) => (
              <div key={competition.id} className="bg-white shadow rounded-lg flex items-stretch border-t border-gray-100">
                <div className="relative p-4 flex-shrink-0">
                  <img
                    src={competition.image}
                    alt={competition.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow p-4">
                  <h3 className="text-lg font-bold text-gray-800">{competition.title}</h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>{competition.type}</span>
                    <span className="mx-1">·</span>
                    <span>{competition.teams} Teams</span>
                    <span className="mx-1">·</span>
                    <span>{competition.timeRemaining}</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col items-end justify-between">
                  <div className="relative">
                    <button
                      onClick={() => handleToggleMoreOptions(competition.id)}
                      className="p-1 hover:bg-gray-100 rounded-full"
                      aria-label="More options"
                    >
                      <MoreHorizontal className="h-5 w-5 text-gray-500" />
                    </button>

                    {/* More options dropdown */}
                    {activeDropdown === competition.id && (
                      <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-20 border border-gray-200">
                        {moreOptions.map((option, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {option.icon}
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-lg font-bold text-right">
                    {competition.prize}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitions.map((competition) => (
              <div key={competition.id} className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
                <div className="relative">
                  <img
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <div className="bg-white rounded-full p-1">
                      <img src="/api/placeholder/24/24" alt="Logo" className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base font-bold text-gray-800">{competition.title}</h3>
                    <div className="relative">
                      <button
                        onClick={() => handleToggleMoreOptions(`grid-${competition.id}`)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                        aria-label="More options"
                      >
                        <MoreHorizontal className="h-5 w-5 text-gray-500" />
                      </button>

                      {/* More options dropdown */}
                      {activeDropdown === `grid-${competition.id}` && (
                        <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-20 border border-gray-200">
                          {moreOptions.map((option, index) => (
                            <div
                              key={index}
                              className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {option.icon}
                              {option.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">
                    <p>{competition.type}</p>
                    <p>{competition.teams} Teams</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 p-4 flex justify-between items-center">
                  <div className="font-bold">
                    {competition.prize}
                  </div>
                  <div className="text-sm text-gray-500">
                    {competition.timeRemaining}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}