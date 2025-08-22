import { useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="min-h-screen flex flex-col items-center justify-center max-w-screen-lg mx-auto p-8 text-center">
      <div class="flex justify-center gap-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} class="h-24 p-6 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank" rel="noopener noreferrer">
          <img src={preactLogo} class="h-24 p-6 hover:drop-shadow-[0_0_2em_#673ab8aa]" alt="Preact logo" />
        </a>
      </div>
      <h1 class="text-4xl font-bold mt-6">Vite + Preact</h1>
      <div class="p-8">
        <button
          class="px-4 py-2 bg-gray-800 text-white rounded border border-transparent hover:border-blue-500"
          onClick={() => setCount(count + 1)}
        >
          count is {count}
        </button>
        <p class="mt-4">
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="mt-4">
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="text-gray-500 mt-2">
        Click on the Vite and Preact logos to learn more
      </p>
    </div>
  );
}
