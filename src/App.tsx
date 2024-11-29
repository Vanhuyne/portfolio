import React, { useEffect } from 'react';

import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/portfolio');
    }
  }, [location, navigate]);

  return (
    <div className="flex bg-background h-screen text-paragraph">
      <Header />
      <div className="flex-grow ml-20 overflow-auto">
        <main className="h-full">
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
