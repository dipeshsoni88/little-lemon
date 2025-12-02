import React from 'react';
import '../css/App.css';

export default function Chicago() {
  return (
    <article>
      <section>
        <img src="/assets/images/greek-salad.jpg" alt="Greek salad" className="hero-image" />
        <h1>Chicago — Little Lemon</h1>
        <p>
          Little Lemon is a charming neighbourhood bistro, offering a warm atmosphere and a menu inspired by Mediterranean flavours. Enjoy handcrafted dishes using fresh, local ingredients.
        </p>
      </section>

      <section>
        <h2>Our Story</h2>
        <p>
          Growing up in a Mediterranean household, the owners were exposed to authentic recipes from an early age. At Little Lemon, you can expect a menu full of classic dishes with creative twists — perfect for a quick lunch or a leisurely dinner.
        </p>
      </section>

      <section>
        <h2>Visit Us</h2>
        <p>
          69 Vico Araratiano — Chicago downtown
        </p>
        <p>
          Phone: (709) 879-4459
        </p>
      </section>
    </article>
  );
}
