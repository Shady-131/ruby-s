import { useState } from 'react'
import { useCart } from '../context/CartContext'
import styles from '../styles/Menu.module.css'
import { MENU_SECTIONS, ADD_ONS, ADD_ONS_NOTE } from '../constants/menu'

export default function Menu() {
  const { addToCart } = useCart()
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedAddOns, setSelectedAddOns] = useState([])

  const handleAddToCart = (item) => {
    const addOns = ADD_ONS.filter(addon => selectedAddOns.includes(addon.id))
    
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      addOns: addOns,
      quantity: 1
    })
    
    setSelectedAddOns([])
    setSelectedItem(null)
  }

  const toggleAddOn = (addonId) => {
    setSelectedAddOns(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    )
  }

  return (
    <section className={styles.menuSection} id="menu">
      {MENU_SECTIONS.map(section => (
        <div key={section.id} className={styles.sectionWrapper}>
          <div className={styles.checkerboardTop}></div>

          <div className={styles.menuContainer}>
            <h2 className={styles.sectionTitle}>{section.name}</h2>
            
            <ul className={styles.menuItems}>
              {section.items.map(item => (
                <li key={item.id} className={styles.menuItem}>
                  <div className={styles.itemContent}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    {item.description && (
                      <p className={styles.itemDescription}>{item.description}</p>
                    )}
                    <button
                      onClick={() => setSelectedItem(item.id)}
                      style={{
                        marginTop: '0.8rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: '#89CFF0',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#7AB8D6'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#89CFF0'}
                    >
                      + Add
                    </button>

                    {selectedItem === item.id && (
                      <div style={{
                        marginTop: '1rem',
                        padding: '1rem',
                        backgroundColor: '#F5F5F5',
                        borderRadius: '8px',
                        borderLeft: '4px solid #89CFF0'
                      }}>
                        <p style={{ fontWeight: '600', marginBottom: '0.8rem', color: '#1B4332' }}>Add-ons:</p>
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
                          onClick={() => handleAddToCart(item)}
                          style={{
                            marginTop: '1rem',
                            padding: '0.6rem 1.2rem',
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
                        <button
                          onClick={() => setSelectedItem(null)}
                          style={{
                            marginTop: '0.5rem',
                            padding: '0.6rem 1.2rem',
                            backgroundColor: '#CCCCCC',
                            color: '#333',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            width: '100%',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#BBB'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#CCC'}
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                  <div className={styles.itemPrice}>${item.price.toFixed(2)}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Removed checkerboardBottom - now single divider between sections */}
        </div>
      ))}

      {/* Add-ons Section */}
      <div className={styles.sectionWrapper}>
        <div className={styles.checkerboardTop}></div>

        <div className={styles.menuContainer}>
          <h3 className={styles.addOnsTitle}>Add-Ons</h3>
          
          <ul className={styles.addOnsList}>
            {ADD_ONS.map(addon => (
              <li key={addon.id} className={styles.addOnItem}>
                <div className={styles.addOnBadge}>
                  +${addon.price.toFixed(2)} {addon.name}
                </div>
              </li>
            ))}
          </ul>

          <p className={styles.addOnsNote}>
            ✓ {ADD_ONS_NOTE}
          </p>
        </div>

        <div className={styles.checkerboardBottom}></div>
      </div>
    </section>
  )
}
