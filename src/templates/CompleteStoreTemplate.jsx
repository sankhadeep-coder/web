import { useState } from 'react';
import { ArrowRight, Sparkles, Star, Heart, Check, ShoppingBag, ShieldCheck, Camera } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { PARENT_REVIEWS, INSTAGRAM_POSTS } from '../data/reviews';

export function CompleteStoreTemplate() {
  const {
    filteredProducts,
    filterState,
    updateFilter,
    resetFilters,
    addToCart,
    openProductDetail,
    setIsCartOpen
  } = useStore();

  // Multi-item Outfit Bundle Example
  const bundleItems = [
    PRODUCTS.find(p => p.id === 'prod-1') || PRODUCTS[0],
    PRODUCTS.find(p => p.id === 'prod-2') || PRODUCTS[1],
    PRODUCTS.find(p => p.id === 'prod-7') || PRODUCTS[6]
  ];

  const bundleTotal = bundleItems.reduce((acc, item) => acc + item.price, 0);
  const bundleDiscounted = Math.round(bundleTotal * 0.85); // 15% discount for full bundle

  const handleAddFullOutfit = () => {
    bundleItems.forEach((item) => {
      addToCart(item, item.sizes[0], item.colors?.[0]?.name, 1);
    });
    setIsCartOpen(true);
  };

  return (
    <div className="template-05" style={{ backgroundColor: 'var(--c-ivory)' }}>
      {/* 1. Commercial Campaign Flagship Hero */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#252321',
          color: '#FFFFFF',
          minHeight: '76vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(to right, rgba(37,35,33,0.92) 0%, rgba(37,35,33,0.65) 50%, rgba(37,35,33,0.2) 100%), url('https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1800&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '56px 24px' }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--c-yellow)', color: 'var(--c-charcoal)', padding: '5px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '20px' }}>
              <Sparkles size={14} />
              <span>THE 2026 COMMERCIAL FLAGSHIP</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '18px'
              }}
            >
              Everyday luxury for little dreamers.
            </h1>

            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: '#D8D4CE', marginBottom: '32px' }}>
              Explore India's most beloved premium childrenswear destination. 100% GOTS organic cotton, scratch-free seams, and heirloom craftsmanship.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '32px' }}>
              <button
                className="btn btn-accent"
                onClick={() => {
                  const el = document.getElementById('catalog-stage');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Shop Season Catalog</span>
                <ArrowRight size={16} />
              </button>
              <button
                className="btn"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF', backdropFilter: 'blur(8px)' }}
                onClick={() => updateFilter('category', 'newborn')}
              >
                Baby & Newborn Gifts
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div style={{ display: 'flex', gap: '28px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--c-yellow)' }}>24,000+</div>
                <div style={{ fontSize: '0.75rem', color: '#A6A09A' }}>Happy Little Smiles</div>
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--c-lime)' }}>4.9 ★</div>
                <div style={{ fontSize: '0.75rem', color: '#A6A09A' }}>Verified Parent Reviews</div>
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>0%</div>
                <div style={{ fontSize: '0.75rem', color: '#A6A09A' }}>Azo Chemicals or Toxins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Navigation Ribbon */}
      <section style={{ backgroundColor: 'var(--c-white)', borderBottom: '1px solid var(--border-light)', padding: '16px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
            {[
              { id: 'all', label: 'All Catalog' },
              { id: 'girls', label: '🌸 Girls' },
              { id: 'boys', label: '⚡ Boys' },
              { id: 'baby', label: '🍼 Baby & Toddler' },
              { id: 'newborn', label: '🐣 Newborn Sets' },
              { id: 'ethnic', label: '✨ Festive & Party' },
              { id: 'sleepwear', label: '🌙 Organic Sleepwear' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => updateFilter('category', tab.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  backgroundColor: filterState.category === tab.id ? 'var(--c-charcoal)' : 'var(--surface-muted)',
                  color: filterState.category === tab.id ? '#FFFFFF' : 'var(--text-primary)',
                  transition: 'all 0.15s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Catalog Stage */}
      <section id="catalog-stage" className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px' }}>
            <div>
              <span className="section-tag">CURATED STORE</span>
              <h2 className="section-title">
                Signature Collection
              </h2>
              <p className="section-subtitle">
                Showing {filteredProducts.length} certified styles.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="btn btn-secondary btn-sm"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} variant="default" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. "Complete The Look" / 1-Click Outfit Bundle Showcase */}
      <section className="section" style={{ backgroundColor: '#F4EFE7', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ backgroundColor: 'var(--c-brown)', color: '#FFFFFF' }}>
              STYLING STUDIO
            </span>
            <h2 className="section-title">
              Complete The Look: 1-Click Outfit Bundles
            </h2>
            <p className="section-subtitle">
              Our stylists pair coordinating organic tops, bottoms, and hats. Buy the whole outfit and save 15% instantly!
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--c-white)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              boxShadow: 'var(--shadow-md)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              alignItems: 'center'
            }}
          >
            {/* Outfit Items Trio */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
              {bundleItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => openProductDetail(item)}
                  style={{
                    backgroundColor: 'var(--surface-muted)',
                    borderRadius: 'var(--radius-md)',
                    padding: '10px',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px', marginBottom: '8px' }}
                  />
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--c-brown)', marginTop: '2px' }}>
                    ₹{item.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Bundle Checkout Callout */}
            <div>
              <span className="badge badge-bestseller" style={{ marginBottom: '8px' }}>
                🎉 BUNDLE SAVINGS APPLIED
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>
                The "Sunday Park Picnic" Capsule
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                Includes Organic Muslin Dress + Cotton Bucket Hat + Matching Bloomers. Breathable, sweat-wicking, and sun-safe.
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  ₹{bundleDiscounted.toLocaleString()}
                </span>
                <span style={{ fontSize: '1.125rem', textDecoration: 'line-through', color: 'var(--text-subtle)' }}>
                  ₹{bundleTotal.toLocaleString()}
                </span>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--c-red)', backgroundColor: '#FEECEE', padding: '2px 8px', borderRadius: '4px' }}>
                  SAVE 15% (₹{bundleTotal - bundleDiscounted})
                </span>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '0.9375rem' }}
                onClick={handleAddFullOutfit}
              >
                <ShoppingBag size={18} />
                <span>Add 3-Piece Outfit to Bag</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Parent Reviews & Social Proof */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">VERIFIED PROOF</span>
            <h2 className="section-title">
              Loved By Over 24,000 Parents
            </h2>
            <p className="section-subtitle">
              Real unfiltered reviews from mothers and fathers across Delhi, Mumbai, Bengaluru, and beyond.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {PARENT_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                style={{
                  backgroundColor: 'var(--c-white)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#E29B12" color="#E29B12" />
                  ))}
                  <span style={{ fontSize: '0.75rem', color: '#2E7D32', fontWeight: 700, marginLeft: '8px' }}>
                    ✓ Verified Buyer
                  </span>
                </div>

                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '8px' }}>
                  "{rev.title}"
                </h4>

                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                  {rev.comment}
                </p>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' }}>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                    {rev.author} ({rev.childAge})
                  </span>
                  <span style={{ color: 'var(--text-subtle)' }}>
                    {rev.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Instagram Community Feed #PetitPapillonMoments */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 700, color: 'var(--c-brown)' }}>
              <Camera size={18} />
              <span>#PetitPapillonMoments</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '4px' }}>
              Tag @petitpapillon to be featured
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '14px'
            }}
          >
            {INSTAGRAM_POSTS.map((post) => (
              <div
                key={post.id}
                style={{
                  position: 'relative',
                  aspectRatio: '1 / 1',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={post.image}
                  alt={post.user}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(37, 35, 33, 0.65)',
                    opacity: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#FFFFFF',
                    transition: 'opacity 0.2s ease',
                    padding: '12px',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                >
                  <Heart size={20} fill="#FFFFFF" style={{ marginBottom: '6px' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{post.user}</div>
                  <div style={{ fontSize: '0.6875rem', opacity: 0.85 }}>{post.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
