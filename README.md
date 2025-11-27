# AM Seafood - American Made Seafood Website

A production-ready, mobile-responsive website for American Made Seafood, a fish trading business based in Fernandina Beach, Florida.

## 🦐 About

American Made Seafood (AM Seafood) is a family-owned seafood wholesaler focused on high-quality, sustainably sourced American-caught seafood. This website serves restaurants, distributors, grocery chains, and culinary professionals nationwide.

**Tagline:** "American Caught. American Made."

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Playfair Display (headings) + Source Sans 3 (body)

## 📁 Project Structure

```
am-seafood/
├── public/
│   └── images/           # Product and hero images (add your own)
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with header/footer
│   │   ├── page.tsx      # Home page
│   │   ├── about/        # About page
│   │   ├── products/     # Products page with filtering
│   │   ├── sourcing/     # Sourcing & Quality page
│   │   ├── wholesale/    # Wholesale inquiry page
│   │   └── contact/      # Contact page
│   ├── components/
│   │   ├── layout/       # Header, Footer
│   │   └── ui/           # Reusable components (Button, Card, Section, FormField)
│   └── data/
│       └── products.ts   # Product data and utilities
├── tailwind.config.ts
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
   ```bash
   cd am-seafood
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, features, featured products, testimonials |
| About | `/about` | Roger Riggs' story, company values, timeline |
| Products | `/products` | Product grid with category filtering and search |
| Sourcing & Quality | `/sourcing` | Sourcing practices, quality standards, certifications |
| Wholesale | `/wholesale` | Services overview and wholesale inquiry form |
| Contact | `/contact` | Contact information and general contact form |

## 🔌 API Integration Points

The forms are currently set up to log to the console. To connect to a real backend:

### Contact Form (`/contact`)
```typescript
// In src/app/contact/page.tsx, replace the console.log with:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Wholesale Inquiry Form (`/wholesale`)
```typescript
// In src/app/wholesale/page.tsx, replace the console.log with:
const response = await fetch('/api/wholesale', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Dynamic Products
To fetch products from an API instead of the static data file:
```typescript
// Replace the import from '@/data/products' with API calls:
const products = await fetch('/api/products').then(res => res.json());
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/app/globals.css`:
```css
:root {
  --ocean-deep: #0c4a6e;
  --ocean-mid: #0369a1;
  --coral: #f97316;
  /* ... */
}
```

### Products
Edit the product data in `src/data/products.ts` to add, remove, or modify products.

### Images
Add images to `public/images/`:
- `hero-fishing.jpg` - Hero background image
- `products/[product-name].jpg` - Individual product images

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliant

## 📧 Contact

**American Made Seafood**
- Location: Fernandina Beach, Florida
- Email: info@amseafood.com
- Phone: (555) 555-5555

---

Built with ❤️ for American fisheries and sustainable seafood.
