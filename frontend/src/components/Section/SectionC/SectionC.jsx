import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const SectionC = ({ formData = {}, setFormData, onNext, onBack }) => {
  const [loading, setLoading] = useState(false);
  const [specializationData, setSpecializationData] = useState([
    { id: 1, department: '', '25-26': { intake: '', filled: '' }, '24-25': { intake: '', filled: '' }, '23-24': { intake: '', filled: '' } },
    { id: 2, department: '', '25-26': { intake: '', filled: '' }, '24-25': { intake: '', filled: '' }, '23-24': { intake: '', filled: '' } },
    { id: 3, department: '', '25-26': { intake: '', filled: '' }, '24-25': { intake: '', filled: '' }, '23-24': { intake: '', filled: '' } },
    { id: 4, department: '', '25-26': { intake: '', filled: '' }, '24-25': { intake: '', filled: '' }, '23-24': { intake: '', filled: '' } },
    { id: 5, department: '', '25-26': { intake: '', filled: '' }, '24-25': { intake: '', filled: '' }, '23-24': { intake: '', filled: '' } },
  ]);
  const [facultyData, setFacultyData] = useState([
    { id: 1, department: '', intake: '', '25-26': { prof: '', asp: '', ap: '' }, '24-25': { prof: '', asp: '', ap: '' }, '23-24': { prof: '', asp: '', ap: '' } },
    { id: 2, department: '', intake: '', '25-26': { prof: '', asp: '', ap: '' }, '24-25': { prof: '', asp: '', ap: '' }, '23-24': { prof: '', asp: '', ap: '' } },
    { id: 3, department: '', intake: '', '25-26': { prof: '', asp: '', ap: '' }, '24-25': { prof: '', asp: '', ap: '' }, '23-24': { prof: '', asp: '', ap: '' } },
    { id: 4, department: '', intake: '', '25-26': { prof: '', asp: '', ap: '' }, '24-25': { prof: '', asp: '', ap: '' }, '23-24': { prof: '', asp: '', ap: '' } },
  ]);
  const [phdData, setPhdData] = useState({
    '25-26': { total: '', phd: '' },
    '24-25': { total: '', phd: '' },
    '23-24': { total: '', phd: '' },
  });
  const [placementData, setPlacementData] = useState([
    { id: 1, department: '', '25-26': { a: '', b: '', c: '' }, '24-25': { a: '', b: '', c: '' }, '23-24': { a: '', b: '', c: '' } },
    { id: 2, department: '', '25-26': { a: '', b: '', c: '' }, '24-25': { a: '', b: '', c: '' }, '23-24': { a: '', b: '', c: '' } },
    { id: 3, department: '', '25-26': { a: '', b: '', c: '' }, '24-25': { a: '', b: '', c: '' }, '23-24': { a: '', b: '', c: '' } },
    { id: 4, department: '', '25-26': { a: '', b: '', c: '' }, '24-25': { a: '', b: '', c: '' }, '23-24': { a: '', b: '', c: '' } },
    { id: 5, department: '', '25-26': { a: '', b: '', c: '' }, '24-25': { a: '', b: '', c: '' }, '23-24': { a: '', b: '', c: '' } },
  ]);
  const [placementSummaryData, setPlacementSummaryData] = useState([
    { id: 1, department: '', '25-26': { n: '', x: '' }, '24-25': { n: '', x: '' }, '23-24': { n: '', x: '' } },
    { id: 2, department: '', '25-26': { n: '', x: '' }, '24-25': { n: '', x: '' }, '23-24': { n: '', x: '' } },
    { id: 3, department: '', '25-26': { n: '', x: '' }, '24-25': { n: '', x: '' }, '23-24': { n: '', x: '' } },
    { id: 4, department: '', '25-26': { n: '', x: '' }, '24-25': { n: '', x: '' }, '23-24': { n: '', x: '' } },
    { id: 5, department: '', '25-26': { n: '', x: '' }, '24-25': { n: '', x: '' }, '23-24': { n: '', x: '' } },
  ]);
  const [mouData, setMouData] = useState({
    '24-25': '', '23-24': '', '22-23': '',
  });
  const [foreignMouData, setForeignMouData] = useState([
    { id: 1, university: '', country: '', validUpto: '' },
    { id: 2, university: '', country: '', validUpto: '' },
    { id: 3, university: '', country: '', validUpto: '' },
  ]);

  // Calculate percentages for Specialization
  const calculateSpecializationPercent = (intake, filled) => {
    const intakeNum = Number(intake);
    const filledNum = Number(filled);
    return intakeNum > 0 ? ((filledNum / intakeNum) * 100).toFixed(2) : '';
  };

  // Calculate totals for Faculty
  const calculateFacultyTotals = () => {
    const totals = {
      '25-26': { prof: 0, asp: 0, ap: 0 },
      '24-25': { prof: 0, asp: 0, ap: 0 },
      '23-24': { prof: 0, asp: 0, ap: 0 },
    };
    facultyData.forEach(row => {
      ['25-26', '24-25', '23-24'].forEach(year => {
        totals[year].prof += Number(row[year].prof) || 0;
        totals[year].asp += Number(row[year].asp) || 0;
        totals[year].ap += Number(row[year].ap) || 0;
      });
    });
    return totals;
  };

  // Calculate Ph.D. percentages
  const calculatePhdPercent = (total, phd) => {
    const totalNum = Number(total);
    const phdNum = Number(phd);
    return totalNum > 0 ? ((phdNum / totalNum) * 100).toFixed(2) : '';
  };

  // Calculate Placement totals
  const calculatePlacementTotals = (row, year) => {
    const a = Number(row[year].a) || 0;
    const b = Number(row[year].b) || 0;
    const c = Number(row[year].c) || 0;
    return a + b + c;
  };

  // Calculate Placement Summary percentages
  const calculateSummaryPercent = (n, x) => {
    const nNum = Number(n);
    const xNum = Number(x);
    return nNum > 0 ? ((xNum / nNum) * 100).toFixed(2) : '';
  };

  // Calculate MoUs total
  const calculateMouTotal = () => {
    return Object.values(mouData).reduce((sum, val) => sum + (Number(val) || 0), 0);
  };

  const facultyTotals = calculateFacultyTotals();
  const mouTotal = calculateMouTotal();

  // Handlers for input changes
  const handleSpecializationChange = (id, field, year, value) => {
    setSpecializationData(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [year]: { ...row[year], [field]: value } } : row
      )
    );
  };

  const handleFacultyChange = (id, field, year, value) => {
    setFacultyData(prev =>
      prev.map(row =>
        row.id === id
          ? field === 'department' || field === 'intake'
            ? { ...row, [field]: value }
            : { ...row, [year]: { ...row[year], [field]: value } }
          : row
      )
    );
  };

  const handlePhdChange = (year, field, value) => {
    setPhdData(prev => ({
      ...prev,
      [year]: { ...prev[year], [field]: value },
    }));
  };

  const handlePlacementChange = (id, field, year, value) => {
    setPlacementData(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [year]: { ...row[year], [field]: value } } : row
      )
    );
  };

  const handleSummaryChange = (id, field, year, value) => {
    setPlacementSummaryData(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [year]: { ...row[year], [field]: value } } : row
      )
    );
  };

  const handleMouChange = (year, value) => {
    setMouData(prev => ({ ...prev, [year]: value }));
  };

  const handleForeignMouChange = (id, field, value) => {
    setForeignMouData(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  // Add row handlers
  const addSpecializationRow = () => {
    const newId = Math.max(...specializationData.map(row => row.id), 0) + 1;
    setSpecializationData(prev => [
      ...prev,
      { id: newId, department: '', '25-26': { intake: '', filled: '' }, '24-25': { intake: '', filled: '' }, '23-24': { intake: '', filled: '' } },
    ]);
  };

  const addFacultyRow = () => {
    const newId = Math.max(...facultyData.map(row => row.id), 0) + 1;
    setFacultyData(prev => [
      ...prev,
      { id: newId, department: '', intake: '', '25-26': { prof: '', asp: '', ap: '' }, '24-25': { prof: '', asp: '', ap: '' }, '23-24': { prof: '', asp: '', ap: '' } },
    ]);
  };

  const addPlacementRow = () => {
    const newId = Math.max(...placementData.map(row => row.id), 0) + 1;
    setPlacementData(prev => [
      ...prev,
      { id: newId, department: '', '25-26': { a: '', b: '', c: '' }, '24-25': { a: '', b: '', c: '' }, '23-24': { a: '', b: '', c: '' } },
    ]);
  };

  const addSummaryRow = () => {
    const newId = Math.max(...placementSummaryData.map(row => row.id), 0) + 1;
    setPlacementSummaryData(prev => [
      ...prev,
      { id: newId, department: '', '25-26': { n: '', x: '' }, '24-25': { n: '', x: '' }, '23-24': { n: '', x: '' } },
    ]);
  };

  const addForeignMouRow = () => {
    const newId = Math.max(...foreignMouData.map(row => row.id), 0) + 1;
    setForeignMouData(prev => [
      ...prev,
      { id: newId, university: '', country: '', validUpto: '' },
    ]);
  };

  // Update formData
  useEffect(() => {
    setFormData({
      ...formData,
      specialization: specializationData,
      faculty: facultyData,
      phd: phdData,
      placement: placementData,
      placementSummary: placementSummaryData,
      mous: mouData,
      foreignMous: foreignMouData,
    });
  }, [specializationData, facultyData, phdData, placementData, placementSummaryData, mouData, foreignMouData, setFormData]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Section C submitted successfully");
    } catch (error) {
      alert("Failed to submit Section C");
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Section C: Academics
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Provide detailed academic information including specialization, faculty, placements, and institutional details for the specified academic years.
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
              <h2 className="text-2xl font-bold text-white mb-2">Specialization Detail of Students Admitted</h2>
              <p className="text-teal-100">Details for the latest three Academic Years (First year admitted students).</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 bg-gray-50">Department</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-blue-50">25-26 Intake</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-blue-50">25-26 Filled</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-blue-50">25-26 %</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-green-50">24-25 Intake</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-green-50">24-25 Filled</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-green-50">24-25 %</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-yellow-50">23-24 Intake</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-yellow-50">23-24 Filled</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-yellow-50">23-24 %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specializationData.map(row => (
                      <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-2 text-center font-medium text-gray-900">{row.id}</td>
                        <td className="py-3 px-4">
                          <input
                            type="text"
                            value={row.department}
                            onChange={(e) => setSpecializationData(prev =>
                              prev.map(r => r.id === row.id ? { ...r, department: e.target.value } : r)
                            )}
                            placeholder="Enter department"
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                          />
                        </td>
                        {['25-26', '24-25', '23-24'].map(year => (
                          <React.Fragment key={year}>
                            <td className="py-3 px-2">
                              <input
                                type="number"
                                value={row[year].intake}
                                onChange={(e) => handleSpecializationChange(row.id, 'intake', year, e.target.value)}
                                placeholder="Intake"
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                              />
                            </td>
                            <td className="py-3 px-2">
                              <input
                                type="number"
                                value={row[year].filled}
                                onChange={(e) => handleSpecializationChange(row.id, 'filled', year, e.target.value)}
                                placeholder="Filled"
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                              />
                            </td>
                            <td className="py-3 px-2">
                              <input
                                type="number"
                                value={calculateSpecializationPercent(row[year].intake, row[year].filled)}
                                disabled
                                className="w-full px-2 py-1 border border-gray-300 rounded bg-gray-100 text-gray-600 cursor-not-allowed text-sm"
                              />
                            </td>
                          </React.Fragment>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={addSpecializationRow}
                    className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                  >
                    + Add more rows
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Faculty Details (Permanent Faculty Only)</h2>
              <p className="text-teal-100 mb-2">V = (3 × Prof + 2 × ASP + 1 × AP) / 2.5</p>
              <p className="text-teal-100 text-sm">Note: Professors and Associate Professors should hold Ph.D. with required experience.</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th rowSpan="2" className="text-center py-3 px-2 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">Sl.No</th>
                      <th rowSpan="2" className="text-left py-3 px-4 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">Department</th>
                      <th rowSpan="2" className="text-center py-3 px-3 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">Intake Details</th>
                      <th colSpan="3" className="text-center py-3 px-2 font-semibold text-gray-900 bg-blue-50 border-r border-gray-200">25-26</th>
                      <th colSpan="3" className="text-center py-3 px-2 font-semibold text-gray-900 bg-green-50 border-r border-gray-200">24-25</th>
                      <th colSpan="3" className="text-center py-3 px-2 font-semibold text-gray-900 bg-yellow-50">23-24</th>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="text-center py-2 px-2 font-semibold text-gray-900 bg-blue-50">Prof</th>
                      <th className="text-center py-2 px-2 font-semibold text-gray-900 bg-blue-50">ASP</th>
                      <th className="text-center py-2 px-2 font-semibold text-gray-900 bg-blue-50 border-r border-gray-200">AP</th>
                      <th className="text-center py-2 px-2 font-semibold text-gray-900 bg-green-50">Prof</th>
                      <th className="text-center py-2 px-2 font-semibold text-gray-900 bg-green-50">ASP</th>
                      <th className="text-center py-2 px-2 font-semibold text-gray-900 bg-green-50 border-r border-gray-200">AP</th>
                      <th className="text-center py-2 px-2 font-semibold text-gray-900 bg-yellow-50">Prof</th>
                      <th className="text-center py-2 px-2 font-semibold text-gray-900 bg-yellow-50">ASP</th>
                      <th className="text-center py-2 px-2 font-semibold text-gray-900 bg-yellow-50">AP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {facultyData.map(row => (
                      <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-2 text-center font-medium text-gray-900 border-r border-gray-200">{row.id}</td>
                        <td className="py-3 px-4 border-r border-gray-200">
                          <input
                            type="text"
                            value={row.department}
                            onChange={(e) => handleFacultyChange(row.id, 'department', null, e.target.value)}
                            placeholder="Enter department"
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                          />
                        </td>
                        <td className="py-3 px-3 border-r border-gray-200">
                          <input
                            type="text"
                            value={row.intake}
                            onChange={(e) => handleFacultyChange(row.id, 'intake', null, e.target.value)}
                            placeholder="Enter intake"
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                          />
                        </td>
                        {['25-26', '24-25', '23-24'].map(year => (
                          <React.Fragment key={year}>
                            <td className="py-3 px-2">
                              <input
                                type="number"
                                value={row[year].prof}
                                onChange={(e) => handleFacultyChange(row.id, 'prof', year, e.target.value)}
                                placeholder="0"
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                              />
                            </td>
                            <td className="py-3 px-2">
                              <input
                                type="number"
                                value={row[year].asp}
                                onChange={(e) => handleFacultyChange(row.id, 'asp', year, e.target.value)}
                                placeholder="0"
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                              />
                            </td>
                            <td className={`py-3 px-2 ${year !== '23-24' ? 'border-r border-gray-200' : ''}`}>
                              <input
                                type="number"
                                value={row[year].ap}
                                onChange={(e) => handleFacultyChange(row.id, 'ap', year, e.target.value)}
                                placeholder="0"
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                              />
                            </td>
                          </React.Fragment>
                        ))}
                      </tr>
                    ))}
                    <tr className="border-b-2 border-gray-300 bg-teal-50">
                      <td colSpan="2" className="py-3 px-4 font-bold text-gray-900 border-r border-gray-200">Total</td>
                      <td className="py-3 px-3 border-r border-gray-200"></td>
                      {['25-26', '24-25', '23-24'].map(year => (
                        <React.Fragment key={year}>
                          <td className="py-3 px-2">
                            <input
                              type="number"
                              value={facultyTotals[year].prof}
                              disabled
                              className="w-full px-2 py-1 border border-gray-300 rounded bg-gray-100 text-gray-600 cursor-not-allowed text-sm"
                            />
                          </td>
                          <td className="py-3 px-2">
                            <input
                              type="number"
                              value={facultyTotals[year].asp}
                              disabled
                              className="w-full px-2 py-1 border border-gray-300 rounded bg-gray-100 text-gray-600 cursor-not-allowed text-sm"
                            />
                          </td>
                          <td className={`py-3 px-2 ${year !== '23-24' ? 'border-r border-gray-200' : ''}`}>
                            <input
                              type="number"
                              value={facultyTotals[year].ap}
                              disabled
                              className="w-full px-2 py-1 border border-gray-300 rounded bg-gray-100 text-gray-600 cursor-not-allowed text-sm"
                            />
                          </td>
                        </React.Fragment>
                      ))}
                    </tr>
                  </tbody>
                </table>
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={addFacultyRow}
                    className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                  >
                    + Add more rows
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Number of Ph.D. Holders in the Institute</h2>
              <p className="text-teal-100">Permanent Faculty Only.</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-gray-50">Year</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-gray-50">Total No. of Faculties</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-gray-50">No. of Ph.D. Holders</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-gray-50">Percentage (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['25-26', '24-25', '23-24'].map(year => (
                      <tr key={year} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-gray-900">{year}</td>
                        <td className="py-4 px-6">
                          <input
                            type="number"
                            value={phdData[year].total}
                            onChange={(e) => handlePhdChange(year, 'total', e.target.value)}
                            placeholder="Enter count"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                        <td className="py-4 px-6">
                          <input
                            type="number"
                            value={phdData[year].phd}
                            onChange={(e) => handlePhdChange(year, 'phd', e.target.value)}
                            placeholder="Enter count"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                        <td className="py-4 px-6">
                          <input
                            type="number"
                            value={calculatePhdPercent(phdData[year].total, phdData[year].phd)}
                            disabled
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Placement (A), Higher Education (B), and Entrepreneurship (C)</h2>
              <p className="text-teal-100">Details for the latest three Academic Years.</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 bg-gray-50">Department</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-blue-50">25-26 A</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-blue-50">25-26 B</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-blue-50">25-26 C</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-blue-50">25-26 T</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-green-50">24-25 A</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-green-50">24-25 B</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-green-50">24-25 C</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-green-50">24-25 T</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-yellow-50">23-24 A</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-yellow-50">23-24 B</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-yellow-50">23-24 C</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-yellow-50">23-24 T</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placementData.map(row => (
                      <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-2 text-center font-medium text-gray-900">{row.id}</td>
                        <td className="py-3 px-4">
                          <input
                            type="text"
                            value={row.department}
                            onChange={(e) => setPlacementData(prev =>
                              prev.map(r => r.id === row.id ? { ...r, department: e.target.value } : r)
                            )}
                            placeholder="Enter department"
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                          />
                        </td>
                        {['25-26', '24-25', '23-24'].map(year => (
                          <React.Fragment key={year}>
                            <td className="py-3 px-2">
                              <input
                                type="number"
                                value={row[year].a}
                                onChange={(e) => handlePlacementChange(row.id, 'a', year, e.target.value)}
                                placeholder="Count"
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                              />
                            </td>
                            <td className="py-3 px-2">
                              <input
                                type="number"
                                value={row[year].b}
                                onChange={(e) => handlePlacementChange(row.id, 'b', year, e.target.value)}
                                placeholder="Count"
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                              />
                            </td>
                            <td className="py-3 px-2">
                              <input
                                type="number"
                                value={row[year].c}
                                onChange={(e) => handlePlacementChange(row.id, 'c', year, e.target.value)}
                                placeholder="Count"
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                              />
                            </td>
                            <td className="py-3 px-2">
                              <input
                                type="number"
                                value={calculatePlacementTotals(row, year)}
                                disabled
                                className="w-full px-2 py-1 border border-gray-300 rounded bg-gray-100 text-gray-600 cursor-not-allowed text-sm"
                              />
                            </td>
                          </React.Fragment>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={addPlacementRow}
                    className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                  >
                    + Add more rows
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Placement, Higher Education, and Entrepreneurship Summary</h2>
              <p className="text-teal-100">N = Total Students (intake + lateral entry), X = A + B + C, % of Y = X / N</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 bg-gray-50">Department</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-blue-50">25-26 N</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-blue-50">25-26 X</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-blue-50">25-26 % of Y</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-green-50">24-25 N</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-green-50">24-25 X</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-green-50">24-25 % of Y</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-yellow-50">23-24 N</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-yellow-50">23-24 X</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900 bg-yellow-50">23-24 % of Y</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placementSummaryData.map(row => (
                      <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-2 text-center font-medium text-gray-900">{row.id}</td>
                        <td className="py-3 px-4">
                          <input
                            type="text"
                            value={row.department}
                            onChange={(e) => setPlacementSummaryData(prev =>
                              prev.map(r => r.id === row.id ? { ...r, department: e.target.value } : r)
                            )}
                            placeholder="Enter department"
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                          />
                        </td>
                        {['25-26', '24-25', '23-24'].map(year => (
                          <React.Fragment key={year}>
                            <td className="py-3 px-2">
                              <input
                                type="number"
                                value={row[year].n}
                                onChange={(e) => handleSummaryChange(row.id, 'n', year, e.target.value)}
                                placeholder="Count"
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                              />
                            </td>
                            <td className="py-3 px-2">
                              <input
                                type="number"
                                value={row[year].x}
                                onChange={(e) => handleSummaryChange(row.id, 'x', year, e.target.value)}
                                placeholder="Count"
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 text-sm"
                              />
                            </td>
                            <td className="py-3 px-2">
                              <input
                                type="number"
                                value={calculateSummaryPercent(row[year].n, row[year].x)}
                                disabled
                                className="w-full px-2 py-1 border border-gray-300 rounded bg-gray-100 text-gray-600 cursor-not-allowed text-sm"
                              />
                            </td>
                          </React.Fragment>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={addSummaryRow}
                    className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                  >
                    + Add more rows
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Placement Salary Details</h2>
              <p className="text-teal-100">Salary details for the last three Academic Years.</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Particulars</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">24-25</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">23-24</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">22-23</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 1, particular: 'Highest salary' },
                      { id: 2, particular: 'Lowest salary' },
                      { id: 3, particular: 'Median salary' },
                      { id: 4, particular: 'Mean salary' },
                    ].map(item => (
                      <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 text-center font-medium text-gray-900">{item.id}</td>
                        <td className="py-4 px-6 font-medium text-gray-900">{item.particular}</td>
                        <td className="py-4 px-4">
                          <input
                            type="number"
                            placeholder="Enter amount in ₹"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <input
                            type="number"
                            placeholder="Enter amount in ₹"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <input
                            type="number"
                            placeholder="Enter amount in ₹"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Student Contact Details for Last Passed Out Batch</h2>
              <p className="text-teal-100">Provide contact details for the last passed out batch.</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Name and Department</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">E-Mail Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(10).keys()].map(num => (
                      <tr key={num + 1} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 text-center font-medium text-gray-900">{num + 1}</td>
                        <td className="py-4 px-6">
                          <input
                            type="text"
                            placeholder="Enter name and department"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                        <td className="py-4 px-6">
                          <input
                            type="email"
                            placeholder="Enter email address"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Number of Active MoUs</h2>
              <p className="text-teal-100">Provide the number of active Memorandums of Understanding.</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-gray-50">Year</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-gray-50">No. of Active MoUs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['24-25', '23-24', '22-23'].map(year => (
                      <tr key={year} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-gray-900">{year}</td>
                        <td className="py-4 px-6">
                          <input
                            type="number"
                            value={mouData[year]}
                            onChange={(e) => handleMouChange(year, e.target.value)}
                            placeholder="Enter count"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                      </tr>
                    ))}
                    <tr className="border-b-2 border-gray-300 bg-teal-50">
                      <td className="py-4 px-6 text-center font-bold text-gray-900">Total</td>
                      <td className="py-4 px-6">
                        <input
                          type="number"
                          value={mouTotal}
                          disabled
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Other Institutional Information</h2>
              <p className="text-teal-100">Provide additional institutional details.</p>
            </div>
            <div className="p-8 space-y-8">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">Is your institute implementing NEP 2020?</label>
                <div className="flex space-x-6">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="nep_yes"
                      name="nep"
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="nep_yes" className="text-gray-900 font-medium cursor-pointer">Yes</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="nep_no"
                      name="nep"
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="nep_no" className="text-gray-900 font-medium cursor-pointer">No</label>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">Is your institute implementing Multiple Entry & Multiple Exit Scheme?</label>
                <div className="flex space-x-6">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="meme_yes"
                      name="meme"
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="meme_yes" className="text-gray-900 font-medium cursor-pointer">Yes</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="meme_no"
                      name="meme"
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="meme_no" className="text-gray-900 font-medium cursor-pointer">No</label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Number of Inter-college competitions organized in the last AY (Techno cultural)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Number of Intra-college competitions organized in the last AY (Techno cultural)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Number of clubs/Societies available
                  </label>
                  <input
                    type="number"
                    placeholder="Enter number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Availability of Mentor-Mentee System (if yes, provide ratio)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter ratio (e.g., 1:20)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">Availability of Student Counsellor (Not in faculty roll)</label>
                <div className="flex space-x-6">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="counsellor_yes"
                      name="counsellor"
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="counsellor_yes" className="text-gray-900 font-medium cursor-pointer">Yes</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="counsellor_no"
                      name="counsellor"
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="counsellor_no" className="text-gray-900 font-medium cursor-pointer">No</label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Number of programs conducted for students/faculty (Yoga, Emotional Intelligence, Stress Management, Ethics)
                </label>
                <input
                  type="text"
                  placeholder="Enter number and link"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                />
              </div>

              <div className="border-t border-gray-200 pt-8">
                <label className="block text-sm font-semibold text-gray-900 mb-4">
                  Does your institute have MoUs with Foreign Universities?
                </label>
                <input
                  type="text"
                  placeholder="Enter link"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500 mb-6"
                />
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-center py-3 px-4 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                        <th className="text-left py-3 px-6 font-semibold text-gray-900 bg-gray-50">Name of the University</th>
                        <th className="text-left py-3 px-6 font-semibold text-gray-900 bg-gray-50">Name of the Country</th>
                        <th className="text-left py-3 px-6 font-semibold text-gray-900 bg-gray-50">Valid Upto</th>
                      </tr>
                    </thead>
                    <tbody>
                      {foreignMouData.map(row => (
                        <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-center font-medium text-gray-900">{row.id}</td>
                          <td className="py-3 px-6">
                            <input
                              type="text"
                              value={row.university}
                              onChange={(e) => handleForeignMouChange(row.id, 'university', e.target.value)}
                              placeholder="Enter university"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                            />
                          </td>
                          <td className="py-3 px-6">
                            <input
                              type="text"
                              value={row.country}
                              onChange={(e) => handleForeignMouChange(row.id, 'country', e.target.value)}
                              placeholder="Enter country"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                            />
                          </td>
                          <td className="py-3 px-6">
                            <input
                              type="date"
                              value={row.validUpto}
                              onChange={(e) => handleForeignMouChange(row.id, 'validUpto', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      onClick={addForeignMouRow}
                      className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                    >
                      + Add more rows
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">Availability of foreign language training to students</label>
                <div className="flex space-x-6 mb-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="language_yes"
                      name="language"
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="language_yes" className="text-gray-900 font-medium cursor-pointer">Yes</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="language_no"
                      name="language"
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="language_no" className="text-gray-900 font-medium cursor-pointer">No</label>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Enter link for certification details"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                />
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
                Back to Section B
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
                  "Save Section C"
                )}
              </button>
              {onNext && (
                <button
                  type="button"
                  className="flex items-center bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={handleNext}
                >
                  Continue to Section D
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

export default SectionC;