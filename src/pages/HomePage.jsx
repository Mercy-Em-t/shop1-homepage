import HeroSection from '../components/HeroSection';
import CategoryScroller from '../components/CategoryScroller';
import ProductGrid from '../components/ProductGrid';
import ValueProps from '../components/ValueProps';
import BundleSection from '../components/BundleSection';
import ImageScroller from '../components/ImageScroller';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FloatingCTA from '../components/FloatingCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="page">
      <HeroSection />
      <CategoryScroller />
      <ProductGrid title="Best Sellers" filter="bestseller" />
      <ValueProps />
      <BundleSection />
      <ImageScroller />
      <HowItWorks />
      <Testimonials />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
