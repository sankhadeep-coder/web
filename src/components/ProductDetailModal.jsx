import { useState } from 'react';
import { X, Heart, Star, ShieldCheck, RefreshCw, Sparkles, Check, Plus, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';

export function ProductDetailModal() {
  const {
    selectedProduct,
    closeProductDetail,
    addToCart,
    isWishlisted,
    toggleWishlist,
    setIsSizeAssistantOpen,
    setIsCartOpen,
    openProductDetail
  } = useStore();

  if (!selectedProduct) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors?.[0]?.name || 'Natural');
  const [quantity, setQuantity] = useState(1);

  const wishlisted = isWishlisted(selectedProduct.id);

  // Bundle Items for "Complete the Look"
  const bundleItems = (selectedProduct.completeTheLook || [])
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean);

  const handleAddToCart = () => {
    addToCart(selectedProduct, selectedSize, selectedColor, quantity);
  };

  const handleBuyNow = () => {
    addToCart(selectedProduct, selectedSize, selectedColor, quantity);
    closeProductDetail();
    setIsCartOpen(true);
  };

  const handleAddBundle = () => {
    addToCart(selectedProduct, selectedSize, selectedColor, 1);
    bundleItems.forEach(item => {
      addToCart(item, item.sizes[0], item.colors?.[0]?.name, 1);
    });
    closeProductDetail();
    setIsCartOpen(true);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={closeProductDetail}
      style={{ padding: '20px' }}
    >
      <div
        className="product-detail-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--c-white)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '1060px',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-float)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Sticky Close Button */}
        <button
          onClick={closeProductDetail}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            cursor: 'pointer'
          }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '36px',
            padding: '36px'
          }}
        >
          {/* Left Column: Image Gallery */}
          <div>
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                aspectRatio: '3 / 4',
                backgroundColor: 'var(--surface-muted)',
                marginBottom: '16px',
                position: 'relative'
              }}
            >
              <img
                src={selectedProduct.images[activeImageIndex] || selectedProduct.images[0]}
                alt={selectedProduct.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  display: 'flex',
                  gap: '6px'
                }}
              >
                {selectedProduct.badges?.map((b, i) => (
                  <span key={i} className="badge badge-bestseller">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Thumbnail Row */}
            {selectedProduct.images.length > 1 && (
              <div style={{ display: 'flex', gap: '10px' }}>
                {selectedProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      width: '74px',
                      height: '96px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: activeImageIndex === idx ? '2px solid var(--c-charcoal)' : '1px solid var(--border-light)',
                      opacity: activeImageIndex === idx ? 1 : 0.6,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <img src={img} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Buy Box */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--c-brown)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {selectedProduct.brand} • {selectedProduct.ageRange}
              </span>
              <button
                onClick={() => toggleWishlist(selectedProduct.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: wishlisted ? 'var(--c-red)' : 'var(--text-muted)'
                }}
              >
                <Heart size={18} fill={wishlisted ? 'var(--c-red)' : 'none'} />
                {wishlisted ? 'Saved' : 'Save'}
              </button>
            </div>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.25, color: 'var(--text-primary)', marginBottom: '12px' }}>
              {selectedProduct.name}
            </h2>

            {/* Rating Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#E29B12', fontWeight: 700 }}>
                <Star size={16} fill="#E29B12" />
                <span>{selectedProduct.rating}</span>
              </div>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span style={{ color: 'var(--text-muted)' }}>{selectedProduct.reviewsCount} verified parent reviews</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span style={{ color: '#2E7D32', fontWeight: 600 }}>✓ In Stock ({selectedProduct.stock} left)</span>
            </div>

            {/* Pricing */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                ₹{selectedProduct.price.toLocaleString()}
              </span>
              {selectedProduct.originalPrice && (
                <span style={{ fontSize: '1.125rem', textDecoration: 'line-through', color: 'var(--text-subtle)' }}>
                  ₹{selectedProduct.originalPrice.toLocaleString()}
                </span>
              )}
              {selectedProduct.discount && (
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--c-red)', backgroundColor: '#FEECEE', padding: '3px 8px', borderRadius: '4px' }}>
                  {selectedProduct.discount}
                </span>
              )}
            </div>

            {/* Color Swatches */}
            {selectedProduct.colors && (
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>
                  Color: <span style={{ color: 'var(--text-muted)' }}>{selectedColor}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {selectedProduct.colors.map((c, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(c.name)}
                      style={{
                        padding: '4px',
                        borderRadius: '50%',
                        border: selectedColor === c.name ? '2px solid var(--c-charcoal)' : '2px solid transparent'
                      }}
                      title={c.name}
                    >
                      <div
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          backgroundColor: c.hex,
                          border: '1px solid rgba(0,0,0,0.1)'
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  Size: <span style={{ color: 'var(--c-charcoal)' }}>{selectedSize}</span>
                </div>
                <button
                  onClick={() => setIsSizeAssistantOpen(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--c-brown)',
                    textDecoration: 'underline'
                  }}
                >
                  <Sparkles size={14} />
                  Find My Child's Size
                </button>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProduct.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    style={{
                      padding: '10px 18px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      border: selectedSize === sz ? '2px solid var(--c-charcoal)' : '1px solid var(--border-medium)',
                      backgroundColor: selectedSize === sz ? 'var(--c-charcoal)' : 'var(--c-white)',
                      color: selectedSize === sz ? 'var(--c-white)' : 'var(--text-primary)',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {sz}
                  </button>
                ))}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                💡 <em>Tip: All our garments are patterned with a 4cm growth-room hem allowance.</em>
              </div>
            </div>

            {/* Quantity & CTAs */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-full)',
                  padding: '4px 12px',
                  backgroundColor: 'var(--c-white)'
                }}
              >
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ padding: '6px', fontWeight: 700, fontSize: '1.1rem' }}
                >
                  -
                </button>
                <span style={{ padding: '0 12px', fontWeight: 700, fontSize: '0.9375rem' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ padding: '6px', fontWeight: 700, fontSize: '1.1rem' }}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} /> Add to Cart
              </button>

              <button
                className="btn btn-accent"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>

            {/* Parent-Centric Callout Box */}
            <div
              style={{
                backgroundColor: 'var(--surface-muted)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                marginBottom: '24px',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <ShieldCheck size={20} color="var(--c-brown)" />
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--c-brown)' }}>
                  Why Parents Love This Garment
                </h4>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem' }}>
                {selectedProduct.whyParentsLove?.map((bullet, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'var(--text-primary)' }}>
                    <Check size={15} color="#2E7D32" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description & Fabric Specs */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '6px' }}>
                Garment Description
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '12px' }}>
                {selectedProduct.description}
              </p>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div><strong>Material:</strong> {selectedProduct.material}</div>
                <div><strong>Origin:</strong> Made ethically in Tirupur, India</div>
                <div><strong>Care:</strong> Machine wash cold at 30°C, dry in shade</div>
              </div>
            </div>

            {/* Complete the Look Cross-Sell Bundle */}
            {bundleItems.length > 0 && (
              <div
                style={{
                  border: '1.5px dashed var(--border-medium)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                  backgroundColor: 'var(--c-cream)',
                  marginTop: 'auto'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--c-charcoal)' }}>
                    ✨ Complete The Look (Save 15% on Outfit)
                  </div>
                  <button
                    onClick={handleAddBundle}
                    className="btn btn-primary btn-sm"
                    style={{ fontSize: '0.75rem', padding: '6px 12px' }}
                  >
                    + Add Full Outfit
                  </button>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  {bundleItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => openProductDetail(item)}
                      style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                        backgroundColor: 'var(--c-white)',
                        padding: '6px 10px',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        style={{ width: '38px', height: '48px', objectFit: 'cover', borderRadius: '4px' }}
                      />
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', maxWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--c-brown)' }}>
                          ₹{item.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
