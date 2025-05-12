
import React from 'react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  title: string;
  description?: string;
  usability?: number;
  size?: string;
  details?: string;
  image?: string;
  className?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  usability,
  size,
  details,
  image,
  className
}) => {
  return (
    <div className={cn("bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02]", className)}>
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            
            {(usability || size) && (
              <div className="flex items-center mb-3 space-x-2">
                {usability && (
                  <span className="text-gray-700">Usability {usability}</span>
                )}
                {size && (
                  <>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-700">{size}</span>
                  </>
                )}
              </div>
            )}
            
            {description && (
              <p className="text-gray-600">{description}</p>
            )}
            
            {details && (
              <p className="text-sm text-gray-500 mt-2">{details}</p>
            )}
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

export default ResourceCard;
