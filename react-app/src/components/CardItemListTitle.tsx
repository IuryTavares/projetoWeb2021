import {Card} from 'react-bootstrap'
import styles from '../styles/components/CardItemListTitle.module.css'

type Props = {
    titles: string[]
}

const CardItemListTitle = ({ titles }: Props) => {
    return(
        <div className={`${styles.divCard} px-0 mx-0`} >
            <Card className={styles.cardContainer}>
                <Card.Body className="container-fluid">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col">
                                {titles[0]}
                            </div>
                            <div className="col d-none d-xl-block" >
                                {titles[1]}
                            </div>
                            <div className="col d-none d-sm-block">
                                {titles[2]}
                            </div>
                            <div className="col d-none d-xl-block">
                                {titles[3]}
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

export default CardItemListTitle