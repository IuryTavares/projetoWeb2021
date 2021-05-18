import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import {Bar} from '../components/Bar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Nunito+Sans:wght@400;600;700;800&family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <Bar/>
    </div>
  )
}
