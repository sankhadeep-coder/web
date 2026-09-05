import { X, Trash2, ShoppingBag, Heart } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';

export function WishlistDrawer() {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    openProductDetail
  } = useStore();

  if (!isWishlistOpen) return null;

  const wishlistedItems = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="modal-backdrop" onClick={() => setIsWishlistOpen(false)}>
      <div
        className="drawer-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-header">
          <div className="drawer-title">
            <Heart size={20} fill="var(--c-red)" color="var(--c-red)" />
            <span>Saved Outfits ({wishlistedItems.length})</span>
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          {wishlistedItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 16px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🤍</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px' }}>
                Your wishlist is empty
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Click the heart icon on any outfit to save it for your next family event or birthday.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setIsWishlistOpen(false)}
              >
                Browse Outfits
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {wishlistedItems.map((prod) => (
                <div
                  key={prod.id}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid var(--border-light)'
                  }}
                >
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    style={{
                      width: '74px',
                      height: '92px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      openProductDetail(prod);
                      setIsWishlistOpen(false);
                    }}
                  />

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          lineHeight: 1.3,
                          cursor: 'pointer'
                        }}
                        onClick={() => {
                          openProductDetail(prod);
                          setIsWishlistOpen(false);
                        }}
                      >
                        {prod.name}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(prod.id)}
                        style={{ color: 'var(--text-subtle)', padding: '2px' }}
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '4px 0 8px' }}>
                      {prod.ageRange} • {prod.material}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        ₹{prod.price.toLocaleString()}
                      </span>

                      <button
                        className="btn btn-primary btn-sm"
                        style={{ padding: '6px 14px', fontSize: '0.75rem' }}
                        onClick={() => {
                          addToCart(prod, prod.sizes[0], prod.colors?.[0]?.name, 1);
                        }}
                      >
                        <ShoppingBag size={14} /> Move to Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
