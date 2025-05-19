import React from 'react';
import {
  Search,
  Bell,
  Plus,
  MoreHorizontal,
  ChevronUp,
  ChevronDown,
  ListFilter,
  Pin
} from 'lucide-react';

// Data for user profile images - using placeholder images since external URLs aren't supported
const userImages = {
  'Alexis Cook': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/2603295-kg.jpg',
  'Harshavardan98': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Alex Yim': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Mohamed Athis': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Imran KhanJ': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Minjeong': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Simwong615': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'NAKALEMBE Sarah': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Samane Najarian': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Zakaria Abid': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Nkosinathi Shekwa': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Konner Donté Watson': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Ana Luiza Morais': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Eliam P.': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Ostapovych Vsevolod': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Joakim Arvidsson': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/11589140-kg.jpg',
  'Dishan Bhandari': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Yuzhou Zhu': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Manu Singhal': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png'

};


// Color mapping for each user
const userColors = {
  'Alexis Cook': 'rgb(245, 158, 11)', // Amber
  'Harshavardan98': 'rgb(14, 165, 233)', // Light Blue
  'Alex Yim': 'rgb(20, 184, 166)', // Teal
  'Mohamed Athis': 'rgb(239, 68, 68)', // Red
  'Imran KhanJ': 'rgb(139, 92, 246)', // Purple
  'Minjeong': 'rgb(236, 72, 153)', // Pink
  'Simwong615': 'rgb(16, 185, 129)', // Green
  'NAKALEMBLE Sarah': 'rgb(59, 130, 246)', // Blue
  'Samane Najarian': 'rgb(217, 70, 239)', // Purple
  'Zakaria Abid': 'rgb(234, 179, 8)',        // Yellow
  'Nkosinathi Shekwa': 'rgb(34, 197, 94)',   // Emerald

  // New Users
  'Konner Donté Watson': 'rgb(250, 204, 21)',   // Yellow
  'Ana Luiza Morais': 'rgb(244, 114, 182)',     // Rose
  'Eliam P.': 'rgb(129, 140, 248)',             // Indigo
  'Ostapovych Vsevolod': 'rgb(96, 165, 250)',   // Sky Blue
  'Joakim Arvidsson': 'rgb(251, 191, 36)',      // Amber
  'Dishan Bhandari': 'rgb(74, 222, 128)',       // Green
  'Yuzhou Zhu': 'rgb(191, 219, 254)',           // Blue-100
  'Manu Singhal': 'rgb(252, 165, 165)'          // Light Red
};

// Function to get color for a user
const getUserColor = (username) => {
  if (userColors[username]) {
    return userColors[username];
  }

  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }

  const r = (hash & 0xFF) % 200 + 55;
  const g = ((hash >> 8) & 0xFF) % 200 + 55;
  const b = ((hash >> 16) & 0xFF) % 200 + 55;

  return `rgb(${r}, ${g}, ${b})`;
};

// User Avatar component with pin icon support and colored progress ring
const UserAvatar = ({ username, progress = 0, isPinned = false, size = "sm" }) => {
  const imageUrl = userImages[username] || '/api/placeholder/32/32';
  const progressColor = getUserColor(username);

  const config = {
    sm: {
      wrapperClass: "w-8 h-8",
      svgSize: 32,
      circleRadius: 14,
      strokeWidth: 2,
      imageSize: "w-6 h-6",
      pinSize: "w-3 h-3"
    },
    md: {
      wrapperClass: "w-10 h-10",
      svgSize: 40,
      circleRadius: 18,
      strokeWidth: 2,
      imageSize: "w-8 h-8",
      pinSize: "w-4 h-4"
    },
    lg: {
      wrapperClass: "w-12 h-12",
      svgSize: 48,
      circleRadius: 22,
      strokeWidth: 3,
      imageSize: "w-10 h-10",
      pinSize: "w-5 h-5"
    }
  };

  const { wrapperClass, svgSize, circleRadius, strokeWidth, imageSize, pinSize } = config[size] || config.sm;
  const circumference = 2 * Math.PI * circleRadius;

  return (
    <div className={`relative flex-shrink-0 ${wrapperClass}`}>
      <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`} className="absolute top-0 left-0">
        <circle 
          r={circleRadius} 
          cx={svgSize/2} 
          cy={svgSize/2} 
          fill="none" 
          strokeWidth={strokeWidth} 
          className="stroke-gray-200"
        />
        {progress > 0 && (
          <circle
            r={circleRadius}
            cx={svgSize/2}
            cy={svgSize/2}
            fill="none"
            strokeWidth={strokeWidth}
            stroke={progressColor}
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress / 100)}
            transform={`rotate(-90 ${svgSize/2} ${svgSize/2})`}
            strokeLinecap="round"
          />
        )}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={`Avatar for ${username}`}
          className={`${imageSize} rounded-full object-cover`}
          onError={(e) => {
    e.target.onerror = null;
    e.target.src = 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png';
  }}
        />
      </div>
      {isPinned && (
        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 border border-gray-200">
          <Pin className={`${pinSize} text-gray-700`} />
        </div>
      )}
    </div>
  );
};

// Mock data for discussions
const discussions = [
  {
    id: 1,
    isPinned: true,
    title: "Welcome to the Data Visualization course discussion!",
    author: {
      name: "Alexis Cook",
      progress: 75,
      isInstructor: true
    },
    postedAt: "4y ago",
    votes: 125,
    commentsCount: 0
  },
  {
    id: 2,
    isPinned: false,
    title: "Unable to submit the Final project",
    author: {
      name: "Harshavardan98",
      progress: 30
    },
    postedAt: "13d ago",
    votes: 0,
    commentsCount: 0
  },
  {
    id: 3,
    isPinned: false,
    title: "This tutorial is very smooth~",
    author: {
      name: "Alex Yim",
      progress: 90
    },
    lastComment: {
      author: "Mohamed Athis",
      progress: 45,
      postedAt: "18d ago"
    },
    votes: 0,
    commentsCount: 1
  },
  {
    id: 4,
    isPinned: false,
    title: "incomplete issue",
    author: {
      name: "Imran KhanJ",
      progress: 60
    },
    lastComment: {
      author: "Minjeong",
      progress: 85,
      postedAt: "2h ago"
    },
    votes: 1,
    commentsCount: 1
  },
  {
    id: 5,
    isPinned: false,
    title: "Error shown in Exercise: Final Project",
    author: {
      name: "Simwong615",
      progress: 40
    },
    lastComment: {
      author: "Zakaria Abid",
      progress: 65,
      postedAt: "23d ago"
    },
    votes: 0,
    commentsCount: 4
  },
  {
    id: 6,
    isPinned: false,
    title: "final project error",
    author: {
      name: "NAKALEMBE Sarah",
      progress: 55
    },
    lastComment: {
      author: "Nkosinathi Shekwa",
      progress: 70,
      postedAt: "1mo ago"
    },
    votes: 2,
    commentsCount: 3
  },
  {
    id: 7,
    isPinned: false,
    title: "Certificate",
    author: {
      name: "Samane Najarian",
      progress: 100
    },
    lastComment: {
      author: "Samane Najarian",
      progress: 100,
      postedAt: "4mo ago"
    },
    votes: 4,
    commentsCount: 4
  },
  {
  id: 8,
  isPinned: false,
  title: "Exercise: Final Project error",
  author: {
    name: "Konner Donté Watson",
    progress: 60
  },
  lastComment: {
    author: "Humphrey Ogur",
    progress: 40,
    postedAt: "5mo ago"
  },
  votes: 0,
  commentsCount: 2
},
{
  id: 9,
  isPinned: false,
  title: "Error in Step 4: Visualize the data",
  author: {
    name: "Ana Luiza Morais",
    progress: 50
  },
  lastComment: {
    author: "Jeff",
    progress: 30,
    postedAt: "6mo ago"
  },
  votes: 1,
  commentsCount: 1
},
{
  id: 10,
  isPinned: false,
  title: "Scatter Plots Exercise Issue!",
  author: {
    name: "Eliam P.",
    progress: 70
  },
  lastComment: {
    author: "Sodiq Abiodun",
    progress: 60,
    postedAt: "6mo ago"
  },
  votes: 5,
  commentsCount: 2
},
{
  id: 11,
  isPinned: false,
  title: "[Tutorial 8] typo",
  author: {
    name: "Ostapovych Vsevolod",
    progress: 80
  },
  postedAt: "8mo ago",
  votes: 0,
  commentsCount: 0
},
{
  id: 12,
  isPinned: false,
  title: "📊 Visualization Tutorial Notebook 📈",
  author: {
    name: "Joakim Arvidsson",
    progress: 100
  },
  lastComment: {
    author: "Joakim Arvidsson",
    progress: 100,
    postedAt: "2mo ago"
  },
  votes: 15,
  commentsCount: 8
},
{
  id: 13,
  isPinned: false,
  title: "Exercise: Final Project(Data visualization)",
  author: {
    name: "Dishan Bhandari",
    progress: 65
  },
  lastComment: {
    author: "Gaurang Srivastava",
    progress: 55,
    postedAt: "8mo ago"
  },
  votes: 2,
  commentsCount: 2
},
{
  id: 14,
  isPinned: false,
  title: "HELP: In final project (Exercise): Step 4",
  author: {
    name: "Yuzhou Zhu",
    progress: 70
  },
  lastComment: {
    author: "NITIN ASHOK PATIL",
    progress: 60,
    postedAt: "10mo ago"
  },
  votes: 2,
  commentsCount: 3
},
{
  id: 15,
  isPinned: false,
  title: "Stuck on \"Scatter Plots\" Module Step 4a",
  author: {
    name: "Manu Singhal",
    progress: 85
  },
  lastComment: {
    author: "Rodolfo Wenceslau",
    progress: 75,
    postedAt: "10mo ago"
  },
  votes: 1,
  commentsCount: 2
}

];

// VoteButton component for the styled voting UI with rounded corners
const VoteButtons = ({ votes }) => {
  return (
    <div className="flex items-center border rounded-full">
      <button className="p-1 hover:bg-gray-50 border-r rounded-l-full">
        <ChevronUp className="w-4 h-4 text-gray-500 font-bold" />
      </button>
      <span className="px-2 py-0.5 text-sm min-w-[2ch] text-center font-bold">
        {votes ?? 0}
      </span>
      <button className="p-1 hover:bg-gray-50 border-l rounded-r-full">
        <ChevronDown className="w-4 h-4 text-gray-500 font-bold" />
      </button>
    </div>
  );
};

// DiscussionItem component with updated author name styling
const DiscussionItem = ({ discussion }) => {
  return (
    <div className="flex items-start gap-4 px-6 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-200">
      <UserAvatar 
        username={discussion.author.name} 
        progress={discussion.author.progress}
        size="md"
        isPinned={discussion.isPinned}
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900 truncate">{discussion.title}</h4>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="hover:text-gray-900 hover:underline cursor-pointer">
            {discussion.author.name}
            {discussion.author.isInstructor && (
              <span className="ml-1 px-1 py-0.5 bg-blue-100 text-blue-700 text-xs rounded font-normal">
                Instructor
              </span>
            )}
          </span>
          {discussion.lastComment ? (
            <>
              <span>· Last comment <span className="hover:underline cursor-pointer">{discussion.lastComment.postedAt}</span> by <span className="hover:underline cursor-pointer">{discussion.lastComment.author}</span></span>
            </>
          ) : (
            <span>· Posted <span className="hover:underline cursor-pointer">{discussion.postedAt}</span></span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <VoteButtons votes={discussion.votes} />
        <div className="flex items-center gap-3">
          {discussion.commentsCount > 0 && (
            <span className="text-sm text-gray-500 hover:underline cursor-pointer">{discussion.commentsCount} comment{discussion.commentsCount > 1 ? 's' : ''}</span>
          )}
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const KaggleDiscussionForum = () => {
  return (
    <div className="w-full bg-white font-sans">
      <div className="flex justify-between items-center pl-6 pr-6 py-4">
        <h2 className="text-4xl font-bold text-gray-900">Discussion</h2>
        <div className="flex gap-4">
          <button className="px-6 py-1 text-gray-600 hover:bg-gray-50 border border-gray-300 rounded-full font-medium flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Follow
          </button>
          <button className="px-6 py-1 bg-white hover:bg-gray-50 text-gray-600 border border-gray-300 rounded-full font-medium flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Topic
          </button>
        </div>
      </div>

      <div className="relative my-6 px-6">
        <input
          type="text"
          placeholder="Search discussions"
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
        />
        <Search className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-900 w-5 h-5" />
        <button className="absolute right-10 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-gray-700">
          <ListFilter className="w-4 h-4" />
          <span className="text-sm font-bold">Filters</span>
        </button>
      </div>

      <div className="mb-4">
        {/* Tab with narrower highlight and bottom border */}
        <div className="flex items-center border-b border-gray-200">
          <button className="relative text-left pl-6 py-2 font-medium text-black-600">
            All
            <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </div>

      <div>
        <div className="py-2">
          <h3 className="px-6 text-sm text-gray-500 mb-2">Pinned topics</h3>
          {discussions.filter(d => d.isPinned).map(discussion => (
            <DiscussionItem key={discussion.id} discussion={discussion} />
          ))}
        </div>

        <div className="py-2">
          <h3 className="px-6 text-sm text-gray-500 mb-2">All other topics</h3>
          {discussions.filter(d => !d.isPinned).map(discussion => (
            <DiscussionItem key={discussion.id} discussion={discussion} />
          ))}
        </div>
      </div>

      <div className="flex justify-center my-8 gap-2 pb-8">
        {[1, 2, 3, 4, 5, 6].map(page => (
          <button
            key={page}
            className={`w-8 h-8 flex items-center justify-center rounded ${
              page === 1
                ? 'bg-gray-900 text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
        <button className="w-8 h-8 flex items-center justify-center rounded text-gray-500 hover:bg-gray-100">
          →
        </button>
      </div>
    </div>
  );
};

export default KaggleDiscussionForum;