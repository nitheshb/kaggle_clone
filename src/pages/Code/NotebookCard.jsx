import React from 'react';
import { EllipsisVertical, ChevronUp } from 'lucide-react';

const medalImages = {
  bronze: 'images/Code/bronzes@1x.png',
  silver: 'images/Code/silvers@1x.png',
  gold: 'images/Code/golds@1x.png',
};

const NotebookCard = ({ notebook }) => {
  const progressPercentage = notebook.progress || Math.floor(Math.random() * 100);

  const getProgressColor = (percentage) => {
    if (percentage < 25) return '#00bfff';
    if (percentage < 50) return '#ff1493';
    if (percentage < 75) return '#00bfff';
    return '#22c55e';
  };

  const progressColor = getProgressColor(progressPercentage);

  // Determine medal image based on author's tier (default no medal image if none)
  const medalSrc = notebook.author?.tier ? medalImages[notebook.author.tier.toLowerCase()] : null;

  return (
    <div className="relative bg-white border border-gray-300 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      {/* Thumbnail */}
      <div className="h-32 bg-gray-100">
        <img 
          src={notebook.thumbnail} 
          alt={notebook.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1.5">
          <h3 className="text-[15px] font-semibold text-gray-900 leading-tight line-clamp-2">
            {notebook.title}
          </h3>
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <EllipsisVertical className="h-4 w-4" />
          </button>
        </div>
        <p className="text-[13px] text-gray-500 mb-1">{notebook.updatedTime}</p>
        <p className="text-[13px] text-gray-600 line-clamp-2 mb-3">{notebook.description}</p>
      </div>

      {/* Divider */}
      <div className="mt-auto border-t border-gray-300 w-full"></div>

      {/* Footer */}
      <div className="p-3 flex justify-between items-center">
        {/* Upvote */}
        <div className="flex items-center">
          <div className="flex border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm">
            <button
              className="flex items-center justify-center px-2 py-1 hover:bg-gray-50 transition-colors"
              style={{ lineHeight: 1 }}
            >
              <ChevronUp className="w-3.5 h-3.5 text-black" strokeWidth={2} />
            </button>
            <div className="w-px bg-gray-300"></div>
            <div
              className="flex items-center justify-center px-2 py-1 text-[15px] font-bold text-black min-w-10"
              style={{ lineHeight: 1 }}
            >
              {notebook.upvotes}
            </div>
          </div>
        </div>

        {/* Medal + Avatar */}
        <div className="flex items-center space-x-2">
          {/* Medal Image (if exists) */}
          {medalSrc && (
            <img
              src={medalSrc}
              alt={`${notebook.author.tier} medal`}
              title={`${notebook.author.tier} medal`}
              className="w-4 h-4 mr-3"
            />
          )}

          {/* Avatar with ring */}
          <div
            className="relative w-6 h-6 rounded-full flex items-center justify-center"
            style={{
              background: `conic-gradient(${progressColor} ${progressPercentage}%, #e5e7eb ${progressPercentage}%)`,
              padding: '2px'
            }}
          >
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-[2px]">
              <img
                src={notebook.author.avatar}
                alt="Author"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotebookCard;
