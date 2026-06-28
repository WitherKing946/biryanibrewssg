import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'animate.css';
import './index.css';

// Components
import Home from './pages/Home';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
