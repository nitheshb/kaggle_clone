import React, { useState } from 'react';
import CompetitionNavbarA from '../components/layout/NavbarA';

const KaggleApiDocumentation = () => {
  const [expandedSections, setExpandedSections] = useState({
    competitions: false,
    datasets: false,
    publicApi: false,
    gpu: false,
    tpu: false,
    models: false,
    setup: false,
    organizations: false,
    groups: false,
    packages: false,
    notebooks: false
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  return (
     <div className="flex flex-col min-h-screen bg-white">
         
         <CompetitionNavbarA visible={true} />
    
<div className="flex flex-1 max-w-7xl mx-auto w-full px-6 pt-28 relative"></div>
      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">How to Use Kaggle</h1>
        
        <hr className="my-8 border-gray-200" />
        
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">NoteBooks</h2>
          <p className="text-lg text-gray-600">Create Datasets, Notebooks, and connect with Kaggle</p>
        </section>
        
        <hr className="my-8 border-gray-200" />
        
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Notebooks</h2>
          
          <p className="mb-4 text-gray-700">
       There are multiple different types of Notebooks on Kaggle.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Notebooks</h3>
          
          <p className="mb-4 text-gray-700">
           The most common type is Jupyter notebooks (usually just “notebooks”). Jupyter notebooks consist of a sequence of cells, where each cell is formatted in either Markdown (for writing text) or in a programming language of your choice (for writing code). To start a notebook, click on Create  New Notebook. This will open the Notebooks editing interface.

Notebooks may be written in either R or Python. The language can be changed under the File  Language menu.
          </p>
          
        
          
          <p className="mb-4 text-gray-700">
            Notebooks may be written in either R or Python. The language can be changed under the File  Language menu.
          </p>
          
        
          
          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Script</h3>
          
          <p className="mb-4 text-gray-700">
          It's also possible to create a script. Scripts are files that execute everything as code sequentially. To start a script, create a new notebook, and then change the type to Script under File  Editor Type.

Also under the File menu, you can select what type of script you would like to execute. You may write scripts in R or in Python.

You can also execute selected lines of code by highlighting the code in the editor interface and clicking the “Run” button or hitting shift-enter. Any results will be printed to the console.


          </p>
        </section>
        
        <hr className="my-8 border-gray-200" />
        
       

        
      </main>
    </div>
  );
};

export default KaggleApiDocumentation;