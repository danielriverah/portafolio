import { useState, useEffect } from 'preact/hooks';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import CV from './pages/CV.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Privacy from './pages/Privacy.jsx';
import CosechasMegaPrivacy from './pages/CosechasMegaPrivacy.jsx';
import CosechasMegaTerms from './pages/CosechasMegaTerms.jsx';
import CosechasMegaLicense from './pages/CosechasMegaLicense.jsx';
import DevsRiveraPrivacy from './pages/DevsRiveraPrivacy.jsx';
import DevsRiveraTerms from './pages/DevsRiveraTerms.jsx';
import DevsRiveraLicense from './pages/DevsRiveraLicense.jsx';
import FieldToolsPrivacy from './pages/FieldToolsPrivacy.jsx';
import FieldToolsTerms from './pages/FieldToolsTerms.jsx';
import FieldToolsLicense from './pages/FieldToolsLicense.jsx';

const ROUTES = {
  home: { path: '/', component: Home },
  cv: { path: '/cv', component: CV },
  portafolio: { path: '/portafolio', component: Portfolio },
  privacidad: { path: '/privacidad', component: Privacy },
  'cosechasmega/privacidad': { path: '/cosechasmega/privacidad', component: CosechasMegaPrivacy },
  'cosechasmega/terminos': { path: '/cosechasmega/terminos', component: CosechasMegaTerms },
  'cosechasmega/licencia': { path: '/cosechasmega/licencia', component: CosechasMegaLicense },
  'devsrivera/privacidad': { path: '/devsrivera/privacidad', component: DevsRiveraPrivacy },
  'devsrivera/terminos': { path: '/devsrivera/terminos', component: DevsRiveraTerms },
  'devsrivera/licencia': { path: '/devsrivera/licencia', component: DevsRiveraLicense },
  'field-tools/privacidad': { path: '/field-tools/privacidad', component: FieldToolsPrivacy },
  'field-tools/terminos': { path: '/field-tools/terminos', component: FieldToolsTerms },
  'field-tools/licencia': { path: '/field-tools/licencia', component: FieldToolsLicense },
};

const PATH_TO_PAGE = Object.fromEntries(
  Object.entries(ROUTES).map(([page, config]) => [config.path, page])
);

const normalisePath = (pathname) => {
  if (!pathname) return '/';
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
};

const getCurrentPage = () => {
  const rawPath = normalisePath(window.location.pathname);
  return PATH_TO_PAGE[rawPath] ?? 'home';
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
    const desiredPath = ROUTES[page]?.path ?? '/';
    const currentPath = normalisePath(window.location.pathname);
    const normalisedDesired = normalisePath(desiredPath);

    if (currentPath !== normalisedDesired) {
      window.history.replaceState(null, '', desiredPath);
    }
  }, [page]);

  const ActiveComponent = ROUTES[page]?.component ?? Home;

  return (
    <div class="min-h-screen flex flex-col">
      <Nav />
      <main class="flex-1">
        <ActiveComponent />
      </main>
    </div>
  );
}
