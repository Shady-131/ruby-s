// Color Palette
export const COLORS = {
  babyBlue: '#89CFF0',
  cream: '#FDF6E3',
  red: '#D62828',
  darkGreen: '#1B4332',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  darkGray: '#333333',
}

// Menu Data with Descriptions
export const MENU_SECTIONS = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    items: [
      { id: 'burrito', name: 'Breakfast Burritos', description: 'Eggs, cheese & hash browns', price: 6.00 },
      { id: 'smothered', name: 'Smothered Burrito', description: 'Loaded with sauce & toppings', price: 7.00 },
      { id: 'biscuits', name: 'Biscuits and Gravy', description: 'Homestyle classic', price: 6.00 },
      { id: 'cody', name: 'The Cody', description: 'Spicy breakfast special', price: 7.00 },
      { id: 'bailey', name: 'The Bailey', description: 'Premium breakfast combo', price: 8.00 },
    ]
  },
  {
    id: 'burgers',
    name: 'Burgers',
    items: [
      { id: 'classic', name: 'Classic Burger', description: 'Juicy & fresh', price: 8.00 },
      { id: 'bacon', name: 'Classic Bacon Burger', description: 'With crispy bacon', price: 9.00 },
      { id: 'ruby', name: 'Ruby Specialty Burger', description: 'Our signature - comes with chips', price: 10.00 },
    ]
  },
  {
    id: 'specialties',
    name: 'Specialties',
    items: [
      { id: 'footlong', name: 'Grilled Beef Footlong', price: 5.00 },
      { id: 'nachos', name: 'Classic Cheesey Nachos', price: 6.00 },
      { id: 'pulled_pork', name: 'Smoked Pulled Pork Nachos', price: 9.00 },
    ]
  }
]

// Add-ons
export const ADD_ONS = [
  { id: 'cheese', name: 'Extra Cheese', price: 0.30 },
  { id: 'beef', name: 'Extra Beef Patty', price: 2.00 },
  { id: 'chips', name: 'Bag of Chips', price: 0.50 },
]

// Additional text
export const ADD_ONS_NOTE = 'Add grilled onions for no charge'
