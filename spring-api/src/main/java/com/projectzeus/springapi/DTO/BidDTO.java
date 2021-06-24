package com.projectzeus.springapi.DTO;

import java.math.BigDecimal;
import java.util.List;

public class BidDTO {

    private Long quotationId;
    private BigDecimal priceValue;

    public Long getQuotationId() { return quotationId; }

    public void setQuotationId(Long quotationId) { this.quotationId = quotationId; }

    public BigDecimal getPriceValue() { return priceValue; }

    public void setPriceValue(BigDecimal priceValue) { this.priceValue = priceValue; }
}
