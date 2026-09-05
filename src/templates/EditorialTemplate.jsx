import { ArrowRight, Sparkles, BookOpen, Compass } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { EDITORIAL_PICKS, BEST_SELLERS } from '../data/products';

export function EditorialTemplate() {
  const {
    filteredProducts,
    updateFilter,
    resetFilters,
    openProductDetail
  } = useStore();

  const editorialProducts = filteredProducts.filter(p => EDITORIAL_PICKS.includes(p.id)).slice(0, 4);
  const bestSellerProducts = filteredProducts.filter(p => BEST_SELLERS.includes(p.id)).slice(0, 4);

  return (
    <div className="template-01" style={{ backgroundColor: 'var(--c-ivory)' }}>
      {/* 1. Grand Editorial Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '82vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#ECE5D8',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(to right, rgba(236, 229, 216, 0.95) 0%, rgba(236, 229, 216, 0.75) 45%, rgba(236, 229, 216, 0.2) 100%), url('https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1800&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'right 30% center'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '64px 24px' }}>
          <div style={{ maxWidth: '640px' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--c-brown)',
                marginBottom: '18px'
              }}
            >
              SPRING / SUMMER LOOKBOOK '26
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(2.8rem, 6vw, 4.75rem)',
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '20px'
              }}
            >
              Made for Little Moments.
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.1875rem',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
                marginBottom: '32px',
                maxWidth: '520px'
              }}
            >
              Everyday comfort. Big little adventures. Heirloom organic fabrics crafted with kindness for your child’s most memorable years.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <button
                className="btn btn-primary"
                onClick={() => {
                  resetFilters();
                  const el = document.getElementById('editorial-collection');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Explore The Collection</span>
                <ArrowRight size={16} />
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => updateFilter('category', 'dresses')}
              >
                View The Lookbook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editorial Category Cards (Oversized, Clean Whitespace) */}
      <section className="section" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', margin: '0 0 48px 0' }}>
            <span className="section-tag">CURATED EDITS</span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-editorial)' }}>
              The Seasonal Chapters
            </h2>
            <p className="section-subtitle">
              Carefully designed silhouettes celebrating pure childhood freedom and effortless parental care.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              {
                title: 'The Girls Edit',
                subtitle: 'Voile Dresses & Ruffled Linens',
                image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=700&q=80',
                cat: 'girls'
              },
              {
                title: 'The Boys Edit',
                subtitle: 'Camp Collar Shirts & Cargo Shorts',
                image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80',
                cat: 'boys'
              },
              {
                title: 'The Baby Sanctuary',
                subtitle: 'Bamboo Kimonos & Pointelle Knit',
                image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=700&q=80',
                cat: 'baby'
              },
              {
                title: 'Occasion & Festive',
                subtitle: 'Mulmul Kurtas & Starlight Tulle',
                image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=700&q=80',
                cat: 'ethnic'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                onClick={() => updateFilter('category', card.cat)}
                style={{
                  position: 'relative',
                  aspectRatio: '3 / 4',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)'
                }}
                className="editorial-category-card"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(to top, rgba(37,35,33,0.85) 0%, rgba(37,35,33,0.2) 50%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '28px',
                    color: '#FFFFFF'
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.5rem', fontWeight: 500, marginBottom: '4px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', opacity: 0.9, letterSpacing: '0.02em', marginBottom: '14px' }}>
                    {card.subtitle}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <span>Explore Edit</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Editor's Picks Section */}
      <section id="editorial-collection" className="section" style={{ backgroundColor: '#F3EFE7' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
            <div>
              <span className="section-tag">MAGAZINE CURATION</span>
              <h2 className="section-title" style={{ fontFamily: 'var(--font-editorial)', margin: 0 }}>
                Editor’s Capsule Picks
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => updateFilter('category', 'all')}
              >
                View Complete Capsule ({filteredProducts.length})
              </button>
            </div>
          </div>

          <div className="products-grid">
            {(editorialProducts.length > 0 ? editorialProducts : filteredProducts.slice(0, 4)).map((prod) => (
              <ProductCard key={prod.id} product={prod} variant="editorial" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Poetic Brand Manifesto Quote */}
      <section className="section" style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '16px', color: 'var(--c-brown)' }}>
            ❝
          </span>
          <blockquote
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.5rem, 3.2vw, 2.25rem)',
              lineHeight: 1.35,
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--c-charcoal)',
              marginBottom: '24px'
            }}
          >
            "Children don't simply wear clothes; they climb trees, spill ice cream, dream up galaxies, and fall asleep with cheeks pressed into their collars. We design for those sacred little hours."
          </blockquote>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--c-brown)' }}>
            — ELENA VERMA • CREATIVE DIRECTOR, PETIT PAPILLON
          </div>
        </div>
      </section>

      {/* 5. Best Sellers Grid */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">MOST LOVED</span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-editorial)' }}>
              Heirloom Best Sellers
            </h2>
            <p className="section-subtitle">
              Rated 4.9 stars by over 2,400 parents across India.
            </p>
          </div>

          <div className="products-grid">
            {(bestSellerProducts.length > 0 ? bestSellerProducts : filteredProducts.slice(4, 8)).map((prod) => (
              <ProductCard key={prod.id} product={prod} variant="editorial" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
