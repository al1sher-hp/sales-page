import { config } from '../config'
import PhoneFrame from './PhoneFrame'
import Reveal from './Reveal'
import styles from './Hero.module.css'

function NightNotificationMockup() {
  return (
    <div className={styles.lockscreen}>
      <div className={styles.clock}>23:47</div>
      <div className={styles.notification}>
        <div className={styles.notifIcon}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 4L2.5 11.2c-1 .4-1 1.8.1 2.1l4.9 1.5 1.9 5.6c.3 1 1.6 1.2 2.3.4l2.7-3 4.7 3.5c.9.6 2.1.1 2.3-1L23.3 5.5c.2-1.2-1-2-2.3-1.5z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.notifBody}>
          <div className={styles.notifTitle}>
            <span>Navbat tizimi</span>
            <span className={styles.notifTime}>hozir</span>
          </div>
          <p className={styles.notifText}>
            🔔 Yangi navbat: <strong>Malika Y.</strong> — ertaga 14:00, Manikyur
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <Reveal as="p" className={styles.kicker}>
            Onlayn navbat · 24/7 ishlaydi
          </Reveal>
          <Reveal as="h1" delay={80} className={styles.headline}>
            Salonlar va klinikalar uchun onlayn navbat tizimi
          </Reveal>
          <Reveal as="p" delay={160} className={styles.subline}>
            Mijozlaringiz kechasi ham navbat oladi. Siz esa hech bir qo'ng'iroqni o'tkazib yubormaysiz.
          </Reveal>
          <Reveal delay={240} className={styles.actions}>
            <a href={config.DEMO_URL} className={styles.primaryBtn}>
              Jonli demo ko'rish
            </a>
            <a href={config.TELEGRAM_URL} className={styles.secondaryBtn}>
              Telegram'da yozish
            </a>
          </Reveal>
        </div>

        <Reveal delay={200} className={styles.visual}>
          <PhoneFrame>
            <NightNotificationMockup />
          </PhoneFrame>
        </Reveal>
      </div>
    </section>
  )
}
