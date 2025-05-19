import React, { useState, createContext, useContext, forwardRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

// Collapsible context to share state
const CollapsibleContext = createContext({ open: false, toggle: () => {} });

// Wrapper component
const Collapsible = ({ open, onOpenChange, children, className = '' }) => {
  const toggle = () => onOpenChange(!open);
  return (
    <div className={className}>
      <CollapsibleContext.Provider value={{ open, toggle }}>
        {children}
      </CollapsibleContext.Provider>
    </div>
  );
};
Collapsible.displayName = 'Collapsible';

// Content component, only renders when open
const CollapsibleContent = forwardRef(({ children, className = '' }, ref) => {
  const { open } = useContext(CollapsibleContext);
  if (!open) return null;
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});
CollapsibleContent.displayName = 'CollapsibleContent';

// Trigger component, toggles open state
const CollapsibleTrigger = forwardRef(({ children, className = '', ...props }, ref) => {
  const { toggle } = useContext(CollapsibleContext);
  return (
    <button
      ref={ref}
      className={className}
      onClick={toggle}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
});
CollapsibleTrigger.displayName = 'CollapsibleTrigger';

// Helper for feature list items
const FeatureItem = ({ icon, children }) => (
  <div className="flex items-center gap-3 mt-3">
    <div className="text-gray-500">{icon}</div>
    <div className="text-gray-700">{children}</div>
  </div>
);

const UserTypesSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Who's on Kaggle?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Learners */}
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Learners</h3>
              <p className="text-gray-600">
                Dive into Kaggle courses, competitions & forums.
              </p>
            </div>
            <div>
              <img
                src="\images\learners-illo_light.svg"
                alt="Learners"
                className="w-24 h-24 object-cover"
              />
            </div>
          </div>

          {/* Developers */}
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Developers</h3>
              <p className="text-gray-600">
                Leverage Kaggle's models, notebooks & datasets.
              </p>
            </div>
            <div>
              <img
                src="\images\developers-illo_light.svg"
                alt="Developers"
                className="w-24 h-24 object-cover"
              />
            </div>
          </div>

          {/* Researchers */}
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Researchers</h3>
              <p className="text-gray-600">
                Advance ML with our pre-trained model hub & competitions.
              </p>
            </div>
            <div>
              <img
                src="\images\researchers-illo_light.svg"
                alt="Researchers"
                className="w-24 h-24 object-cover"
              />
            </div>
          </div>
        </div>

        <Collapsible open={expanded} onOpenChange={setExpanded} className="mt-8">
          <CollapsibleContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div>
                <h4 className="text-xs uppercase font-medium text-gray-500 mb-4">KEY FEATURES</h4>
                <FeatureItem icon={<span className="text-xl">☺</span>}>Beginner competitions</FeatureItem>
                <FeatureItem icon={<span className="text-xl">🎓</span>}>Practical courses</FeatureItem>
                <FeatureItem icon={<span className="text-xl">📊</span>}>Public datasets</FeatureItem>
              </div>

              <div>
                <h4 className="text-xs uppercase font-medium text-gray-500 mb-4">KEY FEATURES</h4>
                <FeatureItem icon={<span className="text-xl">🔗</span>}>Open-sourced models</FeatureItem>
                <FeatureItem icon={<span className="text-xl">✏️</span>}>Competition solution write-ups</FeatureItem>
                <FeatureItem icon={<span className="text-xl">⟨⟩</span>}>Public notebooks</FeatureItem>
              </div>

              <div>
                <h4 className="text-xs uppercase font-medium text-gray-500 mb-4">KEY FEATURES</h4>
                <FeatureItem icon={<span className="text-xl">🏆</span>}>ML competition hosting</FeatureItem>
                <FeatureItem icon={<span className="text-xl">⚙️</span>}>Model training datasets</FeatureItem>
                <FeatureItem icon={<span className="text-xl">🔗</span>}>Open-sourced models</FeatureItem>
              </div>
            </div>
          </CollapsibleContent>

          <div className="mt-8 flex justify-start">
            <CollapsibleTrigger className="flex items-center px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none">
              <span className="mr-2">{expanded ? 'See less' : 'See more'}</span>
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </CollapsibleTrigger>
          </div>
        </Collapsible>
      </div>
    </section>
  );
};

export default UserTypesSection;
