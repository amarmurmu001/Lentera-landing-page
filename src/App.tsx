import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ProjectSection from './components/ProjectSection';

function LenteraLandingPage() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans px-6">
        <Header />
        <MainContent />
        <ProjectSection />
      </div>
    </Router>
  );
}

export default LenteraLandingPage;