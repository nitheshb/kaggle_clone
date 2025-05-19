import React, { useRef, useState, useEffect } from 'react';

const CourseInfo = () => {
  const nameRef = useRef(null);
  const [imageTop, setImageTop] = useState(0);

  useEffect(() => {
    if (nameRef.current) {
      const rect = nameRef.current.getBoundingClientRect();
      // Calculate top relative to viewport and adjust to center image vertically
      setImageTop(rect.top + rect.height / 2);
    }
    // Update on resize or scroll if needed
    const handleResize = () => {
      if (nameRef.current) {
        const rect = nameRef.current.getBoundingClientRect();
        setImageTop(rect.top + rect.height / 2);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 sticky  relative">
      <div className="pb-3">
        <h3 className="text-[16px] font-semibold text-gray-900 whitespace-nowrap">Hours to earn certificate</h3>
        <p className="mt-0.5 text-gray-600 text-[16px] whitespace-nowrap">4 (estimated)</p>
      </div>

      <div className="py-3">
        <h3 className="text-[16px] font-semibold text-gray-900 whitespace-nowrap">Cost</h3>
        <p className="mt-0.5 text-gray-600 text-[16px] whitespace-nowrap">No cost, like all Kaggle Learn Courses</p>
      </div>

      <div className="pt-3 relative">
        <h3 className="text-[16px] font-semibold text-gray-900 whitespace-nowrap">Instructor</h3>

        <div className="mt-0.5 flex items-center w-full relative">
          {/* Name on the left */}
          <p ref={nameRef} className="text-gray-900 text-[16px] whitespace-nowrap">
            Alexis Cook
          </p>
        </div>
      </div>

      {/* Fixed Image vertically aligned with Alexis Cook text */}
      <img
        src='https://storage.googleapis.com/kaggle-avatars/thumbnails/2603295-kg.jpg'
        alt="Alexis Cook"
        className="w-6 h-6 rounded-full fixed right-4 object-cover z-50"
        style={{
          top: imageTop,
          transform: 'translateY(-50%)',
        }}
      />
    </div>
  );
};

export default CourseInfo;
