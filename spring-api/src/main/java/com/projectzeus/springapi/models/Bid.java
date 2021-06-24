package com.projectzeus.springapi.models;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "bid")
public class Bid implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    @JoinColumn(name = "id_enterprise")
    private Enterprise enterprise;
    @ManyToOne
    @JoinColumn(name = "id_quotation")
    private Quotation quotation;
    private BigDecimal priceValue;

    public long getId() { return id; }

    public void setId(long id) { this.id = id; }

    public Enterprise getEnterprise() { return enterprise; }

    public void setEnterprise(Enterprise enterprise) { this.enterprise = enterprise; }

    public Quotation getQuotation() { return quotation; }

    public void setQuotation(Quotation quotation) { this.quotation = quotation; }

    public BigDecimal getPriceValue() { return priceValue; }

    public void setPriceValue(BigDecimal priceValue) { this.priceValue = priceValue; }
}
