
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const CommunitySection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Build your ML skills in a supportive and helpful community
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Kaggle's community is a diverse group of 23 million data scientists, ML engineers & enthusiasts from around the world.
            </p>
          </div>
          
          <div>
            <Carousel className="w-full relative">
              <div className="absolute -left-12 -top-12 w-40 h-40 bg-kaggle-blue rounded-full z-0 opacity-70"></div>
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-kaggle-yellow rounded-full z-0 opacity-70"></div>
              <CarouselContent>
                <CarouselItem className="relative z-10">
                  <div onClick={() => navigate('/discussions')} className="cursor-pointer transition-transform duration-300 transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&h=600" 
                      alt="Kaggle Discussions Interface" 
                      className="w-full h-auto rounded-lg shadow-lg" 
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="relative z-10">
                  <div onClick={() => navigate('/discussions')} className="cursor-pointer transition-transform duration-300 transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600" 
                      alt="Kaggle Discussions Thread" 
                      className="w-full h-auto rounded-lg shadow-lg" 
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="relative z-10">
                  <div onClick={() => navigate('/profile')} className="cursor-pointer transition-transform duration-300 transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=600" 
                      alt="Kaggle Profile" 
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

export default CommunitySection;
