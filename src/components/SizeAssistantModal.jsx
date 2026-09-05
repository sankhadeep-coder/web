import { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Ruler, HelpCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export function SizeAssistantModal() {
  const {
    isSizeAssistantOpen,
    setIsSizeAssistantOpen,
    sizeInput,
    setSizeInput,
    recommendedSizeResult,
    updateFilter
  } = useStore();

  if (!isSizeAssistantOpen) return null;

  const handleApplySizeFilter = () => {
    // Map recommended size e.g. '4-5Y' to ageRange filter '2-4Y' or '5-7Y'
    const age = sizeInput.age;
    let targetRange = '5-7Y';
    if (age <= 2) targetRange = '0-2Y';
    else if (age <= 4) targetRange = '2-4Y';
    else if (age <= 7) targetRange = '5-7Y';
    else if (age <= 10) targetRange = '8-10Y';
    else targetRange = '11-14Y';

    updateFilter('ageRange', targetRange);
    setIsSizeAssistantOpen(false);
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsSizeAssistantOpen(false)}>
      <div
        className="size-assistant-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--c-white)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '560px',
          boxShadow: 'var(--shadow-float)',
          overflow: 'hidden',
          margin: '20px',
          animation: 'slideInUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '24px',
            backgroundColor: 'var(--surface-muted)',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--c-yellow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--c-charcoal)'
              }}
            >
              <Ruler size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Find My Child's Perfect Size
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Parent-approved fit calculator with growth-room allowance
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsSizeAssistantOpen(false)}
            style={{ color: 'var(--text-muted)', padding: '4px' }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Wizard Form */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Age Selector */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                Child's Age: <strong style={{ color: 'var(--c-brown)' }}>{sizeInput.age} Years Old</strong>
              </label>
            </div>
            <input
              type="range"
              min="0.5"
              max="14"
              step="0.5"
              value={sizeInput.age}
              onChange={(e) => setSizeInput(prev => ({ ...prev, age: parseFloat(e.target.value) }))}
              style={{ width: '100%', accentColor: 'var(--c-charcoal)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              <span>6 Months</span>
              <span>4 Years</span>
              <span>8 Years</span>
              <span>14 Years</span>
            </div>
          </div>

          {/* Height & Weight Dual Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '6px' }}>
                Height: <strong>{sizeInput.height} cm</strong>
              </label>
              <input
                type="number"
                value={sizeInput.height}
                onChange={(e) => setSizeInput(prev => ({ ...prev, height: Number(e.target.value) }))}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '6px' }}>
                Weight: <strong>{sizeInput.weight} kg</strong>
              </label>
              <input
                type="number"
                value={sizeInput.weight}
                onChange={(e) => setSizeInput(prev => ({ ...prev, weight: Number(e.target.value) }))}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}
              />
            </div>
          </div>

          {/* Body Build Options */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '8px' }}>
              Body Build / Preference:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              {[
                { id: 'slim', label: 'Slender', desc: 'True fit' },
                { id: 'regular', label: 'Average', desc: 'Standard fit' },
                { id: 'husky', label: 'Roomy', desc: 'Extra room' }
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSizeInput(prev => ({ ...prev, bodyBuild: b.id }))}
                  style={{
                    padding: '10px 8px',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'center',
                    border: sizeInput.bodyBuild === b.id ? '2px solid var(--c-charcoal)' : '1px solid var(--border-light)',
                    backgroundColor: sizeInput.bodyBuild === b.id ? 'var(--c-charcoal)' : 'var(--surface-muted)',
                    color: sizeInput.bodyBuild === b.id ? '#FFFFFF' : 'var(--text-primary)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700 }}>{b.label}</div>
                  <div style={{ fontSize: '0.6875rem', opacity: 0.8 }}>{b.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Smart Recommendation Card */}
          <div
            style={{
              backgroundColor: '#EDF8EE',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              border: '1px solid rgba(46, 125, 50, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#2E7D32',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.125rem',
                fontWeight: 800,
                flexShrink: 0
              }}
            >
              {recommendedSizeResult.size}
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#2E7D32', fontWeight: 800 }}>
                Recommended Size
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1B5E20' }}>
                Size {recommendedSizeResult.size}
              </h4>
              <p style={{ fontSize: '0.8125rem', color: '#388E3C', lineHeight: 1.35 }}>
                {recommendedSizeResult.note}. Includes 4cm let-out margin.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Action */}
        <div
          style={{
            padding: '20px 24px',
            backgroundColor: 'var(--c-cream)',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            gap: '12px'
          }}
        >
          <button
            className="btn btn-secondary"
            style={{ flex: 1 }}
            onClick={() => setIsSizeAssistantOpen(false)}
          >
            Done
          </button>
          <button
            className="btn btn-primary"
            style={{ flex: 2 }}
            onClick={handleApplySizeFilter}
          >
            <span>Filter Store for Size {recommendedSizeResult.size}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
