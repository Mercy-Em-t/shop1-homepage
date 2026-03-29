import { Link } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__logo">🌿</div>
      <h1 className="hero__heading">Healthy Essentials for Everyday Living</h1>
      <p className="hero__subtext">Fresh • Affordable • Trusted</p>
      <div className="hero__actions">
        <Link to="/menu" className="btn btn--primary">Shop Now</Link>
        <Link to="/menu?filter=offers" className="btn btn--secondary">View Offers</Link>
      </div>
    </section>
  );
}
