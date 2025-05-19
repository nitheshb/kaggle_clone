
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const ModelCard = ({ title, organization, logo, description}) => {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-base font-bold text-gray-800">{title}</h3>
          <img 
            src = {logo}
            alt={organization} 
            className="w-11 h-11"
             onError={(e) => { e.target.src = "https://storage.googleapis.com/kaggle-organizations/kaggle/thumbnail.png"; }}
          />
        </div>
        
        <div className="mt-2 text-xs text-gray-600">
          {organization}
        </div>
        
        <p className="mt-4 text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

const ModelsSection = () => {
  const models = [
    {
      title: "Gemma",
      organization: "Google",
      logo: "/images/modell.png",
      description: "Gemma is a family of lightweight, open models built from the research and technology used to create the Gemini models."
    },
    {
      title: "Gemma",
      organization: "Keras",
      logo: "/images/thumbnail.png_r=601",
      description: "Keras implementation of the Gemma model. This Keras 3 implementation works with TensorFlow, JAX, and PyTorch."
    },
    {
      title: "DeepSeek R1",
      organization: "DeepSeek",
      logo: "/images/model3.png",
      description: "We introduce our first-generation reasoning models, DeepSeek-R1-Zero (26B) and DeepSeek-R1-Full (21B)."
    },
    {
      title: "Llama 2",
      organization: "Meta",
      logo: "/images/model4.png",
      description: "Llama 2 is a collection of pretrained and fine-tuned generative text models ranging in scale from 7 billion to 70 billion parameters."
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" fill="currentColor" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800">Models</h2>
          </div>
          <Link to="/models" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            View all <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <p className="text-gray-600 mb-8 text-sm">20,900 pre-trained, ready-to-deploy ML models.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <ModelCard key={index} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
