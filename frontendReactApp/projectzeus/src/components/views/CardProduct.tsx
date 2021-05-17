import {Row, Col, Card, Form} from 'react-bootstrap'
import styles from '../../styles/components/views/CardProduct.module.css'
import {AiFillEye} from 'react-icons/ai'
import {IoFastFoodSharp} from 'react-icons/io5'

export function CardProduct () {
    return (
        <Card className={`${styles.cardContainer} pb-0`}>
            <Card.Body className="pb-2">
               <Row>
                   <Col xs="8">
                        <Card.Title>Castanha do Pará</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Rei das Catanhas</Card.Subtitle>
                        <Card.Text className={styles.price}>
                            R$ 1000 
                        </Card.Text>
                        <svg width="0" height="0">
                            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop stopColor="#4b2ae9" offset="0%" />
                                <stop stopColor="#9e4ef5" offset="100%" />
                            </linearGradient>
                        </svg>
                        <Card.Link href="#"><AiFillEye size="2rem" style={{ fill: "url(#blue-gradient)"}}/></Card.Link>
                        <Card.Link href="#">
                            <Form.Check  type="checkbox" className="d-inline-block"/>
                        </Card.Link>
                   </Col>
                   <Col xs="4" className="ps-0 pe-2">
                        <IoFastFoodSharp className={styles.icon} size="6rem"/>
                   </Col>
               </Row>
            </Card.Body>
        </Card>
    )
}