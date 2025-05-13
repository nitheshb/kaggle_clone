import { useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import NavigationTabs from '../components/ImageMatching/NavigationTabs'; // Import NavigationTabs component
import CompetitionHeader from '../components/ImageMatching/CompetitionHeader'; // Import header component
import Overview from '../components/ImageMatching/Overview';
import Data from '../components/ImageMatching/Data';
import Code from '../components/ImageMatching/Code';
import Models from '../components/ImageMatching/Models';
import Discussion from '../components/ImageMatching/Discussion';
import Leaderboard from '../components/ImageMatching/Leaderboard';
import Rules from '../components/ImageMatching/Rules';
import Sidebar from '../components/ImageMatching/Sidebar'; // Import sidebar component
import FileMetadata from '../components/ImageMatching/DataSidebar'; // Import file metadata component

function ImageMatching() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="flex flex-col min-h-screen bg-white text-sm max-w-screen-xl mx-auto font-['Inter',sans-serif]">
      {/* Competition Header */}
      <CompetitionHeader />

      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex flex-1 px-4 py-6">
        {/* Main Section */}
        <div className="flex-grow pr-6">
          {/* Conditionally render components based on activeTab */}
          {activeTab === 'Overview' && <Overview />}
          {activeTab === 'Data' && <Data />}
          {activeTab === 'Code' && <Code />}
          {activeTab === 'Models' && <Models />}
          {activeTab === 'Discussion' && <Discussion />}
          {activeTab === 'Leaderboard' && <Leaderboard />}
          {activeTab === 'Rules' && <Rules />}
        </div>

        {/* Sidebar (only visible in the Overview tab) */}
        {activeTab === 'Data' && <FileMetadata />}
        {activeTab === 'Overview' && <Sidebar />}
      </div>
    </div>
  );
}


export default ImageMatching;