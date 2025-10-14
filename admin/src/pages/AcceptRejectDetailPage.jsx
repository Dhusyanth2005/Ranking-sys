import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, Calendar, CheckCircle, XCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

const AcceptRejectDetailPage = () => {
  const [activeTab, setActiveTab] = useState('engineering');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const years = ['2025', '2024', '2023', '2022', '2021'];

  // Sample data for Engineering colleges
  const engineeringSubmissions = [
    { id: 'ENG001', collegeName: 'IIT Madras', isAccepted: true, isPaid: true, submittedAt: '2025-03-15 10:30 AM', year: '2025' },
    { id: 'ENG002', collegeName: 'IIT Delhi', isAccepted: true, isPaid: true, submittedAt: '2025-03-14 02:45 PM', year: '2025' },
    { id: 'ENG003', collegeName: 'IIT Bombay', isAccepted: false, isPaid: false, submittedAt: '2025-03-13 11:20 AM', year: '2025' },
    { id: 'ENG004', collegeName: 'IIT Kanpur', isAccepted: true, isPaid: true, submittedAt: '2025-03-12 09:15 AM', year: '2025' },
    { id: 'ENG005', collegeName: 'NIT Trichy', isAccepted: false, isPaid: false, submittedAt: '2025-03-11 04:30 PM', year: '2025' },
    { id: 'ENG006', collegeName: 'BITS Pilani', isAccepted: true, isPaid: true, submittedAt: '2025-03-10 01:00 PM', year: '2025' },
    { id: 'ENG007', collegeName: 'IIT Kharagpur', isAccepted: true, isPaid: true, submittedAt: '2024-03-09 03:45 PM', year: '2024' },
    { id: 'ENG008', collegeName: 'NIT Warangal', isAccepted: false, isPaid: false, submittedAt: '2024-03-08 10:20 AM', year: '2024' },
    { id: 'ENG009', collegeName: 'Anna University', isAccepted: true, isPaid: true, submittedAt: '2024-03-07 02:30 PM', year: '2024' },
    { id: 'ENG010', collegeName: 'VIT Vellore', isAccepted: false, isPaid: true, submittedAt: '2024-03-06 11:45 AM', year: '2024' },
    { id: 'ENG011', collegeName: 'SRM University', isAccepted: true, isPaid: false, submittedAt: '2023-03-15 09:30 AM', year: '2023' },
    { id: 'ENG012', collegeName: 'Amrita University', isAccepted: false, isPaid: false, submittedAt: '2023-03-14 01:20 PM', year: '2023' },
  ];

  // Sample data for Arts & Science colleges
  const artsSubmissions = [
    { id: 'ART001', collegeName: 'St. Stephen\'s College', isAccepted: true, isPaid: true, submittedAt: '2025-03-15 09:00 AM', year: '2025' },
    { id: 'ART002', collegeName: 'Loyola College', isAccepted: true, isPaid: true, submittedAt: '2025-03-14 03:20 PM', year: '2025' },
    { id: 'ART003', collegeName: 'St. Xavier\'s College Mumbai', isAccepted: false, isPaid: false, submittedAt: '2025-03-13 10:15 AM', year: '2025' },
    { id: 'ART004', collegeName: 'Miranda House', isAccepted: true, isPaid: true, submittedAt: '2025-03-12 01:45 PM', year: '2025' },
    { id: 'ART005', collegeName: 'Lady Shri Ram College', isAccepted: false, isPaid: true, submittedAt: '2025-03-11 11:30 AM', year: '2025' },
    { id: 'ART006', collegeName: 'Hindu College', isAccepted: true, isPaid: true, submittedAt: '2024-03-10 04:00 PM', year: '2024' },
    { id: 'ART007', collegeName: 'Presidency College', isAccepted: true, isPaid: false, submittedAt: '2024-03-09 09:30 AM', year: '2024' },
    { id: 'ART008', collegeName: 'Christ University', isAccepted: false, isPaid: false, submittedAt: '2024-03-08 02:15 PM', year: '2024' },
    { id: 'ART009', collegeName: 'Madras Christian College', isAccepted: true, isPaid: true, submittedAt: '2023-03-07 10:45 AM', year: '2023' },
    { id: 'ART010', collegeName: 'Fergusson College', isAccepted: false, isPaid: false, submittedAt: '2023-03-06 03:30 PM', year: '2023' },
  ];

  const currentData = activeTab === 'engineering' ? engineeringSubmissions : artsSubmissions;

  // Filter data by year, search, and status
  const filteredData = useMemo(() => {
    let filtered = currentData.filter(submission => {
      const matchesYear = submission.year === selectedYear;
      
      const matchesSearch = submission.collegeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          submission.id.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesStatus = true;
      if (statusFilter === 'accepted') matchesStatus = submission.isAccepted;
      else if (statusFilter === 'rejected') matchesStatus = !submission.isAccepted;

      return matchesYear && matchesSearch && matchesStatus;
    });

    return filtered;
  }, [currentData, selectedYear, searchQuery, statusFilter]);

  const getStats = () => {
    const yearData = currentData.filter(s => s.year === selectedYear);
    const total = yearData.length;
    const accepted = yearData.filter(s => s.isAccepted).length;
    const rejected = total - accepted;
    const paid = yearData.filter(s => s.isPaid).length;
    const notPaid = total - paid;
    return { total, accepted, rejected, paid, notPaid };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-slate-800">
              Accept & Reject Detail for {selectedYear}
            </h1>
            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-700 font-medium bg-white"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <p className="text-slate-600">Review acceptance and rejection status of college submissions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total Submissions</p>
                <p className="text-2xl font-bold text-slate-800">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Filter className="w-6 h-6 text-teal-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Accepted</p>
                <p className="text-2xl font-bold text-green-600">{stats.accepted}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <ThumbsUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Rejected</p>
                <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <ThumbsDown className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('engineering')}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
              activeTab === 'engineering'
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Engineering Colleges
          </button>
          <button
            onClick={() => setActiveTab('arts')}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
              activeTab === 'arts'
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Arts & Science Colleges
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by college name or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-700"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-slate-700 font-medium"
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Status</label>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setStatusFilter('all')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      statusFilter === 'all'
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setStatusFilter('accepted')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      statusFilter === 'accepted'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                    }`}
                  >
                    Accepted
                  </button>
                  <button
                    onClick={() => setStatusFilter('rejected')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      statusFilter === 'rejected'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                    }`}
                  >
                    Rejected
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-4 text-slate-600 font-medium">
          Showing {filteredData.length} of {currentData.filter(s => s.year === selectedYear).length} submissions for {selectedYear}
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">S.No</th>
                  <th className="px-6 py-4 text-left font-semibold">College Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                  <th className="px-6 py-4 text-left font-semibold">Payment Status</th>
                  <th className="px-6 py-4 text-left font-semibold">Submitted At</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((submission, index) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-800">{index + 1}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-slate-800">{submission.collegeName}</p>
                          <p className="text-sm text-slate-500">ID: {submission.id}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {submission.isAccepted ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            <ThumbsUp className="w-4 h-4" />
                            Accepted
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                            <ThumbsDown className="w-4 h-4" />
                            Rejected
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {submission.isPaid ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            <CheckCircle className="w-4 h-4" />
                            Paid
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                            <XCircle className="w-4 h-4" />
                            Not Paid
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{submission.submittedAt}</span>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Search className="w-12 h-12 text-gray-300" />
                        <p className="text-lg font-medium text-slate-700">No submissions found</p>
                        <p className="text-sm text-slate-500">Try adjusting your filters or search query</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptRejectDetailPage;