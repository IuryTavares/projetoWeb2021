import axios from 'axios';

export const registerBid = async(productsIds, quotationId, priceValue) => {
    const cnpj = "11111111"
    const { data } = await axios.post(
        'http://localhost:8080/api/bid/create/' + cnpj,
        { productsIds,
        quotationId,
        priceValue
        },
    )
}