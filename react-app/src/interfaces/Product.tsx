import { Enterprise } from "./Enterprise";

export type Product = {
    id,
    enterprise: Enterprise,
    name, 
    description, 
    limitPrice, 
    quantity, 
    brand,
    checkCotation: false
}