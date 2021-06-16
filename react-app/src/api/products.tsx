import axios from 'axios';

export const registerProduct = async(name, description, limitPrice, quantity, brand) => {
    const cnpj = "11111111"
    const { data } = await axios.post(
        'http://localhost:8080/api/product/create/' + cnpj,
        { name, 
        description, 
        limitPrice, 
        quantity, 
        brand },
    )
}

export const getAllProducts = async() => {
    const cnpj = "11111111"
    const { data } = await axios.get(
        'http://localhost:8080/api/products/' + cnpj,
    )
    return data
}