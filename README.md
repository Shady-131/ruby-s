# Ruby's Food Trailer - Modern Food Ordering Website

A beautiful, responsive React + Vite web application for Ruby's retro food trailer brand.

## 🎨 Design Features

- **Retro Diner Aesthetic**: Baby blue and cream color scheme with red & white checkerboard accents
- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern UI**: Smooth animations, hover effects, and interactive components
- **Food Trailer Card**: Unique shopping cart designed like the actual food trailer

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd rubys
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation bar with cart icon
│   ├── Hero.jsx             # Hero section with CTA
│   ├── Menu.jsx             # Menu display component
│   ├── MenuItem.jsx         # Individual menu item with add-ons
│   ├── TrailerCard.jsx      # Shopping cart (styled as food trailer)
│   └── Checkout.jsx         # Checkout form
├── context/
│   └── CartContext.jsx      # React Context for cart state management
├── constants/
│   └── menu.js              # Menu items and prices
├── styles/
│   ├── Navbar.module.css
│   ├── Hero.module.css
│   ├── Menu.module.css
│   ├── TrailerCard.module.css
│   └── Checkout.module.css
├── App.jsx                  # Main app component
├── main.jsx                 # Vite entry point
└── index.css                # Global styles
```

## 🎯 Features

- **Browse Menu**: View breakfast items, burgers, and add-ons
- **Add to Cart**: Select items and customize with add-ons
- **Shopping Cart**: Interactive trailer-shaped cart with quantity controls
- **Checkout**: Simple checkout form with order type selection (pickup/delivery)
- **Responsive Navigation**: Sticky navbar with cart badge
- **Smooth Animations**: Fade-in and slide-in effects throughout

## 🛠️ Available Scripts

### `npm run dev`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the app for production to the `dist` folder.

### `npm run preview`
Preview the production build locally.

## 🎨 Color Palette

- **Baby Blue**: #89CFF0
- **Cream**: #FDF6E3
- **Red**: #D62828
- **Dark Green**: #1B4332
- **White**: #FFFFFF

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Technology Stack

- **React 18**: UI library
- **Vite**: Fast build tool and development server
- **CSS Modules**: Scoped styling
- **JavaScript (ES6+)**: No TypeScript

## 📝 Menu Items

### Breakfast
- Breakfast Burritos - $6.00
- Smothered Burrito - $7.00
- Biscuits and Gravy - $6.00
- The Cody - $7.00
- The Bailey - $8.00

### Burgers
- Classic Burger - $8.00
- Classic Bacon Burger - $9.00
- Ruby Specialty Burger w/ Chips - $10.00

### Add-ons
- Extra Cheese - +$0.30
- Extra Beef Patty - +$2.00
- Chips - +$0.50
- Grilled Onions - Free!

## 📄 License

This project is part of the Ruby's Food Trailer brand.

## 👨‍💻 Development Notes

- All components are functional React components
- Cart state is managed using React Context API
- CSS Modules are used for component scoping
- Mobile-first responsive design approach
- No TypeScript - pure JavaScript throughout

Enjoy! 🍔🚐✨
"# ruby-s" 
