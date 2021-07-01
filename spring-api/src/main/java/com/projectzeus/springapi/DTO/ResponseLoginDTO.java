package com.projectzeus.springapi.DTO;

public class ResponseLoginDTO {

    private String cpf;
    private String cnpj;

    public ResponseLoginDTO(String cpf, String cnpj) {
        this.cpf = cpf;
        this.cnpj = cnpj;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
}
