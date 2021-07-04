import axios from 'axios';
import { getCnpj } from './settings';
import { parseCookies } from 'nookies';
import nookies from 'nookies'

export const registerProduct = async(name, description, limitPrice, quantity, brand) => {
    const cookies = parseCookies()
    const { data } = await axios.post(
        'http://localhost:8080/api/product/create/' + cookies.cnpj,
        { name, 
        description, 
        limitPrice, 
        quantity, 
        brand },
    )
}

export const getAllProducts = async(ctx) => {
    const cookies = parseCookies(ctx)
    const { data } = await axios.get(
        'http://localhost:8080/api/products/' + cookies.cnpj,
    )
    return data
}