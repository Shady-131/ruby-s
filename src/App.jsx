import { useState, useRef } from 'react'
import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Location from './components/Location'
import TrailerCard from './components/TrailerCard'
import Checkout from './components/Checkout'
import './App.css'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const menuRef = useRef(null)

  const handleMenuClick = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleOrderClick = () => {
    setIsCartOpen(true)
  }

  const handleCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  return (
    <CartProvider>
      <div className="app">
        <Navbar
          onCartClick={() => setIsCartOpen(!isCartOpen)}
          onMenuClick={handleMenuClick}
          onOrderClick={handleOrderClick}
        />

        <Hero onOrderClick={handleOrderClick} />

        <div ref={menuRef}>
          <Menu />
        </div>

        <Location />

        <TrailerCard
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />

        <Checkout
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />

        {/* Footer */}
        <footer id="contact" style={{
          background: 'linear-gradient(135deg, #89CFF0 0%, #B0E0E6 100%)',
          padding: '3rem 2rem 2rem',
          textAlign: 'center',
          color: '#FFFFFF',
          marginTop: '3rem'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ 
              fontFamily: "'Pacifico', 'Lobster', cursive", 
              fontSize: '2rem',
              marginBottom: '1rem',
              fontWeight: '400'
            }}>
              Ruby's Food Trailer
            </h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: '600' }}>
                📞 <a href="tel:+18018579446" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  +1 (801) 857-9446
                </a>
              </p>
              <p style={{ marginBottom: '1rem' }}>Fresh. Fast. Delicious.</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '1rem', fontWeight: '600', fontSize: '1rem' }}>Follow Us:</p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
                <a
                  href="https://www.tiktok.com/@rubysfoodtrailer?_r=1&_t=ZS-95bvlU3Ry1A"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    color: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D62828'
                    e.currentTarget.style.transform = 'scale(1.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                  title="TikTok"
                >
                  <FaTiktok size={24} />
                </a>
                <a
                  href="https://www.facebook.com/share/1AhWJAdqBW/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    color: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D62828'
                    e.currentTarget.style.transform = 'scale(1.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                  title="Facebook"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/rubysfoodtrailer?igsh=MWFmNnljMjYzejJneA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    color: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D62828'
                    e.currentTarget.style.transform = 'scale(1.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                  title="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', opacity: '0.9', marginTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.3)', paddingTop: '1rem' }}>
              © 2024 Ruby's Food Trailer. Fresh. Fast. Delicious.
            </p>
          </div>
        </footer>
      </div>
    </CartProvider>
  )
}

export default App
