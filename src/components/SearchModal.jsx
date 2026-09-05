import { useState, useMemo } from 'react';
import { Search, X, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';

const POPULAR_SEARCHES = [
  'organic dress',
  'boys summer t-shirts',
  'birthday party frock',
  'clothes under ₹999',
  'dino collection',
  'newborn gift sets',
  'linen shirts',
  'soft pajamas'
];

export function SearchModal() {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    recentSearches,
    addRecentSearch,
    openProductDetail,
    updateFilter
  } = useStore();

  const [inputVal, setInputVal] = useState(searchQuery);

  const matchedProducts = useMemo(() => {
    if (!inputVal || inputVal.trim() === '') return [];
    const q = inputVal.toLowerCase().trim();
    return PRODUCTS.filter(p => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
      );
    }).slice(0, 6);
  }, [inputVal]);

  if (!isSearchOpen) return null;

  const handleExecuteSearch = (query) => {
    addRecentSearch(query);
    setSearchQuery(query);
    setIsSearchOpen(false);
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsSearchOpen(false)}>
      <div
        className="search-modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          backgroundColor: 'var(--c-white)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-float)',
          margin: '20px',
          animation: 'slideInUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '18px 24px',
            borderBottom: '1px solid var(--border-light)'
          }}
        >
          <Search size={22} color="var(--c-brown)" />
          <input
            type="text"
            placeholder="Search dresses, t-shirts, organic cotton, dino club..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleExecuteSearch(inputVal);
            }}
            autoFocus
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1.0625rem',
              color: 'var(--text-primary)'
            }}
          />
          {inputVal && (
            <button onClick={() => setInputVal('')} style={{ color: 'var(--text-subtle)' }}>
              <X size={18} />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            style={{
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: 'var(--text-muted)',
              padding: '6px 10px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--surface-muted)'
            }}
          >
            ESC
          </button>
        </div>

        {/* Results / Suggestions Stage */}
        <div style={{ padding: '24px', maxHeight: '65vh', overflowY: 'auto' }}>
          {/* Live Matching Products */}
          {matchedProducts.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Matching Products ({matchedProducts.length})
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                {matchedProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      addRecentSearch(inputVal);
                      openProductDetail(p);
                      setIsSearchOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '10px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--surface-muted)',
                      cursor: 'pointer',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EAE5DC'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--surface-muted)'}
                  >
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      style={{ width: '50px', height: '64px', objectFit: 'cover', borderRadius: '4px' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {p.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {p.ageRange} • {p.brand}
                      </div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--c-brown)', marginTop: '2px' }}>
                        ₹{p.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Popular Searches */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '12px' }}>
              <TrendingUp size={14} color="var(--c-orange)" />
              <span>Popular Searches</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {POPULAR_SEARCHES.map((pop, i) => (
                <button
                  key={i}
                  onClick={() => handleExecuteSearch(pop)}
                  style={{
                    backgroundColor: 'var(--surface-muted)',
                    color: 'var(--text-primary)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--c-charcoal)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--surface-muted)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  <span>{pop}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '12px' }}>
                <Clock size={14} />
                <span>Recent Searches</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {recentSearches.map((rec, i) => (
                  <button
                    key={i}
                    onClick={() => handleExecuteSearch(rec)}
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'transparent',
                      border: '1px dashed var(--border-medium)'
                    }}
                  >
                    {rec}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
