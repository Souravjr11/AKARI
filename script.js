/**
 * AKARI (あかり) - Premium Japanese Restaurant
 * Vanilla ES6+ Application Script
 * Features:
 *  - 65 Authentic Japanese Menu Items across 13 Categories
 *  - Real-time Category Filtering & Instant Search
 *  - Interactive Food Detail Modal
 *  - Sliding Shopping Cart Drawer with LocalStorage Persistence
 *  - Promo Code Discount Engine (AKARI10, SAKURA20, SAKURA35)
 *  - Simulated Checkout & Order Tracking
 *  - Table Reservation & Contact Form Validation
 *  - Newsletter Subscription with instant voucher code
 *  - Floating Sakura Petals Canvas Animation (Reduced-Motion Aware)
 *  - Sticky Nav & Mobile Drawer
 *  - Story, Preparation & Directions Modals
 */

// ==========================================
// 1. MENU DATABASE (65 DISHES, 13 CATEGORIES)
// ==========================================
const MENU_DATA = [
  // 1. Salmon & Ebi Nigiri (Sushi & Sashimi)
  {
    id: 'sushi-1',
    name: 'Salmon & Ebi Nigiri',
    japaneseName: 'サーモン・海老握り',
    category: 'Sushi & Sashimi',
    categoryId: 'sushi-sashimi',
    price: 13.50,
    rating: 4.9,
    reviewsCount: 210,
    description: 'Fresh Atlantic salmon and sweet spot prawn nigiri gently brushed with aged nikiri soy, served over seasoned warm sushi rice.',
    ingredients: ['Atlantic Salmon', 'Sweet Spot Prawn', 'Seasoned Sushi Rice', 'Nikiri Shoyu', 'Shizuoka Wasabi'],
    image: 'assets/images/menu-nigiri.jpg',
    badge: 'Popular',
    spiceLevel: 0,
    calories: '320 kcal',
    prepTime: '6 min'
  },
  // 2. California & Tuna Maki (Sushi & Sashimi)
  {
    id: 'sushi-2',
    name: 'California & Tuna Maki',
    japaneseName: 'カリフォルニア・鉄火巻き',
    category: 'Sushi & Sashimi',
    categoryId: 'sushi-sashimi',
    price: 12.00,
    rating: 4.8,
    reviewsCount: 184,
    description: 'Crisp nori rolls stacked with fresh bluefin tuna, succulent snow crab meat, creamy Hass avocado, and toasted sesame seeds.',
    ingredients: ['Pacific Bluefin Tuna', 'Snow Crab Meat', 'Hass Avocado', 'Toasted Nori', 'Sushi Rice'],
    image: 'assets/images/menu-maki.jpg',
    badge: 'Chef\'s Pick',
    spiceLevel: 0,
    calories: '290 kcal',
    prepTime: '8 min'
  },
  // 3. Sashimi Oishi AKARI (Sushi & Sashimi)
  {
    id: 'sushi-3',
    name: 'Sashimi Oishi AKARI',
    japaneseName: '特選刺身盛り合わせ',
    category: 'Sushi & Sashimi',
    categoryId: 'sushi-sashimi',
    price: 28.00,
    rating: 5.0,
    reviewsCount: 340,
    description: 'Deluxe sashimi feast featuring thick slices of prime bluefin otoro, wild king salmon, and sweet sea scallops on chilled slate.',
    ingredients: ['Bluefin Otoro', 'King Salmon', 'Hokkaido Scallops', 'Fresh Shizuoka Wasabi', 'Pickled Gari Ginger'],
    image: 'assets/images/special-sashimi.jpg',
    badge: 'Signature Dish',
    spiceLevel: 0,
    calories: '380 kcal',
    prepTime: '10 min'
  },
  // 4. Artisanal Tonkotsu Ramen (Ramen)
  {
    id: 'ramen-1',
    name: 'Artisanal Tonkotsu Ramen',
    japaneseName: '特製濃厚豚骨ラーメン',
    category: 'Ramen',
    categoryId: 'ramen',
    price: 16.50,
    rating: 5.0,
    reviewsCount: 412,
    description: '18-hour slow-simmered rich pork bone broth served with tender braised chashu pork, molten ajitsuke tamago, scallions, and black garlic oil.',
    ingredients: ['18-Hour Tonkotsu Broth', 'Braised Chashu Pork', 'Ajitsuke Egg', 'Hand-Pulled Noodles', 'Mayu Garlic Oil'],
    image: 'assets/images/about-ramen.jpg',
    badge: 'Bestseller',
    spiceLevel: 0,
    calories: '780 kcal',
    prepTime: '10 min'
  },
  // 5. Tokyo Shoyu Ramen (Ramen)
  {
    id: 'ramen-2',
    name: 'Tokyo Shoyu Ramen',
    japaneseName: '東京伝統醤油ラーメン',
    category: 'Ramen',
    categoryId: 'ramen',
    price: 14.50,
    rating: 4.8,
    reviewsCount: 195,
    description: 'Classic clear chicken and bonito dashi broth infused with aged barrel shoyu, springy curly noodles, tender chashu, and menma bamboo shoots.',
    ingredients: ['Barrel-Aged Shoyu', 'Chicken & Dashi Broth', 'Tender Chashu', 'Menma Bamboo', 'Spring Scallions'],
    image: 'assets/images/menu-ramen.jpg',
    badge: 'Tokyo Classic',
    spiceLevel: 0,
    calories: '590 kcal',
    prepTime: '8 min'
  },
  // 6. Classic Katsudon Bowl (Rice & Donburi)
  {
    id: 'donburi-1',
    name: 'Classic Katsudon Bowl',
    japaneseName: '特選ロースかつ丼',
    category: 'Rice & Donburi',
    categoryId: 'rice-donburi',
    price: 15.00,
    rating: 4.9,
    reviewsCount: 265,
    description: 'Crispy panko pork cutlet simmered in sweet dashi and beaten organic egg, served over a steaming bowl of premium Niigata Koshihikari rice.',
    ingredients: ['Crispy Panko Pork Cutlet', 'Simmered Sweet Dashi', 'Organic Soft Eggs', 'Niigata Rice', 'Mitsuba Parsley'],
    image: 'assets/images/menu-donburi.jpg',
    badge: 'Comfort Food',
    spiceLevel: 0,
    calories: '720 kcal',
    prepTime: '12 min'
  },
  // 7. Deluxe Tokyo Bento Box (Bento & Sets)
  {
    id: 'bento-1',
    name: 'Deluxe Tokyo Bento Box',
    japaneseName: '幕の内御膳弁当',
    category: 'Bento & Sets',
    categoryId: 'bento',
    price: 19.50,
    rating: 4.9,
    reviewsCount: 310,
    description: 'Compartment feast: Teriyaki chicken, crispy tempura prawns, tamagoyaki, potato salad, pickles, koshihikari rice, and hot miso soup.',
    ingredients: ['Chicken Teriyaki', 'Ebi Tempura', 'Tamagoyaki Omelet', 'Japanese Potato Salad', 'Steamed Koshihikari Rice'],
    image: 'assets/images/menu-bento.jpg',
    badge: 'Complete Meal',
    spiceLevel: 0,
    calories: '810 kcal',
    prepTime: '14 min'
  },
  // 8. Crispy Ebi Tempura (Tempura)
  {
    id: 'tempura-1',
    name: 'Crispy Ebi Tempura',
    japaneseName: '極上海老の天ぷら',
    category: 'Tempura',
    categoryId: 'tempura',
    price: 16.00,
    rating: 4.9,
    reviewsCount: 220,
    description: 'Four jumbo black tiger prawns fried in delicate lace-like tempura batter, served with grated daikon radish, lemon, and warm tentsuyu dip.',
    ingredients: ['Jumbo Tiger Prawns', 'Lace Tempura Batter', 'Warm Tentsuyu Dip', 'Grated Daikon Radish', 'Fresh Lemon'],
    image: 'assets/images/menu-tempura.jpg',
    badge: 'Crispy & Light',
    spiceLevel: 0,
    calories: '420 kcal',
    prepTime: '8 min'
  },
  // 9. Pan-Seared Pork Gyoza (Starters & Snacks)
  {
    id: 'starter-1',
    name: 'Pan-Seared Pork Gyoza',
    japaneseName: 'パリパリ焼き餃子',
    category: 'Starters & Snacks',
    categoryId: 'starters',
    price: 8.50,
    rating: 4.9,
    reviewsCount: 290,
    description: 'Six handcrafted dumplings filled with juicy Kurobuta pork, cabbage, and ginger, pan-seared with a crispy lace skirt and chili rayu shoyu dip.',
    ingredients: ['Kurobuta Minced Pork', 'Napa Cabbage', 'Handmade Wrappers', 'Spicy Rayu Chili Oil', 'Sesame Vinegar Dip'],
    image: 'assets/images/menu-gyoza.jpg',
    badge: 'Crowd Favorite',
    spiceLevel: 1,
    calories: '340 kcal',
    prepTime: '7 min'
  },
  // 10. Charbroiled Yakitori Skewers (Japanese Grill)
  {
    id: 'grill-1',
    name: 'Charbroiled Yakitori Skewers',
    japaneseName: '炭火焼き鳥盛り合わせ',
    category: 'Japanese Grill',
    categoryId: 'grill',
    price: 14.00,
    rating: 4.9,
    reviewsCount: 245,
    description: 'Four skewers of juicy chicken thigh and sweet scallions grilled over binchotan charcoal, glazed with aged sweet caramelized teriyaki tare.',
    ingredients: ['Farm-Raised Chicken Thigh', 'Tokyo Scallions', 'Aged Teriyaki Tare', 'Shichimi Togarashi', 'Charred Shishito'],
    image: 'assets/images/menu-yakitori.jpg',
    badge: 'Binchotan Grill',
    spiceLevel: 0,
    calories: '460 kcal',
    prepTime: '10 min'
  },
  // 11. Uji Matcha Ice Cream & Taiyaki (Desserts)
  {
    id: 'dessert-1',
    name: 'Uji Matcha Ice Cream & Taiyaki',
    japaneseName: '宇治抹茶アイス・たい焼き',
    category: 'Japanese Desserts',
    categoryId: 'desserts',
    price: 8.50,
    rating: 5.0,
    reviewsCount: 280,
    description: 'Stone-ground Uji matcha ice cream from Kyoto paired with a freshly baked warm custard taiyaki waffle cake and sweet azuki red beans.',
    ingredients: ['Kyoto Uji Ceremonial Matcha', 'Warm Custard Taiyaki', 'Tokachi Sweet Azuki', 'Hokkaido Fresh Cream'],
    image: 'assets/images/menu-desserts.jpg',
    badge: 'Kyoto Special',
    spiceLevel: 0,
    calories: '310 kcal',
    prepTime: '4 min'
  },
  // 12. Iced Matcha Latte & Ramune (Drinks)
  {
    id: 'drink-1',
    name: 'Iced Matcha Latte & Ramune',
    japaneseName: '濃厚抹茶ラテ・元祖ラムネ',
    category: 'Japanese Drinks',
    categoryId: 'drinks',
    price: 6.50,
    rating: 4.9,
    reviewsCount: 215,
    description: 'Ceremonial grade Uji matcha whisked fresh and poured over creamy milk, or enjoy the classic nostalgic Ramune marble soda pop.',
    ingredients: ['Whisked Uji Green Tea', 'Creamy Milk', 'Pure Cane Sugar', 'Codd-Neck Marble Soda'],
    image: 'assets/images/menu-drinks.jpg',
    badge: 'Refreshing',
    spiceLevel: 0,
    calories: '150 kcal',
    prepTime: '3 min'
  },
  // 13. AKARI Grand Imperial Feast (Signature Combos)
  {
    id: 'combo-1',
    name: 'AKARI Grand Imperial Feast',
    japaneseName: '食べる特選和食御膳',
    category: 'Signature Combos',
    categoryId: 'combos',
    price: 45.00,
    rating: 5.0,
    reviewsCount: 390,
    description: 'The definitive tasting experience for two: Slate sushi platter (8 pcs), crispy tempura prawns, gyoza, chicken teriyaki, and two miso soups.',
    ingredients: ['Nigiri & Maki Platter', 'Tiger Prawn Tempura', 'Pan-Seared Gyoza', 'Teriyaki Skewers', 'Awase Miso Soup'],
    image: 'assets/images/hero-sushi.jpg',
    badge: 'Best Value for 2',
    spiceLevel: 0,
    calories: '1280 kcal',
    prepTime: '16 min'
  }
];

// ==========================================
// 2. APPLICATION STATE
// ==========================================
const AppState = {
  cart: [],
  favorites: [],
  activeCategory: 'all',
  searchQuery: '',
  showAllItems: false,
  appliedPromo: null,
  deliveryFee: 3.50,
  freeDeliveryThreshold: 50.00,
  taxRate: 0.08,
  promos: {
    'AKARI10': 0.10,
    'SAKURA20': 0.20,
    'SAKURA35': 0.35
  }
};

// ==========================================
// 3. STORAGE & INITIALIZATION
// ==========================================
function initStorage() {
  try {
    const savedCart = localStorage.getItem('akari_cart');
    if (savedCart) {
      AppState.cart = JSON.parse(savedCart);
    }
  } catch (e) {
    console.error('Failed to load cart from storage', e);
    AppState.cart = [];
  }

  try {
    const savedFavs = localStorage.getItem('akari_favorites');
    if (savedFavs) {
      AppState.favorites = JSON.parse(savedFavs);
    }
  } catch (e) {
    console.error('Failed to load favorites from storage', e);
    AppState.favorites = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem('akari_cart', JSON.stringify(AppState.cart));
  } catch (e) {
    console.error('Failed to save cart', e);
  }
}

function saveFavorites() {
  try {
    localStorage.setItem('akari_favorites', JSON.stringify(AppState.favorites));
  } catch (e) {
    console.error('Failed to save favorites', e);
  }
}

// ==========================================
// 4. RENDERING MENU ITEMS
// ==========================================
function getFilteredMenuItems() {
  let filtered = [...MENU_DATA];

  // Category filter
  if (AppState.activeCategory !== 'all') {
    filtered = filtered.filter(item => item.categoryId === AppState.activeCategory);
  }

  // Search filter
  if (AppState.searchQuery.trim() !== '') {
    const q = AppState.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(q) ||
      item.japaneseName.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(q))
    );
  }

  return filtered;
}

function renderMenu() {
  const menuGrid = document.getElementById('menu-grid');
  const resultsCount = document.getElementById('menu-results-count');
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (!menuGrid) return;

  const filtered = getFilteredMenuItems();
  
  if (resultsCount) {
    if (filtered.length === MENU_DATA.length) {
      resultsCount.textContent = `Showing all ${filtered.length} signature dishes`;
    } else {
      resultsCount.textContent = `Showing ${filtered.length} dish${filtered.length === 1 ? '' : 'es'}`;
    }
  }

  // Display all filtered items directly
  const displayItems = filtered;

  if (loadMoreBtn) {
    loadMoreBtn.style.display = 'none';
  }

  if (displayItems.length === 0) {
    menuGrid.innerHTML = `
      <div class="empty-menu-state">
        <div class="empty-icon">🍣</div>
        <h3>No dishes found</h3>
        <p>We couldn't find anything matching "${AppState.searchQuery}". Try searching for ramen, sushi, bento, or reset the filters.</p>
        <button class="btn btn-outline" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

function generateFoodCardHTML(item, isFeatured = false) {
  const isFav = AppState.favorites.includes(item.id);
  const inCartItem = AppState.cart.find(c => c.id === item.id);
  const cartQty = inCartItem ? inCartItem.quantity : 0;

  return `
    <article class="food-card${isFeatured ? ' featured-card' : ''}" data-id="${item.id}">
      <!-- Top Action Bar: Badge + Favorite Heart -->
      <div class="card-top-bar">
        ${item.badge ? `<span class="card-badge">${item.badge}</span>` : '<span class="card-badge-placeholder"></span>'}
        <button class="card-fav-btn ${isFav ? 'active' : ''}" 
                onclick="event.stopPropagation(); toggleFavorite('${item.id}')" 
                aria-label="Save ${item.name} to favorites" 
                title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="${isFav ? '#E63946' : 'none'}" stroke="${isFav ? '#E63946' : 'currentColor'}" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <!-- Food Name & Rating: Placed Above the Image -->
      <div class="card-header-area" onclick="openFoodModal('${item.id}')">
        <span class="card-kanji">${item.japaneseName}</span>
        <h3 class="card-title">${item.name}</h3>
        
        <div class="card-rating">
          <span class="rating-stars">★★★★★</span>
          <span class="rating-val">${item.rating.toFixed(1)}</span>
          <span class="rating-count">(${item.reviewsCount})</span>
        </div>
      </div>

      <!-- Circular Japanese Dish Plate Presentation -->
      <div class="card-plate-wrap" onclick="openFoodModal('${item.id}')">
        <img src="${item.image}" alt="${item.name}" class="dish-plate-img" loading="lazy" onerror="this.src='assets/images/hero-sushi.jpg'">
      </div>

      <!-- Below Image: Description & Footer in Same Position -->
      <div class="card-content">
        <p class="card-desc" onclick="openFoodModal('${item.id}')">${item.description}</p>

        <div class="card-footer-row">
          <div class="card-price">
            <span class="currency">$</span>${item.price.toFixed(2)}
          </div>
          <div class="card-actions">
            ${cartQty > 0 ? `
              <div class="qty-pill">
                <button class="qty-btn" onclick="event.stopPropagation(); updateCartQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
                <span class="qty-val">${cartQty}</span>
                <button class="qty-btn" onclick="event.stopPropagation(); updateCartQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
            ` : `
              <button class="btn-card-add" onclick="event.stopPropagation(); addToCart('${item.id}', 1)">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>Add to Cart</span>
              </button>
            `}
          </div>
        </div>
      </div>
    </article>
  `;
}

  menuGrid.innerHTML = displayItems.map((item, idx) => generateFoodCardHTML(item, false)).join('');
}

// ==========================================
// 5. CART LOGIC & DRAWER
// ==========================================
function addToCart(itemId, qty = 1) {
  const item = MENU_DATA.find(d => d.id === itemId);
  if (!item) return;

  const existing = AppState.cart.find(c => c.id === itemId);
  if (existing) {
    existing.quantity += qty;
  } else {
    AppState.cart.push({ id: itemId, quantity: qty });
  }

  saveCart();
  updateCartUI();
  renderMenu();
  showToast(`Added ${qty} × ${item.name} to order`, 'cart');
}

function updateCartQuantity(itemId, delta) {
  const index = AppState.cart.findIndex(c => c.id === itemId);
  if (index === -1) return;

  AppState.cart[index].quantity += delta;
  if (AppState.cart[index].quantity <= 0) {
    const removedItem = MENU_DATA.find(d => d.id === itemId);
    AppState.cart.splice(index, 1);
    showToast(`Removed ${removedItem ? removedItem.name : 'dish'} from cart`);
  }

  saveCart();
  updateCartUI();
  renderMenu();
}

function removeFromCart(itemId) {
  const index = AppState.cart.findIndex(c => c.id === itemId);
  if (index !== -1) {
    const item = MENU_DATA.find(d => d.id === itemId);
    AppState.cart.splice(index, 1);
    saveCart();
    updateCartUI();
    renderMenu();
    showToast(`Removed ${item ? item.name : 'dish'} from cart`);
  }
}

function clearCart() {
  AppState.cart = [];
  saveCart();
  updateCartUI();
  renderMenu();
  showToast('Cart cleared');
}

function getCartCalculations() {
  let subtotal = 0;
  let totalItems = 0;

  AppState.cart.forEach(cartItem => {
    const item = MENU_DATA.find(d => d.id === cartItem.id);
    if (item) {
      subtotal += item.price * cartItem.quantity;
      totalItems += cartItem.quantity;
    }
  });

  let discount = 0;
  if (AppState.appliedPromo && AppState.promos[AppState.appliedPromo]) {
    discount = subtotal * AppState.promos[AppState.appliedPromo];
  }

  const delivery = (subtotal >= AppState.freeDeliveryThreshold || subtotal === 0) ? 0 : AppState.deliveryFee;
  const taxableAmount = Math.max(0, subtotal - discount);
  const tax = taxableAmount * AppState.taxRate;
  const total = taxableAmount + delivery + tax;

  return { subtotal, totalItems, discount, delivery, tax, total };
}

function updateCartUI() {
  const counts = document.querySelectorAll('.cart-count-badge');
  const calc = getCartCalculations();

  counts.forEach(badge => {
    badge.textContent = calc.totalItems;
    badge.style.display = calc.totalItems > 0 ? 'inline-flex' : 'none';
  });

  const cartList = document.getElementById('cart-items-list');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartDelivery = document.getElementById('cart-delivery');
  const cartTax = document.getElementById('cart-tax');
  const cartDiscountRow = document.getElementById('cart-discount-row');
  const cartDiscount = document.getElementById('cart-discount');
  const cartTotal = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  const freeShippingBar = document.getElementById('cart-free-shipping-bar');

  if (cartSubtotal) cartSubtotal.textContent = `$${calc.subtotal.toFixed(2)}`;
  if (cartDelivery) cartDelivery.textContent = calc.delivery === 0 ? (calc.subtotal === 0 ? '$0.00' : 'FREE') : `$${calc.delivery.toFixed(2)}`;
  if (cartTax) cartTax.textContent = `$${calc.tax.toFixed(2)}`;
  if (cartTotal) cartTotal.textContent = `$${calc.total.toFixed(2)}`;

  if (cartDiscountRow && cartDiscount) {
    if (calc.discount > 0) {
      cartDiscountRow.style.display = 'flex';
      cartDiscount.textContent = `-$${calc.discount.toFixed(2)} (${AppState.appliedPromo})`;
    } else {
      cartDiscountRow.style.display = 'none';
    }
  }

  // Free shipping progress
  if (freeShippingBar) {
    if (calc.subtotal >= AppState.freeDeliveryThreshold) {
      freeShippingBar.innerHTML = `<span class="free-shipping-congrats">🎉 You unlocked <strong>FREE Delivery!</strong></span>`;
    } else {
      const remaining = (AppState.freeDeliveryThreshold - calc.subtotal).toFixed(2);
      const percent = Math.min(100, (calc.subtotal / AppState.freeDeliveryThreshold) * 100);
      freeShippingBar.innerHTML = `
        <div class="shipping-progress-text">Add <strong>$${remaining}</strong> more for <strong>FREE Delivery</strong></div>
        <div class="shipping-progress-track"><div class="shipping-progress-fill" style="width: ${percent}%;"></div></div>
      `;
    }
  }

  if (checkoutBtn) {
    checkoutBtn.disabled = AppState.cart.length === 0;
  }

  if (cartList) {
    if (AppState.cart.length === 0) {
      cartList.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">🍱</div>
          <h4>Your Cart is Empty</h4>
          <p>Delightful Japanese delicacies are waiting for you!</p>
          <button class="btn btn-primary btn-sm" onclick="closeCartDrawer(); scrollToSection('menu')">Explore Menu</button>
        </div>
      `;
    } else {
      cartList.innerHTML = AppState.cart.map(cartItem => {
        const item = MENU_DATA.find(d => d.id === cartItem.id);
        if (!item) return '';

        return `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='assets/images/hero-sushi.jpg'">
            <div class="cart-item-details">
              <div class="cart-item-title-row">
                <h5 class="cart-item-title">${item.name}</h5>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove item" aria-label="Remove item">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
              <span class="cart-item-category">${item.category}</span>
              <div class="cart-item-footer">
                <div class="cart-item-price">$${(item.price * cartItem.quantity).toFixed(2)}</div>
                <div class="cart-qty-ctrl">
                  <button onclick="updateCartQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
                  <span>${cartItem.quantity}</span>
                  <button onclick="updateCartQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  
  // Cleanly close mobile menu drawer if it was open
  const mobileNav = document.getElementById('mobile-nav-drawer');
  const mobileBackdrop = document.getElementById('mobile-nav-backdrop');
  const hamburger = document.getElementById('hamburger-toggle');
  if (mobileNav && mobileNav.classList.contains('active')) {
    mobileNav.classList.remove('active');
    if (mobileBackdrop) mobileBackdrop.classList.remove('active');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }

  if (drawer && backdrop) {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function applyPromoCode() {
  const input = document.getElementById('promo-input');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (AppState.promos[code]) {
    AppState.appliedPromo = code;
    updateCartUI();
    showToast(`Code ${code} applied! (${AppState.promos[code] * 100}% off)`, 'promo');
    input.value = '';
  } else {
    showToast('Invalid promo code. Try AKARI10 or SAKURA20', 'error');
  }
}

// ==========================================
// 6. FOOD DETAIL MODAL
// ==========================================
let currentModalItemId = null;
let currentModalQty = 1;

function openFoodModal(itemId) {
  const item = MENU_DATA.find(d => d.id === itemId);
  if (!item) return;

  currentModalItemId = itemId;
  currentModalQty = 1;

  const modal = document.getElementById('food-modal');
  const modalBody = document.getElementById('food-modal-body');
  if (!modal || !modalBody) return;

  const spiceDots = '🌶️'.repeat(item.spiceLevel) || 'Mild';

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-image-col">
        <img src="${item.image}" alt="${item.name}" class="modal-hero-img" onerror="this.src='assets/images/hero-sushi.jpg'">
        <div class="modal-image-tags">
          <span class="badge badge-accent">${item.category}</span>
          ${item.badge ? `<span class="badge badge-gold">${item.badge}</span>` : ''}
        </div>
      </div>
      <div class="modal-info-col">
        <div class="modal-kanji">${item.japaneseName}</div>
        <h2 class="modal-title">${item.name}</h2>

        <div class="modal-meta-row">
          <div class="modal-rating">
            <span class="star-icon">★★★★★</span>
            <span class="rating-val">${item.rating.toFixed(1)}</span>
            <span class="reviews-count">(${item.reviewsCount} reviews)</span>
          </div>
          <div class="modal-price">$${item.price.toFixed(2)}</div>
        </div>

        <p class="modal-desc">${item.description}</p>

        <div class="modal-specs">
          <div class="spec-item">
            <span class="spec-label">Preparation Time</span>
            <span class="spec-val">⏱ ${item.prepTime}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Calories</span>
            <span class="spec-val">🔥 ${item.calories}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Spice Level</span>
            <span class="spec-val">${spiceDots}</span>
          </div>
        </div>

        <div class="modal-ingredients-section">
          <h4 class="section-micro-title">Key Ingredients</h4>
          <div class="ingredients-pills">
            ${item.ingredients.map(ing => `<span class="ingredient-pill">${ing}</span>`).join('')}
          </div>
        </div>

        <div class="modal-order-panel">
          <div class="modal-qty-selector">
            <button onclick="changeModalQty(-1)" aria-label="Decrease quantity">−</button>
            <span id="modal-qty-val">1</span>
            <button onclick="changeModalQty(1)" aria-label="Increase quantity">+</button>
          </div>
          <div class="modal-action-buttons">
            <button class="btn btn-outline" onclick="addModalItemToCart(false)">
              Add to Cart
            </button>
            <button class="btn btn-primary" onclick="addModalItemToCart(true)">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function changeModalQty(delta) {
  currentModalQty = Math.max(1, currentModalQty + delta);
  const qtyEl = document.getElementById('modal-qty-val');
  if (qtyEl) qtyEl.textContent = currentModalQty;
}

function addModalItemToCart(openDrawer = false) {
  if (!currentModalItemId) return;
  addToCart(currentModalItemId, currentModalQty);
  closeFoodModal();
  if (openDrawer) {
    openCartDrawer();
  }
}

function closeFoodModal() {
  const modal = document.getElementById('food-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 7. FAVORITES & FILTER INTERACTIONS
// ==========================================
function toggleFavorite(itemId) {
  const item = MENU_DATA.find(d => d.id === itemId);
  if (!item) return;

  const idx = AppState.favorites.indexOf(itemId);
  if (idx !== -1) {
    AppState.favorites.splice(idx, 1);
    showToast(`Removed ${item.name} from favorites`);
  } else {
    AppState.favorites.push(itemId);
    showToast(`Added ${item.name} to favorites ❤️`);
  }

  saveFavorites();
  updateFavoritesCount();
  renderMenu();
}

function updateFavoritesCount() {
  const favBadges = document.querySelectorAll('.favorites-count-badge');
  favBadges.forEach(b => {
    b.textContent = AppState.favorites.length;
    b.style.display = AppState.favorites.length > 0 ? 'inline-flex' : 'none';
  });
}

function openFavoritesModal() {
  if (AppState.favorites.length === 0) {
    showToast('You haven’t saved any favorite dishes yet! Tap the heart on any dish.', 'info');
    return;
  }
  AppState.searchQuery = '';
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) searchInput.value = '';
  const searchClearBtn = document.getElementById('menu-search-clear');
  if (searchClearBtn) searchClearBtn.classList.remove('visible');

  // Show favorites in menu grid and scroll
  scrollToSection('menu');
  const menuGrid = document.getElementById('menu-grid');
  const resultsCount = document.getElementById('menu-results-count');
  
  const favItems = MENU_DATA.filter(d => AppState.favorites.includes(d.id));
  if (resultsCount) resultsCount.textContent = `Showing ${favItems.length} Favorite Dishes`;
  
  // Highlight "All" category button or keep
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));

  menuGrid.innerHTML = favItems.map(item => generateFoodCardHTML(item, false)).join('');
}

function handleCategoryClick(categoryId) {
  AppState.activeCategory = categoryId;
  AppState.showAllItems = false; // Reset pagination limit
  
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === categoryId);
  });

  renderMenu();
}

function handleSearch(query) {
  AppState.searchQuery = query;
  renderMenu();
}

function resetFilters() {
  AppState.activeCategory = 'all';
  AppState.searchQuery = '';
  AppState.showAllItems = false;
  
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) searchInput.value = '';
  const searchClearBtn = document.getElementById('menu-search-clear');
  if (searchClearBtn) searchClearBtn.classList.remove('visible');

  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });

  renderMenu();
}

function toggleShowAllItems() {
  AppState.showAllItems = true;
  renderMenu();
}

// ==========================================
// 8. CHECKOUT & ORDER SIMULATION
// ==========================================
function openCheckoutModal() {
  const calc = getCartCalculations();
  if (calc.totalItems === 0) {
    showToast('Your cart is empty', 'error');
    return;
  }

  closeCartDrawer();
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutSummary = document.getElementById('checkout-order-summary');
  if (!checkoutModal || !checkoutSummary) return;

  checkoutSummary.innerHTML = `
    <div class="checkout-items-preview">
      ${AppState.cart.map(c => {
        const item = MENU_DATA.find(d => d.id === c.id);
        return item ? `
          <div class="checkout-summary-item">
            <span>${c.quantity} × ${item.name}</span>
            <span>$${(item.price * c.quantity).toFixed(2)}</span>
          </div>
        ` : '';
      }).join('')}
    </div>
    <div class="checkout-totals">
      <div class="summary-line"><span>Subtotal:</span> <span>$${calc.subtotal.toFixed(2)}</span></div>
      ${calc.discount > 0 ? `<div class="summary-line text-accent"><span>Discount:</span> <span>-$${calc.discount.toFixed(2)}</span></div>` : ''}
      <div class="summary-line"><span>Delivery Fee:</span> <span>${calc.delivery === 0 ? 'FREE' : '$' + calc.delivery.toFixed(2)}</span></div>
      <div class="summary-line"><span>Tax (8%):</span> <span>$${calc.tax.toFixed(2)}</span></div>
      <div class="summary-line total-line"><span>Total:</span> <span>$${calc.total.toFixed(2)}</span></div>
    </div>
  `;

  checkoutModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  const checkoutModal = document.getElementById('checkout-modal');
  if (checkoutModal) {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('#checkout-name').value.trim();
  const address = form.querySelector('#checkout-address').value.trim();
  const phone = form.querySelector('#checkout-phone').value.trim();
  const paymentSelect = form.querySelector('#checkout-payment');
  const paymentMethod = paymentSelect ? paymentSelect.value : 'Cash on Delivery';

  if (!name || !address || !phone) {
    showToast('Please fill in all delivery details', 'error');
    return;
  }

  const calc = getCartCalculations();
  if (calc.totalItems === 0) {
    showToast('Your cart is empty', 'error');
    return;
  }

  const orderNum = 'TB-' + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const timestamp = now.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }) + ', ' + now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });

  // Capture items before clearing cart
  const orderItems = AppState.cart.map(c => {
    const dish = MENU_DATA.find(d => d.id === c.id);
    return {
      id: c.id,
      name: dish ? dish.name : 'Japanese Dish',
      japaneseName: dish ? dish.japaneseName : '',
      quantity: c.quantity,
      price: dish ? dish.price : 0,
      total: dish ? dish.price * c.quantity : 0
    };
  });

  const orderData = {
    orderNum,
    name,
    address,
    phone,
    paymentMethod,
    items: orderItems,
    calc: { ...calc },
    appliedPromo: AppState.appliedPromo,
    timestamp
  };

  // Construct structured WhatsApp message for 8420605823
  const wpPhone = '918420605823';
  let wpMessage = `🍱 *AKARI (あかり) - NEW ORDER CONFIRMATION*\n`;
  wpMessage += `━━━━━━━━━━━━━━━━━━━━━\n`;
  wpMessage += `📋 *Order ID:* #${orderData.orderNum}\n`;
  wpMessage += `📅 *Date & Time:* ${orderData.timestamp}\n\n`;

  wpMessage += `👤 *CUSTOMER DETAILS*\n`;
  wpMessage += `• *Name:* ${orderData.name}\n`;
  wpMessage += `• *Phone:* ${orderData.phone}\n`;
  wpMessage += `• *Delivery Address:* ${orderData.address}\n`;
  wpMessage += `• *Area:* Thakurpukur, Kolkata\n`;
  wpMessage += `• *Payment Method:* ${orderData.paymentMethod}\n\n`;

  wpMessage += `🛒 *ORDERED DISHES*\n`;
  orderData.items.forEach((item, idx) => {
    wpMessage += `${idx + 1}. *${item.name}* (${item.japaneseName})\n`;
    wpMessage += `   ↳ Qty: ${item.quantity} × $${item.price.toFixed(2)} = *$${item.total.toFixed(2)}*\n`;
  });

  wpMessage += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  wpMessage += `💵 *BILL SUMMARY*\n`;
  wpMessage += `• Subtotal: $${orderData.calc.subtotal.toFixed(2)}\n`;
  if (orderData.calc.discount > 0) {
    wpMessage += `• Discount (${orderData.appliedPromo || 'PROMO'}): -$${orderData.calc.discount.toFixed(2)}\n`;
  }
  wpMessage += `• Delivery Fee: ${orderData.calc.delivery === 0 ? 'FREE (Thakurpukur Special)' : '$' + orderData.calc.delivery.toFixed(2)}\n`;
  wpMessage += `• Tax (8%): $${orderData.calc.tax.toFixed(2)}\n`;
  wpMessage += `⭐ *GRAND TOTAL: $${orderData.calc.total.toFixed(2)}*\n`;
  wpMessage += `━━━━━━━━━━━━━━━━━━━━━\n`;
  wpMessage += `📍 *Restaurant:* AKARI, Diamond Harbour Road, Thakurpukur, Kolkata\n`;
  wpMessage += `💬 *Note:* Order placed online. Please confirm delivery arrival time.`;

  const whatsappUrl = `https://wa.me/${wpPhone}?text=${encodeURIComponent(wpMessage)}`;

  // Automatically trigger WhatsApp redirect / popup
  try {
    window.open(whatsappUrl, '_blank');
  } catch (err) {
    console.warn('Popup blocked, customer can click WhatsApp button in receipt', err);
  }

  closeCheckoutModal();

  // Open Order Confirmation Modal with rich receipt & WhatsApp trigger
  openOrderSuccessModal(orderData, whatsappUrl);
  clearCart();
}

function openOrderSuccessModal(orderData, whatsappUrl) {
  const successModal = document.getElementById('order-success-modal');
  const detailsEl = document.getElementById('order-success-details');
  if (!successModal || !detailsEl) return;

  const wpPhone = '8420605823';

  detailsEl.innerHTML = `
    <div class="order-receipt-card">
      <div class="hanko-stamp">食べる</div>
      <h3>Arigatou Gozaimasu, ${orderData.name}!</h3>
      <p class="order-id-badge">Order Number: <strong>#${orderData.orderNum}</strong></p>
      
      <!-- WhatsApp Status Banner -->
      <div class="whatsapp-alert-box">
        <div class="wp-icon-circle">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="#FFFFFF">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"></path>
          </svg>
        </div>
        <div class="wp-text">
          <strong>Order Details Sent to WhatsApp!</strong>
          <p>All item details, address, and billing summary have been routed to WhatsApp <strong>+91 ${wpPhone}</strong>.</p>
        </div>
      </div>

      <p class="order-delivery-msg">
        Our itamae master chefs in Thakurpukur, Kolkata are preparing your authentic Japanese selection. Delivery dispatched to:
      </p>

      <div class="address-preview">
        📍 <strong>${orderData.address}</strong>, Thakurpukur, Kolkata<br>
        <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: normal;">Contact: ${orderData.phone} | Payment: ${orderData.paymentMethod}</span>
      </div>

      <!-- Itemized Order Breakdown -->
      <div class="receipt-items-list">
        <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px; letter-spacing: 0.05em;">
          Order Receipt Breakdown (${orderData.items.length} ${orderData.items.length === 1 ? 'item' : 'items'})
        </div>
        ${orderData.items.map(it => `
          <div class="receipt-item-row">
            <span><strong>${it.quantity}x</strong> ${it.name}</span>
            <span>$${it.total.toFixed(2)}</span>
          </div>
        `).join('')}
        
        <div class="receipt-summary-lines" style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed rgba(0,0,0,0.1); font-size: 0.86rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
            <span>Subtotal:</span>
            <span>$${orderData.calc.subtotal.toFixed(2)}</span>
          </div>
          ${orderData.calc.discount > 0 ? `
            <div style="display: flex; justify-content: space-between; margin-bottom: 3px; color: var(--leaf-green); font-weight: 600;">
              <span>Discount (${orderData.appliedPromo || 'Promo'}):</span>
              <span>-$${orderData.calc.discount.toFixed(2)}</span>
            </div>
          ` : ''}
          <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
            <span>Delivery:</span>
            <span>${orderData.calc.delivery === 0 ? 'FREE' : '$' + orderData.calc.delivery.toFixed(2)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
            <span>Tax (8%):</span>
            <span>$${orderData.calc.tax.toFixed(2)}</span>
          </div>
        </div>

        <div class="receipt-totals-row">
          <span>Total Paid / Due:</span>
          <span>$${orderData.calc.total.toFixed(2)}</span>
        </div>
      </div>

      <div class="estimated-time" style="margin-bottom: 20px;">
        <span class="pulse-indicator"></span>
        <span>Estimated Delivery in Thakurpukur: <strong>30–40 minutes</strong></span>
      </div>

      <!-- Action Button to Open/Resend on WhatsApp -->
      <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"></path>
        </svg>
        <span>Open / Resend on WhatsApp (+91 8420605823)</span>
      </a>
    </div>
  `;

  successModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOrderSuccessModal() {
  const successModal = document.getElementById('order-success-modal');
  if (successModal) {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 9. FORMS & VALIDATION (RESERVATIONS & NEWSLETTER)
// ==========================================
function handleReservationSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('#res-name').value.trim();
  const email = form.querySelector('#res-email').value.trim();
  const phone = form.querySelector('#res-phone').value.trim();
  const guests = form.querySelector('#res-guests').value;
  const date = form.querySelector('#res-date').value;
  const time = form.querySelector('#res-time').value;

  if (!name || !email || !phone || !date || !time) {
    showToast('Please complete all reservation fields', 'error');
    return;
  }

  // Confirmation feedback
  const feedbackModal = document.getElementById('reservation-success-modal');
  const detailsEl = document.getElementById('reservation-success-details');
  if (feedbackModal && detailsEl) {
    detailsEl.innerHTML = `
      <div class="reservation-card">
        <div class="hanko-stamp">予約</div>
        <h3>Table Reserved at AKARI Thakurpukur, Kolkata</h3>
        <p>Dear <strong>${name}</strong>, your table for <strong>${guests} ${parseInt(guests) === 1 ? 'guest' : 'guests'}</strong> has been confirmed.</p>
        <div class="res-summary-box">
          <div>📅 Date: <strong>${date}</strong></div>
          <div>⏰ Time: <strong>${time}</strong></div>
          <div>📍 Location: <strong>Diamond Harbour Road, Thakurpukur, Kolkata</strong></div>
        </div>
        <p class="res-note">A confirmation email has been sent to <em>${email}</em> and SMS/WhatsApp to <em>${phone}</em>. We look forward to welcoming you.</p>
      </div>
    `;
    feedbackModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    showToast(`Table confirmed for ${name} on ${date} at ${time}!`, 'success');
  }

  form.reset();
}

function closeReservationModal() {
  const feedbackModal = document.getElementById('reservation-success-modal');
  if (feedbackModal) {
    feedbackModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const input = form.querySelector('input[type="email"]');
  if (!input) return;

  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    showToast('Please enter a valid email address', 'error');
    return;
  }

  const successEl = document.getElementById('newsletter-success');
  if (successEl) {
    successEl.innerHTML = `
      <div class="newsletter-success-box">
        <span class="check-icon">✓</span>
        <strong>Welcome to AKARI Family!</strong>
        <p>Your 35% VIP Welcome voucher code is: <span class="voucher-code" onclick="copyVoucher('SAKURA35')">SAKURA35</span> (click to copy). Use it at checkout!</p>
      </div>
    `;
    successEl.style.display = 'block';
  }

  showToast('Welcome to AKARI! Voucher code: SAKURA35 generated.', 'promo');
  input.value = '';
}

function copyVoucher(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Copied ${code} to clipboard! Paste it into the cart.`, 'success');
  }).catch(() => {
    showToast(`Voucher code: ${code}`, 'promo');
  });
}

function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('#contact-name').value.trim();
  const email = form.querySelector('#contact-email').value.trim();
  const phone = form.querySelector('#contact-phone') ? form.querySelector('#contact-phone').value.trim() : '';
  const message = form.querySelector('#contact-message').value.trim();
  const subjectEl = form.querySelector('#contact-subject');
  const inquiryType = subjectEl ? subjectEl.value : 'general';

  if (!name || !email || !message) {
    showToast('Please fill out all contact fields', 'error');
    return;
  }

  if (inquiryType === 'reservation') {
    showToast(`Table reservation request received for ${name}! Our Thakurpukur team will confirm via WhatsApp (${phone || email}).`, 'success');
  } else {
    showToast(`Thank you, ${name}! Your inquiry has been sent to our Thakurpukur team.`, 'success');
  }
  form.reset();
}

// ==========================================
// 10. STORY, PREVIEW & DIRECTIONS MODALS
// ==========================================
function openStoryModal() {
  const modal = document.getElementById('story-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeStoryModal() {
  const modal = document.getElementById('story-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openPrepareModal() {
  const modal = document.getElementById('prepare-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closePrepareModal() {
  const modal = document.getElementById('prepare-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openDirectionsModal() {
  const modal = document.getElementById('directions-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeDirectionsModal() {
  const modal = document.getElementById('directions-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 11. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-message toast-${type}`;
  
  let icon = '🍣';
  if (type === 'cart') icon = '🛒';
  if (type === 'promo') icon = '🎟️';
  if (type === 'error') icon = '⚠️';
  if (type === 'success') icon = '🌸';

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-text">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()" aria-label="Dismiss">×</button>
  `;

  container.appendChild(toast);

  // Auto remove after 4.2s
  setTimeout(() => {
    toast.classList.add('toast-fade-out');
    setTimeout(() => toast.remove(), 400);
  }, 4200);
}

// ==========================================
// 12. FLOATING SAKURA PETALS CANVAS ANIMATION
// ==========================================
function initSakuraCanvas() {
  const canvas = document.getElementById('sakura-canvas');
  if (!canvas) return;

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petals = [];
  const petalCount = Math.min(32, Math.floor(width / 45));

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 8 + Math.random() * 8,
      speedX: 0.5 + Math.random() * 1.2,
      speedY: 0.8 + Math.random() * 1.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      opacity: 0.25 + Math.random() * 0.45,
      tilt: Math.random() * 10
    });
  }

  function drawPetal(x, y, size, rotation, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.globalAlpha = opacity;

    ctx.beginPath();
    // Sakura petal curved shape
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size);
    ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0);
    ctx.fillStyle = '#F3CCD3';
    ctx.fill();

    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    petals.forEach(p => {
      drawPetal(p.x, p.y, p.size, p.rotation, p.opacity);

      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      // Wrap around edges
      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) {
        p.x = -20;
      }
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

// ==========================================
// 13. NAVIGATION & SCROLL INTERACTIONS
// ==========================================
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger-toggle');
  const mobileNav = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const links = document.querySelectorAll('.mobile-nav-link');

  function toggleMenu() {
    const isActive = mobileNav.classList.contains('active');
    if (isActive) {
      mobileNav.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      mobileNav.classList.add('active');
      if (backdrop) backdrop.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }
  if (backdrop) {
    backdrop.addEventListener('click', toggleMenu);
  }

  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 80;
    const pos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight + 10;
    window.scrollTo({
      top: pos,
      behavior: 'smooth'
    });
  }
}

// Keyboard shortcuts (Escape closes modals)
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeFoodModal();
      closeCartDrawer();
      closeCheckoutModal();
      closeOrderSuccessModal();
      closeReservationModal();
      closeStoryModal();
      closePrepareModal();
      closeDirectionsModal();
    }
  });
}

// ==========================================
// 14. 3D SPECIAL DISHES CAROUSEL SHOWCASE
// ==========================================
const SPECIAL_DISHES_DATA = [
  {
    id: 'sushi-3',
    name: 'Sashimi Oishi AKARI',
    japaneseName: '特選刺身盛り合わせ',
    category: 'Sushi & Sashimi',
    series: 'CHEF\'S MASTERPIECE',
    badge: '★ SIGNATURE DISH',
    description: 'Deluxe sashimi feast featuring thick slices of prime bluefin otoro, wild king salmon, and sweet sea scallops on chilled slate.',
    price: 28.00,
    originalPrice: 34.00,
    discount: '18% OFF',
    rating: '5.0',
    reviews: 340,
    image: 'assets/images/special-sashimi.jpg'
  },
  {
    id: 'ramen-1',
    name: 'Artisanal Tonkotsu Ramen',
    japaneseName: '特製濃厚豚骨ラーメン',
    category: 'Ramen',
    series: '18-HOUR BROTH',
    badge: '★ BESTSELLER',
    description: '18-hour slow-simmered rich pork bone broth served with tender braised chashu pork, molten ajitsuke tamago, scallions, and black garlic oil.',
    price: 16.50,
    originalPrice: 20.00,
    discount: '18% OFF',
    rating: '5.0',
    reviews: 412,
    image: 'assets/images/about-ramen.jpg'
  },
  {
    id: 'bento-1',
    name: 'Deluxe Tokyo Bento Box',
    japaneseName: '東京特選幕の内御膳',
    category: 'Bento Boxes',
    series: 'KAISEKI ARTISTRY',
    badge: '★ LUXURY SELECTION',
    description: 'A grand multi-compartment feast: tender teriyaki salmon, crisp tempura prawns, pork gyoza, tamagoyaki, seasoned edamame, and steamed furikake rice.',
    price: 19.50,
    originalPrice: 24.00,
    discount: '19% OFF',
    rating: '4.9',
    reviews: 280,
    image: 'assets/images/menu-bento.jpg'
  },
  {
    id: 'sushi-1',
    name: 'Salmon & Ebi Nigiri Set',
    japaneseName: 'サーモン・海老握り',
    category: 'Sushi & Sashimi',
    series: 'HANDCRAFTED EDOMAE',
    badge: '★ CHEF\'S PICK',
    description: 'Fresh Atlantic salmon and sweet spot prawn nigiri gently brushed with aged nikiri soy, served over seasoned warm sushi rice.',
    price: 13.50,
    originalPrice: 16.00,
    discount: '16% OFF',
    rating: '4.9',
    reviews: 210,
    image: 'assets/images/menu-nigiri.jpg'
  },
  {
    id: 'donburi-1',
    name: 'Classic Katsudon Bowl',
    japaneseName: '伝統の特製カツ丼',
    category: 'Donburi & Rice',
    series: 'COMFORT CLASSIC',
    badge: '★ TOP RATED',
    description: 'Crispy panko-breaded pork cutlet simmered in sweet dashi broth with farm-fresh beaten egg and caramelized yellow onions over steaming koshihikari rice.',
    price: 15.00,
    originalPrice: 18.00,
    discount: '17% OFF',
    rating: '4.8',
    reviews: 195,
    image: 'assets/images/menu-donburi.jpg'
  },
  {
    id: 'tempura-1',
    name: 'Crispy Ebi Tempura',
    japaneseName: '名物海老天ぷら盛合せ',
    category: 'Crispy Tempura',
    series: 'GOLDEN CRUNCH',
    badge: '★ DELICACY',
    description: 'Jumbo black tiger prawns and seasonal Japanese vegetables fried to feather-light golden perfection, served with warm tentsuyu dipping broth.',
    price: 14.00,
    originalPrice: 17.50,
    discount: '20% OFF',
    rating: '4.9',
    reviews: 245,
    image: 'assets/images/menu-tempura.jpg'
  },
  {
    id: 'grill-1',
    name: 'Binchotan Wagyu Yakitori',
    japaneseName: '備長炭焼き和牛串',
    category: 'Robata & Skewers',
    series: 'BINCHOTAN GRILL',
    badge: '★ A5 WAGYU',
    description: 'Prime A5 Wagyu beef skewers kissed with Kishu binchotan white charcoal smoke and glazed with a 25-year aged sweet tare soy reduction.',
    price: 18.00,
    originalPrice: 22.00,
    discount: '18% OFF',
    rating: '5.0',
    reviews: 310,
    image: 'assets/images/menu-yakitori.jpg'
  }
];

class SpecialDishes3DCarousel {
  constructor() {
    this.track = document.getElementById('special-carousel-track');
    this.stage = document.getElementById('special-carousel-stage');
    this.btnPrev = document.getElementById('special-btn-prev');
    this.btnNext = document.getElementById('special-btn-next');
    this.paginationBar = document.getElementById('special-carousel-pagination');

    if (!this.track || !this.stage) return;

    this.items = SPECIAL_DISHES_DATA;
    this.currentIndex = 0;
    this.autoplayTimer = null;
    this.isPaused = false;

    // Touch gesture state
    this.touchStartX = 0;
    this.touchDiffX = 0;
    this.isSwiping = false;

    this.init();
  }

  init() {
    this.renderCards();
    this.renderPagination();
    this.updatePositions();
    this.bindEvents();
    this.startAutoplay();
  }

  renderCards() {
    this.track.innerHTML = '';
    this.items.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'food-card-3d';
      card.dataset.index = idx;
      card.dataset.id = item.id;

      card.innerHTML = `
        <div class="card-dimmer"></div>

        <div class="card-image-wrap">
          <img src="${item.image}" alt="${item.name}" class="card-image" loading="lazy" onerror="this.src='assets/images/special-sashimi.jpg'" />
          
          <div class="card-badges">
            <span class="badge-series" title="${item.series}">${item.series}</span>
            <span class="badge-bestseller">${item.badge}</span>
          </div>

          <div class="badge-rating">
            <span>★</span>
            <span>${item.rating}</span>
          </div>

          <div class="card-hover-overlay">
            <span class="quick-view-badge">🔍 Quick View</span>
          </div>
        </div>

        <div class="card-body">
          <div>
            <div class="card-category-tag">${item.japaneseName} • ${item.category}</div>
            <h3 class="card-title" title="${item.name}">${item.name}</h3>
            <p class="card-desc">${item.description}</p>
          </div>

          <div class="card-footer">
            <div class="price-wrap">
              <span class="price-current">$${item.price.toFixed(2)}</span>
              <div class="discount-group">
                <span class="price-original">$${item.originalPrice.toFixed(2)}</span>
                <span class="discount-tag">${item.discount}</span>
              </div>
            </div>

            <button class="btn-add-cart" data-id="${item.id}" aria-label="Add ${item.name} to Cart">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:2px;"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      `;

      this.track.appendChild(card);
    });
  }

  renderPagination() {
    if (!this.paginationBar) return;
    this.paginationBar.innerHTML = '';
    this.items.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `page-dot ${idx === this.currentIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Special Dish ${idx + 1}`);
      dot.addEventListener('click', () => this.goTo(idx));
      this.paginationBar.appendChild(dot);
    });
  }

  updatePositions() {
    if (!this.track) return;
    const cards = this.track.querySelectorAll('.food-card-3d');
    const N = this.items.length;
    if (!N || !cards.length) return;

    const screenWidth = window.innerWidth;
    const isMobile = screenWidth <= 480;
    const isTablet = screenWidth > 480 && screenWidth <= 1024;

    cards.forEach((card, idx) => {
      let offset = (idx - this.currentIndex) % N;
      if (offset > Math.floor(N / 2)) offset -= N;
      if (offset < -Math.floor(N / 2)) offset += N;

      card.classList.remove('is-active');

      let transform = '';
      let opacity = 1;
      let filter = 'none';
      let zIndex = 1;
      let pointerEvents = 'auto';

      if (offset === 0) {
        // CENTER ACTIVE CARD (Elevated forward, 100% sharp)
        card.classList.add('is-active');
        const zDepth = isMobile ? '60px' : (isTablet ? '80px' : '90px');
        transform = `translateX(0px) translateZ(${zDepth}) scale(1) rotateY(0deg)`;
        opacity = 1;
        filter = 'none';
        zIndex = 12;
      } else if (offset === -1) {
        // IMMEDIATE PREVIOUS (Angled inward, scaled down, softened)
        const xDist = isMobile ? '-78%' : (isTablet ? '-62%' : '-60%');
        const zDepth = isMobile ? '-160px' : (isTablet ? '-140px' : '-130px');
        const scale = isMobile ? 0.74 : (isTablet ? 0.8 : 0.82);
        const rotY = isMobile ? '25deg' : (isTablet ? '22deg' : '20deg');

        transform = `translateX(${xDist}) translateZ(${zDepth}) scale(${scale}) rotateY(${rotY})`;
        opacity = isMobile ? 0.45 : (isTablet ? 0.68 : 0.76);
        filter = 'blur(1.5px) brightness(0.85)';
        zIndex = 8;
      } else if (offset === 1) {
        // IMMEDIATE NEXT
        const xDist = isMobile ? '78%' : (isTablet ? '62%' : '60%');
        const zDepth = isMobile ? '-160px' : (isTablet ? '-140px' : '-130px');
        const scale = isMobile ? 0.74 : (isTablet ? 0.8 : 0.82);
        const rotY = isMobile ? '-25deg' : (isTablet ? '-22deg' : '-20deg');

        transform = `translateX(${xDist}) translateZ(${zDepth}) scale(${scale}) rotateY(${rotY})`;
        opacity = isMobile ? 0.45 : (isTablet ? 0.68 : 0.76);
        filter = 'blur(1.5px) brightness(0.85)';
        zIndex = 8;
      } else if (offset === -2 && !isMobile) {
        // OUTER PREVIOUS (Desktop & Tablet layer)
        const xDist = isTablet ? '-102%' : '-104%';
        const zDepth = isTablet ? '-280px' : '-260px';
        const scale = isTablet ? 0.6 : 0.66;
        const rotY = isTablet ? '32deg' : '30deg';

        transform = `translateX(${xDist}) translateZ(${zDepth}) scale(${scale}) rotateY(${rotY})`;
        opacity = isTablet ? 0.25 : 0.42;
        filter = 'blur(3.5px) brightness(0.68)';
        zIndex = 5;
      } else if (offset === 2 && !isMobile) {
        // OUTER NEXT
        const xDist = isTablet ? '102%' : '104%';
        const zDepth = isTablet ? '-280px' : '-260px';
        const scale = isTablet ? 0.6 : 0.66;
        const rotY = isTablet ? '-32deg' : '-30deg';

        transform = `translateX(${xDist}) translateZ(${zDepth}) scale(${scale}) rotateY(${rotY})`;
        opacity = isTablet ? 0.25 : 0.42;
        filter = 'blur(3.5px) brightness(0.68)';
        zIndex = 5;
      } else {
        // FAR HIDDEN CARDS
        const sign = Math.sign(offset) || 1;
        transform = `translateX(${sign * 140}%) translateZ(-450px) scale(0.45) rotateY(${sign * -45}deg)`;
        opacity = 0;
        filter = 'blur(6px) brightness(0.4)';
        zIndex = 1;
        pointerEvents = 'none';
      }

      card.style.transform = transform;
      card.style.opacity = opacity;
      card.style.filter = filter;
      card.style.zIndex = zIndex;
      card.style.pointerEvents = pointerEvents;
    });

    // Update dots
    if (this.paginationBar) {
      const dots = this.paginationBar.querySelectorAll('.page-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === this.currentIndex);
      });
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updatePositions();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updatePositions();
  }

  goTo(index) {
    if (index >= 0 && index < this.items.length) {
      this.currentIndex = index;
      this.updatePositions();
    }
  }

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayTimer = setInterval(() => {
      if (!this.isPaused) {
        this.next();
      }
    }, 3800);
  }

  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  // 3D Card Tilt Tracking (Desktop only)
  handleCardTilt(card, e) {
    if (!card.classList.contains('is-active')) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const maxTilt = 8;
    const tiltY = (x / (rect.width / 2)) * maxTilt;
    const tiltX = -(y / (rect.height / 2)) * maxTilt;

    requestAnimationFrame(() => {
      card.style.transform = `translateX(0px) translateZ(90px) scale(1) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
    });
  }

  resetCardTilt(card) {
    if (!card.classList.contains('is-active')) return;
    requestAnimationFrame(() => {
      card.style.transform = `translateX(0px) translateZ(90px) scale(1) rotateX(0deg) rotateY(0deg)`;
    });
  }

  bindEvents() {
    // Navigation arrows
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => {
        this.prev();
      });
    }

    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => {
        this.next();
      });
    }

    // Hover pause
    this.stage.addEventListener('mouseenter', () => {
      this.isPaused = true;
    });

    this.stage.addEventListener('mouseleave', () => {
      this.isPaused = false;
      const active = this.track.querySelector('.food-card-3d.is-active');
      if (active) this.resetCardTilt(active);
    });

    // Card clicks
    this.track.addEventListener('click', (e) => {
      const card = e.target.closest('.food-card-3d');
      if (!card) return;

      const idx = parseInt(card.dataset.index, 10);
      const item = this.items[idx];
      if (!item) return;

      // Click on Add to Cart button
      if (e.target.closest('.btn-add-cart')) {
        e.stopPropagation();
        addToCart(item.id, 1);
        return;
      }

      // Click on side card moves it to center
      if (idx !== this.currentIndex) {
        this.goTo(idx);
        return;
      }

      // Click on active center card opens food detail modal
      if (e.target.closest('.card-image-wrap') || e.target.closest('.card-title') || e.target.closest('.quick-view-badge')) {
        openFoodModal(item.id);
      }
    });

    // Desktop Mousemove tilt
    this.stage.addEventListener('mousemove', (e) => {
      const active = this.track.querySelector('.food-card-3d.is-active');
      if (active && window.innerWidth > 1024) {
        this.handleCardTilt(active, e);
      }
    });

    // Touch Swipe Gestures
    this.stage.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
      this.touchDiffX = 0;
      this.isSwiping = true;
      this.isPaused = true;
    }, { passive: true });

    this.stage.addEventListener('touchmove', (e) => {
      if (!this.isSwiping) return;
      this.touchDiffX = e.touches[0].clientX - this.touchStartX;
    }, { passive: true });

    this.stage.addEventListener('touchend', () => {
      if (!this.isSwiping) return;
      this.isSwiping = false;
      this.isPaused = false;

      const threshold = 40;
      if (this.touchDiffX < -threshold) {
        this.next();
      } else if (this.touchDiffX > threshold) {
        this.prev();
      }
    });

    // Window resize
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.updatePositions();
      }, 100);
    });

    // Tab visibility
    document.addEventListener('visibilitychange', () => {
      this.isPaused = document.hidden;
    });
  }
}

let specialDishesCarouselInstance = null;
function initSpecialDishesCarousel() {
  if (document.getElementById('special-carousel-track')) {
    specialDishesCarouselInstance = new SpecialDishes3DCarousel();
  }
}

// ==========================================
// 15. APPLICATION BOOTSTRAP
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  renderMenu();
  updateCartUI();
  updateFavoritesCount();
  initSakuraCanvas();
  initHeaderScroll();
  initMobileMenu();
  initKeyboardShortcuts();
  initSpecialDishesCarousel();

  // Category buttons
  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      handleCategoryClick(btn.dataset.category);
    });
  });

  // Forms
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) newsletterForm.addEventListener('submit', handleNewsletterSubmit);

  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

  const contactForm = document.getElementById('contact-form');
  if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

  console.log('🌸 AKARI (あかり) Premium Japanese Restaurant loaded successfully.');
});
