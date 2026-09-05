import { Sparkles, ArrowRight, ShieldCheck, Heart, Zap, Tag, Gift, Ruler } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';

export function BentoTemplate() {
  const {
    filteredProducts,
    updateFilter,
    setIsSizeAssistantOpen,
    openProductDetail
  } = useStore();

  const featuredBentoProds = filteredProducts.slice(0, 8);

  return (
    <div className="template-02" style={{ backgroundColor: '#F7F6F2' }}>
      {/* 1. Main Bento Grid Hero & Cards Stage */}
      <section className="section" style={{ paddingTop: '32px', paddingBottom: '48px' }}>
        <div className="container">
          <div className="bento-grid">
            {/* Bento 1: Grand Hero Banner Card (Spans 8 cols) */}
            <div
              className="bento-card bento-hero-card"
              style={{
                backgroundColor: 'var(--c-cream)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '460px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  <span className="bento-sticker" style={{ backgroundColor: 'var(--c-yellow)', color: 'var(--c-charcoal)' }}>
                    ✨ Playful 2026 Drop
                  </span>
                  <span className="bento-sticker" style={{ backgroundColor: 'var(--c-lime)', color: 'var(--c-charcoal)' }}>
                    🌿 100% GOTS Cotton
                  </span>
                </div>

                <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '14px', letterSpacing: '-0.03em' }}>
                  Playful clothes for fearless little humans.
                </h1>

                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
                  Engineered with flatlock seams and scratch-free labels so kids can jump, roll, paint, and nap without itchy distractions.
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => updateFilter('category', 'all')}
                  >
                    <span>Shop All New Drops</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsSizeAssistantOpen(true)}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Ruler size={16} />
                    <span>Find Child's Size</span>
                  </button>
                </div>
              </div>

              {/* Playful Floating Hero Image */}
              <div
                style={{
                  position: 'absolute',
                  right: '-20px',
                  bottom: '-20px',
                  width: '50%',
                  height: '110%',
                  backgroundImage: `url('https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 'var(--radius-lg)',
                  maskImage: 'linear-gradient(to right, transparent, black 25%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 25%)'
                }}
              />
            </div>

            {/* Bento 2: Soft Sage "100% Sensitive Skin" Trust Card (Spans 4 cols) */}
            <div
              className="bento-card"
              style={{
                backgroundColor: 'rgba(217, 246, 90, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(217, 246, 90, 0.5)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="bento-sticker" style={{ backgroundColor: 'var(--c-charcoal)', color: '#FFFFFF' }}>
                    Zero-Scratch
                  </span>
                  <ShieldCheck size={26} color="var(--c-charcoal)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '8px' }}>
                  Sensitive Skin Friendly
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--c-charcoal)', lineHeight: 1.5, opacity: 0.85 }}>
                  Tagless printed neck labels and flat-lock seams. Zero skin redness after 12 hours of active play.
                </p>
              </div>

              <div style={{ marginTop: '16px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <span className="badge badge-organic">✓ GOTS Pure</span>
                <span className="badge badge-organic">✓ Azo-Free Dyes</span>
                <span className="badge badge-organic">✓ Pre-Shrunk</span>
              </div>
            </div>

            {/* Bento 3: Lavender "Girls Dresses" (Spans 4 cols) */}
            <div
              className="bento-card"
              onClick={() => updateFilter('category', 'girls')}
              style={{
                backgroundColor: '#F3EDF8',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span className="bento-sticker" style={{ backgroundColor: '#D87CE8', color: '#FFFFFF' }}>
                  🌸 Twirl Time
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '8px', marginBottom: '4px' }}>
                  Girls Capsule
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Twirl-approved organic dresses & bloomers.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=400&q=80"
                alt="Girls collection"
                style={{
                  width: '120px',
                  height: '140px',
                  borderRadius: 'var(--radius-md)',
                  objectFit: 'cover',
                  position: 'absolute',
                  right: '16px',
                  bottom: '-10px',
                  boxShadow: 'var(--shadow-md)',
                  transform: 'rotate(6deg)'
                }}
              />
            </div>

            {/* Bento 4: Sky Blue "Boys Summer" (Spans 4 cols) */}
            <div
              className="bento-card"
              onClick={() => updateFilter('category', 'boys')}
              style={{
                backgroundColor: 'rgba(57, 121, 208, 0.12)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span className="bento-sticker" style={{ backgroundColor: 'var(--c-cyan)', color: '#FFFFFF' }}>
                  ⚡ High Durability
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '8px', marginBottom: '4px' }}>
                  Boys Action Wear
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Reinforced knee patches & breathable waffle knits.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=400&q=80"
                alt="Boys collection"
                style={{
                  width: '120px',
                  height: '140px',
                  borderRadius: 'var(--radius-md)',
                  objectFit: 'cover',
                  position: 'absolute',
                  right: '16px',
                  bottom: '-10px',
                  boxShadow: 'var(--shadow-md)',
                  transform: 'rotate(-4deg)'
                }}
              />
            </div>

            {/* Bento 5: Sunny Yellow "Newborn Gift Box" (Spans 4 cols) */}
            <div
              className="bento-card"
              onClick={() => updateFilter('category', 'newborn')}
              style={{
                backgroundColor: 'rgba(255, 214, 0, 0.18)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span className="bento-sticker" style={{ backgroundColor: 'var(--c-yellow)', color: 'var(--c-charcoal)' }}>
                  🎁 Baby Shower Ready
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '8px', marginBottom: '4px' }}>
                  Newborn Gift Bundles
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Ultra-soft bamboo kimonos in keepsake magnetic box.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=400&q=80"
                alt="Newborn gift"
                style={{
                  width: '120px',
                  height: '140px',
                  borderRadius: 'var(--radius-md)',
                  objectFit: 'cover',
                  position: 'absolute',
                  right: '16px',
                  bottom: '-10px',
                  boxShadow: 'var(--shadow-md)',
                  transform: 'rotate(5deg)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Bento Outfits Grid */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px' }}>
            <div>
              <span className="section-tag">FRESH FINDS</span>
              <h2 className="section-title">
                Modular Mix & Match Collection
              </h2>
              <p className="section-subtitle">
                Designed so pieces effortlessly coordinate together for stress-free morning dressing.
              </p>
            </div>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => updateFilter('category', 'all')}
            >
              View All ({filteredProducts.length})
            </button>
          </div>

          <div className="products-grid">
            {featuredBentoProds.map((prod) => (
              <ProductCard key={prod.id} product={prod} variant="bento" />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bento Interactive Size Assistant Banner */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--c-charcoal)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '48px 40px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ maxWidth: '540px' }}>
              <span className="bento-sticker" style={{ backgroundColor: 'var(--c-yellow)', color: 'var(--c-charcoal)', marginBottom: '12px' }}>
                📏 Zero Size Guesswork
              </span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
                Unsure if your toddler is 3-4Y or 4-5Y?
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#D8D4CE', lineHeight: 1.5 }}>
                Our 15-second child fit wizard takes height, age, and weight to calculate the exact size with 4cm growth-room allowance.
              </p>
            </div>

            <button
              className="btn btn-accent"
              style={{ padding: '16px 28px', fontSize: '1rem' }}
              onClick={() => setIsSizeAssistantOpen(true)}
            >
              <Sparkles size={18} /> Launch Size Assistant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
