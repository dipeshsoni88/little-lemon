import React from 'react';

export default function HomePage() {
  return (
    <article>
      <section>
        <img src="/assets/images/logo.png" alt="Little Lemon logo" style={{ maxWidth: 200 }} />
        <h1>Welcome to Little Lemon</h1>
        <p>Experience authentic Mediterranean cuisine in the heart of Chicago.</p>
        <p>
          <a className="cta" href="/booking">Reserve a Table</a>
          {' '}
          <a className="cta secondary" href="/specials">View Specials</a>
        </p>
      </section>

      <section>
        <h2>About Us</h2>
        <p>Little Lemon is a family-owned restaurant dedicated to serving fresh, high-quality dishes inspired by traditional Mediterranean recipes.</p>
      </section>
    </article>
  );
}
