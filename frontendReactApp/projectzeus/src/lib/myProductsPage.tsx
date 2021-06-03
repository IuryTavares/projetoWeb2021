import axios from 'axios';

export const addProduct = async(name, description, limitPrice, quantity, brand) => {
    
    const { data } = await axios.post(
        'http://localhost:8080/api/register/user',
        { name, 
        description, 
        limitPrice, 
        quantity, 
        brand },
    )
}