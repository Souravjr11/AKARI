# AKARI (あかり) • Authentic Japanese Restaurant

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-akari--ten--sigma.vercel.app-C0392B?style=for-the-badge&logo=vercel&logoColor=white)](https://akari-ten-sigma.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive Design](https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-27AE60?style=for-the-badge)](https://akari-ten-sigma.vercel.app/)

<br>

**A modern, artisanal Japanese dining web experience featuring interactive 3D dish showcases, real-time category filtering, sliding cart drawer, WhatsApp direct checkout, and canvas sakura physics.**

📍 *Thakurpukur, Kolkata, West Bengal* • 💬 *WhatsApp Ordering: +91 84206 05823*

</div>

---

## 🌸 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Design System & Aesthetics](#-design-system--aesthetics)
- [Tech Stack](#-tech-stack)
- [Menu & Database Architecture](#-menu--database-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration & Customization](#-configuration--customization)
- [Deployment](#-deployment)
- [License & Credits](#-license--credits)

---

## ✨ Overview

**AKARI (あかり)** is an authentic Japanese restaurant website designed to offer a tranquil, immersive, and high-conversion online dining journey. Built with performance and elegance in mind, it combines rich Japanese cultural aesthetics (wabi-sabi, dark urushi lacquer, vermilion accents, cherry blossom motley) with smooth modern web interactions.

---

## 🍱 Key Features

### 1. 🍣 3D Interactive Special Dish Carousel
- Custom 3D CSS perspective engine (`perspective: 1200px`) presenting signature dishes on dark lacquer glass cards.
- **Full Touch & Mouse Gestures**: Drag, swipe, or use keyboard arrow keys (`Left`/`Right`) to browse.
- **Active Card Elevation**: Center cards lift with vermilion aura lighting, depth scaling (`scale: 1.06`), and realistic 3D tilt tracking.
- **Direct Actions**: Instant "Add to Cart" or deep-dive into the dish modal directly from the carousel.

### 2. 📜 Infinite Announcement Marquee Ticker
- Seamless hardware-accelerated ticker at the top of the viewport.
- Japanese heritage badges (`日本の伝統`), rating highlights (`⭐ 4.9/5`), and direct one-click WhatsApp order shortcuts.
- Edge mask gradient fades for a refined editorial feel.
- Pauses smoothly on hover/focus.

### 3. 📱 Device-Adaptive Responsive Layouts
- **Mobile & Tablet (`<= 1024px`)**: The hero food platter art composition gracefully stacks to the very top, followed by the headline, story, and call-to-action buttons.
- **Desktop (`> 1024px`)**: Balanced two-column editorial layout with generous breathing room, bold navigation links, and floating dish badges.
- **Safe Viewport & Drawer Protection**: Sliding drawers remain strictly isolated and never auto-trigger unexpectedly on screen resize.

### 4. 🥢 65-Dish Authentic Japanese Menu
- **13 Specialized Categories**:
  - `Sushi & Sashimi` • `Ramen & Noodles` • `Bento Boxes` • `Donburi Rice Bowls`
  - `Tempura & Fried` • `Yakitori & Robata` • `Gyoza & Appetizers` • `Soups & Salads`
  - `Vegetarian & Vegan` • `Japanese Curries` • `Desserts & Sweets` • `Beverages & Teas` • `Chef's Specials`
- Real-time horizontal category pill filter navigation with active indicators.
- Instant item search and category state synchronization.

### 5. 🛒 Persistent Shopping Cart & Promo Engine
- Sliding glassmorphic cart drawer stored in browser `localStorage`.
- Live quantity adjusters (`+` / `-`), individual item removal, and auto-clearing empty states.
- **Coupon Discounts Engine**:
  - `AKARI10` — Flat 10% discount on order total.
  - `SAKURA20` — 20% festive discount on orders above ₹800.
  - `SAKURA35` — 35% VIP discount on special chef orders.

### 6. 💬 WhatsApp Direct Ordering
- Pre-formats the entire shopping cart into a clean, human-readable WhatsApp message.
- Includes dish names, quantities, individual pricing, promo discount applied, and final payable amount.
- Opens directly to `wa.me/918420605823` with zero third-party gateway overhead.

### 7. 🌸 Floating Sakura Canvas Animation
- Procedural particle engine simulating Japanese cherry blossom petals drifting gently across the viewport.
- Fully aware of accessibility settings (`prefers-reduced-motion: reduce`) to preserve device battery and comfort.

### 8. 🌐 Complete Social Share Cards (Open Graph / Twitter)
- Configured with rich Open Graph tags and high-resolution 1024×1024 sushi platter imagery (`hero-sushi.jpg`).
- Guarantees beautiful preview cards when sharing links on WhatsApp, Telegram, Twitter/X, Facebook, and LinkedIn.

---

## 🎨 Design System & Aesthetics

| Element | Color / Value | Concept |
| :--- | :--- | :--- |
| **Urushi Lacquer (Dark)** | `#120F0D` / `rgba(30, 24, 22, 0.88)` | Traditional Japanese lacquerware containers & night sky |
| **Vermilion / Akari Red** | `#C0392B` / `#D32F2F` | Torii gates, sun disc, vibrancy, and appetizing warmth |
| **Imperial Gold** | `#D4AF37` / `#F39C12` | Kintsugi gilding, star ratings, and chef recommendations |
| **Washi Paper (Light)** | `#FAF7F2` | Warm handmade Japanese paper texture |
| **Bamboo Green** | `#27AE60` / `#25D366` | Fresh wasabi, matcha, and WhatsApp connectivity |

### Typography
- **Headings & Display**: `Cormorant Garamond` (Classic editorial serif) + `Shippori Mincho` (Authentic Japanese Mincho).
- **Body & Controls**: `Plus Jakarta Sans` (Clean, highly legible geometric sans-serif).

---

## 🛠 Tech Stack

- **Markup**: Semantic HTML5 (ARIA landmarks, accessible dialogs, SVG icons).
- **Styling**: Modern CSS3 (Custom properties, CSS Grid, Flexbox, 3D transforms, backdrop-filter glassmorphism).
- **Scripting**: Pure Vanilla JavaScript (ES6+ Classes, Event Delegation, LocalStorage API, Canvas 2D API).
- **Zero Heavy Frameworks**: No React, no Vue, no jQuery, no npm build bloat. Ultra-fast initial page load (< 1s).

---

## 🗂 Project Structure

```text
japanese-restro/
├── assets/
│   ├── icons/                    # Custom SVG & vector iconography
│   └── images/
│       ├── about-ramen.jpg       # Story & heritage section visual
│       ├── hero-sushi.jpg        # Signature sushi platter (Hero & OG Social Card)
│       ├── menu-bento.jpg        # Authentic Japanese bento assortment
│       ├── menu-desserts.jpg     # Mochi & matcha desserts
│       ├── menu-donburi.jpg      # Gyudon & katsudon rice bowls
│       ├── menu-drinks.jpg       # Japanese green tea & Ramune
│       ├── menu-gyoza.jpg        # Pan-seared gyoza dumplings
│       ├── menu-maki.jpg         # Handcrafted maki sushi rolls
│       ├── menu-nigiri.jpg       # Premium salmon & ebi nigiri
│       ├── menu-ramen.jpg        # 18-hour tonkotsu broth ramen
│       ├── menu-tempura.jpg      # Light crispy seafood tempura
│       ├── menu-yakitori.jpg     # Robata charcoal-grilled skewers
│       └── special-sashimi.jpg   # Artisanal sashimi showcase
├── index.html                    # Single-page application markup & metadata
├── style.css                     # Complete stylesheet, themes & responsive breakpoints
├── script.js                     # Menu database, 3D carousel, cart & UI logic
└── README.md                     # Documentation
```

---

## 🚀 Getting Started

Because this project is built entirely on standard vanilla web technologies, **no node modules or build steps are required**.

### Option 1: Open Directly
Simply double-click `index.html` in your file explorer to open it in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Run with a Local Web Server (Recommended)

#### Using VS Code Live Server:
1. Open the project folder in Visual Studio Code.
2. Click **Go Live** in the bottom status bar (requires the *Live Server* extension).

#### Using Node.js:
```bash
# Serve instantly with npx
npx serve .
```

#### Using Python 3:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## ⚙️ Configuration & Customization

### 1. WhatsApp Contact & Orders
In `index.html` and `script.js`, replace the default phone number with your restaurant's WhatsApp phone number:
```javascript
// in script.js (Cart checkout generator)
const wpPhone = '918420605823'; // Country code + 10-digit number
```

### 2. Adding / Editing Dishes
Dishes are defined in `script.js` inside the `MENU_DATA` array:
```javascript
{
  id: 'sushi-new',
  name: 'Truffle Salmon Nigiri',
  japaneseName: 'トリュフサーモン握り',
  category: 'Sushi & Sashimi',
  categoryId: 'sushi-sashimi',
  price: 15.00,
  rating: 5.0,
  reviewsCount: 42,
  description: 'Seared Atlantic salmon kissed with black truffle oil and sea salt.',
  ingredients: ['Atlantic Salmon', 'Truffle Oil', 'Sushi Rice'],
  image: 'assets/images/menu-nigiri.jpg',
  badge: 'Chef Special',
  spiceLevel: 0,
  calories: '310 kcal',
  prepTime: '5 min'
}
```

### 3. Promo Codes
Dishes discount rules can be extended in `script.js` under the `applyCoupon()` handler:
```javascript
const VALID_COUPONS = {
  'AKARI10': { discount: 0.10, minOrder: 0 },
  'SAKURA20': { discount: 0.20, minOrder: 800 },
  'SAKURA35': { discount: 0.35, minOrder: 1500 }
};
```

---

## 🚢 Deployment

### Deploying to Vercel
1. Install Vercel CLI or import via GitHub:
   ```bash
   npm i -g vercel
   vercel
   ```
2. Set the root directory to project folder and deploy.

### Deploying to Netlify
1. Drag and drop the project folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. Your website will be live in seconds.

### Deploying to GitHub Pages
1. Push your repository to GitHub.
2. Go to **Repository Settings** > **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.

---

## 📄 License & Credits

- **Design & Code**: Developed for **AKARI (あかり)** Authentic Japanese Restaurant.
- **Photography & Assets**: Curated authentic Japanese culinary illustrations and Unsplash photography.
- **License**: MIT License. Free for commercial and personal restaurant applications.
