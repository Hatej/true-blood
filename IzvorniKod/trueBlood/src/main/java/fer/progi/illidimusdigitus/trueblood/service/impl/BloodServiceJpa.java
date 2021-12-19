package fer.progi.illidimusdigitus.trueblood.service.impl;

import fer.progi.illidimusdigitus.trueblood.controllers.BloodDTO;
import fer.progi.illidimusdigitus.trueblood.controllers.ConsumptionDTO;
import fer.progi.illidimusdigitus.trueblood.model.Blood;
import fer.progi.illidimusdigitus.trueblood.model.User;
import fer.progi.illidimusdigitus.trueblood.model.util.BloodType;
import fer.progi.illidimusdigitus.trueblood.repository.BloodRepository;
import fer.progi.illidimusdigitus.trueblood.service.BloodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BloodServiceJpa implements BloodService {

    @Autowired
    private BloodRepository bloodRepo;

    @Override
    public Optional<Blood> findByName(BloodType name) {
        return bloodRepo.findByNameOrderById(name);
    }

    @Override
    public List<Blood> findAll() {
       return bloodRepo.findAll();
    }
    
    public boolean updateBounds(BloodType type,BloodDTO bloodDTO){

        Optional<Blood> blood = findByName(type);

        if(blood.isEmpty())
            return false;

        Blood currBlood = blood.get();
        currBlood.setLowerbound(bloodDTO.getLowerbound());
        currBlood.setUpperbound(bloodDTO.getUpperbound());
        bloodRepo.save(currBlood);

        return true;
    }

	@Override
	public boolean consume(BloodType type, ConsumptionDTO dto) {
		Optional<Blood> blood = findByName(type);

        if(blood.isEmpty())
            return false;

        Blood currBlood = blood.get();
        int value = currBlood.getSupply() - dto.getQuantity();
        
        if(value < 0) return false;
        currBlood.setSupply(value);
        bloodRepo.save(currBlood);

        return true;
	}
}
