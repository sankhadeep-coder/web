import { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, RefreshCw, Truck, HeartHandshake } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export function Footer() {
  const { updateFilter, setIsSizeAssistantOpen, showToast } = useStore();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid parent email address', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Welcome to the Petit Club! ₹200 voucher sent to your email 💌', 'success');
    setEmail('');
  };

  return (
    <footer style={{ backgroundColor: '#1E1D1B', color: '#D8D4CE', paddingTop: '64px', paddingBottom: '100px' }}>
      {/* Top Value Proposition Banner */}
      <div className="container" style={{ marginBottom: '56px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            padding: '32px',
            backgroundColor: '#272522',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255,255,255,0.06)'
          }}
        >
          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--c-lime)', marginTop: '2px' }}>
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '4px' }}>
                100% Non-Toxic & Organic
              </h4>
              <p style={{ fontSize: '0.8125rem', color: '#A6A09A', lineHeight: 1.4 }}>
                GOTS certified cotton & safe azo-free child pigments.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--c-cyan)', marginTop: '2px' }}>
              <RefreshCw size={26} />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '4px' }}>
                7-Day Easy Doorstep Returns
              </h4>
              <p style={{ fontSize: '0.8125rem', color: '#A6A09A', lineHeight: 1.4 }}>
                Wrong size? Zero-stress home pickup exchange.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--c-yellow)', marginTop: '2px' }}>
              <Truck size={26} />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '4px' }}>
                Free Express Shipping
              </h4>
              <p style={{ fontSize: '0.8125rem', color: '#A6A09A', lineHeight: 1.4 }}>
                Complimentary delivery on all orders over ₹999.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--c-orange)', marginTop: '2px' }}>
              <HeartHandshake size={26} />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '4px' }}>
                Parent Care Team
              </h4>
              <p style={{ fontSize: '0.8125rem', color: '#A6A09A', lineHeight: 1.4 }}>
                Sizing advice available via WhatsApp & email.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span style={{ fontSize: '1.5rem' }}>🦋</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.08em', color: '#FFFFFF' }}>
                PETIT PAPILLON
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#A6A09A', marginBottom: '20px' }}>
              Gentle on skin, joyful in play. Thoughtfully crafted kids garments designed for little adventures and big memories.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>📸</span>
              <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>📘</span>
              <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>📌</span>
              <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>💬</span>
            </div>
          </div>

          {/* Shop Col */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Shop
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li>
                <button style={{ color: '#A6A09A' }} onClick={() => updateFilter('category', 'girls')}>
                  Girls Collection
                </button>
              </li>
              <li>
                <button style={{ color: '#A6A09A' }} onClick={() => updateFilter('category', 'boys')}>
                  Boys Collection
                </button>
              </li>
              <li>
                <button style={{ color: '#A6A09A' }} onClick={() => updateFilter('category', 'baby')}>
                  Baby (0–2 Years)
                </button>
              </li>
              <li>
                <button style={{ color: '#A6A09A' }} onClick={() => updateFilter('category', 'newborn')}>
                  Newborn Gift Hampers
                </button>
              </li>
              <li>
                <button style={{ color: '#A6A09A' }} onClick={() => updateFilter('category', 'ethnic')}>
                  Festive & Ethnic
                </button>
              </li>
              <li>
                <button style={{ color: '#A6A09A' }} onClick={() => updateFilter('category', 'sleepwear')}>
                  Organic Sleepwear
                </button>
              </li>
            </ul>
          </div>

          {/* Parent Help Col */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Parent Help
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li>
                <button
                  style={{ color: 'var(--c-yellow)', fontWeight: 600 }}
                  onClick={() => setIsSizeAssistantOpen(true)}
                >
                  ✨ Find My Child's Size
                </button>
              </li>
              <li><a href="#returns" style={{ color: '#A6A09A' }}>7-Day Returns & Exchanges</a></li>
              <li><a href="#shipping" style={{ color: '#A6A09A' }}>Shipping & Tracking</a></li>
              <li><a href="#washing" style={{ color: '#A6A09A' }}>Fabric Washing Guide</a></li>
              <li><a href="#faqs" style={{ color: '#A6A09A' }}>Parent FAQs</a></li>
              <li><a href="#contact" style={{ color: '#A6A09A' }}>WhatsApp Support</a></li>
            </ul>
          </div>

          {/* Quality Col */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our Standards
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li><a href="#gots" style={{ color: '#A6A09A' }}>GOTS Certified Cotton</a></li>
              <li><a href="#dyes" style={{ color: '#A6A09A' }}>Safe Azo-Free Dyes</a></li>
              <li><a href="#seams" style={{ color: '#A6A09A' }}>Scratch-Free Flatlock Seams</a></li>
              <li><a href="#growth" style={{ color: '#A6A09A' }}>Smart Growth-Room Patterning</a></li>
              <li><a href="#sustainability" style={{ color: '#A6A09A' }}>Plastic-Free Packaging</a></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div style={{ minWidth: '240px' }}>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '12px' }}>
              Join The Petit Club
            </h4>
            <p style={{ fontSize: '0.8125rem', color: '#A6A09A', marginBottom: '14px', lineHeight: 1.5 }}>
              Receive thoughtful parenting reads, seasonal capsule drop alerts, and ₹200 off your first purchase.
            </p>
            {subscribed ? (
              <div style={{ padding: '12px', backgroundColor: 'rgba(217, 246, 90, 0.15)', color: 'var(--c-lime)', borderRadius: 'var(--radius-sm)', fontSize: '0.8125rem', fontWeight: 600 }}>
                ✓ You're on the list! Check your inbox for your welcome code.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '6px' }}>
                <input
                  type="email"
                  placeholder="Enter parent email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    backgroundColor: '#272522',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 'var(--radius-full)',
                    padding: '10px 14px',
                    color: '#FFFFFF',
                    fontSize: '0.8125rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: 'var(--c-yellow)',
                    color: 'var(--c-charcoal)',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.8125rem',
            color: '#7A7570'
          }}
        >
          <div>
            © {new Date().getFullYear()} Petit Papillon Apparel Pvt. Ltd. All rights reserved. Made with love for happy kids & relaxed parents.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>🔒 256-Bit SSL Encrypted Checkout</span>
            <span>💳 UPI • Cards • NetBanking • COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
