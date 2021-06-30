import {Card, Modal, Row, Col} from 'react-bootstrap'
import styles from '../styles/components/CardItemList.module.css'
import {AiOutlineEye} from 'react-icons/ai'
import {GoKebabVertical} from 'react-icons/go'
import { useState } from 'react'
import CardProductCotation from './CardProductCotation'
import { Cotation } from '../interfaces/Cotation'

type Props = {
    cotation: Cotation
}

export function TransactionItemList({ cotation }: Props){

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
                            { cotation.id }
                        </div>
                        <div className="col d-none d-xl-block" >
                            { cotation.enterprise.fantasyName }
                        </div>
                        <div className="col d-none d-sm-block">
                            { cotation.startDate.substring(0 , 10)} - { cotation.endDate.substring(0 , 10) }
                        </div>
                        <div className="col d-none d-xl-block">
                            preço
                        </div>
                        <div className="col-sm-2">
                            <div className="row align-items-center">
                                <div className="col d-none d-sm-block">
                                    <a href="#">
                                        <AiOutlineEye onClick={handleShowDetails} size="1.5rem"/>
                                    </a>
                                    <Modal size="lg" show={details} onHide={handleCloseDetails}>
                                        <Modal.Header className={styles.shadowModalHeader} closeButton>
                                            <Modal.Title className={styles.title}>Produtos da Transação</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className={styles.bgModal}>
                                            <Row>
                                                {cotation.productsQuotations.map((product) => 
                                                    <Col className="col-12 col-sm-6" key={product.id}>
                                                        <CardProductCotation data={product}/>
                                                    </Col>
                                                )}
                                            </Row>
                                        </Modal.Body>
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