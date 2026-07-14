import { useState } from 'react'
import Reveal from './Reveal'
import styles from './FAQ.module.css'

const ITEMS = [
  {
    q: 'Oddiy sayt bilan farqi nima?',
    a: "Oddiy sayt — vitrina: unda ma'lumot bor, lekin u sizga mijoz olib kelmaydi. Bu esa ishlaydigan tizim: mijoz saytga kirib, xizmatni tanlaydi, o'zi yoziladi va sizga shu zahoti Telegram'ga xabar keladi. Sayt ko'rsatish uchun, tizim esa ishlash uchun.",
  },
  {
    q: 'Nega tanishimga yoki jiyanimga qildirmasligim kerak?',
    a: "Qilib berish — oson. Lekin bir yil davomida uzluksiz ishlab turishiga, nosozlik chiqqanda tezda javob berishga kim kafolat beradi? Tanishingiz boshqa ishga o'tib ketishi yoki vaqti bo'lmay qolishi mumkin. Men bu ish bilan doimiy shug'ullanaman — shartnoma va oylik texnik xizmat orqali javobgarlikni o'z zimmamga olaman.",
  },
  {
    q: "O'rnatish qancha vaqt oladi?",
    a: "7-10 ish kuni. Shu muddatda sayt tayyorlanadi, sinovdan o'tkaziladi va ishga tushiriladi.",
  },
  {
    q: "Instagram'im bor-ku, nimaga bu kerak?",
    a: "Instagram — ajoyib reklama kanali, lekin navbatga yozilish uchun mo'ljallanmagan. DM'dagi xabarlar orasida navbatlar yo'qolib, aralashib ketadi. Bu tizim aynan shu muammoni hal qiladi: mijoz tartibli yoziladi, siz esa hech narsani qo'ldan boy bermaysiz.",
  },
  {
    q: "Oylik to'lovni to'xtatsam nima bo'ladi?",
    a: "Tizim ishlashdan to'xtaydi. Oylik to'lovga hosting, uzluksiz ishlash kafolati va texnik xizmat kiradi — shuning uchun to'lov to'xtasa, tizim ham ishlamay qoladi. Buni oldindan ochiq aytib qo'yishni afzal ko'raman.",
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.question}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{item.q}</span>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ''}`}>
        <p className={styles.answer}>{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <Reveal as="h2" className={styles.heading}>
          Ko'p beriladigan savollar
        </Reveal>

        <div className={styles.list}>
          {ITEMS.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <FaqItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
