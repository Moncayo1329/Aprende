import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import reportWebVitals from './reportWebVitals';


function Main() {
  return (
    <BrowserRouter>
      <Link></Link>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();