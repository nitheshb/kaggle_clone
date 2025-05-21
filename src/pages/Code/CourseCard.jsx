// src/pages/Code/CourseCard.jsx
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl hover:shadow-md transition-shadow flex flex-col">
      {/* Image without padding */}
      <div className="flex justify-center">
        <img src={course.icon} alt={course.title} className="w-full h-full object-cover rounded-t-xl" />
      </div>

      {/* Content with padding */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-[16px] font-semibold text-gray-900 mb-1 text-left">{course.title}</h3>
        <p className="text-[13px] text-gray-900 mb-1 text-left leading-relaxed ">{course.description}</p>
        <p className="text-[13px] text-gray-900 text-left mb-1">Estimated time: {course.time}</p>
      </div>

      {/* full width border */}
      <div className="border-t border-gray-300 w-full"></div>

      <p className="text-[14px] text-black text-left p-4 ">Join {course.users}</p>
    </div>
  );
};


export default CourseCard;
