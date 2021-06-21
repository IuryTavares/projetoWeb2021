import { Cotation } from "./Cotation";
import { Enterprise } from "./Enterprise";
import { ProductQuotation } from "./ProductQuotation";

export type Bid = {
    productQuotations: ProductQuotation[],
    enterprise: Enterprise,
    Cotation: Cotation,
    priceValue: number
}