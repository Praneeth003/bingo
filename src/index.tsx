import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Example: Apply dark mode based on a condition (e.g., user preference or system setting)
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const rootElement = document.getElementById('root');
if (rootElement) {
  if (prefersDarkMode) {
    rootElement.classList.add('dark');
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}