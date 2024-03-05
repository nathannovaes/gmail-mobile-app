
import AvatarButton from '../Button/AvatarButton/AvatarButton'
import MenuButton from '../Button/MenuButton/MenuButton'
import styles from './styles.module.css'

function Input() {
  return (
    <div className={styles.container}>
      <MenuButton />
      <input className={styles.input} placeholder='Search in mail'/>
      <AvatarButton />
    </div>
  )
}
export default Input