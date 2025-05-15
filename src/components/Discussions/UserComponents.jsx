import React from 'react';

// Data for user profile images
export const userImages = {
  'AtulGoyal1': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Zahra_Bashirrr': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/25669412-kg.jpg?t=2025-04-07-06-46-00',
  'Piyush Yadav': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Vikas Rajbhar': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Muhammad Muneebullah': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'c-number': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Ravi Ramakrishnan': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/8273630-kg.JPG?t=2024-03-26-14-51-52',
  'Hongyan Zhang': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png',
  'Abhishek': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/18182106-kg.png?t=2024-07-22-18-36-26',
  'Prathamesh Bang': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/11212929-kg.jpg?t=2024-02-21-16-16-18',
  'Nitay L': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/18617578-kg.png?t=2024-01-17-21-25-47',
  'Younus_Mohamed': 'https://storage.googleapis.com/kaggle-avatars/thumbnails/15648748-kg.JPG'
};

// Color mapping for each user
export const userColors = {
  'AtulGoyal1': 'rgb(59, 130, 246)', // Blue
  'Zahra_Bashirrr': 'rgb(16, 185, 129)', // Green
  'Piyush Yadav': 'rgb(236, 72, 153)', // Pink
  'Vikas Rajbhar': 'rgb(245, 158, 11)', // Amber
  'Muhammad Muneebullah': 'rgb(139, 92, 246)', // Purple
  'c-number': 'rgb(239, 68, 68)', // Red
  'Ravi Ramakrishnan': 'rgb(14, 165, 233)', // Light Blue
  'Hongyan Zhang': 'rgb(168, 85, 247)', // Purple
  'Abhishek': 'rgb(249, 115, 22)', // Orange
  'Prathamesh Bang': 'rgb(79, 70, 229)', // Indigo
  'Nitay L': 'rgb(236, 72, 153)', // Pink
  'Younus_Mohamed': 'rgb(20, 184, 166)', // Teal
  'Bartley': 'rgb(251, 191, 36)', // Yellow
  'Wayne_127': 'rgb(124, 58, 237)' // Violet
};

// Function to get color for a user - fallback to random colors if user not found
export const getUserColor = (username) => {
  if (userColors[username]) {
    return userColors[username];
  }

  // Generate a pseudo-random color based on username string
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }

  const r = (hash & 0xFF) % 200 + 55; // Avoid too dark or too light
  const g = ((hash >> 8) & 0xFF) % 200 + 55;
  const b = ((hash >> 16) & 0xFF) % 200 + 55;

  return `rgb(${r}, ${g}, ${b})`;
};

// Helper function to get badge color
export const getBadgeColor = (badge) => {
  switch (badge) {
    case "Silver":
      return {
        textClass: "text-gray-500",
        bgClass: "bg-gray-400",
        colorValue: "rgb(108, 117, 125)"
      };
    case "Bronze":
      return {
        textClass: "text-amber-600",
        bgClass: "bg-amber-500",
        colorValue: "rgb(180, 83, 9)"
      };
    case "Gold":
      return {
        textClass: "text-yellow-500",
        bgClass: "bg-yellow-400",
        colorValue: "rgb(217, 119, 6)"
      };
    default:
      return {
        textClass: "text-gray-400",
        bgClass: "bg-gray-300",
        colorValue: "rgb(107, 114, 128)"
      };
  }
};

// User Avatar component with badge support
export const UserAvatar = ({ username, progress = 0, badge = null }) => {
  const imageUrl = userImages[username] || 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png';
  const progressColor = getUserColor(username);
  const badgeColor = badge ? getBadgeColor(badge) : null;

  return (
    <div className="relative w-6 h-6 flex-shrink-0">
      <svg width="24" height="24" viewBox="0 0 24 24" className="absolute top-0 left-0">
        <circle 
          r="11" 
          cx="12" 
          cy="12" 
          fill="none" 
          strokeWidth="2" 
          className="stroke-gray-200"
        />
        {progress > 0 && (
          <circle
            r="11"
            cx="12"
            cy="12"
            fill="none"
            strokeWidth="2"
            stroke={progressColor}
            strokeDasharray={2 * Math.PI * 11}
            strokeDashoffset={2 * Math.PI * 11 * (1 - progress / 100)}
            transform="rotate(-90 12 12)"
            strokeLinecap="round"
          />
        )}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={`Avatar for ${username}`}
          className="w-4 h-4 rounded-full object-cover"
        />
      </div>
      {badge && (
        <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white" 
             style={{ backgroundColor: badgeColor.colorValue }} />
      )}
    </div>
  );
};

// User Avatar Large component
export const UserAvatarLarge = ({ username, progress = 0 }) => {
  const imageUrl = userImages[username] || 'https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png';
  const progressColor = getUserColor(username);

  return (
    <div className="relative w-12 h-12 flex-shrink-0">
      <svg width="48" height="48" viewBox="0 0 48 48" className="absolute top-0 left-0">
        <circle 
          r="22" 
          cx="24" 
          cy="24" 
          fill="none" 
          strokeWidth="3" 
          className="stroke-gray-200"
        />
        {progress > 0 && (
          <circle
            r="22"
            cx="24"
            cy="24"
            fill="none"
            strokeWidth="3"
            stroke={progressColor}
            strokeDasharray={2 * Math.PI * 22}
            strokeDashoffset={2 * Math.PI * 22 * (1 - progress / 100)}
            transform="rotate(-90 24 24)"
            strokeLinecap="round"
          />
        )}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={`Avatar for ${username}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
};