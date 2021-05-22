import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import styles from '../styles/components/BidsPage.module.css'
import { PaginationElement } from './views/PaginationElement'
import { TransactionItemListTitle } from './TransactionItemListTitle'
import { TransactionItemList } from './TransactionItemList'


export function TransactionPage(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <span><b>Transações</b></span>
                </div>
            </div>

            <div className="row">
                <TransactionItemListTitle></TransactionItemListTitle>
            </div>

            <div className="row">
                <TransactionItemList></TransactionItemList>
            </div>
            <div className="row">
                <TransactionItemList></TransactionItemList>
            </div>
            <div className="row">
                <TransactionItemList></TransactionItemList>
            </div>
            <div className="row">
                <TransactionItemList></TransactionItemList>
            </div>
            <div className="row">
                <TransactionItemList></TransactionItemList>
            </div>
            <div className="row">
                <TransactionItemList></TransactionItemList>
            </div>
            <div className="row">
                <TransactionItemList></TransactionItemList>
            </div>
            <div className="row">
                <TransactionItemList></TransactionItemList>
            </div>

            <footer className={styles.footerContainer}>                
                <div className="row" style={{position: 'absolute'}}>
                    <PaginationElement></PaginationElement>
                </div>
            </footer>
        </div>
    );
}