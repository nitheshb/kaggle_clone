
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const CompetitionsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/competitions');
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Learn cutting edge techniques in Kaggle competitions & courses
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Kaggle competitions and courses provide a real-world setting to apply what you learn & connect with other ML practitioners.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">29,000</div>
                <div className="text-sm uppercase tracking-wide text-gray-600 mt-1">COMPETITIONS</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5,000</div>
                <div className="text-sm uppercase tracking-wide text-gray-600 mt-1">WRITE-UPS</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">70+ hours</div>
                <div className="text-sm uppercase tracking-wide text-gray-600 mt-1">COURSES</div>
              </div>
            </div>
          </div>
          
          <div>
            <Carousel className="w-full relative">
              <div className="absolute -left-12 -top-12 w-40 h-40 bg-kaggle-yellow rounded-full z-0 opacity-70"></div>
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-green-400 rounded-full z-0 opacity-70"></div>
              <CarouselContent>
                <CarouselItem className="relative z-10">
                  <div onClick={handleImageClick} className="cursor-pointer transition-transform duration-300 transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=600" 
                      alt="Kaggle Competition Interface" 
                      className="w-full h-auto rounded-lg shadow-lg" 
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="relative z-10">
                  <div onClick={() => navigate('/competitions')} className="cursor-pointer transition-transform duration-300 transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=600" 
                      alt="Kaggle Competition Solutions" 
                      className="w-full h-auto rounded-lg shadow-lg" 
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="relative z-10">
                  <div onClick={() => navigate('/courses')} className="cursor-pointer transition-transform duration-300 transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=600" 
                      alt="Kaggle Courses Interface" 
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

export default CompetitionsSection;
