import InboxList from "./components/InboxList/InboxList"
import Input from "./components/Input/Input"
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.container}>
      <Input />
      <InboxList/>
    </div>
  )
}
export default App