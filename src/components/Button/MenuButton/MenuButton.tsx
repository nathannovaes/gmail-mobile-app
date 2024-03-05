import styles from './styles.module.css'
import MenuIcon from '@mui/icons-material/Menu';

function MenuButton() {
  return (
    <button className={styles.button}>
      <MenuIcon />
    </button>
  )
}
export default MenuButton