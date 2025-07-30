import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbot from './components/Chatbot';
import Weatherapp from './components/Weatherapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/contactus" element={<Weatherapp />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
