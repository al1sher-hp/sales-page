import PhoneFrame from './PhoneFrame'
import Reveal from './Reveal'
import styles from './Solution.module.css'

function ServiceScreen() {
  const services = [
    { name: 'Soch olish', time: '60 daq' },
    { name: 'Manikyur', time: '45 daq', active: true },
    { name: 'Massaj', time: '90 daq' },
  ]
  return (
    <div className={styles.screenBody}>
      <div className={styles.screenHeader}>Xizmatni tanlang</div>
      <div className={styles.list}>
        {services.map((s) => (
          <div key={s.name} className={`${styles.listRow} ${s.active ? styles.listRowActive : ''}`}>
            <span className={styles.rowDot} />
            <span className={styles.rowName}>{s.name}</span>
            <span className={styles.rowTime}>{s.time}</span>
            {s.active && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4.5 4.5L19 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function PickerScreen() {
  const masters = ['Dilnoza', 'Kamola', 'Zarina']
  const slots = ['10:00', '11:30', '13:00', '14:00', '16:00', '17:30']
  return (
    <div className={styles.screenBody}>
      <div className={styles.screenHeader}>Ustani va vaqtni tanlang</div>
      <div className={styles.masters}>
        {masters.map((m, i) => (
          <div key={m} className={`${styles.masterChip} ${i === 0 ? styles.masterChipActive : ''}`}>
            <span className={styles.masterAvatar}>{m[0]}</span>
            <span>{m}</span>
          </div>
        ))}
      </div>
      <div className={styles.dayToggle}>
        <span>Bugun</span>
        <span className={styles.dayActive}>Ertaga</span>
      </div>
      <div className={styles.slots}>
        {slots.map((s) => (
          <span key={s} className={`${styles.slot} ${s === '14:00' ? styles.slotActive : ''}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

function TelegramScreen() {
  return (
    <div className={styles.screenBody}>
      <div className={styles.tgHeader}>
        <span className={styles.tgAvatar}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 4L2.5 11.2c-1 .4-1 1.8.1 2.1l4.9 1.5 1.9 5.6c.3 1 1.6 1.2 2.3.4l2.7-3 4.7 3.5c.9.6 2.1.1 2.3-1L23.3 5.5c.2-1.2-1-2-2.3-1.5z"
              fill="currentColor"
            />
          </svg>
        </span>
        <div>
          <div className={styles.tgName}>Yozilish tizimi</div>
          <div className={styles.tgStatus}>bot</div>
        </div>
      </div>
      <div className={styles.tgBody}>
        <div className={styles.tgBubble}>
          <p>✅ Yangi yozilish!</p>
          <p><strong>Malika Y.</strong></p>
          <p>Manikyur — ertaga, 14:00</p>
          <p>Usta: Dilnoza</p>
          <span className={styles.tgTime}>hozir</span>
        </div>
      </div>
    </div>
  )
}

const STEPS = [
  {
    n: '1',
    title: 'Mijoz saytga kiradi va xizmatni tanlaydi',
    screen: <ServiceScreen />,
  },
  {
    n: '2',
    title: "Ustani va bo'sh vaqtni tanlaydi",
    screen: <PickerScreen />,
  },
  {
    n: '3',
    title: "Sizga Telegram'ga darhol xabar keladi",
    screen: <TelegramScreen />,
  },
]

export default function Solution() {
  return (
    <section id="yechim" className={styles.section}>
      <div className="container">
        <Reveal as="h2" className={styles.heading}>
          Yechim — 3 qadam
        </Reveal>

        <div className={styles.row}>
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 120} className={styles.step}>
              <div className={styles.stepHead}>
                <span className={styles.stepNumber}>{step.n}</span>
                <p className={styles.stepTitle}>{step.title}</p>
              </div>
              <PhoneFrame className={styles.phone}>{step.screen}</PhoneFrame>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
