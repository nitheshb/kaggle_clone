const CourseNavigation = ({ activeTab, onTabChange }) => {
  const tabs = ['Courses', 'Discussions'];

  return (
    <div className="px-6"> {/* horizontal padding */}
      <div className="flex space-x-8 border-b border-gray-200"> {/* border inside padding */}
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-1  text-lg relative ${
              activeTab === tab
                ? 'text-black border-b-2 border-black'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseNavigation;
