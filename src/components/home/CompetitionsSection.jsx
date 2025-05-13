
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const CompetitionCard = ({ title, prize, type, description, logo }) => {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-base font-bold text-gray-800">{title}</h3>
          {logo && <img src="\images\thumb76_76.png" 
          alt={title} className="w-8 h-8" />}
        </div>
        
        <div className="mt-2 text-xs text-gray-600">
          ${prize.toLocaleString()} · {type}
        </div>
        
        <p className="mt-4 text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
    </Card>
  );
};

const CompetitionsSection = () => {
  const competitions = [
    {
      title: "ARC Prize 2025",
      prize: 725000,
      type: "Featured Competition",
      description: "Create an AI capable of novel reasoning",
      logo: "https://storage.googleapis.com/kaggle-competitions/kaggle/33257/logos/thumb76_76.png"
    },
    {
      title: "Stanford RNA 3D Folding",
      prize: 75000,
      type: "Featured Competition",
      description: "Solve RNA structure prediction, one of biology's remaining grand challenges",
      logo: "https://storage.googleapis.com/kaggle-competitions/kaggle/32878/logos/thumb76_76.png"
    },
    {
      title: "BYU - Locating Bacterial Flagellar Motors",
      prize: 65000,
      type: "Research Competition",
      description: "Help locate flagellar motors in three-dimensional reconstructions of bacterial cells",
      logo: "https://storage.googleapis.com/kaggle-competitions/kaggle/40378/logos/thumb76_76.png"
    },
    {
      title: "BirdCLEF+ 2025",
      prize: 50000,
      type: "Research Competition",
      description: "Species identification from audio, focused on birds, amphibians, and insects",
      logo: "\images\competition4.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM19 8c0 1.3-.84 2.4-2 2.82V7h2v1z" fill="currentColor" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800">Competitions</h2>
          </div>
          <Link to="/competitions" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            View all <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <p className="text-gray-600 mb-8 text-sm">Build your skills in our competitions, co-hosted by world-class research organizations & companies.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitions.map((competition, index) => (
            <CompetitionCard key={index} {...competition} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
