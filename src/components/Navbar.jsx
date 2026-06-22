import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/Aro.png" alt="Arogyam" />
          Arogyam Foundation
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`} id="navbarMenu">
          <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`navbar-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/initiatives" className={`navbar-link ${isActive('/initiatives') ? 'active' : ''}`}>Initiatives</Link>
          <Link to="/impact" className={`navbar-link ${isActive('/impact') ? 'active' : ''}`}>Impact</Link>
          <Link to="/get-involved" className={`navbar-link ${isActive('/get-involved') ? 'active' : ''}`}>Get Involved</Link>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;