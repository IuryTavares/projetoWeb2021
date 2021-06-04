import axios from 'axios';

export const registerProduct = async(name, description, limitPrice, quantity, brand) => {
    
    const { data } = await axios.post(
        'http://localhost:8080/api/product/create',
        { name, 
        description, 
        limitPrice, 
        quantity, 
        brand },
    )
}