import React from 'react';
import { MoreHorizontal } from 'lucide-react';

function CompetitionHeader() {
  return (
    <>
      {/* Subheader with Kaggle Logo and Competition Info */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center space-x-3">
          {/* Kaggle Logo - Updated to match first code example */}
          <div className="w-10 h-10 rounded-full border-[3px] border-gray-800 flex items-center justify-center">
            <span className="text-sky-500 font-bold text-xl">K</span>
          </div>
          
          {/* Competition Basic Info */}
          <div className="text-gray-500 text-xs uppercase tracking-wide">
            Czech Technical University in Prague · Research Code Competition · 22 days to go
          </div>
        </div>
        
        {/* Join Button and Options */}
        <div className="flex items-center space-x-2">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-full font-medium">Join Competition</button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <MoreHorizontal className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
      
      {/* Competition Title Section */}
      <div className="flex justify-between px-4 py-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Image Matching Challenge 2025</h1>
          {/* Increased font size from default to text-base (16px) */}
          <p className="text-gray-600 text-base mt-2">Reconstruct 3D scenes from messy image collections.</p>
        </div>
        
        {/* Competition Image */}
        <div className="w-64 h-36 bg-gray-100 rounded-lg overflow-hidden">
           <img 
            src="/fort.png" 
            alt="Fort" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default CompetitionHeader;