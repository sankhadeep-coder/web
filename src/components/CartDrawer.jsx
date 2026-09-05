import { useState } from 'react';
import { X, Trash2, ShieldCheck, ArrowRight, Sparkles, ShoppingBag, Truck } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';

export function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    FREE_SHIPPING_THRESHOLD,
    remainingForFreeShipping,
    couponCode,
    setCouponCode,
    applyCoupon,
    appliedDiscount,
    discountAmount,
    finalTotal,
    triggerCheckoutSuccess,
    openProductDetail,
    setIsCheckoutModalOpen
  } = useStore();

  const [inputCoupon, setInputCoupon] = useState('');

  if (!isCartOpen) return null;

  const freeShippingPercent = Math.min(100, Math.round((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100));

  // Quick cross sell items
  const suggestedItems = PRODUCTS.slice(6, 9);

  return (
    <div className="modal-backdrop" onClick={() => setIsCartOpen(false)}>
      <div
        className="drawer-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-title">
            <ShoppingBag size={20} />
            <span>Your Shopping Bag ({cart.length})</span>
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="drawer-body">
          {/* Free Shipping Tracker */}
          <div className="shipping-progress-wrap">
            <div className="shipping-progress-text" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Truck size={16} color="#2E7D32" />
              {remainingForFreeShipping === 0 ? (
                <span style={{ color: '#2E7D32', fontWeight: 700 }}>
                  🎉 You unlocked FREE Express Doorstep Delivery!
                </span>
              ) : (
                <span>
                  Add <strong style={{ color: 'var(--c-charcoal)' }}>₹{remainingForFreeShipping}</strong> more for <strong>FREE Delivery</strong>
                </span>
              )}
            </div>
            <div className="shipping-progress-bar">
              <div
                className="shipping-progress-fill"
                style={{ width: `${freeShippingPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 16px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🛍️</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px' }}>
                Your bag is empty
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Explore our gentle organic cotton collection and find your child's next favorite outfit.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setIsCartOpen(false)}
              >
                Start Exploring
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid var(--border-light)'
                  }}
                >
                  <img
                    src={item.product?.images?.[0]}
                    alt={item.product?.name}
                    style={{
                      width: '74px',
                      height: '92px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--surface-muted)',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      openProductDetail(item.product);
                      setIsCartOpen(false);
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
                          openProductDetail(item.product);
                          setIsCartOpen(false);
                        }}
                      >
                        {item.product?.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{ color: 'var(--text-subtle)', padding: '2px' }}
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '4px 0 8px' }}>
                      Size: <strong>{item.selectedSize}</strong> • Color: {item.selectedColor}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                      {/* Quantity Stepper */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: '1px solid var(--border-medium)',
                          borderRadius: 'var(--radius-full)',
                          padding: '2px 8px',
                          backgroundColor: 'var(--c-white)'
                        }}
                      >
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          style={{ padding: '2px 6px', fontWeight: 700 }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: '0.8125rem', fontWeight: 700, padding: '0 8px' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          style={{ padding: '2px 6px', fontWeight: 700 }}
                        >
                          +
                        </button>
                      </div>

                      <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Cross-Sell Carousel */}
              <div style={{ marginTop: '12px' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, marginBottom: '8px', color: 'var(--c-charcoal)' }}>
                  You May Also Like:
                </div>
                <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
                  {suggestedItems.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => openProductDetail(s)}
                      style={{
                        minWidth: '130px',
                        backgroundColor: 'var(--surface-muted)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <img
                        src={s.images[0]}
                        alt={s.name}
                        style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px', marginBottom: '6px' }}
                      />
                      <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {s.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--c-brown)', marginTop: '2px' }}>
                        ₹{s.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="drawer-footer">
            {/* Promo Code Input */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
              <input
                type="text"
                placeholder="Promo Code (e.g. PETIT10)"
                value={inputCoupon}
                onChange={(e) => setInputCoupon(e.target.value)}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.8125rem',
                  textTransform: 'uppercase'
                }}
              />
              <button
                onClick={() => applyCoupon(inputCoupon)}
                className="btn btn-secondary btn-sm"
              >
                Apply
              </button>
            </div>

            {/* Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.875rem', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Subtotal</span>
                <span>₹{cartSubtotal.toLocaleString()}</span>
              </div>

              {appliedDiscount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#2E7D32', fontWeight: 600 }}>
                  <span>VIP Parent Discount ({appliedDiscount}%)</span>
                  <span>-₹{discountAmount.toLocaleString()}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Express Shipping</span>
                <span>{remainingForFreeShipping === 0 ? 'FREE' : '₹99'}</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 800,
                  fontSize: '1.125rem',
                  color: 'var(--text-primary)',
                  paddingTop: '8px',
                  borderTop: '1px solid var(--border-light)'
                }}
              >
                <span>Total Amount</span>
                <span>₹{finalTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Trust Seals */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                marginBottom: '14px'
              }}
            >
              <span>✓ 7-Day Free Pickup Returns</span>
              <span>✓ 100% Safe SSL</span>
              <span>✓ Quality Checked</span>
            </div>

            {/* Checkout Action */}
            <button
              className="btn btn-primary"
              style={{ width: '100%', padding: '14px' }}
              onClick={triggerCheckoutSuccess}
            >
              <span>Complete Demo Checkout</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
