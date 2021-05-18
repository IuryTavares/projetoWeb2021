import styles from '../styles/pages/Home.module.css'
import {Bar} from '../components/Bar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Bar/>
    </div>
  )
}
