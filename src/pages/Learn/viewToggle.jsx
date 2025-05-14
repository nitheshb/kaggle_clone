import React from 'react';
import { List, Grid } from 'lucide-react';

export default function ViewToggle({ view, setView }) {
  return (
    <div className="flex space-x-2 mb-4">
      <button
        onClick={() => setView('list')}
        className={`p-2 rounded ${view === 'list' ? 'bg-gray-200' : ''}`}
      >
        <List className="h-5 w-5" />
      </button>
      <button
        onClick={() => setView('grid')}
        className={`p-2 rounded ${view === 'grid' ? 'bg-gray-200' : ''}`}
      >
        <Grid className="h-5 w-5" />
      </button>
    </div>
  );
}
