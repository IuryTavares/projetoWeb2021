import axios from 'axios';
import { getCnpj, getCookie } from './settings';

export const registerProduct = async(name, description, limitPrice, quantity, brand) => {
    const cnpj = getCookie('cnpj')
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
    const cnpj = getCnpj()
    const { data } = await axios.get(
        'http://localhost:8080/api/products/' + cnpj,
    )
    return data
}