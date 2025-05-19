import React from 'react';
import { Link } from 'react-router-dom';
import { MoreVertical } from 'lucide-react';

const CompetitionCard = ({ competition, featured = false }) => {
  const updatedString = competition.title.replace(/ /g, "-").toLowerCase();

  return (
    <Link
      to={`/competitions/${updatedString}`}
      className="h-full flex flex-col overflow-hidden rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-md transition-shadow duration-200 bg-white"
    >
      <div className="relative">
        {/* Main Image */}
        <img
          src={competition.image}
          alt={competition.title}
          className="w-full h-28 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://storage.googleapis.com/kaggle-competitions/kaggle/placeholder.jpg';
          }}
        />

        {/* Overlay Image on top-left */}
        {competition.overlayImage && (
          <img
            src={competition.overlayImage}
            alt="Badge"
            className="absolute bottom-4 left-4 w-10 h-10 rounded-full border border-white shadow-md bg-white"
          />
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        {/* Title with vertical 3 dots icon */}
        <div className="relative mb-2 min-h-[48px]">
          <h3 className="font-medium text-black line-clamp-2 pr-8">
            {competition.title}
          </h3>

          <button
            className="absolute top-0 right-0 p-1 hover:bg-gray-100 rounded"
            aria-label="More options"
            onClick={(e) => {
              e.preventDefault();
              // Add your menu logic here
            }}
          >
            <MoreVertical className="w-5 h-5 text-black" />
          </button>
        </div>

        <p className="text-sm text-gray-700 mb-1 line-clamp-1 min-h-[20px]">
          {competition.description}
        </p>

        <div className="text-sm text-gray-700 mb-1">{competition.category}</div>

        <div className="text-sm text-gray-700 mb-1">{competition.teams} Teams</div>

        <div className="border-b border-gray-300 -mx-4 my-2"></div>

        {featured ? (
          <div className="flex justify-between items-center text-sm mt-auto">
            <div className="flex flex-col">
              <span className="text-black font-bold text-[16px]">{competition.prize}</span>
            </div>
            <div className="text-right">
              <span className="text-gray-500 font-medium">{competition.daysToGo}</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center text-sm mt-auto">
            <div>
              <span className="text-black font-bold text-[16px]">{competition.type} </span>
            </div>
            <div>
              <span className="text-black font-medium text-[12px]">{competition.status}</span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CompetitionCard;
