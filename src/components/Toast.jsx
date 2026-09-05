import { useStore } from '../context/StoreContext';
import { Sparkles, Heart, Info, AlertCircle } from 'lucide-react';

export function Toast() {
  const { toasts } = useStore();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((t) => {
        let icon = <Info size={18} color="var(--c-yellow)" />;
        if (t.type === 'heart') icon = <Heart size={18} fill="var(--c-red)" color="var(--c-red)" />;
        if (t.type === 'success') icon = <Sparkles size={18} color="var(--c-lime)" />;
        if (t.type === 'error') icon = <AlertCircle size={18} color="var(--c-red)" />;

        return (
          <div key={t.id} className="toast-item">
            {icon}
            <span>{t.message}</span>
          </div>
        );
      })}
    </div>
  );
}
