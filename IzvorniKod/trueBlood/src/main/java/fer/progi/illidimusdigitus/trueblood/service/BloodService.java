package fer.progi.illidimusdigitus.trueblood.service;

import fer.progi.illidimusdigitus.trueblood.model.Blood;

import java.util.Optional;

public interface BloodService {

    Optional<Blood> findByName(String name);
}
