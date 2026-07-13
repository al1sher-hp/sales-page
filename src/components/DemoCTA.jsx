import { config } from '../config'
import Reveal from './Reveal'
import styles from './DemoCTA.module.css'

export default function DemoCTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal as="h2" className={styles.heading}>
          Ishonish uchun ko'ring — demo salonda o'zingiz yozilib ko'ring
        </Reveal>
        <Reveal as="p" delay={80} className={styles.text}>
          Xizmat tanlashdan tortib Telegram'ga xabar kelishigacha — butun jarayonni real tizimda sinab ko'rasiz.
        </Reveal>
        <Reveal delay={160}>
          <a href={config.DEMO_URL} className={styles.btn}>
            Demo salonga o'tish
          </a>
        </Reveal>
      </div>
    </section>
  )
}
