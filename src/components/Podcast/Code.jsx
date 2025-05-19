// import React from 'react';

// function Code() {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Code</h2>
//       <p className="text-gray-700">Here is the code template and guidelines.</p>
//     </div>
//   );
// }

// export default Code;

// import React from "react";
// import { Search, SlidersHorizontal, Plus, ChevronDown, MoreVertical, ChevronUp } from "lucide-react";

// const code = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-16 py-10">
//       {/* Header with title and New Notebook button */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-4xl font-bold text-gray-900">Notebooks</h1>
//         <button className="flex items-center px-6 py-2 border border-gray-300 rounded-full text-gray-800 font-medium">
//           <Plus className="mr-2" size={20} />
//           New Notebook
//         </button>
//       </div>

//       {/* Search bar with filters */}
//       <div className="relative mb-8">
//         <div className="flex items-center w-full px-6 py-3 border border-gray-300 rounded-full">
//           <Search className="text-gray-500 mr-3" size={20} />
//           <input
//             type="text"
//             placeholder="Search notebooks"
//             className="flex-grow bg-transparent border-none outline-none text-gray-800"
//           />
//           <div className="flex items-center text-gray-800 font-medium">
//             <SlidersHorizontal className="mr-2" size={18} />
//             Filters
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="border-b border-gray-200 mb-4">
//         <div className="flex space-x-8">
//           <div className="pb-3 border-b-2 border-gray-800 font-medium text-gray-800">All</div>
//           <div className="pb-3 text-gray-500">Your Work</div>
//           <div className="pb-3 text-gray-500">Shared With You</div>
//           <div className="pb-3 text-gray-500">Bookmarks</div>
//           <div className="flex-grow"></div>
//           <div className="flex items-center text-gray-800 font-medium">
//             Hotness <ChevronDown className="ml-1" size={18} />
//           </div>
//         </div>
//       </div>

//       {/* Notebook List */}
//       <div className="space-y-6">
//         {/* First Notebook */}
//         <div className="py-4 border-b border-gray-200">
//           <div className="flex">
//             <div className="mr-4">
//               <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-400">
//                 <img 
//                   src="default-thumb" 
//                   alt="Profile" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//             <div className="flex-grow">
//               <div className="flex justify-between">
//                 <h2 className="text-xl font-bold text-gray-800">Predict Podcast Listening Time | CatBoost</h2>
//                 <div className="flex items-center">
//                   <div className="flex items-center border rounded-l-full rounded-r-full overflow-hidden">
//                     <button className="px-2 py-1 bg-white border-r">
//                       <ChevronUp size={16} />
//                     </button>
//                     <div className="px-4 py-1 bg-white font-medium">2</div>
//                   </div>
//                   <button className="ml-2">
//                     <MoreVertical size={20} />
//                   </button>
//                 </div>
//               </div>
//               <div className="text-gray-600 mt-1">Updated 11h ago</div>
//               <div className="text-gray-600 mt-1">
//                 Score: 12.89412 · <span className="text-gray-800">0 comments</span> · Predict Podcast Listening Time
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Second Notebook */}
//         <div className="py-4 border-b border-gray-200">
//           <div className="flex">
//             <div className="mr-4">
//               <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-orange-400">
//                 <img 
//                   src="/api/placeholder/100/100" 
//                   alt="Dog profile" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//             <div className="flex-grow">
//               <div className="flex justify-between">
//                 <h2 className="text-xl font-bold text-gray-800">Podcast Keras MLP Regressor</h2>
//                 <div className="flex items-center">
//                   <div className="flex items-center border rounded-l-full rounded-r-full overflow-hidden">
//                     <button className="px-2 py-1 bg-white border-r">
//                       <ChevronUp size={16} />
//                     </button>
//                     <div className="px-4 py-1 bg-white font-medium">2</div>
//                   </div>
//                   <button className="ml-2">
//                     <MoreVertical size={20} />
//                   </button>
//                 </div>
//               </div>
//               <div className="text-gray-600 mt-1">
//                 Notebook copied with edits from <span className="text-gray-800">stpete_ishii</span> · Updated 1d ago
//               </div>
//               <div className="text-gray-600 mt-1">
//                 Score: 19.14459 · <span className="text-gray-800">0 comments</span> · Predict Podcast Listening Time
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Third Notebook */}
//         <div className="py-4 border-b border-gray-200">
//           <div className="flex">
//             <div className="mr-4">
//               <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-purple-400">
//                 <img 
//                   src="/api/placeholder/100/100" 
//                   alt="Profile" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//             <div className="flex-grow">
//               <div className="flex justify-between">
//                 <h2 className="text-xl font-bold text-gray-800">Predict Podcast Listening Time (EDA+ML)</h2>
//                 <div className="flex items-center">
//                   <div className="flex items-center border rounded-l-full rounded-r-full overflow-hidden">
//                     <button className="px-2 py-1 bg-white border-r">
//                       <ChevronUp size={16} />
//                     </button>
//                     <div className="px-4 py-1 bg-white font-medium">31</div>
//                   </div>
//                   <button className="ml-2">
//                     <MoreVertical size={20} />
//                   </button>
//                 </div>
//               </div>
//               <div className="text-gray-600 mt-1">Updated 13d ago</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default code;

// import React, { useState } from "react";
// import { Search, SlidersHorizontal, Plus, ChevronDown, MoreVertical, ChevronUp, X } from "lucide-react";

// const App = () => {
//   // State management
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("All");
//   const [showFilters, setShowFilters] = useState(false);
//   const [sortOption, setSortOption] = useState("Hotness");
//   const [sortMenuOpen, setSortMenuOpen] = useState(false);
  
//   // Filter options
//   const [filterOptions, setFilterOptions] = useState({
//     timeRange: "All Time",
//     competition: "All Competitions",
//     language: "All Languages",
//   });

//   // Sample notebooks data with goose profile
//   const allNotebooks = [
//     {
//       id: 1,
//       title: "Predict Podcast Listening Time | CatBoost",
//       updatedTime: "11h ago",
//       score: 12.89412,
//       comments: 0,
//       competition: "Predict Podcast Listening Time",
//       votes: 2,
//       owner: "you",
//       shared: false,
//       bookmarked: true,
//       profileColor: "border-blue-400",
//       useGoose: true
//     },
//     {
//       id: 2,
//       title: "Podcast Keras MLP Regressor",
//       updatedTime: "1d ago",
//       score: 19.14459,
//       comments: 0,
//       competition: "Predict Podcast Listening Time",
//       votes: 2,
//       owner: "stpete_ishii",
//       shared: true,
//       bookmarked: false,
//       profileColor: "border-orange-400",
//       useGoose: true
//     },
//     {
//       id: 3,
//       title: "Predict Podcast Listening Time (EDA+ML)",
//       updatedTime: "13d ago",
//       score: 24.55123,
//       comments: 5,
//       competition: "Predict Podcast Listening Time",
//       votes: 31,
//       owner: "other",
//       shared: false,
//       bookmarked: false,
//       profileColor: "border-purple-400",
//       useGoose: true
//     }
//   ];

//   // Filter notebooks based on active tab and search query
//   const filterNotebooks = () => {
//     let filtered = [...allNotebooks];
    
//     // Filter by search query
//     if (searchQuery) {
//       filtered = filtered.filter(notebook => 
//         notebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         notebook.competition.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
    
//     // Filter by active tab
//     if (activeTab === "Your Work") {
//       filtered = filtered.filter(notebook => notebook.owner === "you");
//     } else if (activeTab === "Shared With You") {
//       filtered = filtered.filter(notebook => notebook.shared);
//     } else if (activeTab === "Bookmarks") {
//       filtered = filtered.filter(notebook => notebook.bookmarked);
//     }
    
//     // Sort notebooks
//     if (sortOption === "Hotness") {
//       filtered.sort((a, b) => b.score - a.score);
//     } else if (sortOption === "Most Recent") {
//       filtered.sort((a, b) => {
//         if (a.updatedTime.includes('h') && b.updatedTime.includes('d')) return -1;
//         if (a.updatedTime.includes('d') && b.updatedTime.includes('h')) return 1;
        
//         const aValue = parseInt(a.updatedTime);
//         const bValue = parseInt(b.updatedTime);
//         return aValue - bValue;
//       });
//     } else if (sortOption === "Most Votes") {
//       filtered.sort((a, b) => b.votes - a.votes);
//     }
    
//     return filtered;
//   };

//   const displayedNotebooks = filterNotebooks();

//   return (
//     <div className="max-w-7xl mx-auto px-4 md:px-16 py-6 md:py-10">
//       {/* Header with title and New Notebook button */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Notebooks</h1>
//         <button className="flex items-center px-4 md:px-6 py-2 border border-gray-300 rounded-full text-gray-800 font-medium hover:bg-gray-50 transition-colors">
//           <Plus className="mr-2" size={20} />
//           New Notebook
//         </button>
//       </div>

//       {/* Search bar with filters */}
//       <div className="relative mb-8">
//         <div className="flex items-center w-full px-4 md:px-6 py-3 border border-gray-300 rounded-full">
//           <Search className="text-gray-500 mr-3" size={20} />
//           <input
//             type="text"
//             placeholder="Search notebooks"
//             className="flex-grow bg-transparent border-none outline-none text-gray-800"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button 
//             onClick={() => setShowFilters(!showFilters)}
//             className="flex items-center text-gray-800 font-medium hover:text-gray-600"
//           >
//             <SlidersHorizontal className="mr-2" size={18} />
//             Filters
//           </button>
//         </div>
        
//         {/* Filter dropdown */}
//         {showFilters && (
//           <div className="absolute z-10 mt-2 p-4 w-full bg-white rounded-lg shadow-lg border border-gray-200">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-medium text-gray-800">Filters</h3>
//               <button onClick={() => setShowFilters(false)}>
//                 <X size={16} className="text-gray-500 hover:text-gray-700" />
//               </button>
//             </div>
            
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Time Range</label>
//                 <select 
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   value={filterOptions.timeRange}
//                   onChange={(e) => setFilterOptions({...filterOptions, timeRange: e.target.value})}
//                 >
//                   <option>All Time</option>
//                   <option>Past 24 Hours</option>
//                   <option>Past Week</option>
//                   <option>Past Month</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Competition</label>
//                 <select 
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   value={filterOptions.competition}
//                   onChange={(e) => setFilterOptions({...filterOptions, competition: e.target.value})}
//                 >
//                   <option>All Competitions</option>
//                   <option>Predict Podcast Listening Time</option>
//                   <option>Image Classification</option>
//                   <option>NLP Challenge</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Language</label>
//                 <select 
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   value={filterOptions.language}
//                   onChange={(e) => setFilterOptions({...filterOptions, language: e.target.value})}
//                 >
//                   <option>All Languages</option>
//                   <option>Python</option>
//                   <option>R</option>
//                   <option>Julia</option>
//                 </select>
//               </div>
              
//               <div className="flex justify-end pt-2">
//                 <button 
//                   className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
//                   onClick={() => setShowFilters(false)}
//                 >
//                   Apply Filters
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Tabs */}
//       <div className="border-b border-gray-200 mb-4 overflow-x-auto">
//         <div className="flex space-x-8 min-w-max">
//           {["All", "Your Work", "Shared With You", "Bookmarks"].map((tab) => (
//             <button
//               key={tab}
//               className={`pb-3 ${
//                 activeTab === tab
//                   ? "border-b-2 border-gray-800 font-medium text-gray-800"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//           <div className="flex-grow"></div>
//           <div className="relative">
//             <button 
//               className="flex items-center text-gray-800 font-medium pb-3"
//               onClick={() => setSortMenuOpen(!sortMenuOpen)}
//             >
//               {sortOption} {sortMenuOpen ? <ChevronUp className="ml-1" size={18} /> : <ChevronDown className="ml-1" size={18} />}
//             </button>
            
//             {sortMenuOpen && (
//               <div className="absolute right-0 z-10 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200">
//                 {["Hotness", "Most Recent", "Most Votes"].map((option) => (
//                   <button
//                     key={option}
//                     className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
//                       sortOption === option ? "font-medium" : ""
//                     }`}
//                     onClick={() => {
//                       setSortOption(option);
//                       setSortMenuOpen(false);
//                     }}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Notebook List */}
//       {displayedNotebooks.length > 0 ? (
//         <div className="space-y-6">
//           {displayedNotebooks.map((notebook) => (
//             <div key={notebook.id} className="py-4 border-b border-gray-200">
//               <div className="flex">
//                 <div className="mr-4">
//                   <div className={`w-16 h-16 rounded-full overflow-hidden border-4 ${notebook.profileColor} bg-white`}>
//                     {notebook.useGoose ? (
//                       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//                         <g transform="translate(40, 40) scale(0.6)">
//                           <path d="M140,70 C180,40 200,10 180,30 C160,50 160,50 170,20 C180,-10 140,0 130,20 C120,40 120,40 100,30 C80,20 40,20 30,40 C20,60 30,90 40,100 C50,110 50,140 40,160 C30,180 20,200 40,200 C60,200 80,180 90,160 C100,140 110,130 120,140 C130,150 140,160 140,140 C140,120 130,110 140,100 C150,90 160,80 140,70 Z" 
//                                 fill="white" 
//                                 stroke="black" 
//                                 strokeWidth="3"/>
//                           <ellipse cx="155" cy="30" rx="5" ry="5" fill="black"/>
//                           <path d="M180,30 C185,25 190,15 180,20" fill="none" stroke="black" strokeWidth="2"/>
//                         </g>
//                       </svg>
//                     ) : (
//                       <img 
//                         src={notebook.profileImage}
//                         alt="Profile" 
//                         className="w-full h-full object-cover"
//                       />
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex-grow">
//                   <div className="flex justify-between">
//                     <h2 className="text-xl font-bold text-gray-800">{notebook.title}</h2>
//                     <div className="flex items-center">
//                       <div className="flex items-center border rounded-l-full rounded-r-full overflow-hidden">
//                         <button className="px-2 py-1 bg-white border-r hover:bg-gray-100">
//                           <ChevronUp size={16} />
//                         </button>
//                         <div className="px-4 py-1 bg-white font-medium">{notebook.votes}</div>
//                       </div>
//                       <button className="ml-2">
//                         <MoreVertical size={20} />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="text-gray-600 mt-1">
//                     {notebook.owner !== "you" && notebook.owner !== "other" ? (
//                       <>Notebook copied with edits from <span className="text-gray-800">{notebook.owner}</span> · </>
//                     ) : null}
//                     Updated {notebook.updatedTime}
//                   </div>
//                   <div className="text-gray-600 mt-1">
//                     Score: {notebook.score.toFixed(5)} · <span className="text-gray-800">{notebook.comments} comments</span> · {notebook.competition}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="py-16 text-center">
//           <p className="text-gray-500 text-lg">No notebooks found matching your criteria</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

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
      title: "PS-S5E4: Powerful Tabular Pipeline for Podcast",
      avatar: "https://artincontext.org/wp-content/uploads/2024/01/naruto-coloring-page-30.jpg",
      updated: "1h ago",
      score: "0.05697",
      comments: 6,
      tag: "Predict Podcast Listening Time",
      badge: "Silver",
      progress: 29,
      userName: "Mahdi Ravaghi",
      progressColor: "rgb(108, 117, 125)" // Silver color
    },
    {
      id: 2,
      title: "PS-S5E4: XGBoost + Optuna + TE Boost for Podcast",
      avatar: "https://thetoyzone.com/wp-content/uploads/2023/11/6_Naruto-screaming.png",
      updated: "26m ago",
      score: "0.05731",
      comments: 6,
      tag: "Predict Podcast Listening Time",
      badge: "Silver",
      progress: 31,
      userName: "Ieman Ihsan",
      progressColor: "rgb(108, 117, 125)" // Silver color
    },
    {
      id: 3,
      title: "PS-S5E4: Robust Ensemble Learning for Podcast",
      avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d404b9b-2af7-427e-96a2-9d9aedbc03c9/dfe1hym-723cb263-7518-4306-a405-1556139d2c0c.jpg/v1/fill/w_1280,h_1708,q_75,strp/naruto_digital_ink_by_thebaum64_dfe1hym-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwOCIsInBhdGgiOiJcL2ZcLzZkNDA0YjliLTJhZjctNDI3ZS05NmEyLTlkOWFlZGJjMDNjOVwvZGZlMWh5bS03MjNjYjI2My03NTE4LTQzMDYtYTQwNS0xNTU2MTM5ZDJjMGMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uU0xbT-HNxVRjmUk0VHZomeXQmN1CVJtsBKsKMMSGMk",
      updated: "3h ago",
      score: "0.05901",
      comments: 2,
      tag: "Predict Podcast Listening Time",
      badge: "Bronze",
      progress: 23,
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