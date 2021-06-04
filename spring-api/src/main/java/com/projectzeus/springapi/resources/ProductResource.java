package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.models.Product;
import com.projectzeus.springapi.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class ProductResource {

    @Autowired
    ProductRepository products;

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable("id") long id) {
        return new ResponseEntity(products.findById(id), HttpStatus.OK);
    }

    @PostMapping("/product/create")
    public ResponseEntity<String> createProduct(@RequestBody Product product) {
        products.save(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("product/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) {
        return new ResponseEntity<>(products.save(product), HttpStatus.OK);

    }

    @DeleteMapping("product/delete")
    public ResponseEntity<String> deleteUProduct(@RequestBody Product product) {
        products.delete(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
