import { Cotation } from "./Cotation";
import { Enterprise } from "./Enterprise";
import { ProductQuotation } from "./ProductQuotation";

export type Bid = {
    id: number,
    enterprise: Enterprise,
    quotation: Cotation,
    priceValue: number
}