import React from 'react';

const CategoryCard = ({ category, handleClick }) => {
  const renderIcon = () => {
    const iconClasses = `w-5 h-5 ml-2 ${category.iconColor} font-bold`;

    if (React.isValidElement(category.icon)) {
      return React.cloneElement(category.icon, {
        className: iconClasses,
      });
    }

    const commonProps = iconClasses;

    if (category.icon === 'list') {
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="none">
          <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    }

    if (category.icon === 'playground') {
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="none">
          <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }

    if (category.icon === 'simulations') {
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="none">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }

    if (category.icon === 'analytics') {
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="none">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }

    return null;
  };

  return (
    <div 
      onClick={handleClick} // Trigger handleClick passed from parent
      className="cursor-pointer flex-shrink-0 w-[180px] px-3 py-3 bg-white border border-gray-200 rounded-xl hover:border-black transition-all"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-bold text-sm text-gray-900">{category.title}</span>
        {renderIcon()}
      </div>
      <p className="text-sm text-gray-600">{category.description}</p>
    </div>
  );
};

export default CategoryCard;
