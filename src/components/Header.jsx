import { useState } from 'react';
import { Search, Heart, ShoppingBag, SlidersHorizontal, Menu, X, Sparkles, HelpCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export function Header() {
  const {
    cartCount,
    cartSubtotal,
    setIsCartOpen,
    wishlist,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsFilterDrawerOpen,
    setIsSizeAssistantOpen,
    updateFilter,
    resetFilters,
    activeFilterCount
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavCategory = (cat) => {
    resetFilters();
    updateFilter('category', cat);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Configurable Announcement Bar */}
      <div className="announcement-bar">
        <span className="announcement-badge">NEW SEASON</span>
        <span>Spring & Summer Edit Live • Free Shipping over ₹999 • 7-Day Doorstep Returns</span>
        <button
          onClick={() => setIsSizeAssistantOpen(true)}
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: 'var(--c-yellow)',
            fontSize: '0.75rem',
            fontWeight: 700,
            textDecoration: 'underline'
          }}
          className="size-guide-announcement-btn"
        >
          <HelpCircle size={13} />
          Find Child's Size
        </button>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="container header-inner">
          {/* Mobile Menu Hamburger */}
          <button
            className="action-btn mobile-only"
            style={{ display: 'none' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              resetFilters();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="brand-logo"
          >
            <span className="brand-logo-mark">🦋</span>
            <span>PETIT PAPILLON</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex' }}>
            <ul className="nav-links">
              <li>
                <button className="nav-link" onClick={() => handleNavCategory('girls')}>
                  Girls
                </button>
              </li>
              <li>
                <button className="nav-link" onClick={() => handleNavCategory('boys')}>
                  Boys
                </button>
              </li>
              <li>
                <button className="nav-link" onClick={() => handleNavCategory('baby')}>
                  Baby (0-2Y)
                </button>
              </li>
              <li>
                <button className="nav-link" onClick={() => handleNavCategory('newborn')}>
                  Newborn Gift
                </button>
              </li>
              <li>
                <button className="nav-link" onClick={() => handleNavCategory('all')}>
                  Collections
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  onClick={() => setIsSizeAssistantOpen(true)}
                  style={{ color: 'var(--c-brown)', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <Sparkles size={14} />
                  Size Finder
                </button>
              </li>
              <li>
                <button className="nav-link sale" onClick={() => handleNavCategory('party')}>
                  Sale -30%
                </button>
              </li>
            </ul>
          </nav>

          {/* Header Action Icons */}
          <div className="header-actions">
            {/* Filter Toggle Trigger */}
            <button
              className="action-btn"
              onClick={() => setIsFilterDrawerOpen(true)}
              title="Filters"
              aria-label="Filters"
            >
              <SlidersHorizontal size={19} />
              {activeFilterCount > 0 && (
                <span className="cart-counter" style={{ backgroundColor: 'var(--c-charcoal)' }}>
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Search Trigger */}
            <button
              className="action-btn"
              onClick={() => setIsSearchOpen(true)}
              title="Search products"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Wishlist Trigger */}
            <button
              className="action-btn"
              onClick={() => setIsWishlistOpen(true)}
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="cart-counter">{wishlist.length}</span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              className="action-btn"
              onClick={() => setIsCartOpen(true)}
              title="Shopping Cart"
              aria-label="Shopping Cart"
              style={{
                backgroundColor: 'var(--surface-muted)',
                borderRadius: 'var(--radius-full)',
                padding: '0 14px',
                width: 'auto',
                gap: '8px'
              }}
            >
              <ShoppingBag size={18} />
              <span style={{ fontSize: '0.8125rem', fontWeight: 700 }}>
                ₹{cartSubtotal.toLocaleString()}
              </span>
              {cartCount > 0 && (
                <span className="cart-counter">{cartCount}</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '20px 24px',
              backgroundColor: 'var(--c-white)',
              borderBottom: '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            <button
              style={{ textAlign: 'left', fontWeight: 600, fontSize: '1rem' }}
              onClick={() => handleNavCategory('girls')}
            >
              🌸 Girls Collection
            </button>
            <button
              style={{ textAlign: 'left', fontWeight: 600, fontSize: '1rem' }}
              onClick={() => handleNavCategory('boys')}
            >
              ⚡ Boys Collection
            </button>
            <button
              style={{ textAlign: 'left', fontWeight: 600, fontSize: '1rem' }}
              onClick={() => handleNavCategory('baby')}
            >
              🍼 Baby & Toddler (0–2Y)
            </button>
            <button
              style={{ textAlign: 'left', fontWeight: 600, fontSize: '1rem' }}
              onClick={() => handleNavCategory('newborn')}
            >
              🐣 Newborn Gift Sets
            </button>
            <button
              style={{ textAlign: 'left', fontWeight: 600, fontSize: '1rem', color: 'var(--c-brown)' }}
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSizeAssistantOpen(true);
              }}
            >
              ✨ Interactive Size Assistant
            </button>
          </div>
        )}
      </header>
    </>
  );
}
