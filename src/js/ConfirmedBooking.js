import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ConfirmedBooking() {
  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current?.focus();
  }, []);

  return (
    <article>
      <section ref={mainRef} tabIndex={-1} aria-live="polite" role="status" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <h1 style={{ color: '#1b5e20', marginBottom: '1rem' }}>Booking Confirmed!</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Your reservation has been successfully confirmed. 
          Thank you for choosing Little Lemon!
        </p>
        <p style={{ marginBottom: '2rem' }}>
          We look forward to serving you. If you have any questions, 
          please don't hesitate to contact us.
        </p>
          <address>
            <strong>Little Lemon</strong><br />
            69 Vico Araratiano<br />
            Chicago, IL 60601<br />
            Phone: (709) 879-4459
          </address>
          <Link 
            to="/" 
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#2e7d32',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 600,
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#1b5e20'}
            onMouseLeave={(e) => e.target.style.background = '#2e7d32'}
          >
            Back to Home
          </Link>
      </section>
    </article>
  );
}
