package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.DTO.LoginDTO;
import com.projectzeus.springapi.DTO.ResponseLoginDTO;
import com.projectzeus.springapi.models.Enterprise;
import com.projectzeus.springapi.models.User;
import com.projectzeus.springapi.repository.EnterpriseRepository;
import com.projectzeus.springapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "*")
public class UserResource {

    @Autowired
    UserRepository users;

    @Autowired
    EnterpriseRepository enterprises;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO login) {
        User user = users.findOneByEmail(login.getEmail());

        if(user == null)
            return new ResponseEntity(HttpStatus.BAD_REQUEST);

        //LOGIN
        /*String newPassword = new BCryptPasswordEncoder().encode(user.getPassword());
        login.setPassword(newPassword);
        System.out.println(login.getPassword());
        System.out.println(user.getPassword());*/

        if(!user.getPassword().equals(login.getPassword()))
            return new ResponseEntity(HttpStatus.BAD_REQUEST);

        ResponseLoginDTO response = new ResponseLoginDTO(user.getCpf(), user.getEnterprise().getCnpj()  );
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping("/user/{cpf}")
    public ResponseEntity<User> getUser(@PathVariable("cpf") String cpf) {
        return new ResponseEntity(users.findOneByCpf(cpf), HttpStatus.OK);
    }

    @PostMapping("/user/create")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        User findUser = users.findOneByCpf(user.getCpf());

        if(findUser != null)
            return new ResponseEntity(HttpStatus.BAD_REQUEST);

        String newPassword = new BCryptPasswordEncoder().encode(user.getPassword());
        user.setPassword(newPassword);
        users.save(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/user/update")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        return new ResponseEntity<>(users.save(user), HttpStatus.OK);
    }

    @DeleteMapping("/user/delete")
    public ResponseEntity<String> deleteUser(@RequestBody User user) {
        users.delete(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
