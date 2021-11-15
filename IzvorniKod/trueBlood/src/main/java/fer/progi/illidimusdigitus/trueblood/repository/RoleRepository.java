package fer.progi.illidimusdigitus.trueblood.repository;

import fer.progi.illidimusdigitus.trueblood.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {

    Optional<Role> findByName(String name);
}
