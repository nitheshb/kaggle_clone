
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LearnCompetitionsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: "/images/detection.png",
      alt: "Kaggle Competition",
      redirect: "/competitions"
    },
    {
      src: "/images/competiontionchallenge.png",
      alt: "Kaggle Competitions",
      redirect: "/competitions"
    },
    {
      src: "/images/courses.png",
      alt: "Kaggle Courses",
      redirect: "/courses"
    }
  ];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Learn cutting edge techniques in Kaggle competitions & courses
            </h2>
            <p className="text-lg text-gray-600">
              Kaggle competitions and courses provide a real-world setting to
              apply what you learn & connect with other ML practitioners.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mt-10">
              <div>
                <div className="text-3xl font-bold text-gray-800">29,000+</div>
                <div className="text-xs text-gray-500 uppercase font-medium">COMPETITIONS</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">5,000+</div>
                <div className="text-xs text-gray-500 uppercase font-medium">WRITE-UPS</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">70+ hours</div>
                <div className="text-xs text-gray-500 uppercase font-medium">COURSES</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Link to={images[currentImageIndex].redirect}>
              <img 
                src={images[currentImageIndex].src} 
                alt={images[currentImageIndex].alt} 
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer object-cover"
              />
            </Link>
            
            {/* Navigation Buttons positioned directly on the image */}
            <button 
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-200 z-10 hover:bg-gray-50"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-200 z-10 hover:bg-gray-50"
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

export default LearnCompetitionsSection;
