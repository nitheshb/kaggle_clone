import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between mb-8">
      <div className="max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Discussions</h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Discuss the Kaggle platform & machine learning topics – this 
          includes sharing feedback, asking questions, and more.
        </p>
      </div>
      <div className="mt-4 md:mt-0">
        <img src="https://www.kaggle.com/static/images/discussion/landing/header-light.svg" alt="Discussions" className="w-48 sm:w-56" />
      </div>
    </div>
  );
};

export default Header;