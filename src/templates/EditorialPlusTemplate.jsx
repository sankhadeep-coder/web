import { useState } from 'react';
import { ArrowRight, Sparkles, Ruler, ShieldCheck, Check, Star, Camera, Heart, HelpCircle, RefreshCw, Truck } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { EDITORIAL_PICKS, BEST_SELLERS } from '../data/products';
import { PARENT_REVIEWS, INSTAGRAM_POSTS } from '../data/reviews';

export function EditorialPlusTemplate() {
  const {
    filteredProducts,
    updateFilter,
    resetFilters,
    openProductDetail,
    sizeInput,
    setSizeInput,
    recommendedSizeResult,
    setIsSizeAssistantOpen
  } = useStore();

  const editorialProducts = filteredProducts.filter(p => EDITORIAL_PICKS.includes(p.id)).slice(0, 4);
  const bestSellerProducts = filteredProducts.filter(p => BEST_SELLERS.includes(p.id)).slice(0, 4);

  return (
    <div className="template-06" style={{ backgroundColor: 'var(--c-ivory)' }}>
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
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--c-brown)'
                }}
              >
                SPRING / SUMMER LOOKBOOK '26
              </span>
              <span style={{ fontSize: '0.75rem', backgroundColor: 'rgba(140, 94, 60, 0.15)', color: 'var(--c-brown)', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                HYBRID EDITORIAL
              </span>
            </div>

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
                onClick={() => {
                  const el = document.getElementById('size-finder-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Ruler size={16} />
                <span>Find Child's Size</span>
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

      {/* 3. SIZE FINDER FEATURE (From Template 03, Crafted for Editorial Look) */}
      <section
        id="size-finder-section"
        className="section"
        style={{
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
          padding: '72px 0'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            {/* Left: Size Finder Context & Editorial Narrative */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#E8F5E9',
                  color: '#2E7D32',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}
              >
                <ShieldCheck size={15} />
                <span>Zero-Fuss Sizing Engine • Verified True-to-Growth Fit</span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(2rem, 4vw, 2.85rem)',
                  fontWeight: 500,
                  color: 'var(--c-charcoal)',
                  lineHeight: 1.2,
                  marginBottom: '16px'
                }}
              >
                The Perfect Fit, Without The Guesswork.
              </h2>

              <p
                style={{
                  fontSize: '1.0625rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '28px'
                }}
              >
                Children grow fast, but their clothes should always fit comfortably today with mindful room for tomorrow. Use our instant size calculator to get accurate sizing recommendations matched to your little one.
              </p>

              {/* 4 Guarantees */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '14px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--c-charcoal)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#2E7D32" />
                  <span>100% GOTS Pure Cotton</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#2E7D32" />
                  <span>Zero-Scratch Printed Tags</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#2E7D32" />
                  <span>Pre-Shrunk Weave (No Shrink)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} color="#2E7D32" />
                  <span>7-Day Free Doorstep Pickup</span>
                </div>
              </div>
            </div>

            {/* Right: Embedded Interactive Size Calculator Box */}
            <div
              style={{
                backgroundColor: 'var(--surface-muted)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Ruler size={22} color="var(--c-brown)" />
                  <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, margin: 0, fontFamily: 'var(--font-sans)' }}>
                    Instant Child Size Finder
                  </h3>
                </div>
                <span className="badge badge-parent" style={{ backgroundColor: 'var(--c-brown)', color: '#FFFFFF' }}>
                  Smart AI Fit
                </span>
              </div>

              {/* Quick Slider: Age */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>Child's Age:</span>
                  <span style={{ color: 'var(--c-brown)', fontSize: '0.9375rem' }}>{sizeInput.age} Years</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="14"
                  step="0.5"
                  value={sizeInput.age}
                  onChange={(e) => setSizeInput(prev => ({ ...prev, age: parseFloat(e.target.value) }))}
                  style={{ width: '100%', accentColor: 'var(--c-brown)' }}
                />
              </div>

              {/* Quick Height & Build */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '0.8125rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                    Height: {sizeInput.height} cm
                  </label>
                  <input
                    type="range"
                    min="60"
                    max="165"
                    value={sizeInput.height}
                    onChange={(e) => setSizeInput(prev => ({ ...prev, height: Number(e.target.value) }))}
                    style={{ width: '100%', accentColor: 'var(--c-brown)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8125rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                    Build: {sizeInput.bodyBuild.toUpperCase()}
                  </label>
                  <select
                    value={sizeInput.bodyBuild}
                    onChange={(e) => setSizeInput(prev => ({ ...prev, bodyBuild: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      backgroundColor: 'var(--c-white)'
                    }}
                  >
                    <option value="slim">Slim Fit</option>
                    <option value="regular">Regular Fit</option>
                    <option value="husky">Roomy Fit</option>
                  </select>
                </div>
              </div>

              {/* Recommendation Strip */}
              <div
                style={{
                  backgroundColor: '#EDF8EE',
                  borderRadius: 'var(--radius-sm)',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  border: '1px solid #C8E6C9'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2E7D32', textTransform: 'uppercase' }}>
                    Calculated Recommendation
                  </div>
                  <div style={{ fontSize: '1.1875rem', fontWeight: 800, color: '#1B5E20' }}>
                    Size {recommendedSizeResult.size}
                  </div>
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#2E7D32', maxWidth: '170px', textAlign: 'right', fontWeight: 500 }}>
                  {recommendedSizeResult.note}
                </div>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px' }}
                onClick={() => {
                  let targetRange = '5-7Y';
                  if (sizeInput.age <= 2) targetRange = '0-2Y';
                  else if (sizeInput.age <= 4) targetRange = '2-4Y';
                  else if (sizeInput.age <= 7) targetRange = '5-7Y';
                  else if (sizeInput.age <= 10) targetRange = '8-10Y';
                  else targetRange = '11-14Y';
                  updateFilter('ageRange', targetRange);
                  const el = document.getElementById('editorial-collection');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Filter Catalog for Size {recommendedSizeResult.size}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Editor's Picks Section */}
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

      {/* 5. Poetic Brand Manifesto Quote */}
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

      {/* 6. Best Sellers Grid */}
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

      {/* 7. PARENT REVIEWS & SOCIAL PROOF AT BOTTOM (From Template 05) */}
      <section className="section" style={{ backgroundColor: '#F6F3EC', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">VERIFIED PROOF</span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-editorial)' }}>
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

      {/* 8. Instagram Community Feed #PetitPapillonMoments */}
      <section className="section" style={{ paddingTop: '20px', backgroundColor: '#F6F3EC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 700, color: 'var(--c-brown)' }}>
              <Camera size={18} />
              <span>#PetitPapillonMoments</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '4px', fontFamily: 'var(--font-editorial)' }}>
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
