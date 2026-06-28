import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="brand">
          <span className="brand-primary">Biryani</span>
          <span className="brand-secondary">Brews</span>
        </Link>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''} onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/menu" className="gold-btn nav-btn" onClick={() => setIsOpen(false)}>Order Online</Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
