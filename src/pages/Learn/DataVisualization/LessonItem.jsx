const LessonItem = ({ number, title, description, actions }) => {
  return (
    <div className="border-t border-gray-200 py-6">
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-6 text-2xl font-semibold text-gray-900 w-8">
            {number}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-gray-600">{description}</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          {actions.map((action, index) => (
            <button
              key={index}
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              title={action.tooltip}
            >
              {action.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonItem;