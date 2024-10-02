import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Pratik Shrestha's Personal Website</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
