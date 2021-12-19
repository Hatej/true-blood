package fer.progi.illidimusdigitus.trueblood.controllers;

import java.sql.Timestamp;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fer.progi.illidimusdigitus.trueblood.model.Blood;
import fer.progi.illidimusdigitus.trueblood.model.Consumption;
import fer.progi.illidimusdigitus.trueblood.model.User;
import fer.progi.illidimusdigitus.trueblood.model.util.BloodType;
import fer.progi.illidimusdigitus.trueblood.service.BloodService;
import fer.progi.illidimusdigitus.trueblood.service.ConsumptionService;
import fer.progi.illidimusdigitus.trueblood.service.UserService;
@RestController
public class ConsumptionController {

	@Autowired
    private ConsumptionService consumptionService;
	@Autowired
    private BloodService bloodService;
	@Autowired
    private UserService userService;
	
	@CrossOrigin(origins = "*")
    @PostMapping("/recordChange")
    public ResponseEntity<Consumption> consumeBlood(@RequestBody ConsumptionDTO dto, HttpServletRequest request) {

        BloodType type = switch(dto.getBloodType()) {
            case "A+" -> BloodType.A_PLUS;
            case "A-" -> BloodType.A_MINUS;
            case "B+" -> BloodType.B_PLUS;
            case "B-" -> BloodType.B_MINUS;
            case "0+" -> BloodType.ZERO_PLUS;
            case "0-" -> BloodType.ZERO_MINUS;
            case "AB+" -> BloodType.AB_PLUS;
            case "AB-" -> BloodType.AB_MINUS;
            default -> BloodType.A_PLUS;
        };
        Blood blood = bloodService.findByName(type).get();
        User usr = userService.findByUsername(dto.getEmployee()).get();
        boolean req = bloodService.consume(type, dto);
        
        Consumption consumption = new Consumption(Timestamp.valueOf(dto.getTimestamp()), dto.getQuantity(), dto.getLocation(),blood , usr);
        //treba dodati da samo djelatnik banke moze smanjiti potrosnju
        //if(req == false) return ResponseEntity.badRequest();
        consumptionService.makeConsump(consumption);
        
        return ResponseEntity.ok().build();
    }
}
