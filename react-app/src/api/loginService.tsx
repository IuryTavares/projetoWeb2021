import axios from 'axios';
import { getCpf } from './settings';

export const login = async(email: String, password: String) => {
    const { data } = await axios.post(
        'http://localhost:8080/api/login',
        { email, password }
    )
    return data
}

export const getUser = async() => {
    const cpf = getCpf()
    const { data } = await axios.get(
        'http://localhost:8080/user/' + cpf
    )
    return data
}