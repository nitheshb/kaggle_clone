// import { Link } from 'react-router-dom';

// const Models = () => {
//   return (
//     <div className="max-w-[1200px] mx-auto">
//       <h1 className="text-3xl font-bold text-gray-900 mb-6">Models</h1>
//       <p className="text-gray-700">
//         Discover and use pre-trained models from the Kaggle community.
//       </p>
//     </div>
//   );
// };

// export default Models;

import React, { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import CompetitionNavbarA from '../components/layout/NavbarA.jsx';

import {
  Star,
  TrendingUp,
  Repeat2,
  Users,
  Plus
} from 'lucide-react';

import SearchBar from '../components/models/SearchBar.jsx';
import FiltersBar from '../components/models/FiltersBar.jsx';
import SectionCardList from '../components/models/SectionCardList.jsx';
import ModelCard from '../components/models/ModelCard.jsx';
import FinderSection from '../components/models/FinderSection.jsx';
import GuidesSection from '../components/models/GuidesSection.jsx';


// dummy data — replace with your real arrays
const featuredModels = [
  { name: 'Qwen 3', owner: 'QwenLM', variations: 37, notebooks: 17, votes: 207, 
    avatar: '/images/modelImages/Screenshot 2025-05-20 141256.png', 
    description: 'Qwen3 is the latest generation of large…' },
  { name: 'Gemini 2.5 Flash API', owner: 'Google', variations: 1, notebooks: 5, votes: 104, 
    avatar: '/images/modelImages/Screenshot 2025-05-20 141309.png', 
    description: 'A new family of multimodal models fro…' },
  { name: 'deepcogito', owner: 'Deep Cogito', variations: 5, notebooks: 0, votes: 30, 
    avatar: '/images/modelImages/Screenshot 2025-05-20 141318.png',
     description: 'The newly developed LLMs surpass ex…' },
  { name: 'AlphaSpace', owner: 'Menlo Research', variations: 1, notebooks: 0, votes: 18,
     avatar: '/images/modelImages/Screenshot 2025-05-20 141335.png', description: 'AlphaSpace enables language models…' }
];

const trendingModels = [
  { name: 'Qwen 3', owner: 'QwenLM', variations: 37, notebooks: 17, votes: 207, avatar: 'images/modelImages/Screenshot 2025-05-20 141256.png' },
  { name: 'Gemini 2.5 Flash API', owner: 'Google', variations: 1, notebooks: 5, votes: 104, avatar: '/images/modelImages/Screenshot 2025-05-20 141309.png' },
  { name: 'Gemma 3', owner: 'Keras', variations: 14, notebooks: 11, votes: 132, avatar: '/images/modelImages/Screenshot 2025-05-20 141318.png' },
  { name: 'PaliGemma 2', owner: 'Google', variations: 40, notebooks: 52, votes: 189, avatar: '/images/modelImages/Screenshot 2025-05-20 141335.png' }
];

const huggingFaceModels = [
  { name: 'google-bert/bert-base-uncased', owner: 'Linked from Hugging Face', description: 'Last Updated 1y ago', variations: 0, notebooks: 0, votes: 4, 
    avatar: '/images/modelImages/hf-icon.png' },
  { name: 'timm/efficientnet_b0.ra_in1k', owner: 'Linked from Hugging Face', description: 'Last Updated 4mo ago', variations: 0, notebooks: 0, votes: 2, avatar:  '/images/modelImages/hf-icon.png' },
  { name: 'distilbert/distilbert-base-uncased', owner: 'Linked from Hugging Face', description: 'Last Updated 1y ago', variations: 0, notebooks: 0, votes: 1, avatar: '/images/modelImages/hf-icon.png' },
  { name: 'sentence-transformers/all-MiniLM-L6-v2', owner: 'Linked from Hugging Face', description: 'Last Updated 2mo ago', variations: 0, notebooks: 0, votes: 2, avatar:  '/images/modelImages/hf-icon.png' }
];

const communityModels = [
  { name: 'TapsiFlow', owner: 'Peyman Daei Rezaei', variations: 2, notebooks: 1, votes: 20, 
    avatar: '/images/modelImages/Screenshot 2025-05-21 083819.png', description: 'High-accuracy urban ride request pred…' },
  { name: 'dreamshaper-xl-turbo', owner: 'Archit Kohli · VAE', variations: 1, notebooks: 1, votes: 2, 
    avatar: '/images/modelImages/Screenshot 2025-05-21 083835.png', description: 'dreamshaper-xl-turbo is a Stable Diffu…' },
  { name: 'clip-vit-large-patch14', owner: 'Zhuang Jia', variations: 1, notebooks: 24, votes: 24, 
    avatar: '/images/modelImages/Screenshot 2025-05-21 083859.png', description: '' },
  { name: 'SDXL-Lightning', owner: 'arnavkohli2005 · Unet', variations: 1, notebooks: 0, votes: 12, 
    avatar: '/images/modelImages/Screenshot 2025-05-20 141318.png', description: '4-Step Inference Unet Safetensors for …' },
  { name: 'sac-logos-ava1-l14-linearmse', owner: 'Zhuang Jia', variations: 1, notebooks: 24, votes: 20, 
    avatar: '/images/modelImages/Screenshot 2025-05-21 083859.png', description: '' },
  { name: 'RibonanzaNet2', owner: 'Shujun', variations: 1, notebooks: 4, votes: 13, 
    avatar: '/images/modelImages/Screenshot 2025-05-21 083910.png', description: '' },
  { name: 'ALIKED', owner: 'old-ufo', variations: 4, notebooks: 67, votes: 54, 
    avatar: '/images/modelImages/Screenshot 2025-05-21 083922.png', description: 'ALIKED: A Lighter Keypoint and Descri…' }
];

export default function ModelsPage() {
  const nav        = useNavigate();
  const filtersRef = useRef(null);

  // useLayoutEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => { document.body.style.overflow = ''; };
  // }, []);

  useLayoutEffect(() => {
  // no longer disabling body scroll
   return () => {};
  }, []);

  const scrollX = (dx) => filtersRef.current?.scrollBy({ left: dx, behavior: 'smooth' });

  

  return (
    <>
      <CompetitionNavbarA visible />

      <div className="max-w-[1200px] mx-auto px-2 md:px-6 pt-6 bg-white">
        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Models</h1>
            <p className="text-gray-600">
              Discover and use thousands of machine learning models, including the most popular diffusion models and LLMs.{' '}
              <a
                href="https://github.com/Kaggle/kagglehub"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-600"
              >
                Learn how to share with the community and use the kagglehub library
              </a>.
            </p>
            <button
              onClick={() => nav('/404')}
              className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900"
            >
              <Plus className="h-4 w-4" /> New Model
            </button>
          </div>
          <div className="mt-6 md:mt-0">
            <img
              src="/images/modelImages/landing-header-light (1).svg"
              alt="Models illustration"
              className="h-60 w-60"
            />
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <SearchBar placeholder="Search Models" maxWidth="5xl" />
        </div>

        {/* Filters */}
        <div className="mb-12">
          <FiltersBar
            refContainer={filtersRef}
            onLeft={() => scrollX(-200)}
            onRight={() => scrollX(200)}
            filters={[
              'All Filters',
              'All Models',
              'Task',
              'Data Type',
              'Framework',
              'Language',
              'License',
              'Size',
              'Usability Rating',
              'Fine Tunability'
            ]}
          />
        </div>

        {/* Featured Models */}
        <div className="mb-12">
          <SectionCardList
            title="Featured Models"
            subtitle="Explore a rotation of featured models curated by the Kaggle team"
            icon={<Star size={20} />}
            items={featuredModels}
            Card={ModelCard}
            seeAll="/404"
          />
        </div>

        {/* Trending Models */}
        <div className="mb-12">
          <SectionCardList
            title="Trending Models"
            icon={<TrendingUp size={20} />}
            items={trendingModels}
            Card={ModelCard}
            seeAll="/404"
          />
        </div>

        {/* Hugging Face Models */}
        <div className="mb-12">
          <SectionCardList
            title="Hugging Face Models"
            icon={<Repeat2 size={20} />}
            items={huggingFaceModels}
            Card={ModelCard}
            seeAll="/404"
          />
        </div>

        {/* Community Models */}
        <div className="mb-12">
          <SectionCardList
            title="Community Models"
            subtitle="Models uploaded by the Kaggle community"
            icon={<Users size={20} />}
            items={communityModels}
            Card={ModelCard}
            seeAll="/404"
          />
        </div>

        {/* Finder Section */}
        <div className="mb-12">
          <FinderSection />
        </div>

        {/* Guides Section */}
        <div className="mb-12">
          <GuidesSection />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold">Didn't find what you were looking for?</h3>
          <p className="text-gray-600 mt-2">
            Explore models from organizations like Google Research, Deepmind, and more
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={() => nav('/404')}
              className="px-4 py-2 border rounded-full hover:bg-gray-100"
            >
              View all organization models
            </button>
            <button
              onClick={() => nav('/404')}
              className="px-4 py-2 border rounded-full hover:bg-gray-100"
            >
              View all community models
            </button>
          </div>
          <div className="mt-6">
            <button
              onClick={() => nav('/404')}
              className="text-blue-600 hover:underline"
            >
              Something missing? Make a model request
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


// export default function ModelsPage() {
//   const nav = useNavigate();
//   const filtersRef = useRef(null);
//   useLayoutEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => { document.body.style.overflow = ''; };
//   }, []);

//   const scroll = (dx) => filtersRef.current?.scrollBy({ left: dx, behavior: 'smooth' });

//   return (
//     <div className="flex h-screen overflow-hidden bg-white">
      
//       <div className="flex-1 flex flex-col">
//         <CompetitionNavbarA visible />

//         {/* <div className="flex-1 overflow-auto pb-8"> */}
//         {/* <div className="flex-1 overflow-auto pb-8 px-8 space-y-12"> */}
//         <div className="flex-1 overflow-y-auto overflow-x-hidden pb-8 px-8 space-y-12">
//           {/* Hero */}
//           <section className="px-8 pt-8 pb-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h1 className="text-4xl font-bold">Models</h1>
//               <p className="mt-4 text-lg text-gray-600">
//                 Discover and use thousands of machine learning models, including the most popular diffusion models and LLMs. Learn how to share with the community and use the{' '}
//                 <a href="https://github.com/Kaggle/kagglehub" target="_blank" rel="noreferrer" className="underline text-blue-600">
//                   kagglehub library
//                 </a>.
//               </p>
//               <button
//                 onClick={() => nav('/404')}
//                 className="mt-6 inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900"
//               >
//                 <Plus className="h-4 w-4" /> New Model
//               </button>
//             </div>
//             <div className="flex justify-end">
//               <img src="/images/modelImages/landing-header-light (1).svg" alt="" className="h-60 w-60" />
//             </div>
//           </section>

//           {/* Search & Filters */}
//           <SearchBar placeholder="Search Models" maxWidth="5xl" />
//           <FiltersBar
//             refContainer={filtersRef}
//             onLeft={() => scroll(-200)}
//             onRight={() => scroll(200)}
//             filters={[
//               'All Filters',
//               'All Models',
//               'Task',
//               'Data Type',
//               'Framework',
//               'Language',
//               'License',
//               'Size',
//               'Usability Rating',
//               'Fine Tunability'
//             ]}
//           />

//           {/* Sections */}
//           <SectionCardList
//             title="Featured Models"
//             subtitle="Explore a rotation of featured models curated by the Kaggle team"
//             icon={<Star size={20} />}
//             items={featuredModels}
//             Card={ModelCard}
//             seeAll="/404"
//           />

//           <SectionCardList
//             title="Trending Models"
//             icon={<TrendingUp size={20} />}
//             items={trendingModels}
//             Card={ModelCard}
//             seeAll="/404"
//           />

//           <SectionCardList
//             title="Hugging Face Models"
//             icon={<Repeat2 size={20} />}
//             items={huggingFaceModels}
//             Card={ModelCard}
//             seeAll="/404"
//           />

//           <SectionCardList
//             title="Community Models"
//             subtitle="Models uploaded by the Kaggle community"
//             icon={<Users size={20} />}
//             items={communityModels}
//             Card={ModelCard}
//             seeAll="/404"
//           />

//           {/* Finder & Guides */}
//           <FinderSection />
//           <GuidesSection />

//           {/* Bottom CTA */}
//           <section className=" text-center">
//             <h3 className="text-xl font-semibold">Didn't find what you were looking for?</h3>
//             <p className="text-gray-600 mt-2">
//               Explore models from organizations like Google Research, Deepmind, and more
//             </p>
//             <div className="mt-4 flex justify-center gap-4">
//               <button onClick={() => nav('/404')} className="px-4 py-2 border rounded-full hover:bg-gray-100">
//                 View all organization models
//               </button>
//               <button onClick={() => nav('/404')} className="px-4 py-2 border rounded-full hover:bg-gray-100">
//                 View all community models
//               </button>
//             </div>
//             <div className="mt-6">
//               <button onClick={() => nav('/404')} className="text-blue-600 hover:underline">
//                 Something missing? Make a model request
//               </button>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }
