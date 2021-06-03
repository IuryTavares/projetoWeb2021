package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.models.User;
import com.projectzeus.springapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "*")
public class UserResource {

    @Autowired
    UserRepository repository;

    @PostMapping("/register/user")
    public void addUser(@RequestBody User user) {
        repository.save(user);
    }
}
