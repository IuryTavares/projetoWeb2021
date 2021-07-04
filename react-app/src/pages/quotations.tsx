import { CotationItemList } from '../components/CotationItemList'
import styles from '../styles/components/QuotesPage.module.css'
import { PaginationElement } from '../components/PaginationElement'
import TitleItemList from '../components/TitleItemList'
import { Cotation } from '../interfaces/Cotation'
import { GetServerSideProps } from 'next'
import { getAllCotations } from '../api/cotationService'
import { Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { isLogged } from '../api/settings'

type Props = {
    items: Cotation[]
}

const Quotations = ({ items }: Props) => {

    const router = useRouter()

    useEffect(() => {
        if(!isLogged()) 
            router.push('/login')
    })

    return(
        <div className={`${styles.divCard} mb-2 px-0 mx-0`}>
            <div className="row">
                <TitleItemList titles={["Cotação", "Empresa", "Início - Fim", "Uf"]}/>
            </div>
            {items.map((item) =>
                <div className="row" key={ item.id }>
                    <CotationItemList data={ item }/>
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