import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './Pages/HomePage';
import About from './Pages/About';
import AuthPage from './Pages/AuthPage';
import PlaceholderPage from './Pages/PlacholderPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<PlaceholderPage route="leaderboard" />} />
          <Route path="/submission" element={<PlaceholderPage route="submission" />} />
          <Route path="/faqs" element={<PlaceholderPage route="faqs" />} />
          <Route path="/contact" element={<PlaceholderPage route="contact" />} />
        </Route>
        <Route path='/auth'element={<AuthPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;