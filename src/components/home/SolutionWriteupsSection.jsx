
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SolutionCard = ({ author, title, upvotes }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <img 
          src="\images\solutionwriteup.png"
          alt={author} 
          className="w-12 h-12 rounded-full mr-3 border-2 border-orange-400"
          // onError={(e) => { e.target.src = "https://storage.googleapis.com/kaggle-images/default-user-icon.png"; }}
        />
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      
      <div className="mt-3">
        <div className="text-sm text-gray-500">1st Place Solution · {upvotes} upvotes</div>
      </div>
    </div>
  );
};

const SolutionWriteupsSection = () => {
  const solutions = [
    {
      author: "User1",
      title: "Quora Question Pairs",
      upvotes: "339"
    },
    {
      author: "User2",
      title: "Web Traffic Time Series Forecasting",
      upvotes: "455"
    },
    {
      author: "User3",
      title: "Porto Seguro's Safe Driver Prediction",
      upvotes: "1092"
    },
    {
      author: "User4",
      title: "Mercari Price Suggestion Challenge",
      upvotes: "246"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800">Solution write-ups</h2>
          </div>
          <Link to="/solution-writeups" className="flex items-center text-gray-600 hover:text-gray-900">
            View all <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <p className="text-gray-600 mb-8">Learn cutting edge ML techniques and what worked and didn't from the top Kaggle competitors.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionWriteupsSection;
