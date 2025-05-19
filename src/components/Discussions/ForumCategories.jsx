
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { UserAvatar } from './UserComponents';
import { useNavigate } from 'react-router-dom';

const ForumCategories = ({ categories }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Navigate to the general forum page with the category title as a state property
    navigate('/forums/general', { 
      state: { 
        categoryTitle: category.title,
        categoryDescription: category.description 
      } 
    });
  };

  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-700" />
        <h2 className="text-xl sm:text-xl font-bold text-gray-900">Forums</h2>
      </div>

      {/* Forum Categories */}
      <div className="space-y-4">
        {categories.map(category => (
          <div 
            key={category.id} 
            className="border-b border-gray-200 pb-4 cursor-pointer hover:bg-gray-50 transition-colors rounded-md p-2"
            onClick={() => handleCategoryClick(category)}
          >
            <div className="flex flex-col sm:flex-row">
              {/* Left - Icon */}
              <div className="mr-4 mb-3 sm:mb-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={category.iconSrc} alt="" width="48" height="48" />
                </div>
              </div>

              {/* Middle - Title and Description */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-700 mt-1">{category.description}</p>
                <div className="mt-1 text-xs text-gray-600 flex items-center">
                  last <span className="text-blue-600 ml-1">post</span> 
                  <span className="ml-1">{category.lastPost.time} by {category.lastPost.by}</span>
                </div>
              </div>

              {/* Right - Recent Topics */}
              <div className="ml-auto flex flex-col justify-end">
                <div className="flex justify-end mb-1">
                  {category.recentTopics.map((user, index) => (
                    <div key={index} className={index > 0 ? "-ml-1" : ""}>
                      <UserAvatar username={user} />
                    </div>
                  ))}
                </div>
                <div className="text-xs text-gray-600">
                  Recent topics by {category.recentTopics.join(', ')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumCategories;