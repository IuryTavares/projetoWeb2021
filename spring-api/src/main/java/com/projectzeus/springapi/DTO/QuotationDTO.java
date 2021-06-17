package com.projectzeus.springapi.DTO;

import com.projectzeus.springapi.models.Quotation;

import java.util.List;

public class QuotationDTO {
    private Quotation quotation;
    private List<Long> ids;

    public Quotation getQuotation() { return quotation; }

    public void setQuotation(Quotation quotation) { this.quotation = quotation; }

    public List<Long> getIds() { return ids; }

    public void setIds(List<Long> ids) { this.ids = ids; }
}
