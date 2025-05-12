// import React from 'react';
// import ResourceCard from '../cards/ResourceCard';
// import NotebookCard from '../cards/NotebookCard';
// import ModelCard from '../cards/ModelCard';
// import { ArrowRight } from 'lucide-react';

// // Keep SectionHeader as a local component
// const SectionHeader = ({ title, description, icon }) => (
//   <div className="flex justify-between items-center mb-6">
//     <div className="flex items-center">
//       {icon && <img src={icon} alt="" className="w-6 h-6 mr-3" />}
//       <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
//     </div>
//     <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
//       <span className="mr-1">View all</span>
//       <ArrowRight size={18} />
//     </a>
//   </div>
// );

// const ResourcesGroupOne: React.FC = () => {
//   return (
//     <>
//       {/* DatasetsSection */}
//       <div className="mb-16">
//         <SectionHeader 
//           title="Datasets" 
//           description="475K high-quality public datasets. Everything from avocado prices to video game sales."
//           icon="/lovable-uploads/089ab4b0-77be-4ff7-b2cd-1c03c8aa2dc4.png"
//         />
//         <p className="text-gray-600 mb-8">
//           475K high-quality public datasets...
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Your ResourceCard items */}
//         </div>
//       </div>

//       {/* NotebooksSection */}
//       <div className="mb-16">
//         <SectionHeader 
//           title="Notebooks" 
//           description="1.4M public notebooks and access to a powerful notebook environment."
//           icon="/lovable-uploads/089ab4b0-77be-4ff7-b2cd-1c03c8aa2dc4.png"
//         />
//         <p className="text-gray-600 mb-8">1.4M public notebooks...</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Your NotebookCard items */}
//         </div>
//       </div>

//       {/* ModelsSection */}
//       <div className="mb-16">
//         <SectionHeader 
//           title="Models" 
//           description="20,700 pre-trained ML models."
//           icon="/lovable-uploads/089ab4b0-77be-4ff7-b2cd-1c03c8aa2dc4.png"
//         />
//         <p className="text-gray-600 mb-8">20,700 pre-trained models...</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Your ModelCard items */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ResourcesGroupOne;


import React from 'react';

const ResourcesGroupOne = () => {
  return (
    <div className="p-8 bg-green-200">
      <h1 className="text-xl font-bold text-center text-green-800">✅ It works!</h1>
    </div>
  );
};

export default ResourcesGroupOne;