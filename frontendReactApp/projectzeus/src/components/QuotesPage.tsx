import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {CardItemList} from './views/CardItemList'
import styles from '../styles/components/QuotesPage.module.css'
import { PaginationElement } from './views/PaginationElement'
import {CardItemListTitle} from './views/CardItemListTitle'


export function QuotesPage(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h5 className="mt-4 mb-3 ms-1 text-md-start text-center" style={{fontWeight: 600}}>Cotação</h5>
                </div>
            </div>


            <div className="row">
                <CardItemListTitle></CardItemListTitle>
            </div>

            <div className="row">
                <CardItemList></CardItemList>
                <CardItemList></CardItemList>
                <CardItemList></CardItemList>
                <CardItemList></CardItemList>
                <CardItemList></CardItemList>
                <CardItemList></CardItemList>
            </div>

            <footer className={styles.footerContainer}>                
                <div className="row" style={{position: 'absolute'}}>
                    <PaginationElement></PaginationElement>
                </div>
            </footer>
        </div>
    );
}