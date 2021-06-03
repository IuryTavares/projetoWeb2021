package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.models.Enterprise;
import com.projectzeus.springapi.repository.EnterpriseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path ="/api")
@CrossOrigin(origins = "*")
public class EnterpriseResource {

    @Autowired
    EnterpriseRepository repository;

    @PostMapping("/register/enterprise")
    public void addEnterprise(@RequestBody Enterprise enterprise) { repository.save(enterprise); }
}
