import React, { useState, useMemo } from 'react';
import { Search, Filter, Trophy, Award, Medal, ExternalLink, ChevronDown, TrendingUp, FileDown } from 'lucide-react';

const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState('engineering');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [scoreRange, setScoreRange] = useState('all');
  const [sortBy, setSortBy] = useState('rank');
  const [showFilters, setShowFilters] = useState(false);

  // Sample data
  const engineeringColleges = [
    { rank: 1, name: 'IIT Madras', state: 'Tamil Nadu', score: 98.5, website: 'https://www.iitm.ac.in' },
    { rank: 2, name: 'IIT Delhi', state: 'Delhi', score: 97.8, website: 'https://www.iitd.ac.in' },
    { rank: 3, name: 'IIT Bombay', state: 'Maharashtra', score: 97.2, website: 'https://www.iitb.ac.in' },
    { rank: 4, name: 'IIT Kanpur', state: 'Uttar Pradesh', score: 95.6, website: 'https://www.iitk.ac.in' },
    { rank: 5, name: 'IIT Kharagpur', state: 'West Bengal', score: 94.8, website: 'https://www.iitkgp.ac.in' },
    { rank: 6, name: 'NIT Trichy', state: 'Tamil Nadu', score: 92.3, website: 'https://www.nitt.edu' },
    { rank: 7, name: 'BITS Pilani', state: 'Rajasthan', score: 91.7, website: 'https://www.bits-pilani.ac.in' },
    { rank: 8, name: 'IIT Roorkee', state: 'Uttarakhand', score: 90.5, website: 'https://www.iitr.ac.in' },
    { rank: 9, name: 'IIT Guwahati', state: 'Assam', score: 89.2, website: 'https://www.iitg.ac.in' },
    { rank: 10, name: 'Anna University', state: 'Tamil Nadu', score: 87.6, website: 'https://www.annauniv.edu' },
  ];

  const artsColleges = [
    { rank: 1, name: 'St. Stephen\'s College', state: 'Delhi', score: 96.8, website: 'https://www.ststephens.edu' },
    { rank: 2, name: 'Loyola College', state: 'Tamil Nadu', score: 95.2, website: 'https://www.loyolacollege.edu' },
    { rank: 3, name: 'St. Xavier\'s College Mumbai', state: 'Maharashtra', score: 94.5, website: 'https://www.xaviers.edu' },
    { rank: 4, name: 'Miranda House', state: 'Delhi', score: 93.7, website: 'https://www.mirandahouse.ac.in' },
    { rank: 5, name: 'Lady Shri Ram College', state: 'Delhi', score: 92.9, website: 'https://www.lsr.edu.in' },
    { rank: 6, name: 'Hindu College', state: 'Delhi', score: 91.4, website: 'https://www.hinducollege.ac.in' },
    { rank: 7, name: 'Presidency College', state: 'Tamil Nadu', score: 90.2, website: 'https://www.presidencychennai.ac.in' },
    { rank: 8, name: 'Christ University', state: 'Karnataka', score: 89.6, website: 'https://www.christuniversity.in' },
    { rank: 9, name: 'Madras Christian College', state: 'Tamil Nadu', score: 88.3, website: 'https://www.mcc.edu.in' },
    { rank: 10, name: 'Fergusson College', state: 'Maharashtra', score: 87.1, website: 'https://www.fergusson.edu' },
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
      
      let matchesScore = true;
      if (scoreRange === '90+') matchesScore = college.score >= 90;
      else if (scoreRange === '80-90') matchesScore = college.score >= 80 && college.score < 90;
      else if (scoreRange === '70-80') matchesScore = college.score >= 70 && college.score < 80;
      else if (scoreRange === '<70') matchesScore = college.score < 70;

      return matchesSearch && matchesState && matchesScore;
    });

    if (sortBy === 'rank') {
      filtered.sort((a, b) => a.rank - b.rank);
    } else if (sortBy === 'score') {
      filtered.sort((a, b) => b.score - a.score);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [currentData, searchQuery, selectedState, scoreRange, sortBy]);

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-amber-500" />;
    if (rank === 2) return <Award className="w-5 h-5 text-slate-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-700" />;
    return null;
  };

  const getRankStyle = (rank) => {
    if (rank === 1) return 'bg-amber-50 border-l-4 border-amber-500';
    if (rank === 2) return 'bg-slate-50 border-l-4 border-slate-400';
    if (rank === 3) return 'bg-amber-50 border-l-4 border-amber-700';
    return 'hover:bg-gray-50';
  };

  const getScoreColor = (score) => {
    if (score >= 95) return 'text-teal-700';
    if (score >= 90) return 'text-teal-600';
    if (score >= 85) return 'text-teal-500';
    return 'text-slate-600';
  };

  const handleExportPDF = () => {
    // PDF export functionality
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

              {/* Score Range Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Score Range</label>
                <select
                  value={scoreRange}
                  onChange={(e) => setScoreRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-700"
                >
                  <option value="all">All Scores</option>
                  <option value="90+">90 and Above</option>
                  <option value="80-90">80 - 90</option>
                  <option value="70-80">70 - 80</option>
                  <option value="<70">Below 70</option>
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
                  <option value="rank">Rank</option>
                  <option value="score">Score (High to Low)</option>
                  <option value="name">Name (A-Z)</option>
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
                  <th className="px-6 py-4 text-left font-semibold">Rank</th>
                  <th className="px-6 py-4 text-left font-semibold">College Name</th>
                  <th className="px-6 py-4 text-left font-semibold">State</th>
                  <th className="px-6 py-4 text-left font-semibold">Score</th>
                  <th className="px-6 py-4 text-left font-semibold">Website</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((college) => (
                    <tr key={college.rank} className={getRankStyle(college.rank)}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {getRankIcon(college.rank)}
                          <span className="font-semibold text-slate-800">#{college.rank}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-800">{college.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-slate-600">{college.state}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp className={`w-4 h-4 ${getScoreColor(college.score)}`} />
                          <span className={`font-semibold ${getScoreColor(college.score)}`}>
                            {college.score}
                          </span>
                        </div>
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