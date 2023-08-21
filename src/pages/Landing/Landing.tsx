import styles from './Landing.module.css'

const Landing = () => {
  const title = [
    'T',
    'e',
    's',
    't',
    'A',
    'n',
    'a',
    'l',
    'i',
    'z',
    'a',
    't',
    'o',
    'r',
  ]
  return (
    <div className={styles.wrapper}>
      <div className={styles.textArea}>
        <div className={styles.heading}>
          {title.map((letter) => (
            <h4 key={Math.random()}>{letter}</h4>
          ))}
        </div>
        <p>Log in and start analyzing</p>
      </div>
    </div>
  )
}

export default Landing
