import { config } from '../config'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>© {year} {config.NAME}</span>
        <a href={config.TELEGRAM_URL}>Telegram</a>
      </div>
    </footer>
  )
}
