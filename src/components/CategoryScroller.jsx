import { useNavigate } from 'react-router-dom';
import './CategoryScroller.css';

const CATEGORIES = [
  { name: 'Cereals', icon: '🌾' },
  { name: 'Beans', icon: '🫘' },
  { name: 'Nuts & Seeds', icon: '🥜' },
  { name: 'Spices', icon: '🌶️' },
  { name: 'Supplements', icon: '💊' },
  { name: 'Natural Products', icon: '🌿' },
];

export default function CategoryScroller() {
  const navigate = useNavigate();

  return (
    <section className="category-scroller">
      <h2 className="section-title">Shop by Category</h2>
      <div className="category-scroller__track">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            className="category-card"
            onClick={() => navigate(`/menu?category=${encodeURIComponent(cat.name)}`)}
          >
            <span className="category-card__icon">{cat.icon}</span>
            <span className="category-card__name">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
