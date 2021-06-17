import {Card, Row, Col, Modal, Button, ListGroup} from 'react-bootstrap'
import styles from '../styles/components/CardItemList.module.css'
import {AiOutlineEye, AiOutlineShoppingCart} from 'react-icons/ai'
import {GoKebabVertical} from 'react-icons/go'
import { useState } from 'react'
import CardProduct from './CardProduct'


export function CardItemList(){

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
                                Cotação
                            </div>
                            <div className="col d-none d-xl-block" >
                                Empresa
                            </div>
                            <div className="col d-none d-sm-block">
                                02/07 - 05/07
                            </div>
                            <div className="col d-none d-xl-block">
                                Uf
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
                                                        <label className="mb-1">Cotação: <span className="text-secondary">00001</span></label>
                                                        <label className="mb-1">Empresa: <span className="text-secondary">Empresa XXXX</span></label>
                                                        <label className="mb-1">Data de Início: <span className="text-secondary">02/07/2021</span></label>
                                                        <label className="mb-1">Data de Término: <span className="text-secondary">05/07/2021</span></label>
                                                        <label className="mb-1">UF: <span className="text-secondary">Pernambuco</span></label>
                                                        <label className="mb-1">
                                                            Descrição: 
                                                            <span className="mb-2 text-secondary">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante massa, pellentesque nec lacus vel, tempus volutpat turpis. Nam eros nibh, semper vel velit ut, venenatis hendrerit sapien. Ut sagittis placerat magna, sit amet venenatis nunc hendrerit vel. Nullam imperdiet urna hendrerit neque dictum, et maximus ipsum tincidunt. Nunc imperdiet, eros eget venenatis finibus, justo tellus finibus neque, ut vehicula dolor dui in sapien.
                                                            </span>
                                                        </label>
                                                    </Col>
                                                    <Col>
                                                    <ListGroup>
                                                        <ListGroup.Item>
                                                            Castanha <span className="text-end"> 100</span> 
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            Castanha <span className="text-end"> 100</span> 
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            Castanha <span className="text-end"> 100</span> 
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            Castanha <span className="text-end"> 100</span> 
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            Castanha <span className="text-end"> 100</span> 
                                                        </ListGroup.Item>
                                                    </ListGroup>
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
                                                <Row className="mb-1">
                                                    <Col>
                                                        <CardProduct/>
                                                    </Col>
                                                    <Col>
                                                        <CardProduct/>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-1">
                                                    <Col>
                                                        <CardProduct/>
                                                    </Col>
                                                    <Col>
                                                        <CardProduct/>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-1">
                                                    <Col>
                                                        <CardProduct/>
                                                    </Col>
                                                    <Col>
                                                        <CardProduct/>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-1">
                                                    <Col>
                                                        <CardProduct/>
                                                    </Col>
                                                    <Col>
                                                        <CardProduct/>
                                                    </Col>
                                                </Row>
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