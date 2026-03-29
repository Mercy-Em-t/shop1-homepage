import './ValueProps.css';

const VALUE_PROPS = [
  { icon: '🥦', label: 'Fresh & Quality Products' },
  { icon: '💰', label: 'Affordable Prices' },
  { icon: '🚚', label: 'Fast Delivery' },
  { icon: '⭐', label: 'Trusted by Customers' },
];

export default function ValueProps() {
  return (
    <section className="value-props">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="value-props__grid">
        {VALUE_PROPS.map((item) => (
          <div key={item.label} className="value-prop-card">
            <span className="value-prop-card__icon">{item.icon}</span>
            <p className="value-prop-card__label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
