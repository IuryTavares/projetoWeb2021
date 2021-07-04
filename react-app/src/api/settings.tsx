import { parseCookies } from "nookies";

export function isLogged () {
    const cookies = parseCookies()
    if (!cookies.cpf && !cookies.cnpj) {
        return false;
    }
    return true;
}

export function getCpf () {
    return localStorage.getItem ('cpf')
}

export function setCpf (cpf: string) {
    localStorage.setItem ('cpf', cpf)
}

export function setTempCpf (cpf: string) {
    localStorage.setItem ('cpf', cpf)
}