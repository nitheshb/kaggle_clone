import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import CompetitionNavbarA from '../../components/layout/NavbarA';
import CodeNavbarB from './CodeNavbarB';
import { Plus, Search, ListFilter } from 'lucide-react';

import NotebookCard from './NotebookCard';
import CourseCard from './CourseCard';

const Code = () => {
  const [showNavbarA, setShowNavbarA] = useState(true);
  const [showNavbarB, setShowNavbarB] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All notebooks');
  const headerRef = useRef(null);
  const searchRef = useRef(null);

  const filters = [
    'All notebooks', 
    'Recently Viewed', 
    'Package', 
    'Python', 
    'R', 
    'Beginner', 
    'NLP', 
    'Random Forest', 
    'GPU', 
    'TPU'
  ];

  const trendingNotebooks = [
    {
      id: 1,
      title: '【1st Solution】CatBoost&LGBM',
      thumbnail: 'images/Code/Trending1.png',
      updatedTime: 'Updated an hour ago',
      description: 'Data Science Osaka Spring 2025',
      progress: 75,
      upvotes: 5,
      author: {
        avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/7891647-kg.jpg?t=2025-05-11-11-42-51',
        tier: 'bronze'
      }
    },
    {
      id: 2,
      title: 'GWI 2025 - Velocity Patterns',
      thumbnail: 'images/Code/Trending2.png',
      updatedTime: 'Updated 8 hours ago',
      description: 'Yale/UNC-CH - Geophysical Waveform Inversion',
      upvotes: 9,
      progress: 35,
      author: {
        avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/9713336-kg.png?t=2024-12-21-01-52-59',
        tier: 'silver'
      }
    },
    {
      id: 3,
      title: 'ctai-ufba-calorie-expenditure',
      thumbnail: 'images/Code/Trending3.png',
      updatedTime: 'Updated 5 hours ago',
      description: 'Predict Calorie Expenditure',
      upvotes: 7,
      progress: 95,
      author: {
        avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/621084-kg.jpeg?t=2023-12-16-19-52-55',
        tier: 'bronze'
      }
    },
    {
      id: 4,
      title: 'NN Ideas Calorie',
      thumbnail: 'images/Code/Trending4.png',
      updatedTime: 'Updated 3 hours ago',
      description: 'Calories Burnt Prediction+1',
      upvotes: 11,
      progress: 15,
      author: {
        avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/4910466-kg.png?t=2024-08-29-07-34-32'
      }
    }
  ];

  const gradientBoostingNotebooks = [
    {
      id: 5,
      title: 'Predict Calorie Expenditure',
      thumbnail: 'images/Code/Trending3.png',
      updatedTime: 'Updated 15 days ago',
      description: 'Predict Calorie Expenditure',
      upvotes: 12,
      author: {
        avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/15043170-kg.png?t=2025-05-20-10-03-11',
        tier: 'bronze'
      }
    },
    {
      id: 6,
      title: 'Calories Burnt Prediction',
      thumbnail: 'images/Code/GradientBoosting1.png',
      updatedTime: 'Updated 9 days ago',
      description: 'Calories Burnt Prediction+1',
      upvotes: 9,
      author: {
        avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/15043170-kg.png?t=2025-05-20-10-03-11',
        tier: 'bronze'
      }
    },
    {
      id: 7,
      title: 'Why RMSLE Matters | Calorie',
      thumbnail: 'images/Code/GradientBoosting2.png',
      updatedTime: 'Updated 17 days ago',
      description: 'Predict Calorie Expenditure',
      upvotes: 8,
      author: {
        avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/5462573-kg.jpg?t=2025-02-28-15-54-18',
        tier: 'bronze'
      }
    },
    {
      id: 8,
      title: 'Predict_Calorie_t1 (0.05726)',
      thumbnail: 'images/Code/GradientBoosting3.png',
      updatedTime: 'Updated 18 days ago',
      description: 'Predict Calorie Expenditure',
      upvotes: 13,
      author: {
        avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/7162438-kg.jpg?t=2024-11-21-14-02-01',
        tier: 'bronze'
      }
    }
  ];

  const learnCourses = [
    {
      id: 1,
      title: 'Data Visualization',
      icon: 'images/Code/data_visualization-2x.png',
      description: 'Make great data visualizations. A great way to see the power of coding!',
      time: '4 hours',
      users: '8K monthly users',
      
    },
    {
      id: 2,
      title: 'Intro to Machine Learning',
      icon: 'images/Code/intro_to_ml-2x.png',
      description: 'Learn the core ideas in machine learning, and build your first models.',
      time: '3 hours',
      users: '20K monthly users'
    },
    {
      id: 3,
      title: 'Python',
      icon: 'images/Code/python-2x.png',
      description: 'Learn the most important language for data science.',
      time: '7 hours',
      users: '23K monthly users'
    }
  ];

  const governmentNotebooks = [
    {
      id: 9,
      title: 'Capstone2025 - Constitutionally',
      thumbnail: 'images/Code/Government1.png',
      updatedTime: 'Updated a month ago',
      description: 'Gen AI Intensive Course Capstone 2025Q1+1',
      upvotes: 6,
      author: {
        avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/11704474-kg.png?t=2024-10-15-21-40-04',
        tier: 'bronze'
      }
    },
    {
      id: 10,
      title: '2024 EUROPEAN PARLIAMENT',
      thumbnail: 'images/Code/Government2.png',
      updatedTime: 'Updated a year ago',
      description: '',
      upvotes: 19,
      author: {
        avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/7162438-kg.jpg?t=2024-11-21-14-02-01',
        tier: 'silver'
      }
    },
    {
      id: 11,
      title: 'Indian Patents EDA(2010,2011,20',
      thumbnail: 'images/Code/Government3.png',
      updatedTime: 'Updated a year ago',
      description: 'Indian Patent Dataset',
      upvotes: 22,
      author: {
        avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/3800944-kg.jpg?t=2024-10-11-14-15-28',
        tier: 'bronze'
      }
    },
    {
      id: 12,
      title: "Brazil's Parties Refund 💰",
      thumbnail: 'images/Code/Government4.png',
      updatedTime: 'Updated a year ago',
      description: "Brazil's House of Deputies Reimbursements",
      upvotes: 21,
      author: {
        avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/3800944-kg.jpg?t=2024-10-11-14-15-28',
        tier: 'silver'

      }
    }
  ];
  const torchvisionNotebooks = [
    {
      id: 1001,
      title: 'Vision Transformer',
      thumbnail: 'images/Code/torchvision1.png', // Replace with your actual image path or URL
      updatedTime: 'Updated 2 months ago',
      description: 'Smoker Detection [Image] classification Dataset',
      upvotes: 16,
      author: { avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/21955889-kg.jpg?t=2025-02-19-11-48-34', tier: 'bronze' },
    },
    {
      id: 1002,
      title: 'Scientific Image Classifier with',
      thumbnail: 'images/Code/torchvision2.png',
      updatedTime: 'Updated 2 months ago',
      description: 'Scientific Image Classification Dataset',
      upvotes: 14,
      author: { avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/21955889-kg.jpg?t=2025-02-19-11-48-34', tier: 'bronze' },
    },
    {
      id: 1003,
      title: 'FashionSort AI Based Apparel',
      thumbnail: 'images/Code/torchvision3.png',
      updatedTime: 'Updated 2 months ago',
      description: '',
      upvotes: 9,
      author: { avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/21955889-kg.jpg?t=2025-02-19-11-48-34', tier: 'bronze' },
    },
    {
      id: 1004,
      title: 'classification using Vision',
      thumbnail: 'images/Code/torchvision4.png',
      updatedTime: 'Updated 4 months ago',
      description: 'ttaaaa+1',
      upvotes: 13,
      author: { avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/20808938-kg.png?t=2025-01-06-15-44-30', tier: 'bronze' },
    },
  ];

  // New Competition Notebooks array
  const competitionNotebooks = [
    {
      id: 2001,
      title: 'Brazilian Archaeological',
      thumbnail: 'images/Code/CompetitionNotebooks1.png',
      updatedTime: 'Updated 12 hours ago',
      description: 'Brazilian bioarchaeological samples+1',
      upvotes: 18,
      author: { avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/3012786-kg.jpg', tier: 'bronze' },
    },
    {
      id: 2002,
      title: 'Extracting Known',
      thumbnail: 'images/Code/CompetitionNotebooks2.png',
      updatedTime: 'Updated a day ago',
      description: 'OpenAI to Z Challenge',
      upvotes: 17,
      author: { avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/251728-kg.png', tier: 'bronze' },
    },
    {
      id: 2003,
      title: 'practice',
      thumbnail: 'images/Code/CompetitionNotebooks3.png',
      updatedTime: 'Updated 2 days ago',
      description: 'Drawing with LLMs+8',
      upvotes: 26,
      author: { avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/5462573-kg.jpg?t=2025-02-28-15-54-18', tier: 'bronze' },
    },
    {
      id: 2004,
      title: 'Creating a Knowledge Base',
      thumbnail: 'images/Code/CompetitionNotebooks4.png',
      updatedTime: 'Updated 6 hours ago',
      description: 'OpenAI to Z Challenge',
      upvotes: 12,
      author: { avatar: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/251728-kg.png', tier: 'bronze' },
    },
  ];

  useEffect(() => {
    const handleScrollWindow = () => {
      if (headerRef.current && searchRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const searchRect = searchRef.current.getBoundingClientRect();

        setShowNavbarA(headerRect.top > 0);
        setShowNavbarB(searchRect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScrollWindow);
    return () => window.removeEventListener('scroll', handleScrollWindow);
  }, []);

  return (
    <>
      <CompetitionNavbarA visible={showNavbarA} />
      <CodeNavbarB visible={showNavbarB} />
      
      <div className="max-w-[1200px] mx-auto px-4 pt-6 pb-12 bg-white">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div className="flex flex-col w-full md:w-2/4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Code</h1>
            <p className="text-gray-700 mb-6 text-[1.05rem] leading-6">
              Explore and run machine learning code with Kaggle Notebooks.
              Find help in the{' '}
              <span
                onClick={() => window.open('https://www.kaggle.com/docs', '_blank')}
                className="text-black cursor-pointer"
                style={{
                  textDecorationLine: 'underline',
                  textDecorationThickness: '0.5px',
                  textUnderlineOffset: '4px',
                }}
              >
                Documentation
              </span>.
            </p>
            <div className="flex">
              <button className="bg-gray-900 text-white rounded-full px-3 py-1.5 font-medium hover:bg-gray-800 transition-colors flex items-center">
                <Plus className="mr-2" size={16} /> New Notebook
              </button>
            </div>
          </div>

          <div className="hidden md:flex md:w-2/4 justify-end">
            <img
              src="images/Code/landing-image.svg"
              alt="Code Illustration"
              className="h-52"
            />
          </div>
        </div>

        {/* Search */}
        <div ref={searchRef} className="relative mb-6">
          <div className="relative rounded-full border border-gray-300 hover:border-black transition-colors">
            <div className="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-800" />
            </div>
            <input
              type="text"
              placeholder="Search public notebooks"
              className="w-full py-3 pl-12 pr-16 bg-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-black font-medium rounded-full px-3 py-1 hover:bg-gray-200"
            >
              <ListFilter className="h-4 w-4 mr-1" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                selectedFilter === filter 
                  ? 'border-gray-900 text-gray-900' 
                  : 'border-gray-300 text-gray-600 hover:border-gray-500'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Trending */}
        <div className="mb-12">
          <div className="flex items-center justify-between my-12">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h2 className="text-xl font-bold text-gray-900">Trending</h2>
            </div>
            <button className="text-gray-900 hover:underline font-medium">
              See all (345)
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingNotebooks.map((notebook) => (
              <NotebookCard key={notebook.id} notebook={notebook} />
            ))}
          </div>
        </div>
        <hr className="my-8 border-gray-300" />

        {/* Gradient Boosting */}
        <div className="mb-12">
          <div className="flex items-center justify-between my-12">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <h2 className="text-xl font-bold text-gray-900">Gradient Boosting</h2>
            </div>
            <button className="text-gray-900 hover:underline font-medium">
              See all (2,535)
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gradientBoostingNotebooks.map((notebook) => (
              <NotebookCard key={notebook.id} notebook={notebook} />
            ))}
          </div>
        </div>
        <hr className="my-8 border-gray-300" />

{/* Learn Courses */}
<div className="mb-12">
  {/* Section header */}
  <div className="flex items-center justify-between my-12">
    <h2 className="text-xl font-bold text-gray-900">Learn Courses</h2>
    <button className="text-gray-900 hover:underline font-medium">
      See all (16)
    </button>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
    {/* Intro text */}
    <div className="lg:col-span-1">
      <h3 className="text-[22px] font-bold text-gray-900 mb-4 leading-tight">
        Take a course with Kaggle Notebooks
      </h3>
      <p className="text-[16.5px] text-black mb-4">
        Gain the skills you need to do independent data science projects.
      </p>
      <p className="text-[16.5px] text-black mb-4">
        We pare down complex topics to their key practical components, so you gain usable skills in a few hours(instead of weeks or months).
      </p>
      <Link 
        to="/learn" 
        className="mb-4 text-[16.5px] text-gray-900 underline underline-offset-4 decoration-gray-300 inline-block"
      >
        Learn more about courses 
      </Link>
    </div>
    {/* Cards */}
    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {learnCourses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </div>
</div>
<hr className="my-8 border-gray-300" />


        

        {/* Government */}
        <div className="mb-12">
          <div className="flex items-center justify-between my-12">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <h2 className="text-xl font-bold text-gray-900">Government</h2>
            </div>
            <button className="text-gray-900 hover:underline font-medium">
              See all (222)
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governmentNotebooks.map((notebook) => (
              <NotebookCard key={notebook.id} notebook={notebook} />
            ))}
          </div>
        </div>
        <hr className="my-8 border-gray-300" />
        
        {/* torchvision */}
        <div className="mb-12">
          <div className="flex items-center justify-between my-12">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <h2 className="text-xl font-bold text-gray-900">torchvision</h2>
            </div>
            <button className="text-gray-900 hover:underline font-medium">
              See all (1,915)
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {torchvisionNotebooks.map((notebook) => (
              <NotebookCard key={notebook.id} notebook={notebook} />
            ))}
          </div>
        </div>
        <hr className="my-8 border-gray-300" />

        {/* Competition Notebooks */}
        <div className="mb-12">
          <div className="flex items-center justify-between my-12">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <h2 className="text-xl font-bold text-gray-900">Competition Notebooks</h2>
            </div>
            <button className="text-gray-900 hover:underline font-medium">
              See all (107)
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitionNotebooks.map((notebook) => (
              <NotebookCard key={notebook.id} notebook={notebook} />
            ))}
          </div>
        </div>
        <hr className="my-8 border-gray-300" />

        {/* Didn't find what you were looking for? */}
        <div className="text-center my-16">
          <h3 className="text-2xl font-bold mb-6">Didn't find what you were looking for?</h3>
          <button
            onClick={() => window.open('https://www.kaggle.com/code', '_blank')}
            className="bg-black text-white px-6 py-1.5 rounded-full font-semibold hover:bg-gray-900 transition-colors"
          >
            Explore all 1,468,249 public notebooks
          </button>
        </div>

      </div>
    </>
  );
};

export default Code;
