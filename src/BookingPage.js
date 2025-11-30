import './App.css';
import React from 'react';
import BookingForm from './BookingForm';

export default function BookingPage({ availableTimes, dispatch }) {
  function handleBookingSubmit(data) {
    console.log('BookingPage received:', data);
    alert('Reservation submitted — check console for data.');
  }

  return (
    <article>
      <section>
        <h1>Reserve a Table</h1>
        <p>Choose a date, time and number of guests to make a reservation.</p>
      </section>

      <section>
        <BookingForm onSubmit={handleBookingSubmit} availableTimes={availableTimes} dispatch={dispatch} />
      </section>

      <section>
        <p className="booking-note">We look forward to serving you!</p>
      </section>
    </article>
  );
}
