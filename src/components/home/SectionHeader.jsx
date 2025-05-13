
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionHeader = ({ title, link, linkText }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      {link && linkText && (
        <Link 
          to={link} 
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          {linkText}
          <ChevronRight size={16} className="ml-1" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
