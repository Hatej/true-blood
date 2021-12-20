package fer.progi.illidimusdigitus.trueblood.repository;

import fer.progi.illidimusdigitus.trueblood.model.HealthDataAnswered;
import fer.progi.illidimusdigitus.trueblood.model.HealthDataAnsweredId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface HealthDataAnsweredRepository extends JpaRepository<HealthDataAnswered,HealthDataAnsweredId> {


}
