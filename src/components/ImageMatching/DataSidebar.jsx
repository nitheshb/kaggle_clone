import React from 'react';

function DatasetSidebar() {
  return (
    <div className="pl-0 -ml-4">
      {/* Files section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-1">Files</h3>
        <p className="text-gray-700">2036 files</p>
      </div>
      
      {/* Size section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-1">Size</h3>
        <p className="text-gray-700">5.22 GB</p>
      </div>
      
      {/* Type section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-1">Type</h3>
        <p className="text-gray-700">png, txt, csv</p>
      </div>
      
      {/* License section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-1">License</h3>
        <p className="text-gray-700">Apache 2.0</p>
      </div>
    </div>
  );
}

export default DatasetSidebar;