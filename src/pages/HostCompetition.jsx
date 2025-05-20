import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Minus } from 'lucide-react';

export default function CompetitionHost() {
  const [expandedFaqs, setExpandedFaqs] = useState({
    'eligibility': true,
    'grants': false,
    'getStarted': false,
    'support': false
  });

  const toggleFaq = (faqId) => {
    setExpandedFaqs({
      ...expandedFaqs,
      [faqId]: !expandedFaqs[faqId]
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      <div className="flex w-full bg-white p-8 items-center justify-between">
      {/* Left side text content */}
      <div className="max-w-md space-y-4">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Host your data science competition on Kaggle
        </h1>
        <p className="text-gray-600 text-lg">
          Whether you're an ML enthusiast, a teacher in class, or part of a business looking to solve challenging problems, the Kaggle platform connects your audience with your machine learning goals.
        </p>
        
        <button className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
          See Our Competition Types
        </button>
      </div>
      <img src="/images/image_host.png" alt="Logo" />
      {/* Right side illustration */}
      <div className="relative">
        {/* Colorful background shapes */}
       
        
        {/* Trophy and celebration illustration */}
        <div className="relative z-10">
       
        </div>
      </div>
    </div>
      {/* Section 1: Why a Kaggle Competition */}
      <div className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">Why a Kaggle Competition?</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="text-lg mb-5">
              Kaggle is the home of data science, with over 24 million users, ready to solve your predictive 
              modeling problem through data competitions.
            </p>
            
            <p className="text-lg mb-6">
              You set the terms, Kagglers construct their algorithms, and our website scores their 
              accuracy in real time to find the winner. Competitions are the smart, simple way to 
              tackle a tough business problem, educate students, or simply create a fun event.
            </p>
            
            <p className="text-lg mb-2">
              You bring the problem and the data, and Kaggle brings the platform.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="border border-gray-200 rounded-lg p-8 bg-white shadow-sm relative overflow-hidden">
              <h2 className="text-xl font-bold mb-6">Kaggle Competition Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-800">
                      <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
                      <line x1="6" y1="6" x2="18" y2="6"></line>
                      <line x1="6" y1="10" x2="18" y2="10"></line>
                      <line x1="6" y1="14" x2="18" y2="14"></line>
                      <line x1="6" y1="18" x2="12" y2="18"></line>
                    </svg>
                  </span>
                  <span className="text-lg">Dataset Hosting</span>
                </div>
                
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-800">
                      <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                      <path d="M16 8.5l-6.5 6.5L7 12.5"></path>
                      <rect x="2" y="8" width="4" height="12"></rect>
                      <rect x="10" y="2" width="4" height="18"></rect>
                      <rect x="18" y="5" width="4" height="15"></rect>
                    </svg>
                  </span>
                  <span className="text-lg">Real-time Leaderboards</span>
                </div>
                
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-800">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-lg">Preloaded Metrics</span>
                </div>
                
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-800">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </span>
                  <span className="text-lg">Discussion Forums</span>
                </div>
                
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-800">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </span>
                  <span className="text-lg">Automated Scoring</span>
                </div>
                
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-800">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </span>
                  <span className="text-lg">Kaggle Notebooks</span>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10">
                <div className="w-32 h-32 rounded-full bg-blue-400"></div>
                <div className="w-24 h-24 rounded-full bg-yellow-300 absolute top-12 right-20"></div>
                <div className="w-16 h-16 rounded-full bg-green-500 absolute top-16 right-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
<div className="max-w-5xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-2">Which Kaggle Competition is right for you?</h1>
      <p className="text-sm text-gray-600 mb-6">Kaggle offers a range of offerings for competition hosts. Select the one that's right for your needs.</p>

      <div className="flex">
        {/* Left side - Feature titles */}
        <div className="w-1/4">
          {/* Category headers positioned to match the icons */}
          <div className="h-36"></div> {/* Empty space to align with cards */}
          
          {/* First shared features section */}
          <div className="mb-2 mt-10">
            <h3 className="font-semibold text-gray-700 mb4">Shared Features</h3>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="h-8"><td className="text-sm">Dataset Hosting</td></tr>
                <tr className="h-8"><td className="text-sm">Notebooks with no cost compute</td></tr>
                <tr className="h-8"><td className="text-sm">Competition-specific forum</td></tr>
                <tr className="h-8"><td className="text-sm">Live competition leaderboard</td></tr>
                {/* <tr className="h-8"><td className="text-sm">Real-time submission scoring</td></tr>
                <tr className="h-8"><td className="text-sm">Custom evaluation metrics</td></tr> */}
              </tbody>
            </table>
          </div>

          {/* Key Differences section */}
          <div className="mb-2 mt-10">
            <h3 className="font-semibold text-gray-700 mb-4">Key Differences</h3>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="h-8"><td className="text-sm">Featured on Competition homepage</td></tr>
                <tr className="h-8"><td className="text-sm">Marketing Kaggle & social media</td></tr>
                <tr className="h-8"><td className="text-sm">Cash prizes allowed to winners</td></tr>
                {/* <tr className="h-8"><td className="text-sm">Increased participation via Kaggle progression system</td></tr> */}
              </tbody>
            </table>
          </div>

          {/* Support section */}
          <div className="mb-2 mt-4">
            <h3 className="font-semibold text-gray-700 mb-4">Support</h3>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="h-8"><td className="text-sm">Technical advice and support</td></tr>
                <tr className="h-8"><td className="text-sm">Comprehensive prep for launch</td></tr>
                <tr className="h-8"><td className="text-sm">Live competition monitoring</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Community Column */}
        <div className="w-1/4 px-2">
          {/* Header section */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L7 13.5V8.5L12 6L17 8.5V13.5L12 16Z" fill="#FFCC00" />
                <path d="M12 16L7 13.5M12 16L17 13.5M12 16V21M7 13.5V8.5L12 6L17 8.5V13.5M7 13.5L3 15.5V10.5L7 8.5M17 13.5L21 15.5V10.5L17 8.5" stroke="#FFCC00" strokeWidth="1.5" />
              </svg>
            </div>
            <h2 className="font-bold text-lg mb-1">Community</h2>
            <p className="text-xs text-center mb-2">For educators, small businesses, or ML enthusiasts</p>
            <div className="text-center mb-4">
              <span className="font-semibold">No cost</span>
            </div>
          </div>
          
          {/* Shared Features checkmarks */}
          <table className="w-full border-collapse mb-6">
            <tbody>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
            </tbody>
          </table>
          
          {/* Key Differences checkmarks */}
          <table className="w-full border-collapse mb-6 mt-6">
            <tbody>
              <tr className="h-8"><td className="text-center"><Minus size={18} className="text-gray-400 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Minus size={18} className="text-gray-400 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Minus size={18} className="text-gray-400 inline" /></td></tr>
            </tbody>
          </table>
          
          {/* Support checkmarks */}
          <table className="w-full border-collapse mb-6 mt-6">
            <tbody>
              <tr className="h-8"><td className="text-center"><Minus size={18} className="text-gray-400 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Minus size={18} className="text-gray-400 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Minus size={18} className="text-gray-400 inline" /></td></tr>
            </tbody>
          </table>
          
          {/* Buttons */}
          <div className="mt-6 w-full">
            <button className="bg-gray-800 text-white rounded px-4 py-2 text-sm w-full mb-2">Get Started</button>
            <button className="border border-gray-300 rounded px-4 py-2 text-sm w-full">Learn More</button>
          </div>
        </div>

        {/* Featured Column */}
        <div className="w-1/4 px-2">
          {/* Header section */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20L12 4L20 20H4Z" fill="#1870F0" stroke="#1870F0" strokeWidth="1.5" />
              </svg>
            </div>
            <h2 className="font-bold text-lg mb-1">Featured</h2>
            <p className="text-xs text-center mb-2">For businesses or organizations with brand/data ML problems</p>
            <div className="text-center mb-4">
              <span className="font-semibold">Pricing varies</span>
            </div>
          </div>
          
          {/* Shared Features checkmarks */}
          <table className="w-full border-collapse mb-6">
            <tbody>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
            </tbody>
          </table>
          
          {/* Key Differences checkmarks */}
          <table className="w-full border-collapse mb-6 mt-6">
            <tbody>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
            </tbody>
          </table>
          
          {/* Support checkmarks */}
          <table className="w-full border-collapse mb-6 mt-6">
            <tbody>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
            </tbody>
          </table>
          
          {/* Buttons */}
          <div className="mt-6 w-full">
            <button className="bg-gray-800 text-white rounded px-4 py-2 text-sm w-full mb-2">Contact Us</button>
            <button className="border border-gray-300 rounded px-4 py-2 text-sm w-full">Learn More</button>
          </div>
        </div>

        {/* Research Column */}
        <div className="w-1/4 px-2">
          {/* Header section */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="#00CCFF" stroke="#00CCFF" strokeWidth="1.5" />
                <path d="M4 8V16L12 20M4 8L12 12M12 20L20 16V8M12 20V12M20 8L12 12" stroke="#00CCFF" strokeWidth="1.5" />
              </svg>
            </div>
            <h2 className="font-bold text-lg mb-1">Research</h2>
            <p className="text-xs text-center mb-2">For Academic / Research Institutions or Non-Profits</p>
            <div className="text-center mb-4">
              <span className="font-semibold">Grants available</span>
            </div>
          </div>
          
          {/* Shared Features checkmarks */}
          <table className="w-full border-collapse mb-6">
            <tbody>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
            </tbody>
          </table>
          
          {/* Key Differences checkmarks */}
          <table className="w-full border-collapse mb-6 mt-6">
            <tbody>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
            </tbody>
          </table>
          
          {/* Support checkmarks */}
          <table className="w-full border-collapse mb-6 mt-6">
            <tbody>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
              <tr className="h-8"><td className="text-center"><Check size={18} className="text-green-600 inline" /></td></tr>
            </tbody>
          </table>
          
          {/* Buttons */}
          <div className="mt-6 w-full">
            <button className="bg-gray-800 text-white rounded px-4 py-2 text-sm w-full mb-2">Apply Now</button>
            <button className="border border-gray-300 rounded px-4 py-2 text-sm w-full">Learn More</button>
          </div>
        </div>
      </div>
    </div>
      
      {/* Section 5: FAQs */}
      <div className="mb-16 mt-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Competition FAQs</h2>
          <button className="border border-gray-300 rounded-full px-6 py-2 text-gray-700">
            See all
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleFaq('eligibility')}
            >
              <h3 className="text-xl font-medium">Who's eligible to launch a community competition?</h3>
              {expandedFaqs.eligibility ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            
            {expandedFaqs.eligibility && (
              <div className="mt-2 text-gray-700">
                <p>Everyone! Previously, this platform could only be used in university courses, but now anyone can organize a competition,<br></br> including research organizations, companies, and regional meetup groups.</p>
              </div>
            )}
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq('grants')}
            >
              <h3 className="text-xl font-medium">How do grants for Research Competitions work?</h3>
              {expandedFaqs.grants ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            
            {expandedFaqs.grants && (
              <div className="mt-2 text-gray-700">
                <p>Kaggle is offering quarterly grants to hosts at academic/sesearch institutions and non-profit organizations who want to run competitions to further their machine learning research efforts.</p>
              </div>
            )}
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq('getStarted')}
            >
              <h3 className="text-xl font-medium">What do I need to get started to create a competition?</h3>
              {expandedFaqs.getStarted ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            
            {expandedFaqs.getStarted && (
              <div className="mt-2 text-gray-700">
                <p>You'll need  a clearly defined problem that competitors need to solve using a machine learning model and  item will sell using a dataset of past product and sales information from Corporación Favorita, a large Ecuadorian-based grocery retailer.
                    Check out <br></br> our step by step guide on how to get started.</p>
              </div>
            )}
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq('support')}
            >
              <h3 className="text-xl font-medium">How do I get support for my competition?</h3>
              {expandedFaqs.support ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            
            {expandedFaqs.support && (
              <div className="mt-2 text-gray-700">
                <p>Because Community Competitions are no cost and entirely self-service, we aren't able to provide hands-on support for<br></br> setting up or troubleshooting your competition. But, we encourage connecting with other Community Competition hosts in Competition Hosting forum . If you're experiencing an issue that you believe is affecting the entire platform, please contact.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}