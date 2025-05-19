
import React from 'react';

const KagglersSection = () => {
  // Generate a diverse set of user images with different colored borders
  const userImages = Array(12).fill(null).map((_, i) => {
    const borderColors = ['border-orange-400', 'border-yellow-400', 'border-blue-400', 'border-green-400', 'border-purple-400'];
    const randomColor = borderColors[i % borderColors.length];
    
    return (
      <div key={i} className={`w-16 h-16 rounded-full border-2 ${randomColor} overflow-hidden`}>
        <img 
          src="\images\kagglers3.png"
          alt="Kaggle user"
          className="w-full h-full object-cover"
          onError={(e) => { 
            e.target.src = "https://storage.googleapis.com/kaggle-images/default-user-icon.png"; 
            e.target.onerror = null; // Prevent infinite error loop
          }}
        />
      </div>
    );
  });

  return (
    <section className="bg-white py-8">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="bg-white rounded-lg border border-gray-100 p-8 shadow-sm relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 opacity-50 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100 opacity-50 rounded-full -ml-32 -mb-32"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-100 opacity-50 rounded-full -mr-16 -mb-16"></div>
          
          <div className="relative">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Who are Kagglers?</h2>
            <p className="text-gray-600 max-w-2xl mb-12">
              Kagglers come from all walks of life: students, seasoned professionals, and distinguished researchers. 
              They use Kaggle to learn data science & ML, stay up-to-date on the latest techniques, and collaborate.
            </p>
            
            {/* User images grid - display on right side as per screenshot */}
            <div className="flex flex-wrap justify-end gap-4">
              {userImages}
            </div>
          </div>
        </div>
        
        {/* Additional sections from the second screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-lg border border-gray-100 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">A global community</h3>
            <p className="text-center text-gray-600 mb-6">
              Over 24 million users from over 190 countries are here.
            </p>
            
            {/* Country codes */}
            <div className="flex flex-wrap justify-center gap-4 text-xl font-bold">
              <span>GR</span>
              <span>PK</span>
              <span>LK</span>
              <span>ID</span>
              <span>IL</span>
              <span>MX</span>
              <span>NL</span>
              <span>CO</span>
              <span>AE</span>
              <span>ES</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-100 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">A place to discuss ML</h3>
            <p className="text-center text-gray-600 mb-6">
              Whether you're a beginner or pro, find answers to your ML questions & connect 
              with ML enthusiasts on Kaggle's forums.
            </p>
            
            {/* Topic buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium">
                Data Visualization
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium">
                Neural Networks
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium">
                Computer Vision
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium">
                NLP
              </button>
              <a href="/topics" className="px-3 py-2 inline-flex items-center text-sm font-medium">
                → See All
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KagglersSection;
