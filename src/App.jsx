import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { FilterDrawer } from './components/FilterDrawer';
import { SizeAssistantModal } from './components/SizeAssistantModal';
import { CheckoutSuccessModal } from './components/CheckoutSuccessModal';
import { TemplateSwitcher } from './components/TemplateSwitcher';
import { Toast } from './components/Toast';
import { MobileBottomNav } from './components/MobileBottomNav';

// The 6 Distinct Homepage Design Templates
import { EditorialTemplate } from './templates/EditorialTemplate';
import { BentoTemplate } from './templates/BentoTemplate';
import { SmartShoppingTemplate } from './templates/SmartShoppingTemplate';
import { KidsWorldTemplate } from './templates/KidsWorldTemplate';
import { CompleteStoreTemplate } from './templates/CompleteStoreTemplate';
import { EditorialPlusTemplate } from './templates/EditorialPlusTemplate';

function StoreApp() {
  const { activeTemplate } = useStore();

  // Dynamically render the active design system
  const renderTemplate = () => {
    switch (activeTemplate) {
      case '01':
        return <EditorialTemplate />;
      case '02':
        return <BentoTemplate />;
      case '03':
        return <SmartShoppingTemplate />;
      case '04':
        return <KidsWorldTemplate />;
      case '05':
        return <CompleteStoreTemplate />;
      case '06':
        return <EditorialPlusTemplate />;
      default:
        return <EditorialPlusTemplate />;
    }
  };

  return (
    <div className={`app-container template-${activeTemplate}`} id="top">
      {/* Universal Header (adapts visually to active template) */}
      <Header />

      {/* Main Active Homepage Template View */}
      <main className="main-content">
        {renderTemplate()}
      </main>

      {/* Universal Footer */}
      <Footer />

      {/* Drawers & Modals (Shared across all templates) */}
      <ProductDetailModal />
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <FilterDrawer />
      <SizeAssistantModal />
      <CheckoutSuccessModal />

      {/* Floating Design System Switcher Dock */}
      <TemplateSwitcher />

      {/* Floating Toast Alerts */}
      <Toast />

      {/* Responsive Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <StoreApp />
    </StoreProvider>
  );
}
