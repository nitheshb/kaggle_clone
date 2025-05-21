import { useState } from 'react';
import { Filter } from 'lucide-react';
import { useSidebar } from '../../contexts/SidebarContext';

const CodeNavbarB = ({ visible }) => {
  const { isOpen, isExpanded } = useSidebar();
  const [selectedTab, setSelectedTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All notebooks' },
    { id: 'recent', label: 'Recently Viewed' },
    { id: 'package', label: 'Package' },
    { id: 'python', label: 'Python' },
    { id: 'r', label: 'R' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'nlp', label: 'NLP' },
    { id: 'random-forest', label: 'Random Forest' },
    { id: 'gpu', label: 'GPU' },
    { id: 'tpu', label: 'TPU' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white z-40 border-b border-gray-200 shadow-xl transition-all duration-300 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${isOpen ? (isExpanded ? 'ml-64' : 'ml-16') : 'ml-0'}`}
      
    >
      <div className="px-12 pt-2 pb-4">
        <div className="relative mb-6 rounded-3xl border border-gray-200 group hover:border-black transition-colors max-w-3xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search public notebooks"
            className="w-full py-3 pl-10 pr-24 bg-white rounded-3xl text-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-600"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-black font-medium rounded-3xl px-3 py-1 transition-colors hover:bg-gray-300 hover:text-gray-700">
            <Filter className="h-5 w-5 mr-1" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex space-x-2 mb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`whitespace-nowrap text-sm font-medium px-3 py-1 rounded-full border transition-colors ${
                selectedTab === tab.id
                  ? 'border-black text-black'
                  : 'border-gray-300 text-gray-600 hover:border-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CodeNavbarB;



// import { useState } from 'react';
// import { Filter } from 'lucide-react';
// import { useSidebar } from '../../contexts/SidebarContext';

// const CodeNavbarB = ({ visible }) => {
//   const { isOpen, isExpanded } = useSidebar();
//   const [selectedTab, setSelectedTab] = useState('all');

//   const tabs = [
//     { id: 'all', label: 'All notebooks' },
//     { id: 'recent', label: 'Recently Viewed' },
//     { id: 'package', label: 'Package' },
//     { id: 'python', label: 'Python' },
//     { id: 'r', label: 'R' },
//     { id: 'beginner', label: 'Beginner' },
//     { id: 'nlp', label: 'NLP' },
//     { id: 'random-forest', label: 'Random Forest' },
//     { id: 'gpu', label: 'GPU' },
//     { id: 'tpu', label: 'TPU' },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 bg-white z-40 border-b border-gray-200 shadow-xl transition-all duration-300 transform ${
//         visible ? 'translate-y-0' : '-translate-y-full'
//       } ${isOpen ? (isExpanded ? 'ml-64' : 'ml-16') : 'ml-0'}`}
//       style={{ transitionProperty: 'margin-left, transform' }}
//     >
//       <div className="px-12 pt-2 pb-4">
//         <div className="relative mb-6 rounded-3xl border border-gray-200 group hover:border-black transition-colors max-w-3xl">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-800"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//           <input
//             type="text"
//             placeholder="Search public notebooks"
//             className="w-full py-3 pl-10 pr-24 bg-white rounded-3xl text-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-600"
//           />
//           <button className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-black font-medium rounded-3xl px-3 py-1 transition-colors hover:bg-gray-300 hover:text-gray-700">
//             <Filter className="h-5 w-5 mr-1" />
//             <span>Filters</span>
//           </button>
//         </div>

//         <div className="flex space-x-3 mb-1 overflow-x-auto no-scrollbar">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setSelectedTab(tab.id)}
//               className={`whitespace-nowrap text-sm font-semibold px-4 py-1 rounded-full transition-colors ${
//                 selectedTab === tab.id
//                   ? 'bg-black text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default CodeNavbarB;

