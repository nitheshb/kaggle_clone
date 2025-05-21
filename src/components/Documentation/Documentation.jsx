// import { useState } from 'react';

// const KaggleDocumentation = () => {
//   const [selectedBox, setSelectedBox] = useState(null);
  
//   const boxes = [
//     {
//       id: 1,
//       title: "Competitions",
//       description: "Find challenges for every interest level"
//     },
//     {
//       id: 2,
//       title: "Datasets",
//       description: "Explore, analyze, and share quality data"
//     },
//     {
//       id: 3,
//       title: "Public API",
//       description: "Create Datasets, Notebooks, and connect with Kaggle"
//     },
//     {
//       id: 4,
//       title: "Efficient GPU Usage Tips",
//       description: "Learn how to use GPUs efficiently"
//     },
//     {
//       id: 5,
//       title: "Tensor Processing Units (TPUs)",
//       description: "Accelerate your machine learning workloads"
//     },
//     {
//       id: 6,
//       title: "Models",
//       description: "Use and share pre-trained models"
//     },
//     {
//       id: 7,
//       title: "Competitions Setup",
//       description: "Create a new competition or competition metric"
//     },
//     {
//       id: 8,
//       title: "Organizations",
//       description: "How to create, use, and manage organization profiles"
//     },
//     {
//       id: 9,
//       title: "Groups",
//       description: "How to create and use groups on Kaggle"
//     },
//     {
//       id: 10,
//       title: "Kaggle Packages",
//       description: "Create re-usable code packages"
//     },
//     {
//       id: 11,
//       title: "Notebooks",
//       description: "Explore and run machine learning code with Kaggle Notebooks"
//     }
//   ];

//   const handleBoxClick = (id) => {
//     setSelectedBox(id === selectedBox ? null : id);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r border-gray-200 py-8 px-4 hidden md:flex flex-col">
//         <div className="mb-8">
//           <span className="text-2xl font-bold text-blue-400">kaggle</span>
//         </div>
//         <nav className="flex-1">
//           <ul className="space-y-2">
//             {boxes.map((box) => (
//               <li key={box.id}>
//                 <button
//                   onClick={() => setSelectedBox(box.id)}
//                   className={`w-full text-left px-4 py-2 rounded-lg transition-colors font-medium ${
//                     selectedBox === box.id
//                       ? 'bg-blue-100 text-blue-700'
//                       : 'hover:bg-gray-100 text-gray-700'
//                   }`}
//                 >
//                   {box.title}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white shadow-sm border-b border-gray-200">
//           <div className="px-4 py-2 flex items-center justify-between">
//             <div className="text-3xl font-bold text-blue-400 md:hidden">kaggle</div>
//             <div className="hidden md:flex">
//               <div className="relative w-96">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full"
//                 />
//                 <div className="absolute left-3 top-2 text-gray-400">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <circle cx="11" cy="11" r="8"></circle>
//                     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="font-medium">Sign In</button>
//               <button className="px-4 py-2 bg-gray-900 text-white rounded-full font-medium">Register</button>
//             </div>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="px-4 py-6 flex-1">
//           <h1 className="text-3xl font-bold mb-8">How To Use Kaggle</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {boxes.map((box) => (
//               <div
//                 key={box.id}
//                 className={`bg-white border rounded-lg p-6 shadow-sm cursor-pointer transition-all duration-200 ${
//                   selectedBox === box.id ? 'ring-2 ring-blue-500 transform scale-[1.02]' : 'hover:shadow-md'
//                 }`}
//                 onClick={() => setSelectedBox(box.id)}
//               >
//                 <h3 className="text-lg font-semibold mb-2">{box.title}</h3>
//                 <p className="text-gray-600">{box.description}</p>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default KaggleDocumentation;


import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const KaggleDocumentation = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const navigate = useNavigate();

  const boxes = [
    {
      id: 1,
      title: "Competitions",
      description: "Find challenges for every interest level"
    },
    {
      id: 2,
      title: "Datasets",
      description: "Explore, analyze, and share quality data",
      
    },
    {
      id: 3,
      title: "Public API",
      description: "Create Datasets, Notebooks, and connect with Kaggle",
      route: "/public-api",
     
    },
    {
      id: 4,
      title: "Efficient GPU Usage Tips",
      description: "Learn how to use GPUs efficiently",
      route: "/efficient-gpu-usage"
    },
    {
      id: 5,
      title: "Tensor Processing Units (TPUs)",
      description: "Accelerate your machine learning workloads",
    
    },
    {
      id: 6,
      title: "Models",
      description: "Use and share pre-trained models"
    },
    {
      id: 7,
      title: "Competitions Setup",
      description: "Create a new competition or competition metric"
    },
    {
      id: 8,
      title: "Organizations",
      description: "How to create, use, and manage organization profiles",
      route:"/organizations"
    },
    {
      id: 9,
      title: "Groups",
      description: "How to create and use groups on Kaggle",
      route:"/groups"
    },
    {
      id: 10,
      title: "Kaggle Packages",
      description: "Create re-usable code packages",
      route:"/kagglepackages"
    },
    {
      id: 11,
      title: "Notebooks",
      description: "Explore and run machine learning code with Kaggle Notebooks",
      route:"/notebooks"
    }
  ];

  const handleBoxClick = (box) => {
    setSelectedBox(box.id === selectedBox ? null : box.id);
    if (box.route) {
      navigate(box.route);
    }
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-white">
      <h1 className="text-4xl font-bold text-left text-blue-500 mb-10">How To Use Kaggle</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`bg-white border rounded-xl p-6 shadow-sm cursor-pointer transition-all duration-200 ${
              selectedBox === box.id ? 'ring-2 ring-blue-500 scale-[1.02]' : 'hover:shadow-md'
            }`}
            onClick={() => handleBoxClick(box)}
          >
            <h3 className="text-xl font-semibold mb-2">{box.title}</h3>
            <p className="text-gray-600">{box.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KaggleDocumentation;
