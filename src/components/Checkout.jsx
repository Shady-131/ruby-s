import { useState } from 'react'
import { useCart } from '../context/CartContext'
import styles from '../styles/Checkout.module.css'

export default function Checkout({ isOpen, onClose }) {
  const { cart, getTotalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    orderType: 'pickup',
    paymentMethod: 'cash'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.phone) {
      alert('Please fill in Name and Phone number')
      return
    }

    if (formData.orderType === 'delivery' && !formData.address) {
      alert('Please provide a delivery address')
      return
    }

    // Show success message
    setIsSubmitted(true)
    
    // Clear cart and close after 3 seconds
    setTimeout(() => {
      clearCart()
      setFormData({
        name: '',
        phone: '',
        address: '',
        orderType: 'pickup',
        paymentMethod: 'cash'
      })
      setIsSubmitted(false)
      onClose()
    }, 3000)
  }

  const totalPrice = getTotalPrice()

  return (
    <div className={styles.checkoutOverlay} onClick={onClose}>
      <div className={styles.checkoutContainer} onClick={(e) => e.stopPropagation()}>
        {!isSubmitted ? (
          <>
            <button className={styles.closeButton} onClick={onClose}>✕</button>
            <h2 className={styles.checkoutTitle}>Checkout</h2>

            <form onSubmit={handleSubmit}>
              {/* Order Summary */}
              <div className={styles.orderSummary}>
                <div className={styles.summaryTitle}>Order Summary</div>
                {cart.map((item, index) => (
                  <div key={index} className={styles.summaryItem}>
                    <span>
                      {item.quantity}x {item.name}
                      {item.addOns && item.addOns.length > 0 && (
                        <div style={{ fontSize: '0.8rem', color: '#89CFF0' }}>
                          + {item.addOns.map(a => a.name).join(', ')}
                        </div>
                      )}
                    </span>
                    <span>${((item.price + (item.addOns || []).reduce((sum, a) => sum + a.price, 0)) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className={styles.summaryTotal}>
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Name */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  className={styles.formInput}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Phone */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  className={styles.formInput}
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Order Type */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Order Type *</label>
                <div className={styles.radioGroup}>
                  <div className={styles.radioOption}>
                    <input
                      type="radio"
                      id="pickup"
                      name="orderType"
                      value="pickup"
                      checked={formData.orderType === 'pickup'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="pickup">Pickup</label>
                  </div>
                  <div className={styles.radioOption}>
                    <input
                      type="radio"
                      id="delivery"
                      name="orderType"
                      value="delivery"
                      checked={formData.orderType === 'delivery'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="delivery">Delivery</label>
                  </div>
                </div>
              </div>

              {/* Address (conditional) */}
              {formData.orderType === 'delivery' && (
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Delivery Address *</label>
                  <input
                    type="text"
                    name="address"
                    className={styles.formInput}
                    placeholder="123 Main St, City, State ZIP"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              {/* Payment Method */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Payment Method *</label>
                <div className={styles.radioGroup}>
                  <div className={styles.radioOption}>
                    <input
                      type="radio"
                      id="cash"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="cash">Cash</label>
                  </div>
                  <div className={styles.radioOption}>
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="card">Card</label>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className={styles.buttonGroup}>
                <button type="button" className={styles.cancelButton} onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className={styles.submitButton}>
                  Place Order
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✓</div>
            <div className={styles.successTitle}>Order Placed!</div>
            <p className={styles.successText}>
              Thank you for your order, {formData.name}!<br/>
              We'll {formData.orderType === 'pickup' ? 'prepare your order for pickup' : 'deliver your order'} shortly.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
              Redirecting you back...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
