import { useEffect, useState } from 'react'
import { config } from '../config'
import styles from './Header.module.css'

const LINKS = [
  { href: '#ogriq', label: "Muammo" },
  { href: '#yechim', label: "Yechim" },
  { href: '#narxlar', label: "Narxlar" },
  { href: '#men-haqimda', label: "Men haqimda" },
  { href: '#faq', label: 'Savollar' },
  { href: '#aloqa', label: 'Aloqa' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand} aria-label="Bosh sahifa">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="24" height="24" rx="7" stroke="currentColor" strokeWidth="1.6" />
            <path d="M7 10.5H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M9.5 15.2L11.7 17.4L16.7 12.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Yozilish tizimi</span>
        </a>

        <nav className={styles.nav} aria-label="Bo'limlar bo'yicha navigatsiya">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={config.TELEGRAM_URL} className={styles.cta}>
          Telegram
        </a>
      </div>
    </header>
  )
}
