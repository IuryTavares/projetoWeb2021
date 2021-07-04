import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { getAllCotationsByEnterprise } from "../api/cotationService"
import { isLogged } from "../api/settings"
import { MyCotationItemList } from "../components/MyCotationItemList"
import TitleItemList from "../components/TitleItemList"
import { Cotation } from "../interfaces/Cotation"

type Props = {
    cotations: Cotation[]
}

const MyQuotations = ({ cotations }: Props) => {
    
    const router = useRouter()
    useEffect(() => {
      if(!isLogged()) 
        router.push('/login')
    })

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const cotations: Cotation[] = await getAllCotationsByEnterprise(ctx) ?? null
    return { props: { cotations } }
}

export default MyQuotations