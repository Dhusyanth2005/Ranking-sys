import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });

  const handleLogin = (page) => {
    // Navigate to /auth with a query parameter indicating the form to show
    navigate(`/auth?page=${page}`);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setShowProfileDropdown(false);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-teal-100 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href='/'>
                <img className="h-20 w-full pt-2" src={logo} alt="QAE Rankings Logo" />
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['home', 'about', 'leaderboard', 'submission', 'faqs', 'contact'].map((item) => (
                <NavLink
                  key={item}
                  to={item === 'home' ? '/' : `/${item}`}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 capitalize ${
                      isActive
                        ? 'bg-teal-100 text-teal-700 border-b-2 border-teal-600'
                        : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            {!isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => handleLogin('login')}
                  className="text-teal-600 px-4 py-2 rounded-lg font-medium hover:bg-teal-50 transition-colors duration-200"
                >
                  Login
                </button>
                <button 
                  onClick={() => handleLogin('signup')}
                  className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="relative">
                <button
                  onMouseEnter={() => setShowProfileDropdown(true)}
                  onMouseLeave={() => setShowProfileDropdown(false)}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-teal-50 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                </button>
                
                {showProfileDropdown && (
                  <div 
                    className="absolute right-0 mt-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                    onMouseEnter={() => setShowProfileDropdown(true)}
                    onMouseLeave={() => setShowProfileDropdown(false)}
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                    
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </button>
                    
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </button>
                    
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <button 
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;