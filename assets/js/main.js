// UmbrellaZone Main Global JavaScript Engine (Dark/Light + RTL + Scroll Animations)

function initAll() {
  initTheme();
  initDirection();
  initMobileMenu();
  initSearchModal();
  highlightActiveNav();
  initRainEffects();
  initNewsletter();
  initScrollAnimations();
  initGlobalFormValidation();
  initHashScroll();
  if (typeof syncWishlistButtons === 'function') {
    syncWishlistButtons();
  }
}

// Auto-scroll to anchor hash (e.g. #wind-rig-booking) on page load smoothly
function initHashScroll() {
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const targetEl = document.getElementById(hash);
    if (targetEl) {
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 350);
    }
  }
}

window.addEventListener('load', initHashScroll);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

// ==================== THEME MANAGEMENT (DARK / LIGHT) ====================
const THEME_KEY = 'umbrellaZone_theme_v1';

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  applyTheme(savedTheme, false);

  // Wire up any theme toggle buttons on the page
  const toggles = document.querySelectorAll('.theme-toggle-btn');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme, true);
    });
  });
}

function applyTheme(theme, isUserToggle = false) {
  if (isUserToggle) {
    document.documentElement.classList.add('theme-transitioning');
  }
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem(THEME_KEY, 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(THEME_KEY, 'light');
  }
  updateThemeIcons(theme);
  if (isUserToggle) {
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 350);
  }
}

function updateThemeIcons(theme) {
  const icons = document.querySelectorAll('.theme-toggle-icon');
  icons.forEach(icon => {
    if (theme === 'dark') {
      // Show sun icon
      icon.innerHTML = `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
    } else {
      // Show filled crescent moon icon in slate-700 matching lap view
      icon.innerHTML = `<svg class="w-5 h-5 text-slate-700 dark:text-slate-200 fill-current" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
    }
  });
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark', true);
}

// ==================== RTL / LTR MANAGEMENT ====================
const DIR_KEY = 'umbrellaZone_dir_v1';

function initDirection() {
  const savedDir = localStorage.getItem(DIR_KEY) || 'ltr';
  applyDirection(savedDir);

  const rtlToggles = document.querySelectorAll('.rtl-toggle-btn');
  rtlToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(newDir);
    });
  });
}

function applyDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
  localStorage.setItem(DIR_KEY, dir);

  const buttons = document.querySelectorAll('.rtl-toggle-btn');
  buttons.forEach(btn => {
    if (btn.classList.contains('icon-only')) {
      btn.setAttribute('title', dir === 'rtl' ? 'Switch to LTR Layout' : 'Switch to RTL Layout');
      btn.innerHTML = `<span class="text-lg font-bold text-slate-700 dark:text-slate-200">⇄</span>`;
    } else {
      if (dir === 'rtl') {
        btn.setAttribute('title', 'Switch to LTR Layout');
        btn.innerHTML = `<span class="rtl-arrow-icon text-sm font-bold">→</span><span class="rtl-label-text font-bold">LTR</span>`;
      } else {
        btn.setAttribute('title', 'Switch to RTL Layout');
        btn.innerHTML = `<span class="rtl-arrow-icon text-sm font-bold">←</span><span class="rtl-label-text font-bold">RTL</span>`;
      }
    }
  });
}

function toggleRtl() {
  const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
  applyDirection(currentDir === 'rtl' ? 'ltr' : 'rtl');
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// ==================== MOBILE NAVIGATION (SLIDE-OVER DRAWER ARCHITECTURE) ====================
window.openUmbrellaDrawer = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (e && e.stopPropagation) e.stopPropagation();

  const drawer = document.getElementById('umbrella-mobile-drawer') || document.getElementById('mobile-menu-drawer');
  if (!drawer) return;

  const backdrop = drawer.querySelector('#mobile-menu-backdrop') || document.getElementById('mobile-menu-backdrop');
  const panel = drawer.querySelector('#mobile-menu-panel') || drawer.querySelector('.drawer-content') || document.getElementById('mobile-menu-panel');

  drawer.classList.remove('hidden');
  drawer.classList.add('is-open');

  // Prevent background scroll without jumping or breaking fixed position
  document.documentElement.classList.add('overflow-hidden');
  document.body.classList.add('overflow-hidden');

  requestAnimationFrame(() => {
    if (backdrop) {
      backdrop.classList.remove('opacity-0');
      backdrop.classList.add('opacity-100');
    }
    if (panel) {
      panel.classList.remove('translate-x-full');
    }
  });
};

window.closeUmbrellaDrawer = function(e) {
  // If invoked from an event, NEVER prevent default or stop propagation on navigation links!
  const isLink = e && e.target && e.target.closest && e.target.closest('a');
  if (!isLink && e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }

  const drawer = document.getElementById('umbrella-mobile-drawer') || document.getElementById('mobile-menu-drawer');
  if (!drawer) return;

  const backdrop = drawer.querySelector('#mobile-menu-backdrop') || document.getElementById('mobile-menu-backdrop');
  const panel = drawer.querySelector('#mobile-menu-panel') || drawer.querySelector('.drawer-content') || document.getElementById('mobile-menu-panel');

  if (backdrop) {
    backdrop.classList.add('opacity-0');
    backdrop.classList.remove('opacity-100');
  }
  if (panel) {
    panel.classList.add('translate-x-full');
  }

  // Restore scrollability immediately so navigation and page scroll aren't locked
  document.documentElement.classList.remove('overflow-hidden');
  document.body.classList.remove('overflow-hidden');

  setTimeout(() => {
    drawer.classList.add('hidden');
    drawer.classList.remove('is-open');
  }, 250);
};

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const backdrop = document.getElementById('mobile-menu-backdrop');

  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      window.openUmbrellaDrawer(e);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      window.closeUmbrellaDrawer(e);
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      window.closeUmbrellaDrawer(e);
    });
    backdrop.addEventListener('touchmove', (e) => {
      e.preventDefault();
    }, { passive: false });
  }

  // Delegated document listeners ensure clicks & taps work reliably across all dynamic states
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('#mobile-menu-btn');
    if (trigger) {
      if (e.preventDefault) e.preventDefault();
      window.openUmbrellaDrawer(e);
      return;
    }

    const closeTrigger = e.target.closest('#mobile-menu-close');
    if (closeTrigger) {
      if (e.preventDefault) e.preventDefault();
      window.closeUmbrellaDrawer(e);
      return;
    }

    if (e.target.id === 'mobile-menu-backdrop') {
      if (e.preventDefault) e.preventDefault();
      window.closeUmbrellaDrawer(e);
      return;
    }

    // When clicking any navigation link inside drawer (not accordion toggles)
    const navLink = e.target.closest('#umbrella-mobile-drawer a, #mobile-menu-drawer a');
    if (navLink && !navLink.classList.contains('mobile-accordion-btn')) {
      const href = navLink.getAttribute('href');
      if (href) {
        // Handle hash link on the same page
        if (href.includes('#')) {
          const [page, hash] = href.split('#');
          const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
          const targetPage = (page || '').toLowerCase();
          
          if (!targetPage || targetPage === currentPage) {
            e.preventDefault();
            window.closeUmbrellaDrawer();
            if (hash) {
              const targetEl = document.getElementById(hash);
              if (targetEl) {
                history.pushState(null, null, '#' + hash);
                setTimeout(() => {
                  targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 260);
              }
            }
            return;
          }
        }

        // For cross-page navigation, close drawer and navigate smoothly without visual glitch
        e.preventDefault();
        window.closeUmbrellaDrawer();
        setTimeout(() => {
          window.location.href = href;
        }, 160);
      }
    }
  });

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const drawer = document.getElementById('umbrella-mobile-drawer') || document.getElementById('mobile-menu-drawer');
      if (drawer && !drawer.classList.contains('hidden')) {
        window.closeUmbrellaDrawer(e);
      }
    }
  });

  // Mobile Accordion Dropdowns with aria-expanded & 180deg chevron rotation (delegated)
  document.addEventListener('click', (e) => {
    const accBtn = e.target.closest('.mobile-accordion-btn, .mobile-dropdown-trigger');
    if (!accBtn) return;
    e.preventDefault();
    e.stopPropagation();

    const targetId = accBtn.getAttribute('data-target') || accBtn.getAttribute('aria-controls');
    const targetContent = document.getElementById(targetId);
    const chevron = accBtn.querySelector('.accordion-chevron, .dropdown-chevron, [data-chevron]');
    const currentlyExpanded = accBtn.getAttribute('aria-expanded') === 'true';

    if (currentlyExpanded) {
      accBtn.setAttribute('aria-expanded', 'false');
      if (targetContent) targetContent.classList.add('hidden');
      if (chevron) chevron.classList.remove('rotate-180');
    } else {
      accBtn.setAttribute('aria-expanded', 'true');
      if (targetContent) targetContent.classList.remove('hidden');
      if (chevron) chevron.classList.add('rotate-180');
    }
  });

  // Integrated Mobile Drawer Search Bar (< 640px)
  const drawerSearchInput = document.getElementById('drawer-search-input');
  if (drawerSearchInput) {
    drawerSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = drawerSearchInput.value.trim();
        window.closeUmbrellaDrawer(e);
        const searchModalTrigger = document.querySelector('.search-modal-trigger');
        if (searchModalTrigger) {
          searchModalTrigger.click();
          const mainSearchInput = document.getElementById('search-modal-input');
          if (mainSearchInput) {
            mainSearchInput.value = query;
            mainSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }
      }
    });
  }
}

// ==================== SEARCH MODAL ====================
// ==================== SEARCH MODAL (QUICK SEARCH VAULT - 2ND REFERENCE IMAGE) ====================
function initSearchModal() {
  const searchTriggers = document.querySelectorAll('.search-modal-trigger');
  let searchModal = document.getElementById('search-modal');

  const modalMarkup = `
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full shadow-2xl border border-amber-900/10 dark:border-white/10 p-5 sm:p-6 text-slate-900 dark:text-slate-100 transition-all">
      
      <!-- Header Row: Amber Search Icon + QUICK SEARCH VAULT + Close button -->
      <div class="flex items-center justify-between pb-3.5 border-b border-amber-900/10 dark:border-white/10">
        <div class="flex items-center gap-2.5 text-amber-700 dark:text-amber-500 font-extrabold uppercase tracking-wider text-sm sm:text-base">
          <svg class="w-5 h-5 text-amber-700 dark:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <span class="font-display">QUICK SEARCH VAULT</span>
        </div>
        <button id="search-modal-close" class="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xl p-1 font-bold leading-none transition cursor-pointer" aria-label="Close search">
          ✕
        </button>
      </div>

      <!-- Search Input Container: Pill-shaped with soft background matching reference -->
      <div class="mt-4">
        <div class="rounded-2xl bg-[#f6f2ed] dark:bg-slate-800/90 border border-amber-900/5 dark:border-white/5 px-4 py-3 sm:py-3.5 flex items-center gap-3">
          <input id="search-modal-input" type="text" placeholder="Search umbrellas, raincoats, rain boots, storm specs..." class="w-full bg-transparent text-sm sm:text-base font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none">
        </div>
      </div>

      <!-- Category Filter Pills (Reference Image: Filter: [All] [Umbrellas] [Raincoats] [Rain Boots]) -->
      <div class="mt-3.5 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
        <span class="text-slate-500 dark:text-slate-400 font-bold text-xs shrink-0 mr-1">Filter:</span>
        <button type="button" data-search-cat="all" class="search-category-btn px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0284c7] text-white shadow-xs transition shrink-0 cursor-pointer">All</button>
        <button type="button" data-search-cat="umbrellas" class="search-category-btn px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition shrink-0 cursor-pointer">Umbrellas</button>
        <button type="button" data-search-cat="raincoats" class="search-category-btn px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition shrink-0 cursor-pointer">Raincoats</button>
        <button type="button" data-search-cat="boots" class="search-category-btn px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition shrink-0 cursor-pointer">Rain Boots</button>
      </div>

      <!-- Subtitle Helper Text -->
      <p id="search-modal-subtitle" class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
        Start typing to explore umbrellas, raincoats, and rain boots...
      </p>

      <!-- Live Search Results -->
      <div id="search-modal-results" class="mt-3 max-h-[50vh] overflow-y-auto space-y-2 pr-1">
      </div>

    </div>
  `;

  if (!searchModal) {
    const modalDiv = document.createElement('div');
    modalDiv.id = 'search-modal';
    modalDiv.className = 'hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 transition-all';
    modalDiv.innerHTML = modalMarkup;
    document.body.appendChild(modalDiv);
    searchModal = modalDiv;
  } else {
    searchModal.className = 'hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 transition-all';
    searchModal.innerHTML = modalMarkup;
  }

  const searchClose = document.getElementById('search-modal-close');
  const searchInput = document.getElementById('search-modal-input');
  const searchResults = document.getElementById('search-modal-results');
  const searchSubtitle = document.getElementById('search-modal-subtitle');
  let currentSearchCategory = 'all';

  // Category Filter Pill Handlers
  const catBtns = searchModal.querySelectorAll('.search-category-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = btn.getAttribute('data-search-cat') || 'all';
      currentSearchCategory = cat;

      // Update active pill visuals
      catBtns.forEach(b => {
        if (b === btn) {
          b.className = 'search-category-btn px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0284c7] text-white shadow-xs transition shrink-0 cursor-pointer';
        } else {
          b.className = 'search-category-btn px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition shrink-0 cursor-pointer';
        }
      });

      renderSearchResults(searchInput ? searchInput.value.trim() : '');
    });
  });

  function openSearch() {
    searchModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    if (searchInput) {
      setTimeout(() => searchInput.focus(), 80);
      renderSearchResults(searchInput.value.trim());
    } else {
      renderSearchResults('');
    }
  }

  function closeSearch() {
    searchModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.search-modal-trigger');
    if (trigger) {
      e.preventDefault();
      openSearch();
    }
  });
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
      closeSearch();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value.trim());
    });
  }

  function renderSearchItemMarkup(product) {
    const catEmoji = product.category === 'umbrellas' ? '☂️' : (product.category === 'raincoats' ? '🧥' : '👢');
    const isFav = typeof isInWishlist === 'function' ? isInWishlist(product.id) : false;
    const imgUrl = (product.images && product.images[0]) ? product.images[0] : 'assets/images/placeholder.jpg';

    return `
      <div class="flex items-center gap-3.5 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-amber-500/30 transition group">
        <a href="product-detail.html?id=${product.id}" class="flex items-center gap-3.5 flex-1 min-w-0">
          <img src="${imgUrl}" alt="${product.name}" class="w-14 h-14 object-cover rounded-xl bg-slate-100 dark:bg-slate-800 flex-shrink-0 border border-slate-200/60 dark:border-slate-700/60">
          <div class="min-w-0 flex-1">
            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/70 px-2 py-0.5 rounded-md inline-block mb-1">
              ${catEmoji} ${product.category}
            </span>
            <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-amber-700 dark:group-hover:text-amber-400 transition">${product.name}</h5>
            <div class="flex items-center gap-2 mt-0.5">
              <span class="text-xs font-extrabold text-slate-900 dark:text-white">₹${product.price.toLocaleString('en-IN')}</span>
              ${product.originalPrice ? `<span class="text-[11px] text-slate-400 line-through">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            </div>
          </div>
        </a>
        <button type="button" onclick="event.preventDefault(); event.stopPropagation(); toggleWishlist('${product.id}'); syncSearchWishlistIcons();" data-search-wishlist-id="${product.id}" class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/60 transition shrink-0 cursor-pointer" title="Save to Favorites">
          ${typeof getHeartSvg === 'function' ? getHeartSvg(isFav) : '♥'}
        </button>
      </div>
    `;
  }

  function renderSearchResults(query = '') {
    if (!searchResults) return;

    const q = query.trim().toLowerCase();
    let filtered = typeof PRODUCTS_DATA !== 'undefined' ? [...PRODUCTS_DATA] : [];

    // Category filter: handles 'all', 'umbrellas', 'raincoats', 'boots'
    if (currentSearchCategory !== 'all') {
      filtered = filtered.filter(p => {
        const cat = (p.category || '').toLowerCase();
        if (currentSearchCategory === 'boots') {
          return cat === 'boots' || cat.includes('boot');
        }
        return cat === currentSearchCategory.toLowerCase();
      });
    }

    // Text search filter
    if (q) {
      filtered = filtered.filter(p => 
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.shortDesc && p.shortDesc.toLowerCase().includes(q)) ||
        (p.subCategory && p.subCategory.toLowerCase().includes(q)) ||
        (p.badge && p.badge.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.tagline && p.tagline.toLowerCase().includes(q))
      );
    }

    // Dynamic subtitle
    if (searchSubtitle) {
      if (!q && currentSearchCategory === 'all') {
        searchSubtitle.textContent = 'Start typing to explore umbrellas, raincoats, and rain boots...';
      } else if (!q && currentSearchCategory !== 'all') {
        const catLabel = currentSearchCategory === 'umbrellas' ? 'Umbrellas' : (currentSearchCategory === 'raincoats' ? 'Raincoats' : 'Rain Boots');
        searchSubtitle.textContent = `Showing all ${filtered.length} ${catLabel} in catalog`;
      } else {
        searchSubtitle.textContent = `Found ${filtered.length} matching gear item${filtered.length === 1 ? '' : 's'}${q ? ` for "${query}"` : ''}`;
      }
    }

    // When query is empty and 'all' is selected: show top 4 featured items so user can browse immediately
    if (!q && currentSearchCategory === 'all') {
      const featured = filtered.slice(0, 4);
      searchResults.innerHTML = `
        <div class="pt-1 pb-2">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Featured Storm Gear</div>
          <div class="space-y-2">
            ${featured.map(renderSearchItemMarkup).join('')}
          </div>
        </div>
      `;
      return;
    }

    if (filtered.length === 0) {
      searchResults.innerHTML = `
        <div class="py-10 text-center text-slate-500 dark:text-slate-400">
          <p class="font-bold text-slate-700 dark:text-slate-200 text-sm">No storm gear matches your search</p>
          <p class="text-xs text-slate-400 dark:text-slate-500 mt-1">Try selecting "All" or searching for "vortex", "golf", "trench", "chelsea", or "boot".</p>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = filtered.map(renderSearchItemMarkup).join('');
  }
}

function syncSearchWishlistIcons() {
  const btns = document.querySelectorAll('[data-search-wishlist-id]');
  btns.forEach(btn => {
    const id = btn.getAttribute('data-search-wishlist-id');
    const isFav = typeof isInWishlist === 'function' ? isInWishlist(id) : false;
    if (typeof getHeartSvg === 'function') {
      btn.innerHTML = getHeartSvg(isFav);
    }
  });
}

// ==================== QUICK VIEW (FEATURE REMOVED) ====================
function initQuickViewModal() {}
function openQuickView(productId) {}
function closeQuickView() {}
function selectQuickViewColor(colorName) {}
function selectQuickViewSize(sizeName) {}
function addQuickViewToCart() {}

// ==================== NAV ACTIVE STATE ====================
function highlightActiveNav() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active', 'text-sky-600');
    }
  });

  if (page === 'index.html' || page === 'home-2.html') {
    const homeParent = document.getElementById('nav-parent-home');
    if (homeParent) homeParent.classList.add('text-sky-600', 'font-semibold');
  } else if (page.startsWith('products-') || page === 'product-detail.html') {
    const prodParent = document.getElementById('nav-parent-products');
    if (prodParent) prodParent.classList.add('text-sky-600', 'font-semibold');
  }
}

// ==================== RAIN DROPLET EFFECTS ====================
function initRainEffects() {
  const containers = document.querySelectorAll('.rain-container');
  containers.forEach(container => {
    const dropCount = 35;
    let html = '';
    for (let i = 0; i < dropCount; i++) {
      const left = Math.floor(Math.random() * 100);
      const delay = (Math.random() * 2).toFixed(2);
      const duration = (0.7 + Math.random() * 0.6).toFixed(2);
      html += `<div class="drop" style="left: ${left}%; animation-delay: ${delay}s; animation-duration: ${duration}s;"></div>`;
    }
    container.innerHTML = html;
  });
}

// ==================== NEWSLETTER ====================
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input) return;
      const isValid = validateField(input, true);
      if (!isValid) {
        const msg = input.dataset.lastError || 'Please enter a valid email address (e.g. name@gmail.com).';
        const title = input.dataset.lastErrorTitle || 'Invalid Email Address';
        showFormAlertToast(msg, title);
        return;
      }
      showToast(`🎉 You're signed up! Use promo code STORM20 for 20% off.`, 'success');
      input.value = '';
      clearFieldError(input);
    });
  });
}

// ==================== GLOBAL FORM VALIDATION & AUTHENTICATION ====================
function isPhoneField(el) {
  if (!el || !el.tagName || el.tagName.toLowerCase() !== 'input') return false;
  const type = (el.type || '').toLowerCase();
  const idName = ((el.id || '') + ' ' + (el.name || '') + ' ' + (el.placeholder || '')).toLowerCase();
  return type === 'tel' || idName.includes('phone') || idName.includes('mobile') || idName.includes('contact');
}

function initGlobalFormValidation() {
  // 1. Strict Phone Key Filtering: Alphabets and special characters are completely NOT typable
  document.addEventListener('keydown', (e) => {
    const el = e.target;
    if (isPhoneField(el)) {
      const allowedControlKeys = [
        'Backspace', 'Tab', 'Enter', 'Escape', 'ArrowLeft', 'ArrowRight', 
        'ArrowUp', 'ArrowDown', 'Delete', 'Home', 'End'
      ];
      if (allowedControlKeys.includes(e.key)) {
        // Allowed navigation/control
      } else if (e.ctrlKey || e.metaKey || e.altKey) {
        // Allow copy/paste shortcuts
      } else if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
        // Block all letters, symbols, punctuation, spaces
        e.preventDefault();
        return;
      }
    }

    // 2. Enter Key Handler: If user presses Enter in any input, validate immediately
    if (e.key === 'Enter' && el && (el.matches('input, textarea'))) {
      const isValid = validateField(el, true);
      if (!isValid) {
        e.preventDefault();
        e.stopPropagation();
        const msg = el.dataset.lastError || 'Please fill out this field correctly.';
        const title = el.dataset.lastErrorTitle || 'Invalid Input';
        showFormAlertToast(msg, title);
        return;
      }
      if (el.form) {
        const formValid = validateForm(el.form);
        if (!formValid) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    }
  });

  // Strict Phone Keypress fallback
  document.addEventListener('keypress', (e) => {
    const el = e.target;
    if (isPhoneField(el)) {
      if (e.key !== 'Enter' && !/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    }
  });

  // Strict Phone Input & Paste sanitization (ensures no letters or symbols slip in via paste/IME)
  document.addEventListener('input', (e) => {
    const el = e.target;
    if (isPhoneField(el)) {
      const sanitized = el.value.replace(/[^0-9]/g, '');
      if (el.value !== sanitized) {
        el.value = sanitized;
      }
    }

    if (el && (el.matches('input, textarea') || el.classList.contains('is-invalid'))) {
      if (el.classList.contains('is-invalid')) {
        validateField(el, false);
      }
    }
  });

  document.addEventListener('change', (e) => {
    const el = e.target;
    if (el && (el.matches('select, input[type="radio"], input[type="checkbox"]') || el.classList.contains('is-invalid'))) {
      if (el.classList.contains('is-invalid')) {
        validateField(el, false);
      }
    }
  });

  // 3. Intercept form submits and submit button clicks: Show popup if error not cleared
  document.addEventListener('submit', (e) => {
    const form = e.target;
    if (form && !validateForm(form)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, input[type="submit"]');
    if (!btn) return;

    const form = btn.closest('form');
    if (form && (btn.type === 'submit' || btn.classList.contains('submit-btn'))) {
      if (!validateForm(form)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  }, true);

  // Set min date on date pickers to disable past dates natively
  try {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;
    document.querySelectorAll('input[type="date"]').forEach(inp => {
      if (!inp.getAttribute('min')) {
        inp.setAttribute('min', todayStr);
      }
    });
  } catch (err) {
    // Ignore any environment date parsing issues
  }
}

// Validates a single field. Returns true if valid, false if invalid.
function validateField(field, isSubmitting = true) {
  if (!field) return true;
  const val = (field.value || '').trim();
  const idName = ((field.id || '') + ' ' + (field.name || '') + ' ' + (field.placeholder || '')).toLowerCase();
  const type = (field.type || '').toLowerCase();
  const tag = field.tagName.toLowerCase();
  const isRequired = field.hasAttribute('required') || field.dataset.required === 'true';

  let errorMessage = '';
  let errorTitle = 'Verification Required';

  const parentContainer = field.closest('div');
  const labelEl = parentContainer ? parentContainer.querySelector('label') : null;
  const labelText = (labelEl ? labelEl.textContent : '').toLowerCase();

  // 1A. Company / Hotel Name rule: Must be strictly greater than 2 letters (minimum 3 characters)
  const isCompanyField = idName.includes('company') || 
                         idName.includes('hotel') || 
                         idName.includes('corp') || 
                         labelText.includes('company') || 
                         labelText.includes('hotel');

  // 1B. Personal Name rule: Must be strictly greater than 3 letters (minimum 4 characters)
  const isPersonNameField = !isCompanyField && (
    idName.includes('name') || 
    idName.includes('recipient') || 
    idName.includes('fname') || 
    idName.includes('lname') || 
    idName.includes('alex morgan') ||
    labelText.includes('name') || 
    field.getAttribute('autocomplete') === 'name'
  );

  if (isCompanyField) {
    if (isRequired && val.length === 0) {
      errorMessage = 'Please enter your company or hotel name.';
      errorTitle = 'Company Name Required';
    } else if (val.length > 0 && val.length <= 2) {
      errorMessage = 'Company / Hotel name must be greater than 2 letters (minimum 3 characters).';
      errorTitle = 'Name Too Short';
    } else if (val.length > 2 && !/[a-zA-Z]/.test(val)) {
      errorMessage = 'Please enter a valid company / hotel name containing letters.';
      errorTitle = 'Invalid Company Name';
    }
  } else if (isPersonNameField) {
    if (isRequired && val.length === 0) {
      errorMessage = 'Name must be at least 2 characters.';
      errorTitle = 'Name Required';
    } else if (val.length > 0 && val.length < 2) {
      errorMessage = 'Name must be at least 2 characters.';
      errorTitle = 'Name Too Short';
    } else if (val.length >= 2 && !/[a-zA-Z]/.test(val)) {
      errorMessage = 'Please enter a valid name containing alphabetical letters.';
      errorTitle = 'Invalid Name Format';
    }
  }
  // 1C. Date rule: Past date should not be accepted
  else if (type === 'date' || idName.includes('date') || labelText.includes('date')) {
    if (isRequired && val.length === 0) {
      errorMessage = 'Please select your preferred date.';
      errorTitle = 'Date Required';
    } else if (val) {
      const parts = val.split('-');
      if (parts.length === 3) {
        const selectedDate = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          errorMessage = 'Past dates cannot be accepted. Please choose today or a future date.';
          errorTitle = 'Past Date Not Allowed';
        }
      }
    }
  }
  // 2. Email rule: Must be valid email with domain extension (e.g. name@gmail.com)
  else if (type === 'email' || idName.includes('email')) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (isRequired && val.length === 0) {
      errorMessage = 'Please enter your email address.';
      errorTitle = 'Email Required';
    } else if (val.length > 0 && !emailRegex.test(val)) {
      errorMessage = 'Please enter a valid email address (e.g. name@gmail.com).';
      errorTitle = 'Invalid Email Address';
    }
  }
  // 3. Phone / Mobile rule: Numbers only, no letters/symbols, minimum 10 digits
  else if (isPhoneField(field)) {
    if (isRequired && val.length === 0) {
      errorMessage = 'Please enter your 10-digit mobile number.';
      errorTitle = 'Phone Number Required';
    } else if (/[^0-9]/.test(val)) {
      errorMessage = 'Phone number must contain numbers only (minimum 10 digits).';
      errorTitle = 'Invalid Phone Number';
    } else if (val.length < 10) {
      errorMessage = 'Please enter a valid 10-digit mobile number.';
      errorTitle = 'Incomplete Phone Number';
    }
  }
  // 4. Dropdown / Select rule: Must select a valid non-empty option
  else if (tag === 'select') {
    if (isRequired && (!val || val === '' || val.toLowerCase().includes('select'))) {
      errorMessage = 'Please select a valid option from the dropdown.';
      errorTitle = 'Selection Required';
    }
  }
  // 5. Postal / PIN code rule
  else if (idName.includes('pin') || idName.includes('zip') || idName.includes('postal')) {
    if (isRequired && val.length === 0) {
      errorMessage = 'Please enter your postal / PIN code.';
      errorTitle = 'Postal Code Required';
    } else if (isRequired && val.length < 5) {
      errorMessage = 'Please enter a valid 5-to-6 digit postal / PIN code.';
      errorTitle = 'Invalid Postal Code';
    }
  }
  // 6. Address rule
  else if (idName.includes('address') || idName.includes('addr')) {
    if (isRequired && val.length === 0) {
      errorMessage = 'Please enter your street / delivery address.';
      errorTitle = 'Address Required';
    }
  }
  // 7. City / Region rule
  else if (idName.includes('city') || idName.includes('region')) {
    if (isRequired && val.length === 0) {
      errorMessage = 'Please enter your city / region.';
      errorTitle = 'City Required';
    }
  }
  // 8. Textarea / Message rule
  else if (tag === 'textarea') {
    if (isRequired && val.length === 0) {
      errorMessage = 'Please enter your message before submitting.';
      errorTitle = 'Message Required';
    }
  }
  // 9. General Required rule
  else if (isRequired && val.length === 0) {
    errorMessage = 'Please fill out this field before continuing.';
    errorTitle = 'Required Field Empty';
  }

  // Store metadata on element for toast consumption
  if (errorMessage) {
    field.dataset.lastError = errorMessage;
    field.dataset.lastErrorTitle = errorTitle;
    applyFieldError(field, errorMessage);
    return false;
  } else {
    delete field.dataset.lastError;
    delete field.dataset.lastErrorTitle;
    clearFieldError(field);
    return true;
  }
}

function applyFieldError(field, message) {
  field.classList.add('border-rose-500', 'focus:border-rose-500', 'focus:ring-rose-500', 'is-invalid');
  field.classList.remove('border-slate-200', 'border-slate-300', 'dark:border-slate-700');

  // Locate or create error message container
  let container = field.parentElement;

  // If the parent is a flex row container, wrap the field in a column wrapper
  // so the error message sits cleanly beneath the field without displacing row siblings!
  if (container && container.classList.contains('flex') && !container.classList.contains('flex-col')) {
    if (!container.classList.contains('field-flex-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'field-flex-wrapper flex-1 min-w-0 flex flex-col';
      container.insertBefore(wrapper, field);
      wrapper.appendChild(field);
      container = wrapper;
    }
  }

  let errorEl = container.querySelector('.form-error-msg');
  if (!errorEl) {
    errorEl = document.createElement('div');
    errorEl.className = 'form-error-msg flex items-center gap-1.5 text-[11px] leading-tight text-rose-500 font-semibold mt-1.5 w-full text-left';
    errorEl.innerHTML = `
      <svg class="w-3.5 h-3.5 shrink-0 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
      </svg>
      <span class="error-msg-text"></span>
    `;
    field.insertAdjacentElement('afterend', errorEl);
  }
  const textEl = errorEl.querySelector('.error-msg-text');
  if (textEl) textEl.textContent = message;
}

function clearFieldError(field) {
  field.classList.remove('border-rose-500', 'focus:border-rose-500', 'focus:ring-rose-500', 'is-invalid');
  field.classList.add('border-slate-200', 'dark:border-slate-700');

  const container = field.parentElement;
  if (container) {
    const errorEl = container.querySelector('.form-error-msg');
    if (errorEl) errorEl.remove();
  }
}

// Master form validator: returns true if valid, false if any field fails
function validateForm(form) {
  if (!form) return true;
  const elements = form.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), select, textarea');
  let firstInvalid = null;
  let hasError = false;

  elements.forEach(el => {
    const valid = validateField(el, true);
    if (!valid) {
      hasError = true;
      if (!firstInvalid) firstInvalid = el;
    }
  });

  if (hasError) {
    if (firstInvalid) {
      firstInvalid.focus();
      const msg = firstInvalid.dataset.lastError || 'Please review and complete the highlighted fields.';
      const title = firstInvalid.dataset.lastErrorTitle || 'Attention Required';
      showFormAlertToast(msg, title);
    }
    return false;
  }
  return true;
}

// Top-right Sleek Glassmorphic Toast Alert matching UmbrellaZone aesthetics
function showFormAlertToast(message = 'Please check and complete the required details.', title = 'Attention Required') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed top-5 right-5 z-[100] flex flex-col gap-2.5 max-w-sm sm:max-w-md w-full pointer-events-none px-4';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-enter pointer-events-auto flex items-start gap-3.5 p-4 rounded-2xl bg-white/95 text-slate-900 dark:bg-slate-900/95 dark:text-slate-100 backdrop-blur-md shadow-2xl border border-slate-200/90 dark:border-slate-700/80 transition-all duration-300 ring-1 ring-slate-900/5 dark:ring-white/10';
  toast.innerHTML = `
    <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-rose-500/25">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
    </div>
    <div class="flex-1 min-w-0 pr-1">
      <h4 class="font-bold text-xs uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-0.5">${title}</h4>
      <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 leading-snug font-medium">${message}</p>
    </div>
    <button class="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition shrink-0" aria-label="Dismiss notification" onclick="this.closest('.toast-enter').remove()">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('toast-enter');
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 260);
  }, 4000);
}
