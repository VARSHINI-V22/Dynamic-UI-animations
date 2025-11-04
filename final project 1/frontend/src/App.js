// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages / Components
import PasswordPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Layout from './components/ChatLayout';
import SampleComponent from './components/SampleComponent';
import Accomplish from './components/Accomplish';
import HurdlesPage from './components/HurdlesPage';
import AboutTheRace from './components/AboutTheRace';
import ProjectShowcase from './components/ProjectShowcase';
import SpeakersPage from './components/SpeakersPage';
import Footer from './components/Footer'; 
import Alphabet from './components/Alphabet'; // <-- Import Alphabet

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing / Password page */}
        <Route path="/" element={<PasswordPage />} />

        {/* Home page: scrollable sections */}
        <Route
          path="/home"
          element={
            <Layout>
              <HomePage />
              <SampleComponent />
              <Accomplish />
              <HurdlesPage />
              <AboutTheRace />
              <ProjectShowcase />
              <Alphabet />
              <SpeakersPage />
              {/* <Alphabet /> Alphabet section added */}
              <Footer /> {/* Footer at the very bottom */}
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
