// import { useState } from 'react';
// import { ChevronDown, ChevronRight } from 'lucide-react';

// export default function PublicAPI() {
//   const [activeSection, setActiveSection] = useState('installation');
  
//   const handleSectionClick = (section) => {
//     setActiveSection(section === activeSection ? null : section);
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       {/* Main Content */}
//       <main className="flex-1 p-8 mx-auto w-full max-w-4xl">
//         <div>
//           <h1 className="text-3xl font-bold mb-8">How to Use Kaggle</h1>
          
//           {/* Public API Section */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between pb-2 border-b border-gray-200">
//               <h2 className="text-2xl font-semibold">Public API</h2>
//               <button className="flex items-center text-gray-500">
//                 <ChevronDown className="h-5 w-5" />
//               </button>
//             </div>
//             <p className="text-gray-700 my-4">Create Datasets, Notebooks, and connect with Kaggle</p>
//           </div>

//           {/* Getting Started Section */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between pb-2 border-b border-gray-200">
//               <h2 className="text-xl font-semibold">Getting Started: Installation & Authentication</h2>
//               <button className="flex items-center text-gray-500">
//                 <ChevronDown className="h-5 w-5" />
//               </button>
//             </div>
//             <div className="my-4">
//               <p className="text-gray-700 mb-4">
//                 The easiest way to interact with Kaggle's public API is via our command-line tool (CLI) implemented in Python. 
//                 This section covers installation of the kaggle package and authentication.
//               </p>
              
//               {/* Installation Section */}
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-3">Installation</h3>
//                 <p className="text-gray-700 mb-4">
//                   Ensure you have Python and the package manager pip installed. Run the following command to access the 
//                   Kaggle API using the command line:
//                 </p>
//                 <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
//                   pip install kaggle
//                 </div>
//                 <p className="text-gray-700 mb-4">
//                   (You may need to do pip install --user kaggle on Mac/Linux. This is recommended if problems come up during the installation process.) 
//                   Follow the authentication steps below and you'll be able to use the <code className="bg-gray-100 px-1 rounded">kaggle</code> CLI tool.
//                 </p>
//                 <p className="text-gray-700 mb-4">
//                   If you run into a kaggle: command not found error, ensure that your python binaries are on your path. You can
//                   see where kaggle is installed by doing pip uninstall kaggle and seeing where the binary is. For a local user install
//                   on Linux, the default location is ~/.local/bin. On Windows, the default location is $PYTHON_HOME/Scripts.
//                 </p>
//               </div>
              
//               {/* Authentication Section */}
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-3">Authentication</h3>
//                 <p className="text-gray-700 mb-4">
//                   In order to use the Kaggle's public API, you must first authenticate using an API token. Go to the 'Account' tab of
//                   your user profile and select 'Create New Token'. This will trigger the download of kaggle.json, a file containing
//                   your API credentials.
//                 </p>
//                 <p className="text-gray-700 mb-4">
//                   If you are using the Kaggle CLI tool, the tool will look for this token at ~/.kaggle/kaggle.json on Linux, OSX, and
//                   other UNIX-based operating systems, and at C:\Users\&lt;Windows-username&gt;\.kaggle\kaggle.json on Windows.
//                   If the token is not there, an error will be raised. Hence, once you've downloaded the token, you should move it
//                   from your Downloads folder to this folder.
//                 </p>
//                 <p className="text-gray-700 mb-4">
//                   If you are using the Kaggle API directly, where you keep the token doesn't matter, so long as you are able to
//                   provide your credentials at runtime.
//                 </p>
//               </div>
              
//               {/* Interacting with Competitions Section */}
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-3">Interacting with Competitions</h3>
//                 <p className="text-gray-700 mb-4">
//                   The Kaggle API and CLI tool provide easy ways to interact with Competitions on Kaggle. The commands
//                   available can make participating in competitions a seamless part of your model building workflow.
//                 </p>
//                 <p className="text-gray-700 mb-4">
//                   If you haven't installed the package needed to use the command line tool or generated an API token, check out
//                   the getting started steps first.
//                 </p>
//                 <p className="text-gray-700 mb-4">
//                   Just like participating in a Competition normally through the user interface, you must read and accept the rules
//                   in order to download data or make submissions. You cannot accept Competition rules via the API. You must do
//                   this by visiting the Kaggle website and accepting the rules there.
//                 </p>
//                 <p className="text-gray-700 mb-4">
//                   Some of the commands for interacting with Competitions via CLI include:
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }