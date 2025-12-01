import React, { useReducer } from 'react';
import '../css/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import Chicago from './Chicago';
import BookingPage from './BookingPage';
import Specials from './Specials';
import Testimonials from './Testimonials';
import ConfirmedBooking from './ConfirmedBooking';

function initializeTimes() {
  try {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayISO = `${yyyy}-${mm}-${dd}`;

    if (typeof window.fetchAPI === 'function') {
      const times = window.fetchAPI(todayISO);
      if (Array.isArray(times) && times.length > 0) return times;
    }
  } catch (e) {}

  return [
    '11:00','12:00','13:00','14:00','15:00','16:00',
    '17:00','18:00','19:00','20:00','21:00','22:00','23:00'
  ];
}

function updateTimes(availableTimes, action) {
  if (action.type === 'UPDATE_TIMES') {
    const selectedDate = action.payload;
    if (!selectedDate) return initializeTimes();
    try {
      if (typeof window.fetchAPI === 'function') {
        const times = window.fetchAPI(selectedDate);
        if (Array.isArray(times)) return times;
      }
    } catch (e) {}

    const today = new Date();
    const selectedDateObj = new Date(selectedDate);
    const isToday = selectedDateObj.toDateString() === today.toDateString();

    if (isToday) {
      const currentHour = today.getHours();
      const futureHours = initializeTimes().filter(timeStr => {
        const [hour] = timeStr.split(':');
        return Number(hour) > currentHour;
      });
      return futureHours.length > 0 ? futureHours : [];
    }

    return initializeTimes();
  }

  return availableTimes;
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  function submitForm(formData) {
    try {
      if (typeof window.submitAPI === 'function') {
        const success = window.submitAPI(formData);
        if (success) {
          navigate('/confirmed');
          return;
        }
      }
    } catch (e) {
      console.error('Error submitting form:', e);
    }
  }

  return (
    <main id="main-content" role="main" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} onSubmit={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </main>
  );
}
