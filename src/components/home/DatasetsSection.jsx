
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const DatasetCard = ({ title, usability, size, description, icon }) => {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          {icon && <img src="\images\dataset-thumbnail.jpg"
          alt={title} className="w-12 h-12" />}
        </div>
        
        <div className="mt-4 flex items-center text-xs text-gray-500 gap-3">
          <div>Usability {usability}</div>
          <div>{size}</div>
        </div>
        
        <p className="mt-4 text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const DatasetsSection = () => {
  const datasets = [
    {
      title: "Bitcoin Historical Data",
      usability: "10.0",
      size: "98 MB",
      description: "Bitcoin data at 1-min intervals from select exchanges, Jan 2012 to Present",
      icon: "\images\dataset-thumbnail.jpg"
    },
    {
      title: "Fruits-360 dataset",
      usability: "8.8",
      size: "4 GB",
      description: "A dataset with 134605 images of 196 fruits, vegetables, nuts and seeds",
      icon: "https://storage.googleapis.com/kaggle-datasets-images/7205/10675/d7897f0078e18c4917a6271697e9a83c/dataset-card.jpg"
    },
    {
      title: "International football results",
      usability: "10.0",
      size: "1 MB",
      description: "An up-to-date dataset of over 47,000 international football results",
      icon: "https://storage.googleapis.com/kaggle-datasets-images/28809/35658/ac02badd635a4388825e2667c442c185/dataset-card.jpeg"
    },
    {
      title: "Formula 1 World Championship",
      usability: "10.0",
      size: "7 MB",
      description: "F1 race data from 1950 to 2024",
      icon: "https://storage.googleapis.com/kaggle-datasets-images/160/330/3cc912e0bafeb3dc499b8f63c27d334e/dataset-card.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm12 10H9v-2h6v2zm0-4H9V9h6v2zm4-4h-4V5h4v2zm0 4h-4V9h4v2zm0 4h-4v-2h4v2zm-8-8H9V5h2v2zm-4 0H5V5h2v2zm-2 4h2v2H5V9zm0 4h2v2H5v-2z" fill="currentColor" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800">Datasets</h2>
          </div>
          <Link to="/datasets" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            View all <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <p className="text-gray-600 mb-8 text-sm">476K high-quality public datasets. Everything from avocado prices to video game sales.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {datasets.map((dataset, index) => (
            <DatasetCard key={index} {...dataset} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatasetsSection;
