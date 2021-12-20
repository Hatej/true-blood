package fer.progi.illidimusdigitus.trueblood.controllers;

import fer.progi.illidimusdigitus.trueblood.model.Donation;
import fer.progi.illidimusdigitus.trueblood.model.HealthData;
import fer.progi.illidimusdigitus.trueblood.model.HealthDataAnswered;
import fer.progi.illidimusdigitus.trueblood.model.HealthDataAnsweredId;
import fer.progi.illidimusdigitus.trueblood.service.DonationService;
import fer.progi.illidimusdigitus.trueblood.service.HealthDataAnsweredService;
import fer.progi.illidimusdigitus.trueblood.service.HealthDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HealthDataController {

    @Autowired
    private HealthDataService healthDataService;

    @Autowired
    private HealthDataAnsweredService healthDataAnsweredService;

    @Autowired
    private DonationService donationService;

    @GetMapping("/healthData")
    public List<HealthData> getHealthData() {
        return healthDataService.getAllHealthData();
    }

   @PostMapping("/healthDataAnswered")
    public ResponseEntity answerHealthData(@RequestBody HealthAnswersDTO healthAnswers) {



        for(int i = 0; i < healthAnswers.getId_zdravstvenihOdgovor_donora().size(); i++) {

            if(donationService.findById(healthAnswers.getBr_doniranja()).isEmpty() || healthDataService.findById(i +1).isEmpty())
                return ResponseEntity.badRequest().build();

            Donation donation = donationService.findById(healthAnswers.getBr_doniranja()).get();
            HealthData healthData = healthDataService.findById(i+1).get();

            HealthDataAnswered healthDataAnswered = new HealthDataAnswered(donation,healthData,healthAnswers.getId_zdravstvenihOdgovor_donora().get((long)(i + 1)));
            System.out.println(healthDataAnswered.getDonation().getId());

            healthDataAnsweredService.save(healthDataAnswered);

        }


        return ResponseEntity.ok().build();
    }
}
