// // import React from 'react';

// // function Discussion() {
// //   return (
// //     <div>
// //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Discussion</h2>
// //       <p className="text-gray-700">Join the discussion about the competition. [Provide discussion forum link]</p>
// //     </div>
// //   );
// // }

// // export default Discussion;

// import React, { useState } from 'react';
// import { Search, ChevronUp, ChevronDown, MoreHorizontal, Bell, Filter } from 'lucide-react';

// function Discussion() {
//   const [activeTab, setActiveTab] = useState('All');
  
//   // Sample data for discussion topics
//   const pinnedTopics = [
//     {
//       id: 1,
//       title: 'This Competition Has an Official Discord Channel',
//       author: 'Addison Howard',
//       avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/1095143-kg.jpeg',
//       lastComment: '2d ago',
//       lastCommentBy: 'jiongdaxia',
//       commentCount: 1,
//       votes: 5,
//       isPinned: true
//     }
//   ];
  
//   const regularTopics = [
//     {
//       id: 2,
//       title: 'Duration & Heart Rate: The Primary Drivers of Calorie Burn',
//       author: 'Younus_Mohamed',
//       avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/16179447-kg.png?t=2024-09-12-18-47-35',
//       lastComment: '1h ago',
//       lastCommentBy: 'sdy623',
//       commentCount: 2,
//       votes: 4
//     },
//     {
//       id: 3,
//       title: 'How To Ensemble with RMSLE',
//       author: 'Chris Deotte',
//       avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/1723677-kg.jpg',
//       lastComment: '4h ago',
//       lastCommentBy: 'abdelmalek eladjelat',
//       commentCount: 3,
//       votes: 10
//     }
//   ];

//   return (
//     <div className="w-full">
//       {/* Header and controls */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold text-gray-900">Discussion</h1>
//         <div className="flex gap-2">
//           <button className="px-3 py-1.5 border border-gray-300 rounded-full font-medium flex items-center text-gray-700 text-sm">
//             <Bell size={14} className="mr-1" />
//             Follow
//           </button>
//           <button className="px-3 py-1.5 border border-gray-300 rounded-full font-medium flex items-center text-gray-700 text-sm">
//             <span className="text-lg mr-1">+</span> New Topic
//           </button>
//         </div>
//       </div>
      
//       {/* Original search bar CSS */}
//       <div className="relative mb-6">
//         <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
//           <Search size={20} className="text-gray-500 mr-2" />
//           <input
//             type="text"
//             placeholder="Search discussions"
//             className="w-full bg-transparent border-none focus:outline-none text-gray-700"
//           />
//           <div className="border-l border-gray-300 pl-3 flex items-center">
//             <Filter size={18} className="text-gray-500 mr-1" />
//             <span className="text-gray-700 font-medium">Filters</span>
//           </div>
//         </div>
//       </div>
      
//       {/* Tabs */}
//       <div className="border-b border-gray-200 mb-4">
//         <div className="flex">
//           <button 
//             className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'All' ? 'text-gray-700 border-gray-900' : 'text-gray-500 border-transparent'}`}
//             onClick={() => setActiveTab('All')}
//           >
//             All
//           </button>
//         </div>
//       </div>
      
//       {/* Pinned Topics */}
//       <div className="mb-6">
//         <h3 className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Pinned topics</h3>
//         {pinnedTopics.map(topic => (
//           <div key={topic.id} className="border-b border-gray-200 py-3">
//             <div className="flex justify-between">
//               <div className="flex items-start space-x-3 flex-grow">
//                 <div className="flex-shrink-0 relative">
//                   <div 
//                     className="w-8 h-8 rounded-full overflow-hidden bg-cover bg-center border border-gray-200"
//                     style={{ backgroundImage: `url("${topic.avatar}")` }}
//                     title={topic.author}
//                   />
//                   {topic.isPinned && (
//                     <div className="absolute -bottom-1 -right-1 bg-white rounded-full border border-gray-200 w-4 h-4 flex items-center justify-center text-[10px]">
//                       📌
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex-grow">
//                   <div className="flex items-center">
//                     <h4 className="text-sm font-semibold text-gray-800">{topic.title}</h4>
//                   </div>
//                   <div className="flex items-center text-xs text-gray-500 mt-1">
//                     <span>{topic.author}</span>
//                     <span className="mx-1">•</span>
//                     <span>Last <a href="#" className="text-blue-600 hover:underline">comment</a> {topic.lastComment} by {topic.lastCommentBy}</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <div className="flex items-center w-10 justify-center">
//                   <button className="p-1 text-gray-400 hover:text-gray-600">
//                     <ChevronUp size={12} />
//                   </button>
//                   <span className="mx-1 text-xs text-gray-700">{topic.votes}</span>
//                   <button className="p-1 text-gray-400 hover:text-gray-600">
//                     <ChevronDown size={12} />
//                   </button>
//                 </div>
                
//                 <div className="text-xs text-gray-500 w-16">
//                   {topic.commentCount} comment{topic.commentCount !== 1 ? 's' : ''}
//                 </div>
                
//                 <button className="text-gray-400 hover:text-gray-600">
//                   <MoreHorizontal size={14} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       {/* Regular Topics */}
//       <div>
//         <h3 className="text-xs text-gray-500 mb-2 uppercase tracking-wider">All other topics</h3>
//         {regularTopics.map(topic => (
//           <div key={topic.id} className="border-b border-gray-200 py-3">
//             <div className="flex justify-between">
//               <div className="flex items-start space-x-3 flex-grow">
//                 <div className="flex-shrink-0">
//                   <div 
//                     className="w-8 h-8 rounded-full overflow-hidden bg-cover bg-center border border-gray-200"
//                     style={{ backgroundImage: `url("${topic.avatar}")` }}
//                     title={topic.author}
//                   />
//                 </div>
//                 <div className="flex-grow">
//                   <h4 className="text-sm font-semibold text-gray-800">{topic.title}</h4>
//                   <div className="flex items-center text-xs text-gray-500 mt-1">
//                     <span>{topic.author}</span>
//                     <span className="mx-1">•</span>
//                     <span>Last comment {topic.lastComment} by {topic.lastCommentBy}</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <div className="flex items-center w-10 justify-center">
//                   <button className="p-1 text-gray-400 hover:text-gray-600">
//                     <ChevronUp size={12} />
//                   </button>
//                   <span className="mx-1 text-xs text-gray-700">{topic.votes}</span>
//                   <button className="p-1 text-gray-400 hover:text-gray-600">
//                     <ChevronDown size={12} />
//                   </button>
//                 </div>
                
//                 <div className="text-xs text-gray-500 w-16">
//                   {topic.commentCount} comment{topic.commentCount !== 1 ? 's' : ''}
//                 </div>
                
//                 <button className="text-gray-400 hover:text-gray-600">
//                   <MoreHorizontal size={14} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Discussion;

// import React from 'react';
// import { Search, ChevronUp, ChevronDown, Bell, Plus, SlidersHorizontal, MoreHorizontal } from 'lucide-react';

// const Discussion = () => {
//   return (
//     <div className="bg-white">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Main title */}
//         <h1 className="text-3xl font-bold mb-4">Predict Podcast Listening Time</h1>
        
//         {/* Navigation Tabs */}
//         <div className="flex border-b">
//           <div className="px-4 py-2">Overview</div>
//           <div className="px-4 py-2">Data</div>
//           <div className="px-4 py-2">Code</div>
//           <div className="px-4 py-2">Models</div>
//           <div className="px-4 py-2 border-b-2 border-blue-500 font-medium">Discussion</div>
//           <div className="px-4 py-2">Leaderboard</div>
//           <div className="px-4 py-2">Rules</div>
//         </div>
        
//         {/* Discussion Header */}
//         <div className="flex justify-between items-center my-6">
//           <h2 className="text-2xl font-bold">Discussion</h2>
//           <div className="flex items-center">
//             <button className="flex items-center border rounded-md px-3 py-1 mr-4 text-gray-600">
//               <Bell size={16} className="mr-2" />
//               <span>Follow</span>
//               <ChevronDown size={16} className="ml-1" />
//             </button>
//             <button className="flex items-center bg-white border border-gray-300 text-gray-700 rounded-md px-3 py-1">
//               <Plus size={16} className="mr-1" />
//               <span>New Topic</span>
//             </button>
//           </div>
//         </div>
        
//         {/* Search and Filter */}
//         <div className="flex justify-between items-center mb-4">
//           <div className="relative w-1/2">
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
//             <input 
//               type="text" 
//               placeholder="Search discussions" 
//               className="w-full pl-10 pr-4 py-2 border rounded-full text-sm"
//             />
//           </div>
//           <button className="flex items-center border rounded-md px-3 py-1 text-sm">
//             <SlidersHorizontal size={16} className="mr-2" />
//             <span>Filters</span>
//           </button>
//         </div>
        
//         {/* Tab Navigation */}
//         <div className="border-b mb-4">
//           <div className="inline-block px-4 pb-2 border-b-2 border-blue-500 font-medium text-sm">All</div>
//         </div>
        
//         {/* Discussion List */}
//         <div>
//           {/* 1st Place Discussion */}
//           <div className="flex items-start py-4 border-b">
//             <div className="mr-4">
//               <img 
//                 src="/api/placeholder/48/48" 
//                 alt="Chris Deotte avatar" 
//                 className="w-12 h-12 rounded-full bg-yellow-100"
//               />
//             </div>
//             <div className="flex-1">
//               <h3 className="font-medium text-base">1st Place - RAPIDS cuML Stack - 3 Levels!</h3>
//               <div className="text-sm text-gray-600">
//                 Chris Deotte · Last comment 12h ago by Soumyadip Sarkar
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="text-sm text-gray-600">
//                 125 comments
//               </div>
//               <div className="flex flex-col items-center">
//                 <button><ChevronUp size={16} /></button>
//                 <span className="text-sm">187</span>
//                 <button><ChevronDown size={16} /></button>
//               </div>
//               <button>
//                 <MoreHorizontal size={16} />
//               </button>
//             </div>
//           </div>
          
//           {/* 2nd Place Discussion */}
//           <div className="flex items-start py-4 border-b">
//             <div className="mr-4">
//               <img 
//                 src="/api/placeholder/48/48" 
//                 alt="Farukcan Saglam avatar" 
//                 className="w-12 h-12 rounded-full bg-orange-100"
//               />
//             </div>
//             <div className="flex-1">
//               <h3 className="font-medium text-base">2nd Place | Single LightGBM and Target Encoding</h3>
//               <div className="text-sm text-gray-600">
//                 Farukcan Saglam · Last comment 3d ago by yujiem
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="text-sm text-gray-600">
//                 47 comments
//               </div>
//               <div className="flex flex-col items-center">
//                 <button><ChevronUp size={16} /></button>
//                 <span className="text-sm">67</span>
//                 <button><ChevronDown size={16} /></button>
//               </div>
//               <button>
//                 <MoreHorizontal size={16} />
//               </button>
//             </div>
//           </div>
          
//           {/* 3rd Place Discussion */}
//           <div className="flex items-start py-4 border-b">
//             <div className="mr-4">
//               <img 
//                 src="/api/placeholder/48/48" 
//                 alt="Christof Henkel avatar" 
//                 className="w-12 h-12 rounded-full bg-purple-100"
//               />
//             </div>
//             <div className="flex-1">
//               <h3 className="font-medium text-base">3rd Place - Target Encoding and 3 Levels</h3>
//               <div className="text-sm text-gray-600">
//                 Christof Henkel · Last comment 6d ago by Eugen Sedler
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="text-sm text-gray-600">
//                 18 comments
//               </div>
//               <div className="flex flex-col items-center">
//                 <button><ChevronUp size={16} /></button>
//                 <span className="text-sm">24</span>
//                 <button><ChevronDown size={16} /></button>
//               </div>
//               <button>
//                 <MoreHorizontal size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Discussion;

import React from 'react';
import { Search, ChevronUp, ChevronDown, Bell, Plus, SlidersHorizontal, MoreHorizontal } from 'lucide-react';
const Discussion = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Discussion Header */}
        <div className="flex justify-between items-center my-6">
          <h1 className="text-3xl font-bold text-gray-900">Discussion</h1>
          <div className="flex items-center">
            <button className="flex items-center border rounded-lg px-3 py-2 mr-4 text-gray-600">
              <Bell size={16} className="mr-2" />
              <span>Follow</span>
              <ChevronDown size={16} className="ml-1" />
            </button>
            <button className="flex items-center bg-white border border-gray-300 text-gray-700 rounded-lg px-3 py-2">
              <Plus size={16} className="mr-1" />
              <span>New Topic</span>
            </button>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-3 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search discussions" 
              className="w-full pl-10 pr-4 py-2 border rounded-full text-sm"
            />
          </div>
          <button className="flex items-center border rounded-md px-3 py-2 ml-4 text-sm">
            <SlidersHorizontal size={16} className="mr-2" />
            <span>Filters</span>
          </button>
        </div>
        
        {/* Tab Navigation */}
        <div className="border-b mb-4">
          <div className="inline-block px-4 pb-2 border-b-2 border-blue-500 font-medium text-sm">All</div>
        </div>
        
        {/* Discussion List */}
        <div>
          {/* 1st Place Discussion */}
          <div className="flex items-start py-4 border-b">
            <div className="mr-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400">
                <img 
                  src="/api/placeholder/60/60" 
                  alt="Chris Deotte avatar" 
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">1st Place - RAPIDS cuML Stack - 3 Levels!</h3>
              <div className="text-sm text-gray-600">
                <span className="font-medium text-black hover:underline">Chris Deotte</span> · Last <span className="text-blue-600 hover:underline">comment</span> 14h ago by Soumyadip Sarkar
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="mb-2">
                <div className="flex items-center border rounded-full overflow-hidden">
                  <button className="px-3 py-1 hover:bg-gray-100">
                    <ChevronUp size={16} />
                  </button>
                  <div className="font-bold text-lg px-3 py-1">
                    187
                  </div>
                  <button className="px-3 py-1 hover:bg-gray-100">
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm mr-2">
                  125 comments
                </div>
                <button>
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          </div>
          
          {/* 2nd Place Discussion */}
          <div className="flex items-start py-4 border-b">
            <div className="mr-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500">
                <img 
                  src="/api/placeholder/60/60" 
                  alt="Farukcan Saglam avatar" 
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">2nd Place | Single LightGBM and Target Encoding</h3>
              <div className="text-sm text-gray-600">
                <span className="font-medium text-black hover:underline">Farukcan Saglam</span> · Last <span className="text-blue-600 hover:underline">comment</span> 2h ago by paperxd
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="mb-2">
                <div className="flex items-center border rounded-full overflow-hidden">
                  <button className="px-3 py-1 hover:bg-gray-100">
                    <ChevronUp size={16} />
                  </button>
                  <div className="font-bold text-lg px-3 py-1">
                    68
                  </div>
                  <button className="px-3 py-1 hover:bg-gray-100">
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm mr-2">
                  48 comments
                </div>
                <button>
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          </div>
          
          {/* 3rd Place Discussion */}
          <div className="flex items-start py-4 border-b bg-gray-50">
            <div className="mr-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
                <img 
                  src="/api/placeholder/60/60" 
                  alt="Johannes Heller avatar" 
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">3rd Place - Target Encoding and 3 Levels</h3>
              <div className="text-sm text-gray-600">
                <span className="font-medium text-black hover:underline">Johannes Heller</span> · Last <span className="text-blue-600 hover:underline">comment</span> 6d ago by Eugen Sedlar
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="mb-2">
                <div className="flex items-center border rounded-full overflow-hidden">
                  <button className="px-3 py-1 hover:bg-gray-100">
                    <ChevronUp size={16} />
                  </button>
                  <div className="font-bold text-lg px-3 py-1">
                    24
                  </div>
                  <button className="px-3 py-1 hover:bg-gray-100">
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm mr-2">
                  18 comments
                </div>
                <button>
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          </div>
          
          {/* 4th Place Discussion */}
          <div className="flex items-start py-4 border-b">
            <div className="mr-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400">
                <img 
                  src="/api/placeholder/60/60" 
                  alt="Ravi Ramakrishnan avatar" 
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">Rank 4 approach - lots of features, lots of simple models and a ridge blend!</h3>
              <div className="text-sm text-gray-600">
                <span className="font-medium text-black hover:underline">Ravi Ramakrishnan</span> · Last <span className="text-blue-600 hover:underline">comment</span> 9d ago by Bandersnatch Kumar
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="mb-2">
                <div className="flex items-center border rounded-full overflow-hidden">
                  <button className="px-3 py-1 hover:bg-gray-100">
                    <ChevronUp size={16} />
                  </button>
                  <div className="font-bold text-lg px-3 py-1">
                    48
                  </div>
                  <button className="px-3 py-1 hover:bg-gray-100">
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm mr-2">
                  32 comments
                </div>
                <button>
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          </div>
          
          {/* 6th Place Discussion */}
          <div className="flex items-start py-4 border-b">
            <div className="mr-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
                <img 
                  src="/api/placeholder/60/60" 
                  alt="masaishi avatar" 
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">6th Place: Select Feature Combinations based on RMSE Scores</h3>
              <div className="text-sm text-gray-600">
                <span className="font-medium text-black hover:underline">masaishi</span> · Last <span className="text-blue-600 hover:underline">comment</span> 11d ago by masaishi
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="mb-2">
                <div className="flex items-center border rounded-full overflow-hidden">
                  <button className="px-3 py-1 hover:bg-gray-100">
                    <ChevronUp size={16} />
                  </button>
                  <div className="font-bold text-lg px-3 py-1">
                    23
                  </div>
                  <button className="px-3 py-1 hover:bg-gray-100">
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm mr-2">
                  17 comments
                </div>
                <button>
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;