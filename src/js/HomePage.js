import React from 'react';

export default function HomePage() {
  return (
    <article>
      <section>
        <img src="https://meta-capstone-little-lemon.web.app/static/media/logo.dcc102b675312ecfe774.png" alt="Little Lemon logo" style={{ maxWidth: 200 }} />
        <h1>Welcome to Little Lemon</h1>
        <p>Experience authentic Mediterranean cuisine in a cozy neighborhood atmosphere.</p>
        <p>
          <a className="cta" href="/booking">Reservations</a>
          {' '}
          <a className="cta secondary" href="/specials">View Menu & Specials</a>
        </p>
      </section>

      <section>
        <h2>About Us</h2>
        <p>Little Lemon is a family-run restaurant focusing on fresh, bright flavors inspired by Mediterranean traditions.</p>
      </section>
    </article>
  );
}
