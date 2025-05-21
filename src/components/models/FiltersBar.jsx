// import React from 'react';
// import { Filter, ChevronLeft, ChevronRight } from 'lucide-react';

// export default function FiltersBar({
//   filters = [],
//   refContainer,
//   onLeft,
//   onRight
// }) {
//   return (
//     <section className="sticky top-0 z-20 bg-white py-2 px-8 flex items-center space-x-4 border-b border-gray-200">
//       {filters.length > 0 && (
//         <div className="flex items-center gap-1 text-gray-600">
//           <Filter size={16} />
//           <span>{filters[0]}</span>
//         </div>
//       )}
//       <button onClick={onLeft} className="text-gray-400 hover:text-gray-600 p-1">
//         <ChevronLeft size={20} />
//       </button>
//       <div
//         ref={refContainer}
//         className="flex space-x-4 overflow-x-auto no-scrollbar"
//       >
//         {filters.slice(1).map((f) => (
//           <button
//             key={f}
//             className="flex items-center gap-1 whitespace-nowrap px-3 py-1 border border-gray-300 rounded-full text-gray-600 hover:text-gray-800 hover:border-gray-400"
//           >
//             {f}
//             <ChevronRight size={12} />
//           </button>
//         ))}
//       </div>
//       <button onClick={onRight} className="text-gray-400 hover:text-gray-600 p-1">
//         <ChevronRight size={20} />
//       </button>
//     </section>
//   );
// }
// src/components/models/FiltersBar.jsx
import React from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';

export default function FiltersBar({
  refContainer,
  onLeft,
  onRight,
  filters = []
}) {
  return (
    <div className="relative flex items-center">
      <button
        onClick={onLeft}
        className="p-1 text-gray-500 hover:text-gray-700"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={refContainer}
        className="flex items-center space-x-4 overflow-x-auto hide-scrollbar"
      >
        {filters.map((f) => (
          <button
            key={f}
            className="flex items-center whitespace-nowrap gap-1 px-3 py-1 border border-gray-300 rounded-full text-gray-600 hover:border-gray-400 hover:text-gray-800 transition"
          >
            {f}
            <Filter size={12} />
          </button>
        ))}
      </div>

      <button
        onClick={onRight}
        className="p-1 text-gray-500 hover:text-gray-700"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
