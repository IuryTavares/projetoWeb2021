import styles from '../styles/components/BidsPage.module.css'
import { PaginationElement } from '../components/PaginationElement'
import { TransactionItemList } from '../components/TransactionItemList'
import TitleItemList from '../components/TitleItemList'
import { Cotation } from '../interfaces/Cotation'
import { GetServerSideProps } from 'next'
import { getAllBySellerAndClose } from '../api/cotationService'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { isLogged } from '../api/settings'

type Props = {
    cotations: Cotation[]
}

const Transactions = ({ cotations }: Props) => {

    const router = useRouter()

    useEffect(() => {
      if(!isLogged()) 
        router.push('/login')
    })

    return(
        <div className={`${styles.divCard} mb-2 px-0 mx-0`}>
            <div className="row">
                <div className="col">
                    <h5 className="mt-4 mb-3 ms-1 text-md-start text-center" style={{fontWeight: 600}}>Transações</h5>
                </div>
            </div>
            <div className="row">
                <TitleItemList titles={ ["Cotação", "Comprador", "Início - Fim", "Uf"] }/>
            </div>
            {
                cotations.map((cotation) => 
                    <div className="row" key={cotation.id}>
                        <TransactionItemList cotation={ cotation }/>
                    </div>
                )
            }
            {/*<footer className={styles.footerContainer}>                
                <div className="row" style={{position: 'absolute'}}>
                    <PaginationElement></PaginationElement>
                </div>
            footer>*/}
        </div>
    );
}

export const getStaticProps: GetServerSideProps = async () => {
    const cotations: Cotation[] = await getAllBySellerAndClose() ?? null
    return { props: { cotations } }
}

export default Transactions