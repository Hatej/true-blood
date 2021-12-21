package fer.progi.illidimusdigitus.trueblood.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fer.progi.illidimusdigitus.trueblood.model.Blood;
import fer.progi.illidimusdigitus.trueblood.model.Donation;
import fer.progi.illidimusdigitus.trueblood.model.User;

@Repository
public interface DonationRepository extends JpaRepository<Donation,Long>{
	
	List<Donation> findByDonor(User donor);
	
	Optional<Donation> findById(Long id);
	
	List<Donation> findByDate(Date date);

}
