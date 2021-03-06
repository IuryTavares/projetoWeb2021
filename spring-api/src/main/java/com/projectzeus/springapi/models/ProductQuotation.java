package com.projectzeus.springapi.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "product_quotation")
public class ProductQuotation implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "id_quotation")
    private Quotation quotation;
    private String name;
    private String description;
    private BigDecimal limitPrice;
    private BigDecimal quantity;
    private String brand;

    public ProductQuotation() {}

    public ProductQuotation(Quotation quotation, String name, String description, BigDecimal limitPrice, BigDecimal quantity, String brand) {
        this.quotation = quotation;
        this.name = name;
        this.description = description;
        this.limitPrice = limitPrice;
        this.quantity = quantity;
        this.brand = brand;
    }

    public Quotation getQuotation() {
        return quotation;
    }

    public void setQuotation(Quotation quotation) {
        this.quotation = quotation;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getLimitPrice() {
        return limitPrice;
    }

    public void setLimitPrice(BigDecimal limitPrice) {
        this.limitPrice = limitPrice;
    }

    public BigDecimal getQuantity() {
        return quantity;
    }

    public void setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
}
