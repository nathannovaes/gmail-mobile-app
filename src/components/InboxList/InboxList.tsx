import MailBanner from '../MailBox/MailBanner'
import styles from './styles.module.css'
import mails from '../../data/mails.json'

function InboxList() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>ALL INBOXES</p>
      {
        mails.map(({company, subject, content, time}) => (
          <MailBanner company={company} subject={subject} content={content} time={time}/>
        ))
      }
    </div>
  )
}
export default InboxList
