import { useState, useEffect } from 'preact/hooks';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import CV from './pages/CV.jsx';
import Portfolio from './pages/Portfolio.jsx';
import CosechasMegaPrivacy from './pages/CosechasMegaPrivacy.jsx';

const getCurrentPage = () => {
  const hash = window.location.hash.slice(1);
  if (hash) {
    return hash;
  }

  const path = window.location.pathname.replace(/^\/+/, '');
  return path || 'home';
};

export default function App() {
  const [page, setPage] = useState(getCurrentPage);

  useEffect(() => {
    const onRouteChange = () => setPage(getCurrentPage());
    window.addEventListener('hashchange', onRouteChange);
    window.addEventListener('popstate', onRouteChange);
    return () => {
      window.removeEventListener('hashchange', onRouteChange);
      window.removeEventListener('popstate', onRouteChange);
    };
  }, []);

  useEffect(() => {
    if (page === 'cosechasmega/privacidad') {
      const desiredPath = '/cosechasmega/privacidad';
      const currentUrl = `${window.location.pathname}${window.location.hash}`;
      if (currentUrl !== desiredPath) {
        window.history.replaceState(null, '', desiredPath);
      }
    } else {
      const desiredHash = `#${page}`;
      if (window.location.pathname !== '/') {
        window.history.replaceState(null, '', '/');
      }
      if (window.location.hash !== desiredHash) {
        window.location.hash = desiredHash;
      }
    }
  }, [page]);

  return (
    <div class="min-h-screen flex flex-col">
      <Nav />
      <main class="flex-1">
        {page === 'home' && <Home />}
        {page === 'cv' && <CV />}
        {page === 'portafolio' && <Portfolio />}
        {page === 'cosechasmega/privacidad' && <CosechasMegaPrivacy />}
      </main>
    </div>
  );
}
