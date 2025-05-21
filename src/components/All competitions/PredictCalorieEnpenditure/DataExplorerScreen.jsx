// // import { useState } from 'react';
// import { FileText, ChevronRight, Download, Maximize2, ChevronDown, HelpCircle, Copy, ExternalLink, Folder } from 'lucide-react';

// export default function DataExplorerScreen() {
//   // const [expanded] = useState(true); // Removed unused variable

//   return (
//     <div className="flex flex-col h-screen bg-gray-100 text-gray-800">
//       <div className="flex flex-row h-full">
//         {/* Main content area */}
//         <div className="flex-1 p-4">
//           <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
//             <div className="p-4 flex items-center justify-between border-b">
//               <div className="flex items-center">
//                 <FileText className="mr-2 text-gray-600" size={20} />
//                 <span className="font-bold">sample_submission.csv</span>
//                 <span className="text-gray-500 ml-2">(3.5 MB)</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button className="p-1 hover:bg-gray-100 rounded">
//                   <Download size={20} className="text-gray-600" />
//                 </button>
//                 <button className="p-1 hover:bg-gray-100 rounded">
//                   <Maximize2 size={20} className="text-gray-600" />
//                 </button>
//                 <button className="p-1 hover:bg-gray-100 rounded">
//                   <ExternalLink size={20} className="text-gray-600" />
//                 </button>
//               </div>
//             </div>
            
//             <div className="p-8 flex flex-col items-center justify-center">
//               <h2 className="text-xl font-bold mb-6">Competition Rules</h2>
              
//               <div className="mb-6">
//                 <div className="bg-blue-400 rounded-full w-32 h-32 flex items-center justify-center">
//                   <div className="bg-white rounded-md w-16 h-16 flex items-center justify-center border-2 border-gray-200">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
              
//               <p className="text-center mb-2">
//                 To see this data you need to agree to the <a href="#" className="text-blue-600 font-medium">competition rules</a>.
//               </p>
//               <p className="text-center mb-6">
//                 Please <a href="#" className="text-blue-600 font-medium">sign in</a> or <a href="#" className="text-blue-600 font-medium">register</a> to accept the rules.
//               </p>
              
//               <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium">
//                 Sign In
//               </button>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="p-4 font-medium text-gray-500 uppercase border-b">
//               Download Data
//             </div>
//             <div className="p-4 flex items-center justify-between bg-gray-50">
//               <div className="flex items-center">
//                 <span className="text-gray-500 mr-2">&gt;_</span>
//                 <span className="font-mono">kaggle competitions download -c playground-series-s5e5</span>
//               </div>
//               <div className="flex gap-2">
//                 <button className="p-1 hover:bg-gray-200 rounded">
//                   <Copy size={20} className="text-gray-600" />
//                 </button>
//                 <button className="p-1 hover:bg-gray-200 rounded">
//                   <HelpCircle size={20} className="text-gray-600" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Sidebar */}
//         <div className="w-64 bg-white border-l border-gray-200 p-4">
//           <div className="mb-8">
//             <h2 className="text-xl font-bold mb-2">Data Explorer</h2>
//             <p className="text-gray-500">49.49 MB</p>
//           </div>
          
//           <div className="mb-8">
//             <div className="flex items-center mb-2 text-gray-700">
//               <FileText size={16} className="mr-2 text-gray-500" />
//               <span>sample_submission.csv</span>
//             </div>
//             <div className="flex items-center mb-2 text-gray-700">
//               <FileText size={16} className="mr-2 text-gray-500" />
//               <span>test.csv</span>
//             </div>
//             <div className="flex items-center mb-2 text-gray-700">
//               <FileText size={16} className="mr-2 text-gray-500" />
//               <span>train.csv</span>
//             </div>
//           </div>
          
//           <div className="mb-8">
//             <h3 className="text-lg font-bold mb-4">Summary</h3>
            
//             <div className="mb-3">
//               <div className="flex items-center text-gray-700">
//                 <ChevronRight size={16} className="mr-2" />
//                 <Folder size={16} className="mr-2 text-gray-500" />
//                 <span>3 files</span>
//               </div>
//             </div>
            
//             <div className="mb-3">
//               <div className="flex items-center text-gray-700">
//                 <ChevronRight size={16} className="mr-2" />
//                 <FileText size={16} className="mr-2 text-gray-500" />
//                 <span>19 columns</span>
//               </div>
//             </div>
//           </div>
          
//           <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center">
//             <Download size={16} className="mr-2" />
//             Download All
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }