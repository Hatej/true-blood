package fer.progi.illidimusdigitus.trueblood.service.impl;

import fer.progi.illidimusdigitus.trueblood.model.Blood;
import fer.progi.illidimusdigitus.trueblood.repository.BloodRepository;
import fer.progi.illidimusdigitus.trueblood.service.BloodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BloodServiceJpa implements BloodService {

    @Autowired
    private BloodRepository bloodRepo;

    @Override
    public Optional<Blood> findByName(String name) {
        return bloodRepo.findByName(name);
    }
}
