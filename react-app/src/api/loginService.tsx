import axios from 'axios';

export const login = async(email: String, password: String) => {
    const { data } = await axios.post(
        'http://localhost:8080/api/login',
        { email, password }
    )
    return data
}