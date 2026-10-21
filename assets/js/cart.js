// UmbrellaZone Cart & Wishlist System - Specialty Rain Gear Edition
const CART_STORAGE_KEY = 'umbrellaZone_cart_in_v1';
const WISHLIST_STORAGE_KEY = 'umbrellaZone_wishlist_v4';
const PROMO_STORAGE_KEY = 'umbrellaZone_promo_in_v1';
const USED_COUPONS_STORAGE_KEY = 'umbrellaZone_used_coupons_in_v1';

// Active Seasonal Promos (Single use per customer)
const ACTIVE_PROMOS = {
  'MONSOON20': { discountPercent: 20, description: '20% Off Monsoon Special' },
  'SAVE15': { discountPercent: 15, description: '15% Off Your Order' },
  'STORM20': { discountPercent: 20, description: '20% Off Storm Special' },
  'FREESHIP': { freeShipping: true, description: 'Free Express Delivery on Orders ₹999+' }
};

// Helper: Get list of already used coupon codes
function getUsedCoupons() {
  try {
    const raw = localStorage.getItem(USED_COUPONS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(e) {
    return [];
  }
}

// Helper: Check if a coupon has already been used
function isCouponUsed(code) {
  if (!code) return false;
  const upper = code.trim().toUpperCase();
  return getUsedCoupons().includes(upper);
}

// Helper: Permanently mark a coupon code as used (one-time usage)
function markCouponAsUsed(code) {
  if (!code) return;
  const upper = code.trim().toUpperCase();
  const list = getUsedCoupons();
  if (!list.includes(upper)) {
    list.push(upper);
    localStorage.setItem(USED_COUPONS_STORAGE_KEY, JSON.stringify(list));
  }
}

// Helper: Remove applied promo
function removePromo() {
  localStorage.removeItem(PROMO_STORAGE_KEY);
  if (typeof renderCartPageContent === 'function') {
    renderCartPageContent();
  }
  showToast('Coupon code removed', 'info');
}

// Helper: Format price with currency symbol (₹)
function formatPrice(amount) {
  return `₹${Math.round(amount).toLocaleString('en-IN')}`;
}

// Initialize Cart
// Initialize Cart (clean empty array by default)
function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartBadges();
  renderCartDrawer();
  if (typeof renderCartPageContent === 'function') {
    renderCartPageContent();
  }
}

// Wishlist management: Clean persistent wishlist storage with cross-version key synchronization
const WISHLIST_INIT_KEY = 'umbrellaZone_wishlist_init_v4';

function getWishlist() {
  try {
    const rawPrimary = localStorage.getItem(WISHLIST_STORAGE_KEY);
    const hasInit = localStorage.getItem(WISHLIST_INIT_KEY);

    if (rawPrimary !== null) {
      try {
        const parsed = JSON.parse(rawPrimary);
        if (Array.isArray(parsed)) {
          const ids = parsed
            .map(item => (typeof item === 'string' ? item.trim() : (item?.id ? String(item.id).trim() : '')))
            .filter(Boolean);
          return [...new Set(ids)];
        }
      } catch (_) {}
    }

    // Check if migrating from older versions
    const legacyKeys = ['umbrellaZone_wishlist_in_v2', 'umbrellaZone_wishlist_in_v1', 'umbrellaZone_wishlist', 'wishlist'];
    let migratedIds = [];
    for (const key of legacyKeys) {
      const legacyRaw = localStorage.getItem(key);
      if (legacyRaw) {
        try {
          const parsed = JSON.parse(legacyRaw);
          if (Array.isArray(parsed)) {
            parsed.forEach(item => {
              const id = typeof item === 'string' ? item.trim() : (item?.id ? String(item.id).trim() : '');
              if (id && !migratedIds.includes(id)) migratedIds.push(id);
            });
          }
        } catch (_) {}
      }
    }

    if (hasInit) {
      // User has already visited before and either emptied or configured wishlist
      const clean = [...new Set(migratedIds)];
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(clean));
      return clean;
    }

    // First visit: Seed exactly 1 default card as requested by the user
    // ("use only a one default card in the faviroite page and it can also able remove byt the user.")
    const initialList = migratedIds.length > 0 ? migratedIds : ['vortex-9-compact'];
    localStorage.setItem(WISHLIST_INIT_KEY, 'true');
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(initialList));
    legacyKeys.forEach(k => {
      try { localStorage.setItem(k, JSON.stringify(initialList)); } catch (_) {}
    });
    return initialList;
  } catch (e) {
    return ['vortex-9-compact'];
  }
}

function saveWishlist(wishlist) {
  const unique = Array.isArray(wishlist) 
    ? [...new Set(wishlist.map(item => (typeof item === 'string' ? item.trim() : (item?.id ? String(item.id).trim() : ''))).filter(Boolean))] 
    : [];
  const serialized = JSON.stringify(unique);
  
  try {
    localStorage.setItem(WISHLIST_INIT_KEY, 'true');
    localStorage.setItem(WISHLIST_STORAGE_KEY, serialized);
  } catch (_) {}

  // Sync to all legacy keys so old caches or scripts never regress
  const legacyKeys = ['umbrellaZone_wishlist_in_v2', 'umbrellaZone_wishlist_in_v1', 'umbrellaZone_wishlist', 'wishlist'];
  legacyKeys.forEach(k => {
    try { localStorage.setItem(k, serialized); } catch (_) {}
  });

  try {
    window.dispatchEvent(new CustomEvent('umbrellaZone:wishlistChanged', { detail: unique }));
  } catch (_) {}

  updateWishlistBadges();
  syncWishlistButtons();
  if (typeof renderFavoritesPage === 'function') {
    renderFavoritesPage();
  }
}

// Global remove from favorites helper (callable from button clicks on any page)
function removeFromFavorites(productId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  let list = getWishlist().filter(id => id !== productId);
  saveWishlist(list);
  showToast('Removed from favorites', 'info');
  if (typeof renderFavoritesPage === 'function') {
    renderFavoritesPage();
  }
}
const handleRemoveFromFavorites = removeFromFavorites;

// Clear all favorites helper
function clearAllFavorites() {
  saveWishlist([]);
  showToast('Wishlist cleared', 'info');
  if (typeof renderFavoritesPage === 'function') {
    renderFavoritesPage();
  }
}

// Move single favorite item to cart and navigate to cart.html
function handleMoveToCart(productId) {
  const product = typeof getProductById === 'function' ? getProductById(productId) : null;
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: (product.images && product.images[0]) ? product.images[0] : 'assets/images/placeholder.jpg',
      color: (product.colors && product.colors[0]?.name) || 'Standard',
      size: (product.sizes && product.sizes[0]) || 'Standard',
      quantity: 1
    });
  }
  saveCart(cart);

  // Remove from wishlist
  let wishlist = getWishlist().filter(id => id !== productId);
  saveWishlist(wishlist);

  // Show toast and redirect immediately to cart.html
  showToast(`Moved "${product.name}" to cart! 🛒`, 'success');
  setTimeout(() => {
    window.location.href = 'cart.html';
  }, 350);
}

// Move all favorites to cart and navigate to cart.html
function moveAllFavoritesToCart() {
  const wishlistIds = getWishlist();
  if (!wishlistIds || wishlistIds.length === 0) return;

  const cart = getCart();
  wishlistIds.forEach(id => {
    const product = typeof getProductById === 'function' ? getProductById(id) : null;
    if (product) {
      const existing = cart.find(item => item.id === id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: (product.images && product.images[0]) ? product.images[0] : 'assets/images/placeholder.jpg',
          color: (product.colors && product.colors[0]?.name) || 'Standard',
          size: (product.sizes && product.sizes[0]) || 'Standard',
          quantity: 1
        });
      }
    }
  });
  saveCart(cart);
  saveWishlist([]);

  showToast('All favorites moved to your cart! 🛒', 'success');
  setTimeout(() => {
    window.location.href = 'cart.html';
  }, 350);
}

// Core Favorites Page Renderer (Fully responsive, dark/bright mode compliant)
function renderFavoritesPage() {
  const container = document.getElementById('favorites-container');
  const emptyState = document.getElementById('favorites-empty');
  const countLabel = document.getElementById('favorites-count-label');
  const clearBtn = document.getElementById('clear-wishlist-btn');
  const moveAllBtn = document.getElementById('btn-move-all');

  if (!container && !emptyState && !countLabel) return;

  const wishlistIds = getWishlist();
  const items = wishlistIds
    .map(id => (typeof getProductById === 'function' ? getProductById(id) : null))
    .filter(p => !!p);

  const count = items.length;

  if (countLabel) {
    countLabel.textContent = `SAVED ITEMS (${count})`;
  }

  if (clearBtn) {
    if (count === 0) {
      clearBtn.classList.add('opacity-40', 'pointer-events-none');
    } else {
      clearBtn.classList.remove('opacity-40', 'pointer-events-none');
    }
  }

  if (moveAllBtn) {
    if (count === 0) {
      moveAllBtn.classList.add('opacity-40', 'pointer-events-none');
    } else {
      moveAllBtn.classList.remove('opacity-40', 'pointer-events-none');
    }
  }

  if (count === 0) {
    if (container) {
      container.innerHTML = '';
      container.classList.add('hidden');
    }
    if (emptyState) {
      emptyState.classList.remove('hidden');
    }
    return;
  }

  if (emptyState) {
    emptyState.classList.add('hidden');
  }

  if (container) {
    container.classList.remove('hidden');
    container.innerHTML = items.map(product => {
      const catEmoji = product.category === 'umbrellas' ? '☂️' : (product.category === 'raincoats' ? '🧥' : '👢');
      const catName = product.category === 'umbrellas' ? 'Windproof Umbrella' : (product.category === 'raincoats' ? 'Monsoon Rainwear' : 'Waterproof Footwear');
      const primaryImage = (product.images && product.images.length > 0) ? product.images[0] : 'assets/images/placeholder.jpg';
      const rating = product.rating || 4.9;
      const reviewsCount = product.reviewCount || product.reviewsCount || 180;
      const originalPrice = product.originalPrice || Math.round((product.price || 999) * 1.35);
      const desc = product.shortDesc || product.tagline || product.description || 'Engineered for extreme coastal monsoons and gale force downpours.';

      return `
        <div class="card-align-content bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group h-full">
          
          <div class="card-top-content flex-1 flex flex-col">
            <!-- Product Image Container -->
            <div class="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
              <a href="product-detail.html?id=${product.id}" class="block w-full h-full">
                <img src="${primaryImage}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              </a>
              
              <!-- Category Badge -->
              <span class="absolute top-3.5 left-3.5 text-[10px] font-bold uppercase tracking-wider text-slate-950 bg-white/95 dark:bg-slate-900/95 dark:text-white backdrop-blur-md px-3 py-1 rounded-full shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                ${catEmoji} ${catName}
              </span>

              <!-- Quick Remove Button -->
              <button type="button" onclick="removeFromFavorites('${product.id}', event)" class="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-white/95 dark:bg-slate-900/95 text-rose-500 hover:text-rose-600 hover:scale-110 flex items-center justify-center shadow-md transition cursor-pointer font-bold" title="Remove from Favorites" aria-label="Remove ${product.name} from favorites">
                ✕
              </button>
            </div>

            <!-- Content Body -->
            <div class="p-6 flex-1 flex flex-col">
              <!-- Stars -->
              <div class="flex items-center gap-2 mb-2">
                <div class="text-amber-400 text-xs tracking-tight">★★★★★</div>
                <span class="text-[11px] font-bold text-slate-900 dark:text-slate-100">${rating}</span>
                <span class="text-[11px] text-slate-500 dark:text-slate-400">(${reviewsCount}+ verified)</span>
              </div>

              <!-- Product Name (Black text in bright mode) -->
              <h3 class="card-title-aligned font-display font-extrabold text-base text-slate-950 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition leading-snug min-h-[3rem] flex items-center">
                <a href="product-detail.html?id=${product.id}">${product.name}</a>
              </h3>

              <!-- Short Description -->
              <p class="card-desc-aligned text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed flex-1">
                ${desc}
              </p>

              <!-- Technical Features Tags -->
              <div class="flex flex-wrap gap-1.5 mt-4">
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200">
                  ✓ 2-Year Warranty
                </span>
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                  ● In Stock
                </span>
              </div>
            </div>
          </div>

          <!-- Footer & Move to Cart Button -->
          <div class="p-6 pt-0 mt-auto">
            <div class="card-bottom-line pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              <div>
                <div class="font-display font-extrabold text-xl text-slate-950 dark:text-white">${formatPrice(product.price)}</div>
                <div class="text-[11px] text-slate-400 line-through">${formatPrice(originalPrice)}</div>
              </div>

              <!-- Move to Cart Button -->
              <button type="button" onclick="handleMoveToCart('${product.id}')" class="px-5 py-3 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md shadow-sky-600/25 transition flex items-center gap-2 shrink-0 cursor-pointer">
                <span>Move to Cart</span>
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>

        </div>
      `;
    }).join('');
  }
}

function getHeartSvg(isFilled) {
  if (isFilled) {
    return `<svg class="w-4 h-4 fill-current text-rose-500 transition-transform duration-200 scale-110" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
  }
  return `<svg class="w-4 h-4 text-slate-400 dark:text-slate-300 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`;
}

function syncWishlistButtons() {
  const buttons = document.querySelectorAll('[data-wishlist-id]');
  buttons.forEach(btn => {
    const id = btn.getAttribute('data-wishlist-id');
    const isFav = isInWishlist(id);
    btn.innerHTML = getHeartSvg(isFav);
    if (isFav) {
      btn.classList.add('text-rose-500', 'is-favorited');
      btn.classList.remove('text-slate-700', 'dark:text-slate-200');
    } else {
      btn.classList.remove('text-rose-500', 'is-favorited');
      btn.classList.add('text-slate-700', 'dark:text-slate-200');
    }
  });

  // Also check product-detail page wishlist button if present
  const pdBtn = document.getElementById('pd-wishlist-btn');
  if (pdBtn && typeof currentProduct !== 'undefined' && currentProduct) {
    const isFav = isInWishlist(currentProduct.id);
    pdBtn.innerHTML = isFav 
      ? `<svg class="w-5 h-5 fill-current text-rose-500" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
      : `<svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`;
    if (isFav) {
      pdBtn.classList.add('text-rose-500', 'border-rose-300');
    } else {
      pdBtn.classList.remove('text-rose-500', 'border-rose-300');
    }
  }
}

function toggleWishlist(productId) {
  let list = getWishlist();
  const exists = list.includes(productId);
  if (exists) {
    list = list.filter(id => id !== productId);
    showToast('Item removed from your Wishlist', 'info');
  } else {
    list.push(productId);
    showToast('Saved to your Monsoon Wishlist! 💖', 'success');
  }
  saveWishlist(list);
  syncWishlistButtons();
  if (typeof renderFavoritesPage === 'function') {
    renderFavoritesPage();
  }
  return !exists;
}

function isInWishlist(productId) {
  return getWishlist().includes(productId);
}

// Add item to cart
function addToCart(productId, quantity = 1, selectedColor = null, selectedSize = null) {
  const product = getProductById(productId);
  if (!product) {
    showToast('Product not found', 'error');
    return;
  }

  const color = selectedColor || (product.colors && product.colors[0]?.name) || 'Standard';
  const size = selectedSize || (product.sizes && product.sizes[0]) || 'Standard';

  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === productId && item.color === color && item.size === size);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.images[0],
      color: color,
      size: size,
      quantity: quantity
    });
  }

  saveCart(cart);
  window.location.href = 'cart.html';
}

// Remove from cart
function removeFromCart(index) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    const item = cart[index];
    cart.splice(index, 1);
    saveCart(cart);
    showToast(`Removed "${item.name}" from cart`, 'info');
  }
}

// Update quantity
function updateCartQuantity(index, delta) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      removeFromCart(index);
    } else {
      saveCart(cart);
    }
  }
}

// Get Cart totals
function getCartTotals() {
  const cart = getCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Applied promo
  const appliedPromoKey = localStorage.getItem(PROMO_STORAGE_KEY);
  let promo = null;
  if (appliedPromoKey) {
    if (isCouponUsed(appliedPromoKey)) {
      // If already redeemed, remove it
      localStorage.removeItem(PROMO_STORAGE_KEY);
    } else {
      promo = ACTIVE_PROMOS[appliedPromoKey] || null;
    }
  }

  let discount = 0;
  if (promo && promo.discountPercent) {
    discount = Math.round((subtotal * promo.discountPercent) / 100);
  }

  // Free shipping over ₹999 on all orders
  let shipping = (subtotal >= 999 || (promo && promo.freeShipping) || subtotal === 0) ? 0 : 99;
  const estimatedTax = 0; // GST included in price
  const total = Math.max(0, subtotal - discount + shipping);

  return {
    itemCount,
    subtotal,
    discount,
    promo,
    promoKey: promo ? appliedPromoKey : null,
    shipping,
    tax: estimatedTax,
    total
  };
}

// Badges
function updateCartBadges() {
  const totals = getCartTotals();
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(badge => {
    badge.textContent = totals.itemCount;
    badge.classList.remove('hidden');
  });
  const drawerCartLabels = document.querySelectorAll('.drawer-cart-count-label');
  drawerCartLabels.forEach(el => {
    el.textContent = `${totals.itemCount} Item${totals.itemCount === 1 ? '' : 's'}`;
  });
}

function updateWishlistBadges() {
  const count = getWishlist().length;
  const badges = document.querySelectorAll('.wishlist-badge-count');
  badges.forEach(badge => {
    badge.textContent = count;
    badge.classList.remove('hidden');
  });
  const drawerWishlistLabels = document.querySelectorAll('.drawer-wishlist-count-label');
  drawerWishlistLabels.forEach(el => {
    el.textContent = `${count} Saved`;
  });
}

// Render Cart Drawer
function renderCartDrawer() {
  const drawerBody = document.getElementById('cart-drawer-items');
  const drawerSubtotal = document.getElementById('cart-drawer-subtotal');
  const drawerCheckoutBtn = document.getElementById('cart-drawer-checkout-btn');
  if (!drawerBody) return;

  const cart = getCart();
  const totals = getCartTotals();

  if (drawerSubtotal) {
    drawerSubtotal.textContent = formatPrice(totals.subtotal);
  }

  if (cart.length === 0) {
    drawerBody.innerHTML = `
      <div class="py-16 text-center text-slate-500 dark:text-slate-400">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-300">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        </div>
        <p class="font-medium text-slate-800 dark:text-white text-lg">Your storm cart is empty</p>
        <p class="text-xs mt-1 text-slate-500 dark:text-slate-400">Equip windproof umbrellas, waterproof raincoats & rain boots.</p>
        <div class="mt-5 flex flex-wrap justify-center gap-2">
          <a href="products-umbrellas.html" onclick="closeCartDrawer()" class="px-3.5 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl transition">
            Umbrellas
          </a>
          <a href="products-raincoats.html" onclick="closeCartDrawer()" class="px-3.5 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl transition">
            Raincoats
          </a>
          <a href="products-boots.html" onclick="closeCartDrawer()" class="px-3.5 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl transition">
            Rain Boots
          </a>
        </div>
      </div>
    `;
    if (drawerCheckoutBtn) {
      drawerCheckoutBtn.classList.add('opacity-50', 'pointer-events-none');
    }
    return;
  }

  if (drawerCheckoutBtn) {
    drawerCheckoutBtn.classList.remove('opacity-50', 'pointer-events-none');
  }

  drawerBody.innerHTML = cart.map((item, index) => `
    <div class="flex gap-4 py-4 border-b border-slate-100 dark:border-slate-800 items-start group">
      <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-xl bg-slate-100 dark:bg-slate-800 flex-shrink-0 border border-slate-200 dark:border-slate-700">
      <div class="flex-1 min-w-0">
        <div class="flex justify-between items-start">
          <h4 class="font-bold text-sm text-slate-900 dark:text-white truncate hover:text-sky-600 transition">
            <a href="product-detail.html?id=${item.id}">${item.name}</a>
          </h4>
          <button onclick="removeFromCart(${index})" class="text-slate-400 dark:text-slate-500 hover:text-red-500 p-1 transition" title="Remove item">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
          ${item.color ? `<span class="inline-block mr-2 font-medium">Color: ${item.color}</span>` : ''}
          ${item.size ? `<span class="inline-block font-medium">Size: ${item.size}</span>` : ''}
        </p>
        <div class="flex items-center justify-between mt-3">
          <div class="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 overflow-hidden shadow-xs">
            <button onclick="updateCartQuantity(${index}, -1)" class="w-7 h-7 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition font-bold text-sm">−</button>
            <span class="w-8 text-center text-xs font-semibold text-slate-800 dark:text-slate-200">${item.quantity}</span>
            <button onclick="updateCartQuantity(${index}, 1)" class="w-7 h-7 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition font-bold text-sm">+</button>
          </div>
          <span class="font-bold text-sm text-slate-900 dark:text-white">${formatPrice(item.price * item.quantity)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Navigate to full cart page
function openCartDrawer() {
  window.location.href = 'cart.html';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const panel = document.getElementById('cart-drawer-panel');
  if (!drawer) return;

  if (backdrop) backdrop.classList.add('opacity-0');
  if (panel) panel.classList.add('translate-x-full');

  setTimeout(() => {
    drawer.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }, 300);
}

// Toast notification helper
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed top-5 right-5 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4';
    document.body.appendChild(toastContainer);
  }

  const icons = {
    success: `<svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`,
    error: `<svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`,
    info: `<svg class="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
  };

  const toast = document.createElement('div');
  toast.className = 'toast-enter pointer-events-auto flex items-center gap-3 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100 text-sm font-medium';
  toast.innerHTML = `
    <div class="flex-shrink-0">${icons[type] || icons.info}</div>
    <div class="flex-1">${message}</div>
    <button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1" onclick="this.parentElement.remove()">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('toast-enter');
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 260);
  }, 3500);
}

// Initialize on DOM ready and all navigation lifecycle events
function initCartAndWishlistEngines() {
  updateCartBadges();
  updateWishlistBadges();
  renderCartDrawer();
  if (typeof renderFavoritesPage === 'function') {
    renderFavoritesPage();
  }
}

// Immediate call if DOM is already parsed (handles file://, cached nav, and deferred scripts)
if (typeof document !== 'undefined') {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initCartAndWishlistEngines();
  } else {
    document.addEventListener('DOMContentLoaded', initCartAndWishlistEngines);
  }
}

// Comprehensive browser lifecycle listeners
window.addEventListener('pageshow', () => {
  initCartAndWishlistEngines();
});

window.addEventListener('load', () => {
  initCartAndWishlistEngines();
});

window.addEventListener('storage', () => {
  updateCartBadges();
  updateWishlistBadges();
  if (typeof renderFavoritesPage === 'function') {
    renderFavoritesPage();
  }
});

window.addEventListener('umbrellaZone:wishlistChanged', () => {
  updateWishlistBadges();
  if (typeof renderFavoritesPage === 'function') {
    renderFavoritesPage();
  }
});
