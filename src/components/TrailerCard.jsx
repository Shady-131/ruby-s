import { useCart } from '../context/CartContext'
import styles from '../styles/TrailerCard.module.css'

export default function TrailerCard({ isOpen, onClose, onCheckout }) {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart()
  const totalPrice = getTotalPrice()

  if (!isOpen) return null

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }} onClick={onClose}>
      <div style={{ maxHeight: '90vh', overflow: 'auto' }} onClick={(e) => e.stopPropagation()}>
        <div className={styles.cartContainer}>
          <div className={styles.cartHeader}>
            <h2 className={styles.cartTitle}>Your Order</h2>
            <button className={styles.closeButton} onClick={onClose}>✕</button>
          </div>

          <div className={styles.cartItems}>
            {cart.length === 0 ? (
              <div className={styles.emptyCart}>
                🛒 Your cart is empty. Start ordering!
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={index} className={styles.cartItem}>
                  <div className={styles.cartItemInfo}>
                    <div className={styles.cartItemName}>{item.name}</div>
                    <div className={styles.cartItemPrice}>
                      ${(item.price * item.quantity).toFixed(2)}
                      {item.addOns && item.addOns.length > 0 && (
                        <div style={{ fontSize: '0.8rem', color: '#89CFF0' }}>
                          {item.addOns.map(a => a.name).join(', ')}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.quantityControls}>
                    <button
                      className={styles.quantityButton}
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      className={styles.quantityInput}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(index, parseInt(e.target.value) || 1)}
                      min="1"
                    />
                    <button
                      className={styles.quantityButton}
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className={styles.removeButton}
                      onClick={() => removeFromCart(index)}
                      title="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className={styles.cartFooter}>
            <div className={styles.totalPrice}>
              <span className={styles.totalLabel}>Total:</span>
              <span className={styles.totalAmount}>${totalPrice.toFixed(2)}</span>
            </div>

            <button
              className={styles.checkoutButton}
              onClick={onCheckout}
              disabled={cart.length === 0}
            >
              {cart.length === 0 ? 'Add Items to Order' : 'Proceed to Checkout →'}
            </button>
            
            <button
              className={styles.continueShoppingButton}
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
