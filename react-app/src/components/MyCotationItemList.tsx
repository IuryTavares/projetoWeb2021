import { Card, Row, Col, Modal, Button, ListGroup, Form } from 'react-bootstrap'
import styles from '../styles/components/CardItemList.module.css'
import { AiOutlineEye, AiFillCheckCircle } from 'react-icons/ai'
import { BsCardList } from 'react-icons/bs'
import { useState } from 'react'
import { Cotation } from '../interfaces/Cotation'
import { getAllBidsByCotation } from '../api/bidService'
import { Bid } from '../interfaces/Bid'
import { createTransaction } from '../api/cotationService'

type Props = {
    data: Cotation
}

export function MyCotationItemList({ data }: Props){

    // Modals
    const [details, setShowDetails] = useState(false);
    const handleCloseDetails = () => setShowDetails(false);
    const handleShowDetails = () => setShowDetails(true);

    const [sell, setShowSell] = useState(false);
    const handleCloseSell = () => setShowSell(false);
    const handleShowSell = () => setShowSell(true);

    // Create Bid
    const handleSubmitTransaction = (bid: Bid) => {
        createTransaction(
            bid.id
        )

        handleCloseSell()
    }

    // Get bids
    const [bids, setBids] = useState([])

    const showBids = () => {
        handleShowSell()
        getBids()
    }

    const getBids = () => {
        getAllBidsByCotation(data.id)
            .then(res => setBids(res))
            .catch(err => console.log(err))
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
                                { data.open == true ? "Ativa" : "Finalizada" }
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
                                            <BsCardList onClick={showBids} size="1.5rem"/>
                                        </a>
                                        <Modal size="lg" show={sell} onHide={handleCloseSell}>
                                            <Modal.Header className={styles.shadowModalHeader} closeButton>
                                                <Modal.Title className={styles.title}>
                                                    Lista de bids na cotação {data.id}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Form>
                                                <Modal.Body className={styles.bgModal}>
                                                    <Row>
                                                        <Col>
                                                            <ListGroup>
                                                                { 
                                                                    bids.length >= 1 ? bids.map((bid: Bid) =>
                                                                        <ListGroup.Item key={bid.id}>
                                                                            <Row>
                                                                                <Col sm="3">
                                                                                    Cotação: {bid.quotation.id}
                                                                                </Col>
                                                                                <Col>
                                                                                    Vendedor: {bid.enterprise.fantasyName}
                                                                                </Col>
                                                                                <Col sm="3">
                                                                                    Valor: {bid.priceValue}
                                                                                </Col>
                                                                                <Col sm="1">
                                                                                    <svg width="0" height="0">
                                                                                        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                                                                            <stop stopColor="#4b2ae9" offset="0%" />
                                                                                            <stop stopColor="#9e4ef5" offset="100%" />
                                                                                        </linearGradient>
                                                                                    </svg>
                                                                                    <button onClick={ () => handleSubmitTransaction(bid)} className="p-0" style={{border: "none",backgroundColor: "transparent"}}>
                                                                                        <AiFillCheckCircle size="1.5rem" style={{ fill: "url(#blue-gradient)"}}/>
                                                                                    </button>
                                                                                </Col>
                                                                            </Row>
                                                                        </ListGroup.Item>
                                                                    )
                                                                    : ''
                                                                }
                                                            </ListGroup>
                                                        </Col>
                                                    </Row>
                                                </Modal.Body>
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