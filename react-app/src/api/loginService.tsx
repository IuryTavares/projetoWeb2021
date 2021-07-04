import axios from 'axios';
import { parseCookies } from 'nookies';
import { getCpf } from './settings';

export const login = async(email: String, password: String) => {
    const { data } = await axios.post(
        'http://localhost:8080/api/login',
        { email, password }
    )
    return data
}

export const getUser = async(ctx) => {
    const cookies = parseCookies(ctx)
    const { data } = await axios.get(
        'http://localhost:8080/user/' + cookies.cpf
    )
    return data
}