
import React from 'react';
import { cn } from '@/lib/utils';

interface CompetitionCardProps {
  title: string;
  prize: string;
  type: string;
  description: string;
  image?: string;
  className?: string;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  title,
  prize,
  type,
  description,
  image,
  className
}) => {
  return (
    <div className={cn("bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02]", className)}>
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            
            <div className="text-sm text-gray-500 mb-3">{prize} · {type}</div>
            
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          
          {image && (
            <div className="ml-4 flex-shrink-0">
              <img src={image} alt={title} className="w-16 h-16 object-cover rounded-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
