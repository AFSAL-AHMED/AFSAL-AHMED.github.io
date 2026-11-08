import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArchivesPage from './pages/ArchivesPage';
import IdeathonPage from './pages/IdeathonPage';
import ContactPage from './pages/ContactPage';

const VIEWS = {
  home:      HomePage,
  archives:  ArchivesPage,
  ideathon:  IdeathonPage,
  contact:   ContactPage,
};

const PAGE_META = {
  home: {
    title: 'The Builder Protocol — AI Engineering & Startup Journal',
    description: 'Monthly open-access journal on AI engineering, computer vision, and zero-budget startup strategy for next-gen software builders.',
  },
  archives: {
    title: 'Archives & Dispatch Vault | The Builder Protocol',
    description: 'Browse all issues: AI stacks, computer vision deep-dives, and startup autopsy reports from The Builder Protocol.',
  },
  ideathon: {
    title: 'Ideathon 2026 | The Builder Protocol',
    description: 'Join the Builder Protocol Ideathon. Propose, build, and ship production-grade AI and software projects.',
  },
  contact: {
    title: 'Contact & Submissions | The Builder Protocol',
    description: 'Submit research manuscripts, pitch ideas, or reach the editorial team at The Builder Protocol.',
  },
};

export default function App() {
  const [activeView, setActiveView] = useState('home');

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

  useEffect(() => {
    const meta = PAGE_META[activeView] || PAGE_META.home;
    document.title = meta.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', meta.title);
  }, [activeView]);

  const navigate = (view) => {
    setActiveView(view);
    window.location.hash = view === 'home' ? '' : view;
  };

  const ActivePage = VIEWS[activeView] || HomePage;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#F4F4F0' }}>
      <Navbar activeView={activeView} onNavigate={navigate} />
      <main className="flex-1" style={{ paddingTop: '100px' }}>
        <ActivePage onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
