import styles from './styles.module.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { truncateText } from '../utils';

interface MailBannerProps {
  company: string
  subject: string
  content: string
  time: string
}

function MailBanner({ company, subject, content, time }: MailBannerProps) {
  return (
    <div className={styles.container}>
      <div>
        <AccountCircleIcon style={{fontSize: '48px'}} />
      </div>
      <div className={styles.center_container}>
        <p>{company}</p>
        <p>{truncateText(subject)}</p>
        <p>{truncateText(content)}</p>
      </div>
      <div className={styles.right_container}>
        {time}
        <StarBorderIcon/>
      </div>
    </div>
  )
}
export default MailBanner