# Asian Times — Watch Servicing & Repair Atelier (Lower Parel, Mumbai)

A complete, five-page luxury editorial website designed and engineered for **Asian Times**, a specialist watch servicing and repair business located in Lower Parel, Mumbai, Maharashtra, India.

---

## 1. Project Overview & Design Philosophy

Inspired by haute horlogerie houses, luxury editorial publications, and minimalist modern architecture, the website communicates **precision, trust, craftsmanship, and timelessness**.

### Colour Palette
| Token | Hex | Purpose |
| :--- | :--- | :--- |
| `--bg-primary` | `#FAF9F6` | Primary warm alabaster background |
| `--bg-secondary` | `#F1EEE8` | Secondary travertine stone background |
| `--text-primary` | `#232323` | Deep charcoal primary typography |
| `--text-secondary` | `#77746D` | Warm muted stone secondary copy |
| `--accent` | `#A38F72` | Brushed champagne brass accent |
| `--border` | `#E5E1D9` | Hairline architectural dividers |
| `--bg-dark` | `#222321` | Deep obsidian atelier sections & footer |

### Typography
- **Headings**: `Cormorant Garamond` (Light 300, Regular 400, Medium 500, Italic) with fluid `clamp()` scaling.
- **Body & UI**: `Inter` / `DM Sans` (300, 400, 500) with generous line-height and refined letter-spacing.

---

## 2. Folder Structure

```text
asian-times/
│
├── index.html                  # Homepage (11 complete editorial sections)
├── services.html               # Detailed Services page (9 alternating service sections)
├── repairs.html                # Watch Repairs & Technical Diagnostics page
├── about.html                  # About Us — Brand Philosophy & Lower Parel Atelier
├── contact.html                # Contact & WhatsApp Enquiry Form page
│
├── css/
│   ├── style.css               # Design tokens, base reset, typography, layout utilities
│   ├── components.css          # Header, nav, buttons, cards, timeline, gallery, FAQ, forms, footer
│   ├── animations.css          # Entrance transitions, scroll reveals, hover zoom, reduced-motion
│   └── responsive.css          # Multi-breakpoint responsive design (1440px, 1200px, 1024px, 768px, 480px, 360px)
│
├── js/
│   ├── main.js                 # Core initialization, dynamic year, page state, smooth anchor handling
│   ├── navigation.js           # Sticky header transition, mobile drawer menu, keyboard accessibility
│   ├── animations.js           # IntersectionObserver scroll reveals, staggered grids, subtle parallax
│   ├── contact-form.js         # Form validation & formatted WhatsApp (919819451443) redirection
│   └── interactions.js         # Smooth FAQ accordion, interactive process timeline, quick service prefill
│
├── assets/
│   ├── images/
│   │   ├── hero/               # High-resolution hero & banner photography
│   │   ├── services/           # Individual photography for all 9 watch services
│   │   ├── repairs/            # Close-up movement, tool, crown, and diagnostic photography
│   │   ├── about/              # Atelier interior & watchmaker craftsmanship photography
│   │   └── gallery/            # Asymmetrical editorial watch gallery photography
│   ├── icons/                  # Custom SVG horological & UI icons
│   └── fonts/                  # Local font guidelines & fallbacks
│
├── data/
│   └── services.json           # Structured JSON data for services, repairs, FAQs, and contact details
│
├── README.md                   # Documentation & maintenance guide
└── package.json                # Project scripts & Vite development server configuration
```

---

## 3. How to Install & Run Locally

### Option A: Using Node.js & Vite (Recommended for Development)
1. Open the `asian-times` folder in **VS Code**.
2. Install development dependencies:
   ```bash
   npm install
   ```
3. Start the local development server with hot reload:
   ```bash
   npm run dev
   ```
   The website will open at `http://localhost:3000`.

### Option B: Using Static Server or VS Code Live Server (Zero Install)
Because the project is built with clean, standards-compliant HTML5, modular CSS3, and vanilla ES6 JavaScript without mandatory build-step lock-in, you can also run it directly:
- **VS Code Live Server**: Right-click `index.html` and select **"Open with Live Server"**.
- **Python HTTP Server**:
  ```bash
  python3 -m http.server 8080
  ```
  Then open `http://localhost:8080` in your browser.

---

## 4. Where to Update Business Contact Details

All contact numbers and links are configured with the actual Asian Times details:
- **Business Name**: Asian Times
- **Location**: Lower Parel, Mumbai, Maharashtra, India
- **Display Phone**: `+91 9819451443` (`tel:+919819451443`)
- **WhatsApp Number**: `919819451443` (`https://wa.me/919819451443`)

To update these in the future:
1. **`js/contact-form.js`**: Update `WHATSAPP_NUMBER = '919819451443'` at the top of the file to change the destination number for all form submissions and prefilled WhatsApp links.
2. **`data/services.json`**: Update the `"business"` object for structured data consumers.
3. **HTML Pages (`index.html`, `services.html`, `repairs.html`, `about.html`, `contact.html`)**: Search and replace `+91 9819451443` and `919819451443` across the workspace in VS Code (`Cmd/Ctrl + Shift + H`).

---

## 5. Where to Replace or Update Images

All photography is organised by page and purpose inside `assets/images/`:
- **`assets/images/hero/`**: `hero-watch.jpg` (Homepage hero), `page-hero-movement.jpg` (Subpage headers).
- **`assets/images/services/`**:
  - `complete-servicing.jpg`
  - `mechanical-servicing.jpg`
  - `quartz-servicing.jpg`
  - `battery-replacement.jpg`
  - `strap-bracelet.jpg`
  - `watch-cleaning.jpg`
  - `water-resistance.jpg`
  - `watch-polishing.jpg`
  - `general-maintenance.jpg`
- **`assets/images/repairs/`**:
  - `mechanical-repair.jpg`
  - `automatic-repair.jpg`
  - `quartz-repair.jpg`
  - `movement-inspection.jpg`
  - `crown-stem.jpg`
  - `bracelet-clasp.jpg`
  - `diagnostics.jpg`
- **`assets/images/about/`**:
  - `atelier-interior.jpg`
  - `watchmaker-bench.jpg`
  - `precision-tools.jpg`
- **`assets/images/gallery/`**:
  - `gallery-01.jpg` through `gallery-05.jpg`

To replace an image, drop your new `.jpg` or `.webp` file into the corresponding folder with the same filename (recommended resolution: `1600px–2400px` wide, quality `80–85%`), or update the `src` attribute in the respective HTML file.
