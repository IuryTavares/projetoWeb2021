package com.projectzeus.springapi.config;

import com.projectzeus.springapi.models.User;
import com.projectzeus.springapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

@Repository
public class UserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = repository.findOneByEmail(email);
        if(user == null) {
            throw new UsernameNotFoundException("Usuário não encontrado");
        }
        System.out.println(user.getPassword());
        return user;
    }
}
