import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Academic from './pages/Academic';
import './assets/css/general.css';
import './assets/css/style.css';
import './assets/css/queries.css';
import './assets/css/style-academic.css';
import './assets/css/queries-academic.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academic" element={<Academic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;