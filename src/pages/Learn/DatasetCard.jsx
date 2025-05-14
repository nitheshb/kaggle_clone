import React from 'react';
export default function DatasetCard({ title, updated, files, size, image }) {
  return (
    <div className="dataset-card cursor-pointer hover:shadow-lg">
      <img src={image} alt={title} />
      <div className="content">
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-1">Updated {updated}</p>
        <p className="text-sm text-gray-500 mb-1">{files} files</p>
        <p className="text-sm text-gray-500">{size}</p>
      </div>
    </div>
  );
}
