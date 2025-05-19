// import React from 'react';

// function Sidebar() {
//   return (
//     <div className="w-64">
//       {/* Competition Host with K in bold circle */}
//       <div className="mb-6 flex items-start justify-between">
//         <div>
//           <h2 className="text-[16px] font-bold text-[#202124] mb-1">Competition Host</h2>
//           <p className="text-gray-700">Czech Technical University in Prague</p>
//         </div>
//         <div className="w-10 h-10 rounded-full border-[3px] border-gray-800 flex items-center justify-center">
//           <span className="text-sky-500 font-bold text-xl">K</span>
//         </div>
//       </div>

//       {/* Prizes section */}
//       <div className="mb-6">
//         <h3 className="text-[16px] font-bold text-[#202124] mb-1">Prizes & Awards</h3>
//         <p className="text-gray-700">$50,000

// Awards Points & Medals</p>
//       </div>
      
//       {/* Participation section */}
//       <div>
//         <h3 className="text-[16px] font-bold text-[#202124] mb-1">Participation</h3>
//         <div className="space-y-1">
//           <p className="text-gray-700">4,942 Entrants</p>
//           <p className="text-gray-700">810 Participants</p>
//           <p className="text-gray-700">705 Teams</p>
//           <p className="text-gray-700">9,050 Submissions</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;







import React from 'react';

function Sidebar() {
  return (
    <div className="w-64">
      {/* Competition Host with K in bold circle */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-[16px] font-bold text-[#202124] mb-1">Competition Host</h2>
          <p className="text-gray-700">Czech Technical University in Prague</p>
        </div>
        {/* Updated to use background image */}
        <div 
          className="w-10 h-10 rounded-full border-[3px] border-gray-800 flex items-center justify-center"
          style={{ backgroundImage: 'url("https://storage.googleapis.com/kaggle-organizations/3963/thumbnail.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
          title="Czech Technical University in Prague"
        ></div>
      </div>

      {/* Prizes section */}
      <div className="mb-6">
        <h3 className="text-[16px] font-bold text-[#202124] mb-1">Prizes & Awards</h3>
        <p className="text-gray-700">$50,000 Awards Points & Medals</p>
      </div>
      
      {/* Participation section */}
      <div>
        <h3 className="text-[16px] font-bold text-[#202124] mb-1">Participation</h3>
        <div className="space-y-1">
          <p className="text-gray-700">4,942 Entrants</p>
          <p className="text-gray-700">810 Participants</p>
          <p className="text-gray-700">705 Teams</p>
          <p className="text-gray-700">9,050 Submissions</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
