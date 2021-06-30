import { GetServerSideProps } from "next"
import { getAllCotationsByEnterprise } from "../api/cotationService"
import { MyCotationItemList } from "../components/MyCotationItemList"
import TitleItemList from "../components/TitleItemList"
import { Cotation } from "../interfaces/Cotation"

type Props = {
    cotations: Cotation[]
}

const MyQuotations = ({ cotations }: Props) => {
    return(
        <div className={`mb-2 px-0 mx-0`}>
            <div className="row">
                <TitleItemList titles={["Cotação", "Empresa", "Início - Fim", "Situação"]}/>
            </div>
            {cotations.map((cotation) =>
                <div className="row" key={ cotation.id }>
                    <MyCotationItemList data={ cotation }/>
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