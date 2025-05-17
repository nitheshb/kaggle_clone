// import React, { useState } from 'react';
// import { Facebook, Mail } from "lucide-react";
// import { cn } from '../lib/utils';

// const AuthPage = () => {
//   const [activeTab, setActiveTab] = useState('signin');

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-4">
//       <div className={cn("w-full max-w-md bg-white shadow-md p-6", 
//         activeTab === 'register' ? 'rounded-xl' : 'rounded-lg')}>
//         <div className="text-center mb-6">
//           <div className="flex justify-center">
//             <h1 className="text-3xl font-bold text-[#00c3e3]">kaggle</h1>
//           </div>
//           <h2 className="text-3xl font-bold mt-4 text-gray-800">Welcome!</h2>
//         </div>

//         <div className="flex justify-center mb-6 border-b">
//           <button 
//             className={`px-6 py-2 font-medium ${activeTab === 'signin' ? 'border-b-2 border-[#00c3e3] text-gray-800' : 'text-gray-500'}`}
//             onClick={() => setActiveTab('signin')}
//           >
//             Sign In
//           </button>
//           <button 
//             className={`px-6 py-2 font-medium ${activeTab === 'register' ? 'border-b-2 border-[#00c3e3] text-gray-800' : 'text-gray-500'}`}
//             onClick={() => setActiveTab('register')}
//           >
//             Register
//           </button>
//         </div>

//         {activeTab === 'signin' ? (
//           <div className="space-y-4">
//             <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
//                 <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
//                   <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
//                   <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
//                   <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
//                   <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
//                 </g>
//               </svg>
//               Sign in with Google
//             </button>

//             <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors">
//               <Mail size={20} className="text-gray-600" />
//               Sign in with Email
//             </button>

//             <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors">
//               <Facebook size={20} className="text-[#3B5998]" />
//               Sign in with Facebook
//             </button>

//             <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors">
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M22 7.535v9.97a3 3 0 0 1-2.824 3.064L12 21.822l-7.176-1.253A3 3 0 0 1 2 17.505V7.535a3 3 0 0 1 2.824-3.064L12 2.95l7.176 1.521A3 3 0 0 1 22 7.535Z" fill="#6001D2" />
//                 <path d="M12 8v13" stroke="#6001D2" />
//                 <path d="m17 15-5-7-5 7" stroke="#6001D2" />
//               </svg>
//               Sign in with Yahoo
//             </button>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
//                 <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
//                   <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
//                   <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
//                   <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
//                   <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
//                 </g>
//               </svg>
//               Register with Google
//             </button>

//             <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors">
//               <Mail size={20} className="text-gray-600" />
//               Register with Email
//             </button>
            
//             <div className="mt-4 text-center">
//               <p className="text-gray-600 text-sm">
//                 Have an account? <a href="#" className="text-[#00c3e3] hover:underline" onClick={() => setActiveTab('signin')}>Sign in</a>
//               </p>
//             </div>
//           </div>
//         )}

//         {activeTab === 'signin' && (
//           <div className="mt-6 text-center">
//             <p className="text-gray-600 text-sm">
//               Don't have an account? <a href="#" className="text-[#00c3e3] hover:underline" onClick={() => setActiveTab('register')}>Create one</a>
//             </p>
//             <a href="#" className="text-xs text-gray-500 block mt-2 hover:underline">Contact Us / Support</a>
//           </div>
//         )}
//       </div>
      
//       {activeTab === 'register' && (
//         <div className="max-w-md mt-4 text-xs text-gray-500 text-center">
//           <p className="mb-2">
//             When you link your Google account, Kaggle collects certain information stored in that 
//             account that you have configured to make available. By linking your accounts, 
//             you authorize Kaggle to access and use your account on the third party service 
//             in connection with your use of kaggle.com.
//           </p>
//           <a href="#" className="hover:underline block mt-2">Contact Us / Support</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthPage;






import React, { useState, useEffect } from 'react';
import { Facebook, Mail } from "lucide-react";
import { cn } from '../lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('signin');

  useEffect(() => {
    // Set active tab based on URL path
    if (location.pathname === '/register') {
      setActiveTab('register');
    } else if (location.pathname === '/signin' || location.pathname === '/') {
      setActiveTab('signin');
    }
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(tab === 'signin' ? '/signin' : '/register');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className={cn("w-full max-w-md bg-white shadow-md p-6", 
        activeTab === 'register' ? 'rounded-xl' : 'rounded-lg')}>
        <div className="text-center mb-6">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-[#00c3e3]">kaggle</h1>
          </div>
          <h2 className="text-3xl font-bold mt-4 text-gray-800">Welcome!</h2>
        </div>

        <div className="flex justify-center mb-6 border-b">
          <button 
            className={`px-6 py-2 font-medium ${activeTab === 'signin' ? 'border-b-2 border-[#00c3e3] text-gray-800' : 'text-gray-500'}`}
            onClick={() => handleTabChange('signin')}
          >
            Sign In
          </button>
          <button 
            className={`px-6 py-2 font-medium ${activeTab === 'register' ? 'border-b-2 border-[#00c3e3] text-gray-800' : 'text-gray-500'}`}
            onClick={() => handleTabChange('register')}
          >
            Register
          </button>
        </div>

        {activeTab === 'signin' ? (
          <div className="space-y-4">
            <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                  <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                  <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                  <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                </g>
              </svg>
              Sign in with Google
            </button>

            <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors">
              <Mail size={20} className="text-gray-600" />
              Sign in with Email
            </button>

            <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors">
              <Facebook size={20} className="text-[#3B5998]" />
              Sign in with Facebook
            </button>

            <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 7.535v9.97a3 3 0 0 1-2.824 3.064L12 21.822l-7.176-1.253A3 3 0 0 1 2 17.505V7.535a3 3 0 0 1 2.824-3.064L12 2.95l7.176 1.521A3 3 0 0 1 22 7.535Z" fill="#6001D2" />
                <path d="M12 8v13" stroke="#6001D2" />
                <path d="m17 15-5-7-5 7" stroke="#6001D2" />
              </svg>
              Sign in with Yahoo
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                  <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                  <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                  <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                </g>
              </svg>
              Register with Google
            </button>

            <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 transition-colors">
              <Mail size={20} className="text-gray-600" />
              Register with Email
            </button>
            
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                Have an account? <a href="#" className="text-[#00c3e3] hover:underline" onClick={(e) => {e.preventDefault(); handleTabChange('signin');}}>Sign in</a>
              </p>
            </div>
          </div>
        )}

        {activeTab === 'signin' && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account? <a href="#" className="text-[#00c3e3] hover:underline" onClick={(e) => {e.preventDefault(); handleTabChange('register');}}>Create one</a>
            </p>
            <a href="#" className="text-xs text-gray-500 block mt-2 hover:underline">Contact Us / Support</a>
          </div>
        )}
      </div>
      
      {activeTab === 'register' && (
        <div className="max-w-md mt-4 text-xs text-gray-500 text-center">
          <p className="mb-2">
            When you link your Google account, Kaggle collects certain information stored in that 
            account that you have configured to make available. By linking your accounts, 
            you authorize Kaggle to access and use your account on the third party service 
            in connection with your use of kaggle.com.
          </p>
          <a href="#" className="hover:underline block mt-2">Contact Us / Support</a>
        </div>
      )}
    </div>
  );
};

export default Index;
