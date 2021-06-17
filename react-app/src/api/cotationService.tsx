import axios from 'axios';

export const registerCotation = async(startDate, endDate, decription, productQuotations) => {
    const cnpj = "11111111"
    const { data } = await axios.post(
        'http://localhost:8080/api/quotation/create/' + cnpj,
        { startDate, 
        endDate, 
        decription, 
        productQuotations },
    )
}