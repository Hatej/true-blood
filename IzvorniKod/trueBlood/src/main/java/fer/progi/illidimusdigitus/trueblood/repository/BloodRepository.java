package fer.progi.illidimusdigitus.trueblood.repository;

import fer.progi.illidimusdigitus.trueblood.model.Blood;
import fer.progi.illidimusdigitus.trueblood.model.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodRepository extends CrudRepository<Blood,Long> {

}