import {Card, Row, Col, Modal, Button, ListGroup} from 'react-bootstrap'
import styles from '../styles/components/CardItemList.module.css'
import {AiOutlineEye, AiOutlineShoppingCart} from 'react-icons/ai'
import { useState } from 'react'
import { Cotation } from '../interfaces/Cotation'
import CardProduct from './CardProduct'
import { ProductQuotation } from '../interfaces/ProductQuotation'
import { Product } from '../interfaces/Product'

type Props = {
    data: Cotation
}

export function CardItemList({ data }: Props){

    const [details, setShowDetails] = useState(false);
    const handleCloseDetails = () => setShowDetails(false);
    const handleShowDetails = () => setShowDetails(true);

    const [sell, setShowSell] = useState(false);
    const handleCloseSell = () => setShowSell(false);
    const handleShowSell = () => setShowSell(true);

    const [more, setShowMore] = useState(false);
    const handleCloseMore = () => setShowMore(false);
    const handleShowMore = () => setShowMore(true);

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
                                            <Modal.Body className={styles.bgModal}>
                                                <div className="row mb-1">
                                                    {data.productsQuotations.map((item) => 
                                                        <div className="col-6">
                                                            <CardProduct data={ item as Product } />
                                                        </div>
                                                    )}
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button className={styles.btColor} onClick={handleCloseSell}>
                                                    Confirmar
                                                </Button>
                                            </Modal.Footer>
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