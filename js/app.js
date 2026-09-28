import '../css/index.css';
import { categories, menuItems, spicyLevelsInfo, bestSellers } from '../data/menu.js';
import { outlets, outletCities } from '../data/outlets.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeroSwitcher();
  initFeaturedCategories();
  initMenuSection();
  initSpicyLevels();
  initBestSellers();
  initOutletFinder();
  initOrderOnlineFlow();
  initDetailModal();
  initNavbarScroll();
  initMobileDrawer();
  initSmoothScrollLinks();
});

/* ==========================================================================
   HERO SWITCHER (Ramen Supreme vs Mie Goreng)
   ========================================================================== */
function initHeroSwitcher() {
  const plateImg = document.getElementById('heroPlateImg');
  const switcherBtns = document.querySelectorAll('.switcher-btn');
  if (!plateImg || !switcherBtns.length) return;

  const heroDishes = {
    'supreme': {
      src: 'assets/dish-ramen-supreme.jpg',
      alt: 'Ramen Chili Oil Supreme Mie Ganbatte'
    },
    'goreng': {
      src: 'assets/dish-mie-goreng.jpg',
      alt: 'Mie Ganbatte Goreng Chili Oil'
    }
  };

  switcherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const dishKey = btn.dataset.dish;
      if (!heroDishes[dishKey]) return;

      switcherBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      plateImg.style.opacity = '0';
      plateImg.style.transform = 'scale(0.95)';
      setTimeout(() => {
        plateImg.src = heroDishes[dishKey].src;
        plateImg.alt = heroDishes[dishKey].alt;
        plateImg.style.opacity = '1';
        plateImg.style.transform = 'scale(1)';
      }, 200);
    });
  });
}

/* ==========================================================================
   FEATURED CATEGORY CARDS (01 - 04)
   ========================================================================== */
function initFeaturedCategories() {
  const cards = document.querySelectorAll('.featured-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const targetCategory = card.dataset.category;
      if (!targetCategory) return;

      // Scroll to menu section smoothly
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Switch menu active tab
      const tabBtn = document.querySelector(`.menu-tab-btn[data-category="${targetCategory}"]`);
      if (tabBtn) {
        tabBtn.click();
      }
    });
  });
}

/* ==========================================================================
   FULL MENU SECTION & FILTERING
   ========================================================================== */
let currentCategory = 'ALL';

function initMenuSection() {
  const tabsContainer = document.getElementById('menuTabs');
  const gridContainer = document.getElementById('menuGrid');
  if (!tabsContainer || !gridContainer) return;

  // Render category buttons
  tabsContainer.innerHTML = categories.map(cat => `
    <button class="menu-tab-btn ${cat.id === 'ALL' ? 'active' : ''}" data-category="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  // Attach tab events
  const tabButtons = tabsContainer.querySelectorAll('.menu-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderMenuItems(currentCategory);
    });
  });

  // Initial render
  renderMenuItems('ALL');
}

function renderMenuItems(category) {
  const gridContainer = document.getElementById('menuGrid');
  if (!gridContainer) return;

  const filtered = category === 'ALL'
    ? menuItems
    : menuItems.filter(item => item.category === category);

  gridContainer.innerHTML = filtered.map(item => {
    let badgeHtml = '';
    if (item.badge === 'BEST SELLER') {
      badgeHtml = `<span class="badge-pill badge-bestseller">⭐ BEST SELLER</span>`;
    } else if (item.badge === 'PEDAS') {
      badgeHtml = `<span class="badge-pill badge-spicy">🌶️ PEDAS</span>`;
    } else if (item.badge === 'TIDAK PEDAS') {
      badgeHtml = `<span class="badge-pill badge-nonspicy">TIDAK PEDAS</span>`;
    }

    const spicyText = item.spicyLevels && item.spicyLevels.length > 0
      ? `🌶️ Lv ${item.spicyLevels.join(' / ')}`
      : (item.options ? item.options.join(' / ') : item.spicyNote);

    // Image vs Sauce Visual
    const imageBlock = item.isSauce
      ? `
        <div class="sauce-card-visual">
          <div>${item.id === 'saus-keju' ? '🧀' : '🍣'}</div>
          <span class="sauce-label">${item.name}</span>
        </div>
      `
      : `<img src="${item.image}" alt="${item.name}" loading="lazy" />`;

    return `
      <article class="food-card" data-item-id="${item.id}">
        <div class="food-card-img-wrap">
          ${imageBlock}
          <div class="food-card-badges">
            ${badgeHtml}
            ${item.series ? `<span class="badge-pill badge-turquoise">${item.series}</span>` : ''}
          </div>
        </div>
        <div class="food-card-content">
          <div>
            <span class="food-card-category">${item.category}</span>
            <h3 class="food-card-title">${item.name}</h3>
            <p class="food-card-desc">${item.description}</p>
          </div>
          <div class="food-card-footer">
            <div class="food-card-price">
              <span class="price-label">${spicyText}</span>
              <span class="price-value">${item.priceRange}</span>
            </div>
            <button class="btn-detail" data-open-detail="${item.id}">
              Lihat Detail
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach detail triggers
  gridContainer.querySelectorAll('[data-open-detail]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openDetailModal(btn.dataset.openDetail);
    });
  });

  gridContainer.querySelectorAll('.food-card').forEach(card => {
    card.addEventListener('click', () => {
      openDetailModal(card.dataset.itemId);
    });
  });
}

/* ==========================================================================
   BEST SELLER SECTION (FAVORIT GANBATTE)
   ========================================================================== */
function initBestSellers() {
  const container = document.getElementById('bestsellerGrid');
  if (!container) return;

  container.innerHTML = bestSellers.map(item => `
    <article class="bestseller-card" data-item-id="${item.id}">
      <span class="bestseller-ribbon">⭐ BEST SELLER</span>
      <div class="bestseller-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="bestseller-body">
        <span class="food-card-category">${item.category}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="bestseller-footer">
          <div class="food-card-price">
            <span class="price-label">🌶️ Lv ${item.spicyLevels.join(' / ')}</span>
            <span class="price-value">${item.priceRange}</span>
          </div>
          <button class="btn btn-primary btn-sm" data-open-detail="${item.id}">
            Lihat Detail
          </button>
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('[data-open-detail]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openDetailModal(btn.dataset.openDetail);
    });
  });

  container.querySelectorAll('.bestseller-card').forEach(card => {
    card.addEventListener('click', () => {
      openDetailModal(card.dataset.itemId);
    });
  });
}

/* ==========================================================================
   SPICY LEVEL SECTION (SEBERAPA BERANI KAMU?)
   ========================================================================== */
function initSpicyLevels() {
  const grid = document.getElementById('spicyGrid');
  if (!grid) return;

  grid.innerHTML = spicyLevelsInfo.map(lvl => {
    const chiliIcons = '🌶️'.repeat(lvl.peppers);
    const extremeClass = lvl.isExtreme ? 'level-extreme' : '';
    return `
      <div class="spicy-card ${extremeClass}" data-level="${lvl.level}">
        <div class="spicy-level-num">LV ${lvl.level}</div>
        <div class="spicy-peppers">${chiliIcons}</div>
        <div class="spicy-label">${lvl.label}</div>
        <p class="spicy-desc">${lvl.description}</p>
        <span class="spicy-applicable">${lvl.suitableFor}</span>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   OUTLET FINDER & CITY FILTERS
   ========================================================================== */
let activeCityFilter = 'ALL';
let currentSearchQuery = '';

function initOutletFinder() {
  const filterContainer = document.getElementById('outletFilterBar');
  const searchInput = document.getElementById('outletSearchInput');
  const outletsGrid = document.getElementById('outletsGrid');
  if (!filterContainer || !outletsGrid) return;

  // City buttons
  filterContainer.innerHTML = outletCities.map(city => `
    <button class="outlet-filter-btn ${city.id === 'ALL' ? 'active' : ''}" data-city="${city.id}">
      ${city.name}
    </button>
  `).join('');

  filterContainer.querySelectorAll('.outlet-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterContainer.querySelectorAll('.outlet-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCityFilter = btn.dataset.city;
      renderOutlets();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderOutlets();
    });
  }

  // Initial render
  renderOutlets();
}

function renderOutlets() {
  const outletsGrid = document.getElementById('outletsGrid');
  if (!outletsGrid) return;

  const filtered = outlets.filter(outlet => {
    const matchesCity = activeCityFilter === 'ALL' || outlet.city === activeCityFilter;
    const matchesSearch = !currentSearchQuery ||
      outlet.name.toLowerCase().includes(currentSearchQuery) ||
      outlet.address.toLowerCase().includes(currentSearchQuery) ||
      outlet.cityDisplay.toLowerCase().includes(currentSearchQuery);
    return matchesCity && matchesSearch;
  });

  if (filtered.length === 0) {
    outletsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: white; border-radius: 16px;">
        <p style="font-weight: 700; font-size: 1.1rem; color: #555;">Tidak ada outlet yang cocok dengan pencarian.</p>
        <button class="btn btn-secondary btn-sm" id="resetOutletFilter" style="margin-top: 14px;">Reset Pencarian</button>
      </div>
    `;
    const resetBtn = document.getElementById('resetOutletFilter');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        activeCityFilter = 'ALL';
        currentSearchQuery = '';
        const searchInput = document.getElementById('outletSearchInput');
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.outlet-filter-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.city === 'ALL');
        });
        renderOutlets();
      });
    }
    return;
  }

  outletsGrid.innerHTML = filtered.map(outlet => {
    const platformButtons = outlet.platforms.map(p => `
      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn-platform ${p.icon === 'gojek' ? 'gofood' : p.icon + 'food'}">
        ${p.name}
      </a>
    `).join('');

    return `
      <article class="outlet-card">
        <div>
          <div class="outlet-header">
            <span class="outlet-city-tag">${outlet.cityDisplay}</span>
            <h3 class="outlet-title">${outlet.name}</h3>
          </div>
          <div class="outlet-address">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${outlet.address}</span>
          </div>
          <div class="outlet-action-links">
            <a href="${outlet.googleMaps}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
              Google Maps
            </a>
            <a href="${outlet.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              WhatsApp
            </a>
            <a href="${outlet.menuDrive}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              Menu Resmi
            </a>
          </div>
        </div>

        <div class="outlet-platform-section">
          <div class="platform-heading">Order Online Delivery</div>
          <div class="platform-buttons-group">
            ${outlet.platforms.length > 0
              ? platformButtons
              : `<span class="no-delivery-notice">Pemesanan online dapat dilakukan via WhatsApp / Dine-in</span>`
            }
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   ORDER ONLINE (READY TO GANBATTE?) - INTERACTIVE SELECTOR
   ========================================================================== */
function initOrderOnlineFlow() {
  const selectElem = document.getElementById('orderOutletSelect');
  const platformsContainer = document.getElementById('orderDynamicPlatforms');
  const outletInfoBox = document.getElementById('orderOutletAddressDisplay');
  if (!selectElem || !platformsContainer) return;

  // Populate options
  selectElem.innerHTML = outlets.map(o => `
    <option value="${o.id}">${o.name} (${o.cityDisplay})</option>
  `).join('');

  function updateOrderOptions() {
    const selectedId = selectElem.value;
    const outlet = outlets.find(o => o.id === selectedId);
    if (!outlet) return;

    if (outletInfoBox) {
      outletInfoBox.innerHTML = `
        <strong>Alamat:</strong> ${outlet.address}
      `;
    }

    if (outlet.platforms.length > 0) {
      platformsContainer.innerHTML = outlet.platforms.map(p => `
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: ${p.color}; border: none;">
          Pesan via ${p.name}
        </a>
      `).join('') + `
        <a href="${outlet.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          WhatsApp Outlet
        </a>
      `;
    } else {
      platformsContainer.innerHTML = `
        <div style="width: 100%; text-align: center;">
          <p style="font-size: 0.95rem; color: #555; margin-bottom: 14px;">
            Layanan pesan antar aplikasi untuk outlet Tangerang saat ini dapat dipesan langsung via WhatsApp resmi:
          </p>
          <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
            <a href="${outlet.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: #25D366; border: none;">
              Chat WhatsApp Outlet
            </a>
            <a href="${outlet.googleMaps}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              Buka Google Maps
            </a>
          </div>
        </div>
      `;
    }
  }

  selectElem.addEventListener('change', updateOrderOptions);
  updateOrderOptions();
}

/* ==========================================================================
   DISH DETAIL MODAL
   ========================================================================== */
let activeModalItem = null;

function initDetailModal() {
  const backdrop = document.getElementById('foodModalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!backdrop) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDetailModal);
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeDetailModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeDetailModal();
    }
  });

  const orderNowModalBtn = document.getElementById('modalOrderNowBtn');
  if (orderNowModalBtn) {
    orderNowModalBtn.addEventListener('click', () => {
      closeDetailModal();
      const orderSection = document.getElementById('order');
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

function openDetailModal(itemId) {
  const item = menuItems.find(i => i.id === itemId);
  if (!item) return;

  const backdrop = document.getElementById('foodModalBackdrop');
  const imgElem = document.getElementById('modalImage');
  const categoryElem = document.getElementById('modalCategory');
  const titleElem = document.getElementById('modalTitle');
  const descElem = document.getElementById('modalDesc');
  const pricingContainer = document.getElementById('modalPricingRows');
  const addonsContainer = document.getElementById('modalAddonsList');
  const addonsSection = document.getElementById('modalAddonsSection');

  if (!backdrop) return;

  if (imgElem) {
    imgElem.src = item.image;
    imgElem.alt = item.name;
  }
  if (categoryElem) {
    categoryElem.textContent = `${item.category} ${item.series ? '• ' + item.series : ''}`;
  }
  if (titleElem) {
    titleElem.textContent = item.name;
  }
  if (descElem) {
    descElem.textContent = item.description;
  }

  // Price breakdown
  if (pricingContainer) {
    if (item.priceLevels) {
      pricingContainer.innerHTML = Object.entries(item.priceLevels).map(([tier, prc]) => `
        <div class="modal-pricing-row">
          <span>${tier}</span>
          <span class="price-tag">${prc}</span>
        </div>
      `).join('');
    } else {
      pricingContainer.innerHTML = `
        <div class="modal-pricing-row">
          <span>Harga</span>
          <span class="price-tag">${item.priceRange}</span>
        </div>
      `;
    }
  }

  // Addons suggestion
  if (addonsSection && addonsContainer) {
    if (item.suggestedAddons && item.suggestedAddons.length > 0) {
      addonsSection.style.display = 'block';
      addonsContainer.innerHTML = item.suggestedAddons.map(addon => `
        <span class="addon-pill">+ ${addon}</span>
      `).join('');
    } else {
      addonsSection.style.display = 'none';
    }
  }

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  const backdrop = document.getElementById('foodModalBackdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   NAVBAR SCROLL SHADOW & MOBILE DRAWER
   ========================================================================== */
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initMobileDrawer() {
  const hamburger = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('mobileBackdrop');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!hamburger || !drawer || !backdrop) return;

  function toggleDrawer(open) {
    hamburger.classList.toggle('active', open);
    drawer.classList.toggle('open', open);
    backdrop.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    toggleDrawer(!isOpen);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => toggleDrawer(false));
  }

  backdrop.addEventListener('click', () => toggleDrawer(false));

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
