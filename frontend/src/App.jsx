import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './Pages/HomePage';
import About from './Pages/About';
import AuthPage from './Pages/AuthPage';
import PlaceholderPage from './Pages/PlacholderPage';
import ApplicationForm from './Pages/ApplicationForm';
import Submissions from './Pages/submissions';
import SubmissionDetail from './Pages/SubmissionDetails';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<PlaceholderPage route="leaderboard" />} />
          <Route path="/Application" element={<ApplicationForm />} />
          <Route path="/faqs" element={<PlaceholderPage route="faqs" />} />
          <Route path="/submission-detail/:id" element={<SubmissionDetail/>} />
          <Route path="/submissions" element={<Submissions/>} />
          <Route path="/contact" element={<PlaceholderPage route="contact" />} />
        </Route>
        <Route path='/auth'element={<AuthPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;