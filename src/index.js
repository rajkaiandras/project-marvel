import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// contexts
import { AuthContextProvider } from './contexts/AuthContext';

// components
import { Marvel } from './Marvel';

// styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Marvel />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
