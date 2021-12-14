package fer.progi.illidimusdigitus.trueblood.repository;

import fer.progi.illidimusdigitus.trueblood.model.Blood;
import fer.progi.illidimusdigitus.trueblood.model.util.BloodType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BloodRepository extends JpaRepository<Blood,Long> {

    Optional<Blood> findByName(BloodType name);
}