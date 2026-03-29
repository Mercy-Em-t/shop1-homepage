import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">🌿 HealthyShop</div>
      <div className="footer__info">
        <p>📞 <a href="tel:+254700000000">+254 700 000 000</a></p>
        <p>🚚 Free delivery within Nairobi on orders above KES 1,000</p>
      </div>
      <div className="footer__social">
        <a
          href="https://wa.me/254700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-link"
        >
          WhatsApp
        </a>
        <span className="footer__social-sep">·</span>
        <a href="#top" className="footer__social-link">Instagram</a>
        <span className="footer__social-sep">·</span>
        <a href="#top" className="footer__social-link">Facebook</a>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} HealthyShop. All rights reserved.</p>
    </footer>
  );
}
