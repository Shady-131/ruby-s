# 🚀 Ruby's Food Trailer - Setup Instructions

## Quick Start Guide

Your Ruby's Food Ordering Website is ready! Follow these steps to get it running:

### Step 1: Install Dependencies

Open a terminal/command prompt in the project directory and run:

```bash
npm install
```

This will install all required packages (React, React DOM, and Vite).

### Step 2: Start Development Server

Once dependencies are installed, run:

```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`.

### Step 3: Build for Production

When ready to deploy, run:

```bash
npm run build
```

This creates a production-ready build in the `dist/` folder.

---

## 📦 What's Included

### ✅ Complete Component Architecture
- **Navbar** - Sticky navigation with cart badge
- **Hero Section** - Eye-catching landing area with CTA
- **Menu System** - Breakfast, Burgers, and Add-ons
- **Menu Items** - Individual items with add-on selection
- **Trailer Card** - Innovative shopping cart styled as food trailer
- **Checkout** - Full order form with pickup/delivery options

### ✅ State Management
- **CartContext** - React Context for global cart state
- All cart operations (add, remove, update quantity)
- Real-time total price calculation

### ✅ Design System
- 🎨 Complete color palette (Baby Blue, Cream, Red, Dark Green)
- 🎯 Responsive CSS Modules for each component
- 📱 Mobile-first responsive design
- ✨ Smooth animations and transitions

### ✅ Features Implemented
- Add items with customizable add-ons
- Real-time cart quantity controls
- Complete checkout flow
- Pickup/delivery order types
- Payment method selection (Cash/Card)
- Success confirmation screen
- Full mobile responsiveness

---

## 📁 File Structure

```
rubys/
├── public/
│   └── index.html          # Entry HTML with Google Fonts
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── MenuItem.jsx
│   │   ├── TrailerCard.jsx
│   │   └── Checkout.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── constants/
│   │   └── menu.js
│   ├── styles/
│   │   ├── Navbar.module.css
│   │   ├── Hero.module.css
│   │   ├── Menu.module.css
│   │   ├── TrailerCard.module.css
│   │   └── Checkout.module.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
└── README.md
```

---

## 🎨 Design Highlights

### Color Scheme
- **Primary Blue**: #89CFF0 (Baby Blue)
- **Background**: #FDF6E3 (Cream)
- **Accent Red**: #D62828
- **Text**: #1B4332 (Dark Green)
- **White**: #FFFFFF

### Typography
- **Headers**: "Lobster" - Retro script font for titles
- **Body**: "Poppins" - Clean, modern sans-serif

### Visual Elements
- Red & white checkerboard patterns (diner style)
- Rounded corners and soft shadows
- Smooth hover effects and transitions
- Retro food trailer design aesthetic

---

## 🔧 Available Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clean installation (if needed)
rm -rf node_modules package-lock.json
npm install
```

---

## 💡 Key Features Explained

### 1. Menu System
Browse through categories:
- **Breakfast** (5 items): Burritos, Biscuits & Gravy, specialty items
- **Burgers** (3 items): Classic, Bacon, and Ruby Specialty
- **Add-ons**: Cheese, extra beef, chips, free grilled onions

### 2. Shopping Cart (Trailer Card)
- Unique design shaped like the food trailer
- Real-time quantity adjustments
- Add-on display for each item
- Total price calculation
- Wheels design at the bottom

### 3. Checkout Flow
- Customer information (name, phone)
- Order type selection (Pickup/Delivery)
- Optional address for delivery
- Payment method choice
- Automatic cart clearing on success
- Success confirmation message

### 4. Responsive Design
- **Desktop**: Full navbar, multi-column layouts
- **Tablet**: Optimized spacing, readable fonts
- **Mobile**: Touch-friendly buttons, single column

---

## 🚀 Deployment Ready

The project is built with Vite, which provides:
- ⚡ Instant server start
- 🔄 Fast HMR (Hot Module Replacement)
- 📦 Optimized production builds
- 🎯 Modern ES modules

### Deploy to Vercel, Netlify, or any static host

```bash
# Build production files
npm run build

# Upload the `dist` folder to your hosting provider
```

---

## 📝 Customization Guide

### Add New Menu Items
Edit `src/constants/menu.js`:
```javascript
export const MENU_SECTIONS = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    items: [
      { id: 'item-id', name: 'Item Name', price: 9.99 },
      // Add more items...
    ]
  }
]
```

### Change Colors
Update the color references in component CSS files:
- `src/styles/*.module.css`
- Search for hex color codes and update as needed

### Customize Menu Title or Text
Update strings in components or create a `src/constants/text.js` file for easier management.

---

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy, Vite will use the next available port (3001, 3002, etc.)

### Dependencies Not Installing
```bash
# Clear npm cache and reinstall
npm cache clean --force
npm install
```

### Hot Module Replacement Not Working
Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)

---

## ✨ Next Steps (Optional Enhancements)

- [ ] Add language toggle (EN/AR)
- [ ] Integrate real backend API
- [ ] Add admin panel for menu management
- [ ] Implement real payment processing
- [ ] Add order tracking
- [ ] Mobile app using React Native

---

## 📞 Support

For questions or issues, check:
1. Browser console for errors (F12)
2. Terminal output for build warnings
3. Vite documentation: https://vitejs.dev/
4. React documentation: https://react.dev/

---

## 🎉 You're All Set!

Your Ruby's Food Ordering Website is ready to run. Enjoy! 🍔🚐✨

```bash
npm install && npm run dev
```
