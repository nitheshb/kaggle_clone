// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ChevronRight } from 'lucide-react';
// import CategorySection from './CategorySection.jsx';

// const categories = [
//   { title:'Text-To-Image', icon:'/images/text-to-image.svg', path:'/models?task=text-to-image', items:[] },
//   { title:'Multitask Classification', icon:'/images/multitask.svg', path:'/models?task=multitask', items:[] },
//   { title:'Tabular Classification', icon:'/images/tabular.svg', path:'/models?task=tabular', items:[] },
//   { title:'Image Augmentation', icon:'/images/image-augmentation.svg', path:'/models?task=image-augmentation', items:[] },
// ];

// export default function FinderSection() {
//   const nav = useNavigate();
//   return (
//     <section className="px-8 mt-12">
//       <div className="flex items-center gap-6 mb-6">
//         <img src="/images/model-finder.svg" alt="" className="h-12 w-12"/>
//         <div>
//           <h2 className="text-2xl font-semibold">Model Finder</h2>
//           <p className="text-gray-600">What kind of problem are you trying to solve?</p>
//           <p className="text-gray-500 text-sm">
//             For example, if you’re working on an NLP task…
//           </p>
//           <div className="mt-2 flex flex-wrap gap-2">
//             {['Image','Text','Audio','Multimodal','Video'].map(l => (
//               <button
//                 key={l}
//                 onClick={()=>nav(`/models?task=${l.toLowerCase()}`)}
//                 className="px-3 py-1 border rounded-full flex items-center gap-1 hover:bg-gray-100"
//               >
//                 {l} <ChevronRight className="h-4 w-4"/>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//       {categories.map(c => (
//         <CategorySection key={c.title} category={c}/>
//       ))}
//     </section>
// );
// }

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ChevronRight } from 'lucide-react';

// const categories = [
//   { title: 'Text-To-Image', icon: '/images/text-to-image.svg', path: '/404' },
//   { title: 'Multitask Classification', icon: '/images/multitask.svg', path: '/404' },
//   { title: 'Tabular Classification', icon: '/images/tabular.svg', path: '/404' },
//   { title: 'Image Augmentation', icon: '/images/image-augmentation.svg', path: '/404' },
// ];

// export default function FinderSection() {
//   const nav = useNavigate();
//   return (
//     <section className="px-8 mt-12">
//       <div className="flex items-center gap-6 mb-6">
//         <img src="/images/model-finder.svg" className="w-12 h-12" alt="" />
//         <div>
//           <h2 className="text-2xl font-semibold">Model Finder</h2>
//           <p className="text-gray-600">What kind of problem are you trying to solve?</p>
//           <p className="text-gray-500 text-sm">
//             For example, if you’re working on a natural language processing task…
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-wrap gap-2 mb-8">
//         {['Image','Text','Audio','Multimodal','Video'].map((t) => (
//           <button
//             key={t}
//             onClick={() => nav('/404')}
//             className="px-3 py-1 border rounded-full flex items-center gap-1 hover:bg-gray-100"
//           >
//             {t} <ChevronRight className="w-4 h-4" />
//           </button>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         {categories.map((c) => (
//           <div
//             key={c.title}
//             onClick={() => nav(c.path)}
//             className="relative border rounded-lg p-4 bg-white hover:shadow-md cursor-pointer"
//           >
//             <img src={c.icon} className="w-full h-24 object-cover mb-4" alt="" />
//             <h3 className="text-lg font-medium">{c.title}</h3>
//             <ChevronRight className="absolute top-4 right-4 text-gray-600" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FinderSection() {
  const nav = useNavigate();
  const types = ['Image', 'Text', 'Audio', 'Multimodal', 'Video'];

  return (
    <section className="px-8 mt-12">
      <div className="flex items-center gap-6 mb-6">
        <img src="/images/modelImages/Screenshot 2025-05-21 085009.png" className="w-12 h-12" alt="" />
        <div>
          <h2 className="text-2xl font-semibold">Model Finder</h2>
          <p className="text-gray-600">What kind of problem are you trying to solve?</p>
          <p className="text-gray-500 text-sm">
            For example, if you’re working on a natural language processing task…
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => nav('/404')}
            className="px-3 py-1 border rounded-full flex items-center gap-1 hover:bg-gray-100"
          >
            {t} <ChevronRight size={14} />
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {[
          { title: 'Text-To-Image', icon: '/images/text-to-image.svg' },
          { title: 'Multitask Classification', icon: '/images/multitask.svg' },
          { title: 'Tabular Classification', icon: '/images/tabular.svg' },
          { title: 'Image Augmentation', icon: '/images/image-augmentation.svg' }
        ].map(({ title, icon }) => (
          <div
            key={title}
            onClick={() => nav('/404')}
            className="relative border rounded-lg p-4 bg-white hover:shadow-md cursor-pointer"
          >
            <img src={icon} className="w-full h-24 object-cover mb-4" alt="" />
            <h3 className="text-lg font-medium">{title}</h3>
            <ChevronRight className="absolute top-4 right-4 text-gray-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
