package com.projectzeus.springapi.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "enterprise")
public class Enterprise implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String fantasyName;
    private String cnpj;
    private String address;

    public Enterprise() {}

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



}
