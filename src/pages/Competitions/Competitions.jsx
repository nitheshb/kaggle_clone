import { useState, useEffect, useRef } from 'react';
import { Filter, Flag, Star, FlaskRound, Users, ChevronLeft, ChevronRight, ChevronDown,  } from 'lucide-react';
import CompetitionNavbarA from '../../components/layout/NavbarA';
import CompetitionNavbarB from './CompetitionNavbarB';
import CompetitionCard from './CompetitionCard';
import CategoryCard from './CategoryCard';
import './Competitions.css';
import { ArrowDown, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Competitions = () => {
  const [showNavbarA, setShowNavbarA] = useState(true);
  const [showNavbarB, setShowNavbarB] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const categoryRef = useRef(null);

  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();


  const gettingStartedCompetitions = [
    {
      id: 1,
      title: 'Titanic - Machine Learning from Disaster',
      description: 'Start here! Predict survival on the Titanic',
      image: '/images/Titanic.png',
      overlayImage: 'images/Kaggle.png',
      category: 'Getting Started',
      teams: 15908,
      type: 'Knowledge',
      status: 'Ongoing'
    },
    {
      id: 2,
      title: 'House Prices - Advanced Regression Techniques',
      description: 'Predict sales prices and practice feature engineering',
      image: 'images/HousePrices.png',
      overlayImage: 'images/Kaggle.png',
      category: 'Getting Started',
      teams: 4647,
      type: 'Knowledge',
      status: 'Ongoing'
    },
    {
      id: 3,
      title: 'Spaceship Titanic',
      description: 'Predict which passengers are transported to an alternate dimension',
      image: 'images/SpaceshipTitanic.png',
      overlayImage: 'images/Kaggle.png',
      category: 'Getting Started',
      teams: 2148,
      type: 'Knowledge',
      status: 'Ongoing'
    },
    {
      id: 4,
      title: 'LLM Classification Finetuning',
      description: 'Finetune LLMs to Predict Human Preferences',
      image: 'images/LLM.png',
      overlayImage: 'images/Kaggle.png',
      category: 'Getting Started',
      teams: 239,
      type: 'Knowledge',
      status: 'Ongoing'
    }
  ];

  const featuredCompetitions = [
    {
      id: 5,
      title: 'ARC Prize 2025',
      description: 'Create an AI capable of novel pattern recognition',
      image: 'images/arcPrice.png',
      overlayImage: 'images/ARC.png',
      category: 'Featured • Code Competition',
      teams: 375,
      prize: '$725,000',
      daysToGo: '6 months to go'
    },
    {
      id: 6,
      title: 'Stanford RNA 3D Folding',
      description: 'Solve RNA structure prediction problem',
      image: 'images/Stanford-RNA.png',
      overlayImage: 'images/stanford-university-seal-seeklogo.com.png',
      category: 'Featured • Code Competition',
      teams: 1342,
      prize: '$75,000',
      daysToGo: '16 days to go'
    },
    {
      id: 7,
      title: 'BYU - Locating Bacterial Flagellar Motors',
      description: 'Help locate flagellar motors in bacterial tomograms',
      image: 'images/BYU-bacteria.png',
      overlayImage: 'images/BYU.png',
      category: 'Research • Code Competition',
      teams: 954,
      prize: '$65,000',
      daysToGo: '22 days to go'
    },
    {
      id: 8,
      title: 'BirdCLEF+ 2025',
      description: 'Species identification from audio recordings',
      image: 'images/BirdCLEF.png',
      overlayImage: 'images/Bird.png',
      category: 'Research • Code Competition',
      teams: 1706,
      prize: '$50,000',
      daysToGo: '23 days to go'
    },
    {
    id: 9,
    title: 'Drawing with LLMs',
    description: 'Build and submit Kaggle Pa...',
    image: 'images/drawing-with-llms.png',
    overlayImage: 'images/Kaggle.png',
    category: 'Featured • Code Competition',
    teams: 1325,
    prize: '$50,000',
    daysToGo: '13 days to go'
  },
  {
    id: 10,
    title: 'Image Matching Challenge 2025',
    description: 'Reconstruct 3D scenes fro...',
    image: 'images/image-matching-2025.png',
    overlayImage: 'images/CTU.png',
    category: 'Research • Code Competition',
    teams: 724,
    prize: '$50,000',
    daysToGo: '19 days to go'
  },
  {
    id: 11,
    title: 'Yale/UNC-CH - Geophysical...',
    description: 'Develop physics-guided ma...',
    image: 'images/yale-unc-ch.png',
    overlayImage: 'images/Yale.png',
    category: 'Research',
    teams: 547,
    prize: '$50,000',
    daysToGo: '2 months to go'
  },
  {
    id: 12,
    title: 'Predict Calorie Expenditure',
    description: 'Playground Series - Season...',
    image: 'images/predict-calorie.png',
    overlayImage: 'images/Kaggle.png',
    category: 'Playground',
    teams: 2300,
    prize: 'Swag',
    daysToGo: '17 days to go'
  },
  {
    id: 13,
    title: 'Konwinski Prize',
    description: '$1M for the AI that can clos...',
    image: 'images/konwinski-prize.png',
    overlayImage: 'images/KPrize.jpg',
    category: 'Featured • Code Competition',
    teams: 617,
    prize: '$1,225,000',
    daysToGo: 'A month to go'
  },
  {
    id: 14,
    title: 'Jane Street Real-Time Market Dat...',
    description: 'Predict financial market res...',
    image: 'images/jane-street-market.png',
    overlayImage: 'images/JaneStreet.png',
    category: 'Featured • Code Competition',
    teams: 3757,
    prize: '$120,000',
    daysToGo: '2 months to go'
  }


  ];

  const categories = [
    {
      id: 1,
      title: 'All Competitions',
      icon: "list",
      description: 'Everything, past & present',
      iconColor: 'text-gray-700',
      link: '/all-competetions',
    },
    {
      id: 2,
      title: 'Featured',
      icon: <Star className="w-5 h-5" />,
      description: 'Premier challenges with prizes',
      iconColor: 'text-gray-700'
    },
    {
      id: 3,
      title: 'Getting Started',
      icon: <Flag className="w-5 h-5" />,
      description: 'Approachable ML fundamentals',
      iconColor: 'text-gray-700'
    },
    {
      id: 4,
      title: 'Research',
      icon: <FlaskRound className="w-5 h-5" />,
      description: 'Scientific and scholarly challenges',
      iconColor: 'text-gray-700'
    },
    {
      id: 5,
      title: 'Community',
      icon: <Users className="w-5 h-5" />,
      description: 'Created by fellow Kagglers',
      iconColor: 'text-gray-700'
    },
    {
      id: 6,
      title: 'Playground',
      icon: "playground",
      description: 'Fun practice problems',
      iconColor: 'text-gray-700'
    },
    {
      id: 7,
      title: 'Simulations',
      icon: "simulations",
      description: 'Train bots to navigate challenges',
      iconColor: 'text-gray-700'
    },
    {
      id: 8,
      title: 'Analytics',
      icon: "analytics",
      description: 'Open-ended explorations',
      iconColor: 'text-gray-700'
    }
  ];

  useEffect(() => {
    const handleScrollWindow = () => {
      if (headerRef.current && searchRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const searchRect = searchRef.current.getBoundingClientRect();

        // Show/hide NavbarA based on header position
        setShowNavbarA(headerRect.top > 0);
        
        // Show/hide NavbarB based on search position
        setShowNavbarB(searchRect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScrollWindow);
    return () => window.removeEventListener('scroll', handleScrollWindow);
  }, []);

  

  const scrollCategories = (direction) => {
    if (categoryRef.current) {
      const { scrollWidth, clientWidth } = categoryRef.current;
      const maxScrollValue = scrollWidth - clientWidth;
      setMaxScroll(maxScrollValue);

      const scrollAmount = clientWidth / 2;
      let newPosition;

      if (direction === 'left') {
        newPosition = Math.max(0, scrollPosition - scrollAmount);
      } else {
        newPosition = Math.min(maxScrollValue, scrollPosition + scrollAmount);
      }

      setScrollPosition(newPosition);
      categoryRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const refCurrent = categoryRef.current;
    const onScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = refCurrent;
      setScrollPosition(Math.round(scrollLeft));
      setMaxScroll(Math.round(scrollWidth - clientWidth));
    };

    if (refCurrent) {
      refCurrent.addEventListener('scroll', onScroll);
      setMaxScroll(Math.round(refCurrent.scrollWidth - refCurrent.clientWidth));
      setScrollPosition(Math.round(refCurrent.scrollLeft));
    }

    return () => {
      if (refCurrent) refCurrent.removeEventListener('scroll', onScroll);
    };
  }, []);

  const isAtRightEnd = Math.round(scrollPosition) >= Math.round(maxScroll) - 1;

 const handleCategoryClick = (categoryLink) => {
    navigate(categoryLink); // Navigate to the provided link
  };

  return (
    <>
      <CompetitionNavbarA visible={showNavbarA} />
      <CompetitionNavbarB visible={showNavbarB} />
      
      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-2 md:px-6 pt-6 bg-white">
        <div ref={headerRef} className="flex flex-col md:flex-row items-center justify-between mb-6">
          {/* Left Section */}
          <div className="flex flex-col w-full md:w-2/4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Competitions</h1>
            <p className="text-gray-600 mb-6 text-[1.05rem] leading-6">
              Grow your data science skills by competing in our exciting competitions. Find help in the 
              <span onClick={() => navigate('/documentation')} className="text-black underline cursor-pointer"> documentation </span> 
              or learn about <span onClick={() => navigate('/community-competitions')} className="text-black underline cursor-pointer">Community Competitions</span>. 
            </p>
            <div className="mb-6">
              <span onClick={() => navigate('/host-competition')} 
                    className="inline-block bg-gray-900 text-white rounded-full px-6 py-2 text-sm font-bold hover:bg-gray-800 transition-colors cursor-pointer">
                Host a Competition
              </span>
            </div>
          </div>

          {/* Right Section - Illustration */}
          <div className="hidden md:flex md:w-2/4 justify-end">
            <img 
              src="images/landing-header-light.svg" 
              alt="Competitions" 
              className="h-52"
            />
          </div>
        </div>
        
        <div ref={searchRef} className="relative mb-4 rounded-3xl border border-gray-200 group hover:border-black transition-colors">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search competitions"
            className="w-full py-3 pl-10 pr-24 bg-white rounded-3xl text-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-600"
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-black font-medium rounded-3xl px-3 py-1 transition-colors hover:bg-gray-300 hover:text-gray-700"
          >
          <Filter className="h-5 w-5 mr-1" />
          <span>Filters</span>
          </button>
        </div>



        <div className="relative mb-8">
          {scrollPosition > 0 && (
            <button
              onClick={() => scrollCategories('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full hover:bg-gray-100 shadow"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
          )}

          <div
            ref={categoryRef}
            className="flex overflow-x-auto scroll-smooth hide-scrollbar pl-2 pr-10 py-2"
          >
            <div className="flex gap-3">
              {categories.map((category) => (
                <CategoryCard key={category.id} 
                category={category} 
                 handleClick={() => handleCategoryClick(category.link)}/>
              ))}
            </div>
          </div>

  {!isAtRightEnd && (
    <button
      onClick={() => scrollCategories('right')}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full hover:bg-gray-100 shadow"
    >
      <ChevronRight className="h-5 w-5 text-gray-700" />
    </button>
  )}
</div>

        
        {/* Getting Started Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Flag className="w-6 h-6 mr-2 text-black-500" />
              <h2 className="text-xl font-bold text-gray-900">Getting Started</h2>
            </div>
             <span
              onClick={() => handleCategoryClick('/competitions/getting-started')} 
              className="text-black-500 hover:underline text-[14.5px] font-bold cursor-pointer"
            >
              See all
            </span>
          </div>
          
          <p className="text-gray-900 my-4">
            Competitions with approachable ML fundamentals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mt-10">
            {gettingStartedCompetitions.map((competition) => (
              <CompetitionCard key={competition.id} competition={competition} />
            ))}
          </div>
        </div>

        {/* Featured Competitions Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Star className="w-6 h-6 mr-2 text-black" />
              <h2 className="text-xl font-bold text-gray-900">Featured Competitions</h2>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-md text-black font-medium">Hotness</span>
              <ChevronDown className="w-4 h-4" />
              <button className="p-1 hover:bg-gray-100 rounded">
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {featuredCompetitions.map((competition) => (
              <CompetitionCard key={competition.id} competition={competition} featured={true} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Competitions;









