import React, { useState } from 'react';
import NavbarA from "../components/layout/NavbarA";
import { Search, Filter, Plus, Star, MoreVertical, ChevronUp, TrendingUp } from 'lucide-react';
import CompetitionNavbarA from '../components/layout/NavbarA';


const addDefaultAvatars = (datasets) => {
  return datasets.map(ds => ({
    ...ds,
    authorAvatar: ds.authorAvatar
  }));
};

const DatasetCard = ({
  thumbnail,
  title,
  author,
  authorAvatar,
  updated,
  usability,
  size,
  files,
  fileType,
  upvotes,
  percentage = 0 // Add percentage prop
}) => {
  // Function to determine color based on percentage
  const getPercentageColor = (percentage) => {
    if (percentage >= 75) return '#10B981'; // Green
    if (percentage >= 50) return '#3B82F6'; // Blue
    if (percentage >= 25) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  // Render avatar with circular percentage indicator
  const renderAuthorAvatar = (author, avatarUrl, percentage) => {
    return (
      <div className="relative w-8 h-8">
        {/* Avatar */}
        <div className="w-full h-full rounded-full overflow-hidden">
          <img 
            src={avatarUrl} 
            alt={author} 
            className="w-full h-full object-cover border border-gray-200" 
          />
        </div>
        
        {/* Circular progress border */}
        {percentage > 0 && (
          <div className="absolute -top-1 -left-1 w-10 h-10 rounded-full">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="4"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke={getPercentageColor(percentage)}
                strokeWidth="4"
                strokeDasharray="301.6" // 2πr ≈ 301.6 (for r=48)
                strokeDashoffset={301.6 * (1 - percentage / 100)}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
      {/* Thumbnail Image - Fixed height */}
      <div className="w-full h-36 overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={thumbnail || "/api/placeholder/400/300"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content - Flexbox to ensure consistent spacing */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title and menu - Fixed height area */}
        <div className="flex justify-between items-start mb-2 min-h-12">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 pr-2">{title}</h3>
          <button className="text-gray-500 flex-shrink-0 mt-1">
            <MoreVertical size={18} />
          </button>
        </div>

        {/* Author and update info - Fixed height */}
        <div className="flex items-center text-sm mb-1 h-5 space-x-1">
          <span className="font-medium text-gray-700 truncate max-w-32 whitespace-nowrap">{author}</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-500 text-xs whitespace-nowrap">{updated}</span>
        </div>

        {/* Usability and size - Fixed height */}
        <div className="flex items-center text-sm mb-1 h-5">
          <span className="text-gray-700">Usability {usability}</span>
          <span className="mx-1 text-gray-500">•</span>
          <span className="text-gray-500">{size}</span>
        </div>

        {/* Files info - Fixed height */}
        <div className="text-sm text-gray-500 h-5 mb-4">
          {files} {fileType}
        </div>

        {/* Spacer to push footer content to bottom */}
        <div className="flex-grow"></div>

        {/* Horizontal Line - Always at the same relative position */}
        <div className="border-b border-gray-200 w-full mb-3"></div>

        {/* Footer content - Upvotes and Avatar with percentage */}
        <div className="flex items-center">
          <button className="flex items-center border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-100 transition-colors duration-200">
            <ChevronUp size={16} className="mr-1" />
            <span>{upvotes}</span>
          </button>

          {/* Avatar with percentage circle */}
          <div className="ml-auto">
            {renderAuthorAvatar(author, authorAvatar, percentage)}
          </div>
        </div>
      </div>
    </div>
  );
};

// Not Found Message Component
const NotFoundMessage = () => (
  <div className="text-center py-20">
    <h2 className="text-2xl font-semibold mb-4">Didn't find what you were looking for?</h2>
    <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200">
      Explore all public datasets
    </button>
  </div>
);

// Section Header Component for consistency
const SectionHeader = ({ icon, title, showSeeAll = true }) => (
  <div className="mb-4 mt-[-16px] flex items-center justify-between">
    <div className="flex items-center gap-2">
      {icon === 'star' ? (
        <Star className="text-gray-800" />
      ) : (
        <TrendingUp className="text-gray-800" />
      )}
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    {showSeeAll && (
      <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold">See All</a>
    )}
  </div>
);

export default function Datasets() {
  const [activeTab, setActiveTab] = useState('All datasets');

  const categories = [
    'All datasets',
    'Computer Science',
    'Education',
    'Classification',
    'Computer Vision',
    'NLP',
    'Data Visualization',
    'Pre-Trained Model'
  ];

  // Featured Datasets with percentage values
  const featuredDatasets = [
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7112711/11363773/7fb8f37b0d9245083355d89ca646fa01/dataset-thumbnail.png?t=2025-04-11-17-01-42",
      title: "Wikipedia Structured Contents",
      author: "Wikimedia",
      authorAvatar: "https://storage.googleapis.com/kaggle-organizations/5103/thumbnail.png?t=2025-03-20-19-58-34",
      updated: "Updated a month ago",
      usability: "8.1",
      size: "25 GB",
      files: "54 Files",
      fileType: "(JSON)",
      upvotes: 306,
      percentage: 85
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7201678/11489202/2c420f0de442f9cc7b041e13eb990419/dataset-thumbnail.png?t=2025-04-20-16-19-45",
      title: "Machine Learning Job Postings in the US",
      author: "Ivan Kumeyko",
      authorAvatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/1246158-kg.jpeg?t=2025-04-12-15-51-47",
      updated: "Updated a month ago",
      usability: "10.0",
      size: "2 MB",
      files: "1 File",
      fileType: "(CSV)",
      upvotes: 113,
      percentage: 95
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7420211/11813893/104d5864784be6e8d929ee25e13271de/dataset-thumbnail.png?t=2025-05-14-18-49-05",
      title: "Musical Instruments",
      author: "NikolasGegenava",
      authorAvatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/21923359-kg.png?t=2024-09-13-08-36-40",
      updated: "Updated 3 days ago",
      usability: "10.0",
      size: "7 MB",
      files: "1807 Files",
      fileType: "(other, CSV)",
      upvotes: 11,
      percentage: 78
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7430201/11827718/950d268ccba737c7e919e40c4c4546b0/dataset-thumbnail.png?t=2025-05-15-19-38-38",
      title: "Global AI Ethics Standards",
      author: "Ethics Institute",
      authorAvatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/21646786-kg.jpeg?t=2024-08-29-07-32-46",
      updated: "Updated 2 days ago",
      usability: "9.5",
      size: "15 MB",
      files: "5 Files",
      fileType: "(PDF, CSV)",
      upvotes: 42,
      percentage: 62
    }
  ];

  // Trending Datasets with percentage values
  const trendingDatasets = [
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7351340/11717386/f2ab3c8921ccd6b1cd8055eee3b48b15/dataset-thumbnail.png?t=2025-05-07-11-46-50",
      title: "Peer-to-Peer Boliviano (BOB) Exchange Data",
      author: "Andrés Humberto Chirinos Lizondo",
      authorAvatar: "https://i.pravatar.cc/150?img=35",
      updated: "Updated 13 days ago",
      usability: "9.4",
      size: "14 MB",
      files: "3 Files",
      fileType: "(other)",
      upvotes: 13,
      percentage: 45
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7377931/11752314/4b507c64fbada0784ac5915b4f4f52db/dataset-thumbnail.png?t=2025-05-09-23-04-35",
      title: "OpenFWI Preprocessed 72×72",
      author: "Bartley",
      authorAvatar: "https://i.pravatar.cc/150?img=36",
      updated: "Updated 4 days ago",
      usability: "10.0",
      size: "21 GB",
      files: "1884 Files",
      fileType: "(other, CSV)",
      upvotes: 19,
      percentage: 88
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7365466/11732861/a1cc6008560aedd0f28d3adbe92f2806/dataset-thumbnail.png?t=2025-05-08-12-45-56",
      title: "Health and Sleep relation",
      author: "Orvile",
      authorAvatar: "https://i.pravatar.cc/150?img=37",
      updated: "Updated 9 days ago",
      usability: "10.0",
      size: "3 kB",
      files: "1 File",
      fileType: "(CSV)",
      upvotes: 15,
      percentage: 72
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7376188/11749643/503d741f3504e35bee84df22c1e0d345/dataset-thumbnail.jpg?t=2025-05-09-15-54-03",
      title: "It's raining cats",
      author: "JoannaN_PL_KRK",
      authorAvatar: "https://i.pravatar.cc/150?img=38",
      updated: "Updated 7 days ago",
      usability: "10.0",
      size: "2 MB",
      files: "11 Files",
      fileType: "(other, CSV)",
      upvotes: 10,
      percentage: 38
    }
  ];

  // Exercise Datasets with percentage values
  const exerciseDatasets = [
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7109982/11360051/ea853ed66af410e1de288b88de54b084/dataset-thumbnail.jpg?t=2025-04-10-21-27-09",
      title: "FitBit dataset",
      author: "Priscilla Aihoon",
      authorAvatar: "https://i.pravatar.cc/150?img=28",
      updated: "Updated a month ago",
      usability: "8.2",
      size: "20 MB",
      files: "11 Files",
      fileType: "(CSV)",
      upvotes: 6,
      percentage: 55
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/4989133/8388279/61a7eba4ca8ec1fc23ce7bcfb1c434dd/dataset-thumbnail.jpg?t=2024-05-12-04-24-20",
      title: "Gym Workout/Exercises Video",
      author: "vm7608",
      authorAvatar: "https://i.pravatar.cc/150?img=41",
      updated: "Updated a year ago",
      usability: "6.3",
      size: "10 GB",
      files: "2618 Files",
      fileType: "(other)",
      upvotes: 14,
      percentage: 30
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/6673233/10783888/acd33e50f12bb1e6ce0acafa77c519e7/dataset-thumbnail.png?t=2025-02-24-12-49-40",
      title: "Industrial Accidents Brazil from News 2011-2017",
      author: "Lhucas Tenorio",
      authorAvatar: "https://i.pravatar.cc/150?img=32",
      updated: "Updated 3 months ago",
      usability: "10.0",
      size: "6 kB",
      files: "1 File",
      fileType: "(CSV)",
      upvotes: 10,
      percentage: 82
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7374108/11746679/dab8d5f606015bc443b151e00297517d/dataset-thumbnail.jpg?t=2025-05-12-15-54-03",
      title: "Fitbit Data for Bellabeat Case Study",
      author: "Marzia Bombaci",
      authorAvatar: "https://i.pravatar.cc/150?img=25",
      updated: "Updated 8 days ago",
      usability: "9.4",
      size: "9 MB",
      files: "4 Files",
      fileType: "(CSV)",
      upvotes: 0,
      percentage: 68
    }
  ];

  // Finance Datasets with percentage values
  const financeDatasets = [
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7083324/11324518/eb263e4b5ae78e6952cea2c157ec0304/dataset-thumbnail.jpg?t=2025-04-08-10-09-46",
      title: "Credit Risk Benchmark Dataset",
      author: "Adil Shamim",
      authorAvatar: "https://i.pravatar.cc/150?img=50",
      updated: "Updated a month ago",
      usability: "10.0",
      size: "316 kB",
      files: "1 File",
      fileType: "(CSV)",
      upvotes: 15,
      percentage: 90
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7087153/11329705/2c2dca5faf605f305faeb7aa3327898f/dataset-thumbnail.jpg?t=2025-04-08-16-58-51",
      title: "GDP Per Capita | Gov Expenditure | Trade",
      author: "Shaswata Tripathy",
      authorAvatar: "https://i.pravatar.cc/150?img=51",
      updated: "Updated a month ago",
      usability: "10.0",
      size: "725 kB",
      files: "1 File",
      fileType: "(CSV)",
      upvotes: 6,
      percentage: 75
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7115872/11389044/94b048432fc889628d7c191ed09a8467/dataset-thumbnail.jpg?t=2025-04-16-07-13-52",
      title: "Audit opinions of Turkish Public Companies",
      author: "Agra Fintech",
      authorAvatar: "https://i.pravatar.cc/150?img=52",
      updated: "Updated a month ago",
      usability: "10.0",
      size: "6 MB",
      files: "1 File",
      fileType: "(CSV)",
      upvotes: 14,
      percentage: 58
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7249300/11561712/96d1b8dc7d0281bbdcb327dda84c1c09/dataset-thumbnail.png?t=2025-04-25-11-20-29",
      title: "GOOGLE STOCK PRICES (2004 - TODAY)",
      author: "Emre Kaan Yılmaz",
      authorAvatar: "https://i.pravatar.cc/150?img=53",
      updated: "Updated 11 hours ago",
      usability: "10.0",
      size: "97 kB",
      files: "1 File",
      fileType: "(CSV)",
      upvotes: 1,
      percentage: 42
    }
  ];

  // Programming Datasets with percentage values
  const programmingDatasets = [
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7326817/11674264/e0febcc3d19bde3fd98af37a4cd7c9a2/dataset-thumbnail.png?t=2025-05-04-15-00-13",
      title: "Pokedex Pokemon Data",
      author: "Lmno3418",
      authorAvatar: "https://i.pravatar.cc/150?img=60",
      updated: "Updated 6 days ago",
      usability: "10.0",
      size: "18 MB",
      files: "13 Files",
      fileType: "(other, CSV)",
      upvotes: 4,
      percentage: 28
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7328512/11676586/8c1bc865daa62b2b61075bc8f1806ffe/dataset-thumbnail.jpg?t=2025-05-04-19-27-29",
      title: "Turkish Grammar MMLU",
      author: "suayptalha",
      authorAvatar: "https://i.pravatar.cc/150?img=61",
      updated: "Updated 13 days ago",
      usability: "10.0",
      size: "459 kB",
      files: "1 File",
      fileType: "(CSV)",
      upvotes: 7,
      percentage: 65
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/6999081/11208955/1f336e9b1c4ed822d1bd92c9750b8cee/dataset-thumbnail.png?t=2025-04-08-17-32-01",
      title: "MHSMA (Sperm Morphology Analysis)",
      author: "Orvile",
      authorAvatar: "https://i.pravatar.cc/150?img=62",
      updated: "Updated a month ago",
      usability: "10.0",
      size: "14 MB",
      files: "23 Files",
      fileType: "(other, CSV)",
      upvotes: 21,
      percentage: 87
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7331942/11682060/b94fb411817702d5f1b96ebf662b23de/dataset-thumbnail.png?t=2025-05-05-08-40-44",
      title: "India's Fast Delivery Agents Reviews and Ratings",
      author: "Kanak Baghel",
      authorAvatar: "https://i.pravatar.cc/150?img=63",
      updated: "Updated 12 days ago",
      usability: "6.5",
      size: "177 kB",
      files: "1 File",
      fileType: "(CSV)",
      upvotes: 3,
      percentage: 33
    }
  ];

  // Text Datasets with percentage values
  const textDatasets = [
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7278464/11604520/60c1f559af37575342c980a6de23b1a5/dataset-thumbnail.png?t=2025-04-28-20-03-52",
      title: "Real & Fake News",
      author: "Ali Raza",
      authorAvatar: "https://i.pravatar.cc/150?img=70",
      updated: "Updated 19 days ago",
      usability: "8.2",
      size: "43 MB",
      files: "2 Files",
      fileType: "(CSV)",
      upvotes: 26,
      percentage: 76
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7108693/11358418/289b0ac2e422a40a6730d98291dfdbc3/dataset-thumbnail.png?t=2025-04-10-17-54-28",
      title: "draw-svg-validation",
      author: "Rares Barbantan",
      authorAvatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png",
      updated: "Updated a month ago",
      usability: "8.2",
      size: "9 kB",
      files: "1 File",
      fileType: "(CSV)",
      upvotes: 13,
      percentage: 52
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7227549/11524324/ef623c046b67d4f4868dbbeefc8d42e5/dataset-thumbnail.jpg?t=2025-04-23-06-41-05",
      title: "Baby name dataset (40k) Indian & American",
      author: "Bikram Saha",
      authorAvatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/12456060-kg.jpg?t=2025-02-10-18-12-47",
      updated: "Updated 24 days ago",
      usability: "10.0",
      size: "117 kB",
      files: "1 File",
      fileType: "(other)",
      upvotes: 12,
      percentage: 83
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7304337/11640721/1423d0058c0bd9ce494a0c1759bda93e/dataset-thumbnail.png?t=2025-05-01-18-15-56",
      title: "(Stressor) Cause of Mental Health Problems",
      author: "Xin Wang",
      authorAvatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/5570735-kg.png?t=2024-03-12-19-54-34",
      updated: "Updated 16 days ago",
      usability: "8.8",
      size: "289 kB",
      files: "2 Files",
      fileType: "(JSON)",
      upvotes: 10,
      percentage: 47
    }
  ];

  // Social Issues And Advocacy Datasets with percentage values
  const socialDatasets = [
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7155171/11424750/73ec224f9860e6d3b13f3e909c1a2c25/dataset-thumbnail.jpg?t=2025-04-15-18-04-49",
      title: "Social Conflict Analysis | Database",
      author: "mexwell",
      authorAvatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/4315813-kg.jpg",
      updated: "Updated a month ago",
      usability: "9.4",
      size: "2 MB",
      files: "3 Files",
      fileType: "(CSV, other)",
      upvotes: 10,
      percentage: 71
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/7218008/11510985/e7870c7a7c683f132fb5b2ace23ae725/dataset-thumbnail.png?t=2025-04-22-08-16-10",
      title: "Legal Dataset: SC Judgments India (1950 - 2018)",
      author: "FanaticAuthorship",
      authorAvatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/22146488-kg.jpg?t=2025-03-31-06-42-29",
      updated: "Updated 25 days ago",
      usability: "8.1",
      size: "7 GB",
      files: "26689 Files",
      fileType: "(other)",
      upvotes: 9,
      percentage: 59
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/new-version-temp-images/default-backgrounds-65.png-1623761/dataset-thumbnail.png",
      title: "World Demographic Indicators Extract",
      author: "Ian Dickerson",
      authorAvatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/13418410-kg.jpg?t=2024-02-25-09-09-26",
      updated: "Updated 4 years ago",
      usability: "8.2",
      size: "16 kB",
      files: "1 File",
      fileType: "(CSV)",
      upvotes: 15,
      percentage: 25
    },
    {
      thumbnail: "https://storage.googleapis.com/kaggle-datasets-images/6968281/11166410/f6e49b35ef9eac31af52fb37a45b6829/dataset-thumbnail.jpg?t=2025-03-25-23-00-37",
      title: "AQI Relation to Respiratory Death Rate",
      author: "Jack Smith",
      authorAvatar: "https://storage.googleapis.com/kaggle-avatars/thumbnails/12456060-kg.jpg?t=2025-02-10-18-12-47",
      updated: "Updated 2 months ago",
      usability: "10.0",
      size: "670 kB",
      files: "1 File",
      fileType: "(CSV)",
      upvotes: 6,
      percentage: 89
    }
  ];

  return (
    <div>
      <CompetitionNavbarA visible /> {/* Added NavbarA here */}
      {/* Main content area */}
      <div className="overflow-auto h-screen">
        {/* Non-sticky header section */}
        <div className="bg-white pt-6 px-12">
          {/* Title and image section */}
          <div className="flex justify-between items-start">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-900">Datasets</h1>
              <p className="mt-2 text-gray-600">
                Explore, analyze, and share quality data.{' '}
                <a href="#" className="text-gray-600 underline">Learn more</a>{' '}
                about data types, creating, and collaborating.
              </p>

              <button className="mt-6 flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
                <Plus size={20} />
                <span>New Dataset</span>
              </button>
            </div>

            <div>
              <img src="/Datasets.svg" alt="Datasets Illustration" width={280} height={208} />
            </div>


          </div>

          {/* Search bar */}
        <div className="relative mb-4 mt-6">  {/* Added mt-6 for space above */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <Search size={20} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search datasets"
              className="w-full bg-transparent border-none focus:outline-none text-gray-700"
            />
            <div className="border-l border-gray-300 pl-3 flex items-center">
              <Filter size={18} className="text-gray-500 mr-1" />
              <span className="text-gray-700 font-medium">Filters</span>
            </div>
          </div>
        </div>

        </div>

        {/* Sticky category tabs */}
        <div className="sticky top-0 bg-white z-10 py-4 px-12 border-b border-gray-200 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeTab === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors duration-200'
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* Featured Datasets Section */}
        <div className="p-8 px-12">
          <SectionHeader icon="star" title="Featured Datasets" />
          <p className="text-gray-700 mb-6">
            Explore a rotation of featured datasets curated by the Kaggle team
          </p>

          {/* Featured Dataset Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {addDefaultAvatars(featuredDatasets).map((dataset, index) => (
              <DatasetCard key={`featured-${index}`} {...dataset} />
            ))}
          </div>

          {/* Horizontal line below the grid with extra top space */}
          <div className="border-b border-gray-300 mt-10 mb-6"></div>
        </div>

        {/* Trending Datasets Section */}
        <div className="p-8 px-12">
          <SectionHeader icon="trending" title="Trending Datasets" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {addDefaultAvatars(trendingDatasets).map((dataset, index) => (
              <DatasetCard key={`trending-${index}`} {...dataset} />
            ))}
          </div>
          <div className="border-b border-gray-300 mt-10 mb-6"></div>
        </div>
        {/* Exercise Section */}
        <div className="p-8 px-12">
          <SectionHeader icon="trending" title="Exercise" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {addDefaultAvatars(exerciseDatasets).map((dataset, index) => (
              <DatasetCard key={`exercise-${index}`} {...dataset} />
            ))}
          </div>
          <div className="border-b border-gray-300 mt-10 mb-6"></div>
        </div>
        {/* Finance Section */}
        <div className="p-8 px-12">
          <SectionHeader icon="trending" title="Finance" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {addDefaultAvatars(financeDatasets).map((dataset, index) => (
              <DatasetCard key={`finance-${index}`} {...dataset} />
            ))}
          </div>
          <div className="border-b border-gray-300 mt-10 mb-6"></div>
        </div>
        {/* Programming Section */}
        <div className="p-8 px-12">
          <SectionHeader icon="trending" title="Programming" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {addDefaultAvatars(programmingDatasets).map((dataset, index) => (
              <DatasetCard key={`programming-${index}`} {...dataset} />
            ))}
          </div>
          <div className="border-b border-gray-300 mt-10 mb-6"></div>
        </div>
        {/* Text Data Section */}
        <div className="p-8 px-12">
          <SectionHeader icon="trending" title="Text Data" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {addDefaultAvatars(textDatasets).map((dataset, index) => (
              <DatasetCard key={`text-${index}`} {...dataset} />
            ))}
          </div>
          <div className="border-b border-gray-300 mt-10 mb-6"></div>
        </div>
        {/* Social Issues And Advocacy Section */}
        <div className="p-8 px-12">
          <SectionHeader icon="trending" title="Social Issues And Advocacy" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {addDefaultAvatars(socialDatasets).map((dataset, index) => (
              <DatasetCard key={`social-${index}`} {...dataset} />
            ))}
          </div>
          <div className="border-b border-gray-300 mt-10 mb-6"></div>
        </div>
        {/* Not Found Message Section */}
        <NotFoundMessage />
      </div>
    </div>
  );
}
