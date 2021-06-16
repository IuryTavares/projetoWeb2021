package com.projectzeus.springapi.repository;

import com.projectzeus.springapi.models.Enterprise;
import com.projectzeus.springapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface EnterpriseRepository extends JpaRepository<Enterprise, Long>{
    Enterprise findOneByCnpj(String cnpj);

}
