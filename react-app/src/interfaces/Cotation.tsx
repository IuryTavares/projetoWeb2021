import { Bid } from "./Bid";
import { Enterprise } from "./Enterprise";
import { ProductQuotation } from "./ProductQuotation";

export type Cotation = {
    id,
    name, 
    description,
    endDate,
    startDate,
    productsQuotations: ProductQuotation[],
    enterprise: Enterprise,
    open,
    seller: Enterprise
}