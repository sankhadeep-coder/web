import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { PRODUCTS } from '../data/products';

const StoreContext = createContext(null);

const STORAGE_KEYS = {
  TEMPLATE: 'pp_active_template',
  CART: 'pp_cart_items',
  WISHLIST: 'pp_wishlist_ids',
  RECENT_SEARCHES: 'pp_recent_searches'
};

export function StoreProvider({ children }) {
  // 1. Template State
  const [activeTemplate, setActiveTemplateState] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.TEMPLATE) || '01';
  });

  const setActiveTemplate = (tmplId) => {
    setActiveTemplateState(tmplId);
    localStorage.setItem(STORAGE_KEYS.TEMPLATE, tmplId);
    showToast(`Switched to Template ${tmplId}`, 'info');
  };

  // 2. Cart State
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CART);
      return saved ? JSON.parse(saved) : [
        {
          id: 'prod-01-2-3Y-Warm-Ivory-Floral',
          productId: 'prod-01',
          product: PRODUCTS.find(p => p.id === 'prod-01'),
          selectedSize: '2-3Y',
          selectedColor: 'Warm Ivory Floral',
          quantity: 1,
          price: 1299
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, size, color, quantity = 1) => {
    const chosenSize = size || product.sizes[0];
    const chosenColor = color || (product.colors && product.colors[0]?.name) || 'Default';
    const cartItemId = `${product.id}-${chosenSize}-${chosenColor.replace(/\s+/g, '-')}`;

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: cartItemId,
            productId: product.id,
            product,
            selectedSize: chosenSize,
            selectedColor: chosenColor,
            quantity,
            price: product.price
          }
        ];
      }
    });

    showToast(`Added "${product.name}" to cart! 🛍️`, 'success');
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.id !== cartItemId));
    showToast('Removed item from bag', 'info');
  };

  const updateCartQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.id === cartItemId) {
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cart]);

  const FREE_SHIPPING_THRESHOLD = 999;
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  // 3. Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      return saved ? JSON.parse(saved) : ['prod-01', 'prod-03'];
    } catch {
      return ['prod-01', 'prod-03'];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        showToast('Removed from Wishlist 🤍', 'info');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to Wishlist! ❤️', 'heart');
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId) => wishlist.includes(productId);

  // 4. Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isSizeAssistantOpen, setIsSizeAssistantOpen] = useState(false);
  const [isShowcaseModalOpen, setIsShowcaseModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  // 5. Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RECENT_SEARCHES);
      return saved ? JSON.parse(saved) : ['organic dress', 'linen shirt', 'dino t-shirt'];
    } catch {
      return ['organic dress', 'linen shirt'];
    }
  });

  const addRecentSearch = (query) => {
    if (!query || query.trim() === '') return;
    const clean = query.trim().toLowerCase();
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item !== clean);
      const updated = [clean, ...filtered].slice(0, 6);
      localStorage.setItem(STORAGE_KEYS.RECENT_SEARCHES, JSON.stringify(updated));
      return updated;
    });
  };

  const [filterState, setFilterState] = useState({
    category: 'all',
    gender: 'all',
    ageRange: 'all',
    occasion: 'all',
    personality: 'all',
    worldClub: 'all',
    priceMax: 2500,
    sortBy: 'featured'
  });

  const updateFilter = (key, value) => {
    setFilterState(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilterState({
      category: 'all',
      gender: 'all',
      ageRange: 'all',
      occasion: 'all',
      personality: 'all',
      worldClub: 'all',
      priceMax: 2500,
      sortBy: 'featured'
    });
    setSearchQuery('');
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filterState.category !== 'all') count++;
    if (filterState.gender !== 'all') count++;
    if (filterState.ageRange !== 'all') count++;
    if (filterState.occasion !== 'all') count++;
    if (filterState.personality !== 'all') count++;
    if (filterState.worldClub !== 'all') count++;
    if (filterState.priceMax < 2500) count++;
    if (searchQuery.trim() !== '') count++;
    return count;
  }, [filterState, searchQuery]);

  // 6. Filtered Products Computation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(prod => {
      // Search match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = prod.name.toLowerCase().includes(q);
        const matchCat = prod.category.toLowerCase().includes(q);
        const matchMat = prod.material.toLowerCase().includes(q);
        const matchDesc = prod.description.toLowerCase().includes(q);
        const matchBrand = prod.brand.toLowerCase().includes(q);
        if (!matchName && !matchCat && !matchMat && !matchDesc && !matchBrand) {
          return false;
        }
      }

      // Category
      if (filterState.category !== 'all') {
        if (filterState.category === 'girls' && prod.gender !== 'girls' && prod.gender !== 'unisex') return false;
        if (filterState.category === 'boys' && prod.gender !== 'boys' && prod.gender !== 'unisex') return false;
        if (filterState.category === 'baby' && prod.gender !== 'baby' && prod.ageRange !== '0-2Y') return false;
        if (!['girls', 'boys', 'baby'].includes(filterState.category) && prod.category !== filterState.category) {
          return false;
        }
      }

      // Gender
      if (filterState.gender !== 'all') {
        if (prod.gender !== filterState.gender && prod.gender !== 'unisex') return false;
      }

      // Age Range
      if (filterState.ageRange !== 'all') {
        if (prod.ageRange !== filterState.ageRange) return false;
      }

      // Occasion
      if (filterState.occasion !== 'all') {
        if (!prod.occasions.includes(filterState.occasion)) return false;
      }

      // Personality
      if (filterState.personality !== 'all') {
        if (!prod.personalities.includes(filterState.personality)) return false;
      }

      // World Club
      if (filterState.worldClub !== 'all') {
        if (prod.worldClub !== filterState.worldClub) return false;
      }

      // Price Max
      if (prod.price > filterState.priceMax) return false;

      return true;
    }).sort((a, b) => {
      if (filterState.sortBy === 'price-low') return a.price - b.price;
      if (filterState.sortBy === 'price-high') return b.price - a.price;
      if (filterState.sortBy === 'rating') return b.rating - a.rating;
      if (filterState.sortBy === 'newest') return (b.is_new ? 1 : 0) - (a.is_new ? 1 : 0);
      return (b.is_bestseller ? 1 : 0) - (a.is_bestseller ? 1 : 0);
    });
  }, [filterState, searchQuery]);

  // 7. Interactive Size Assistant
  const [sizeInput, setSizeInput] = useState({
    age: 4,
    height: 104,
    weight: 17,
    bodyBuild: 'regular'
  });

  const recommendedSizeResult = useMemo(() => {
    const { age, height, weight, bodyBuild } = sizeInput;
    let base = '3-4Y';
    if (age <= 0.5) base = '0-3M';
    else if (age <= 1) base = '6-12M';
    else if (age <= 2) base = '1-2Y';
    else if (age <= 3) base = '2-3Y';
    else if (age <= 4) base = '3-4Y';
    else if (age <= 5) base = '4-5Y';
    else if (age <= 6) base = '5-6Y';
    else if (age <= 8) base = '7-8Y';
    else if (age <= 10) base = '9-10Y';
    else if (age <= 12) base = '11-12Y';
    else base = '13-14Y';

    // If taller or roomier build, offer growth room recommendation
    let note = 'True to standard growth chart';
    if (bodyBuild === 'husky' || height > (age * 7 + 75)) {
      note = 'Recommended with growth room for maximum comfort';
    }

    return { size: base, note, age, height, weight };
  }, [sizeInput]);

  // 8. Coupon & Checkout
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // in percent

  const applyCoupon = (code) => {
    if (code.trim().toUpperCase() === 'PETIT10' || code.trim().toUpperCase() === 'WELCOME10') {
      setAppliedDiscount(10);
      showToast('10% VIP Parent Discount Applied! 🎉', 'success');
      return true;
    } else {
      showToast('Invalid promo code. Try "PETIT10"', 'error');
      return false;
    }
  };

  const discountAmount = useMemo(() => {
    return Math.round((cartSubtotal * appliedDiscount) / 100);
  }, [cartSubtotal, appliedDiscount]);

  const finalTotal = useMemo(() => {
    const shipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD || cartSubtotal === 0 ? 0 : 99;
    return Math.max(0, cartSubtotal - discountAmount + shipping);
  }, [cartSubtotal, discountAmount]);

  const triggerCheckoutSuccess = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
    setCart([]);
    setIsCheckoutModalOpen(false);
    setIsCartOpen(false);
    showToast('Order Placed Successfully! Confirmation sent to your phone & email 📦✨', 'success');
  };

  // 9. Toast Notifications
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev.slice(-3), { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3600);
  };

  return (
    <StoreContext.Provider
      value={{
        // Template
        activeTemplate,
        setActiveTemplate,

        // Cart
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        cartCount,
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

        // Wishlist
        wishlist,
        toggleWishlist,
        isWishlisted,

        // Product Details
        selectedProduct,
        openProductDetail,
        closeProductDetail,

        // Modals & Drawers
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isFilterDrawerOpen,
        setIsFilterDrawerOpen,
        isSizeAssistantOpen,
        setIsSizeAssistantOpen,
        isShowcaseModalOpen,
        setIsShowcaseModalOpen,
        isCheckoutModalOpen,
        setIsCheckoutModalOpen,

        // Search & Filter
        searchQuery,
        setSearchQuery,
        recentSearches,
        addRecentSearch,
        filterState,
        updateFilter,
        resetFilters,
        activeFilterCount,
        filteredProducts,

        // Size Assistant
        sizeInput,
        setSizeInput,
        recommendedSizeResult,

        // Toasts
        toasts,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return ctx;
}
