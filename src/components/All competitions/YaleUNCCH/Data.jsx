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
//             <li className="mb-1"><strong>test.csv</strong> - the test dataset; your objective is to predict the Calories for each row</li>
//             <li><strong>sample_submission.csv</strong> - a sample submission file in the correct format.</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Data;




import React from 'react';

function Data() {
  return (
    <div className="text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Dataset Description</h1>
      <p className="mb-6">
        The dataset for this competition (both train and test) was generated from a deep learning model trained on the Calories Burnt Prediction dataset. Feature distributions are close to, but not exactly the same, as the original. Feel free to use the original dataset as part of this competition, both to explore differences as well as to see whether incorporating the original in training improves model performance.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h2 className="text-xl font-bold mb-3">Files</h2>
          <ul className="list-disc pl-5">
            <li className="mb-1"><strong>train.csv</strong> - the training dataset; Calories is the continuous target</li>
            <li className="mb-1"><strong>test.csv</strong> - the test dataset; your objective is to predict the Calories for each row</li>
            <li><strong>sample_submission.csv</strong> - a sample submission file in the correct format.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Data;