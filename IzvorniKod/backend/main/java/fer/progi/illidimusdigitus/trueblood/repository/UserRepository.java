package fer.progi.illidimusdigitus.trueblood.repository;

import fer.progi.illidimusdigitus.trueblood.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository {

    @Query("SELECT User FROM User u WHERE u.username = ?1 AND u.password = ?2 ")
    Optional<User> getUsernamePassword(String username, String password);
}
