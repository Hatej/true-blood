package fer.progi.illidimusdigitus.trueblood.service.impl;

import fer.progi.illidimusdigitus.trueblood.model.Role;
import fer.progi.illidimusdigitus.trueblood.repository.RoleRepository;
import fer.progi.illidimusdigitus.trueblood.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleServiceJpa implements RoleService {

    @Autowired
    private RoleRepository roleRepo;

    @Override
    public Optional<Role> findByName(String name) {
        return roleRepo.findByName(name);
    }
}
