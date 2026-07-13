import styles from './PhoneFrame.module.css'

// Shared device chrome for every product mockup on the page — same frame,
// different screens inside, so the illustrations read as one real product.
export default function PhoneFrame({ children, className = '' }) {
  return (
    <div className={`${styles.phone} ${className}`.trim()}>
      <div className={styles.notch} />
      <div className={styles.screen}>{children}</div>
    </div>
  )
}
