package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.models.Enterprise;
import com.projectzeus.springapi.models.User;
import com.projectzeus.springapi.repository.EnterpriseRepository;
import com.projectzeus.springapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@RequestMapping(path ="/api")
@CrossOrigin(origins = "*")
public class EnterpriseResource {

    @Autowired
    EnterpriseRepository enterprises;
    @Autowired
    UserRepository users;

    @GetMapping("/enterprise/{id}")
    public ResponseEntity<Enterprise> getEnterprise(@PathVariable("id") long id) {
        return new ResponseEntity(enterprises.findById(id), HttpStatus.OK);
    }

    @PostMapping("/enterprise/create/{cpf}")
    public ResponseEntity<String> createEnterprise(@RequestBody Enterprise enterprise, @PathVariable("cpf") String cpf) {
        User userLogged = users.findOneByCpf(cpf);
        enterprises.save(enterprise);
        if(userLogged != null) {
            userLogged.setEnterprise(enterprise);
            //userLogged.getEnterprise().setId(enterprise.getId());
            users.save(userLogged);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("enterprise/update")
    public ResponseEntity<Enterprise> updateEnterprise(@RequestBody Enterprise enterprise) {
        return new ResponseEntity<>(enterprises.save(enterprise), HttpStatus.OK);

    }

    @DeleteMapping("enterprise/delete")
    public ResponseEntity<String> deleteEnterprise(@RequestBody Enterprise enterprise) {
        enterprises.delete(enterprise);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
