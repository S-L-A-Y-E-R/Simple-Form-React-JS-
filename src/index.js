import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css'
import { AuthProvider } from './components/Store/auth-control';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
