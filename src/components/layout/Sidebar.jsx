import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSidebar } from '../../contexts/SidebarContext';
import {
  Home,
  Trophy,
  Database,
  Layers,
  Code,
  MessageSquare,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Plus,
  Menu,
  ClipboardList,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const {
    isOpen,
    isExpanded,
    toggleExpand,
    expandedItem,
    setExpandedItem,
  } = useSidebar();

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const sidebarWidthClass = isOpen
    ? isExpanded
      ? 'w-64'
      : 'w-16'
    : 'w-0';

  const mainNavItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/competitions', icon: Trophy, label: 'Competitions' },
    { path: '/datasets', icon: Database, label: 'Datasets' },
    { path: '/models', icon: Layers, label: 'Models' },
    { path: '/code', icon: Code, label: 'Code' },
    { path: '/discussions', icon: MessageSquare, label: 'Discussions' },
    { path: '/learn', icon: GraduationCap, label: 'Learn' },
  ];

  const moreItems = [
    'User Rankings',
    'Documentation',
    'Progression',
    'Host a Competition',
    'Educator Resources',
    'Support/Contact',
    'Community Guidelines',
    'Team',
    'Terms',
    'Privacy',
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-full ${sidebarWidthClass} transition-all duration-300 ease-in-out 
                  bg-white border-r border-gray-200 z-40 flex flex-col overflow-hidden`}
    >
      {/* Top: Toggle + Logo */}
      <div className="flex items-center px-3 py-4 h-16 border-b border-gray-100">
        <button
          onClick={toggleExpand}
          className="text-gray-700 hover:bg-gray-200 p-2 rounded-full transition-colors"
        >
          <Menu className="h-6 w-6" strokeWidth={1.8} />
        </button>
        <Link to="/" className="flex items-center ml-2.5">
          <img
            src="/images/site-logo.svg"
            alt="Site Logo"
            className={`h-8 ${isExpanded ? 'block' : 'hidden'}`}
          />
        </Link>
      </div>

      {/* Create Button */}
      <div className="px-3 py-3">
        <button
          className={`flex items-center ${
            isExpanded ? 'px-4 h-12 w-36' : 'justify-center w-10 h-10'
          } rounded-full text-black bg-white shadow-xl
          transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-2xl`}
        >
          <Plus strokeWidth={2.5} className="h-8 w-8 text-[#20BEFF]" />
          {isExpanded && (
            <span className="ml-3 text-[15px] font-normal">Create</span>
          )}
        </button>
      </div>

      {/* Nav Items */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        <nav className="mt-1.5">
          <ul className="space-y-0.5">
            {mainNavItems.map(({ path, icon, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`flex items-center py-2.5 px-4 text-[15px] transition-colors duration-200 ${
                    isActive(path)
                      ? 'border-r-4 border-black bg-gray-50 text-black font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {React.createElement(icon, { 
                    className: "h-5 w-5 flex-shrink-0", 
                    strokeWidth: 1.8 
                  })}
                  {isExpanded && <span className="ml-3">{label}</span>}
                </Link>
              </li>
            ))}

            {/* More Dropdown */}
            <li>
              <button
                onClick={() =>
                  setExpandedItem(expandedItem === 'more' ? null : 'more')
                }
                className="w-full flex items-center px-4 py-2.5 text-[15px] text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                {expandedItem === 'more' ? (
                  <ChevronUp className="h-5 w-5" strokeWidth={1.8} />
                ) : (
                  <ChevronDown className="h-5 w-5" strokeWidth={1.8} />
                )}
                {isExpanded && <span className="ml-3">More</span>}
              </button>

              {isExpanded && expandedItem === 'more' && (
                <ul className="ml-7 space-y-1 mt-1">
                  {moreItems.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Link */}
      <div className="mt-auto border-t border-gray-100 py-2">
        <Link
          to="/active-events"
          className="flex items-center text-gray-700 hover:bg-gray-50 transition-colors duration-200 px-4 py-2.5"
        >
          <ClipboardList className="h-5 w-5" strokeWidth={1.8} />
          {isExpanded && (
            <span className="ml-3 text-[15px]">View Active Events</span>
          )}
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;