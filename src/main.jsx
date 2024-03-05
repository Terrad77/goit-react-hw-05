import React from 'react';
import ReactDOM from 'react-dom/client';
// Імпорт стилів нормалізації
import 'modern-normalize';
import './index.css';
import App from './components/App/App';
//npm install react-router-dom
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
