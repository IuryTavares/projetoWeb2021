package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.models.Enterprise;
import com.projectzeus.springapi.repository.EnterpriseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api")
public class EnterpriseResource {

    @Autowired
    EnterpriseRepository repository;

    @GetMapping("/register/enterprise")
    public void addEnterprise(Enterprise enterprise) { repository.save(enterprise); }
}
