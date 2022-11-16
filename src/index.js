import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import { Marvel } from './Marvel';

// styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Marvel />
  </React.StrictMode>
);
