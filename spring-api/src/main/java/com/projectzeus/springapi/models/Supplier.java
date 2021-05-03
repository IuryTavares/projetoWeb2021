package com.projectzeus.springapi.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Entity
@Table(name = "supplier")
public class Supplier extends Enterprise implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Product> products;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
