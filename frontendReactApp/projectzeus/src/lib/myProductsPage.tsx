import axios from 'axios';

export const registerProduct = async(name, description, limitPrice, quantity, brand) => {
    
    const { data } = await axios.post(
        'http://localhost:8080/api/register/product',
        { name, 
        description, 
        limitPrice, 
        quantity, 
        brand },
    )
}