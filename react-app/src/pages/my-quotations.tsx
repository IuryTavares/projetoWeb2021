import { GetServerSideProps } from "next"
import { getAllCotationsByEnterprise } from "../api/cotationService"
import { CotationItemList } from "../components/CotationItemList"
import TitleItemList from "../components/TitleItemList"
import { Cotation } from "../interfaces/Cotation"

type Props = {
    cotations: Cotation[]
}

const MyQuotations = ({ cotations }: Props) => {
    return(
        <div className={`mb-2 px-0 mx-0`}>
            asds
            <div className="row">
                <TitleItemList titles={["Cotação", "Empresa", "Início - Fim", "Uf"]}/>
            </div>
            {cotations.map((cotation) =>
                <div className="row" key={ cotation.id }>
                    <CotationItemList data={ cotation }/>
                </div>
            )}
            </div>
    )
}

export const getStaticProps: GetServerSideProps = async () => {
    const cotations: Cotation[] = await getAllCotationsByEnterprise() ?? null
    return { props: { cotations } }
}

export default MyQuotations