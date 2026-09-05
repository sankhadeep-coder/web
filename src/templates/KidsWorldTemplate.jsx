import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { ADVENTURE_CLUBS, PERSONALITIES } from '../data/categories';

export function KidsWorldTemplate() {
  const {
    filteredProducts,
    filterState,
    updateFilter,
    resetFilters
  } = useStore();

  const [activeClub, setActiveClub] = useState(null);

  const handleSelectClub = (club) => {
    setActiveClub(club.id);
    if (club.id === 'dino') {
      updateFilter('searchQuery', 'Dino');
    } else if (club.id === 'space') {
      updateFilter('searchQuery', 'Space');
    } else if (club.id === 'princess') {
      updateFilter('searchQuery', 'Garden');
    } else if (club.id === 'superhero') {
      updateFilter('searchQuery', 'Action');
    } else {
      resetFilters();
    }
  };

  return (
    <div className="template-04" style={{ backgroundColor: '#FDFCF7' }}>
      {/* 1. Playful Universe Hero */}
      <section
        style={{
          position: 'relative',
          padding: '72px 0 56px',
          background: 'linear-gradient(180deg, #FFF9E6 0%, #FDFCF7 100%)',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--c-yellow)', color: 'var(--c-charcoal)', padding: '6px 18px', borderRadius: 'var(--radius-full)', fontSize: '0.8125rem', fontWeight: 800, marginBottom: '20px' }}>
            <Sparkles size={16} />
            <span>WELCOME TO PETIT KIDS WORLD</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-kids)',
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              lineHeight: 1.15,
              color: 'var(--c-charcoal)',
              marginBottom: '16px',
              maxWidth: '840px',
              margin: '0 auto 16px'
            }}
          >
            Clothes made for big imaginations & wild playground days!
          </h1>

          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-muted)',
              maxWidth: '620px',
              margin: '0 auto 32px',
              lineHeight: 1.6
            }}
          >
            Invite your little one to point and choose! Explore adventure theme clubs and outfits matched to their unique sparkling personality.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="#adventure-clubs"
              className="btn btn-primary"
              style={{ borderRadius: 'var(--radius-full)', padding: '14px 28px', fontSize: '1rem' }}
            >
              🚀 Explore Adventure Clubs
            </a>
            <a
              href="#personality-picker"
              className="btn btn-secondary"
              style={{ borderRadius: 'var(--radius-full)', padding: '14px 28px', fontSize: '1rem' }}
            >
              🎨 Pick Child's Personality
            </a>
          </div>
        </div>
      </section>

      {/* 2. Adventure Theme Clubs Stage */}
      <section id="adventure-clubs" className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ backgroundColor: 'var(--c-orange)', color: '#FFFFFF' }}>
              CHOOSE AN ADVENTURE
            </span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-kids)' }}>
              Join An Adventure Club
            </h2>
            <p className="section-subtitle">
              Click a club badge to instantly travel to their themed wardrobe.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '16px'
            }}
          >
            {ADVENTURE_CLUBS.map((club) => {
              const isSelected = activeClub === club.id;
              return (
                <div
                  key={club.id}
                  onClick={() => handleSelectClub(club)}
                  style={{
                    backgroundColor: club.bgColor || club.color,
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px 16px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxShadow: isSelected ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                    border: isSelected ? '3px solid var(--c-charcoal)' : '2px solid transparent',
                    transform: isSelected ? 'scale(1.04)' : 'scale(1)',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.transform = 'translateY(-6px)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '8px' }}>{club.emoji}</div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 800, color: 'var(--c-charcoal)', marginBottom: '4px', fontFamily: 'var(--font-kids)' }}>
                    {club.name}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--c-charcoal)', opacity: 0.8 }}>
                    {club.tagline}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Interactive Child Personality Picker */}
      <section
        id="personality-picker"
        className="section"
        style={{
          backgroundColor: '#FFF5EB',
          borderTop: '1px solid #FFE4CC',
          borderBottom: '1px solid #FFE4CC'
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ backgroundColor: 'var(--c-red)', color: '#FFFFFF' }}>
              MATCH THEIR ENERGY
            </span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-kids)' }}>
              What's Your Little One Like Today?
            </h2>
            <p className="section-subtitle">
              Every child has a style personality. Pick one below to see hand-picked clothes:
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              marginBottom: '40px'
            }}
          >
            <button
              onClick={() => updateFilter('personality', 'all')}
              style={{
                padding: '12px 22px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9375rem',
                fontWeight: 800,
                border: filterState.personality === 'all' ? '2.5px solid var(--c-charcoal)' : '1px solid var(--border-medium)',
                backgroundColor: filterState.personality === 'all' ? 'var(--c-charcoal)' : '#FFFFFF',
                color: filterState.personality === 'all' ? '#FFFFFF' : 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.15s ease'
              }}
            >
              <span>🌈</span>
              <span>All Personalities</span>
            </button>

            {PERSONALITIES.map((p) => {
              const isSelected = filterState.personality === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => updateFilter('personality', isSelected ? 'all' : p.id)}
                  style={{
                    padding: '12px 22px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.9375rem',
                    fontWeight: 800,
                    border: isSelected ? '2.5px solid var(--c-charcoal)' : '1px solid var(--border-medium)',
                    backgroundColor: isSelected ? 'var(--c-charcoal)' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{p.icon}</span>
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>

          {/* Personality Curated Outfits */}
          <div className="products-grid">
            {filteredProducts.slice(0, 8).map((prod) => (
              <ProductCard key={prod.id} product={prod} variant="kids" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Playful Happy Guarantee */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🍦</div>
          <h3 style={{ fontFamily: 'var(--font-kids)', fontSize: '1.75rem', fontWeight: 800, marginBottom: '10px' }}>
            The "Kid Loved or Money Back" Guarantee
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            If your child says it's scratchy, uncomfortable, or refuses to wear it, we'll pick it up from your home within 7 days with zero questions asked and issue a 100% instant refund.
          </p>
        </div>
      </section>
    </div>
  );
}
