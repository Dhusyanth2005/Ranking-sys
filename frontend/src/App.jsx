import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './Pages/HomePage';
import About from './Pages/About';
import AuthPage from './Pages/AuthPage';
import ApplicationForm from './Pages/ApplicationForm';
import Submissions from './components/Submission/submissions';
import SubmissionDetail from './components/Submission/SubmissionDetails';
import LeaderboardPage from './Pages/LeaderboardPage';
import FAQPage from './Pages/FaqPage';
import ContactPage from './Pages/ContactPage';
import ProfilePage from './Pages/ProfilePage';
import SettingsPage from './Pages/SettingsPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TearmsOfService from './Pages/TearmsOfService';
import Methodology from './Pages/Methodology';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<LeaderboardPage/>} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/Application" element={<ApplicationForm />} />
          <Route path="/faqs" element={<FAQPage/>} />
          <Route path="/submission-detail/:id" element={<SubmissionDetail/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/submissions" element={<Submissions/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TearmsOfService />} />
          <Route path='/methodology' element={<Methodology/>}/>
        </Route>
        <Route path='/auth'element={<AuthPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;