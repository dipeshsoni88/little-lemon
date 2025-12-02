import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <Link to="/" className="logo" aria-label="Little Lemon" role="link">Little Lemon</Link>
      <ul className="nav-links">
        <li><Link to="/" aria-current={window.location.pathname === '/' ? 'page' : undefined}>Home</Link></li>
        <li><Link to="/chicago" aria-current={window.location.pathname === '/chicago' ? 'page' : undefined}>Chicago</Link></li>
        <li><Link to="/specials" aria-current={window.location.pathname === '/specials' ? 'page' : undefined}>Menu</Link></li>
        <li><Link to="/booking" aria-current={window.location.pathname === '/booking' ? 'page' : undefined}>Reservations</Link></li>
        <li><Link to="/order" aria-current={window.location.pathname === '/order' ? 'page' : undefined}>Order Online</Link></li>
        <li><Link to="/login" aria-current={window.location.pathname === '/login' ? 'page' : undefined}>Login</Link></li>
        <li><Link to="/testimonials" aria-current={window.location.pathname === '/testimonials' ? 'page' : undefined}>Testimonials</Link></li>
      </ul>
    </nav>
  );
}
