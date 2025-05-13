
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CommunitySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: "/images/Screenshot 2025-05-13 173358.png",
      alt: "Kaggle Discussions",
      redirect: "/discussions"
    },
    {
      src: "/images/Screenshot 2025-05-13 173419.png",
      alt: "Kaggle Forum",
      redirect: "/discussions"
    },
    {
      src: "/images/Screenshot 2025-05-13 173433.png",
      alt: "Kaggle Profile",
      redirect: "/profile"
    }
  ];

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Build your ML skills in a supportive and helpful community
            </h2>
            <p className="text-lg text-gray-600">
              Kaggle is the world's largest data science community with powerful tools and resources to help you achieve your data science goals.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <div className="text-3xl font-bold text-gray-800">13M+</div>
                <div className="text-xs text-gray-500 uppercase font-medium">DATA SCIENTISTS</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">280K+</div>
                <div className="text-xs text-gray-500 uppercase font-medium">ACTIVE COMPETITIONS</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Link to={images[currentImageIndex].redirect} className="block">
              <img 
                src={images[currentImageIndex].src} 
                alt={images[currentImageIndex].alt} 
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
                onError={(e) => { 
                  e.target.src = `https://placehold.co/800x600?text=${images[currentImageIndex].alt}`; 
                  e.target.onerror = null; // Prevent infinite error loop
                }}
              />
            </Link>
            
            {/* Navigation Buttons positioned directly on the image */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-200 z-10 hover:bg-gray-50 focus:outline-none"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-200 z-10 hover:bg-gray-50 focus:outline-none"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
