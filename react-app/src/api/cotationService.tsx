import axios from 'axios';
import { getCnpj } from './settings';

export const registerCotation = async(startDate, endDate, description, ids) => {
    const cnpj = getCnpj()
    const { data } = await axios.post(
        'http://localhost:8080/api/quotation/create/' + cnpj,
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

export const getAllCotationsByEnterprise = async() => {
    const cnpj = getCnpj()
    const { data } = await axios.get(
        'http://localhost:8080/api/quotations/get-all-by-enterprise/' + cnpj
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

export const getAllBySellerAndClose = async() => {
    const cnpj = getCnpj()
    const { data } = await axios.get(
        'http://localhost:8080/api/quotations/close/' + cnpj
    )
    return data
}