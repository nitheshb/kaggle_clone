import React, { useState, useEffect } from 'react';
import { MoreHorizontal, Menu, X } from 'lucide-react';
import CompetitionNavbarA from '../../layout/NavbarA';

function CompetitionHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [navbarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <CompetitionNavbarA visible={navbarVisible} />
      
      {/* Reduced left padding/margin by changing px-0 to px-4 */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-0 mt-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Kaggle Logo */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 sm:border-[3px] border-gray-800 flex items-center justify-center">
            <span className="text-sky-500 font-bold text-lg sm:text-xl">K</span>
          </div>
          
          {/* Competition Basic Info */}
          <div className="hidden sm:block text-gray-500 text-xs uppercase tracking-wide">
            KAGGLE · PLAYGROUND PREDICTION · 23 DAYS TO GO
          </div>
          
          <div className="block sm:hidden text-gray-500 text-xs uppercase">
            PLAYGROUND · 23 DAYS
          </div>
        </div>
        
        {/* Join Button and Options */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {isMobile ? (
            <>
              <button className="bg-gray-800 text-white px-3 py-1.5 rounded-full font-medium text-xs sm:text-sm hover:bg-gray-700 transition-colors">
                Join
              </button>
              <button 
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-gray-500" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </>
          ) : (
            <>
              <button className="bg-gray-800 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-700 transition-colors">
                Join Competition
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <MoreHorizontal className="h-5 w-5 text-gray-500" />
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMobile && isMenuOpen && (
        <div className="px-4 py-3 bg-gray-50 border-t border-b border-gray-200">
          <div className="space-y-2">
            <button className="w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">
              Share
            </button>
            <button className="w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">
              Bookmark
            </button>
            <button className="w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">
              Report
            </button>
          </div>
        </div>
      )}
      
      {/* Competition Title Section - Added consistent padding */}
      <div className="flex flex-col md:flex-row justify-between px-4 sm:px-6 py-4 md:py-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Predict Calorie Expenditure</h1>
          <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2">Playground Series - Season 5, Episode 5</p>
        </div>
        
        <div className="w-full md:w-64 h-32 sm:h-36 bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src="/duck.png" 
            alt="Duck lifting weights" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default CompetitionHeader;