import { useNavigate } from 'react-router-dom';
import './ProductGrid.css';

const SAMPLE_PRODUCTS = [
  { id: 'prd_001', name: 'Chia Seeds', price: 200, image: '', tag: 'Best Seller', category: 'Seeds' },
  { id: 'prd_002', name: 'Rolled Oats', price: 180, image: '', tag: 'Best Seller', category: 'Cereals' },
  { id: 'prd_003', name: 'Peanut Butter', price: 350, image: '', tag: 'Best Seller', category: 'Nuts & Seeds' },
  { id: 'prd_004', name: 'Raw Honey', price: 450, image: '', tag: 'Best Seller', category: 'Natural Products' },
  { id: 'prd_005', name: 'Lentils', price: 120, image: '', tag: 'Best Seller', category: 'Beans' },
  { id: 'prd_006', name: 'Turmeric Powder', price: 150, image: '', tag: 'Best Seller', category: 'Spices' },
];

const PRODUCT_EMOJIS = {
  Seeds: '🌱',
  Cereals: '🌾',
  'Nuts & Seeds': '🥜',
  'Natural Products': '🍯',
  Beans: '🫘',
  Spices: '🌿',
};

export default function ProductGrid({ title = 'Best Sellers', filter = 'bestseller' }) {
  const navigate = useNavigate();

  return (
    <section className="product-grid-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <button
          className="view-all-link"
          onClick={() => navigate(`/menu?filter=${filter}`)}
        >
          View All →
        </button>
      </div>
      <div className="product-grid">
        {SAMPLE_PRODUCTS.slice(0, 6).map((product) => (
          <button
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/menu?filter=${filter}`)}
          >
            <div className="product-card__image">
              {PRODUCT_EMOJIS[product.category] || '🛒'}
            </div>
            {product.tag && <span className="product-card__tag">{product.tag}</span>}
            <h3 className="product-card__name">{product.name}</h3>
            <p className="product-card__price">KES {product.price}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
