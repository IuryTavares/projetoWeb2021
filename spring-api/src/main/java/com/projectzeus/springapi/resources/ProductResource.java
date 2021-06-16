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
public class ProductResource {

    @Autowired
    ProductQuotationRepository products;

    @GetMapping("/product/{id}")
    public ResponseEntity<ProductQuotation> getProduct(@PathVariable("id") long id) {
        return new ResponseEntity(products.findById(id), HttpStatus.OK);
    }

    @PostMapping("/product/create")
    public ResponseEntity<String> createProduct(ProductQuotation productQuotation) {
        products.save(productQuotation);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("product/update")
    public ResponseEntity<ProductQuotation> updateProduct(@RequestBody ProductQuotation productQuotation) {
        return new ResponseEntity<>(products.save(productQuotation), HttpStatus.OK);

    }

    @DeleteMapping("product/delete")
    public ResponseEntity<String> deleteUProduct(@RequestBody ProductQuotation productQuotation) {
        products.delete(productQuotation);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
