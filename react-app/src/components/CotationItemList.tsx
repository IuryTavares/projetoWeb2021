import {Card, Row, Col, Modal, Button, ListGroup, Form} from 'react-bootstrap'
import styles from '../styles/components/CardItemList.module.css'
import {AiOutlineEye, AiOutlineShoppingCart, AiFillEye} from 'react-icons/ai'
import { useState } from 'react'
import { Cotation } from '../interfaces/Cotation'
import { registerBid } from '../api/bidService'
import CardProductCotation from './CardProductCotation'

type Props = {
    data: Cotation
}

export function CotationItemList({ data }: Props){
    
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

    const handleSubmitBid = (event) => {
        event.preventDefault()
        registerBid(
            data.id,
            bidPrice
        )

        setBidPrice("")

        handleCloseSell()
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
                            <div className="col-sm-2 ">
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
                                                        <Row>
                                                            {data.productsQuotations.map((product) => 
                                                                <Col className="col-12 col-sm-6" key={product.id}>
                                                                    <CardProductCotation data={product}/>
                                                                </Col>
                                                            )}
                                                        </Row>
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