import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider as MaterialTailwindProvider } from "@material-tailwind/react";
import { ThemeProvider } from './components/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <MaterialTailwindProvider>
        <App />
      </MaterialTailwindProvider>
    </ThemeProvider>
  </React.StrictMode>,
);