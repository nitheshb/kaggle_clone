// import React from 'react';
// import { Bookmark } from 'lucide-react';
// import GuideCard    from './GuideCard.jsx';

// const guides = [
//   { title:'Models for Image Data', icon:'/images/models-for-image-data.svg', description:'Use models for classification…', path:'/learn/image-models' },
//   { title:'Models for Text Data',  icon:'/images/models-for-text-data.svg', description:'Use models for sentiment analysis…', path:'/learn/text-models' },
//   { title:'Models for Audio Data', icon:'/images/models-for-audio-data.svg', description:'Use models for speech recognition…', path:'/learn/audio-models' },
// ];

// export default function GuidesSection() {
//   return (
//     <section className="px-8 mt-12 mb-8">
//       <div className="flex items-center gap-2 mb-2 text-gray-800">
//         <Bookmark className="h-5 w-5"/>
//         <h2 className="text-2xl font-semibold">Learn Guides</h2>
//       </div>
//       <p className="text-gray-600 mb-4">Learn how to use models</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {guides.map(g => <GuideCard key={g.title} guide={g}/>)}
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import { Bookmark } from 'lucide-react';
// import GuideCard from './GuideCard.jsx';

// const guides = [
//   {
//     title: 'Models for Image Data',
//     icon: '/images/models-for-image-data.svg',
//     description: 'Use models for classification, segmentation, object detection, and pose detection…',
//     path: '/404'
//   },
//   {
//     title: 'Models for Text Data',
//     icon: '/images/models-for-text-data.svg',
//     description: 'Use models for sentiment analysis, semantic textual similarity, and text to video retrieval…',
//     path: '/404'
//   },
//   {
//     title: 'Models for Audio Data',
//     icon: '/images/models-for-audio-data.svg',
//     description: 'Use models for classification, pitch detection, and automatic speech recognition…',
//     path: '/404'
//   }
// ];

// export default function GuidesSection() {
//   return (
//     <section className="px-8 mt-12 mb-8">
//       <div className="flex items-center gap-2 mb-2 text-gray-800">
//         <Bookmark className="w-5 h-5" />
//         <h2 className="text-2xl font-semibold">Learn Guides</h2>
//       </div>
//       <p className="text-gray-600 mb-4">Learn how to use models</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {guides.map((g) => <GuideCard key={g.title} guide={g} />)}
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { Bookmark } from 'lucide-react';
import GuideCard from './GuideCard.jsx';

export default function GuidesSection() {
  return (
    <section className="px-8 mt-12 mb-8">
      <div className="flex items-center gap-2 mb-2 text-gray-800">
        <Bookmark size={20} />
        <h2 className="text-2xl font-semibold">Learn Guides</h2>
      </div>
      <p className="text-gray-600 mb-4">Learn how to use models</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Models for Image Data',
            icon: '/images/models-for-image-data.svg',
            description:
              'Use models for classification, segmentation, object detection, and pose detection…'
          },
          {
            title: 'Models for Text Data',
            icon: '/images/models-for-text-data.svg',
            description:
              'Use models for sentiment analysis, semantic textual similarity, and text to video retrieval…'
          },
          {
            title: 'Models for Audio Data',
            icon: '/images/models-for-audio-data.svg',
            description:
              'Use models for classification, pitch detection, and automatic speech recognition…'
          }
        ].map((g) => <GuideCard key={g.title} guide={g} />)}
      </div>
    </section>
  );
}
