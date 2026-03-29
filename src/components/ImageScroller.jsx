import './ImageScroller.css';

const PREVIEW_ITEMS = [
  { emoji: '🌾', label: 'Cereals' },
  { emoji: '🥜', label: 'Nuts' },
  { emoji: '🍯', label: 'Honey' },
  { emoji: '🌱', label: 'Seeds' },
  { emoji: '🫘', label: 'Beans' },
  { emoji: '🌶️', label: 'Spices' },
  { emoji: '🥦', label: 'Greens' },
  { emoji: '💊', label: 'Supplements' },
];

export default function ImageScroller() {
  return (
    <section className="image-scroller">
      <h2 className="section-title">Our Products</h2>
      <div className="image-scroller__track">
        {PREVIEW_ITEMS.map((item) => (
          <div key={item.label} className="image-scroller__item">
            <div className="image-scroller__thumb">{item.emoji}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
