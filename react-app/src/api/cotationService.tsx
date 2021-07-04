import axios from 'axios';
import { parseCookies } from 'nookies';

export const registerCotation = async(startDate, endDate, description, ids) => {
    const cookies = parseCookies()
    const { data } = await axios.post(
        'http://localhost:8080/api/quotation/create/' + cookies.cnpj,
        { quotation: {startDate, 
            endDate, 
            description}, 
        ids
        },
    )
}

export const getAllCotations = async() => {
    const { data } = await axios.get(
        'http://localhost:8080/api/quotations'
    )
    return data
}

export const getAllCotationsByEnterprise = async(ctx) => {
    const cookies = parseCookies(ctx)
    console.log(cookies.cnpj)
    const { data } = await axios.get(
        'http://localhost:8080/api/quotations/get-all-by-enterprise/' + cookies.cnpj
    )
    return data
}

export const getAllProductsCotations = async(id) => {
    const { data } = await axios.get(
        'http://localhost:8080/api/productQuotation/' + id
    )
    return data
}

export const createTransaction = async(id) => {
    const { data } = await axios.post(
        'http://localhost:8080/api/quotation/transaction/' + id
    )
}

export const getAllBySellerAndClose = async(ctx) => {
    const cookies = parseCookies(ctx)
    const { data } = await axios.get(
        'http://localhost:8080/api/quotations/close/' + cookies.cnpj
    )
    return data
}