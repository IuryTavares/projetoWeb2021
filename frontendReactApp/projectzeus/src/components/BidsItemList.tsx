import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Card, Modal, Row, Col, Button} from 'react-bootstrap'
import styles from '../styles/components/BidsItemList.module.css'
import {AiOutlineEye} from 'react-icons/ai'
import {GoKebabVertical} from 'react-icons/go'
import { useState } from 'react'
import { CardProduct } from './views/CardProduct'

export function BidsItemList(){

    const [details, setShowDetails] = useState(false);
    const handleCloseDetails = () => setShowDetails(false);
    const handleShowDetails = () => setShowDetails(true);

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
                            500R$
                        </div>
                        <div className="col ">
                            <div className="row align-items-center">
                                <div className="col d-none d-sm-block">
                                    <a href="#">
                                    <AiOutlineEye onClick={handleShowDetails} size="1.5rem"/>
                                    </a>
                                    <Modal size="lg" show={details} onHide={handleCloseDetails}>
                                        <Modal.Header className={styles.shadowModalHeader} closeButton>
                                            <Modal.Title className={styles.title}>Produtos no Bid da Cotação 00001</Modal.Title>
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
                                    </Modal>
                                </div>
                                <div className="col">
                                   <GoKebabVertical size="1.5rem"></GoKebabVertical>
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