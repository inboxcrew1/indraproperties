# Indra Properties (GharDhundo) - World-Class Indian Real Estate Marketplace

A production-ready, multi-page real estate marketplace platform tailored specifically for the Indian real estate market, featuring residential plots, flats, luxury villas, builder floors, farm lands, agricultural parcels, commercial shops, showrooms, offices, warehouses, and master townships.

---

## 🌟 Key Features

* **Multi-Category Real Estate Coverage:**
  * Residential Plots & Plotted Colonies
  * Agricultural Land & Fertile Farmlands
  * Flats / Apartments & Penthouses
  * Independent Houses, Villas & Kothis
  * Commercial Offices, Retail Shops & Showrooms
  * Industrial Warehouses & Logistics Hubs
  * RERA-approved Townships & Master Developments
* **Authentic Indian Measurement Units:**
  * Native first-class support for **Gaj (Square Yards)**, **Square Feet**, **Acre**, and **Bigha**.
  * Precise dimension logging: Frontage, depth, and road width in feet for plots and land.
  * Carpet Area vs. Super Built-up Area transparency for apartments.
* **Transparent Indian Currency Formatting:**
  * Formatted in **₹ Lakhs** and **₹ Crores** with per-unit price metrics and monthly EMI simulations.
* **Original Luxury PropTech Brand Aesthetic:**
  * Palette: Deep Charcoal (`#1C1C1E`), Warm White (`#FAFAF8`), Off-White (`#F5F4F0`), Emerald Accent (`#1A6B4A`), and Gold Accent (`#C9A84C`).
  * Modern typography pairing: **Plus Jakarta Sans**, **Inter**, and **Playfair Display**.
* **Interactive Tooling & Calculators:**
  * Real-time Home Loan EMI Calculator with amortization breakdown.
  * Land Measurement Converter: Convert between Gaj, Sq Ft, and Acres.
  * Side-by-Side Property Comparison Matrix.
* **Direct Buyer-Seller Engagement:**
  * One-tap WhatsApp chat with pre-filled property inquiries.
  * Schedule Physical Site Visit booking modals.
  * 6-step Post Property wizard with local storage persistence.
* **Consumer Protection & Legal Verification:**
  * Due diligence guides for UP/NCR land registry (Bainama), Khatauni, and RERA verification.
  * Anti-fraud advisories, listing guidelines, and intermediary disclosures.

---

## 🚀 Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
* **Language:** TypeScript
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Forms & Validation:** React Hook Form & Zod
* **Maps:** OpenStreetMap integration

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/inboxcrew1/indraproperties.git
   cd indraproperties
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Start production server:**
   ```bash
   npm run start
   ```

---

## 🌐 Deploying to Hostinger

### Option A: Hostinger VPS (Recommended for Next.js App Router)

1. **Connect to your Hostinger VPS via SSH:**
   ```bash
   ssh root@<YOUR_VPS_IP>
   ```

2. **Install Node.js 20+ and PM2:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
   apt-get install -y nodejs
   npm install -g pm2
   ```

3. **Clone the repository:**
   ```bash
   git clone https://github.com/inboxcrew1/indraproperties.git /var/www/indraproperties
   cd /var/www/indraproperties
   npm install
   npm run build
   ```

4. **Launch with PM2:**
   ```bash
   pm2 start npm --name "indraproperties" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx as Reverse Proxy:**
   Point port `80` / `443` to `http://localhost:3000`.

---

### Option B: Hostinger Cloud / Node.js Web Hosting (hPanel)

1. Go to **hPanel** -> **Websites** -> **Manage** -> **Node.js**.
2. Select **Node.js version:** `20.x` or `22.x`.
3. Set **Application Root:** `/public_html` or `/indraproperties`.
4. Set **Application Startup File:** `node_modules/next/dist/bin/next` with argument `start` (or `server.js`).
5. Upload or pull via Git from `https://github.com/inboxcrew1/indraproperties.git`.
6. Run `npm install` and `npm run build` in the console.
7. Restart the Node.js application in hPanel.

---

## 📄 License & Attribution

Designed & Developed by [InboxCrew](https://inboxcrew.in). All rights reserved.
