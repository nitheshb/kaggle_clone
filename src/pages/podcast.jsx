import { useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import NavigationTabs from '../components/Podcast/NavigationTabs'; // Import NavigationTabs component
import CompetitionHeader from '../components/Podcast/CompetitionHeader'; // Import header component
import Overview from '../components/Podcast/Overview';
import Data from '../components/Podcast/Data';
import Code from '../components/Podcast/Code';
import Models from '../components/Podcast/Models';
import Discussion from '../components/Podcast/Discussion';
import Leaderboard from '../components/Podcast/Leaderboard';
import Rules from '../components/Podcast/Rules';
import Sidebar from '../components/Podcast/Sidebar'; // Import sidebar component
// import FileMetadata from './components/DataSidebar'; // Import file metadata component


function Podcast() {
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
        {/* {activeTab === 'Data' && <FileMetadata />} */}
        {activeTab === 'Overview' && <Sidebar />}
      </div>
    </div>
  );
}


export default Podcast;

