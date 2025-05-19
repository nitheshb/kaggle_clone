
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: "/images/datasets.png",
      alt: "Kaggle Datasets",
      redirect: "/datasets",
      fallback: "https://placehold.co/800x600?text=Kaggle+Datasets"
    },
    {
      src: "/images/Screenshot 2025-05-13 144601.png",
      alt: "Kaggle Code",
      redirect: "/code",
      fallback: "https://placehold.co/800x600?text=Kaggle+Code"
    },
    {
      src: "/images/Screenshot 2025-05-13 144617.png",
      alt: "Kaggle Models",
      redirect: "/models",
      fallback: "https://placehold.co/800x600?text=Kaggle+Models"
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

  // Preload images to prevent blinking
  React.useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = image.src;
    });
  }, []);

  return (
    <section className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Tackle your next project with Kaggle
            </h2>
            <p className="text-lg text-gray-600">
              On Kaggle you'll find all the resources and knowledge needed for your next real-world ML project.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mt-10">
              <div>
                <div className="text-3xl font-bold text-gray-800">476K</div>
                <div className="text-xs text-gray-500 uppercase font-medium">DATASETS</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">1.4M</div>
                <div className="text-xs text-gray-500 uppercase font-medium">NOTEBOOKS</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">20,900</div>
                <div className="text-xs text-gray-500 uppercase font-medium">MODELS</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <Link to={images[currentImageIndex].redirect}>
                <img 
                  src={images[currentImageIndex].src} 
                  alt={images[currentImageIndex].alt} 
                  className="w-full h-full object-cover shadow-lg cursor-pointer"
                  onError={(e) => { 
                    e.target.src = images[currentImageIndex].fallback;
                    e.target.onerror = null; // Prevent infinite error loop
                  }}
                />
              </Link>
            </div>
            
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

export default ProjectsSection;
