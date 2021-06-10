import styles from '../styles/components/BidsPage.module.css'
import { PaginationElement } from '../components/PaginationElement'
import {BidsItemList} from '../components/BidsItemList'
import { BidsItemListTitle } from '../components/BidsItemListTitle'


export default function Bids(){
    return(
        <div className={`${styles.divCard} mb-2 px-0 mx-0`}>
            <div className="row">
                <div className="col">
                  <h5 className="mt-4 mb-3 ms-1 text-md-start text-center" style={{fontWeight: 600}}>Meus Bids</h5>
                </div>
            </div>

            <div className="row">
                <BidsItemListTitle></BidsItemListTitle>
            </div>

            <div className="row">
              <BidsItemList></BidsItemList>
            </div>
            <div className="row">
              <BidsItemList></BidsItemList>
            </div>
            <div className="row">
              <BidsItemList></BidsItemList>
            </div>
            <div className="row">
              <BidsItemList></BidsItemList>
            </div>
            <div className="row">
              <BidsItemList></BidsItemList>
            </div>
            <div className="row">
              <BidsItemList></BidsItemList>
            </div>
            <div className="row">
              <BidsItemList></BidsItemList>
            </div>
            <div className="row">
              <BidsItemList></BidsItemList>
            </div>


            <footer className={styles.footerContainer}>                
                <div className="row" style={{position: 'absolute'}}>
                    <PaginationElement></PaginationElement>
                </div>
            </footer>
        </div>
    );
}