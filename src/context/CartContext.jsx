import React, { createContext, useState, useCallback } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = useCallback((item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        cartItem => cartItem.id === item.id && JSON.stringify(cartItem.addOns) === JSON.stringify(item.addOns)
      )
      
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem === existingItem
            ? { ...cartItem, quantity: cartItem.quantity + (item.quantity || 1) }
            : cartItem
        )
      }
      
      return [...prevCart, { ...item, quantity: item.quantity || 1 }]
    })
  }, [])

  const removeFromCart = useCallback((itemId) => {
    setCart(prevCart => prevCart.filter((_, index) => index !== itemId))
  }, [])

  const updateQuantity = useCallback((itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }
    
    setCart(prevCart =>
      prevCart.map((item, index) =>
        index === itemId ? { ...item, quantity } : item
      )
    )
  }, [removeFromCart])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const getTotalPrice = useCallback(() => {
    return cart.reduce((total, item) => {
      const itemTotal = item.price * item.quantity
      const addOnsTotal = (item.addOns || []).reduce((sum, addon) => sum + addon.price, 0) * item.quantity
      return total + itemTotal + addOnsTotal
    }, 0)
  }, [cart])

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
