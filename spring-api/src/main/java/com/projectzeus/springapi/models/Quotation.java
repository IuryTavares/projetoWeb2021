package com.projectzeus.springapi.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Entity
@Table(name = "quotation")
public class Quotation implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String description;
    private Date endDate;
    private Date startDate;
    @ManyToOne
    @JoinColumn(name = "id_enterprise")
    private Enterprise Enterprise;
    @OneToMany(mappedBy = "quotation", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProductQuotation> productQuotations;

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

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Enterprise getEnterprise() { return Enterprise; }

    public void setEnterprise(Enterprise enterprise) { Enterprise = enterprise; }

    public List<ProductQuotation> getProductsQuotations() {
        return productQuotations;
    }

    public void setProductsQuotations(List<ProductQuotation> productQuotations) {
        this.productQuotations = productQuotations;
    }
}
