import { h } from 'preact';

const navigate = (event, path) => {
  event.preventDefault();
  const normalisedPath = path === '/' ? '/' : path.replace(/\/+$/, '');
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

  if (currentPath !== normalisedPath) {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
};

export default function Nav() {
  return (
    <nav class="bg-gray-800 text-white p-4">
      <ul class="flex justify-center gap-4">
        <li>
          <a href="/" class="hover:underline" onClick={(event) => navigate(event, '/')}>Inicio</a>
        </li>
        <li>
          <a href="/cv" class="hover:underline" onClick={(event) => navigate(event, '/cv')}>
            CV
          </a>
        </li>
        <li>
          <a
            href="/portafolio"
            class="hover:underline"
            onClick={(event) => navigate(event, '/portafolio')}
          >
            Portafolio
          </a>
        </li>
        <li>
          <a href="/privacidad" class="hover:underline" onClick={(event) => navigate(event, '/privacidad')}>
            Privacidad
          </a>
        </li>
      </ul>
    </nav>
  );
}
