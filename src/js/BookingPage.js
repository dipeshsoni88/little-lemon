import React, { useState, useEffect } from 'react';
import '../css/App.css';
import BookingForm from './BookingForm';

export default function BookingPage({ availableTimes, dispatch, onSubmit }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    let mounted = true;

    async function loadBookings() {
      try {
        if (typeof window.fetchSavedBookings === 'function') {
          const remote = await Promise.resolve(window.fetchSavedBookings());
          if (mounted && Array.isArray(remote)) return setBookings(remote);
        }

        if (typeof window.getBookings === 'function') {
          const remote2 = await Promise.resolve(window.getBookings());
          if (mounted && Array.isArray(remote2)) return setBookings(remote2);
        }
      } catch (e) {}

      try {
        const raw = localStorage.getItem('bookings');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (mounted && Array.isArray(parsed)) setBookings(parsed);
        }
      } catch (e) {}
    }

    loadBookings();
    return () => { mounted = false; };
  }, []);

  async function handleBookingSubmit(data) {
    try {
      if (typeof window.saveBooking === 'function') {
        await Promise.resolve(window.saveBooking(data));
      } else if (typeof window.submitAPI === 'function') {
        await Promise.resolve(window.submitAPI(data));
      }
    } catch (e) {
      console.error('Remote save failed', e);
    }

    setBookings((prev) => {
      const next = [...prev, data];
      try { localStorage.setItem('bookings', JSON.stringify(next)); } catch (e) {}
      return next;
    });

    if (onSubmit) onSubmit(data);
    else {
      console.log('BookingPage received:', data);
      alert('Reservation submitted — check console for data.');
    }
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

      <section aria-live="polite" aria-label="Submitted bookings">
        <h2 style={{ marginTop: '1rem' }}>Submitted Bookings</h2>
        {bookings.length === 0 ? (
          <p className="booking-note">No bookings yet.</p>
        ) : (
          <ul>
            {bookings.map((b, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>
                <strong>{b.date}</strong> — {b.time} — {b.guests} guest{b.guests > 1 ? 's' : ''} — {b.occasion}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <p className="booking-note">We look forward to serving you!</p>
      </section>
    </article>
  );
}
