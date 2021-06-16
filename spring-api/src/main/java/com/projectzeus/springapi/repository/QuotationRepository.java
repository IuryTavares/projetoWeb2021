package com.projectzeus.springapi.repository;

import com.projectzeus.springapi.models.Enterprise;
import com.projectzeus.springapi.models.Quotation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface QuotationRepository extends JpaRepository<Quotation, Long> {
}
