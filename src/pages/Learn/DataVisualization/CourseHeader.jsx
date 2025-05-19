import { LineChart } from 'lucide-react';

const CourseHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center pl-6">
  <div className="max-w-md">
    <h1 className="text-4xl font-bold text-gray-900">Data Visualization</h1>
    <p className="mt-4 text-gray-700 text-[16px]">
      Make great data visualizations. A great way to see the power of coding!
    </p>
    
    <div className="mt-6 flex items-center">
      <button className="bg-gray-900 hover:bg-black text-white px-6 py-1 rounded-full font-medium transition-colors">
        Begin Course
      </button>
      <span className="ml-6 text-gray-700">4 hours to go</span>
    </div>
  </div>
  
  <div className="mt-6 md:mt-0 flex justify-start">
    <img
      src="/images/data-visualization.svg"
      alt="Data Visualization"
      className="w-32 h-32 object-contain -ml-6"
    />
  </div>
</div>

  );
};

export default CourseHeader;