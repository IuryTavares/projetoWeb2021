package com.projectzeus.springapi.repository;

import com.projectzeus.springapi.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAllByEnterpriseId(Long id);
}
