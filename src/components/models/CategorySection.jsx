import React from 'react';
import CategoryCard from './CategoryCard.jsx';
import ModelCard    from './ModelCard.jsx';

export default function CategorySection({ category }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
      <CategoryCard {...category}/>
      {category.items.slice(0,3).map(m => <ModelCard key={m.name} item={m}/>)}
    </div>
  );
}
