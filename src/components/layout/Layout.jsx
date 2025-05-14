import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSidebar } from '../../contexts/SidebarContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const { isOpen, isExpanded } = useSidebar();
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    let pageTitle = 'Kaggle: Your Machine Learning and Data Science Community';

    if (pathSegments.length > 0) {
      const pageName = pathSegments[0];
      pageTitle = `Kaggle ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}`;
    }

    document.title = pageTitle;
  }, [location]);

  // Dynamically adjust the main content margin based on sidebar state
  const mainContentMargin = isOpen 
    ? isExpanded 
      ? 'ml-0 md:ml-64' // Sidebar is open and expanded (full width - 16rem/64px)
      : 'ml-0 md:ml-16' // Sidebar is open but collapsed (icon only - 4rem/16px)
    : 'ml-0'; // Sidebar is closed

  return (
    <div className="">
      <Navbar />
      <Sidebar />
      <main 
        className={`transition-all duration-300 ease-in-out pt-16 ${mainContentMargin}`}
      >
        <div className="px-4 py-6 md:px-6">
          {children}
        </div>
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;