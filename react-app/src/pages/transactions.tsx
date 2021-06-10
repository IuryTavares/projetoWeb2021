import styles from '../styles/components/BidsPage.module.css'
import { PaginationElement } from '../components/PaginationElement'
import { TransactionItemListTitle } from '../components/TransactionItemListTitle'
import { TransactionItemList } from '../components/TransactionItemList'


export default function Transactions(){
    return(
        <div className={`${styles.divCard} mb-2 px-0 mx-0`}>
            <div className="row">
                <div className="col">
                    <h5 className="mt-4 mb-3 ms-1 text-md-start text-center" style={{fontWeight: 600}}>Transações</h5>
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