import { useState } from 'react';
import { Heart, Star, Plus, Check } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export function ProductCard({ product, variant = 'default' }) {
  const {
    openProductDetail,
    isWishlisted,
    toggleWishlist,
    addToCart
  } = useStore();

  const [isHovered, setIsHovered] = useState(false);
  const [showQuickSizes, setShowQuickSizes] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || 'Natural');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const wishlisted = isWishlisted(product.id);

  const handleQuickAdd = (e, size) => {
    e.stopPropagation();
    addToCart(product, size || selectedSize, selectedColor, 1);
    setAddedAnimation(true);
    setShowQuickSizes(false);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div
      className={`product-card product-card-${variant}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowQuickSizes(false);
      }}
    >
      {/* Product Image Stage */}
      <div
        className="product-card-image-wrap"
        onClick={() => openProductDetail(product)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-card-img-primary"
          loading="lazy"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="product-card-img-secondary"
            loading="lazy"
          />
        )}

        {/* Badges */}
        <div className="product-card-badges">
          {product.badges?.map((badge, idx) => {
            let badgeClass = 'badge-new';
            if (badge.includes('BESTSELLER')) badgeClass = 'badge-bestseller';
            else if (badge.includes('ORGANIC')) badgeClass = 'badge-organic';
            else if (badge.includes('LIMITED')) badgeClass = 'badge-limited';
            else if (badge.includes('PARENT')) badgeClass = 'badge-parent';

            return (
              <span key={idx} className={`badge ${badgeClass}`}>
                {badge}
              </span>
            );
          })}
        </div>

        {/* Wishlist Button */}
        <button
          className={`product-card-wishlist ${wishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          aria-label="Toggle Wishlist"
        >
          <Heart size={18} fill={wishlisted ? 'var(--c-red)' : 'none'} color={wishlisted ? 'var(--c-red)' : 'currentColor'} />
        </button>

        {/* Quick Add Flyout */}
        <div className="product-card-quick-add" onClick={(e) => e.stopPropagation()}>
          {!showQuickSizes ? (
            <button
              className="btn btn-primary btn-sm"
              style={{ width: '100%', borderRadius: 'var(--radius-sm)', padding: '10px' }}
              onClick={(e) => {
                e.stopPropagation();
                if (product.sizes.length === 1) {
                  handleQuickAdd(e, product.sizes[0]);
                } else {
                  setShowQuickSizes(true);
                }
              }}
            >
              {addedAnimation ? (
                <>
                  <Check size={16} /> Added!
                </>
              ) : (
                <>
                  <Plus size={16} /> Quick Add
                </>
              )}
            </button>
          ) : (
            <div
              style={{
                backgroundColor: 'rgba(37, 35, 33, 0.95)',
                padding: '8px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div style={{ width: '100%', fontSize: '0.6875rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '2px', fontWeight: 600 }}>
                Select Size:
              </div>
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={(e) => handleQuickAdd(e, sz)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: 'var(--c-charcoal)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    padding: '4px 8px',
                    borderRadius: '4px',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--c-yellow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                  }}
                >
                  {sz}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Content Details */}
      <div className="product-card-content">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span className="product-card-brand">{product.brand}</span>
          <span className="product-card-age">{product.ageRange}</span>
        </div>

        <h3
          className="product-card-title"
          onClick={() => openProductDetail(product)}
        >
          {product.name}
        </h3>

        {/* Rating & Social Proof */}
        <div className="product-card-meta">
          <div className="product-card-rating">
            <Star size={13} fill="#E29B12" color="#E29B12" />
            <span>{product.rating}</span>
          </div>
          <span>•</span>
          <span>{product.reviewsCount} parent reviews</span>
        </div>

        {/* Color Indicators */}
        {product.colors && product.colors.length > 0 && (
          <div className="product-card-colors">
            {product.colors.map((c, i) => (
              <span
                key={i}
                className="color-dot"
                style={{ backgroundColor: c.hex, borderColor: c.border || 'rgba(0,0,0,0.1)' }}
                title={c.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(c.name);
                }}
              />
            ))}
            <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
              {product.colors.length} {product.colors.length === 1 ? 'color' : 'colors'}
            </span>
          </div>
        )}

        {/* Price Row */}
        <div className="product-card-price-row">
          <span className="price-current">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
          )}
          {product.discount && (
            <span className="price-discount">{product.discount}</span>
          )}
        </div>
      </div>
    </div>
  );
}
