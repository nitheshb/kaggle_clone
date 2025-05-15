import { Link } from 'react-router-dom';
import { Filter, Flag, Star, FlaskRound as Flask } from 'lucide-react';

const Competitions = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Competitions</h1>
        <img 
          src="https://www.kaggle.com/static/images/competitions/competitions-illustration.svg" 
          alt="Competitions" 
          className="h-32 hidden md:block"
        />
      </div>
      
      <p className="text-gray-700 mb-8">
        Grow your data science skills by competing in our exciting
        competitions. Find help in the <Link to="/documentation" className="text-blue-500 hover:underline">documentation</Link> or learn about 
        Community Competitions.
      </p>
      
      <div className="mb-8">
        <Link 
          to="/host-competition"
          className="inline-block bg-black text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Host a Competition
        </Link>
      </div>
      
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search competitions"
          className="w-full py-2 pl-10 pr-4 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-gray-500 hover:text-gray-700">
          <Filter className="h-5 w-5 mr-1" />
          <span>Filters</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-medium"> <Link to="/all-competetions" className="text-blue-500 hover:underline hover: cursor-pointer">All Competitions</Link></span>
          </div>
          <p className="text-sm text-gray-600">Everything, past & present</p>
        </div>
       <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
  <div className="flex items-center mb-2">
    <Star className="w-5 h-5 mr-2 text-yellow-500" />
    <Link to="/featured" className="font-medium text-blue-500 hover:underline cursor-pointer">
      Featured
    </Link>
  </div>
  <p className="text-sm text-gray-600">Premier challenges with prizes</p>
</div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-2">
            <Flag className="w-5 h-5 mr-2 text-blue-500" />
            <span className="font-medium">Getting Started</span>
          </div>
          <p className="text-sm text-gray-600">Approachable ML fundamentals</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-2">
            <Flask className="w-5 h-5 mr-2 text-purple-500" />
            <span className="font-medium">Research</span>
          </div>
          <p className="text-sm text-gray-600">Scientific and scholarly challenges</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 mr-2 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 20H7C5.89543 20 5 19.1046 5 18V9C5 7.89543 5.89543 7 7 7H17C18.1046 7 19 7.89543 19 9V18C19 19.1046 18.1046 20 17 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-medium">Community</span>
          </div>
          <p className="text-sm text-gray-600">Created by Kagglers</p>
        </div>
      </div>
      
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <Flag className="w-5 h-5 mr-2 text-blue-500" />
          <h2 className="text-xl font-bold text-gray-900">Getting Started</h2>
        </div>
        <Link to="/competitions/getting-started" className="text-blue-500 hover:underline text-sm">
          See all
        </Link>
      </div>
      
      <p className="text-gray-700 mb-8">
        Competitions with approachable ML fundamentals.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="relative aspect-video bg-gray-200">
              <img 
                src={`https://www.kaggle.com/static/images/competitions/competition-card-${i}.jpg`} 
                alt="Competition" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2">
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                  <img 
                    src="/images/site-logo.svg" 
                    alt="Kaggle" 
                    className="h-5 w-5"
                  />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2 line-clamp-2 h-12">
                Sample Competition #{i}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">
                Learn machine learning fundamentals in this beginner-friendly competition.
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>$0 • 500 teams</span>
                <span>7 days left</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competitions;