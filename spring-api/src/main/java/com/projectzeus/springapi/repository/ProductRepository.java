package com.projectzeus.springapi.repository;

import com.projectzeus.springapi.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
