import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  Shield, 
  TrendingUp, 
  Users, 
  Award,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';

const AuthPage = () => {
  const [currentPage, setCurrentPage] = useState('login'); // 'login', 'signup', 'forgot'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    userType: 'student'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(`${currentPage} form submitted:`, formData);
  };

  const renderLeftContent = () => {
    if (currentPage === 'login') {
      return (
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Continue your journey with QAE's transparent ranking system
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Users className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">For Institutions</h3>
                <p className="text-gray-600">Update your details for fair ranking</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <TrendingUp className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">For Students</h3>
                <p className="text-gray-600">Compare courses, placements, and reviews</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Secure Access</h3>
                <p className="text-gray-600">Your data is protected with us</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (currentPage === 'signup') {
      return (
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">Join QAE</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Be Part of Transparent Rankings
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Create your account today and unlock access to comprehensive educational insights, verified institution data, and student-driven reviews.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Users className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">For Institutions</h3>
                <p className="text-gray-600">Update your details for fair ranking and showcase your achievements to prospective students worldwide</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <TrendingUp className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">For Students</h3>
                <p className="text-gray-600">Compare courses, placements, fees, and authentic reviews to make informed decisions about your future</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Secure Access</h3>
                <p className="text-gray-600">Your personal data and privacy are protected with enterprise-grade security measures</p>
              </div>
            </div>

            {/* <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-5 w-5 text-teal-600" />
                <span className="font-medium text-teal-900">Why Choose QAE?</span>
              </div>
              <ul className="text-sm text-teal-800 space-y-1">
                <li>• Verified institution profiles with authentic data</li>
                <li>• Real student reviews and placement statistics</li>
                <li>• Advanced filtering and comparison tools</li>
                <li>• Regular updates from institutions directly</li>
              </ul>
            </div> */}
          </div>
        </div>
      );
    }
  };

  const renderLoginForm = () => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900">Sign In</h3>
        <p className="text-gray-600 mt-2">Access your QAE account</p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <button
            type="button"
            onClick={() => setCurrentPage('forgot')}
            className="text-sm text-teal-600 hover:text-teal-700 font-medium"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Sign In
        </button>

        <div className="text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <button
            type="button"
            onClick={() => setCurrentPage('signup')}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );

  const renderSignupForm = () => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Create Account</h3>
        <p className="text-gray-600 mt-2">Join the QAE community</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                placeholder="First name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              placeholder="Last name"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
            Institution Type
          </label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
          >
            <option value="student">Engineering</option>
            <option value="institution">Arts & Sciences</option>
          </select>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              placeholder="Create password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              placeholder="Confirm password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 mt-1"
            required
          />
          <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
            I agree to the <span className="text-teal-600 hover:text-teal-700 cursor-pointer">Terms of Service</span> and{' '}
            <span className="text-teal-600 hover:text-teal-700 cursor-pointer">Privacy Policy</span>
          </label>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Create Account
        </button>

        <div className="text-center">
          <span className="text-gray-600">Already have an account? </span>
          <button
            type="button"
            onClick={() => setCurrentPage('login')}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );

  const renderForgotPasswordForm = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-teal-25 to-emerald-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100/20 to-emerald-100/20"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      
      <div className="max-w-md w-full relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                <Lock className="h-8 w-8 text-teal-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Forgot Password?</h2>
            <p className="text-gray-600 mt-2">
              No worries! Enter your email and we'll send you reset instructions.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Reset Instructions
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage('login')}
              className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 font-medium py-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (currentPage === 'forgot') {
    return renderForgotPasswordForm();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-teal-25 to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100/20 to-emerald-100/20"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      
      <div className="flex min-h-screen relative z-10">
        {/* Left Side - Content */}
        <div className="flex-1 flex items-center justify-center px-2 sm:px-4 lg:px-6">
          <div className="max-w-lg w-full">
            {renderLeftContent()}
          </div>
        </div>

        {/* Right Side - Forms */}
        <div className="flex-1 flex items-center justify-center px-2 sm:px-4 lg:px-6">
          <div className="max-w-md w-full">
            {currentPage === 'login' && renderLoginForm()}
            {currentPage === 'signup' && renderSignupForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;