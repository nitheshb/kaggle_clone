import React, { useRef, useState, useEffect } from 'react';

function Rules() {
  // Create refs for each major section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section11Ref = useRef(null);
  const section12Ref = useRef(null);
  const section13Ref = useRef(null);
  const section14Ref = useRef(null);
  const section15Ref = useRef(null);
  const section16Ref = useRef(null);
  const section17Ref = useRef(null);
  const section4Ref = useRef(null);
  
  // Content container ref for scroll tracking
  const contentRef = useRef(null);
  
  // State for scroll indicator position
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Scroll to section function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollPosition(scrollPercentage);
      }
    };
    
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
      return () => contentElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="flex">
      {/* Main content */}
      <div 
        ref={contentRef} 
        className="flex-1 pr-8 h-screen"
        style={{ 
          maxHeight: 'calc(100vh - 40px)', 
          overflowY: 'scroll', 
          scrollbarWidth: 'none',        // Firefox
          msOverflowStyle: 'none'        // IE 10+
        }}
      >
        <style>
          {`
            /* Hide scrollbar for Chrome, Safari and Opera */
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Competition Rules</h2>
        
        <p className="text-gray-700 mb-6">
          The Competition named below is a skills-based competition to promote and further the field of data science. You must register via the Competition Website to enter. To enter the Competition, you must agree to these Official Competition Rules, which incorporate by reference the provisions and content of the Competition Website and any Specific Competition Rules herein (collectively, the "Rules"). Please read these Rules carefully before entry to ensure you understand and agree. You further agree that Submission in the Competition constitutes agreement to these Rules. You may not submit to the Competition and are not eligible to receive the prizes associated with this Competition unless you agree to these Rules. These Rules form a binding legal agreement between you and the Competition Sponsor with respect to the Competition. Your competition Submissions must conform to the requirements stated on the Competition Website. Your Submissions will be scored based on the evaluation metric described on the Competition Website. Subject to compliance with the Competition Rules, Prizes, if any, will be awarded to Participants with the best scores, based on the merits of the data science models submitted. See below for the complete Competition Rules.
        </p>
        
        <p className="text-gray-700 mb-6">
          You cannot sign up to Kaggle from multiple accounts and therefore you cannot enter or submit from multiple accounts.
        </p>

        {/* Section 1 */}
        <div ref={section1Ref} className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">1. COMPETITION-SPECIFIC TERMS</h3>
          <div className="pl-4 space-y-4">
            <div>
              <p className="text-gray-700 font-medium">1. COMPETITION TITLE</p>
              <p className="text-gray-700">Playground Series - Season 5, Episode 5</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium">2. COMPETITION SPONSOR</p>
              <p className="text-gray-700">Google LLC</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium">3. COMPETITION SPONSOR ADDRESS</p>
              <p className="text-gray-700">1600 Amphitheatre Pkwy Mountain View, CA 94043</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium">4. COMPETITION WEBSITE</p>
              <p className="text-gray-700">https://www.kaggle.com/competitions/playground-series-s5e5</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium">5. TOTAL PRIZES AVAILABLE</p>
              <p className="text-gray-700">Choice of Kaggle merchandise</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium">6. WINNER LICENSE TYPE</p>
              <p className="text-gray-700">None</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium">7. DATA ACCESS AND USE</p>
              <p className="text-gray-700">Apache 2.0</p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div ref={section2Ref} className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">2. COMPETITION-SPECIFIC RULES</h3>
          <div className="pl-4 space-y-6">
            <div>
              <p className="text-gray-700 font-medium mb-2">1. TEAM LIMITS</p>
              <p className="text-gray-700 mb-2">a. The maximum Team size is three (3).</p>
              <p className="text-gray-700">b. Team mergers are allowed and can be performed by the Team leader. In order to merge, the combined Team must have a total Submission count less than or equal to the maximum allowed as of the Team Merger Deadline. The maximum allowed is the number of Submissions per day multiplied by the number of days the competition has been running.</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2">2. SUBMISSION LIMITS</p>
              <p className="text-gray-700 mb-2">a. You may submit a maximum of five (5) Submissions per day.</p>
              <p className="text-gray-700">b. You may select up to two (2) Final Submissions for judging.</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2">3. COMPETITION TIMELINE</p>
              <p className="text-gray-700">a. Competition Timeline dates (including Entry Deadline, Final Submission Deadline, Start Date, and Team Merger Deadline, as applicable) are reflected on the competition's Overview &gt; Timeline page.</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2">4. COMPETITION DATA</p>
              <p className="text-gray-700">a. Data Access and Use: You may access and use the Competition Data for any purpose, whether commercial or non-commercial, including for participating in the Competition and on Kaggle.com forums, and for academic research and education. The Competition Sponsor reserves the right to disqualify any Participant who uses the Competition Data other than as permitted by the Competition Website and these Rules. The Competition Data is also subject to the following terms and conditions: Apache 2.0.</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2">5. WINNER LICENSE</p>
              <p className="text-gray-700">None.</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div ref={section3Ref} className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">3. GENERAL COMPETITION RULES - BINDING AGREEMENT</h3>
          <div className="pl-4 space-y-6">
            <div ref={section11Ref}>
              <p className="text-gray-700 font-medium mb-2">1. ELIGIBILITY</p>
              <p className="text-gray-700">To be eligible to enter the Competition, you must be a registered account holder at Kaggle.com; the older of 18 years old or the age of majority in your jurisdiction of residence; not a resident of Crimea, so-called Donetsk People's Republic (DNR) or Luhansk People's Republic (LNR), Cuba, Iran, Syria, or North Korea; and not a person or representative of an entity under U.S. export controls or sanctions.</p>
            </div>
            
            <div ref={section12Ref}>
              <p className="text-gray-700 font-medium mb-2">2. SPONSOR AND HOSTING PLATFORM</p>
              <p className="text-gray-700">The Competition is sponsored by Competition Sponsor named above. The Competition is hosted on behalf of Competition Sponsor by Kaggle Inc. ("Kaggle"). Kaggle is an independent contractor of Competition Sponsor, and is not a party to this or any agreement between you and Competition Sponsor.</p>
            </div>
            
            <div ref={section13Ref}>
              <p className="text-gray-700 font-medium mb-2">3. COMPETITION PERIOD</p>
              <p className="text-gray-700">The Competition will run from the Start Date and time to the Final Submission Deadline (such duration the "Competition Period").</p>
            </div>
            
            <div ref={section14Ref}>
              <p className="text-gray-700 font-medium mb-2">4. COMPETITION ENTRY</p>
              <p className="text-gray-700">To enter the Competition, you must register on the Competition Website prior to the Entry Deadline and follow the instructions for developing and entering your Submission.</p>
            </div>
            
            <div ref={section15Ref}>
              <p className="text-gray-700 font-medium mb-2">5. INDIVIDUALS AND TEAMS</p>
              <p className="text-gray-700">You may submit only under one unique Kaggle.com account. If permitted under the Competition Website guidelines, you may join or form a Team with other individuals.</p>
            </div>
            
            <div ref={section16Ref}>
              <p className="text-gray-700 font-medium mb-2">6. SUBMISSION CODE REQUIREMENTS</p>
              <p className="text-gray-700">You may not privately share source or executable code during the Competition Period, unless specifically permitted under the Competition Website or Competition Specific Rules.</p>
            </div>
            
            <div ref={section17Ref}>
              <p className="text-gray-700 font-medium mb-2">7. DETERMINING WINNERS</p>
              <p className="text-gray-700">Each Submission will be scored based on the evaluation metric stated on the Competition Website. The winner(s) are determined by the leaderboard ranking on the Private Leaderboard, subject to compliance with these Rules.</p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div ref={section4Ref} className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">4. DEFINITIONS</h3>
          <div className="pl-4 space-y-4">
            <p className="text-gray-700">"Competition Data" refers to the data available for the purpose of use in the Competition, including prototype or executable code provided on the Competition Website.</p>
            <p className="text-gray-700">An “Entry” refers to a participant joining and accepting the competition rules.</p>
            {/* Add other definitions as needed */}
          </div>
        </div>
        
        {/* Adding extra content to make scrolling more apparent */}
        <div className="mb-32">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Information</h3>
          <p className="text-gray-700 mb-4">
            This section contains additional information about the competition...
          </p>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-700 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      {/* Divider with scroll indicator */}
      <div className="relative w-1 mx-2" style={{ height: '400px' }}>
        <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
        <div 
          className="absolute w-1 h-5 bg-black rounded-full opacity-70 transition-all duration-200"
          style={{ top: `calc(${scrollPosition}% - 16px)` }}
        ></div>
      </div>

      {/* Sidebar navigation */}
      <div className="w-64">
        <div className="sticky top-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Jump to Section</h4>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => scrollToSection(section1Ref)} 
                className="text-gray-600 hover:text-black text-sm transition-colors duration-200"
              >
                1. Competition-Specific Terms
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(section2Ref)} 
                className="text-gray-600 hover:text-black text-sm transition-colors duration-200"
              >
                2. Competition-Specific Rules
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(section3Ref)} 
                className="text-gray-600 hover:text-black text-sm transition-colors duration-200"
              >
                3. General Competition Rules
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(section11Ref)} 
                className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
              >
                3.1 Eligibility
              </button>
            </li>
                         <li>
                            <button 
                onClick={() => scrollToSection(section12Ref)} 
                className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
              >
                3.2 Sponsor and Hosting
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(section13Ref)} 
                className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
              >
                3.3 Competition Period
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(section14Ref)} 
                className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
              >
                3.4 Competition Entry
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(section15Ref)} 
                className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
              >
                3.5 Individuals and Teams
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(section16Ref)} 
                className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
              >
                3.6 Submission Code
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(section17Ref)} 
                className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
              >
                3.7 Determining Winners
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(section4Ref)} 
                className="text-gray-600 hover:text-black text-sm transition-colors duration-200"
              >
                4. Definitions
              </button>
            </li>

            {/* More sidebar items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Rules;
