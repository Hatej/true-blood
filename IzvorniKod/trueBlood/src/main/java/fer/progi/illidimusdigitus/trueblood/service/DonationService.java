package fer.progi.illidimusdigitus.trueblood.service;

import java.util.List;
import java.util.Optional;

import fer.progi.illidimusdigitus.trueblood.model.Donation;
import fer.progi.illidimusdigitus.trueblood.model.User;

public interface DonationService {
	
	List<Donation> findByDonor(User donor);

	Optional<Donation> findById(Long id);

	void sendPDF(Donation donation, User usr);
}
