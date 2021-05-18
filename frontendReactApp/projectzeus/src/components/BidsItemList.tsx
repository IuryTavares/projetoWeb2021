import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Card} from 'react-bootstrap'
import styles from '../styles/components/BidsItemList.module.css'
import {AiOutlineEye} from 'react-icons/ai'
import {GoKebabVertical} from 'react-icons/go'

export function BidsItemList(){
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
                                    <AiOutlineEye size="1.5rem"/>
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