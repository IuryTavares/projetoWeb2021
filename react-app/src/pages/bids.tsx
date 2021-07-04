import styles from '../styles/components/BidsPage.module.css'
import { PaginationElement } from '../components/PaginationElement'
import { BidsItemList } from '../components/BidsItemList'
import TitleItemList from '../components/TitleItemList';
import { Bid } from '../interfaces/Bid';
import { GetServerSideProps } from 'next';
import { getAllBidsByEnterprise } from '../api/bidService';
import { useEffect } from 'react';
import { isLogged } from '../api/settings'
import { useRouter } from 'next/router'

type Props = {
  bids: Bid[]
}

export default function Bids( { bids }: Props ){
    
    const router = useRouter()
    useEffect(() => {
      if(!isLogged()) 
        router.push('/login')
    })

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const bids: Bid[] = await getAllBidsByEnterprise(ctx) ?? null
  return { props: { bids } }
}