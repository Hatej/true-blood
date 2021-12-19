package fer.progi.illidimusdigitus.trueblood.controllers;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fer.progi.illidimusdigitus.trueblood.model.Donation;
import fer.progi.illidimusdigitus.trueblood.model.User;
import fer.progi.illidimusdigitus.trueblood.service.DonationService;
import fer.progi.illidimusdigitus.trueblood.service.UserService;

@RestController
public class DonationController {
	 @Autowired
	 private UserService userService;
	 
	 @Autowired
	 private DonationService donationService;
	 
	 @CrossOrigin(origins = "*")
	 @RequestMapping(value = "/donations",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
     public List<DonationDTO> getDonations(@RequestHeader String username) {
        User usr = userService.findByUsername(username).get();
        
        List<Donation> donations = donationService.findByDonor(usr);
        List<DonationDTO> response = new LinkedList();
        for(Donation donation: donations) {
        	DonationDTO don = new DonationDTO();
        	
        	don.setId(donation.getId());
        	don.setDonationDate(donation.getDate());
        	don.setLocation(donation.getDonationPlace());
        	don.setSuccess(donation.getSuccess());
        	
        	response.add(don);
        }
        return response;
     }
	 
	@CrossOrigin(origins = "*")
    @PostMapping("/generatePDF")
    public ResponseEntity<String> generatePDF(@RequestHeader Long id) {
        Donation donation = donationService.findById(id).get();
        User usr = userService.findByUsername(donation.getDonor().getUsername()).get();
        
        donationService.sendPDF(donation, usr);
		return ResponseEntity.ok("PDF generated!");
    }
}
