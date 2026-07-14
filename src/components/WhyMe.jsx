import { config } from '../config'
import Reveal from './Reveal'
import styles from './WhyMe.module.css'

const POINTS = [
  {
    title: 'Zamonaviy texnologiyalar',
    text: 'Tizimlarni tez ishlaydigan va uzoq muddat ishonchli xizmat qiladigan zamonaviy texnologiyalarda quraman.',
  },
  {
    title: "Topshirib, g'oyib bo'lmayman",
    text: "Loyihadan keyin ham javobgarman — oylik texnik xizmat shartnoma bilan rasmiylashtiriladi.",
  },
  {
    title: 'Toshkentdaman',
    text: "Kerak bo'lsa, o'zim kelib sozlab beraman. Masofadan ishlaydigan, aloqaga chiqmay qoladigan odam emasman.",
  },
]

export default function WhyMe() {
  const items = config.PORTFOLIO_ITEMS ?? []

  return (
    <section id="men-haqimda" className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <Reveal as="h2" className={styles.heading}>
            Nega aynan men?
          </Reveal>
          <Reveal delay={80} className={styles.badge}>
            {config.YEARS_OR_PROJECTS}
          </Reveal>
        </div>

        <Reveal delay={120} as="p" className={styles.intro}>
          Men — {config.NAME}. Toshkentda kichik va o'rta bizneslar uchun onlayn navbat tizimlari yarataman.
        </Reveal>

        <div className={styles.points}>
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={200 + i * 90} className={styles.point}>
              <h3 className={styles.pointTitle}>{p.title}</h3>
              <p className={styles.pointText}>{p.text}</p>
            </Reveal>
          ))}
        </div>

        {items.length > 0 && (
          <div className={styles.portfolio}>
            <Reveal as="h3" delay={100} className={styles.portfolioHeading}>
              Oldingi loyihalar
            </Reveal>
            <div className={styles.portfolioGrid}>
              {items.map((item, i) => (
                <Reveal key={item.name} delay={i * 100} className={styles.portfolioCard}>
                  {item.image ? (
                    <img src={item.image} alt={item.name} className={styles.portfolioImage} />
                  ) : (
                    <div className={styles.portfolioPlaceholder} aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="4.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M3 14.5l4.5-4 4 3.5 3.5-3 6 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                      <span>Skrinshot qo'shing</span>
                    </div>
                  )}
                  <div className={styles.portfolioBody}>
                    <div className={styles.portfolioName}>{item.name}</div>
                    <p className={styles.portfolioDesc}>{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
