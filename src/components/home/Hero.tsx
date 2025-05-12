
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Level up with the largest AI <br /> & ML community
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Join over 23M+ machine learners to share, stress test, and stay 
              up-to-date on all the latest ML techniques and technologies. 
              Discover a huge repository of community-published models, 
              data & code for your next project.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full bg-gray-100 hover:bg-gray-200 text-black border border-gray-300 flex items-center">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="h-5 w-5 mr-2" />
                Register with Google
              </Button>
              <Button className="rounded-full bg-black text-white hover:bg-gray-800">
                Register with Email
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600" 
              alt="Kaggle Community Illustration" 
              className="w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
