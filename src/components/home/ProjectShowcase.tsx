
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ProjectShowcase: React.FC = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/datasets');
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Tackle your next project with Kaggle
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              On Kaggle you'll find all the resources and knowledge needed for your next real-world ML project.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">476K</div>
                <div className="text-sm uppercase tracking-wide text-gray-600 mt-1">DATASETS</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1.4M</div>
                <div className="text-sm uppercase tracking-wide text-gray-600 mt-1">NOTEBOOKS</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">20,700</div>
                <div className="text-sm uppercase tracking-wide text-gray-600 mt-1">MODELS</div>
              </div>
            </div>
          </div>
          
          <div>
            <Carousel className="w-full relative">
              <div className="absolute -left-12 -top-12 w-40 h-40 bg-kaggle-yellow rounded-full z-0 opacity-70"></div>
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-kaggle-blue rounded-full z-0 opacity-70"></div>
              <CarouselContent>
                <CarouselItem className="relative z-10">
                  <div onClick={handleImageClick} className="cursor-pointer transition-transform duration-300 transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600" 
                      alt="Kaggle Datasets Interface" 
                      className="w-full h-auto rounded-lg shadow-lg" 
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="relative z-10">
                  <div onClick={() => navigate('/code')} className="cursor-pointer transition-transform duration-300 transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800&h=600" 
                      alt="Kaggle Code Interface" 
                      className="w-full h-auto rounded-lg shadow-lg" 
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="relative z-10">
                  <div onClick={() => navigate('/models')} className="cursor-pointer transition-transform duration-300 transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=600" 
                      alt="Kaggle Models Interface" 
                      className="w-full h-auto rounded-lg shadow-lg" 
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-4 bg-white border border-gray-200 shadow-sm" />
              <CarouselNext className="-right-4 bg-white border border-gray-200 shadow-sm" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
