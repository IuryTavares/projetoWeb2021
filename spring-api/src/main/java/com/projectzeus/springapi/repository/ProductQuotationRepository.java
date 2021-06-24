package com.projectzeus.springapi.repository;

import com.projectzeus.springapi.models.ProductQuotation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductQuotationRepository extends JpaRepository<ProductQuotation, Long> {
    List<ProductQuotation> findProductQuotationByIdIn(List<Long> ids);
    ProductQuotation findById(long id);
    List<ProductQuotation> findProductQuotationByQuotationId(Long id);
    List<ProductQuotation> findProductByIdIn(List<Long> ids);
}
