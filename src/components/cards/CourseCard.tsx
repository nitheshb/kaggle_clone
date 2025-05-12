
import React from 'react';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  title: string;
  duration: string;
  description: string;
  icon: string;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  duration,
  description,
  icon,
  className
}) => {
  return (
    <div className={cn("bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02]", className)}>
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            
            <div className="text-gray-600 mb-3">{duration}</div>
            
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          
          <div className="ml-4 flex-shrink-0">
            <img src={icon} alt={title} className="w-10 h-10 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
