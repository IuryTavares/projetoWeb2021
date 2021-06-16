package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.models.Enterprise;
import com.projectzeus.springapi.models.Product;
import com.projectzeus.springapi.repository.EnterpriseRepository;
import com.projectzeus.springapi.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class ProductResource {

    @Autowired
    ProductRepository products;
    @Autowired
    EnterpriseRepository enterprises;

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable("id") long id) {
        return new ResponseEntity(products.findById(id), HttpStatus.OK);
    }

    @GetMapping("/products/{cnpj}")
    public ResponseEntity<List<Product>> getAll(@PathVariable("cnpj") String cnpj) {
        Enterprise loggedEnterprise = enterprises.findOneByCnpj(cnpj);
        if(loggedEnterprise != null) {
            List<Product> allProducts = products.findAllByEnterpriseId(loggedEnterprise.getId());
            return new ResponseEntity(allProducts, HttpStatus.OK);
        }
        return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/product/create/{cnpj}")
    public ResponseEntity<String> createProduct(@RequestBody Product product, @PathVariable("cnpj") String cnpj) {
        Enterprise loggedEnterprise = enterprises.findOneByCnpj(cnpj);
        if(loggedEnterprise != null) {
            product.setEnterprise(loggedEnterprise);
            products.save(product);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("product/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) {
        return new ResponseEntity(products.save(product), HttpStatus.OK);

    }

    @DeleteMapping("product/delete")
    public ResponseEntity<String> deleteUProduct(@RequestBody Product product) {
        products.delete(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
