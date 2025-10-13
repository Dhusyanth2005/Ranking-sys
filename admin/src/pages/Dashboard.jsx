import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, CheckCircle, XCircle, Clock, Award } from 'lucide-react';

const Dashboard = () => {
  // Sample data for band distribution
  const bandData = [
    { name: 'A++', value: 12, color: '#10b981' },
    { name: 'A+', value: 25, color: '#3b82f6' },
    { name: 'A', value: 18, color: '#f59e0b' }
  ];

  // Sample data for application submission comparison
  const submissionData = [
    { year: '2023', Engineering: 85, ArtsScience: 72 },
    { year: '2024', Engineering: 98, ArtsScience: 89 },
    { year: '2025', Engineering: 115, ArtsScience: 102 }
  ];

  // Recent submissions
  const recentSubmissions = [
    { id: 1, name: 'PSG College of Technology', type: 'Engineering', time: '2 hours ago', status: 'pending' },
    { id: 2, name: 'St. Joseph\'s College', type: 'Arts & Science', time: '4 hours ago', status: 'pending' },
    { id: 3, name: 'Coimbatore Institute of Technology', type: 'Engineering', time: '6 hours ago', status: 'pending' },
    { id: 4, name: 'Nirmala College', type: 'Arts & Science', time: '8 hours ago', status: 'pending' }
  ];

  // Stats cards data
  const stats = [
    { label: 'Total Applications', value: '206', icon: Users, color: 'bg-cyan-100', iconColor: 'text-cyan-600', change: '+12%' },
    { label: 'Accepted', value: '142', icon: CheckCircle, color: 'bg-emerald-100', iconColor: 'text-emerald-600', change: '+8%' },
    { label: 'Rejected', value: '38', icon: XCircle, color: 'bg-rose-100', iconColor: 'text-rose-600', change: '-3%' },
    { label: 'Pending Review', value: '26', icon: Clock, color: 'bg-amber-100', iconColor: 'text-amber-600', change: '+5' }
  ];

  const totalColleges = bandData.reduce((sum, item) => sum + item.value, 0);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 p-5">
      <div className="max-w-8xl mx-auto">
        
        {/* Welcome Container */}
        <div className="mb-8 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-xl shadow-lg p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Header Section */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold flex items-center gap-3 mb-2">
                  <Award size={40} />
                  QAE Ranking System
                </h1>
                <p className="text-teal-50 text-lg">Admin Dashboard - College Quality Assessment</p>
              </div>
              <div className="mt-4">
                <p className="text-teal-100 text-sm font-medium">Current Year</p>
                <p className="text-3xl font-bold">{currentYear}</p>
              </div>
            </div>

            {/* Stats in Welcome Container */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white bg-opacity-95 rounded-lg p-4 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-slate-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                        <p className="text-xs text-emerald-600 mt-1 font-semibold">{stat.change}</p>
                      </div>
                      <div className={`${stat.color} p-3 rounded-lg`}>
                        <Icon className={`${stat.iconColor}`} size={24} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Band Distribution Pie Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-2">College Band Distribution</h2>
            <p className="text-sm text-slate-600 mb-4">Total Colleges Ranked: {totalColleges}</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={bandData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {bandData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              {bandData.map((band, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: band.color }}></div>
                  <span className="text-sm font-medium text-slate-700">{band.name} ({band.value})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Application Submission Bar Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Application Submission Trends</h2>
            <p className="text-sm text-slate-600 mb-4">Yearly Comparison by College Type</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={submissionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" tick={{ fill: '#475569' }} />
                <YAxis tick={{ fill: '#475569' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }} 
                />
                <Legend />
                <Bar dataKey="Engineering" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="ArtsScience" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-500"></div>
                <span className="text-sm font-medium text-slate-700">Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-purple-500"></div>
                <span className="text-sm font-medium text-slate-700">Arts & Science</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Recent Submissions</h2>
            <span className="text-sm text-slate-600">Awaiting Review</span>
          </div>
          <div className="space-y-4">
            {recentSubmissions.map((submission) => (
              <div 
                key={submission.id} 
                className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-teal-400 transition-all hover:shadow-sm"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Award className="text-teal-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{submission.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        submission.type === 'Engineering' 
                          ? 'bg-cyan-100 text-cyan-700' 
                          : 'bg-indigo-100 text-indigo-700'
                      }`}>
                        {submission.type}
                      </span>
                      <span className="text-sm text-slate-500">{submission.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-3 text-teal-600 font-medium hover:bg-teal-50 rounded-lg transition-colors">
            View All Submissions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;