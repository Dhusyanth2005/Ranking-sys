import React, { useState } from 'react';
import { ExternalLink, FileText, Calendar, CheckCircle, Clock, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Submissions = () => {
  const navigate = useNavigate();
  
  // Sample submission data - replace with actual API data
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      year: '2024',
      submissionDate: '2024-03-15',
      status: 'Approved',
      institutionName: 'ABC Engineering College',
      score: 92.5
    },
    {
      id: 2,
      year: '2023',
      submissionDate: '2023-03-20',
      status: 'Approved',
      institutionName: 'ABC Engineering College',
      score: 88.3
    },
    {
      id: 3,
      year: '2022',
      submissionDate: '2022-03-18',
      status: 'Approved',
      institutionName: 'ABC Engineering College',
      score: 85.7
    },
    {
      id: 4,
      year: '2021',
      submissionDate: '2021-03-22',
      status: 'Pending',
      institutionName: 'ABC Engineering College',
      score: null
    }
  ]);

  const handleViewDetails = (submissionId, year) => {
    // Navigate to submission detail page
    navigate(`/submission-detail/${submissionId}`);
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Approved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'Rejected':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-600" />;
    }
  };

  const getStatusClass = (status) => {
    switch(status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-8">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-teal-700 mb-6">My Submissions</h1>

      {/* Table Section */}
      <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-teal-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-teal-700 to-teal-600">
              <tr>
                <th className="px-4 py-3 text-left text-white font-semibold text-sm uppercase tracking-wider">Year</th>
                <th className="px-4 py-3 text-left text-white font-semibold text-sm uppercase tracking-wider">Institution Name</th>
                <th className="px-4 py-3 text-left text-white font-semibold text-sm uppercase tracking-wider">Submission Date</th>
                <th className="px-4 py-3 text-left text-white font-semibold text-sm uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-white font-semibold text-sm uppercase tracking-wider">Score</th>
                <th className="px-4 py-3 text-left text-white font-semibold text-sm uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.id} className="border-b border-gray-200 hover:bg-teal-50">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 text-teal-700 font-semibold">
                      <Calendar className="w-5 h-5" />
                      <span>{submission.year}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-700 font-medium">{submission.institutionName}</td>
                  <td className="px-4 py-4 text-gray-600">
                    {new Date(submission.submissionDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </td>
                  <td className="px-4 py-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-sm ${getStatusClass(submission.status)}`}>
                      {getStatusIcon(submission.status)}
                      <span>{submission.status}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-teal-700 font-semibold text-base">
                    {submission.score ? `${submission.score}%` : '-'}
                  </td>
                  <td className="px-4 py-4">
                    <button 
                      onClick={() => handleViewDetails(submission.id, submission.year)}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-teal-800 hover:to-teal-700"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {submissions.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl text-gray-600 font-semibold mb-2">No Submissions Found</h3>
              <p className="text-gray-500">You haven't submitted any applications yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Submissions;