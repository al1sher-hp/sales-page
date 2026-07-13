import Reveal from './Reveal'
import styles from './PainPoints.module.css'

const PAINS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 5.5c0-1 .8-1.7 1.8-1.5l2.6.6c.7.2 1.2.8 1.3 1.5l.4 2.6c.1.7-.2 1.4-.7 1.8l-1.3 1.1c1 2.3 2.9 4.2 5.2 5.2l1.1-1.3c.4-.5 1.1-.8 1.8-.7l2.6.4c.7.1 1.3.6 1.5 1.3l.6 2.6c.2 1-.5 1.8-1.5 1.8h-1C9.9 20.9 3.1 14.1 3 5.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 4L20 9M20 4L15 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Band vaqtda telefon jiringlayveradi',
    text: "Mijozga xizmat ko'rsatayotganda qo'ng'iroqni ko'tarolmaysiz. U esa 2 daqiqadan so'ng qo'shni salonga qo'ng'iroq qiladi.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 6.2C3 4.4 4.4 3 6.2 3h8.6C16.6 3 18 4.4 18 6.2v4.6c0 1.8-1.4 3.2-3.2 3.2H9l-4 3.4v-3.4H6.2C4.4 14 3 12.6 3 10.8V6.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M11 17.4c0 1.8 1.4 3.2 3.2 3.2h1.6L19 24v-3.4h.8c1.8 0 3.2-1.4 3.2-3.2v-3.6c0-1.8-1.4-3.2-3.2-3.2h-.3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Instagram DM'da yozilishlar aralashib ketadi",
    text: '"Ertaga bo\'sh joy bormi?" degan xabarlar orasida eskisi tepaga chiqib ketadi, javob kechikadi yoki butunlay unutiladi.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="13" r="8.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8.6V13l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 2.6L5 4.6M15.5 2.6L19 4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: '"Keyinroq yozaman" — va unutadi',
    text: "Mijoz sahifangizni yopadi, boshqa ish bilan band bo'ladi. Yozilish sodir bo'lmaydi, siz esa undan umuman xabar topmaysiz.",
  },
]

export default function PainPoints() {
  return (
    <section id="ogriq" className={styles.section}>
      <div className="container">
        <Reveal as="h2" className={styles.heading}>
          Tanish holatlarmi?
        </Reveal>

        <div className={styles.grid}>
          {PAINS.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 90} className={styles.card}>
              <div className={styles.icon}>{pain.icon}</div>
              <h3 className={styles.cardTitle}>{pain.title}</h3>
              <p className={styles.cardText}>{pain.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
