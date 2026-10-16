import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArchivesPage from './pages/ArchivesPage';
import IdeathonPage from './pages/IdeathonPage';
import ContactPage from './pages/ContactPage';

const VIEWS = {
  home: HomePage,
  archives: ArchivesPage,
  ideathon: IdeathonPage,
  contact: ContactPage,
};

export default function App() {
  const [activeView, setActiveView] = useState('home');

  // Sync view with URL hash (client-side routing)
  useEffect(() => {
    const getViewFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      return VIEWS[hash] ? hash : 'home';
    };

    setActiveView(getViewFromHash());

    const onHashChange = () => setActiveView(getViewFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (view) => {
    setActiveView(view);
    window.location.hash = view === 'home' ? '' : view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ActivePage = VIEWS[activeView] || HomePage;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#E5E0D8]">
      <Navbar activeView={activeView} onNavigate={navigate} />

      <main className="flex-1 pt-24 sm:pt-28">
        <ActivePage onNavigate={navigate} />
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
