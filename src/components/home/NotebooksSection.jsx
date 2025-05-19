
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const NotebookCard = ({ author, title, language, upvotes, comments, competition, src}) => {
  console.log(src);
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full bg-white">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-10 h-10 rounded-full mr-3 border-2 border-orange-400 overflow-hidden flex-shrink-0">
            <img 
              src = {src}
              alt={author} 
              className="w-full h-full object-cover"
              // onError={(e) => { 
              //   e.target.src = "https://www.kaggle.com/static/images/default-avatar.svg"; 
              //   e.target.onerror = null; // Prevent infinite error loop
              // }}
            />
          </div>
          <h3 className="text-base font-semibold text-gray-800 line-clamp-2">{title}</h3>
        </div>
        
        <div className="mb-4">
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">{language}</span>
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div>{upvotes} upvotes</div>
          <div>{comments} comments</div>
        </div>
        
        {competition && (
          <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
            {competition}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const NotebooksSection = () => {
  const notebooks = [
    {
      author: "User1",
      title: "Day 1 - Evaluation and structured feedback",
      language: "Python",
      upvotes: "465",
      comments: "136",
      src:"/images/notebook1.png"
    },
    {
      author: "User2",
      title: "GPU LightGBM Baseline - ICV 681",
      language: "Python · Gpu",
      upvotes: "364",
      comments: "52",
      competition: "CIBMTR - Equity in post-HCT Survival",
      src:"/images/notebook2.png"
    },
    {
      author: "User3",
      title: "ESP EDA which makes sense",
      language: "Python",
      upvotes: "258",
      comments: "32",
      competition: "CIBMTR - Equity in post-HCT Survival",
      src:"/images/notebook3.png"
    },
    {
      author: "User4",
      title: "CIBMTR | EDA & Ensemble Model",
      language: "Python",
      upvotes: "230",
      comments: "43",
      competition: "CIBMTR - Equity in post-HCT Survival",
      src:"/images/notebook4.png"
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800">Notebooks</h2>
          </div>
          <Link to="/notebooks" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            View all <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <p className="text-gray-600 mb-8 text-sm">1.4M public notebooks and access to a powerful notebook environment with no cost GPUs & TPUs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {notebooks.map((notebook, index) => (
            <NotebookCard key={index} {...notebook} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotebooksSection;
