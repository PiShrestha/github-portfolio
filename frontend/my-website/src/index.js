import React from 'react';
import ReactDOM from 'react-dom/client'; // Update to use 'react-dom/client' for React 18+
import './index.css'; // Ensure this file exists in the 'src' directory
import App from './App'; // Import your main App component

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
