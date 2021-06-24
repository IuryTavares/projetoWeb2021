import axios from 'axios';

export const registerCotation = async(startDate, endDate, description, ids) => {
    const cnpj = "11111111111111"
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

export const getAllProductsCotations = async(id) => {
    const { data } = await axios.get(
        'http://localhost:8080/api/productQuotation/' + id
    )
    return data
}