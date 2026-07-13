import { config } from '../config'
import Reveal from './Reveal'
import styles from './Contact.module.css'

export default function Contact() {
  const telHref = `tel:${config.PHONE.replace(/[^+\d]/g, '')}`

  return (
    <section id="aloqa" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal as="h2" className={styles.heading}>
          Bepul maslahat — 15 daqiqa
        </Reveal>
        <Reveal as="p" delay={80} className={styles.text}>
          Loyihangiz haqida gaplashamiz va tizim biznesingizga mos kelish-kelmasligini birga aniqlaymiz.
        </Reveal>

        <Reveal delay={160} className={styles.actions}>
          <a href={config.TELEGRAM_URL} className={styles.btn}>
            Telegram'da yozish
          </a>
          <a href={telHref} className={styles.phone}>
            yoki qo'ng'iroq qiling: {config.PHONE}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
