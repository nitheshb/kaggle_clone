
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CommunityStatsSection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Global community */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">A global community</h3>
            <p className="text-gray-600 mb-8">
              Over 24 million users from over 190 countries are here.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {['GR', 'PK', 'LK', 'ID', 'IL', 'MX', 'NL', 'CO', 'AE', 'ES'].map((country) => (
                <div key={country} className="text-lg font-bold text-gray-700">{country}</div>
              ))}
            </div>
          </div>
          
          {/* A place to discuss ML */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">A place to discuss ML</h3>
            <p className="text-gray-600 mb-8">
              Whether you're a beginner or pro, find answers to your ML questions & connect with ML enthusiasts on Kaggle's forums.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Data Visualization</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Neural Networks</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Computer Vision</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">NLP</span>
              <Link to="/forums" className="flex items-center px-2 py-2 text-gray-600 hover:text-gray-900">
                See All <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStatsSection;
