// import React from 'react';

// function Data() {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Data</h2>
//       <p className="text-gray-700">Here is the data you will need to work with. [Provide dataset details here]</p>
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
       Building a 3-D model of a scene given an unstructured collection of images taken around it is a longstanding problem in computer vision research.<br></br> Your challenge in this competition is to generate 3-D reconstructions from image sets showing different types of scenes and accurately pose those images. <br></br>This year, we’re challenging you to determine how images should be grouped together or discarded, in addition to reconstructing 3D scenes.<br></br> 

This competition uses a hidden test.When your submitted notebook is scored, the actual test data (including a sample submission)<br></br>  will be made available to your notebook. Expect to find roughly 1,300 images in the hidden test set.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h2 className="text-xl font-bold mb-3">MetaData</h2>
          {/* <ul className="list-disc pl-5">
            <li className="mb-1"><strong>train.csv</strong> - the training dataset; Calories is the continuous target</li>
            <li className="mb-1"><strong>test.csv</strong> - the test dataset; your objective is to predict the Calories for each row</li>
            <li><strong>sample_submission.csv</strong> - a sample submission file in the correct format.</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Data;