// Leaderboard.jsx
import React, { useState } from 'react';
import { Download, RefreshCw, ChevronDown, ChevronUp, Search } from 'lucide-react';

// Public Leaderboard Data
const publicLeaderboardData = [
  {
    rank: 1,
    team: 'Meta Models',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 0.05634,
    entries: 44,
    last: '4h'
  },
  {
    rank: 2,
    team: 'Cyril Bourgeois',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/6156634-kg.png?t=2024-10-24-17-57-31',
    score: 0.05650,
    entries: 36,
    last: '2d'
  },
  {
    rank: 3,
    team: 'wind1234it',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 0.05658,
    entries: 36,
    last: '1d'
  },
  {
    rank: 4,
    team: 'Mahog',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 0.05668,
    entries: 25,
    last: '7h'
  },
  {
    rank: 5,
    team: 'Mirazul Islam',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 0.05668,
    entries: 30,
    last: '3h'
  },
  {
    rank: 6,
    team: 'calory_counters',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 0.05669,
    entries: 36,
    last: '8h'
  },
  {
    rank: 7,
    team: 'Onur Koç',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 0.05669,
    entries: 35,
    last: '12h'
  },
  {
    rank: 8,
    team: 'invisible',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 0.05669,
    entries: 25,
    last: '6d'
  },
  {
    rank: 9,
    team: 'F',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 0.05669,
    entries: 1,
    last: '8d'
  },
  {
    rank: 10,
    team: 'Manav Trivedi',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 0.05669,
    entries: 21,
    last: '8d'
  }
];

// Private leaderboard data
const privateLeaderboardData = [
  {
    rank: 1,
    team: 'Chris Deotte',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 11.44833,
    entries: 125,
    last: '13d'
  },
  {
    rank: 2,
    team: 'Farukcan Saglam',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 11.50787,
    entries: 77,
    last: '13d'
  },
  {
    rank: 3,
    team: 'Johannes Heller',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 11.53591,
    entries: 43,
    last: '13d'
  },
  {
    rank: 4,
    team: 'Ravi Ramakrishnan',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 11.54182,
    entries: 44,
    last: '14d'
  },
  {
    rank: 5,
    team: 'Optimistix',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 11.54182,
    entries: 44,
    last: '14d'
  },
  {
    rank: 6,
    team: 'masaishi',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 11.54182,
    entries: 44,
    last: '14d'
  },
  {
    rank: 7,
    team: 'Mehedi',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 11.54182,
    entries: 44,
    last: '14d'
  },
  {
    rank: 8,
    team: 'OMID BAGHCHEH SARAEI',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 11.54182,
    entries: 44,
    last: '14d'
  },
  {
    rank: 9,
    team: 'Mahog',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 11.54182,
    entries: 44,
    last: '14d'
  },
  {
    rank: 10,
    team: 'automatylicza_knai',
    avatarUrl: 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
    score: 11.54182,
    entries: 44,
    last: '14d'
  }
];

// Avatar Component
const AvatarImage = ({ url, title }) => {
  return (
    <img 
      src={url} 
      alt={title}
      title={title}
      className="w-8 h-8 rounded-full border-2 border-gray-200"
      onError={(e) => {
        e.target.src = 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png';
      }}
    />
  );
};

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('Public');
  const [sortConfig, setSortConfig] = useState({ key: 'rank', direction: 'asc' });
  const [searchQuery, setSearchQuery] = useState('');

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const leaderboardDataToUse = activeTab === 'Public' ? publicLeaderboardData : privateLeaderboardData;

  const filteredAndSortedData = leaderboardDataToUse
    .filter(entry => 
      entry.team.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

  // Icon component for solution button
  const DocumentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
      <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
    </svg>
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Leaderboard</h1>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 border border-gray-300 rounded-full font-medium flex items-center text-gray-700 text-sm">
            <Download size={14} className="mr-1" />
            Download
          </button>
          <button className="px-3 py-1.5 border border-gray-300 rounded-full font-medium flex items-center text-gray-700 text-sm">
            <RefreshCw size={14} className="mr-1" />
            Refresh
          </button>
        </div>
      </div>

      {/* Search box */}
      <div className="relative mb-6">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
          <Search size={20} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search leaderboard"
            className="w-full bg-transparent border-none focus:outline-none text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="border-l border-gray-300 pl-3 flex items-center">
            <span className="text-gray-700 font-medium">Filters</span>
          </div>
        </div>
      </div>

      {/* Competition Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Predict Podcast Listening Time</h2>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-4">
        <div className="flex">
          <button 
            className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'Public' ? 'text-gray-700 border-gray-900' : 'text-gray-500 border-transparent'}`}
            onClick={() => setActiveTab('Public')}
          >
            Public
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'Private' ? 'text-gray-700 border-gray-900' : 'text-gray-500 border-transparent'}`}
            onClick={() => setActiveTab('Private')}
          >
            Private
          </button>
        </div>
      </div>

      {/* Tab-specific Info Box */}
      {activeTab === 'Public' ? (
        <p className="text-sm text-gray-600 mb-6">
          This leaderboard is calculated with approximately 20% of the test data. 
          The final results will be based on the other 80%,<br></br> so the final standings may be different.
        </p>
      ) : (
        <p className="text-sm text-gray-600 mb-6">
          The private leaderboard is calculated with approximately 80% of the test data.<br></br>
          This competition has completed. This leaderboard reflects the final standings.
        </p>
      )}

      {/* Leaderboard Content */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th 
                className="text-left px-4 py-3 text-xs text-gray-500 cursor-pointer"
                onClick={() => handleSort('rank')}
              >
                <div className="flex items-center">
                  #
                  {sortConfig.key === 'rank' && (
                    sortConfig.direction === 'asc' ? 
                    <ChevronUp className="w-3 h-3 ml-1" /> : 
                    <ChevronDown className="w-3 h-3 ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="text-left px-4 py-3 text-xs text-gray-500 cursor-pointer"
                onClick={() => handleSort('team')}
              >
                <div className="flex items-center">
                  Team
                  {sortConfig.key === 'team' && (
                    sortConfig.direction === 'asc' ? 
                    <ChevronUp className="w-3 h-3 ml-1" /> : 
                    <ChevronDown className="w-3 h-3 ml-1" />
                  )}
                </div>
              </th>
              <th className="text-left px-4 py-3 text-xs text-gray-500">Members</th>
              <th 
                className="text-right px-4 py-3 text-xs text-gray-500 cursor-pointer"
                onClick={() => handleSort('score')}
              >
                <div className="flex items-center justify-end">
                  Score
                  {sortConfig.key === 'score' && (
                    sortConfig.direction === 'asc' ? 
                    <ChevronUp className="w-3 h-3 ml-1" /> : 
                    <ChevronDown className="w-3 h-3 ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="text-right px-4 py-3 text-xs text-gray-500 cursor-pointer"
                onClick={() => handleSort('entries')}
              >
                <div className="flex items-center justify-end">
                  Entries
                  {sortConfig.key === 'entries' && (
                    sortConfig.direction === 'asc' ? 
                    <ChevronUp className="w-3 h-3 ml-1" /> : 
                    <ChevronDown className="w-3 h-3 ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="text-right px-4 py-3 text-xs text-gray-500 cursor-pointer"
                onClick={() => handleSort('last')}
              >
                <div className="flex items-center justify-end">
                  Last
                  {sortConfig.key === 'last' && (
                    sortConfig.direction === 'asc' ? 
                    <ChevronUp className="w-3 h-3 ml-1" /> : 
                    <ChevronDown className="w-3 h-3 ml-1" />
                  )}
                </div>
              </th>
              {activeTab === 'Public' && (
                <th className="text-right px-4 py-3 text-xs text-gray-500">Join</th>
              )}
              {activeTab === 'Private' && (
                <th className="text-right px-4 py-3 text-xs text-gray-500">Solution</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.length > 0 ? (
              filteredAndSortedData.map((entry) => (
                <tr key={entry.rank} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium">{entry.rank}</td>
                  <td className="px-4 py-3 text-sm">{entry.team}</td>
                  <td className="px-4 py-3">
                    <AvatarImage url={entry.avatarUrl} title={entry.team} />
                  </td>
                  <td className="px-4 py-3 text-sm text-right font-medium">
                    {entry.score.toFixed(activeTab === 'Public' ? 5 : 5)}
                  </td>
                  <td className="px-4 py-3 text-sm text-right">{entry.entries}</td>
                  <td className="px-4 py-3 text-sm text-right">{entry.last}</td>
                  {activeTab === 'Public' && (
                    <td className="px-4 py-3 text-sm text-right">
                      {entry.rank <= 3 ? null : (
                        <button className="text-blue-600 hover:underline">Join</button>
                      )}
                    </td>
                  )}
                  {activeTab === 'Private' && (
                    <td className="px-4 py-3 text-sm text-right">
                      <button className="text-blue-600">
                        <DocumentIcon />
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-6 text-center text-gray-500">
                  No teams found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {filteredAndSortedData.length > 0 && (
        <div className="mt-4 text-sm text-gray-500 text-right">
          Showing {filteredAndSortedData.length} of {leaderboardDataToUse.length} teams
        </div>
      )}
    </div>
  );
};

export default Leaderboard;