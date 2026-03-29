import './HowItWorks.css';

const STEPS = [
  { step: 1, text: 'Browse products' },
  { step: 2, text: 'Select items' },
  { step: 3, text: 'Order via WhatsApp' },
  { step: 4, text: 'Get delivery' },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <div className="how-it-works__steps">
        {STEPS.map(({ step, text }) => (
          <div key={step} className="step">
            <div className="step__number">{step}</div>
            <p className="step__text">{text}</p>
            {step < STEPS.length && <div className="step__connector" />}
          </div>
        ))}
      </div>
    </section>
  );
}
