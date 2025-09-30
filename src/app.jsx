/*import { useState, useEffect } from 'preact/hooks';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import CV from './pages/CV.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Privacy from './pages/Privacy.jsx';
import CosechasMegaPrivacy from './pages/CosechasMegaPrivacy.jsx';

// Ruta "limpia" que sí debe vivir con history API
const PRIVACY_PATH = '/cosechasmega/privacidad';

const isPrivacyPath = (pathname) => {
  // Soporta con o sin slash final
  return pathname === PRIVACY_PATH || pathname === PRIVACY_PATH + '/';
};

const getHashPage = () => {
  // Acepta "#home" o "#/home"
  const h = window.location.hash.replace(/^#\/?/, '').trim();
  return h || 'home';
};

const getCurrentPage = () => {
  const { pathname } = window.location;
  if (isPrivacyPath(pathname)) return 'cosechasmega/privacidad';
  return getHashPage();
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
    const { pathname, hash } = window.location;

    if (page === 'cosechasmega/privacidad') {
      // Mantén la URL limpia exacta
      const desired = PRIVACY_PATH;
      if (!isPrivacyPath(pathname)) {
        window.history.replaceState(null, '', desired);
      }
      // No toques el hash en esta ruta
      if (hash) {
        window.history.replaceState(null, '', desired);
      }
      return;
    }

    // Para todas las demás páginas, usa hash routing y mantén pathname en "/"
    const desiredHash = `#${page}`;
    if (pathname !== '/') {
      window.history.replaceState(null, '', '/');
    }
    if (hash !== desiredHash) {
      // Usar assignment evita disparar popstate extra
      window.location.hash = desiredHash;
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
}*/

import { useState, useEffect } from 'preact/hooks';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import CV from './pages/CV.jsx';
import Portfolio from './pages/Portfolio.jsx';
import CosechasMegaPrivacy from './pages/CosechasMegaPrivacy.jsx';

const ROUTES = {
  home: '/',
  cv: '/cv',
  portafolio: '/portafolio',
  privacidad: '/privacidad',
  'cosechasmega/privacidad': '/cosechasmega/privacidad',
};

const normalisePath = (pathname) => {
  if (!pathname) return '/';
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
};

const getCurrentPage = () => {
  const rawPath = normalisePath(window.location.pathname);

  switch (rawPath) {
    case '/':
      return 'home';
    case '/cv':
      return 'cv';
    case '/portafolio':
      return 'portafolio';
    case '/privacidad':
      return 'privacidad';
    case '/cosechasmega/privacidad':
      return 'cosechasmega/privacidad';
    default:
      return 'home';
  }
};

export default function App() {
  const [page, setPage] = useState(getCurrentPage);

  useEffect(() => {
    const onRouteChange = () => setPage(getCurrentPage());
    window.addEventListener('popstate', onRouteChange);
    return () => {
      window.removeEventListener('popstate', onRouteChange);
    };
  }, []);

  useEffect(() => {
    const desiredPath = ROUTES[page] ?? '/';
    const currentPath = normalisePath(window.location.pathname);
    const normalisedDesired = normalisePath(desiredPath);

    if (currentPath !== normalisedDesired) {
      window.history.replaceState(null, '', desiredPath);
    }
  }, [page]);

  return (
    <div class="min-h-screen flex flex-col">
      <Nav />
      <main class="flex-1">
        {page === 'home' && <Home />}
        {page === 'cv' && <CV />}
        {page === 'portafolio' && <Portfolio />}
        {page === 'privacidad' && <Privacy />}
        {page === 'cosechasmega/privacidad' && <CosechasMegaPrivacy />}
      </main>
    </div>
  );
}
