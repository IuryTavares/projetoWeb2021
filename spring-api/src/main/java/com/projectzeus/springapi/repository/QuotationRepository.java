package com.projectzeus.springapi.repository;

import com.projectzeus.springapi.models.Quotation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface QuotationRepository extends JpaRepository<Quotation, Long> {
    Quotation findOneById(Long id);
    Quotation findQuotationById(Long id);
    List<Quotation> findQuotationsByEnterpriseId(Long id);
    List<Quotation> findAllByOpenIsTrue();
    List<Quotation> findBySellerCnpjAndOpenIsFalse(String cnpj);
}
