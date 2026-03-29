import './Testimonials.css';

const TESTIMONIALS = [
  { id: 1, text: 'Great quality products!', author: 'Sarah K.' },
  { id: 2, text: 'Fast delivery and fresh items', author: 'James M.' },
  { id: 3, text: 'Affordable and reliable. Will order again!', author: 'Amina W.' },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="section-title">What Customers Say</h2>
      <div className="testimonials__list">
        {TESTIMONIALS.map(({ id, text, author }) => (
          <div key={id} className="testimonial-card">
            <p className="testimonial-card__text">"{text}"</p>
            <p className="testimonial-card__author">— {author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
