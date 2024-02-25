import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Druhus from './Druhus';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/druhus" element={<Druhus />} />
      </Routes>
    </Router>
  );
};

export default App;
