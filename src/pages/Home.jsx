import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 pr-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Level up with the largest AI & ML community
          </h1>
          <p className="text-gray-700 mb-8">
            Join over 24M+ machine learners to share, stress test, and stay up-to-date 
            on all the latest ML techniques and technologies. Discover a huge 
            repository of community-published models, data & code for your next 
            project.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="flex items-center justify-center bg-white border border-gray-300 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {/* <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                  fill="white"
                />
                <path
                  d="M9.807 14.45C9.075 14.45 8.482 14.84 8.138 15.391L12.114 17.481C12.322 16.801 12.93 16.3 13.65 16.3C14.588 16.3 15.35 17.061 15.35 18C15.35 18.938 14.588 19.7 13.65 19.7C12.712 19.7 11.95 18.938 11.95 18C11.95 17.939 11.954 17.878 11.961 17.819L7.95 15.712C7.544 16.211 6.923 16.55 6.225 16.55C5.024 16.55 4.05 15.575 4.05 14.375C4.05 13.175 5.024 12.2 6.225 12.2C6.923 12.2 7.544 12.539 7.95 13.038L11.961 10.931C11.954 10.872 11.95 10.811 11.95 10.75C11.95 9.812 12.712 9.05 13.65 9.05C14.588 9.05 15.35 9.812 15.35 10.75C15.35 11.689 14.588 12.45 13.65 12.45C12.93 12.45 12.322 11.949 12.114 11.269L8.138 13.359C8.482 13.91 9.075 14.3 9.807 14.3C10.745 14.3 11.507 13.538 11.507 12.6C11.507 11.661 10.745 10.9 9.807 10.9C8.868 10.9 8.107 11.661 8.107 12.6C8.107 12.602 8.107 12.603 8.107 12.605C8.107 12.607 8.107 12.608 8.107 12.61C8.107 12.881 8.176 13.138 8.298 13.362L12.138 11.338C12.114 11.146 12.1 10.95 12.1 10.75C12.1 9.507 13.107 8.5 14.35 8.5C15.593 8.5 16.6 9.507 16.6 10.75C16.6 11.993 15.593 13 14.35 13C13.524 13 12.797 12.597 12.399 11.979L8.601 13.982C8.806 14.259 9.097 14.476 9.437 14.596V14.6C9.437 15.538 10.198 16.3 11.137 16.3C12.075 16.3 12.837 15.538 12.837 14.6C12.837 13.661 12.075 12.9 11.137 12.9C10.198 12.9 9.437 13.661 9.437 14.6V14.604C9.097 14.724 8.806 14.941 8.601 15.218L12.399 17.221C12.797 16.603 13.524 16.2 14.35 16.2C15.593 16.2 16.6 17.207 16.6 18.45C16.6 19.693 15.593 20.7 14.35 20.7C13.107 20.7 12.1 19.693 12.1 18.45C12.1 18.25 12.114 18.054 12.138 17.862L8.298 15.838C8.176 16.062 8.107 16.319 8.107 16.59C8.107 17.528 8.868 18.29 9.807 18.29C10.745 18.29 11.507 17.528 11.507 16.59C11.507 15.651 10.745 14.89 9.807 14.89C9.806 14.89 9.806 14.89 9.806 14.89C9.806 14.89 9.806 14.89 9.806 14.89V14.45H9.807Z"
                  fill="#4285F4"
                />
                <path
                  d="M14.8 10.75C14.8 10.336 14.464 10 14.05 10C13.636 10 13.3 10.336 13.3 10.75C13.3 11.164 13.636 11.5 14.05 11.5C14.464 11.5 14.8 11.164 14.8 10.75Z"
                  fill="#EA4335"
                />
                <path
                  d="M14.8 18.45C14.8 18.036 14.464 17.7 14.05 17.7C13.636 17.7 13.3 18.036 13.3 18.45C13.3 18.864 13.636 19.2 14.05 19.2C14.464 19.2 14.8 18.864 14.8 18.45Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.75 12.6C9.75 12.186 9.414 11.85 9 11.85C8.586 11.85 8.25 12.186 8.25 12.6C8.25 13.014 8.586 13.35 9 13.35C9.414 13.35 9.75 13.014 9.75 12.6Z"
                  fill="#34A853"
                />
                <path
                  d="M9.75 16.59C9.75 16.176 9.414 15.84 9 15.84C8.586 15.84 8.25 16.176 8.25 16.59C8.25 17.004 8.586 17.34 9 17.34C9.414 17.34 9.75 17.004 9.75 16.59Z"
                  fill="#34A853"
                />
                <path
                  d="M7.25 14.375C7.25 13.961 6.914 13.625 6.5 13.625C6.086 13.625 5.75 13.961 5.75 14.375C5.75 14.789 6.086 15.125 6.5 15.125C6.914 15.125 7.25 14.789 7.25 14.375Z"
                  fill="#EA4335"
                />
              </svg> */}
              Register with Google
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-white border border-gray-300 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Register with Email
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="https://www.kaggle.com/static/images/landing-page/hero.svg" 
            alt="Kaggle Community" 
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Who's on Kaggle?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Learners</h3>
            <p className="text-gray-700">Dive into Kaggle courses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Developers</h3>
            <p className="text-gray-700">Leverage Kaggle's models.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Researchers</h3>
            <p className="text-gray-700">Advance ML with our pre-trained models.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;