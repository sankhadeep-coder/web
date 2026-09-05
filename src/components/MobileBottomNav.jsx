import { Home, SlidersHorizontal, Search, Heart, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export function MobileBottomNav() {
  const {
    setIsFilterDrawerOpen,
    setIsSearchOpen,
    setIsWishlistOpen,
    setIsCartOpen,
    wishlist,
    cartCount,
    resetFilters
  } = useStore();

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
      <button
        className="mobile-nav-item active"
        onClick={() => {
          resetFilters();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      <button
        className="mobile-nav-item"
        onClick={() => setIsFilterDrawerOpen(true)}
      >
        <SlidersHorizontal size={20} />
        <span>Filters</span>
      </button>

      <button
        className="mobile-nav-item"
        onClick={() => setIsSearchOpen(true)}
      >
        <Search size={20} />
        <span>Search</span>
      </button>

      <button
        className="mobile-nav-item"
        onClick={() => setIsWishlistOpen(true)}
      >
        <Heart size={20} />
        {wishlist.length > 0 && (
          <span className="mobile-nav-badge">{wishlist.length}</span>
        )}
        <span>Wishlist</span>
      </button>

      <button
        className="mobile-nav-item"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingBag size={20} />
        {cartCount > 0 && (
          <span className="mobile-nav-badge">{cartCount}</span>
        )}
        <span>Bag</span>
      </button>
    </nav>
  );
}
