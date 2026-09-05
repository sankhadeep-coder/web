import { Sparkles, CheckCircle2, Package, ArrowRight, ShieldCheck } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export function CheckoutSuccessModal() {
  const {
    isCheckoutModalOpen,
    setIsCheckoutModalOpen,
    resetFilters
  } = useStore();

  if (!isCheckoutModalOpen) return null;

  const orderId = `PP-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="modal-backdrop" onClick={() => setIsCheckoutModalOpen(false)}>
      <div
        className="checkout-modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--c-white)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '520px',
          padding: '40px 32px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-float)',
          margin: '20px',
          animation: 'slideInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: '#EDF8EE',
            color: '#2E7D32',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 0 0 8px rgba(46, 125, 50, 0.1)'
          }}
        >
          <CheckCircle2 size={40} />
        </div>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(217, 246, 90, 0.25)',
            color: 'var(--c-charcoal)',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: 700,
            marginBottom: '12px'
          }}
        >
          <Sparkles size={14} /> DEMONSTRATION ORDER CONFIRMED
        </span>

        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
          Thank You, Little Explorer!
        </h2>

        <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
          Your demo order <strong>{orderId}</strong> has been logged in our simulated fulfillment queue. In production, an SMS & WhatsApp dispatch update is sent instantly.
        </p>

        <div
          style={{
            backgroundColor: 'var(--surface-muted)',
            borderRadius: 'var(--radius-md)',
            padding: '18px',
            textAlign: 'left',
            marginBottom: '24px',
            fontSize: '0.8125rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Estimated Delivery:</span>
            <strong>3-4 Business Days (Express Air)</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Packaging:</span>
            <strong>100% Plastic-Free Seed Paper Box</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Exchange Guarantee:</span>
            <strong>7-Day Free Home Pickup</strong>
          </div>
        </div>

        <button
          className="btn btn-primary"
          style={{ width: '100%', padding: '14px' }}
          onClick={() => {
            setIsCheckoutModalOpen(false);
            resetFilters();
          }}
        >
          <span>Continue Exploring Templates</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
