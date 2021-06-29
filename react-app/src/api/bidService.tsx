import axios from 'axios';

export const registerBid = async(quotationId, priceValue) => {
    const cnpj = "11111111"
    const { data } = await axios.post(
        'http://localhost:8080/api/bid/create/' + cnpj,
        { quotationId,
        priceValue
        },
    )
}

export const getAllBidsByEnterprise = async() => {
    const cnpj = "11111111"
    const { data } = await axios.get(
        'http://localhost:8080/api/bid/get-all-by-enterprise/' + cnpj,
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