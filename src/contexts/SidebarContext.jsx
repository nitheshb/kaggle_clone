import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarContext = createContext(undefined);

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedItem, setExpandedItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  // Hide sidebar on homepage, show on other pages
  useEffect(() => {
    if (location.pathname === '/') {
      setIsOpen(false);
      setIsExpanded(true);
    } else {
      setIsOpen(true);
    }
  }, [location.pathname]);

  const toggle = () => {
    setIsOpen(!isOpen);
    setIsExpanded(true);
  };

  const close = () => {
    setIsOpen(false);
    setIsExpanded(true);
  };

  const open = () => {
    setIsOpen(true);
    setIsExpanded(true);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    if (!isExpanded) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isExpanded) {
      setIsHovered(false);
    }
  };

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        toggle,
        close,
        open,
        isExpanded,
        toggleExpand,
        expandedItem,
        setExpandedItem,
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};


