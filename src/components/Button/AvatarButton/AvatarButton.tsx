import styles from './styles.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AvatarButton() {
  return (
    <button className={styles.button}>
      <AccountCircleIcon />
    </button>
  )
}
export default AvatarButton