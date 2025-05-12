
import React from 'react';
import { cn } from '@/lib/utils';

interface NotebookCardProps {
  title: string;
  language: string;
  upvotes: number;
  comments: number;
  competition?: string;
  author: {
    name: string;
    avatar: string;
  };
  className?: string;
}

const NotebookCard: React.FC<NotebookCardProps> = ({
  title,
  language,
  upvotes,
  comments,
  competition,
  author,
  className
}) => {
  return (
    <div className={cn("bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02]", className)}>
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0 mr-4">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-yellow-100 border-2 border-yellow-400">
              <img 
                src={author.avatar} 
                alt={author.name}
                className="h-full w-full object-cover" 
              />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 line-clamp-2">{title}</h3>
          </div>
        </div>
        
        <div className="mt-2">
          <div className="text-sm text-gray-600 mb-1">{language}</div>
          <div className="flex items-center text-sm text-gray-500">
            <span>{upvotes} upvotes</span>
            <span className="mx-2">•</span>
            <span>{comments} comments</span>
          </div>
          {competition && (
            <div className="mt-2 text-sm text-gray-500 truncate">
              {competition}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotebookCard;
