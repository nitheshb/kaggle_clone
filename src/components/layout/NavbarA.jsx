import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useSidebar } from '../../contexts/SidebarContext';
import PropTypes from 'prop-types';

const CompetitionNavbarA = ({ visible }) => {
  const { isOpen, isExpanded } = useSidebar(); // Get both isOpen and isExpanded
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 h-16 bg-white z-50 transition-all duration-300 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${isOpen ? (isExpanded ? 'ml-64' : 'ml-16') : 'ml-0'}`} // Apply margin dynamically based on isOpen and isExpanded
    >
      <div className="flex items-center justify-between h-full px-12 max-w-[1600px] mx-auto">
        
        <div className="relative w-full"> 
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <Search className="h-5 w-5 text-gray-700" /> 
          </div>
          <input
            type="text"
            placeholder="Search"
            className="py-3 pl-12 pr-4 w-full bg-transparent border border-gray-300 rounded-full text-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-600 hover:border-black"
            style={{ maxWidth: isOpen && isExpanded ? 'calc(100% - 20px)' : 'calc(100% - 5px)' }}
          />

        </div>


        
        <div className="flex items-center space-x-4">
          <Link to="/signin" className="text-sm font-bold">
            <button className="bg-white text-gray-700 rounded-full px-6 py-2 w-auto whitespace-nowrap hover:bg-gray-100 transition-all">
              Sign In
            </button>
          </Link>
          
          <Link to="/register" className="text-sm font-bold">
            <button className="bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 transition-colors">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

CompetitionNavbarA.propTypes = {
  visible: PropTypes.bool.isRequired
};

export default CompetitionNavbarA;

