import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h1>
      <p className="text-gray-700 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-[#20BEFF] hover:bg-blue-500 text-white rounded-full px-5 py-2 font-medium transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;

