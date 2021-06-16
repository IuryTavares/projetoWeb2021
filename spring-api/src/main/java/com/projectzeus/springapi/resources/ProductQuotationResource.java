package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.models.ProductQuotation;
import com.projectzeus.springapi.repository.ProductQuotationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class ProductQuotationResource {
    @Autowired
    ProductQuotationRepository productsQuotation;

    @GetMapping("/productQuotation/{id}")
    public ResponseEntity<ProductQuotation> getProductQuotation(@PathVariable("id") long id) {
        return new ResponseEntity(productsQuotation.findById(id), HttpStatus.OK);
    }

    @PostMapping("/productQuotation/create")
    public ResponseEntity<String> createProductQuotation(@RequestBody ProductQuotation productQuotation) {
        productsQuotation.save(productQuotation);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("productQuotation/update")
    public ResponseEntity<ProductQuotation> updateProductQuotation(@RequestBody ProductQuotation productQuotation) {
        return new ResponseEntity(productsQuotation.save(productQuotation), HttpStatus.OK);

    }

    @DeleteMapping("productQuotation/delete")
    public ResponseEntity<String> deleteUProductQuotation(@RequestBody ProductQuotation productQuotation) {
        productsQuotation.delete(productQuotation);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
