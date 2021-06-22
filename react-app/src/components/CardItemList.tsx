import {Card, Row, Col, Modal, Button, ListGroup, Form} from 'react-bootstrap'
import styles from '../styles/components/CardItemList.module.css'
import {AiOutlineEye, AiOutlineShoppingCart, AiFillEye} from 'react-icons/ai'
import { useState } from 'react'
import { Cotation } from '../interfaces/Cotation'
import CardProduct from './CardProduct'
import { ProductQuotation } from '../interfaces/ProductQuotation'
import { Product } from '../interfaces/Product'
import { registerBid } from '../api/bidService'

type Props = {
    data: Cotation
}

export function CardItemList({ data }: Props){
    
    // Modals
    const [details, setShowDetails] = useState(false);
    const handleCloseDetails = () => setShowDetails(false);
    const handleShowDetails = () => setShowDetails(true);

    const [sell, setShowSell] = useState(false);
    const handleCloseSell = () => setShowSell(false);
    const handleShowSell = () => setShowSell(true);

    const [more, setShowMore] = useState(false);
    const handleCloseMore = () => setShowMore(false);
    const handleShowMore = () => setShowMore(true);

    // Create Bid
    const [bidPrice, setBidPrice] = useState('')

    const handleInputChange = (event) => {
        data.productsQuotations.find((item) => {
            if(item.id == event.target.value) return item
        }).checkBid = event.target.checked
    }

    const handleSubmitBid = (event) => {
        event.preventDefault()
        let productsToAdd = data.productsQuotations.filter((item) => {
            if(item.checkBid) return item
        }).map((i) => { return i.id })

        if(productsToAdd.length > 0) {
            registerBid(
               productsToAdd,
                data.id,
                bidPrice
            )

            data.productsQuotations.map((item) => {
                item.checkBid = false
            })

            setBidPrice("")

            handleCloseSell()
        } else {
            console.log("faltou marcar")
        }
        
        
    }



    return(
        <div className={`${styles.divCard} mb-2 px-0 mx-0`} >
            <Card className={styles.cardContainer}>
                <Card.Body className="container-fluid">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col">
                                { data.id }
                            </div>
                            <div className="col d-none d-xl-block" >
                                { data.enterprise.fantasyName }
                            </div>
                            <div className="col d-none d-sm-block">
                                { data.startDate.substring(0 , 10)} - { data.endDate.substring(0 , 10) }
                            </div>
                            <div className="col d-none d-xl-block">
                                PE
                            </div>
                            <div className="col ">
                                <div className="row align-items-center">
                                    <div className="col d-none d-sm-block">
                                        <a href="#">
                                            <AiOutlineEye onClick={handleShowDetails} size="1.5rem"/>
                                        </a>
                                        <Modal show={details} onHide={handleCloseDetails}>
                                            <Modal.Header className={styles.shadowModalHeader} closeButton>
                                                <Modal.Title className={styles.title}>Detalhe da Cotação</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className={styles.bgModal}>
                                                <Row>
                                                    <Col>
                                                        <label className="mb-1">Cotação: <span className="text-secondary">{ data.id }</span></label>
                                                        <label className="mb-1">Empresa: <span className="text-secondary">{ data.enterprise.fantasyName }</span></label>
                                                        <label className="mb-1">Data de Início: <span className="text-secondary">{ data.startDate.substring(0 , 10) }</span></label>
                                                        <label className="mb-1">Data de Término: <span className="text-secondary">{ data.endDate.substring(0 , 10) }</span></label>
                                                        <label className="mb-1">UF: <span className="text-secondary">Pernambuco</span></label>
                                                        <label className="mb-1">
                                                            Descrição: 
                                                            <span className="mb-2 text-secondary">
                                                                { data.description }
                                                            </span>
                                                        </label>
                                                    </Col>
                                                    <Col>
                                                        <ul className="list-group">
                                                            {data.productsQuotations.map((item)=>
                                                                <li className="list-group-item" key={item.id}>
                                                                    {item.name}: <span className="text-end"> {item.quantity} un. </span> 
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Modal.Body>
                                        </Modal>
                                    </div>
                                    <div className="col d-none d-sm-block">
                                        <a href="#">
                                            <AiOutlineShoppingCart onClick={handleShowSell} size="1.5rem"/>
                                        </a>
                                        <Modal size="lg" show={sell} onHide={handleCloseSell}>
                                            <Modal.Header className={styles.shadowModalHeader} closeButton>
                                                <Modal.Title className={styles.title}>Ofertar</Modal.Title>
                                            </Modal.Header>
                                            <Form>
                                                <Modal.Body className={styles.bgModal}>
                                                        <ListGroup as="ul">
                                                            {data.productsQuotations.map((item) => 
                                                                <ListGroup.Item as="li" key={item.id}>
                                                                    <Row>
                                                                        <Col sm={1}>
                                                                            <Form.Check  
                                                                                type="checkbox" 
                                                                                className="d-inline-block"
                                                                                value={item.id} 
                                                                                onChange={handleInputChange}
                                                                            />
                                                                        </Col>
                                                                        <Col>
                                                                            <span style={{fontWeight: 600, fontSize: 17}}>{item.name}</span>
                                                                        </Col>
                                                                        <Col>
                                                                            <span>Valor máximo pago: <span>{item.limitPrice}</span> </span>
                                                                        </Col>
                                                                        <Col sm={1}>
                                                                            <AiFillEye size="2rem" style={{ fill: "url(#blue-gradient)"}}/>
                                                                        </Col>
                                                                    </Row>
                                                                </ListGroup.Item>
                                                            )}
                                                        </ListGroup>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Form.Group as={Row} controlId="formHorizontalPrice">
                                                        <Form.Label column sm={5}>
                                                            Oferta do bid:
                                                        </Form.Label>
                                                        <Col sm={7}>
                                                            {/*required={true}*/}
                                                            <Form.Control 
                                                                type="number" 
                                                                placeholder="0,00"
                                                                value={bidPrice}
                                                                onChange={(e) => setBidPrice(e.target.value)}
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                    <Button className={styles.btColor} onClick={handleSubmitBid}>
                                                        Confirmar
                                                    </Button>
                                                </Modal.Footer>
                                            </Form>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}