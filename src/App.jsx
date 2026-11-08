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
    title: 'THE BUILDER PROTOCOL — Advanced AI Engineering & Startup Research Journal',
    description: 'An open-access, monthly digital serial publication tracking advanced AI engineering frameworks, computer vision architectures, and zero-budget startup execution strategies for next-generation software builders.',
  },
  archives: {
    title: 'Archives & Dispatch Vault | THE BUILDER PROTOCOL',
    description: 'Explore the complete archive of technical field dispatches, startup architecture deep-dives, and AI engineering research papers.',
  },
  ideathon: {
    title: 'Ideathon 2026 | THE BUILDER PROTOCOL',
    description: 'Join the annual Builder Protocol Ideathon. Propose, build, and deploy production-grade software and AI applications.',
  },
  contact: {
    title: 'Contact & Submissions | THE BUILDER PROTOCOL',
    description: 'Get in touch with editorial, submit research manuscripts, or report corrections to The Builder Protocol team.',
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
