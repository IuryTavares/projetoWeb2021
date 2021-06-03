package com.projectzeus.springapi.repository;

import com.projectzeus.springapi.models.Enterprise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnterpriseRepository extends JpaRepository<Enterprise, Long>{ }
