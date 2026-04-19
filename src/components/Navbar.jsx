import styles from '../styles/Navbar.module.css'
import { useCart } from '../context/CartContext'
import { FiShoppingBag } from 'react-icons/fi'

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

      <div className={styles.cartIcon} onClick={onCartClick} title="View your cart">
        <FiShoppingBag size={28} color="#A67B5B" strokeWidth={1.5} />
        {cart.length > 0 && (
          <span className={styles.cartBadge}>{cart.length}</span>
        )}
      </div>
    </nav>
  )
}
