package com.projectzeus.springapi.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Entity
@Table(name="buyer")
public class Buyer extends Enterprise implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Quotation> quotations;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Quotation> getQuotations() {
        return quotations;
    }

    public void setQuotations(List<Quotation> quotations) {
        this.quotations = quotations;
    }
}
