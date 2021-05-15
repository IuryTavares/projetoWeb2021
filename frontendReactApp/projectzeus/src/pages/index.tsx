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
      <MyProductsPage/>
    </div>
  )
}
