import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Button} from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap'
import {Bar} from '../components/Bar'

export default function Home() {
  return (
    <div>
      <Bar></Bar>
    </div>
  )
}
