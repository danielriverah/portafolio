import { h } from 'preact';

export default function Nav() {
  return (
    <nav class="bg-gray-800 text-white p-4">
      <ul class="flex justify-center gap-4">
        <li>
          <a href="#home" class="hover:underline">Inicio</a>
        </li>
        <li>
          <a href="#cv" class="hover:underline">CV</a>
        </li>
        <li>
          <a href="#portafolio" class="hover:underline">Portafolio</a>
        </li>
      </ul>
    </nav>
  );
}
