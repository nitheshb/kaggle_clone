import { BookOpen, Code } from 'lucide-react';

const lessons = [
  { id: 1, title: 'Hello, Seaborn', description: 'Your first introduction to coding for data visualization' },
  { id: 2, title: 'Line Charts', description: 'Visualize trends over time' },
  { id: 3, title: 'Bar Charts and Heatmaps', description: 'Use color or length to compare categories in a dataset' },
  { id: 4, title: 'Scatter Plots', description: 'Leverage the coordinate plane to explore relationships between variables' },
  { id: 5, title: 'Distributions', description: 'Create histograms and density plots' },
  { id: 6, title: 'Choosing Plot Types and Custom Styles', description: 'Customize your charts and make them look snazzy' },
  { id: 7, title: 'Final Project', description: 'Practice for real-world application' },
  { id: 8, title: 'Creating Your Own Notebooks', description: 'How to put your new skills to use for your next personal or work project' },
];

const LessonItem = ({ number, title, description }) => (
  <tr className="border-b border-gray-200 hover:bg-gray-50">
    {/* Lessons column */}
    <td className="py-4 px-3 align-top w-[60%]">
      <div className="flex items-start space-x-4">
        <div className="text-xl font-bold text-gray-900 w-8 flex-shrink-0">{number}</div>
        <div>
          <h3 className="text-[17px] font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-[0.8rem] text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">{description}</p>
        </div>
      </div>
    </td>

    {/* Tutorial column */}
    <td className="py-3 px-0 text-center w-[10%]">
      <button
        className="p-1 border-2 border-gray-300 rounded-full text-gray-900 transition-colors mx-auto"
        title="Download"
        style={{ width: '28px', height: '28px', margin: '0 auto' }}
      >
        <BookOpen className="h-4 w-4 mx-auto" />
      </button>
    </td>

    {/* Exercise column */}
    <td className="py-3 px-0 text-center w-[10%]">
      <button
        className="p-1 border-2 border-gray-300 rounded-full text-gray-900 transition-colors mx-auto"
        title="Code"
        style={{ width: '28px', height: '28px', margin: '0 auto' }}
      >
        <Code className="h-4 w-4 mx-auto" />
      </button>
    </td>
  </tr>
);

const LessonsList = () => {
  return (
    <div>
      <table
        className="min-w-full border-collapse table-fixed"
        style={{ borderSpacing: 0, tableLayout: 'fixed' }}
      >
        <thead>
          <tr>
            <th className="text-left text-gray-800 text-2xl font-bold py-3 px-3 w-[60%]">
              Lessons
            </th>
            <th className="text-center text-gray-800 font-semibold text-lg py-3 px-0 w-[10%]">
              Tutorial
            </th>
            <th className="text-center text-gray-800 font-semibold text-lg py-3 px-0 w-[10%]">
              Exercise
            </th>
            
          </tr>
        </thead>

        <tbody>
          {lessons.map((lesson) => (
            <LessonItem
              key={lesson.id}
              number={lesson.id}
              title={lesson.title}
              description={lesson.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LessonsList;
