package com.projectzeus.springapi.DTO;

import java.util.List;

public class BidDTO {

    private List<Long> productsIds;
    private Long quotationId;

    public List<Long> getProductsIds() { return productsIds; }

    public void setProductsIds(List<Long> productsIds) { this.productsIds = productsIds; }

    public Long getQuotationId() { return quotationId; }

    public void setQuotationId(Long quotationId) { this.quotationId = quotationId; }
}
