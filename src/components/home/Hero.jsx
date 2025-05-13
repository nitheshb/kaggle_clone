
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Level up with the largest AI & ML community
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Join over 24M+ machine learners to share, stress test, and stay 
              up-to-date on all the latest ML techniques and technologies.
              Discover a huge repository of community-published models, 
              data & code for your next project.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center px-5 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                <img 
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                  className="w-5 h-5 mr-3" 
                  alt="Google" 
                  onError={(e) => {
                    e.target.src = "https://placehold.co/20x20?text=G";
                    e.target.onerror = null;
                  }}
                />
                <span className="text-gray-700 font-medium">Register with Google</span>
              </button>
              <button className="px-5 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50">
                Register with Email
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src="\images\hero-illo@3x.png" 
                alt="Kaggle Community" 
                className="w-full h-full object-contain"
                onError={(e) => { 
                  e.target.src = "https://placehold.co/600x400?text=Kaggle+Community"; 
                  e.target.onerror = null; // Prevent infinite error loop
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
