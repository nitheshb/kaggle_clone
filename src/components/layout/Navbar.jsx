import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MoreHorizontal } from 'lucide-react';
import { useSidebar } from '../../contexts/SidebarContext';

const Navbar = () => {
  const { isOpen, toggle } = useSidebar();
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (!isHome && isOpen) return null;

  const navItems = [
    { to: '/competitions', label: 'Competitions' },
    { to: '/datasets', label: 'Datasets' },
    { to: '/models', label: 'Models' },
    { to: '/code', label: 'Code' },
    { to: '/discussions', label: 'Discussions' },
    { to: '/courses', label: 'Courses' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white z-50 pl-6 pr-10 font-medium">
      <div className="flex items-center justify-between h-full max-w-[1600px] mx-auto">
        
        {/* left group */}
        <div className="flex items-center space-x-8">
          <button onClick={toggle} className="md:hidden text-gray-500">
            {/* hamburger */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link to="/" className="flex-shrink-0 pl-1">
            <img src="/images/site-logo.svg" alt="Kaggle" className="h-8" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-gray-500 text-[14.5px] ${isActive(to) ? 'font-semibold' : 'font-medium'} hover:text-gray-700`}
              >
                {label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center text-gray-500 hover:text-gray-700"
              >
                <MoreHorizontal className="h-5 w-5 text-black" />
              </button>
              {showMore && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                  {[
                    'User Rankings',
                    'Documentation',
                    'Progression',
                    'Host a Competition',
                    'Support/Contact',
                    'Team',
                    'Terms',
                    'Privacy',
                  ].map((item, index) => (
                    <Link
                      key={item}
                      to={'/' + item.toLowerCase().replace(/\s+/g, '-')}
                      className={`block px-4 py-2 text-[14.5px] text-gray-700 hover:bg-gray-100 ${index === 0 || index === 7 ? 'border-b border-gray-300' : ''}`}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* right group */}
        <div className="flex items-center space-x-6 pr-6">
          {/* search */}
          <div className="relative hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-600" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="py-3 pl-10 pr-4 w-48 bg-white border border-gray-300 rounded-full text-[14.5px] focus:outline-none"
            />
          </div>

          <Link
            to="/signin"
            className="text-black text-[14.5px] font-bold hover:text-gray-700"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="bg-black text-white rounded-full px-4 py-2 text-[14.5px] font-bold hover:bg-gray-800 transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


