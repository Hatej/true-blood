package fer.progi.illidimusdigitus.trueblood.controllers;

import fer.progi.illidimusdigitus.trueblood.model.*;
import fer.progi.illidimusdigitus.trueblood.service.BloodService;
import fer.progi.illidimusdigitus.trueblood.service.DonationService;
import fer.progi.illidimusdigitus.trueblood.service.HealthDataAnsweredService;
import fer.progi.illidimusdigitus.trueblood.service.HealthDataService;
import fer.progi.illidimusdigitus.trueblood.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class HealthDataController {

    @Autowired
    private HealthDataService healthDataService;

    @Autowired
    private HealthDataAnsweredService healthDataAnsweredService;

    @Autowired
    private DonationService donationService;

    @Autowired
    private UserService userService;
    
    @Autowired
    private BloodService bloodService;

    @GetMapping("/healthData")
    @Secured({ "ROLE_ADMIN", "ROLE_DJELATNIK" })
    public List<HealthData> getHealthData() {
        return healthDataService.getAllHealthData();
    }

    @CrossOrigin("*")
    @PostMapping("/healthDataAnswered")
    @Secured("ROLE_DJELATNIK")
    public ResponseEntity answerHealthData(@RequestBody HealthAnswersDTO healthAnswers,@RequestHeader String authorization) {

       authorization = authorization.substring(6);
       String decodedString = new String(Base64.getDecoder().decode(authorization));
       String[] userPass = decodedString.split(":");

       if (userService.findByUsername(userPass[0]).isEmpty()) {
           return ResponseEntity.badRequest().build();
       }

       User usr = userService.findByUsername(userPass[0]).get();
       String username = usr.getUsername();
       System.out.println(username);

       String id_donora = healthAnswers.getId_donora();
       System.out.println(id_donora);

       String mjesto_darivanja = healthAnswers.getMjesto_darivanja();
       System.out.println(mjesto_darivanja);

       Date date = new Date();

       GregorianCalendar cal = new GregorianCalendar();
       cal.setTime(date);
       cal.add(Calendar.DATE, 0);
       cal.set(Calendar.HOUR_OF_DAY, 0);
       cal.set(Calendar.MINUTE, 0);
       cal.set(Calendar.SECOND, 0);
       cal.set(Calendar.MILLISECOND, 0);
       date = cal.getTime();



       System.out.println(date);

       if(userService.findByUsername(id_donora).isEmpty())
            return  ResponseEntity.badRequest().build();
       if(userService.findByUsername(username).isEmpty())
            return  ResponseEntity.badRequest().build();

       User donor = userService.findByUsername(id_donora).get();
       User empl = userService.findByUsername(username).get();

       Donation donation = new Donation(date,mjesto_darivanja,true,donor,empl);
       boolean success = true;
       donationService.save(donation);

       long br_doniranja = donation.getId();
       System.out.println(br_doniranja);

       boolean notDone = true;

       int broj_kljuceva = healthAnswers.getUpitnik().keySet().size();

       if(broj_kljuceva != 20)
            return ResponseEntity.badRequest().build();

       for(int i = 0; i < healthAnswers.getUpitnik().keySet().size(); i++) {

            if(healthDataService.findById(i+1).isEmpty())
                return ResponseEntity.badRequest().build();

            HealthData healthData = healthDataService.findById(i + 1).get();

            HealthDataAnsweredId healthDataAnsweredId = new HealthDataAnsweredId(donation,healthData);

            if(healthDataAnsweredService.findById(healthDataAnsweredId).isPresent())
                return ResponseEntity.badRequest().build();

            long id_zdravstvenih = i + 1;
            boolean odgovor = healthAnswers.getUpitnik().get((long)(i + 1));

            if(odgovor && notDone) {
                donation.setSuccess(false);
                donationService.save(donation);
                success = false;
                if(healthData.getCriterion() == false) {
                    donor.setRejected(true);
                    userService.save(donor);
                }
                notDone = false;
            }
            healthDataAnsweredService.save(br_doniranja,id_zdravstvenih,odgovor);

        }
       
       	if(success == true) {
       		
       		bloodService.incrementSupply(donor.getBloodType(), 5);
       		
	       	Blood blood = bloodService.findByName(donor.getBloodType().getName()).get();
	        
	        if(blood.getSupply() > blood.getUpperbound()){
	        	bloodService.sendNotifUpper(blood);
	        }
       	}

        return ResponseEntity.ok().build();
    }
}
