
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <svg width="120" height="36" viewBox="0 0 120 36" className="text-[#20BEFF] fill-current mb-6">
              <path d="M80.477 25.362c0 3.131-2.486 5.532-5.608 5.532-3.114 0-5.614-2.4-5.614-5.532 0-3.133 2.5-5.532 5.614-5.532 3.122 0 5.608 2.4 5.608 5.532"/>
              <path d="M59.842 30.895l5.06-5.08 5.057 5.08 3.587-3.586-5.057-5.077 5.056-5.077-3.587-3.583-5.056 5.079-5.061-5.08-3.582 3.584 5.057 5.077-5.057 5.077 3.583 3.586zM95.635 20.409c0-3.075 2.5-5.532 5.54-5.532 3.05 0 5.538 2.457 5.538 5.532 0 3.074-2.488 5.531-5.538 5.531-3.04 0-5.54-2.457-5.54-5.531z"/>
              <path d="M80.469 15.322c0 3.074-2.492 5.512-5.546 5.512-3.055 0-5.544-2.438-5.544-5.512 0-3.09 2.489-5.532 5.544-5.532 3.054 0 5.546 2.442 5.546 5.532M113.477 11.255a11.94 11.94 0 00-9.637 4.886l-2.797-3.59h-4.05v23.427h7.05v-8.203c2.515 3.07 6.049 4.886 9.633 4.886 6.786 0 12.324-5.872 12.324-12.84 0-7.114-5.538-12.84-12.324-12.84l-.2.274zm-.243 19.564c-3.254 0-5.593-2.707-5.593-5.901 0-3.208 2.339-5.901 5.593-5.901 3.24 0 5.593 2.66 5.593 5.9 0 3.235-2.354 5.902-5.593 5.902z"/>
              <path d="M6.1 30.012h5.911l4.319-5.887 4.325 5.887h5.906L18.01 17.91l7.223-7.999h-5.881l-3.755 4.198-3.754-4.198H5.969l6.842 7.883-6.71 12.218z"/>
            </svg>
            <div className="flex space-x-4">
              <a href="https://twitter.com/kaggle" className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/kaggle" className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/kaggle" className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/competitions" className="text-gray-600 hover:text-gray-900">Competitions</Link></li>
                <li><Link to="/datasets" className="text-gray-600 hover:text-gray-900">Datasets</Link></li>
                <li><Link to="/models" className="text-gray-600 hover:text-gray-900">Models</Link></li>
                <li><Link to="/notebooks" className="text-gray-600 hover:text-gray-900">Notebooks</Link></li>
                <li><Link to="/learn" className="text-gray-600 hover:text-gray-900">Learn</Link></li>
                <li><Link to="/discussions" className="text-gray-600 hover:text-gray-900">Discussions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Documentation</h3>
              <ul className="space-y-3">
                <li><Link to="/competitions-docs" className="text-gray-600 hover:text-gray-900">Competitions</Link></li>
                <li><Link to="/datasets-docs" className="text-gray-600 hover:text-gray-900">Datasets</Link></li>
                <li><Link to="/models-docs" className="text-gray-600 hover:text-gray-900">Models</Link></li>
                <li><Link to="/notebooks-docs" className="text-gray-600 hover:text-gray-900">Notebooks</Link></li>
                <li><Link to="/api-docs" className="text-gray-600 hover:text-gray-900">Public API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/team" className="text-gray-600 hover:text-gray-900">Our Team</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
                <li><Link to="/host-competition" className="text-gray-600 hover:text-gray-900">Host a Competition</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms · Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
