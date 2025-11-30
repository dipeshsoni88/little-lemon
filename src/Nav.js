import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <Link to="/" className="logo">Little Lemon</Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chicago">Chicago</Link></li>
        <li><Link to="/specials">Specials</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
      </ul>
    </nav>
  );
}
