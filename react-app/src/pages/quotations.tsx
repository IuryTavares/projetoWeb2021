import {CardItemList} from '../components/CardItemList'
import styles from '../styles/components/QuotesPage.module.css'
import { PaginationElement } from '../components/PaginationElement'
import {CardItemListTitle} from '../components/CardItemListTitle'
import { Cotation } from '../interfaces/cotation'
import { GetServerSideProps } from 'next'
import { getAllCotations } from '../api/cotationService'

type Props = {
    items: Cotation[]
}

const Quotations = ({ items }: Props) => {
    return(
        <div className={`${styles.divCard} mb-2 px-0 mx-0`}>
            <div className="row">
                <div className="col">
                    <h5 className="mt-4 mb-3 ms-1 text-md-start text-center" style={{fontWeight: 600}}>Cotação</h5>
                </div>
            </div>
            <div className="row">
                <CardItemListTitle/>
            </div>
            {items.map((item) =>
                <div className="row" key={ item.id }>
                    <CardItemList data={ item }/>
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
    const items: Cotation[] = await getAllCotations() ?? null
    return { props: { items } }
}

export default Quotations