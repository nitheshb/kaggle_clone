// import { Link } from 'react-router-dom';

// const Datasets = () => {
//   return (
//     <div className="max-w-[1200px] mx-auto">
//       <h1 className="text-3xl font-bold text-gray-900 mb-6">Datasets</h1>
//       <p className="text-gray-700">
//         Find and explore datasets from the Kaggle community.
//       </p>
//     </div>
//   );
// };

// export default Datasets;

// src/pages/Datasets.jsx
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/layout/Sidebar.jsx';
import DatasetCard from './Learn/DatasetCard.jsx';

export default function Datasets() {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    // Generate dummy data
    const dummy = Array.from({ length: 12 }).map((_, i) => ({
      title: `Dataset ${i + 1}`,
      updated: `${Math.floor(Math.random() * 30) + 1} days ago`,
      files: `${Math.floor(Math.random() * 10) + 1}`,
      size: `${Math.floor(Math.random() * 100) + 1} MB`,
      image: `https://placehold.co/600x400?text=Dataset+${i + 1}`,
    }));
    setDatasets(dummy);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar navigation */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto h-screen">
        <h1 className="text-2xl font-bold mb-4">Datasets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {datasets.map((data, idx) => (
            <DatasetCard key={idx} {...data} />
          ))}
        </div>
      </main>
    </div>
  );
}
