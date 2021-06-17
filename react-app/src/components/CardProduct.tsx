import {Row, Col, Card, Form} from 'react-bootstrap'
import styles from '../styles/components/CardProduct.module.css'
import {AiFillEye} from 'react-icons/ai'
import {IoFastFoodSharp} from 'react-icons/io5'
import { Product } from '../interfaces/Product'

type Props = {
    data: Product
}

const CardProduct = ({ data }: Props) => {
    return (
        <Card className={`${styles.cardContainer} pb-0 mb-2`}>
            <Card.Body className="pb-2">
               <Row>
                   <Col xs="8">
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{data.brand}</Card.Subtitle>
                        <Card.Text className={styles.price}>
                            R$ {data.limitPrice} 
                        </Card.Text>
                        <svg width="0" height="0">
                            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop stopColor="#4b2ae9" offset="0%" />
                                <stop stopColor="#9e4ef5" offset="100%" />
                            </linearGradient>
                        </svg>
                        <Card.Link href="#"><AiFillEye size="2rem" style={{ fill: "url(#blue-gradient)"}}/></Card.Link>
                   </Col>
                   <Col xs="4" className="ps-0 pe-2">
                        <IoFastFoodSharp className={styles.icon} size="6rem"/>
                   </Col>
               </Row>
            </Card.Body>
        </Card>
    )
}

export default CardProduct