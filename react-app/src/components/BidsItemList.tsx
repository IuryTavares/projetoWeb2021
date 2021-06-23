import {Card, Modal, Row, Col} from 'react-bootstrap'
import styles from '../styles/components/BidsItemList.module.css'
import {AiOutlineEye} from 'react-icons/ai'
import { useState } from 'react'
import { Bid } from '../interfaces/Bid'
import CardProductCotation from './CardProductCotation'

type Props = {
    bid: Bid
}

export function BidsItemList( { bid } : Props ){

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
                            {bid.quotation.id}
                        </div>
                        <div className="col d-none d-xl-block" >
                            {bid.quotation.enterprise.fantasyName}
                        </div>
                        <div className="col d-none d-sm-block">
                            {bid.quotation.startDate} - {bid.quotation.endDate}
                        </div>
                        <div className="col d-none d-xl-block">
                            {bid.priceValue}
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
                                                {bid.quotation.productsQuotations.map((product) => 
                                                    <Col key={product.id}>
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