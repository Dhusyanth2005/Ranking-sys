// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Configuration from './pages/Configuration';
import RankingManagement from './pages/RankingManagement';
import LoginPage from './pages/LoginPage';
import SubmissionDetailPage from './pages/SubmissionDetailPage';
import AdminProfileSettings from './pages/AdminProfileSettings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="configuration" element={<Configuration />} />
          <Route path="ranking-management" element={<RankingManagement />} />
          <Route path="profile-settings" element={<AdminProfileSettings />} />
        </Route>
        <Route path='/submission-detail/:id' element={<SubmissionDetailPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
