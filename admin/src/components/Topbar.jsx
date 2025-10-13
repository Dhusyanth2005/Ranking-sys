import React, { useState, useEffect, useRef } from 'react';
import { User, Menu, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Topbar = ({ onMenuToggle }) => {
  const [showProfile, setShowProfile] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const getSectionName = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/date-year-config':
        return 'Date Year Config';
      case '/ranking-management':
        return 'Ranking Management';
      default:
        return 'Dashboard';
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Menu button and current section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-semibold text-gray-900">{getSectionName()}</h2>
        </div>

        {/* Right side - Profile */}
        <div className="flex items-center">
          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-900 hidden sm:block">Admin</span>
              <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${showProfile ? 'rotate-180' : ''}`} />
            </button>
            
            {showProfile && (
              <div className="absolute right-0 top-14 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b border-gray-200">
                  <p className="font-medium text-gray-900">Administrator</p>
                  <p className="text-xs text-gray-500">admin@qae.com</p>
                </div>
                <div className="p-2">
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                    Profile Settings
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                    Change Password
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;