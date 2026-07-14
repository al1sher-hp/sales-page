import { config } from '../config'
import Reveal from './Reveal'
import styles from './Pricing.module.css'

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.check}>
    <path d="M5 13l4.5 4.5L19 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const TIERS = [
  {
    name: 'Navbat tizimi',
    price: '4.5 mln so\'m',
    period: "+ 400 ming so'm / oy",
    features: ['Sayt', 'Onlayn navbat', "Telegram'ga xabar", 'Admin panel', 'Hosting va texnik xizmat'],
    cta: "Telegram'da yozish",
    href: config.TELEGRAM_URL,
  },
  {
    name: 'Tizim + AI yordamchi',
    price: '7 mln so\'m',
    period: "+ 600 ming so'm / oy",
    features: [
      'Navbat tizimidagi hammasi',
      "Instagram va Telegram'da savollarga avtomatik javob beruvchi AI",
      "O'zbek va rus tillarida ishlaydi",
    ],
    cta: "Telegram'da yozish",
    href: config.TELEGRAM_URL,
    highlight: true,
    badge: "Ko'p tanlanadi",
  },
  {
    name: 'Individual loyiha',
    price: 'Kelishilgan holda',
    period: 'Murakkab talablar uchun',
    features: ['CRM tizimlari', "To'lov tizimlari integratsiyasi", "Filiallar tarmog'i uchun boshqaruv"],
    cta: 'Muhokama qilish',
    href: config.TELEGRAM_URL,
  },
]

export default function Pricing() {
  return (
    <section id="narxlar" className={styles.section}>
      <div className="container">
        <Reveal as="h2" className={styles.heading}>
          Narxlar
        </Reveal>

        <div className={styles.grid}>
          {TIERS.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 100}
              className={`${styles.card} ${tier.highlight ? styles.cardHighlight : ''}`}
            >
              {tier.badge && <span className={styles.badge}>{tier.badge}</span>}
              <h3 className={styles.name}>{tier.name}</h3>
              <div className={styles.price}>{tier.price}</div>
              <div className={styles.period}>{tier.period}</div>
              <ul className={styles.features}>
                {tier.features.map((f) => (
                  <li key={f}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={`${styles.cta} ${tier.highlight ? styles.ctaHighlight : ''}`}
              >
                {tier.cta}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} as="p" className={styles.note}>
          Oylik to'lovga nimalar kiradi: hosting, uzluksiz ishlash kafolati va oyiga 2 tagacha o'zgartirish.
        </Reveal>
      </div>
    </section>
  )
}
