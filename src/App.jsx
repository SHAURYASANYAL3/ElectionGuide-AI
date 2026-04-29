import { useState, useCallback } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Learn from './components/Learn';
import Compare from './components/Compare';
import Simulate from './components/Simulate';
import Checklist from './components/Checklist';
import GoogleTranslate from './components/GoogleTranslate';

/**
 * ElectionGuide AI — Root Application
 * 
 * State-driven navigation with user profile context.
 * The profile (country, electionType, level) flows to all child
 * components, enabling smart assistant behavior.
 */
export default function App() {
  const [page, setPage] = useState('home');
  const [profile, setProfile] = useState({
    country: '',
    electionType: '',
    level: '',
  });

  const navigate = useCallback((target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const updateProfile = useCallback((updates) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'learn':
        return <Learn profile={profile} />;
      case 'compare':
        return <Compare profile={profile} />;
      case 'simulate':
        return <Simulate profile={profile} />;
      case 'checklist':
        return <Checklist profile={profile} />;
      default:
        return (
          <Home
            profile={profile}
            updateProfile={updateProfile}
            navigate={navigate}
          />
        );
    }
  };

  return (
    <>
      <Nav page={page} navigate={navigate} />
      <main role="main" id="main-content">
        {renderPage()}
      </main>
      <footer className="footer" role="contentinfo">
        <p>ElectionGuide AI — Built for civic education</p>
        <p className="footer-sub">Neutral. Factual. Accessible.</p>
      </footer>
    </>
  );
}
