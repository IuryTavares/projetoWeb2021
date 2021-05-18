import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Card} from 'react-bootstrap'
import styles from '../styles/components/BidsItemListTitle.module.css'

export function BidsItemListTitle(){
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
                            Data
                        </div>
                        <div className="col d-none d-xl-block">
                            Preço
                        </div>
                        <div className="col">
                          
                        </div>
                    </div>
                </div>
                </Card.Body>
            </Card>
        </div>
    );
}