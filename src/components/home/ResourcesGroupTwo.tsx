import React from 'react';
import CompetitionCard from '../cards/CompetitionCard';
import CourseCard from '../cards/CourseCard';
import { ArrowRight } from 'lucide-react';

const SectionHeader = ({ title, description, icon }) => (
  <div className="flex justify-between items-center mb-6">
    <div className="flex items-center">
      {icon && <img src={icon} alt="" className="w-6 h-6 mr-3" />}
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
      <span className="mr-1">View all</span>
      <ArrowRight size={18} />
    </a>
  </div>
);

const ResourcesGroupTwo: React.FC = () => {
  return (
    <>
      {/* CompetitionsSection */}
      <div className="mb-16">
        <SectionHeader 
          title="Competitions" 
          description="Build your skills in our competitions..."
          icon="/lovable-uploads/089ab4b0-77be-4ff7-b2cd-1c03c8aa2dc4.png"
        />
        <p className="text-gray-600 mb-8">
          Build your skills in our competitions...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CompetitionCard items */}
        </div>
      </div>

      {/* SolutionWriteupsSection */}
      <div className="mb-16">
        <SectionHeader 
          title="Solution write-ups" 
          description="Learn cutting edge ML techniques..."
          icon="/lovable-uploads/089ab4b0-77be-4ff7-b2cd-1c03c8aa2dc4.png"
        />
        <p className="text-gray-600 mb-8">Learn cutting edge ML techniques...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Solution write-up cards */}
        </div>
      </div>

      {/* CoursesSection */}
      <div className="mb-16">
        <SectionHeader 
          title="Courses" 
          description="Earn a signed certificate and learn new techniques."
          icon="/lovable-uploads/089ab4b0-77be-4ff7-b2cd-1c03c8aa2dc4.png"
        />
        <p className="text-gray-600 mb-8">Earn a signed certificate...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CourseCard items */}
        </div>
      </div>
    </>
  );
};

export default ResourcesGroupTwo;
