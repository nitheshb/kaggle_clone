import React from 'react';
import Header from '../components/Progressions/Header';
import Divider from '../components/Progressions/Divider';
import CategoriesSection from '../components/Progressions/Categories Section';
import PerformanceTiers from '../components/Progressions/Performance Tiers';

function Progression() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header Component */}
      <Header />
      
      {/* Divider Component */}
      <Divider />
      
      {/* Categories of Expertise Component */}
      <CategoriesSection />
      
      {/* Performance Tiers Component */}
      <PerformanceTiers />

    </div>
  );
}

export default Progression;