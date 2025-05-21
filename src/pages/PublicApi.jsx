// import React, { useState } from 'react';

// const KaggleApiDocumentation = () => {
//   const [expandedSections, setExpandedSections] = useState({
//     competitions: false,
//     datasets: false,
//     publicApi: false,
//     gpu: false,
//     tpu: false,
//     models: false,
//     setup: false,
//     organizations: false,
//     groups: false,
//     packages: false,
//     notebooks: false
//   });

//   const toggleSection = (section) => {
//     setExpandedSections({
//       ...expandedSections,
//       [section]: !expandedSections[section]
//     });
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-white">
    

//       {/* Main Content */}
//       <main className="flex-1 max-w-6xl mx-auto w-full p-6">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8">How to Use Kaggle</h1>
        
//         <hr className="my-8 border-gray-200" />
        
//         <section className="mb-8">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">Public API</h2>
//           <p className="text-lg text-gray-600">Create Datasets, Notebooks, and connect with Kaggle</p>
//         </section>
        
//         <hr className="my-8 border-gray-200" />
        
//         <section className="mb-8">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Getting Started: Installation & Authentication</h2>
          
//           <p className="mb-4 text-gray-700">
//             The easiest way to interact with Kaggle's public API is via our command-line tool (CLI) implemented in Python. 
//             This section covers installation of the kaggle package and authentication.
//           </p>
          
//           <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Installation</h3>
          
//           <p className="mb-4 text-gray-700">
//             Ensure you have Python and the package manager pip installed. Run the following command to access the 
//             Kaggle API using the command line:
//           </p>
          
//           <div className="bg-gray-100 p-4 rounded-md mb-4">
//             <code className="font-mono">pip install kaggle</code>
//           </div>
          
//           <p className="mb-4 text-gray-700">
//             (Ensure you have Python and the package manager pip installed. Run the following command to access the Kaggle API using the command line: pip install kaggle (You may need to do pip install --user kaggle on Mac/Linux. This is recommended if problems come up during the installation process.) Follow the authentication steps below and you’ll be able to use the kaggle CLI tool.
//           </p>
          
//           <p className="mb-4 text-gray-700">
//             If you run into a kaggle: command not found error, ensure that your python binaries are on your path. You can see where kaggle is installed by 
//             doing pip uninstall kaggle and seeing where the binary is. For a local user install on Linux, the default location is ~/local/bin. 
//             On Windows, the default location is $PYTHON_HOME/Scripts.
//           </p>
          
//           <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Authentication</h3>
          
//           <p className="mb-4 text-gray-700">
//            In order to use the Kaggle’s public API, you must first authenticate using an API token. Go to the 'Account' tab of your user profile and select 'Create New Token'. This will trigger the download of kaggle.json, a file containing your API credentials.

// If you are using the Kaggle CLI tool, the tool will look for this token at ~/.kaggle/kaggle.json on Linux, OSX, and other UNIX-based operating systems, and at C:\Users\\.kaggle\kaggle.json on Windows. If the token is not there, an error will be raised. Hence, once you’ve downloaded the token, you should move it from your Downloads folder to this folder.

// If you are using the Kaggle API directly, where you keep the token doesn’t matter, so long as you are able to provide your credentials at runtime.


//           </p>
//         </section>
        
//         <hr className="my-8 border-gray-200" />
     

        
//       </main>
//     </div>
//   );
// };

// export default KaggleApiDocumentation;



import React, { useState } from 'react';
import CompetitionNavbarA from '../components/layout/NavbarA'; // adjust path if needed

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

      {/* Page Layout */}
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-6 pt-28 relative">
        {/* Add padding top (pt-28) to prevent overlap with fixed navbar */}

        {/* === Main Content === */}
        <main className="flex-1 pr-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">How to Use Kaggle</h1>

          <hr className="my-8 border-gray-200" />

          <section id="public-api" className="mb-8 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Public API</h2>
            <p className="text-lg text-gray-600">Create Datasets, Notebooks, and connect with Kaggle</p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section id="installation-auth" className="mb-8 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Getting Started: Installation & Authentication
            </h2>

            <p className="mb-4 text-gray-700">
              The easiest way to interact with Kaggle's public API is via our command-line tool (CLI) implemented in Python. 
              This section covers installation of the kaggle package and authentication.
            </p>

            <h3 id="installation" className="text-2xl font-bold text-gray-800 mt-6 mb-4 scroll-mt-24">
              Installation
            </h3>

            <p className="mb-4 text-gray-700">
              Ensure you have Python and the package manager pip installed. Run the following command to access the 
              Kaggle API using the command line:
            </p>

            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <code className="font-mono">pip install kaggle</code>
            </div>

            <p className="mb-4 text-gray-700">
              (Ensure you have Python and the package manager pip installed. Run the following command to access the Kaggle API using the command line: pip install kaggle (You may need to do pip install --user kaggle on Mac/Linux. This is recommended if problems come up during the installation process.) Follow the authentication steps below and you’ll be able to use the kaggle CLI tool.
            </p>

            <p className="mb-4 text-gray-700">
              If you run into a kaggle: command not found error, ensure that your python binaries are on your path. You can see where kaggle is installed by 
              doing pip uninstall kaggle and seeing where the binary is. For a local user install on Linux, the default location is ~/local/bin. 
              On Windows, the default location is $PYTHON_HOME/Scripts.
            </p>

            <h3 id="authentication" className="text-2xl font-bold text-gray-800 mt-6 mb-4 scroll-mt-24">
              Authentication
            </h3>

            <p className="mb-4 text-gray-700">
              In order to use the Kaggle’s public API, you must first authenticate using an API token. Go to the 'Account' tab of your user profile and select 'Create New Token'. This will trigger the download of kaggle.json, a file containing your API credentials.

              If you are using the Kaggle CLI tool, the tool will look for this token at ~/.kaggle/kaggle.json on Linux, OSX, and other UNIX-based operating systems, and at C:\Users\\.kaggle\kaggle.json on Windows. If the token is not there, an error will be raised. Hence, once you’ve downloaded the token, you should move it from your Downloads folder to this folder.

              If you are using the Kaggle API directly, where you keep the token doesn’t matter, so long as you are able to provide your credentials at runtime.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />
        </main>

        {/* === Right Sidebar Navigation === */}
        <aside className="w-64 hidden lg:block sticky top-24 h-fit self-start">
          <div className="border-l pl-4 text-sm text-gray-700 space-y-3">
            <h4 className="text-gray-500 uppercase text-xs tracking-wider mb-2">On this page</h4>
            <ul className="space-y-2">
              <li><a href="#public-api" className="hover:text-blue-600">Public API</a></li>
              <li><a href="#installation" className="hover:text-blue-600">Installation</a></li>
              <li><a href="#authentication" className="hover:text-blue-600">Authentication</a></li>
              <li><a href="#datasets" className="hover:text-blue-600">Datasets</a></li>
              <li><a href="#organizations" className="hover:text-blue-600">Organizations</a></li>
              <li><a href="#notebooks" className="hover:text-blue-600">Notebooks</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default KaggleApiDocumentation;
