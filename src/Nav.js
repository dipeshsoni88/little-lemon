import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <Link to="/" className="logo" aria-label="Little Lemon" role="link">Little Lemon</Link>
      <ul className="nav-links">
        <li><Link to="/" aria-current={window.location.pathname === '/' ? 'page' : undefined}>Home</Link></li>
        <li><Link to="/chicago" aria-current={window.location.pathname === '/chicago' ? 'page' : undefined}>Chicago</Link></li>
        <li><Link to="/specials" aria-current={window.location.pathname === '/specials' ? 'page' : undefined}>Specials</Link></li>
        <li><Link to="/booking" aria-current={window.location.pathname === '/booking' ? 'page' : undefined}>Booking</Link></li>
        <li><Link to="/testimonials" aria-current={window.location.pathname === '/testimonials' ? 'page' : undefined}>Testimonials</Link></li>
      </ul>
    </nav>
  );
}
