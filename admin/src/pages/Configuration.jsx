import React, { useState } from 'react';
import { Calendar, Settings, Save, X, Plus, Trash2 } from 'lucide-react';

const Configuration = () => {
  const [applicationDates, setApplicationDates] = useState({
    openDate: '2025-01-15',
    closeDate: '2025-06-30'
  });

  const [paymentConfig, setPaymentConfig] = useState({
    upiId: '',
    amount: ''
  });

  const [yearConfigs, setYearConfigs] = useState([
    { id: 1, year: 2024 },
    { id: 2, year: 2025 }
  ]);

  const [newYear, setNewYear] = useState({
    year: new Date().getFullYear() + 1
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteYearId, setDeleteYearId] = useState(null);
  const [editingConfig, setEditingConfig] = useState(null);

  const handleDateChange = (field, value) => {
    setApplicationDates(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePaymentChange = (field, value) => {
    setPaymentConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddYear = () => {
    if (newYear.year) {
      setYearConfigs(prev => [...prev, {
        id: Date.now(),
        year: newYear.year
      }]);
      setNewYear({
        year: new Date().getFullYear() + 1
      });
      setShowAddModal(false);
    }
  };

  const handleDeleteYear = (id) => {
    setDeleteYearId(id);
    setShowDeleteModal(true);
  };

  const confirmDeleteYear = () => {
    setYearConfigs(prev => prev.filter(config => config.id !== deleteYearId));
    setShowDeleteModal(false);
    setDeleteYearId(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-5">
      <div className="max-w-8xl mx-auto">
        
        {/* Application Dates Section */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="text-teal-600" size={28} />
            <h2 className="text-2xl font-bold text-slate-900">Application Dates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Open Date */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Application Open Date
              </label>
              <input
                type="date"
                value={applicationDates.openDate}
                onChange={(e) => handleDateChange('openDate', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <p className="text-sm text-slate-600 mt-2">
                Applications will open on <span className="font-semibold text-slate-900">{new Date(applicationDates.openDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </p>
            </div>

            {/* Close Date */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Application Close Date
              </label>
              <input
                type="date"
                value={applicationDates.closeDate}
                onChange={(e) => handleDateChange('closeDate', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <p className="text-sm text-slate-600 mt-2">
                Applications will close on <span className="font-semibold text-slate-900">{new Date(applicationDates.closeDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
            <p className="text-sm text-teal-900">
              <span className="font-semibold">Application Duration:</span> {Math.ceil((new Date(applicationDates.closeDate) - new Date(applicationDates.openDate)) / (1000 * 60 * 60 * 24))} days
            </p>
          </div>

          <button className="mt-6 flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold">
            <Save size={20} />
            Save Application Dates
          </button>
        </div>

        {/* Payment Configuration Section */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Settings className="text-teal-600" size={28} />
            <h2 className="text-2xl font-bold text-slate-900">Payment Configuration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* UPI ID */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                UPI ID
              </label>
              <input
                type="text"
                value={paymentConfig.upiId}
                onChange={(e) => handlePaymentChange('upiId', e.target.value)}
                placeholder="example@upi"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <p className="text-sm text-slate-600 mt-2">
                Enter the UPI ID for payment collection
              </p>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Amount (₹)
              </label>
              <input
                type="number"
                value={paymentConfig.amount}
                onChange={(e) => handlePaymentChange('amount', e.target.value)}
                placeholder="0"
                min="0"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <p className="text-sm text-slate-600 mt-2">
                Application fee amount in Indian Rupees
              </p>
            </div>
          </div>

          {paymentConfig.upiId && paymentConfig.amount && (
            <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
              <p className="text-sm text-teal-900">
                <span className="font-semibold">Payment Summary:</span> ₹{paymentConfig.amount} will be collected via UPI ID: {paymentConfig.upiId}
              </p>
            </div>
          )}

          <button className="mt-6 flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold">
            <Save size={20} />
            Save Payment Configuration
          </button>
        </div>

        {/* Academic Year Configuration Section */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="text-teal-600" size={28} />
              <h2 className="text-2xl font-bold text-slate-900">Academic Year Configuration</h2>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow font-semibold"
            >
              <Plus size={20} />
              Add Year
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Submission Year</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {yearConfigs.map((config) => (
                  <tr key={config.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4">
                      <span className="text-lg font-semibold text-slate-900">{config.year}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => handleDeleteYear(config.id)}
                        className="inline-flex items-center gap-1 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium text-sm"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Year Modal */}
        {showAddModal && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}>
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Add New Academic Year</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X size={24} className="text-slate-600" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Submission Year
                  </label>
                  <input
                    type="number"
                    value={newYear.year}
                    onChange={(e) => setNewYear(prev => ({ ...prev, year: parseInt(e.target.value) }))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddYear}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-shadow font-semibold"
                >
                  Add Year
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}>
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Confirm Deletion</h3>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X size={24} className="text-slate-600" />
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-slate-600">
                  Are you sure you want to delete the academic year{' '}
                  <span className="font-semibold text-slate-900">
                    {yearConfigs.find(config => config.id === deleteYearId)?.year}
                  </span>?
                  This action cannot be undone.
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDeleteYear}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Configuration;