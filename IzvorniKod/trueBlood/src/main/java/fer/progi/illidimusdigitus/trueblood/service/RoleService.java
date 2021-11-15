package fer.progi.illidimusdigitus.trueblood.service;

import fer.progi.illidimusdigitus.trueblood.model.Role;

import java.util.Optional;

public interface RoleService {

    Optional<Role> findByName(String name);
}
