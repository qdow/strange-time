import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import DecimalTimePage from './pages/DecimalTimePage';
import OverTimePage from './pages/OverTimePage';
import BinaryTimePage from './pages/BinaryTimePage';
import NegativeTimePage from './pages/NegativeTimePage';
import ColorTimePage from './pages/ColorTimePage';
import RandomTimePage from './pages/RandomTimePage';

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <>
      <Router basename={"/strange-time"}>
        <Navigation />
          <Routes>
            <Route path="/" element={<HomePage time={time} />} />
            <Route path="/decimal-time" element={<DecimalTimePage time={time} />} />
            <Route path="/over-time" element={<OverTimePage time={time} />} />
            <Route path="/binary-time" element={<BinaryTimePage time={time} />} />
            <Route path="/negative-time" element={<NegativeTimePage time={time} />} />
            <Route path="/color-time" element={<ColorTimePage time={time} />} />
            <Route path="/random-time" element={<RandomTimePage time={time} />} />
          </Routes>
      </Router>

      <footer className="header-footer"> © 2024 <a href="https://github.com/qdow/strange-time/tree/master" target="_blank">qdow</a> </footer>
    </>
  )
}

export default App
