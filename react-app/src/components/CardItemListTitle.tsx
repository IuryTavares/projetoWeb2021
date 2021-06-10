import {Card} from 'react-bootstrap'
import styles from '../styles/components/CardItemListTitle.module.css'

export function CardItemListTitle(){
    return(
        <div className={`${styles.divCard} px-0 mx-0`} >
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
                                Início - Fim
                            </div>
                            <div className="col d-none d-xl-block">
                                Uf
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