package fer.progi.illidimusdigitus.trueblood.service;

import fer.progi.illidimusdigitus.trueblood.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> listAll();

    User createUser(User user);

    Optional<User> findByUsername(String username);

    Optional<User> findByOib(String oib);
}
