import styles from './Avatar.module.css'

type AvatarProp = {
  firstNameInitial: string
}

const Avatar = ({ firstNameInitial }: AvatarProp) => {
  return (
    <div className={styles.box}>
      <h2>{firstNameInitial}</h2>
    </div>
  )
}

export default Avatar
