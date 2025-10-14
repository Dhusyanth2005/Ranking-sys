import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, ExternalLink, FileDown } from 'lucide-react';

const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState('engineering');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [bandFilter, setBandFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  // Sample data
  const engineeringColleges = [
    { name: 'IIT Madras', state: 'Tamil Nadu', band: 'A++', website: 'https://www.iitm.ac.in' },
    { name: 'IIT Delhi', state: 'Delhi', band: 'A++', website: 'https://www.iitd.ac.in' },
    { name: 'IIT Bombay', state: 'Maharashtra', band: 'A++', website: 'https://www.iitb.ac.in' },
    { name: 'IIT Kanpur', state: 'Uttar Pradesh', band: 'A+', website: 'https://www.iitk.ac.in' },
    { name: 'IIT Kharagpur', state: 'West Bengal', band: 'A+', website: 'https://www.iitkgp.ac.in' },
    { name: 'NIT Trichy', state: 'Tamil Nadu', band: 'A+', website: 'https://www.nitt.edu' },
    { name: 'BITS Pilani', state: 'Rajasthan', band: 'A+', website: 'https://www.bits-pilani.ac.in' },
    { name: 'IIT Roorkee', state: 'Uttarakhand', band: 'A', website: 'https://www.iitr.ac.in' },
    { name: 'IIT Guwahati', state: 'Assam', band: 'A', website: 'https://www.iitg.ac.in' },
    { name: 'Anna University', state: 'Tamil Nadu', band: 'A', website: 'https://www.annauniv.edu' },
  ];

  const artsColleges = [
    { name: 'St. Stephen\'s College', state: 'Delhi', band: 'A++', website: 'https://www.ststephens.edu' },
    { name: 'Loyola College', state: 'Tamil Nadu', band: 'A++', website: 'https://www.loyolacollege.edu' },
    { name: 'St. Xavier\'s College Mumbai', state: 'Maharashtra', band: 'A++', website: 'https://www.xaviers.edu' },
    { name: 'Miranda House', state: 'Delhi', band: 'A+', website: 'https://www.mirandahouse.ac.in' },
    { name: 'Lady Shri Ram College', state: 'Delhi', band: 'A+', website: 'https://www.lsr.edu.in' },
    { name: 'Hindu College', state: 'Delhi', band: 'A+', website: 'https://www.hinducollege.ac.in' },
    { name: 'Presidency College', state: 'Tamil Nadu', band: 'A', website: 'https://www.presidencychennai.ac.in' },
    { name: 'Christ University', state: 'Karnataka', band: 'A', website: 'https://www.christuniversity.in' },
    { name: 'Madras Christian College', state: 'Tamil Nadu', band: 'A', website: 'https://www.mcc.edu.in' },
    { name: 'Fergusson College', state: 'Maharashtra', band: 'A', website: 'https://www.fergusson.edu' },
  ];

  const currentData = activeTab === 'engineering' ? engineeringColleges : artsColleges;

  // Get unique states
  const states = useMemo(() => {
    const stateSet = new Set(currentData.map(college => college.state));
    return ['all', ...Array.from(stateSet)].sort();
  }, [currentData]);

  // Filter and sort data
  const filteredData = useMemo(() => {
    let filtered = currentData.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          college.state.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesState = selectedState === 'all' || college.state === selectedState;
      const matchesBand = bandFilter === 'all' || college.band === bandFilter;

      return matchesSearch && matchesState && matchesBand;
    });

    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'state') {
      filtered.sort((a, b) => a.state.localeCompare(b.state));
    } else if (sortBy === 'band') {
      const bandOrder = { 'A++': 3, 'A+': 2, 'A': 1 };
      filtered.sort((a, b) => bandOrder[b.band] - bandOrder[a.band]);
    }

    return filtered;
  }, [currentData, searchQuery, selectedState, bandFilter, sortBy]);

  const getBandStyle = (band) => {
    if (band === 'A++') return 'text-yellow-500 font-bold';
    if (band === 'A+') return 'text-slate-500 font-bold';
    if (band === 'A') return 'text-amber-700 font-bold';
    return 'text-gray-700 font-bold';
  };

  const handleExportPDF = () => {
    alert('Exporting leaderboard as PDF...\nThis will generate a PDF with the current filtered results.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
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
                placeholder="Search colleges or states..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-700"
              />
            </div>

            {/* Export PDF Button */}
            <button
              onClick={handleExportPDF}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors"
            >
              <FileDown className="w-5 h-5" />
              Export PDF
            </button>

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              {/* State Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-700"
                >
                  {states.map(state => (
                    <option key={state} value={state}>
                      {state === 'all' ? 'All States' : state}
                    </option>
                  ))}
                </select>
              </div>

              {/* Band Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Band</label>
                <select
                  value={bandFilter}
                  onChange={(e) => setBandFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-700"
                >
                  <option value="all">All Bands</option>
                  <option value="A++">A++ (Highest)</option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-700"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="state">State (A-Z)</option>
                  <option value="band">Band (High to Low)</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-4 text-slate-600 font-medium">
          Showing {filteredData.length} of {currentData.length} colleges
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">S.No</th>
                  <th className="px-6 py-4 text-left font-semibold">College Name</th>
                  <th className="px-6 py-4 text-left font-semibold">State</th>
                  <th className="px-6 py-4 text-left font-semibold">Band</th>
                  <th className="px-6 py-4 text-left font-semibold">Website</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((college, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <span className="font-semibold text-slate-800">{index + 1}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-800">{college.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-slate-600">{college.state}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-lg ${getBandStyle(college.band)}`}>
                          {college.band}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={college.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 font-medium"
                        >
                          Visit
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Search className="w-12 h-12 text-gray-300" />
                        <p className="text-lg font-medium text-slate-700">No colleges found</p>
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

export default LeaderboardPage;