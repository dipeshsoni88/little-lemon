import React from 'react';
import '../css/App.css';

const reviews = [
  { name: 'Sara Lopez', handle: 'Sara72', text: "Seriously cannot stop thinking about the Turkish Mac n' Cheese!!" },
  { name: 'John Doucette', handle: 'Johnny_Utah', text: "We had such a great time celebrating my grandmothers birthday!" },
  { name: 'Jimmy Crickets', handle: 'crick_it', text: "Such a chilled out atmosphere, love it!" },
  { name: 'Mia Maria', handle: 'flowerTime', text: "Best Feta Salad in town. Flawless every time!" }
];

export default function Testimonials() {
  return (
    <article>
      <section>
        <h1>Customer Testimonials</h1>
        <p>Hear from our guests about their dining experiences at Little Lemon.</p>
      </section>

      <section className="responsive-grid">
        {reviews.map((r) => (
          <article className="card" key={r.handle}>
            <img src="/assets/images/customer-placeholder.jpg" alt={`${r.name} avatar`} />
            <h3>{r.name}</h3>
            <p style={{ color: '#777', marginTop: '-0.25rem' }}>{r.handle} — ★★★★★</p>
            <p style={{ fontStyle: 'italic' }}>&quot;{r.text}&quot;</p>
          </article>
        ))}
      </section>
    </article>
  );
}
