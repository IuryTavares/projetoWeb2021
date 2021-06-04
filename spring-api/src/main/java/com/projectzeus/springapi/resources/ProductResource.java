package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.models.Product;
import com.projectzeus.springapi.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class ProductResource {

    @Autowired
    ProductRepository repository;

    @PostMapping("/register/product")
    public void addProduct(@RequestBody Product product) {
        repository.save(product);
    }
}
