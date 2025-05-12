
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Smile, BookOpen, Database, Code, Trophy, Network } from 'lucide-react';

interface UserTypeProps {
  title: string;
  description: string;
  imageSrc: string;
  features?: { icon: React.ReactNode; text: string }[];
}

const UserTypeCard: React.FC<UserTypeProps> = ({ title, description, imageSrc, features }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="flex-shrink-0 ml-4">
          <img src={imageSrc} alt={title} className="w-24 h-24 object-cover rounded-full" />
        </div>
      </div>
      
      {features && features.length > 0 && (
        <div className="mt-8">
          <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold text-left">KEY FEATURES</h4>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-gray-700">{feature.icon}</span>
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const UserTypes: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const learnerFeatures = [
    { icon: <Smile size={20} />, text: "Beginner competitions" },
    { icon: <BookOpen size={20} />, text: "Practical courses" },
    { icon: <Database size={20} />, text: "Public datasets" },
  ];
  
  const developerFeatures = [
    { icon: <Network size={20} />, text: "Open-sourced models" },
    { icon: <Trophy size={20} />, text: "Competition solution write-ups" },
    { icon: <Code size={20} />, text: "Public notebooks" },
  ];
  
  const researcherFeatures = [
    { icon: <Trophy size={20} />, text: "ML competition hosting" },
    { icon: <Database size={20} />, text: "Model training datasets" },
    { icon: <Network size={20} />, text: "Open-sourced models" },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left">Who's on Kaggle?</h2>
        
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <UserTypeCard 
              title="Learners" 
              description="Dive into Kaggle courses, competitions & forums."
              imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&h=150" 
              features={isExpanded ? learnerFeatures : undefined}
            />
            <UserTypeCard 
              title="Developers" 
              description="Leverage Kaggle's models, notebooks & datasets."
              imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=150&h=150" 
              features={isExpanded ? developerFeatures : undefined}
            />
            <UserTypeCard 
              title="Researchers" 
              description="Advance ML with our pre-trained model hub & competitions."
              imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=150&h=150" 
              features={isExpanded ? researcherFeatures : undefined}
            />
          </div>
          
          <CollapsibleContent className="space-y-8">
            {/* Additional expanded content could be added here if needed */}
          </CollapsibleContent>
          
          <div className="flex justify-start mt-6">
            <CollapsibleTrigger className="flex items-center space-x-2 text-gray-700 font-medium border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-50 transition-colors">
              {isExpanded ? <ChevronUp className="h-4 w-4 mr-1" /> : <ChevronDown className="h-4 w-4 mr-1" />}
              <span>{isExpanded ? 'See less' : 'See more'}</span>
            </CollapsibleTrigger>
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default UserTypes;
