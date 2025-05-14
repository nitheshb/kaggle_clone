import React from 'react';

function Overview() {
  return (
    <div className="text-left">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
      <p className="text-gray-700 mb-4">
        <span className="font-bold">Welcome to the 2025 Kaggle Playground Series!</span> We plan to continue in the spirit of previous playgrounds, providing<br></br> interesting and approachable datasets for our community to practice their machine learning skills, and anticipate a <br></br>competition each month.
      </p>
      <p className="text-gray-700">
        <span className="font-bold">Your Goal:</span> Your goal is to predict how many calories were burned during a workout.
      </p>
    </div>
  );
}

export default Overview;