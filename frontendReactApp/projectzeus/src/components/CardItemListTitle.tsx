import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Card} from 'react-bootstrap'
import styles from '../styles/components/CardItemListTitle.module.css'
import {AiOutlineEye, AiOutlineShoppingCart} from 'react-icons/ai'
import { RiGhost2Fill } from 'react-icons/ri';
import {GoKebabVertical} from 'react-icons/go'

export function CardItemListTitle(){
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