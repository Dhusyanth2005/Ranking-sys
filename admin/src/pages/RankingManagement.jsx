import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, Eye, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

const RankManagementPage = () => {
  const [activeTab, setActiveTab] = useState('engineering');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Sample data for Engineering colleges
  const engineeringSubmissions = [
    { id: 'ENG001', collegeName: 'IIT Madras', status: 'accepted', submittedAt: '2025-03-15 10:30 AM' },
    { id: 'ENG002', collegeName: 'IIT Delhi', status: 'accepted', submittedAt: '2025-03-14 02:45 PM' },
    { id: 'ENG003', collegeName: 'IIT Bombay', status: 'pending', submittedAt: '2025-03-13 11:20 AM' },
    { id: 'ENG004', collegeName: 'IIT Kanpur', status: 'accepted', submittedAt: '2025-03-12 09:15 AM' },
    { id: 'ENG005', collegeName: 'NIT Trichy', status: 'rejected', submittedAt: '2025-03-11 04:30 PM' },
    { id: 'ENG006', collegeName: 'BITS Pilani', status: 'accepted', submittedAt: '2025-03-10 01:00 PM' },
    { id: 'ENG007', collegeName: 'IIT Kharagpur', status: 'accepted', submittedAt: '2025-03-09 03:45 PM' },
    { id: 'ENG008', collegeName: 'NIT Warangal', status: 'pending', submittedAt: '2025-03-08 10:20 AM' },
    { id: 'ENG009', collegeName: 'Anna University', status: 'accepted', submittedAt: '2025-03-07 02:30 PM' },
    { id: 'ENG010', collegeName: 'VIT Vellore', status: 'rejected', submittedAt: '2025-03-06 11:45 AM' },
  ];

  // Sample data for Arts & Science colleges
  const artsSubmissions = [
    { id: 'ART001', collegeName: 'St. Stephen\'s College', status: 'accepted', submittedAt: '2025-03-15 09:00 AM' },
    { id: 'ART002', collegeName: 'Loyola College', status: 'accepted', submittedAt: '2025-03-14 03:20 PM' },
    { id: 'ART003', collegeName: 'St. Xavier\'s College Mumbai', status: 'pending', submittedAt: '2025-03-13 10:15 AM' },
    { id: 'ART004', collegeName: 'Miranda House', status: 'accepted', submittedAt: '2025-03-12 01:45 PM' },
    { id: 'ART005', collegeName: 'Lady Shri Ram College', status: 'rejected', submittedAt: '2025-03-11 11:30 AM' },
    { id: 'ART006', collegeName: 'Hindu College', status: 'accepted', submittedAt: '2025-03-10 04:00 PM' },
    { id: 'ART007', collegeName: 'Presidency College', status: 'accepted', submittedAt: '2025-03-09 09:30 AM' },
    { id: 'ART008', collegeName: 'Christ University', status: 'pending', submittedAt: '2025-03-08 02:15 PM' },
    { id: 'ART009', collegeName: 'Madras Christian College', status: 'accepted', submittedAt: '2025-03-07 10:45 AM' },
  ];

  const currentData = activeTab === 'engineering' ? engineeringSubmissions : artsSubmissions;

  // Filter and search data
  const filteredData = useMemo(() => {
    let filtered = currentData.filter(submission => {
      const matchesSearch = submission.collegeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          submission.id.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesStatus = true;
      if (statusFilter !== 'all') matchesStatus = submission.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    return filtered;
  }, [currentData, searchQuery, statusFilter]);

  const handleViewDetail = (id) => {
    alert(`Viewing details for ${id}`);
  };

  const getStatusStats = () => {
    const total = currentData.length;
    const accepted = currentData.filter(s => s.status === 'accepted').length;
    const rejected = currentData.filter(s => s.status === 'rejected').length;
    const pending = currentData.filter(s => s.status === 'pending').length;
    return { total, accepted, rejected, pending };
  };

  const stats = getStatusStats();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-slate-600">Manage and review college ranking submissions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
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
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
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
                <XCircle className="w-6 h-6 text-red-600" />
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
                    onClick={() => setStatusFilter('pending')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      statusFilter === 'pending'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                    }`}
                  >
                    Pending
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
          Showing {filteredData.length} of {currentData.length} submissions
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
                  <th className="px-6 py-4 text-left font-semibold">Submitted At</th>
                  <th className="px-6 py-4 text-left font-semibold">Action</th>
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
                        {submission.status === 'accepted' && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            <CheckCircle className="w-4 h-4" />
                            Accepted
                          </span>
                        )}
                        {submission.status === 'pending' && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                            <Clock className="w-4 h-4" />
                            Pending
                          </span>
                        )}
                        {submission.status === 'rejected' && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                            <XCircle className="w-4 h-4" />
                            Rejected
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{submission.submittedAt}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleViewDetail(submission.id)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
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

export default RankManagementPage;