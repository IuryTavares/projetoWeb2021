import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Bar} from '../components/Bar'
import { Login } from '../components/Login'

export default function Home() {
  return (
    <div className={styles.container}>
      <Bar></Bar>
    </div>
  )
}
