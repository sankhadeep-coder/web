import { useState } from 'react';
import { Ruler, ShieldCheck, RefreshCw, Truck, Sparkles, Check, ArrowRight, Heart, Filter, HelpCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { AGE_TIERS, OCCASIONS } from '../data/categories';

export function SmartShoppingTemplate() {
  const {
    filteredProducts,
    filterState,
    updateFilter,
    resetFilters,
    sizeInput,
    setSizeInput,
    recommendedSizeResult,
    setIsSizeAssistantOpen
  } = useStore();

  const [activeTab, setActiveTab] = useState('age'); // 'age' or 'need'

  return (
    <div className="template-03" style={{ backgroundColor: '#FAF9F6' }}>
      {/* 1. Smart Hero with Conversion Utilities */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--border-light)',
          padding: '40px 0'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center'
            }}
          >
            {/* Left: Headline & Trust Highlights */}
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
                <span>Certified Non-Toxic • Pediatrician Approved Materials</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
                  fontWeight: 800,
                  color: 'var(--c-charcoal)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '16px'
                }}
              >
                Gentle on skin. Tough on play. Zero fuss.
              </h1>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Finding the right clothes shouldn't be guesswork. Verified true-to-age fits, pre-shrunk organic weaves, and 7-day doorstep pickup returns.
              </p>

              {/* 4 Smart Guarantees */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--c-charcoal)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#2E7D32" />
                  <span>100% GOTS Pure Cotton</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#2E7D32" />
                  <span>Zero-Scratch Printed Tags</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#2E7D32" />
                  <span>Pre-Shrunk Weave (No Shrink)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#2E7D32" />
                  <span>7-Day Free Doorstep Pickup</span>
                </div>
              </div>
            </div>

            {/* Right: Embedded Interactive Size Calculator Box */}
            <div
              style={{
                backgroundColor: 'var(--surface-muted)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Ruler size={20} color="var(--c-brown)" />
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 800 }}>
                    Instant Child Size Finder
                  </h3>
                </div>
                <span className="badge badge-parent">Smart AI Fit</span>
              </div>

              {/* Quick Slider */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '6px' }}>
                  <span>Child's Age:</span>
                  <span style={{ color: 'var(--c-brown)' }}>{sizeInput.age} Years</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="14"
                  step="0.5"
                  value={sizeInput.age}
                  onChange={(e) => setSizeInput(prev => ({ ...prev, age: parseFloat(e.target.value) }))}
                  style={{ width: '100%', accentColor: 'var(--c-charcoal)' }}
                />
              </div>

              {/* Quick Height & Build */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '18px' }}>
                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    Height: {sizeInput.height} cm
                  </label>
                  <input
                    type="range"
                    min="60"
                    max="165"
                    value={sizeInput.height}
                    onChange={(e) => setSizeInput(prev => ({ ...prev, height: Number(e.target.value) }))}
                    style={{ width: '100%', accentColor: 'var(--c-charcoal)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    Build: {sizeInput.bodyBuild.toUpperCase()}
                  </label>
                  <select
                    value={sizeInput.bodyBuild}
                    onChange={(e) => setSizeInput(prev => ({ ...prev, bodyBuild: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '6px 8px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.75rem',
                      fontWeight: 600
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
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#2E7D32', textTransform: 'uppercase' }}>
                    Calculated Recommendation
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#1B5E20' }}>
                    Size {recommendedSizeResult.size}
                  </div>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#388E3C', maxWidth: '160px', textAlign: 'right' }}>
                  {recommendedSizeResult.note}
                </div>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%', padding: '10px' }}
                onClick={() => {
                  let targetRange = '5-7Y';
                  if (sizeInput.age <= 2) targetRange = '0-2Y';
                  else if (sizeInput.age <= 4) targetRange = '2-4Y';
                  else if (sizeInput.age <= 7) targetRange = '5-7Y';
                  else if (sizeInput.age <= 10) targetRange = '8-10Y';
                  else targetRange = '11-14Y';
                  updateFilter('ageRange', targetRange);
                }}
              >
                <span>Filter Catalog for Size {recommendedSizeResult.size}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shop By Age & Shop By Need Navigation Tabs */}
      <section style={{ backgroundColor: 'var(--c-white)', borderBottom: '1px solid var(--border-light)', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '20px' }}>
            <button
              onClick={() => setActiveTab('age')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: 700,
                backgroundColor: activeTab === 'age' ? 'var(--c-charcoal)' : 'var(--surface-muted)',
                color: activeTab === 'age' ? '#FFFFFF' : 'var(--text-primary)',
                transition: 'all 0.15s ease'
              }}
            >
              👶 Shop By Age
            </button>
            <button
              onClick={() => setActiveTab('need')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: 700,
                backgroundColor: activeTab === 'need' ? 'var(--c-charcoal)' : 'var(--surface-muted)',
                color: activeTab === 'need' ? '#FFFFFF' : 'var(--text-primary)',
                transition: 'all 0.15s ease'
              }}
            >
              🎯 Shop By Need & Occasion
            </button>
          </div>

          {/* Age Bar */}
          {activeTab === 'age' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
              {AGE_TIERS.map((tier) => {
                const isSelected = filterState.ageRange === `${tier.id.toUpperCase()}Y`;
                return (
                  <button
                    key={tier.id}
                    onClick={() => updateFilter('ageRange', isSelected ? 'all' : `${tier.id.toUpperCase()}Y`)}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isSelected ? 'var(--c-charcoal)' : 'var(--surface-muted)',
                      color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                      border: isSelected ? '2px solid var(--c-charcoal)' : '1px solid var(--border-light)',
                      textAlign: 'center',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{tier.icon}</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700 }}>{tier.label}</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '2px' }}>{tier.description}</div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Need / Occasion Bar */}
          {activeTab === 'need' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              {OCCASIONS.map((occ) => {
                const isSelected = filterState.occasion === occ.id;
                return (
                  <button
                    key={occ.id}
                    onClick={() => updateFilter('occasion', isSelected ? 'all' : occ.id)}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isSelected ? 'var(--c-charcoal)' : 'var(--surface-muted)',
                      color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                      border: isSelected ? '2px solid var(--c-charcoal)' : '1px solid var(--border-light)',
                      textAlign: 'center',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{occ.icon}</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>{occ.name}</div>
                    <div style={{ fontSize: '0.6875rem', opacity: 0.8, marginTop: '2px' }}>{occ.tagline}</div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 3. Product Results with Parent Information */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Certified Garments Matching Your Criteria
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Showing {filteredProducts.length} verified organic cotton styles
              </p>
            </div>
            {filterState.ageRange !== 'all' || filterState.occasion !== 'all' ? (
              <button
                className="btn btn-secondary btn-sm"
                onClick={resetFilters}
              >
                Clear Filters
              </button>
            ) : null}
          </div>

          <div className="products-grid">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} variant="smart" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
