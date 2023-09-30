import styles from './Avatar.module.css'

type AvatarProp = {
  firstNameInitial: string
}

const Avatar = ({ firstNameInitial }: AvatarProp) => {
  return (
    <div className={styles.box}>
      <h3>{firstNameInitial}</h3>
    </div>
  )
}

export default Avatar
