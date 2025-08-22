import { render } from 'preact';
import App from './app.jsx';
import './index.css';

const container = document.getElementById('app');
render(<App />, container);
