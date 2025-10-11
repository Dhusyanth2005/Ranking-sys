import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react";

const SectionD = ({ formData = {}, setFormData, onNext, onBack }) => {
  const [loading, setLoading] = useState(false);

  const initialDeptLibraryData = [
    { id: 1, department: '', volumes: '' },
    { id: 2, department: '', volumes: '' },
    { id: 3, department: '', volumes: '' },
    { id: 4, department: '', volumes: '' },
    { id: 5, department: '', volumes: '' },
  ];

  const initialSportsData = [
    { id: 1, particular: 'Cricket Ground', area: '' },
    { id: 2, particular: 'Volley Ball Court', area: '' },
    { id: 3, particular: 'Basket Ball Court', area: '' },
  ];

  const [deptLibraryData, setDeptLibraryData] = useState(initialDeptLibraryData);
  const [sportsData, setSportsData] = useState(initialSportsData);
  const [hostelData, setHostelData] = useState({
    boys: { rooms: '', capacity: '', occupied: '' },
    girls: { rooms: '', capacity: '', occupied: '' },
  });

  // Calculate hostel totals
  const calculateHostelTotals = () => {
    return {
      rooms: (Number(hostelData.boys.rooms) || 0) + (Number(hostelData.girls.rooms) || 0),
      capacity: (Number(hostelData.boys.capacity) || 0) + (Number(hostelData.girls.capacity) || 0),
      occupied: (Number(hostelData.boys.occupied) || 0) + (Number(hostelData.girls.occupied) || 0),
    };
  };

  const hostelTotals = calculateHostelTotals();

  // Handlers
  const handleDeptLibraryChange = (id, field, value) => {
    setDeptLibraryData(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const addDeptLibraryRow = () => {
    const newId = Math.max(...deptLibraryData.map(row => row.id), 0) + 1;
    setDeptLibraryData(prev => [...prev, { id: newId, department: '', volumes: '' }]);
  };

  const removeDeptLibraryRow = () => {
    setDeptLibraryData(prev => prev.slice(0, -1));
  };

  const handleSportsChange = (id, field, value) => {
    setSportsData(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const addSportsRow = () => {
    const newId = Math.max(...sportsData.map(row => row.id), 0) + 1;
    setSportsData(prev => [...prev, { id: newId, particular: '', area: '' }]);
  };

  const removeSportsRow = () => {
    setSportsData(prev => prev.slice(0, -1));
  };

  const handleHostelChange = (gender, field, value) => {
    setHostelData(prev => ({
      ...prev,
      [gender]: { ...prev[gender], [field]: value },
    }));
  };

  // Update formData
  useEffect(() => {
    setFormData({
      ...formData,
      deptLibrary: deptLibraryData,
      sports: sportsData,
      hostel: hostelData,
    });
  }, [deptLibraryData, sportsData, hostelData, setFormData]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Section D submitted successfully");
    } catch (error) {
      alert("Failed to submit Section D");
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
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Section D: Infrastructure
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Provide detailed information about the institute's infrastructure, including campus facilities, library, hostels, and more.
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
              <h2 className="text-2xl font-bold text-white mb-2">General Infrastructure Details</h2>
              <p className="text-teal-100">Provide details about campus area, facilities, and services.</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Campus area (in sq. Feet)</label>
                  <input type="number" placeholder="Enter area" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Total built-up area (in sq. Feet)</label>
                  <input type="number" placeholder="Enter area" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">No. of Classrooms</label>
                  <input type="number" placeholder="Enter number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">No. of Laboratories</label>
                  <input type="number" placeholder="Enter number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">No. of Faculty cabins</label>
                  <input type="number" placeholder="Enter number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">No. of Conference/Discussion halls</label>
                  <input type="number" placeholder="Enter number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">No. of Auditoriums</label>
                  <input type="number" placeholder="Enter number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Student computer ratio</label>
                  <input type="text" placeholder="Enter ratio (e.g., 1:10)" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Availability of STP Plant</label>
                  <div className="flex items-center space-x-6 mb-3">
                    <label className="flex items-center">
                      <input type="radio" name="stp" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="stp" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                  <input type="text" placeholder="Enter per day outcome" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Does your institute have MoU for Waste disposal?</label>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center">
                      <input type="radio" name="waste" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="waste" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Does the institute have NSS?</label>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center">
                      <input type="radio" name="nss" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="nss" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Does the institute have NCC?</label>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center">
                      <input type="radio" name="ncc" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="ncc" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">List the cells/committees available (Anti-Ragging, ICC, etc.)</label>
                  <input type="text" placeholder="Enter link" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Does the institute have ATM?</label>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center">
                      <input type="radio" name="atm" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="atm" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Does the institute have Wi-Fi?</label>
                  <div className="flex items-center space-x-6 mb-3">
                    <label className="flex items-center">
                      <input type="radio" name="wifi" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="wifi" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                  <input type="text" placeholder="Enter specifications" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Is your institute having IQAC?</label>
                  <div className="flex items-center space-x-6 mb-3">
                    <label className="flex items-center">
                      <input type="radio" name="iqac" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="iqac" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                  <input type="text" placeholder="Enter date of establishment" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Library Details</h2>
              <p className="text-teal-100">Provide details about the central and department libraries.</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Central Library (in sq. Feet)</label>
                  <input type="number" placeholder="Enter area" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">No. of Volumes (Books)</label>
                  <input type="number" placeholder="Enter number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">No. of books added in last three years</label>
                  <input type="number" placeholder="Enter number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">No. of national & international journals (Printed)</label>
                  <input type="number" placeholder="Enter number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">No. of national & international journals (Online)</label>
                  <input type="number" placeholder="Enter number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Average number of Faculty visits per month</label>
                  <input type="number" placeholder="Enter number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Average number of Students visits per month</label>
                  <input type="number" placeholder="Enter number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Availability of Digital Library</label>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center">
                      <input type="radio" name="digital_library" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="digital_library" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Availability of Department Library</label>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center">
                    <input type="radio" name="dept_library" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                    <span className="ml-2 text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="dept_library" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                    <span className="ml-2 text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Name of the Department</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">No. of Volumes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deptLibraryData.map(row => (
                      <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 text-center font-medium text-gray-900">{row.id}</td>
                        <td className="py-4 px-6">
                          <input
                            type="text"
                            value={row.department}
                            onChange={(e) => handleDeptLibraryChange(row.id, 'department', e.target.value)}
                            placeholder="Enter department"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <input
                            type="number"
                            value={row.volumes}
                            onChange={(e) => handleDeptLibraryChange(row.id, 'volumes', e.target.value)}
                            placeholder="Enter number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 flex justify-center space-x-4">
                  <button
                    type="button"
                    onClick={addDeptLibraryRow}
                    className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                  >
                    + Add more rows if required
                  </button>
                  {deptLibraryData.length > initialDeptLibraryData.length && (
                    <button
                      type="button"
                      onClick={removeDeptLibraryRow}
                      className="text-red-600 hover:text-red-700 font-medium transition-colors"
                    >
                      - Remove last row
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Availability of Hostel</h2>
              <p className="text-teal-100">Provide details about hostel facilities.</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Hostel Details</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">No. of Rooms</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Capacity</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Occupied</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-center font-medium text-gray-900">1</td>
                      <td className="py-4 px-6 font-medium text-gray-900">Boys</td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={hostelData.boys.rooms}
                          onChange={(e) => handleHostelChange('boys', 'rooms', e.target.value)}
                          placeholder="Enter number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={hostelData.boys.capacity}
                          onChange={(e) => handleHostelChange('boys', 'capacity', e.target.value)}
                          placeholder="Enter number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={hostelData.boys.occupied}
                          onChange={(e) => handleHostelChange('boys', 'occupied', e.target.value)}
                          placeholder="Enter number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-center font-medium text-gray-900">2</td>
                      <td className="py-4 px-6 font-medium text-gray-900">Girls</td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={hostelData.girls.rooms}
                          onChange={(e) => handleHostelChange('girls', 'rooms', e.target.value)}
                          placeholder="Enter number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={hostelData.girls.capacity}
                          onChange={(e) => handleHostelChange('girls', 'capacity', e.target.value)}
                          placeholder="Enter number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={hostelData.girls.occupied}
                          onChange={(e) => handleHostelChange('girls', 'occupied', e.target.value)}
                          placeholder="Enter number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                        />
                      </td>
                    </tr>
                    <tr className="border-b-2 border-gray-300 bg-teal-50">
                      <td className="py-4 px-4 text-center font-bold text-gray-900">3</td>
                      <td className="py-4 px-6 font-bold text-gray-900">Total</td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={hostelTotals.rooms}
                          disabled
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={hostelTotals.capacity}
                          disabled
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={hostelTotals.occupied}
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
              <h2 className="text-2xl font-bold text-white mb-2">Availability of Faculty Quarters</h2>
              <p className="text-teal-100">Provide details about faculty quarters (guest rooms not included).</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Quarters Details</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">No. of Quarters</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Occupied</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-center font-medium text-gray-900">1</td>
                      <td className="py-4 px-6">
                        <input type="text" placeholder="Enter details" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                      </td>
                      <td className="py-4 px-4">
                        <input type="number" placeholder="Enter number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                      </td>
                      <td className="py-4 px-4">
                        <input type="number" placeholder="Enter number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Availability of Guest Rooms / Common Rooms</h2>
              <p className="text-teal-100">Provide details about guest and common rooms for boys and girls.</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Particulars</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">No. of Rooms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-center font-medium text-gray-900">1</td>
                      <td className="py-4 px-6 font-medium text-gray-900">Guest rooms</td>
                      <td className="py-4 px-4">
                        <input type="number" placeholder="Enter number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-center font-medium text-gray-900">2</td>
                      <td className="py-4 px-6 font-medium text-gray-900">Common rooms for boys</td>
                      <td className="py-4 px-4">
                        <input type="number" placeholder="Enter number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-center font-medium text-gray-900">3</td>
                      <td className="py-4 px-6 font-medium text-gray-900">Common rooms for girls</td>
                      <td className="py-4 px-4">
                        <input type="number" placeholder="Enter number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Availability of Medical Facilities</h2>
              <p className="text-teal-100">Provide details about medical facilities available.</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Particulars</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Yes / No</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-center font-medium text-gray-900">1</td>
                      <td className="py-4 px-6 font-medium text-gray-900">Registered Medical Practitioner</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-center space-x-4">
                          <label className="flex items-center">
                            <input type="radio" name="medical_1" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                            <span className="ml-2 text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="medical_1" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                            <span className="ml-2 text-gray-700">No</span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-center font-medium text-gray-900">2</td>
                      <td className="py-4 px-6 font-medium text-gray-900">Nursing Assistant</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-center space-x-4">
                          <label className="flex items-center">
                            <input type="radio" name="medical_2" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                            <span className="ml-2 text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="medical_2" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                            <span className="ml-2 text-gray-700">No</span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-center font-medium text-gray-900">3</td>
                      <td className="py-4 px-6 font-medium text-gray-900">Emergency Medicines</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-center space-x-4">
                          <label className="flex items-center">
                            <input type="radio" name="medical_3" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                            <span className="ml-2 text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="medical_3" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                            <span className="ml-2 text-gray-700">No</span>
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Sustainability Initiatives</h2>
              <p className="text-teal-100">Provide details about solar power and sustainable development initiatives.</p>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Initiatives taken for solar power</label>
                  <div className="flex items-center space-x-6 mb-3">
                    <label className="flex items-center">
                      <input type="radio" name="solar" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="solar" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                  <input type="text" placeholder="Enter link" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Initiatives taken for Sustainable Development</label>
                  <div className="flex items-center space-x-6 mb-3">
                    <label className="flex items-center">
                      <input type="radio" name="sustainability" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="sustainability" className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                  <input type="text" placeholder="Enter link" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Availability of Sports Facilities</h2>
              <p className="text-teal-100">Provide details about sports facilities available.</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Sl.No</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 bg-gray-50">Particulars</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-gray-50">Area (in sq. Feet)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sportsData.map(row => (
                      <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 text-center font-medium text-gray-900">{row.id}</td>
                        <td className="py-4 px-6">
                          <input
                            type="text"
                            value={row.particular}
                            onChange={(e) => handleSportsChange(row.id, 'particular', e.target.value)}
                            placeholder="Enter particulars"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <input
                            type="number"
                            value={row.area}
                            onChange={(e) => handleSportsChange(row.id, 'area', e.target.value)}
                            placeholder="Enter area"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 flex justify-center space-x-4">
                  <button
                    type="button"
                    onClick={addSportsRow}
                    className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                  >
                    + Add more rows if required
                  </button>
                  {sportsData.length > initialSportsData.length && (
                    <button
                      type="button"
                      onClick={removeSportsRow}
                      className="text-red-600 hover:text-red-700 font-medium transition-colors"
                    >
                      - Remove last row
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8">
            {onBack && (
              <button type="button" className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2" onClick={handleBack}>
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back to Section C
              </button>
            )}
            
            <div className="flex space-x-4 ml-auto">
              <button type="button" className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" disabled={loading} onClick={handleSubmit}>
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Saving...
                  </div>
                ) : (
                  "Save Section D"
                )}
              </button>

              {onNext && (
                <button type="button" className="flex items-center bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={handleNext}>
                  Continue to Section E
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
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
  );
};

export default SectionD;