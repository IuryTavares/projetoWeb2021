package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.models.Product;
import com.projectzeus.springapi.models.User;
import com.projectzeus.springapi.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class ProductResource {

    @Autowired
    ProductRepository repository;

    @PostMapping("/register/product")
    public void addProduct(@RequestBody Product product) {
        repository.save(product);
    }
}
