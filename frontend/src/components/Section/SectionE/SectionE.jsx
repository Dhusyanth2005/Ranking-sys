import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SectionE = ({ formData, setFormData, onNext, onBack }) => {
  const [loading, setLoading] = useState(false);

  const [researchData, setResearchData] = useState({
    journals: {
      sci: { '24-25': '', '23-24': '', '22-23': '' },
      scie: { '24-25': '', '23-24': '', '22-23': '' },
      scopus: { '24-25': '', '23-24': '', '22-23': '' }
    },
    conferences: {
      scopusConf: { '24-25': '', '23-24': '', '22-23': '' }
    },
    patents: {
      published: { '24-25': '', '23-24': '', '22-23': '' },
      granted: { '24-25': '', '23-24': '', '22-23': '' },
      commercialized: { '24-25': '', '23-24': '', '22-23': '' }
    },
    projects: [
      { particular: '', '24-25': '', '23-24': '', '22-23': '' },
      { particular: '', '24-25': '', '23-24': '', '22-23': '' }
    ],
    grants: [
      { particular: '', '24-25': '', '23-24': '', '22-23': '' },
      { particular: '', '24-25': '', '23-24': '', '22-23': '' }
    ],
    consultancy: [
      { particular: '', '24-25': '', '23-24': '', '22-23': '' },
      { particular: '', '24-25': '', '23-24': '', '22-23': '' }
    ],
    seedMoney: [
      { particular: '', '24-25': '', '23-24': '', '22-23': '' },
      { particular: '', '24-25': '', '23-24': '', '22-23': '' }
    ],
    incubation: {
      centers: { '24-25': '', '23-24': '', '22-23': '' }
    }
  });

  const handleInputChange = (section, field, year, value) => {
    setResearchData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: {
          ...prev[section][field],
          [year]: value
        }
      }
    }));
  };

  const handleArrayInputChange = (section, index, field, value) => {
    setResearchData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const calculatePatentPercentage = (year) => {
    const published = parseInt(researchData.patents.published[year]) || 0;
    const granted = parseInt(researchData.patents.granted[year]) || 0;
    return published > 0 ? ((granted / published) * 100).toFixed(1) : '0.0';
  };

  const calculateTotal = (section) => {
    const totals = {};
    ['24-25', '23-24', '22-23'].forEach(year => {
      totals[year] = researchData[section].reduce((sum, item) => {
        return sum + (parseInt(item[year]) || 0);
      }, 0);
    });
    return totals;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Section E submitted successfully");
    } catch (error) {
      alert("Failed to submit Section E");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Section E: Research
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Provide detailed information about research activities, including publications, patents, grants, consultancy, and incubation centers for the last three academic years.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Publication of Journals */}
          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Publication of Journals</h2>
              <p className="text-teal-100">Details of journal publications for the last three academic years</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-teal-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b border-teal-200">Sl.No</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b border-teal-200">Journals</th>
                      <th className="text-center p-4 font-semibold text-gray-900 border-b border-teal-200">24-25</th>
                      <th className="text-center p-4 font-semibold text-gray-900 border-b border-teal-200">23-24</th>
                      <th className="text-center p-4 font-semibold text-gray-900 border-b border-teal-200">22-23</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 1, journal: 'SCI Indexed', key: 'sci' },
                      { id: 2, journal: 'SCIE / WoS Indexed', key: 'scie' },
                      { id: 3, journal: 'Scopus Indexed', key: 'scopus' }
                    ].map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 text-gray-900">{item.id}</td>
                        <td className="p-4 text-gray-900 font-medium">{item.journal}</td>
                        {['24-25', '23-24', '22-23'].map(year => (
                          <td key={year} className="p-4">
                            <input
                              type="number"
                              placeholder="0"
                              value={researchData.journals[item.key][year]}
                              onChange={(e) => handleInputChange('journals', item.key, year, e.target.value)}
                              className="w-full px-3 py-2 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Patents */}
          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Details of Patents and Its Grant</h2>
              <p className="text-teal-100">Details of patents published, granted, and commercialized</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-teal-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b border-teal-200">Sl.No</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b border-teal-200">Particulars</th>
                      <th className="text-center p-4 font-semibold text-gray-900 border-b border-teal-200">24-25</th>
                      <th className="text-center p-4 font-semibold text-gray-900 border-b border-teal-200">23-24</th>
                      <th className="text-center p-4 font-semibold text-gray-900 border-b border-teal-200">22-23</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 1, particular: 'No. of patents published', key: 'published' },
                      { id: 2, particular: 'No. of patents granted', key: 'granted' },
                      { id: 3, particular: 'Percentage', key: 'percentage' },
                      { id: 4, particular: 'No. of patents commercialized', key: 'commercialized' }
                    ].map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 text-gray-900">{item.id}</td>
                        <td className="p-4 text-gray-900 font-medium">{item.particular}</td>
                        {['24-25', '23-24', '22-23'].map(year => (
                          <td key={year} className="p-4">
                            {item.key === 'percentage' ? (
                              <div className="px-3 py-2 text-center bg-gray-100 rounded-lg text-gray-700 font-medium">
                                {calculatePatentPercentage(year)}%
                              </div>
                            ) : (
                              <input
                                type="number"
                                placeholder="0"
                                value={researchData.patents[item.key][year]}
                                onChange={(e) => handleInputChange('patents', item.key, year, e.target.value)}
                                className="w-full px-3 py-2 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                              />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Research Projects */}
          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Details of Research Projects (Government Only)</h2>
              <p className="text-teal-100">Government-funded research projects</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-teal-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b border-teal-200">Sl.No</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b border-teal-200">Particulars</th>
                      <th className="text-center p-4 font-semibold text-gray-900 border-b border-teal-200">24-25 (₹)</th>
                      <th className="text-center p-4 font-semibold text-gray-900 border-b border-teal-200">23-24 (₹)</th>
                      <th className="text-center p-4 font-semibold text-gray-900 border-b border-teal-200">22-23 (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {researchData.projects.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 text-gray-900">{index + 1}</td>
                        <td className="p-4">
                          <input
                            type="text"
                            placeholder="Enter project details"
                            value={item.particular}
                            onChange={(e) => handleArrayInputChange('projects', index, 'particular', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          />
                        </td>
                        {['24-25', '23-24', '22-23'].map(year => (
                          <td key={year} className="p-4">
                            <input
                              type="number"
                              placeholder="0"
                              value={item[year]}
                              onChange={(e) => handleArrayInputChange('projects', index, year, e.target.value)}
                              className="w-full px-3 py-2 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="bg-teal-50 font-semibold">
                      <td className="p-4 text-gray-900" colSpan="2">Total</td>
                      {['24-25', '23-24', '22-23'].map(year => (
                        <td key={year} className="p-4 text-center text-gray-900">
                          ₹{calculateTotal('projects')[year].toLocaleString('en-IN')}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Incubation Centres */}
          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Details of Incubation Centres</h2>
              <p className="text-teal-100">Incubation centers registered with MSME/DPIIT</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-teal-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b border-teal-200">Particulars</th>
                      <th className="text-center p-4 font-semibold text-gray-900 border-b border-teal-200">24-25</th>
                      <th className="text-center p-4 font-semibold text-gray-900 border-b border-teal-200">23-24</th>
                      <th className="text-center p-4 font-semibold text-gray-900 border-b border-teal-200">22-23</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4 text-gray-900 font-medium">No. of Centres</td>
                      {['24-25', '23-24', '22-23'].map(year => (
                        <td key={year} className="p-4">
                          <input
                            type="number"
                            placeholder="0"
                            value={researchData.incubation.centers[year]}
                            onChange={(e) => handleInputChange('incubation', 'centers', year, e.target.value)}
                            className="w-full px-3 py-2 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          />
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-teal-50 font-semibold">
                      <td className="p-4 text-gray-900">Total</td>
                      {['24-25', '23-24', '22-23'].map(year => (
                        <td key={year} className="p-4 text-center text-gray-900">
                          {researchData.incubation.centers[year] || '0'}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="flex items-center bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back to Section D
              </button>
            )}
            
            <div className="flex space-x-4 ml-auto">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Saving...
                  </div>
                ) : (
                  "Save Section E"
                )}
              </button>

              <button
                type="button"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Complete Application
              </button>
            </div>
          </div>
        </form>

        <div className="text-center mt-12 pt-8 border-t border-teal-200">
          <p className="text-gray-600">
            Need help? Contact our support team at{" "}
            <a href="mailto:support@institution.edu" className="text-teal-600 hover:text-teal-700 font-medium">
              support@institution.edu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionE;