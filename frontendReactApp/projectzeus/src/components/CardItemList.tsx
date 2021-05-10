import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Card} from 'react-bootstrap'
import styles from '../styles/components/CardItemList.module.css'


export function CardItemList(){
    return(
        <div className={styles.divCard}>
            <Card className={styles.cardContainer}>
                
                <Card.Body>
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col-sm" >
                            iury tavares
                        </div>
                        <div className="col-sm" >
                            Ulissses chaves
                        </div>
                        <div className="col-sm col-sm d-none d-sm-block">
                            mateus chaves
                        </div>
                        <div className="col-sm col-sm d-none d-sm-block">
                            Ana Paula
                        </div>
                        <div className="col-sm col-sm d-none d-sm-block">
                            Saimon
                        </div>
                        <div className="col-sm d-none d-sm-block">
                            Vanilson Bugueiro
                        </div>
                        <div className="col-sm d-none d-sm-block">
                            Ramices Moises
                        </div>
                    </div>
                </div>
                </Card.Body>
                
            </Card>
        </div>
    );
}