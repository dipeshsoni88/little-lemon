import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Chicago from './Chicago';
import BookingPage from './BookingPage';
import Specials from './Specials';
import Testimonials from './Testimonials';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </main>
  );
}
