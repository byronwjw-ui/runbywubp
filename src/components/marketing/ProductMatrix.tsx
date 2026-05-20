import { PRODUCTS } from '@/config/products';
import { EN } from '@/content/en';
import { ProductCard } from './ProductCard';

export function ProductMatrix() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="kicker"><span className="eyebrow">{EN.matrix.eyebrow}</span></div>
        <h2>{EN.matrix.title}</h2>
        <p className="lead">{EN.matrix.subtitle}</p>
        <div className="grid grid-2" style={{ marginTop: 32 }}>
          {PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
