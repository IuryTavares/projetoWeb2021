package com.projectzeus.springapi.repository;

import com.projectzeus.springapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findOneByCpf(String cpf);
    User findOneByEmail(String email);
}
