import styles from '../styles/components/BidsPage.module.css'
import { PaginationElement } from '../components/PaginationElement'
import { BidsItemList } from '../components/BidsItemList'
import TitleItemList from '../components/TitleItemList';
import { Bid } from '../interfaces/Bid';
import { GetServerSideProps } from 'next';
import { getAllBidsByEnterprise } from '../api/bidService';

type Props = {
  bids: Bid[]
}

export default function Bids( {bids}: Props ){
    return(
        <div className={`${styles.divCard} mb-2 px-0 mx-0`}>
            <div className="row">
                <div className="col">
                  <h5 className="mt-4 mb-3 ms-1 text-md-start text-center" style={{fontWeight: 600}}>Meus Bids</h5>
                </div>
            </div>
            <div className="row">
                <TitleItemList titles={["Cotação", "Empresa", "Data", "Preço"]}/>
            </div>
            {bids.map((bid) =>
              <div className="row" key={bid.id}>
              <BidsItemList bid={bid}/>
              </div>
            )}
            {/*<footer className={styles.footerContainer}>                
                <div className="row" style={{position: 'absolute'}}>
                    <PaginationElement></PaginationElement>
                </div>
            </footer>*/}
        </div>
    );
}

export const getStaticProps: GetServerSideProps = async () => {
  const bids: Bid[] = await getAllBidsByEnterprise() ?? null
  return { props: { bids } }
}