package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.models.ProductQuotation;
import com.projectzeus.springapi.models.Quotation;
import com.projectzeus.springapi.repository.EnterpriseRepository;
import com.projectzeus.springapi.repository.ProductQuotationRepository;
import com.projectzeus.springapi.repository.QuotationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class QuotationResource {

    @Autowired
    QuotationRepository quotations;
    @Autowired
    ProductQuotationRepository products;
    @Autowired
    EnterpriseRepository enterprises;

    @GetMapping("/quotation/{id}")
    public ResponseEntity<Quotation> getQuotation(@PathVariable("id") long id) {
        return new ResponseEntity(quotations.findById(id), HttpStatus.OK);
    }

    @PostMapping("/quotation/create")
    public ResponseEntity<String> createQuotation(Quotation quotation, @RequestBody() List<Long> ids, String cnpj) {
        System.out.println(ids);

        //procurar o produto
        var productsToAdd = products.findProductQuotationByIdIn(ids);


        var logedEnterprise = enterprises.findOneByCnpj(cnpj);
        if(productsToAdd.size() != 0) {
//            if(quotation.getProducts() == null) {
//                quotation.setProducts(new ArrayList<ProductQuotation>());
//            }
//            quotation.getProducts().addAll(val);

        } else {
            System.out.println("deu ruim");
        }

        //transação


        //regras de negocios


        //salvar
        quotations.save(quotation);


        for (var product: productsToAdd) {

            //regras de negocios


            //salvar
            product.setQuotation(quotation);


            //se der erro rollback

        }


        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("quotation/update")
    public ResponseEntity<Quotation> updateQuotation(@RequestBody Quotation quotation) {
        return new ResponseEntity<>(quotations.save(quotation), HttpStatus.OK);

    }

    @DeleteMapping("quotation/delete")
    public ResponseEntity<String> deleteQuotation(@RequestBody Quotation quotation) {
        quotations.delete(quotation);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
