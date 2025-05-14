import React from 'react';

function Sidebar() {
  return (
    <div className="w-64">
      {/* Competition Host with Yale icon */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-[16px] font-bold text-[#202124] mb-1">Competition Host</h2>
          <p className="text-gray-700">Yale University</p>
        </div>
        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden bg-white">
          <span className="text-blue-800 font-serif font-bold">Yale</span>
        </div>
      </div>

      {/* Prizes section */}
      <div className="mb-6">
        <h3 className="text-[16px] font-bold text-[#202124] mb-1">Prizes & Awards</h3>
        <p className="text-gray-700">$50,000 <br></br>Awards Points & Medals</p>
      </div>
      
      {/* Participation section */}
      <div>
        <h3 className="text-[16px] font-bold text-[#202124] mb-1">Participation</h3>
        <div className="space-y-1">
          <p className="text-gray-700">3,783 Entrants</p>
          <p className="text-gray-700">1,563 Participants</p>
          <p className="text-gray-700">1,520 Teams</p>
          <p className="text-gray-700">8,956 Submissions</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;