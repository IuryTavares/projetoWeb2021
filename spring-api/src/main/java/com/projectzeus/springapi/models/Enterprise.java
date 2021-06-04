package com.projectzeus.springapi.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "enterprise")
public class Enterprise implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String fantasyName;
    private String cnpj;
    private String address;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Product> products;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Quotation> quotations;

    public Enterprise() {}

    //private User represetative;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<User> users;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFantasyName() {
        return fantasyName;
    }

    public void setFantasyName(String fantasyName) {
        this.fantasyName = fantasyName;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getAddress() { return address; }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<Product> getProducts() { return products; }

    public void setProducts(List<Product> products) { this.products = products; }

    public List<Quotation> getQuotations() { return quotations; }

    public void setQuotations(List<Quotation> quotations) { this.quotations = quotations; }
}
