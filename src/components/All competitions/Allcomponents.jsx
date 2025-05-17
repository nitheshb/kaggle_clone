import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Grid, LayoutGrid, MoreHorizontal, X, Bookmark, PlusCircle } from 'lucide-react';


export default function CompetitionsPage() {
  // State for view mode and sort options
  const [viewMode, setViewMode] = useState('list');
  const [sortOption, setSortOption] = useState('Recently Launched');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [filterActive, setFilterActive] = useState(true);


  // Sort options
  const sortOptions = ['Hotness', 'Recently Launched', 'Closing Soon', 'Recently Completed', 'Rewards', 'Total Teams'];

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
 
  // Sample competitions data
  
  const competitions = [
 {
      id: 1,
      title: <Link to="/predict-calorie-expenditure" className="[hover: cursor-pointer">Predict Calorie Expenditure</Link>,
      series: "Playground Series - Season 5, Episode 5",
      type: "Playground",
      teams: 1520,
      timeRemaining: "22 days to go",
      score: "5.05",
      prize: "Swag",
      image:  "/duck.png",
    },
    {
      id: 2,
      title: <Link to="/yale-unc-ch-geophysical-waveform-inversion" className="[hover: cursor-pointer">Yale/UNC-CH - Geophysical Waveform Inversion</Link>,
      series: null,
      description: "Develop physics-guided machine learning models to solve full-waveform inversion problems",
      type: "Research",
      teams: 491,
      timeRemaining: "2 months to go",
      prize: "$50,000",
      image: "thumb76_76.png",
    },
    {
      id: 3,
     title: <Link to="/competitions/image-matching-challenge-2025" className="[hover: cursor-pointer">Image Matching Challenge 2025</Link>,
      series: null,
      description: "Reconstruct 3D scenes from messy image collections.",
      type: "Research",
      subtype: "Code Competition",
      teams: 609,
      timeRemaining: "25 days to go",
      prize: "$50,000",
      image:"kaggle_71885_logos_thumb76_76.png",

    },
    {
      id: 4,
      title: <Link to="/competitions/predict-podcast-listening-time" className="[hover: cursor-pointer">Predict Podcast Listening Time</Link>,
      series: "Playground Series - Season 5, Episode 4",
      type: "Playground",
      teams: 3310,
      timeRemaining: "8 days ago",
      score: "5.04",
      prize: "Swag",
      image: "thumb76_76 (1).png",
    },
    {
      id: 5,
      title: "ARC Prize 2025",
      series: "Code Competition",
      type: "Featured",
      teams: 357,
      timeRemaining: "6 months to go",
      prize: "$725,000",
      image: "public/kaggle_67357_logos_thumb76_76.png"

    },
    {
      id: 6,
      title: "BirdCLEF+ 2025",
      series: "Code Competition",
      type: "Research",
      teams: 1599,
      timeRemaining: "A month to go",
      prize: "$50,000",
      image: "thumb76_76 (2).png"

    },
    {
      id: 7,
      title: "BYU - Locating Bacterial Flagellar Motors 2025",
      series: "Code Competition",
      type: "Research",
      teams: 908,
      timeRemaining: "A month to go",
      prize: "$65,000",
      image: "thumb76_76 (3).png"
    },
    {
      id: 8,
      title: "Binary Prediction with a Rainfall Dataset",
      series: "Playground Series - Season 5, Episode 3",
      type: "Playground",
      teams: 4381,
      timeRemaining: "A month ago",
      prize: "Swag",
      image: "thumb76_76 (4).png"
    },
    {
      id: 9,
      title: "Stanford RNA 3D Folding",
      series: "Code Competition",
      type: "Featured",
      teams: 1265,
      timeRemaining: "20 days to go",
      prize: "$75,000",
        image: "thumb76_76 (5).png"
      },
        {
      id: 10,
      title: "Drawing with LLMs",
      series: "Code Competition",
      type: "Featured",
      teams: 1276,
      timeRemaining: "18 days to go",
      prize: "$50,000",
      image: "kaggle_46801_logos_thumb76_76.png"},
    {
      id: 11,
      title: "March Machine Learning Mania 2025",
      series: "Code Competition",
      type: "Featured",
      teams: 1727,
      timeRemaining: "a month ago",
      prize: "$50,000",
      image: "thumb76_76 (6).png"},
    {
      id: 12,
      title: "Backpack Prediction Challenge",
      series: "Playground Series - Season 5, Episode 2",
      type: "Playground",
      teams: 3393,
      timeRemaining: "2 months ago",
      prize: "Swag",
      image:"thumb76_76 (7).png "
    },
    {
      id: 13,
      title: "Forecasting Sticker Sales",
      series: "Playground Series - Season 5, Episode 1",
      type: "Playground",
      teams: 2722,
      timeRemaining: "3 months ago",
      prize: "Swag",
      image: "thumb76_76 (9).png"},


    {      id: 14,
      title: "Konwinski Prize",
      series: "Code Competition",
      type: "Featured",
      teams: 617,
      timeRemaining: "a month to go",
      prize: "$1,225,000",
      image: "public/thumb76_76 (10).png"

    },
    {
      id: 15,
      title: "NeurIPS 2024 - Lux AI Season 3",
      series: "Simulation Competition",
      type: "Featured",
      teams: 701,
      timeRemaining: "2 months ago",
      prize: "$50,000",
      image: "public/thumb76_76 (11).png"},
  {
      id: 16,
      title: "CIBMTR - Equity in post-HCT Survival Predictions",
      series: "Code Competition",
      type: "Research",
      teams: 3325,
      timeRemaining: "2 months ago",
      prize: "$50,000",
        image: "public/thumb76_76.jpg"},
      {
      id: 17,
      title: "LLMs - You Can't Please Them All",
      series: "Code Competition",
      type: "Featured",
      teams: 1693,
      timeRemaining: "2 months ago",
      prize: "$50,000",
      image: "public/thumb76_76 (12).png"},
      {
      id: 18,
      title: "Regression with an Insurance Dataset",
      series: "Playground Series - Season 4, Episode 12",
      type: "Playground",
      teams: 2390,
      timeRemaining: "4 months ago",
      prize: "Swag",
      image: "thumb76_76 (13).png"},
      {
      id: 19,
      title: "Santa 2024 - The Perplexity Permutation Puzzle",
      series: "Code Competition",
      type: "Featured",
      teams: 1514,
      timeRemaining: "3 months ago",
      prize: "$50,000",
      image: "public/thumb76_76 (14).png"},
      
      {
        
        
        id: 20,
      title: "FIDE & Google Efficient Chess AI Challenge",
      series: "Simulation Competition",
      type: "Featured",
      teams: 1120,
      timeRemaining: "2 months ago",
      prize: "$50,000",
      image: "public/thumb76_76 (15).png"}
  ];

  // More options menu items
  const moreOptions = [
       { icon: <PlusCircle className="h-4 w-4 mr-2" />, label: "Add to collections" },
        { icon: <Bookmark className="h-4 w-4 mr-2" />, label: "Bookmark" },
  ];

  return (
    <div>
      {/* Main Content */}
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
                  {competition.score && (
                    <div className="absolute bottom-1 left-4 bg-white px-2 py-1 text-xs font-bold rounded shadow">
                      {competition.score}
                    </div>
                  )}
                </div>
                <div className="flex-grow p-4">
                  <h3 className="text-lg font-bold text-gray-800">{competition.title}</h3>
                  {competition.series && (
                    <p className="text-sm text-gray-600">{competition.series}</p>
                  )}
                  {competition.description && (
                    <p className="text-sm text-gray-600">{competition.description}</p>
                  )}
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>{competition.type}</span>
                    {competition.subtype && (
                      <>
                        <span className="mx-1">·</span>
                        <span>{competition.subtype}</span>
                      </>
                    )}
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

                  {competition.series && (
                    <p className="text-sm text-gray-600 mb-1">{competition.series}</p>
                  )}

                  <div className="text-sm text-gray-500 mb-2">
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