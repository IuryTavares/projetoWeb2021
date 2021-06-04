package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.models.User;
import com.projectzeus.springapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "*")
public class UserResource {

    @Autowired
    UserRepository users;

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") long id) {
        return new ResponseEntity(users.findById(id), HttpStatus.OK);
    }

    @PostMapping("/user/create")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        users.save(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("user/update")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        return new ResponseEntity<>(users.save(user), HttpStatus.OK);

    }

    @DeleteMapping("user/delete")
    public ResponseEntity<String> deleteUser(@RequestBody User user) {
        users.delete(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}