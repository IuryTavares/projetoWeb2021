import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import styles from '../styles/components/BidsPage.module.css'
import { PaginationElement } from './views/PaginationElement'
import {BidsItemList} from './BidsItemList'
import { BidsItemListTitle } from './BidsItemListTitle'


export function BidsPage(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <span><b>Meus Bids</b></span>
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