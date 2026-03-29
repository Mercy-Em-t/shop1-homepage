import { Link, useSearchParams } from 'react-router-dom';
import './MenuPage.css';

export default function MenuPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const filter = searchParams.get('filter');
  const bundle = searchParams.get('bundle');

  let subtitle = 'Browse our full range of healthy products';
  if (category) subtitle = `Category: ${category}`;
  else if (filter === 'offers') subtitle = 'Special Offers';
  else if (filter === 'bestseller') subtitle = 'Best Sellers';
  else if (bundle) subtitle = `Bundle: ${bundle.replace(/-/g, ' ')}`;

  return (
    <div className="menu-page">
      <div className="menu-page__header">
        <Link to="/" className="menu-page__back">← Back</Link>
        <h1 className="menu-page__title">Shop</h1>
      </div>
      <p className="menu-page__subtitle">{subtitle}</p>
      <p className="menu-page__placeholder">Full catalog coming soon 🌿</p>
    </div>
  );
}
