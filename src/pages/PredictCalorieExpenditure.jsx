import { useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import NavigationTabs from '../components/All competitions/PredictCalorieEnpenditure/NavigationTabs';
import CompetitionHeader from '../components/All competitions/PredictCalorieEnpenditure/CompetitionHeader';
import Overview from '../components/All competitions/PredictCalorieEnpenditure/Overview';
import Data from '../components/All competitions/PredictCalorieEnpenditure/Data';
import Code from '../components/All competitions/PredictCalorieEnpenditure/Code';
import Models from '../components/All competitions/PredictCalorieEnpenditure/Models';
import Discussion from '../components/All competitions/PredictCalorieEnpenditure/Discussion';
import Leaderboard from '../components/All competitions/PredictCalorieEnpenditure/Leaderboard';
import Sidebar from '../components/All competitions/PredictCalorieEnpenditure/OverViewSidebar';
import FileMetadata from '../components/All competitions/PredictCalorieEnpenditure/DataSidebar';
import Rules from '../components/All competitions/PredictCalorieEnpenditure/Rules';

function PredictCaloriesExpenditure() {
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

        {/* Sidebar - conditionally render based on active tab */}
        {activeTab === 'Overview' && <Sidebar />}
        {activeTab === 'Data' && <FileMetadata />}
        {/* No sidebar for Rules tab */}
      </div>
    </div>
  );
}

export default PredictCaloriesExpenditure;