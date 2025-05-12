
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white py-4 px-4 border-b border-gray-200 sticky top-0 z-50 shadow-sm fixed-navbar">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <span className="text-[#31BAE8] text-3xl font-bold mr-2">kaggle</span>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li><Link to="/competitions" className="text-gray-600 hover:text-gray-900">Competitions</Link></li>
              <li><Link to="/datasets" className="text-gray-600 hover:text-gray-900">Datasets</Link></li>
              <li><Link to="/models" className="text-gray-600 hover:text-gray-900">Models</Link></li>
              <li><Link to="/code" className="text-gray-600 hover:text-gray-900">Code</Link></li>
              <li><Link to="/discussions" className="text-gray-600 hover:text-gray-900">Discussions</Link></li>
              <li><Link to="/courses" className="text-gray-600 hover:text-gray-900">Courses</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-gray-900">...</Link></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-kaggle-blue focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <Link to="/login" className="text-gray-700 font-medium">Sign In</Link>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full">Register</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
