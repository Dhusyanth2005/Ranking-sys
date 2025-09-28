import logodark from '../../assets/logodark.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img className="h-20 w-full pr-60" src={logodark} alt="QAE Rankings Logo" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              India's most trusted college ranking platform, ensuring transparency, 
              credibility, and fair evaluation for better educational choices.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Leaderboard', 'Submission', 'FAQs', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Methodology</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 QAE Rankings. All rights reserved. Empowering education through transparency.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;