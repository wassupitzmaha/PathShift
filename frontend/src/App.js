import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import MechanicalEngineering from './features/analysis/components/MechanicalEngineering.jsx';
import Medicine from './features/analysis/components/Medicine';
import Business from './features/analysis/components/Business.jsx';
import Biology from './features/analysis/components/Biology';
import Education from './features/analysis/components/Education';
import AboutMe from './features/about-me/components/AboutMe.jsx';
import SummaryAnalysis from './features/analysis/components/SummaryAnalysis.jsx'
import Home from './features/analysis/components/Home.jsx'



function App() {
  return (
    <BrowserRouter>

      <AppNavbar />
      
      <div className="container mt-4">

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/mechanicalengineering" element={<MechanicalEngineering />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/business" element={<Business />} />
          <Route path="/biology" element={<Biology />} />
          <Route path="/education" element={<Education />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/summaryanalysis" element={<SummaryAnalysis />} />
          
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;



