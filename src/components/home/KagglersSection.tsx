
import React from 'react';

const KagglersSection: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who are Kagglers?</h2>
          
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Kagglers come from all walks of life: students, seasoned professionals, and distinguished researchers. They use Kaggle to learn data science & ML, stay up-to-date on the latest techniques, and collaborate.
          </p>
          
          <div className="relative h-72">
            {/* This would be the profile pictures section - approximate with circles */}
            <div className="absolute top-0 left-1/4 bg-blue-100 h-16 w-16 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100" alt="Kaggler" className="min-h-full min-w-full object-cover" />
            </div>
            <div className="absolute top-1/3 left-[10%] bg-yellow-100 h-16 w-16 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100" alt="Kaggler" className="min-h-full min-w-full object-cover" />
            </div>
            <div className="absolute top-2/3 left-[20%] bg-green-100 h-16 w-16 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100" alt="Kaggler" className="min-h-full min-w-full object-cover" />
            </div>
            <div className="absolute top-1/4 right-[30%] bg-red-100 h-16 w-16 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=100&h=100" alt="Kaggler" className="min-h-full min-w-full object-cover" />
            </div>
            <div className="absolute top-1/2 right-[20%] bg-purple-100 h-16 w-16 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100" alt="Kaggler" className="min-h-full min-w-full object-cover" />
            </div>
            <div className="absolute top-3/4 right-[40%] bg-indigo-100 h-16 w-16 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100" alt="Kaggler" className="min-h-full min-w-full object-cover" />
            </div>
            <div className="absolute top-1/3 right-[10%] bg-pink-100 h-16 w-16 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100" alt="Kaggler" className="min-h-full min-w-full object-cover" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-center mb-4">A global community</h3>
              <p className="text-gray-600 text-center mb-6">
                Over 23 million users from over 190 countries are here.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-800 font-medium">PT</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-800 font-medium">ES</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-800 font-medium">MX</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-800 font-medium">LK</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-800 font-medium">IT</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-800 font-medium">CL</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-800 font-medium">ZA</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-800 font-medium">KE</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-800 font-medium">TR</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-800 font-medium">PL</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-center mb-4">A place to discuss ML</h3>
              <p className="text-gray-600 text-center mb-6">
                Whether you're a beginner or pro, find answers to your ML questions & connect with ML enthusiasts on Kaggle's forums.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-800">Data Visualization</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-800">Neural Networks</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-800">Computer Vision</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-800">NLP</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-800 flex items-center">
                  See All
                  <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KagglersSection;
