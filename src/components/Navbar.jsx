import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import images from '../images.json';

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

  // Logo URL found from original HTML
  const logoUrl = images[2] || "https://static.wixstatic.com/media/67cb39_c012f3a8556142c0a1efc141568ed0df~mv2.png";

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="brand">
          <img src={logoUrl} alt="Biryani Brews Logo" className="brand-logo" />
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
