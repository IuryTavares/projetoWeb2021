import { Enterprise } from "./Enterprise";

export type User = {
    id,
    enterprise: Enterprise,
    name,
    birthDate,
    email,
    address,
    password,
    cpf
}