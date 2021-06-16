package com.projectzeus.springapi.repository;

import com.projectzeus.springapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    User findOneByEmail(String email);
}
