package fer.progi.illidimusdigitus.trueblood.service.impl;

import fer.progi.illidimusdigitus.trueblood.model.HealthDataAnswered;
import fer.progi.illidimusdigitus.trueblood.repository.HealthDataAnsweredRepository;
import fer.progi.illidimusdigitus.trueblood.service.HealthDataAnsweredService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HealthDataAnsweredServiceJpa implements HealthDataAnsweredService {

    @Autowired
    HealthDataAnsweredRepository healthDataAnsweredRepository;

    @Override
    public void save(HealthDataAnswered healthDataAnswered) {
        healthDataAnsweredRepository.save(healthDataAnswered);
    }
}
