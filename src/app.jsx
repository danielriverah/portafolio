import { useState, useEffect } from 'preact/hooks';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import CV from './pages/CV.jsx';
import Portfolio from './pages/Portfolio.jsx';

export default function App() {
  const [page, setPage] = useState(() => window.location.hash.slice(1) || 'home');

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash.slice(1) || 'home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div class="min-h-screen flex flex-col">
      <Nav />
      <main class="flex-1">
        {page === 'home' && <Home />}
        {page === 'cv' && <CV />}
        {page === 'portafolio' && <Portfolio />}
      </main>
    </div>
  );
}
