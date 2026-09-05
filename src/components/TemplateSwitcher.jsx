import { useState } from 'react';
import { Layers, Sparkles, X, Check, ArrowRight, BookOpen, Compass, ShieldCheck, Heart, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const TEMPLATE_INFO = [
  {
    id: '01',
    name: 'Little Editorial',
    tagline: 'High-Fashion Magazine Aesthetic',
    font: 'Playfair Display Serif',
    vibe: 'Premium, Timeless, Elegant',
    desc: 'Inspired by luxury childrenswear editorials and lookbooks. Features oversized photography, generous whitespace, poetic storytelling, and minimalist typography.',
    primaryAudience: 'Parents looking for high-end heirloom & special occasion garments',
    accentColor: '#76563C'
  },
  {
    id: '02',
    name: 'Playful Bento',
    tagline: 'Modern Gen-Z Modular Architecture',
    font: 'Outfit Geometric Sans',
    vibe: 'Clean, Contemporary, Dynamic',
    desc: 'Modular interlocking cards, pastel color blocks, floating sticker badges, and micro-interactions. Speaks directly to modern digital-native parents.',
    primaryAudience: 'Millennial & Gen-Z parents wanting a fresh, trendy shopping experience',
    accentColor: '#3979D0'
  },
  {
    id: '03',
    name: 'Smart Shopping',
    tagline: 'Conversion-Engineered Parental Utility',
    font: 'Plus Jakarta Sans',
    vibe: 'Efficient, Transparent, Trust-First',
    desc: 'Zero-friction layout built to answer parental questions instantly. Prominent "Shop by Age" and "Shop by Need", embedded interactive Size Finder, and high trust proof.',
    primaryAudience: 'Busy parents who need the right fit, fast delivery, and hassle-free checkout',
    accentColor: '#1A6B42'
  },
  {
    id: '04',
    name: 'Kids World',
    tagline: 'Child-Centric Adventure Universe',
    font: 'Fredoka Playful Rounded',
    vibe: 'Joyful, Thematic, Story-Driven',
    desc: 'Connects emotionally with children through Adventure Clubs (Dino, Space, Superhero, Fairy) and interactive personality filters while keeping parents comfortably in control.',
    primaryAudience: 'Parents shopping together with their kids to pick outfits they actually want to wear',
    accentColor: '#D83F4B'
  },
  {
    id: '05',
    name: 'The Complete Store',
    tagline: 'Enterprise Commercial E-Commerce Flagship',
    font: 'Plus Jakarta Sans',
    vibe: 'Retail Powerhouse, Complete, Scalable',
    desc: 'Production-ready commercial layout with full megamenu, campaign hero, "Complete the Look" 1-click outfit bundling, customer social feed, and comprehensive footer.',
    primaryAudience: 'Broad audience; ideal for large catalog scales with seasonal marketing campaigns',
    accentColor: '#FF8A3D'
  }
];

export function TemplateSwitcher() {
  const {
    activeTemplate,
    setActiveTemplate,
    isShowcaseModalOpen,
    setIsShowcaseModalOpen
  } = useStore();

  return (
    <>
      {/* Floating Design Showcase Dock */}
      <aside
        className="switcher-dock-wrapper"
        aria-label="Design System Showcase Switcher"
      >
        <div className="switcher-label">
          <Layers size={14} />
          <span>DESIGN</span>
        </div>

        {TEMPLATE_INFO.map((tmpl) => {
          const isActive = activeTemplate === tmpl.id;
          return (
            <button
              key={tmpl.id}
              onClick={() => setActiveTemplate(tmpl.id)}
              className={`switcher-pill-btn ${isActive ? 'active' : ''}`}
              title={`${tmpl.name} — ${tmpl.tagline}`}
            >
              <span>{tmpl.id}</span>
              <span className="switcher-name-text">{tmpl.name}</span>
            </button>
          );
        })}

        {/* Info / Guide Trigger */}
        <button
          className="switcher-guide-btn"
          onClick={() => setIsShowcaseModalOpen(true)}
          title="Learn about these 5 design directions"
          aria-label="Design Showcase Guide"
        >
          <BookOpen size={16} />
        </button>
      </aside>

      {/* Showcase Modal Overlay */}
      {isShowcaseModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsShowcaseModalOpen(false)}>
          <div
            className="showcase-guide-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--c-white)',
              borderRadius: 'var(--radius-lg)',
              width: '100%',
              maxWidth: '920px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-float)',
              margin: '20px',
              padding: '36px',
              position: 'relative',
              animation: 'slideInUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            <button
              onClick={() => setIsShowcaseModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--surface-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(216, 63, 75, 0.1)',
                  color: 'var(--c-red)',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px'
                }}
              >
                <Sparkles size={14} />
                Client Demonstration Showcase
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
                One Unified Store. Five Unique Experiences.
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Every template connects to the exact same live catalog, persistent cart, wishlist, and interactive sizing engine. Switch templates anytime to demonstrate different brand positioning to your client.
              </p>
            </div>

            {/* The 5 Directions Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              {TEMPLATE_INFO.map((t) => {
                const isActive = activeTemplate === t.id;
                return (
                  <div
                    key={t.id}
                    onClick={() => {
                      setActiveTemplate(t.id);
                      setIsShowcaseModalOpen(false);
                    }}
                    style={{
                      padding: '20px',
                      borderRadius: 'var(--radius-md)',
                      border: isActive ? '2px solid var(--c-charcoal)' : '1px solid var(--border-light)',
                      backgroundColor: isActive ? 'var(--surface-muted)' : 'var(--c-white)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          backgroundColor: t.accentColor,
                          color: '#FFFFFF',
                          padding: '2px 8px',
                          borderRadius: '4px'
                        }}
                      >
                        TEMPLATE {t.id}
                      </span>
                      {isActive && (
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2E7D32', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Check size={14} /> Active
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {t.name}
                    </h3>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--c-brown)', marginBottom: '10px' }}>
                      {t.tagline}
                    </div>

                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '14px', flex: 1 }}>
                      {t.desc}
                    </p>

                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-subtle)', borderTop: '1px solid var(--border-light)', paddingTop: '10px' }}>
                      <strong>Target:</strong> {t.primaryAudience}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                className="btn btn-primary"
                onClick={() => setIsShowcaseModalOpen(false)}
              >
                Close & Return to Store
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
