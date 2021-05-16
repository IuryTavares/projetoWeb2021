import {Row, Col, Button, Modal, Form} from 'react-bootstrap'
import styles from '../styles/components/MyProductsPage.module.css'
import { CardProduct } from './views/CardProduct'
import {IoAddCircleSharp} from 'react-icons/io5'
import {RiShoppingCart2Fill} from 'react-icons/ri'
import { useState } from 'react'

export function MyProductsPage() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Row className="mb-2">
                <Col>
                    <CardProduct/>
                </Col>
                <Col>
                    <CardProduct/>
                </Col>
                <Col>
                    <CardProduct/>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <CardProduct/>
                </Col>
                <Col>
                    <CardProduct/>
                </Col>
                <Col>
                    <CardProduct/>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <CardProduct/>
                </Col>
                <Col>
                    <CardProduct/>
                </Col>
                <Col>
                    <CardProduct/>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <CardProduct/>
                </Col>
                <Col>
                    <CardProduct/>
                </Col>
                <Col>
                    <CardProduct/>
                </Col>
            </Row>
            <div className={styles.footer}>
                <svg width="0" height="0">
                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#4b2ae9" offset="0%" />
                        <stop stopColor="#9e4ef5" offset="100%" />
                    </linearGradient>
                </svg>
                <Row>
                    <Col>
                        <RiShoppingCart2Fill size="4.5rem" style={{ fill: "url(#blue-gradient)"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="#" onClick={handleShow}><IoAddCircleSharp onClick={handleShow} size="4.5rem" style={{ fill: "url(#blue-gradient)"}}/></a>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header className={styles.shadowModalHeader} closeButton>
                                <Modal.Title className={styles.title}>Adicionar Produto</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className={styles.bgModal}>
                            <Form>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Control placeholder="Nome" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Marca" />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Control placeholder="Quantidade" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Preço" />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} placeholder="Descrição" />
                                    </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className={styles.btColor} onClick={handleClose}>
                                    Adicionar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </div>
        </div>
        
    )
}