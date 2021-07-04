import { Cotation } from "./Cotation";
import { Enterprise } from "./Enterprise";

export type Bid = {
    id: number,
    enterprise: Enterprise,
    quotation: Cotation,
    priceValue: number
}