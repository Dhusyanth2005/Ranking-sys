import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const SectionB = ({ formData = {}, setFormData, onNext, onBack }) => {
  const [loading, setLoading] = useState(false);
  const [genderData, setGenderData] = useState({
    male: { '25-26': '', '24-25': '', '23-24': '' },
    female: { '25-26': '', '24-25': '', '23-24': '' },
    transgender: { '25-26': '', '24-25': '', '23-24': '' },
  });
  const [diversityData, setDiversityData] = useState({
    interstate: { '25-26': '', '24-25': '', '23-24': '' },
    intrastate: { '25-26': '', '24-25': '', '23-24': '' },
    overseas: { '25-26': '', '24-25': '', '23-24': '' },
  });
  const [examRows, setExamRows] = useState([
    { id: 1, department: '', examName: '', highestRank: '', lowestRank: '' },
    { id: 2, department: '', examName: '', highestRank: '', lowestRank: '' },
    { id: 3, department: '', examName: '', highestRank: '', lowestRank: '' },
    { id: 4, department: '', examName: '', highestRank: '', lowestRank: '' },
    { id: 5, department: '', examName: '', highestRank: '', lowestRank: '' },
  ]);

  // Calculate totals for Gender and Diversity
  const calculateTotals = (data) => {
    const totals = { '25-26': 0, '24-25': 0, '23-24': 0 };
    Object.values(data).forEach(category => {
      Object.keys(category).forEach(year => {
        totals[year] += Number(category[year]) || 0;
      });
    });
    return totals;
  };

  const genderTotals = calculateTotals(genderData);
  const diversityTotals = calculateTotals(diversityData);

  // Handle input changes
  const handleGenderChange = (gender, year, value) => {
    setGenderData(prev => ({
      ...prev,
      [gender]: { ...prev[gender], [year]: value }
    }));
  };

  const handleDiversityChange = (category, year, value) => {
    setDiversityData(prev => ({
      ...prev,
      [category]: { ...prev[category], [year]: value }
    }));
  };

  const handleExamChange = (id, field, value) => {
    setExamRows(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  // Add new row to Exam Scores table
  const addExamRow = () => {
    const newId = Math.max(...examRows.map(row => row.id), 0) + 1;
    setExamRows(prev => [
      ...prev,
      { id: newId, department: '', examName: '', highestRank: '', lowestRank: '' }
    ]);
  };

  // Update formData when any input changes
  useEffect(() => {
    setFormData({
      ...formData,
      gender: genderData,
      diversity: diversityData,
      examScores: examRows,
    });
  }, [genderData, diversityData, examRows, setFormData]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Section B submitted successfully");
    } catch (error) {
      alert("Failed to submit Section B");
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Section B: Gender Information, Diversity and Finance
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Provide details on student admissions, diversity, exam scores, and financial information for the specified academic years.
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
            <span className="ml-3 text-gray-700 font-medium">Loading...</span>
          </div>
        )}

        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Gender Information</h2>
              <p className="text-teal-100">Number of students admitted (includes government, management, and others).</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Gender</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-gray-50">25-26</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-gray-50">24-25</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-gray-50">23-24</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['male', 'female', 'transgender'].map(gender => (
                      <tr key={gender} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium text-gray-900 capitalize">{gender}</td>
                        {['25-26', '24-25', '23-24'].map(year => (
                          <td key={year} className="py-4 px-6">
                            <input
                              type="number"
                              value={genderData[gender][year]}
                              onChange={(e) => handleGenderChange(gender, year, e.target.value)}
                              placeholder="Enter count"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="border-b-2 border-gray-300 bg-teal-50">
                      <td className="py-4 px-6 font-bold text-gray-900">Total</td>
                      {['25-26', '24-25', '23-24'].map(year => (
                        <td key={year} className="py-4 px-6">
                          <input
                            type="number"
                            value={genderTotals[year]}
                            disabled
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                          />
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Diversity Information</h2>
              <p className="text-teal-100">Number of students admitted from the above table, categorized by location.</p>
            </div>
            <div className="p-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-medium">
                  <strong>Note:</strong> The student count is only admitted count in the Academic Year (AY); not enrolled in the AY.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Category</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-gray-50">25-26</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-gray-50">24-25</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-gray-50">23-24</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['interstate', 'intrastate', 'overseas'].map(category => (
                      <tr key={category} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-medium text-gray-900 capitalize">{category.replace('state', ' state')}</td>
                        {['25-26', '24-25', '23-24'].map(year => (
                          <td key={year} className="py-4 px-6">
                            <input
                              type="number"
                              value={diversityData[category][year]}
                              onChange={(e) => handleDiversityChange(category, year, e.target.value)}
                              placeholder="Enter count"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="border-b-2 border-gray-300 bg-teal-50">
                      <td className="py-4 px-6 font-bold text-gray-900">Total</td>
                      {['25-26', '24-25', '23-24'].map(year => (
                        <td key={year} className="py-4 px-6">
                          <input
                            type="number"
                            value={diversityTotals[year]}
                            disabled
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                          />
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Exam Scores and Rank Details</h2>
              <p className="text-teal-100">Details for the latest admitted Academic Year.</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Name of the Department</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Name of the Exam (JEE/State level)</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Highest Rank</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Lowest Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examRows.map(row => (
                      <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 text-center font-medium text-gray-900">{row.id}</td>
                        <td className="py-4 px-6">
                          <input
                            type="text"
                            value={row.department}
                            onChange={(e) => handleExamChange(row.id, 'department', e.target.value)}
                            placeholder="Enter department"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                        <td className="py-4 px-6">
                          <input
                            type="text"
                            value={row.examName}
                            onChange={(e) => handleExamChange(row.id, 'examName', e.target.value)}
                            placeholder="Enter exam name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <input
                            type="number"
                            value={row.highestRank}
                            onChange={(e) => handleExamChange(row.id, 'highestRank', e.target.value)}
                            placeholder="Enter rank"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <input
                            type="number"
                            value={row.lowestRank}
                            onChange={(e) => handleExamChange(row.id, 'lowestRank', e.target.value)}
                            placeholder="Enter rank"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                    onClick={addExamRow}
                  >
                    + Add more rows
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Financial Details for Last Academic Year</h2>
              <p className="text-teal-100">Provide financial details for the last academic year.</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Average tuition fees collected from the student per year
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount in ₹"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Other fees collected per year
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount in ₹"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Hostel fees per year
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount in ₹"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Total expenses (salary/remuneration) for teaching, non-teaching, staff salary
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount in ₹"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Total expenses on labs (all laboratories)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount in ₹"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Per student expenditure
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount in ₹"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8">
            {onBack && (
              <button
                type="button"
                className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                onClick={handleBack}
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back to Section A
              </button>
            )}
            <div className="flex space-x-4 ml-auto">
              <button
                type="button"
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Saving...
                  </div>
                ) : (
                  "Save Section B"
                )}
              </button>
              {onNext && (
                <button
                  type="button"
                  className="flex items-center bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={handleNext}
                >
                  Continue to Section C
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
          </div>

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
    </div>
  );
};

export default SectionB;