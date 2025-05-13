// import React from 'react';
// import { Search } from 'lucide-react';

// /**
//  * Header Component
//  * 
//  * This component represents the top navigation bar of the Kaggle competition page.
//  * It contains a search bar and authentication buttons (Sign In & Register).
//  * 
//  * @returns {JSX.Element} The rendered Header component
//  */
// function Header() {
//   return (
//     <header className="border-b border-gray-200 py-2 px-4 flex justify-between items-center">
//       <div className="flex items-center">
//         {/* Search Bar with icon */}
//         <div className="relative flex items-center">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <Search className="h-5 w-5 text-gray-400" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search"
//             className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none"
//           />
//         </div>
//       </div>
      
//       {/* Authentication Buttons */}
//       <div className="flex items-center space-x-4">
//         <button className="text-gray-700 font-medium">Sign In</button>
//         <button className="bg-gray-800 text-white px-4 py-2 rounded-full font-medium">Register</button>
//       </div>
//     </header>
//   );
// }

// export default Header;