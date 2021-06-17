import {CardItemList} from '../components/CardItemList'
import styles from '../styles/components/QuotesPage.module.css'
import { PaginationElement } from '../components/PaginationElement'
import {CardItemListTitle} from '../components/CardItemListTitle'

export default function Quotations(){
    return(
        <div className={`${styles.divCard} mb-2 px-0 mx-0`}>
            <div className="row">
                <div className="col">
                    <h5 className="mt-4 mb-3 ms-1 text-md-start text-center" style={{fontWeight: 600}}>Cotação</h5>
                </div>
            </div>

            <div className="row">
                <CardItemListTitle></CardItemListTitle>
            </div>

            <div className="row">
              <CardItemList/>
            </div>

            {/*<footer className={styles.footerContainer}>                
                <div className="row" style={{position: 'absolute'}}>
                    <PaginationElement></PaginationElement>
                </div>
            </footer>*/}
        </div>
    );
}