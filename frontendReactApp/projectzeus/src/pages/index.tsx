import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Bar} from '../components/Bar'
import { Login } from '../components/Login'
import { RegisterUser } from '../components/RegisterUser'
import {RegisterEnterprise} from '../components/RegisterEnterprise'
import { CardProduct } from '../components/views/CardProduct'
import { MyProductsPage } from '../components/MyProductsPage'

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
