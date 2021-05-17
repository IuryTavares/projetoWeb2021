import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {CardItemList} from '../components/CardItemList'
import styles from '../styles/components/QuotesPage.module.css'
import { PaginationElement } from './PaginationElement'
import {CardItemListTitle} from './CardItemListTitle'


export function QuotesPage(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <span><b>Cotações</b></span>
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