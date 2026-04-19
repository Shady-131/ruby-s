import styles from '../styles/Navbar.module.css'
import { useCart } from '../context/CartContext'

export default function Navbar({ onCartClick, onMenuClick, onOrderClick }) {
  const { cart } = useCart()

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLocationClick = () => {
    const element = document.getElementById('location')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.navbar}>
    <div className={styles.logo} onClick={handleLogoClick}>
  <img 
    src="/logo.png" 
    alt="Ruby's Food Trailer" 
    className={styles.logoImage} 
  />
</div>  

      <ul className={styles.navLinks}>
        <li>
          <a onClick={handleLogoClick}>Home</a>
        </li>
        <li>
          <a onClick={handleLocationClick}>Find Us</a>
        </li>
      </ul>

      <div className={styles.cartIcon} onClick={onCartClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#C8A27A" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 4h10l-0.5 2.5H7L7 4z" stroke="#8B5E3C" strokeWidth="1" fill="#C8A27A"/>
          <path d="M6.5 6.5h11L16 18c0 1-0.5 1.5-1.5 1.5H8c-1 0-1.5-0.5-1.5-1.5L6.5 6.5z" fill="#C8A27A" stroke="#8B5E3C" strokeWidth="1.5"/>
          <path d="M9 4v-1.5c0-1 0.5-1.5 1.5-1.5h2c1 0 1.5 0.5 1.5 1.5V4" stroke="#8B5E3C" strokeWidth="1.5" fill="none"/>
        </svg>
        {cart.length > 0 && (
          <span className={styles.cartBadge}>{cart.length}</span>
        )}
      </div>
    </nav>
  )
}
