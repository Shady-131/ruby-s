import styles from '../styles/Hero.module.css'

export default function Hero({ onOrderClick }) {
  return (
    <section className={styles.hero}>
      <div className={styles.checkerboard}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Fresh. Fast. Ruby's.</h1>
        <p className={styles.heroSubtitle}>Authentic food trailer experience</p>
        <button className={styles.ctaButton} onClick={onOrderClick}>
          Order Now
        </button>
      </div>
    </section>
  )
}
