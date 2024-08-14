import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import DecimalTimePage from './pages/DecimalTimePage';
import OverTimePage from './pages/OverTimePage';
import BinaryTimePage from './pages/BinaryTimePage';
import NegativeTimePage from './pages/NegativeTimePage';

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <>
      <Router>
        <Navigation />
          <Routes>
            <Route path="/" element={<HomePage time={time} />} />
            <Route path="/decimal-time" element={<DecimalTimePage time={time} />} />
            <Route path="/over-time" element={<OverTimePage time={time} />} />
            <Route path="/binary-time" element={<BinaryTimePage time={time} />} />
            <Route path="/negative-time" element={<NegativeTimePage time={time} />} />
          </Routes>
      </Router>

      <footer className="header-footer"> © 2024 <a href="https://github.com/qdow" target="_blank">qdow</a> </footer>
    </>
  )
}

export default App
