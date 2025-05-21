// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function ModelCard({ item }) {
//   const nav = useNavigate();
//   return (
//     <div
//       onClick={() => nav(`/models/${encodeURIComponent(item.name)}`)}
//       className="border rounded-lg p-4 hover:shadow-md cursor-pointer bg-white"
//     >
//       <h3 className="font-medium text-lg">{item.name}</h3>
//       <p className="text-sm text-gray-600">{item.owner}</p>
//       {item.description && (
//         <p className="text-sm text-gray-700 line-clamp-2 my-2">
//           {item.description}
//         </p>
//       )}
//       <p className="text-sm text-gray-700 mb-4">
//         {item.variations} Variations · {item.notebooks} Notebooks
//       </p>
//       <div className="flex items-center justify-between">
//         <button className="text-gray-600">▲ {item.votes}</button>
//         <img src={item.avatar} alt="" className="w-6 h-6 rounded-full"/>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ModelCard({ item }) {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav('/404')}
      className="border rounded-lg p-4 bg-white hover:shadow-lg transition cursor-pointer"
    >
      <h3 className="font-medium text-lg mb-1">{item.name}</h3>
      <p className="text-sm text-gray-600 mb-1">{item.owner}</p>
      {item.description && (
        <p className="text-sm text-gray-700 mb-2 line-clamp-2">{item.description}</p>
      )}
      <p className="text-sm text-gray-700 mb-4">
        {item.variations} Variations · {item.notebooks} Notebooks
      </p>
      <div className="flex items-center justify-between">
        <button className="text-gray-600 hover:text-gray-800">▲ {item.votes}</button>
        {item.avatar && (
          <img src={item.avatar} alt={item.owner} className="w-6 h-6 rounded-full" />
        )}
      </div>
    </div>
  );
}
