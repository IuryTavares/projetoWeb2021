package com.projectzeus.springapi.repository;

import com.projectzeus.springapi.models.Quotation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuotationRepository extends JpaRepository<Quotation, Long> {
}
