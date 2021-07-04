import axios from 'axios';
import { parseCookies } from 'nookies';

export const registerBid = async(quotationId, priceValue) => {
    const cookies = parseCookies()
    const { data } = await axios.post(
        'http://localhost:8080/api/bid/create/' + cookies.cnpj,
        { quotationId,
        priceValue
        },
    )
}

export const getAllBidsByEnterprise = async(ctx) => {
    const cookies = parseCookies(ctx)
    const { data } = await axios.get(
        'http://localhost:8080/api/bid/get-all-by-enterprise/' + cookies.cnpj,
    )
    return data
}

export const getAllBidsByCotation = async(id) => {
    const { data } = await axios.get(
        'http://localhost:8080/api/bid/get-all-by-quotation/' + id,
    )
    console.log(data)
    return data
}