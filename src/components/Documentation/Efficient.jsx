import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function KaggleInterface() {
  const [expandedSections, setExpandedSections] = useState({
    competitions: true,
    typesOfCompetitions: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <main className="flex-1 p-8 mx-auto w-full max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold mb-8">How to Use Kaggle</h1>

          <div className="mb-8">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200">
              <h2 className="text-2xl font-semibold">Competitions</h2>
              <button
                onClick={() => toggleSection('competitions')}
                className="flex items-center text-gray-500"
              >
                <ChevronDown className={`h-5 w-5 transform ${expandedSections.competitions ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {expandedSections.competitions && (
              <div className="mt-4">
                <p className="text-gray-700 mb-4">Find challenges for every interest level</p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Types of Competitions</h3>
                  <p className="text-gray-700 mb-4">
                    Kaggle Competitions are designed to provide challenges for competitors at all different stages of their machine learning careers. As a result, they are very diverse, with a range of broad types.
                  </p>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Featured</h4>
                    <p className="text-gray-700 mb-4">
                      Featured competitions are the types of competitions that Kaggle is probably best known for. These are full-scale machine learning challenges which pose difficult, generally commercially-purposed prediction problems. For example, past featured competitions have included:
                    </p>
                    
                    <ul className="list-disc pl-6 space-y-4 text-gray-700">
                      <li>
                        <strong>Allstate Claim Prediction Challenge</strong> - Use customers' shopping history to predict which insurance policy they purchase
                      </li>
                      <li>
                        <strong>Jigsaw Toxic Comment Classification Challenge</strong> - Predict the existence and type of toxic comments on Wikipedia
                      </li>
                      <li>
                        <strong>Zillow Prize</strong> - Build a machine learning algorithm that can challenge Zestimates, the Zillow real estate price estimation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}