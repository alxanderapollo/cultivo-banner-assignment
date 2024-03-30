import styles from '../app/page.module.css'

export default function MyButtonComponent({
  buttonClicked,
  handleStateChange,
}) {
  return (
    <button
      type='button'
      className={styles.buttonStyle}
      onClick={handleStateChange}
    >
      {buttonClicked ? <p>send another message</p> : <p>Get in touch</p>}
    </button>
  )
}
