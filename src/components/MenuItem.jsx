import { useState } from 'react'
import { useCart } from '../context/CartContext'
import styles from '../styles/Menu.module.css'
import { ADD_ONS } from '../constants/menu'

export default function MenuItem({ item }) {
  const { addToCart } = useCart()
  const [showAddOns, setShowAddOns] = useState(false)
  const [selectedAddOns, setSelectedAddOns] = useState([])

  const handleAddToCart = () => {
    const addOns = ADD_ONS.filter(addon => selectedAddOns.includes(addon.id))
    
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      addOns: addOns,
      quantity: 1
    })
    
    setSelectedAddOns([])
    setShowAddOns(false)
  }

  const toggleAddOn = (addonId) => {
    setSelectedAddOns(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    )
  }

  return (
    <li className={styles.menuItem}>
      <div className={styles.itemContent}>
        <div className={styles.itemName}>{item.name}</div>
        <button
          onClick={() => setShowAddOns(!showAddOns)}
          style={{
            marginTop: '0.5rem',
            padding: '0.4rem 0.8rem',
            backgroundColor: '#89CFF0',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#7AB8D6'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#89CFF0'}
        >
          {showAddOns ? '✕ Close' : '+ Add to Cart'}
        </button>
        
        {showAddOns && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#F5F5F5',
            borderRadius: '8px',
            borderLeft: '4px solid #89CFF0'
          }}>
            <p style={{ fontWeight: '600', marginBottom: '0.8rem', color: '#1B4332' }}>Select Add-ons:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {ADD_ONS.map(addon => (
                <label key={addon.id} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(addon.id)}
                    onChange={() => toggleAddOn(addon.id)}
                    style={{ marginRight: '0.5rem', cursor: 'pointer' }}
                  />
                  <span style={{ color: '#1B4332' }}>
                    {addon.name} (+${addon.price.toFixed(2)})
                  </span>
                </label>
              ))}
            </div>
            <button
              onClick={handleAddToCart}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#D62828',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#B71C1C'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#D62828'}
            >
              Confirm Add to Cart
            </button>
          </div>
        )}
      </div>
      <div className={styles.itemPrice}>${item.price.toFixed(2)}</div>
    </li>
  )
}
