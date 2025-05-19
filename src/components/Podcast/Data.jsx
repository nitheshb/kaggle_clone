// import React from 'react';

// function Data() {
//   return (
//     <div className="text-gray-800">
//       <h1 className="text-2xl font-bold mb-4">Dataset Description</h1>
//       <p className="mb-6">
//         The dataset for this competition (both train and test) was generated from a deep learning model trained on the Calories Burnt Prediction<br></br> dataset. Feature distributions are close to, but not exactly the same, as the original. Feel free to use the original dataset as part of this <br></br>competition, both to explore differences as well as to see whether incorporating the original in training improves model performance.
//       </p>

//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="md:w-2/3">
//           <h2 className="text-xl font-bold mb-3">Files</h2>
//           <ul className="list-disc pl-5">
//             <li className="mb-1"><strong>train.csv</strong> - the training dataset; Calories is the continuous target</li>
//             <li className="mb-1"><strong>test.csv</strong> -  the test dataset; your objective is to predict the Listening_Time_minutes for each row</li>
//             <li><strong>sample_submission.csv</strong> - a sample submission file in the correct format.</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Data;

import React from 'react';

export default function Data() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Dataset Description */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Dataset Description</h1>
          
          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              The dataset for this competition (both train and test) was generated from a deep learning model
              trained on the <span className="font-medium underline">Podcast Listening Time Prediction</span> dataset. 
              Feature distributions are close to, but not exactly the same, as the original. Feel free to use the 
              original dataset as part of this competition, both to explore differences as well as to see whether 
              incorporating the original in training improves model performance.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Files</h2>
            <ul className="list-disc pl-4 space-y-4">
              <li className="text-gray-700">
                <span className="font-bold">train.csv</span> - the training dataset; <code className="bg-gray-100 px-1 py-0.5 rounded">Listening_Time_minutes</code> is the target
              </li>
              <li className="text-gray-700">
                <span className="font-bold">test.csv</span> - the test dataset; your objective is to predict the <code className="bg-gray-100 px-1 py-0.5 rounded">Listening_Time_minutes</code> for each row
              </li>
              <li className="text-gray-700">
                <span className="font-bold">sample_submission.csv</span> - a sample submission file in the correct format.
              </li>
            </ul>
          </div>
        </div>

        {/* Right side - Metadata */}
        <div className="md:w-70/2 bg-white-50 p-10 rounded-lg">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Files</h3>
            <p className="text-gray-700">3 files</p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Size</h3>
            <p className="text-gray-700">94.81 MB</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Type</h3>
            <p className="text-gray-700">CSV</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">License</h3>
            <p className="text-gray-700">
              <span className="underline">Apache 2.0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}