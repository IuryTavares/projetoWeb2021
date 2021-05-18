import {Row, Col, Button, Modal, Form, ListGroup} from 'react-bootstrap'
import styles from '../styles/components/MyProductsPage.module.css'
import { CardProduct } from './views/CardProduct'
import {IoAddCircleSharp} from 'react-icons/io5'
import {RiShoppingCart2Fill} from 'react-icons/ri'
import {ImCancelCircle} from 'react-icons/im'
import { useState } from 'react'

export function MyProductsPage() {
    const [addProduct, setShowAddProduct] = useState(false);
    const handleCloseAddProduct = () => setShowAddProduct(false);
    const handleShowAddProduct = () => setShowAddProduct(true);

    const [addQuotes, setShowAddQuotes] = useState(false);
    const handleCloseAddQuotes = () => setShowAddQuotes(false);
    const handleShowAddQuotes = () => setShowAddQuotes(true);

    return(
        <div>
            <h5 className="mt-4 mb-3 ms-1 text-md-start text-center" style={{fontWeight: 600}}>Meus Produtos</h5>
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
                        <a href="#" onClick={handleShowAddQuotes}>
                            <RiShoppingCart2Fill size="4.5rem" style={{ fill: "url(#blue-gradient)"}}/>
                        </a>
                        <Modal size="lg" show={addQuotes} onHide={handleCloseAddQuotes}>
                            <Modal.Header className={styles.shadowModalHeader} closeButton>
                                <Modal.Title className={styles.title}>Criar Quotação</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className={styles.bgModal}>
                            <Form>
                                <Row>
                                    <Col>
                                        <Row className="mb-3">
                                            <Col>
                                                <Form.Control type="date" placeholder="Data de Início" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col>
                                                <Form.Control type="date" placeholder="Data do Fim" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Control as="textarea" rows={3} placeholder="Descrição" />
                                            </Form.Group>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row className="mb-3">
                                            <Col>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                                            <Form.Label column sm={6}>
                                                                Castanha do Pará
                                                            </Form.Label>
                                                            <Col sm={5}>
                                                                <Form.Control type="number" placeholder="Quant." />
                                                            </Col>
                                                            <Col sm={1}>
                                                                <a href="#">
                                                                    <ImCancelCircle className="mt-2" color="red"/>
                                                                </a>
                                                            </Col>
                                                        </Form.Group>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                                            <Form.Label column sm={6}>
                                                                Castanha do Pará
                                                            </Form.Label>
                                                            <Col sm={5}>
                                                                <Form.Control type="number" placeholder="Quant." />
                                                            </Col>
                                                            <Col sm={1}>
                                                                <a href="#">
                                                                    <ImCancelCircle className="mt-2" color="red"/>
                                                                </a>
                                                            </Col>
                                                        </Form.Group>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                                            <Form.Label column sm={6}>
                                                                Castanha do Pará
                                                            </Form.Label>
                                                            <Col sm={5}>
                                                                <Form.Control type="number" placeholder="Quant." />
                                                            </Col>
                                                            <Col sm={1}>
                                                                <a href="#">
                                                                    <ImCancelCircle className="mt-2" color="red"/>
                                                                </a>
                                                            </Col>
                                                        </Form.Group>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                                            <Form.Label column sm={6}>
                                                                Castanha do Pará
                                                            </Form.Label>
                                                            <Col sm={5}>
                                                                <Form.Control type="number" placeholder="Quant." />
                                                            </Col>
                                                            <Col sm={1}>
                                                                <a href="#">
                                                                    <ImCancelCircle className="mt-2" color="red"/>
                                                                </a>
                                                            </Col>
                                                        </Form.Group>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                                            <Form.Label column sm={6}>
                                                                Castanha do Pará
                                                            </Form.Label>
                                                            <Col sm={5}>
                                                                <Form.Control type="number" placeholder="Quant." />
                                                            </Col>
                                                            <Col sm={1}>
                                                                <a href="#">
                                                                    <ImCancelCircle className="mt-2" color="red"/>
                                                                </a>
                                                            </Col>
                                                        </Form.Group>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className={styles.btColor} onClick={handleCloseAddQuotes}>
                                    Adicionar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="#" onClick={handleShowAddProduct}><IoAddCircleSharp onClick={handleShowAddProduct} size="4.5rem" style={{ fill: "url(#blue-gradient)"}}/></a>
                        <Modal show={addProduct} onHide={handleCloseAddProduct}>
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
                                <Button className={styles.btColor} onClick={handleCloseAddProduct}>
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