import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Enables reveal animations only once the bundle runs, so content never hides without JS.
document.documentElement.classList.add('js');

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element');

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Production HTML is prerendered (scripts/prerender.mjs); hydrate it. Dev serves an empty root.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
