package fer.progi.illidimusdigitus.trueblood.service;

import fer.progi.illidimusdigitus.trueblood.model.Blood;
import fer.progi.illidimusdigitus.trueblood.model.util.BloodType;

import java.util.List;
import java.util.Optional;

public interface BloodService {

    Optional<Blood> findByName(BloodType name);
    List<Blood> findAll();
}
