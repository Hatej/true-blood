package fer.progi.illidimusdigitus.trueblood.service;

import fer.progi.illidimusdigitus.trueblood.model.User;

import java.util.List;

public interface UserService {
    List<User> listAll();

    User createUser(User user);
}
