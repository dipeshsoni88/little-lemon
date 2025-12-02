import React from 'react';
import '../css/App.css';

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export default function Specials() {
  const specials = [
    {
      title: 'Greek salad',
      price: 12.99,
      img: '/assets/images/greek-salad.jpg',
      desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      title: 'Bruschetta',
      price: 5.99,
      img: '/assets/images/bruschetta.jpg',
      desc: "Grilled bread smeared with garlic, seasoned with salt and olive oil.",
    },
    {
      title: 'Lemon Dessert',
      price: 4.99,
      img: '/assets/images/lemon-dessert.jpg',
      desc: "A traditional family dessert from grandma's recipe book — simple and authentic.",
    },
  ];

  return (
    <article>
      <section>
        <h1>Menu Specials</h1>
        <p>Discover seasonal dishes and chef specials crafted with fresh ingredients.</p>
        <p>
          <a className="cta" href="/booking">Reserve a Table</a>{' '}
          <a className="cta secondary" href="/specials">View Full Menu</a>
        </p>
      </section>

      <section className="responsive-grid">
        {specials.map((s) => (
          <article className="card" key={s.title}>
            <img src={s.img} alt={s.title} />
            <h3>{s.title}</h3>
            <p style={{ fontWeight: 700 }}>{formatter.format(s.price)}</p>
            <p>{s.desc}</p>
            <p><a className="cta" href="/booking">Order a delivery</a></p>
          </article>
        ))}
      </section>
    </article>
  );
}
