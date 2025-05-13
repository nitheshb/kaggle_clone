
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const CourseCard = ({ title, duration, description, icon, progress }) => {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-base font-bold text-gray-800">{title}</h3>
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        
        <div className="mt-2 text-xs text-gray-600">
          {duration} to complete
        </div>
        
        <p className="mt-4 text-sm text-gray-600">{description}</p>
        
        {progress && (
          <div className="mt-4 relative pt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
              <div 
                style={{ width: `${progress}%` }} 
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
              </div>
            </div>
            <div className="text-right text-gray-500 text-xs mt-1">{progress}%</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const CoursesSection = () => {
  const courses = [
    {
      title: "Intro to Programming",
      duration: "5 hours",
      description: "Get started with Python, if you have no coding experience.",
      icon: "https://storage.googleapis.com/kaggle-learn-images/605370/661477/5a07b3f59c2412afd25478fd209a7749/course-card.png"
    },
    {
      title: "Python",
      duration: "5 hours",
      description: "Learn the most important language for data science.",
      icon: "https://storage.googleapis.com/kaggle-learn-images/194579/427509/5cc42c84d4c071ca1029d105c8138a32/course-card.png",
      progress: 40
    },
    {
      title: "Intro to Machine Learning",
      duration: "3 hours",
      description: "Learn the core ideas in machine learning, and build your first models.",
      icon: "https://storage.googleapis.com/kaggle-learn-images/194580/427510/63f079c75ee0aaf45b5763cd7f07a850/course-card.png",
      progress: 60
    },
    {
      title: "Pandas",
      duration: "4 hours",
      description: "Solve short hands-on challenges to perfect your data manipulation skills.",
      icon: "https://storage.googleapis.com/kaggle-learn-images/194577/427507/47cd4b4acef9c8d794f0f6ea1a1ac6b5/course-card.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" fill="currentColor" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800">Courses</h2>
          </div>
          <Link to="/courses" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            View all <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <p className="text-gray-600 mb-8 text-sm">Earn a signed certificate and learn new techniques in our no cost, hands-on courses.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
