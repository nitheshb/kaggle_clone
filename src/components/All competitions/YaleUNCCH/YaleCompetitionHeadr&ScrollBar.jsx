import React, { useState, useEffect } from 'react';
import { MoreHorizontal, Menu } from 'lucide-react';
import Sidebar from './OverViewSidebar';
import CompetitionCodeTab from './CompetitionCodeTab';
import Models from './Models';
import Discussion from './Discussion';
import Leaderboard from './Leaderboard';
import Rules from './Rules';
import CompetitionNavbarA from '../../layout/NavbarA'; // Import the CompetitionNavbarA component

const CompetitionPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Data');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [navbarVisible] = useState(true); // Add state for navbar visibility
  
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowMobileMenu(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const tabs = ['Overview', 'Data', 'Code', 'Models', 'Discussion', 'Leaderboard', 'Rules'];

  const DatasetSidebar = () => {
    return (
      <>
      <CompetitionNavbarA visible={navbarVisible} />
      <div className={`${isMobile ? 'px-4 py-6 border-t border-gray-200' : 'pl-8'}`}>
        {/* Files section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-1">Files</h3>
          <p className="text-gray-700">3 files</p>
        </div>
        
        {/* Size section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-1">Size</h3>
          <p className="text-gray-700">49.49 MB</p>
        </div>
        
        {/* Type section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-1">Type</h3>
          <p className="text-gray-700">csv</p>
        </div>
        
        {/* License section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-1">License</h3>
          <p className="text-gray-700">Apache 2.0</p>
        </div>
      </div>
      </>
    );
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky header that changes on scroll */}
      <header className={`sticky top-0 z-10 bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        {/* Full Header (shown when not scrolled) */}
        {!scrolled && (
          <>
            <div className="flex justify-between items-center px-4 py-3">
              <div className="flex items-center space-x-3">
                {/* Yale Logo */}
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden bg-white">
                  <span className="text-blue-800 font-serif font-bold">Yale</span>
                </div>
                
                {/* Competition Info - hide on small screens */}
                <div className="hidden sm:block text-gray-600 text-xs uppercase tracking-wide">
                  YALE UNIVERSITY · RESEARCH PREDICTION COMPETITION · 2 MONTHS TO GO
                </div>
              </div>
              
              {/* Join Button and Options */}
              <div className="flex items-center space-x-2">
                <button className="bg-gray-900 text-white px-3 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base">
                  Join Competition
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <MoreHorizontal className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
            
            {/* Competition Title Section */}
            <div className="flex flex-col md:flex-row justify-between px-4 py-4 md:py-6">
              <div className="mb-4 md:mb-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Yale/UNC-CH - Geophysical Waveform Inversion</h1>
                <p className="text-gray-600 text-sm sm:text-base mt-2">Develop physics-guided machine learning models to solve full-waveform inversion problems</p>
              </div>
              
              {/* Right side illustration */}
              <div className="w-full md:w-64 h-36 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="/header.png" 
                  alt="Competition illustration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </>
        )}
        
        {/* Compact Header (shown when scrolled) */}
        {scrolled && (
          <div className="flex justify-between items-center px-4 py-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">Yale/UNC-CH - Geophysical Waveform Inversion</h2>
            
            {/* Join Button and Options */}
            <div className="flex items-center space-x-2">
              <button className="bg-gray-900 text-white px-3 sm:px-4 py-1.5 rounded-full font-medium text-sm">Join Competition</button>
              <button className="p-1 rounded-full hover:bg-gray-100">
                <MoreHorizontal className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        )}
        
        {/* Navigation Tabs - Desktop view */}
        <div className="border-b border-gray-200 relative">
          {/* Mobile tab menu toggle */}
          <div className="md:hidden flex items-center justify-between px-4 py-2 border-b border-gray-100">
            <span className="font-medium text-gray-800">{activeTab}</span>
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
          {/* Mobile tab dropdown */}
          {showMobileMenu && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-20">
              {tabs.map(tab => (
                <button
                  key={tab}
                  className={`block w-full text-left px-6 py-3 ${
                    activeTab === tab ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-700'
                  }`}
                  onClick={() => {
                    setActiveTab(tab);
                    setShowMobileMenu(false);
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
          
          {/* Desktop tabs */}
          <nav className="hidden md:flex overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`px-5 py-3 font-medium text-base relative whitespace-nowrap ${
                  activeTab === tab 
                    ? 'text-gray-800'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>
      
      {/* Main content area - Conditionally rendered based on activeTab */}
      {activeTab === 'Overview' && (
        <div className="p-4 md:p-6 flex flex-col md:flex-row">
          <div className="flex-1 md:mr-8 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="mb-4">
              In this competition, you'll estimate subsurface properties—like velocity maps—from on seismic waveform data. 
              Known as Full Waveform Inversion (FWI), this process could lead to more accurate and efficient seismic analysis, 
              making it more useful in a variety of fields.
            </p>
          </div>
          
          <div className={`${isMobile ? 'w-full' : 'w-64'}`}>
            <Sidebar />
          </div>
        </div>
      )}
      
      {activeTab === 'Data' && (
        <div className="p-4 md:p-6 flex flex-col md:flex-row">
          <div className="flex-1 md:mr-8 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Dataset Description</h2>
            <p className="mb-6">
              The dataset for this competition (both train and test) was generated from a deep learning model trained on the Calories Burnt Prediction dataset. Feature distributions are close to, but not exactly the same, as the original. Feel free to use the original dataset as part of this competition, both to explore differences as well as to see whether incorporating the original in training improves model performance.
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full">
                <h2 className="text-xl font-bold mb-3">Files</h2>
                <ul className="list-disc pl-5">
                  <li className="mb-1"><strong>train.csv</strong> - the training dataset; Calories is the continuous target</li>
                  <li className="mb-1"><strong>test.csv</strong> - the test dataset; your objective is to predict the Calories for each row</li>
                  <li><strong>sample_submission.csv</strong> - a sample submission file in the correct format.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* For mobile: show dataset sidebar below content */}
          {isMobile ? (
            <div className="w-full">
              <DatasetSidebar />
            </div>
          ) : (
            <div className="w-64">
              <DatasetSidebar />
            </div>
          )}
        </div>
      )}
      
      {/* Other tabs */}
      {activeTab === 'Code' && (
        <div className="p-4 md:p-6">
          <CompetitionCodeTab />
        </div>
      )}
      
      {activeTab === 'Models' && (
        <div className="p-4 md:p-6">
          <Models />
        </div>
      )}
      
      {activeTab === 'Discussion' && (
        <div className="p-4 md:p-6">
          <Discussion />
        </div>
      )}
      
      {activeTab === 'Leaderboard' && (
        <div className="p-4 md:p-6">
          <Leaderboard />
        </div>
      )}
      
      {activeTab === 'Rules' && (
        <div className="p-4 md:p-6">
          <Rules />
        </div>
      )}
    </div>
    
  );
};

export default CompetitionPage;