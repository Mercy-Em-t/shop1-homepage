import { useNavigate } from 'react-router-dom';
import './BundleSection.css';

const BUNDLES = [
  {
    id: 'starter-pack',
    name: 'Healthy Starter Pack',
    items: ['Oats', 'Chia Seeds', 'Honey'],
    price: 'KES 500',
    icon: '🌿',
  },
  {
    id: 'protein-pack',
    name: 'Protein Pack',
    items: ['Peanut Butter', 'Almonds'],
    price: 'KES 800',
    icon: '💪',
  },
  {
    id: 'spice-bundle',
    name: 'Spice Bundle',
    items: ['Turmeric', 'Ginger', 'Cinnamon'],
    price: 'KES 400',
    icon: '🌶️',
  },
];

export default function BundleSection() {
  const navigate = useNavigate();

  return (
    <section className="bundle-section">
      <h2 className="section-title">Bundle Deals</h2>
      <div className="bundle-section__list">
        {BUNDLES.map((bundle) => (
          <button
            key={bundle.id}
            className="bundle-card"
            onClick={() => navigate(`/menu?bundle=${bundle.id}`)}
          >
            <span className="bundle-card__icon">{bundle.icon}</span>
            <div className="bundle-card__info">
              <h3 className="bundle-card__name">{bundle.name}</h3>
              <p className="bundle-card__items">{bundle.items.join(' · ')}</p>
            </div>
            <span className="bundle-card__price">{bundle.price}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
