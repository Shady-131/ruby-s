import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa'
import styles from '../styles/Location.module.css'

export default function Location() {
  return (
    <section className={styles.locationSection} id="location">
      <div className={styles.container}>
        <h2 className={styles.title}>Find Us</h2>
        
        <div className={styles.content}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.5271944651606!2d-111.89127!3d40.76078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875427a2e7a2f2b7%3A0x2f2f2f2f2f2f2f2f!2sRuby's%20Food%20Trailer!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: '3px solid #D62828', borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ruby's Food Trailer Location"
            ></iframe>
          </div>

          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Stop By Ruby's!</h3>
            
            <div className={styles.infoItem}>
              <span className={styles.icon}>📍</span>
              <a
                href="https://maps.app.goo.gl/45izTrUT1xwuPtxF8?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View on Google Maps
              </a>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>📞</span>
              <a href="tel:+18018579446" className={styles.link}>
                +1 (801) 857-9446
              </a>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>🕐</span>
              <span>Coming to a location near you!</span>
            </div>

            <div className={styles.socialLinks}>
              <h4 className={styles.socialTitle}>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.tiktok.com/@rubysfoodtrailer?_r=1&_t=ZS-95bvlU3Ry1A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="Follow on TikTok"
                >
                  <FaTiktok size={20} />
                </a>
                <a
                  href="https://www.facebook.com/share/1AhWJAdqBW/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="Follow on Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/rubysfoodtrailer?igsh=MWFmNnljMjYzejJneA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="Follow on Instagram"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
