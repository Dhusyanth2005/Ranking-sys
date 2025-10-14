import React from 'react';
import { 
  LayoutDashboard, 
  Calendar,
  Trophy,
  Bell,
  ListCheck,
  LogOut, 
  Settings,
  X
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Sidebar = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { id: 'date-year-config', label: 'Date Year Config', icon: Calendar, path: '/date-year-config' },
    { id: 'ranking-management', label: 'Ranking Management', icon: Trophy, path: '/ranking-management' },
    { id: 'accept-reject-detail', label: 'Accept/Reject Detail', icon: ListCheck, path: '/accept-reject-detail' },
  ];

  return (
    <>
      {/* Sidebar Overlay for mobile */}
      {isOpen && (
  <div
    onClick={onToggle}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0, 0, 0, 0.3)", // transparent dark overlay
      backdropFilter: "blur(6px)",      // blur effect
      WebkitBackdropFilter: "blur(6px)", // for Safari
      zIndex: 40,
      display: "block"
    }}
  />
)}

      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-64 lg:static lg:z-0 flex flex-col
      `}>
        {/* Logo Section */}
        <div className="flex items-center justify-between p-0 border-b border-gray-200">
          {/* <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">QAE</h1>
          </div> */}
          <a href='/'>
            <img className="h-20 w-auto pt-2" src={logo} alt="QAE Rankings Logo" />
           </a>
          <button 
            onClick={onToggle}
            className="lg:hidden p-3 rounded-md hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      navigate(item.path);
                      if (window.innerWidth < 1024) onToggle();
                    }}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors
                      ${isActive
                        ? 'bg-teal-600 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Section - Fixed at bottom */}
        <div className="mt-auto p-4 border-t border-gray-200">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;