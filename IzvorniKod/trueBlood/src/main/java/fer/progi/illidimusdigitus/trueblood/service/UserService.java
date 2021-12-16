package fer.progi.illidimusdigitus.trueblood.service;

import fer.progi.illidimusdigitus.trueblood.model.User;
import fer.progi.illidimusdigitus.trueblood.controllers.EditUserInfoDTO;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> listAll();

    User createUser(User user);

    Optional<User> findByUsername(String username);

    Optional<User> findByActivation(String activation);

    Optional<User> findByOib(String oib);

    Optional<User> findByEmail(String email);

    boolean verify(String verificationCode, String password);

    void sendMail(User user, String siteURL);

    boolean updateUserActivated(User user);

    boolean updateUserInfo(String username, EditUserInfoDTO userDTO);
}
