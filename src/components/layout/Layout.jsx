import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSidebar } from '../../contexts/SidebarContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const { isOpen } = useSidebar();
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

  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <Sidebar />
      <main className={`transition-all duration-300 ease-in-out pt-16 ${isOpen ? 'md:ml-64' : 'ml-0 md:ml-16'}`}>
        <div className="px-4 py-6">
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
