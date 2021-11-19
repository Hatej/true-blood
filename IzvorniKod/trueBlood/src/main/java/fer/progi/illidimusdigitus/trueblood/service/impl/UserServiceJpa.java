package fer.progi.illidimusdigitus.trueblood.service.impl;

import fer.progi.illidimusdigitus.trueblood.model.User;
import fer.progi.illidimusdigitus.trueblood.repository.UserRepository;
import fer.progi.illidimusdigitus.trueblood.service.RequestDeniedException;
import fer.progi.illidimusdigitus.trueblood.service.UserService;
import javassist.Loader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceJpa implements UserService, UserDetailsService {

    @Autowired
    private UserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> usr = userRepo.findByUsername(username);
        if (usr.isEmpty()) {
            throw new UsernameNotFoundException("User not found!");
        }

        User user = usr.get();

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole().toString()));
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

    @Override
    public List<User> listAll() {
        return userRepo.findAll();
    }

    @Override
    public User createUser(User user) {
        Assert.notNull(user, "User object must be given!");
        if (!userRepo.findByOib(user.getOib()).isEmpty()) {
            throw new RequestDeniedException("User with the given oib already exists!");
        }
        return userRepo.save(user);
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return userRepo.findByUsername(username);
    }

    @Override
    public Optional<User> findByOib(String oib) {
        return userRepo.findByOib(oib);
    }
}
