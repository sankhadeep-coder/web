import { X, RotateCcw, Check } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES, AGE_TIERS, OCCASIONS, PERSONALITIES } from '../data/categories';

export function FilterDrawer() {
  const {
    isFilterDrawerOpen,
    setIsFilterDrawerOpen,
    filterState,
    updateFilter,
    resetFilters,
    filteredProducts,
    activeFilterCount
  } = useStore();

  if (!isFilterDrawerOpen) return null;

  return (
    <div className="modal-backdrop" onClick={() => setIsFilterDrawerOpen(false)}>
      <div
        className="drawer-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-header">
          <div className="drawer-title">
            <span>Filter Outfits</span>
            {activeFilterCount > 0 && (
              <span className="badge badge-parent">
                {activeFilterCount} active
              </span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--c-red)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <RotateCcw size={13} /> Reset
              </button>
            )}
            <button
              className="drawer-close-btn"
              onClick={() => setIsFilterDrawerOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="drawer-body" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Sort By */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Sort By
            </h4>
            <select
              value={filterState.sortBy}
              onChange={(e) => updateFilter('sortBy', e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--c-white)',
                color: 'var(--text-primary)',
                fontWeight: 600
              }}
            >
              <option value="featured">Featured & Best Sellers</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Parent Rating</option>
            </select>
          </div>

          {/* Age Tier */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Shop By Age
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <button
                onClick={() => updateFilter('ageRange', 'all')}
                style={{
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  border: filterState.ageRange === 'all' ? '2px solid var(--c-charcoal)' : '1px solid var(--border-light)',
                  backgroundColor: filterState.ageRange === 'all' ? 'var(--c-charcoal)' : 'var(--c-white)',
                  color: filterState.ageRange === 'all' ? '#FFFFFF' : 'var(--text-primary)'
                }}
              >
                All Ages
              </button>
              {AGE_TIERS.map((age) => (
                <button
                  key={age.id}
                  onClick={() => updateFilter('ageRange', `${age.id.replace('-', '–')}Y` === filterState.ageRange ? 'all' : `${age.id.toUpperCase()}Y`)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textAlign: 'left',
                    border: filterState.ageRange === `${age.id.toUpperCase()}Y` ? '2px solid var(--c-charcoal)' : '1px solid var(--border-light)',
                    backgroundColor: filterState.ageRange === `${age.id.toUpperCase()}Y` ? 'var(--c-charcoal)' : 'var(--c-white)',
                    color: filterState.ageRange === `${age.id.toUpperCase()}Y` ? '#FFFFFF' : 'var(--text-primary)'
                  }}
                >
                  {age.icon} {age.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Department
            </h4>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { id: 'all', label: 'All' },
                { id: 'girls', label: '🌸 Girls' },
                { id: 'boys', label: '⚡ Boys' },
                { id: 'baby', label: '🍼 Baby' }
              ].map((g) => (
                <button
                  key={g.id}
                  onClick={() => updateFilter('gender', g.id)}
                  style={{
                    flex: 1,
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    border: filterState.gender === g.id ? '2px solid var(--c-charcoal)' : '1px solid var(--border-light)',
                    backgroundColor: filterState.gender === g.id ? 'var(--c-charcoal)' : 'var(--c-white)',
                    color: filterState.gender === g.id ? '#FFFFFF' : 'var(--text-primary)'
                  }}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Occasion / Need */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Shop By Occasion
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <button
                onClick={() => updateFilter('occasion', 'all')}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  border: filterState.occasion === 'all' ? '1.5px solid var(--c-charcoal)' : '1px solid var(--border-light)',
                  backgroundColor: filterState.occasion === 'all' ? 'var(--c-charcoal)' : 'var(--surface-muted)',
                  color: filterState.occasion === 'all' ? '#FFFFFF' : 'var(--text-primary)'
                }}
              >
                All Occasions
              </button>
              {OCCASIONS.map((occ) => (
                <button
                  key={occ.id}
                  onClick={() => updateFilter('occasion', filterState.occasion === occ.id ? 'all' : occ.id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    border: filterState.occasion === occ.id ? '1.5px solid var(--c-charcoal)' : '1px solid var(--border-light)',
                    backgroundColor: filterState.occasion === occ.id ? 'var(--c-charcoal)' : 'var(--surface-muted)',
                    color: filterState.occasion === occ.id ? '#FFFFFF' : 'var(--text-primary)'
                  }}
                >
                  {occ.name}
                </button>
              ))}
            </div>
          </div>

          {/* Child Personality */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Pick Personality
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {PERSONALITIES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => updateFilter('personality', filterState.personality === p.id ? 'all' : p.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textAlign: 'left',
                    border: filterState.personality === p.id ? '2px solid var(--c-charcoal)' : '1px solid var(--border-light)',
                    backgroundColor: filterState.personality === p.id ? 'var(--c-charcoal)' : 'var(--c-white)',
                    color: filterState.personality === p.id ? '#FFFFFF' : 'var(--text-primary)'
                  }}
                >
                  <span>{p.icon}</span>
                  <span>{p.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Max Price
              </h4>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--c-brown)' }}>
                ₹{filterState.priceMax.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="400"
              max="2500"
              step="100"
              value={filterState.priceMax}
              onChange={(e) => updateFilter('priceMax', Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--c-charcoal)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              <span>₹400</span>
              <span>₹1,500</span>
              <span>₹2,500</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="drawer-footer">
          <button
            className="btn btn-primary"
            style={{ width: '100%', padding: '14px' }}
            onClick={() => setIsFilterDrawerOpen(false)}
          >
            Show {filteredProducts.length} Results
          </button>
        </div>
      </div>
    </div>
  );
}
